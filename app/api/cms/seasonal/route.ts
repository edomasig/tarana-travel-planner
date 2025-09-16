import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const season = searchParams.get('season')

    if (season) {
      // Get specific season with all related data
      const seasonalContent = await prisma.seasonalContent.findUnique({
        where: { season },
        include: {
          destinations: {
            orderBy: { order: 'asc' }
          },
          itinerary: {
            include: {
              days: {
                orderBy: { day: 'asc' },
                include: {
                  activities: {
                    orderBy: { order: 'asc' }
                  }
                }
              }
            }
          },
          tips: true
        }
      })

      if (!seasonalContent) {
        return NextResponse.json({ error: 'Season not found' }, { status: 404 })
      }

      return NextResponse.json(seasonalContent)
    } else {
      // Get all seasons (overview)
      const seasons = await prisma.seasonalContent.findMany({
        select: {
          id: true,
          season: true,
          title: true,
          description: true,
          status: true,
          published: true,
          updatedAt: true
        },
        orderBy: { season: 'asc' }
      })

      return NextResponse.json(seasons)
    }
  } catch (error) {
    console.error('Failed to fetch seasonal content:', error)
    return NextResponse.json({ error: 'Failed to fetch seasonal content' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    const {
      season,
      title,
      description,
      featuredImage,
      months,
      temperature,
      weather,
      bestFor,
      events,
      metaTitle,
      metaDescription,
      status = 'DRAFT',
      published = false,
      destinations = [],
      itinerary,
      tips
    } = data

    const seasonalContent = await prisma.seasonalContent.create({
      data: {
        season,
        title,
        description,
        featuredImage,
        months,
        temperature,
        weather,
        bestFor,
        events,
        metaTitle,
        metaDescription,
        status,
        published,
        destinations: destinations.length > 0 ? {
          create: destinations.map((dest: any, index: number) => ({
            name: dest.name,
            location: dest.location,
            description: dest.description,
            image: dest.image,
            rating: dest.rating,
            bestTime: dest.bestTime,
            budget: dest.budget,
            highlights: dest.highlights || [],
            prompt: dest.prompt,
            order: index
          }))
        } : undefined,
        itinerary: itinerary ? {
          create: {
            title: itinerary.title,
            duration: itinerary.duration,
            budget: itinerary.budget,
            difficulty: itinerary.difficulty,
            prompt: itinerary.prompt,
            days: itinerary.days ? {
              create: itinerary.days.map((day: any) => ({
                day: day.day,
                location: day.location,
                image: day.image,
                activities: day.activities ? {
                  create: day.activities.map((activity: any, index: number) => ({
                    time: activity.time,
                    activity: activity.activity,
                    description: activity.description,
                    cost: activity.cost,
                    type: activity.type,
                    tips: activity.tips,
                    order: index
                  }))
                } : undefined
              }))
            } : undefined
          }
        } : undefined,
        tips: tips ? {
          create: {
            packing: tips.packing || [],
            advice: tips.advice || []
          }
        } : undefined
      },
      include: {
        destinations: true,
        itinerary: {
          include: {
            days: {
              include: {
                activities: true
              }
            }
          }
        },
        tips: true
      }
    })

    return NextResponse.json(seasonalContent, { status: 201 })
  } catch (error) {
    console.error('Failed to create seasonal content:', error)
    return NextResponse.json({ error: 'Failed to create seasonal content' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    const { 
      id, 
      destinations = [], 
      itinerary, 
      tips, 
      ...updateData 
    } = data

    // For now, we'll use a simpler approach and delete/recreate the content
    // This ensures data consistency but is less efficient
    
    // First, update the main seasonal content
    await prisma.seasonalContent.update({
      where: { id },
      data: {
        title: updateData.title,
        description: updateData.description,
        featuredImage: updateData.featuredImage,
        months: updateData.months,
        temperature: updateData.temperature,
        weather: updateData.weather,
        bestFor: updateData.bestFor,
        events: updateData.events,
        metaTitle: updateData.metaTitle,
        metaDescription: updateData.metaDescription,
        status: updateData.status,
        published: updateData.published,
      }
    })

    // Since the nested relations have cascade delete, we can safely recreate them
    // by deleting and recreating the seasonal content would be overkill
    // Instead, let's recreate step by step using the existing API pattern
    
    // Delete existing destinations
    try {
      await prisma.seasonalDestination.deleteMany({
        where: { seasonId: id }
      })
    } catch (error) {
      console.log('No existing destinations to delete')
    }
    
    // Create new destinations
    if (destinations.length > 0) {
      await prisma.seasonalDestination.createMany({
        data: destinations.map((dest: any, index: number) => ({
          seasonId: id,
          name: dest.name,
          location: dest.location,
          description: dest.description,
          image: dest.image,
          rating: dest.rating,
          bestTime: dest.bestTime,
          budget: dest.budget,
          highlights: dest.highlights || [],
          prompt: dest.prompt,
          order: index
        }))
      })
    }

    // Handle itinerary updates - delete existing first
    try {
      await prisma.seasonalItinerary.deleteMany({
        where: { seasonId: id }
      })
    } catch (error) {
      console.log('No existing itinerary to delete')
    }

    // Create new itinerary
    if (itinerary) {
      await prisma.seasonalItinerary.create({
        data: {
          seasonId: id,
          title: itinerary.title,
          duration: itinerary.duration,
          budget: itinerary.budget,
          difficulty: itinerary.difficulty,
          prompt: itinerary.prompt,
          days: itinerary.days ? {
            create: itinerary.days.map((day: any) => ({
              day: day.day,
              location: day.location,
              image: day.image,
              activities: day.activities ? {
                create: day.activities.map((activity: any, index: number) => ({
                  time: activity.time,
                  activity: activity.activity,
                  description: activity.description,
                  cost: activity.cost,
                  type: activity.type,
                  tips: activity.tips,
                  order: index
                }))
              } : undefined
            }))
          } : undefined
        }
      })
    }

    // Handle tips updates
    try {
      await prisma.seasonalTips.deleteMany({
        where: { seasonId: id }
      })
    } catch (error) {
      console.log('No existing tips to delete')
    }

    if (tips) {
      await prisma.seasonalTips.create({
        data: {
          seasonId: id,
          packing: tips.packing || [],
          advice: tips.advice || []
        }
      })
    }

    // Fetch the complete updated data with all relations
    const completeData = await prisma.seasonalContent.findUnique({
      where: { id },
      include: {
        destinations: {
          orderBy: { order: 'asc' }
        },
        itinerary: {
          include: {
            days: {
              orderBy: { day: 'asc' },
              include: {
                activities: {
                  orderBy: { order: 'asc' }
                }
              }
            }
          }
        },
        tips: true
      }
    })

    return NextResponse.json(completeData)
  } catch (error) {
    console.error('Failed to update seasonal content:', error)
    return NextResponse.json({ error: 'Failed to update seasonal content' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Season ID required' }, { status: 400 })
    }

    await prisma.seasonalContent.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete seasonal content:', error)
    return NextResponse.json({ error: 'Failed to delete seasonal content' }, { status: 500 })
  }
}