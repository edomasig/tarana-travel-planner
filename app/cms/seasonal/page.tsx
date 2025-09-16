'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ImageUpload } from '@/components/ui/image-upload'
import { SeasonalImageUpload } from '@/components/ui/seasonal-image-upload'
import { 
  Calendar, 
  MapPin, 
  Thermometer, 
  Plus, 
  Edit, 
  Trash2, 
  Save,
  Eye,
  EyeOff
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface SeasonalContent {
  id: string
  season: string
  title: string
  description: string
  featuredImage?: string
  months: string
  temperature: string
  weather: string
  bestFor: string
  events: string
  metaTitle?: string
  metaDescription?: string
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'
  published: boolean
  updatedAt: string
  destinations?: Destination[]
  itinerary?: Itinerary
  tips?: Tips
}

interface Destination {
  id?: string
  name: string
  location: string
  description: string
  image?: string
  rating?: string
  bestTime?: string
  budget?: string
  highlights: string[]
  prompt?: string
}

interface Itinerary {
  id?: string
  title: string
  duration: string
  budget: string
  difficulty: string
  prompt?: string
  days: ItineraryDay[]
}

interface ItineraryDay {
  id?: string
  day: number
  location: string
  image?: string
  activities: Activity[]
}

interface Activity {
  id?: string
  time: string
  activity: string
  description: string
  cost?: string
  type: string
  tips?: string
}

interface Tips {
  id?: string
  packing: string[]
  advice: string[]
}

const SEASONS = [
  { value: 'holiday', label: 'Holiday Season', color: 'red' },
  { value: 'summer', label: 'Summer Season', color: 'orange' },
  { value: 'rainy', label: 'Rainy Season', color: 'blue' },
  { value: 'dry', label: 'Dry Season', color: 'green' }
]

export default function SeasonalCMSPage() {
  const [seasons, setSeasons] = useState<SeasonalContent[]>([])
  const [loading, setLoading] = useState(true)
  const [editingSeason, setEditingSeason] = useState<SeasonalContent | null>(null)
  const [showForm, setShowForm] = useState(false)
  const { toast } = useToast()

  // Form state
  const [formData, setFormData] = useState({
    season: '',
    title: '',
    description: '',
    featuredImage: '',
    months: '',
    temperature: '',
    weather: '',
    bestFor: '',
    events: '',
    metaTitle: '',
    metaDescription: '',
    status: 'DRAFT' as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED',
    published: false,
    destinations: [] as Destination[],
    itinerary: {
      title: '',
      duration: '',
      budget: '',
      difficulty: '',
      prompt: '',
      days: [] as ItineraryDay[]
    },
    tips: {
      packing: [] as string[],
      advice: [] as string[]
    }
  })

  useEffect(() => {
    fetchSeasons()
  }, [])

  const fetchSeasons = async () => {
    try {
      const response = await fetch('/api/cms/seasonal')
      if (response.ok) {
        const data = await response.json()
        setSeasons(data)
      } else {
        toast({
          title: 'Error',
          description: 'Failed to fetch seasonal content',
          variant: 'destructive'
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch seasonal content',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = editingSeason ? '/api/cms/seasonal' : '/api/cms/seasonal'
      const method = editingSeason ? 'PUT' : 'POST'
      const payload = editingSeason ? { id: editingSeason.id, ...formData } : formData

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        toast({
          title: 'Success',
          description: `Seasonal content ${editingSeason ? 'updated' : 'created'} successfully`
        })
        setShowForm(false)
        setEditingSeason(null)
        resetForm()
        fetchSeasons()
      } else {
        const error = await response.json()
        toast({
          title: 'Error',
          description: error.message || 'Failed to save seasonal content',
          variant: 'destructive'
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save seasonal content',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = async (season: SeasonalContent) => {
    setEditingSeason(season)
    
    // Fetch complete data with all nested relationships
    try {
      const response = await fetch(`/api/cms/seasonal?season=${season.season}`)
      if (response.ok) {
        const fullData = await response.json()
        setFormData({
          season: fullData.season,
          title: fullData.title,
          description: fullData.description,
          featuredImage: fullData.featuredImage || '',
          months: fullData.months,
          temperature: fullData.temperature,
          weather: fullData.weather,
          bestFor: fullData.bestFor,
          events: fullData.events,
          metaTitle: fullData.metaTitle || '',
          metaDescription: fullData.metaDescription || '',
          status: fullData.status,
          published: fullData.published,
          destinations: fullData.destinations || [],
          itinerary: {
            title: fullData.itinerary?.title || '',
            duration: fullData.itinerary?.duration || '',
            budget: fullData.itinerary?.budget || '',
            difficulty: fullData.itinerary?.difficulty || '',
            prompt: fullData.itinerary?.prompt || '',
            days: fullData.itinerary?.days || []
          },
          tips: fullData.tips || {
            packing: [],
            advice: []
          }
        })
      } else {
        // Fallback to the limited data if API call fails
        setFormData({
          season: season.season,
          title: season.title,
          description: season.description,
          featuredImage: season.featuredImage || '',
          months: season.months,
          temperature: season.temperature,
          weather: season.weather,
          bestFor: season.bestFor,
          events: season.events,
          metaTitle: season.metaTitle || '',
          metaDescription: season.metaDescription || '',
          status: season.status,
          published: season.published,
          destinations: season.destinations || [],
          itinerary: {
            title: season.itinerary?.title || '',
            duration: season.itinerary?.duration || '',
            budget: season.itinerary?.budget || '',
            difficulty: season.itinerary?.difficulty || '',
            prompt: season.itinerary?.prompt || '',
            days: season.itinerary?.days || []
          },
          tips: season.tips || {
            packing: [],
            advice: []
          }
        })
      }
    } catch (error) {
      console.error('Error fetching complete seasonal data:', error)
      // Fallback to limited data
      setFormData({
        season: season.season,
        title: season.title,
        description: season.description,
        featuredImage: season.featuredImage || '',
        months: season.months,
        temperature: season.temperature,
        weather: season.weather,
        bestFor: season.bestFor,
        events: season.events,
        metaTitle: season.metaTitle || '',
        metaDescription: season.metaDescription || '',
        status: season.status,
        published: season.published,
        destinations: season.destinations || [],
        itinerary: {
          title: season.itinerary?.title || '',
          duration: season.itinerary?.duration || '',
          budget: season.itinerary?.budget || '',
          difficulty: season.itinerary?.difficulty || '',
          prompt: season.itinerary?.prompt || '',
          days: season.itinerary?.days || []
        },
        tips: season.tips || {
          packing: [],
          advice: []
        }
      })
    }
    
    setShowForm(true)
  }

  const handleDelete = async (id: string, season: string) => {
    if (!confirm(`Are you sure you want to delete the ${season} season content?`)) {
      return
    }

    try {
      const response = await fetch(`/api/cms/seasonal?id=${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Seasonal content deleted successfully'
        })
        fetchSeasons()
      } else {
        toast({
          title: 'Error',
          description: 'Failed to delete seasonal content',
          variant: 'destructive'
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete seasonal content',
        variant: 'destructive'
      })
    }
  }

  const resetForm = () => {
    setFormData({
      season: '',
      title: '',
      description: '',
      featuredImage: '',
      months: '',
      temperature: '',
      weather: '',
      bestFor: '',
      events: '',
      metaTitle: '',
      metaDescription: '',
      status: 'DRAFT' as 'DRAFT' | 'PUBLISHED' | 'ARCHIVED',
      published: false,
      destinations: [],
      itinerary: {
        title: '',
        duration: '',
        budget: '',
        difficulty: '',
        prompt: '',
        days: []
      },
      tips: {
        packing: [],
        advice: []
      }
    })
  }

  const getSeasonColor = (season: string) => {
    const seasonConfig = SEASONS.find(s => s.value === season)
    return seasonConfig?.color || 'gray'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PUBLISHED': return 'bg-green-100 text-green-800'
      case 'DRAFT': return 'bg-yellow-100 text-yellow-800'
      case 'ARCHIVED': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading && seasons.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading seasonal content...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Seasonal Content</h1>
          <p className="text-gray-600">Manage seasonal travel recommendations and content</p>
        </div>
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogTrigger asChild>
            <Button 
              onClick={() => {
                setEditingSeason(null)
                resetForm()
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Season
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingSeason ? 'Edit Seasonal Content' : 'Create Seasonal Content'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="destinations">Destinations</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="seo">SEO & Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="basic" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="season">Season</Label>
                      <Select 
                        value={formData.season} 
                        onValueChange={(value) => setFormData({ ...formData, season: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select season" />
                        </SelectTrigger>
                        <SelectContent>
                          {SEASONS.map((season) => (
                            <SelectItem key={season.value} value={season.value}>
                              {season.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="months">Months</Label>
                      <Input
                        id="months"
                        value={formData.months}
                        onChange={(e) => setFormData({ ...formData, months: e.target.value })}
                        placeholder="e.g., December - February"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Holiday Season in the Philippines"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the season and what makes it special..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <SeasonalImageUpload
                      value={formData.featuredImage}
                      onChange={(url) => setFormData({ ...formData, featuredImage: url })}
                      disabled={loading}
                      label="Featured Image"
                      folder="featured"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="temperature">Temperature</Label>
                      <Input
                        id="temperature"
                        value={formData.temperature}
                        onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                        placeholder="e.g., 22-28°C"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="weather">Weather</Label>
                      <Input
                        id="weather"
                        value={formData.weather}
                        onChange={(e) => setFormData({ ...formData, weather: e.target.value })}
                        placeholder="e.g., Cool and breezy"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bestFor">Best For</Label>
                    <Input
                      id="bestFor"
                      value={formData.bestFor}
                      onChange={(e) => setFormData({ ...formData, bestFor: e.target.value })}
                      placeholder="e.g., Beach activities, Island hopping"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="events">Events</Label>
                    <Textarea
                      id="events"
                      value={formData.events}
                      onChange={(e) => setFormData({ ...formData, events: e.target.value })}
                      placeholder="Notable events and festivals during this season..."
                      rows={3}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="destinations" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Destinations</h3>
                    <Button 
                      type="button" 
                      onClick={() => {
                        const newDestination: Destination = {
                          name: '',
                          location: '',
                          description: '',
                          image: '',
                          rating: '4.5',
                          bestTime: '',
                          budget: '',
                          highlights: [],
                          prompt: ''
                        }
                        setFormData({
                          ...formData,
                          destinations: [...formData.destinations, newDestination]
                        })
                      }}
                      size="sm"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Destination
                    </Button>
                  </div>

                  {formData.destinations.map((destination, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium">Destination {index + 1}</h4>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            const newDestinations = formData.destinations.filter((_, i) => i !== index)
                            setFormData({ ...formData, destinations: newDestinations })
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Name</Label>
                          <Input
                            value={destination.name}
                            onChange={(e) => {
                              const newDestinations = [...formData.destinations]
                              newDestinations[index].name = e.target.value
                              setFormData({ ...formData, destinations: newDestinations })
                            }}
                            placeholder="e.g., Boracay"
                          />
                        </div>
                        <div>
                          <Label>Location</Label>
                          <Input
                            value={destination.location}
                            onChange={(e) => {
                              const newDestinations = [...formData.destinations]
                              newDestinations[index].location = e.target.value
                              setFormData({ ...formData, destinations: newDestinations })
                            }}
                            placeholder="e.g., Aklan"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label>Description</Label>
                        <Textarea
                          value={destination.description}
                          onChange={(e) => {
                            const newDestinations = [...formData.destinations]
                            newDestinations[index].description = e.target.value
                            setFormData({ ...formData, destinations: newDestinations })
                          }}
                          placeholder="Describe this destination..."
                          rows={3}
                        />
                      </div>

                      <div className="mt-4">
                        <SeasonalImageUpload
                          value={destination.image || ''}
                          onChange={(url) => {
                            const newDestinations = [...formData.destinations]
                            newDestinations[index].image = url
                            setFormData({ ...formData, destinations: newDestinations })
                          }}
                          disabled={loading}
                          label="Destination Image"
                          folder="destinations"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <Label>Rating</Label>
                          <Input
                            value={destination.rating}
                            onChange={(e) => {
                              const newDestinations = [...formData.destinations]
                              newDestinations[index].rating = e.target.value
                              setFormData({ ...formData, destinations: newDestinations })
                            }}
                            placeholder="4.5"
                          />
                        </div>
                        <div>
                          <Label>Best Time</Label>
                          <Input
                            value={destination.bestTime}
                            onChange={(e) => {
                              const newDestinations = [...formData.destinations]
                              newDestinations[index].bestTime = e.target.value
                              setFormData({ ...formData, destinations: newDestinations })
                            }}
                            placeholder="December - February"
                          />
                        </div>
                        <div>
                          <Label>Budget</Label>
                          <Input
                            value={destination.budget}
                            onChange={(e) => {
                              const newDestinations = [...formData.destinations]
                              newDestinations[index].budget = e.target.value
                              setFormData({ ...formData, destinations: newDestinations })
                            }}
                            placeholder="₱15,000 - ₱25,000"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label>Highlights (one per line)</Label>
                        <Textarea
                          value={destination.highlights.join('\n')}
                          onChange={(e) => {
                            const newDestinations = [...formData.destinations]
                            newDestinations[index].highlights = e.target.value.split('\n').filter(h => h.trim())
                            setFormData({ ...formData, destinations: newDestinations })
                          }}
                          placeholder="White Beach&#10;Holiday Parties&#10;Water Sports"
                          rows={3}
                        />
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Featured Itinerary</h3>
                    
                    {/* Itinerary Overview */}
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h4 className="font-medium text-blue-900 mb-2">Itinerary Overview</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-blue-600 font-medium">Duration:</span>
                          <div className="text-blue-800">{formData.itinerary.duration || 'Not set'}</div>
                        </div>
                        <div>
                          <span className="text-green-600 font-medium">Budget:</span>
                          <div className="text-green-800">{formData.itinerary.budget || 'Not set'}</div>
                        </div>
                        <div>
                          <span className="text-orange-600 font-medium">Difficulty:</span>
                          <div className="text-orange-800">{formData.itinerary.difficulty || 'Not set'}</div>
                        </div>
                        <div>
                          <span className="text-purple-600 font-medium">Days Planned:</span>
                          <div className="text-purple-800">{formData.itinerary.days.length} day(s)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label>Title</Label>
                        <Input
                          value={formData.itinerary.title}
                          onChange={(e) => setFormData({
                            ...formData,
                            itinerary: { ...formData.itinerary, title: e.target.value }
                          })}
                          placeholder="5-Day Holiday Magic in Boracay"
                        />
                      </div>
                      <div>
                        <Label>Duration</Label>
                        <Select
                          value={formData.itinerary.duration}
                          onValueChange={(value) => setFormData({
                            ...formData,
                            itinerary: { ...formData.itinerary, duration: value }
                          })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3 Days">3 Days</SelectItem>
                            <SelectItem value="4 Days">4 Days</SelectItem>
                            <SelectItem value="5 Days">5 Days</SelectItem>
                            <SelectItem value="6 Days">6 Days</SelectItem>
                            <SelectItem value="7 Days">7 Days</SelectItem>
                            <SelectItem value="10 Days">10 Days</SelectItem>
                            <SelectItem value="14 Days">14 Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label>Budget Range</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-sm text-gray-600">Min (₱)</label>
                            <Input
                              value={formData.itinerary.budget.includes(' - ') ? 
                                formData.itinerary.budget.split(' - ')[0].replace('₱', '').replace(',', '') : 
                                ''
                              }
                              onChange={(e) => {
                                const minValue = e.target.value.replace(/[^\d]/g, '')
                                const maxValue = formData.itinerary.budget.includes(' - ') ? 
                                  formData.itinerary.budget.split(' - ')[1] : '₱25,000'
                                const formattedBudget = minValue ? 
                                  `₱${parseInt(minValue).toLocaleString()} - ${maxValue}` : 
                                  formData.itinerary.budget
                                setFormData({
                                  ...formData,
                                  itinerary: { ...formData.itinerary, budget: formattedBudget }
                                })
                              }}
                              placeholder="18000"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Max (₱)</label>
                            <Input
                              value={formData.itinerary.budget.includes(' - ') ? 
                                formData.itinerary.budget.split(' - ')[1].replace('₱', '').replace(',', '') : 
                                ''
                              }
                              onChange={(e) => {
                                const maxValue = e.target.value.replace(/[^\d]/g, '')
                                const minValue = formData.itinerary.budget.includes(' - ') ? 
                                  formData.itinerary.budget.split(' - ')[0] : '₱18,000'
                                const formattedBudget = maxValue ? 
                                  `${minValue} - ₱${parseInt(maxValue).toLocaleString()}` : 
                                  formData.itinerary.budget
                                setFormData({
                                  ...formData,
                                  itinerary: { ...formData.itinerary, budget: formattedBudget }
                                })
                              }}
                              placeholder="28000"
                            />
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Preview: {formData.itinerary.budget}
                        </div>
                      </div>
                      <div>
                        <Label>Difficulty</Label>
                        <Select
                          value={formData.itinerary.difficulty}
                          onValueChange={(value) => setFormData({
                            ...formData,
                            itinerary: { ...formData.itinerary, difficulty: value }
                          })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Easy">Easy</SelectItem>
                            <SelectItem value="Moderate">Moderate</SelectItem>
                            <SelectItem value="Challenging">Challenging</SelectItem>
                            <SelectItem value="Expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium">Days</h4>
                      <Button 
                        type="button" 
                        onClick={() => {
                          const newDay: ItineraryDay = {
                            day: formData.itinerary.days.length + 1,
                            location: '',
                            image: '',
                            activities: []
                          }
                          setFormData({
                            ...formData,
                            itinerary: {
                              ...formData.itinerary,
                              days: [...formData.itinerary.days, newDay]
                            }
                          })
                        }}
                        size="sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Day
                      </Button>
                    </div>

                    {formData.itinerary.days.map((day, dayIndex) => (
                      <Card key={dayIndex} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="font-medium">Day {day.day}</h5>
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const newDays = formData.itinerary.days.filter((_, i) => i !== dayIndex)
                              setFormData({
                                ...formData,
                                itinerary: { ...formData.itinerary, days: newDays }
                              })
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <Label>Location</Label>
                            <Input
                              value={day.location}
                              onChange={(e) => {
                                const newDays = [...formData.itinerary.days]
                                newDays[dayIndex].location = e.target.value
                                setFormData({
                                  ...formData,
                                  itinerary: { ...formData.itinerary, days: newDays }
                                })
                              }}
                              placeholder="Arrival & White Beach"
                            />
                          </div>
                          <div>
                            <SeasonalImageUpload
                              value={day.image}
                              onChange={(url) => {
                                const newDays = [...formData.itinerary.days]
                                newDays[dayIndex].image = url
                                setFormData({
                                  ...formData,
                                  itinerary: { ...formData.itinerary, days: newDays }
                                })
                              }}
                              disabled={loading}
                              label="Day Image"
                              folder="itinerary"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <Label>Activities</Label>
                          <Button
                            type="button"
                            size="sm"
                            onClick={() => {
                              const newActivity: Activity = {
                                time: '',
                                activity: '',
                                description: '',
                                cost: '',
                                type: 'attraction',
                                tips: ''
                              }
                              const newDays = [...formData.itinerary.days]
                              newDays[dayIndex].activities.push(newActivity)
                              setFormData({
                                ...formData,
                                itinerary: { ...formData.itinerary, days: newDays }
                              })
                            }}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Activity
                          </Button>
                        </div>

                        {day.activities.map((activity, activityIndex) => (
                          <Card key={activityIndex} className="p-3 mb-2 bg-gray-50">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Activity {activityIndex + 1}</span>
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                onClick={() => {
                                  const newDays = [...formData.itinerary.days]
                                  newDays[dayIndex].activities = newDays[dayIndex].activities.filter((_, i) => i !== activityIndex)
                                  setFormData({
                                    ...formData,
                                    itinerary: { ...formData.itinerary, days: newDays }
                                  })
                                }}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-2">
                              <div>
                                <Label className="text-xs">Time</Label>
                                <Input
                                  value={activity.time}
                                  onChange={(e) => {
                                    const newDays = [...formData.itinerary.days]
                                    newDays[dayIndex].activities[activityIndex].time = e.target.value
                                    setFormData({
                                      ...formData,
                                      itinerary: { ...formData.itinerary, days: newDays }
                                    })
                                  }}
                                  placeholder="10:00 AM"
                                  className="text-sm"
                                />
                              </div>
                              <div>
                                <Label className="text-xs">Type</Label>
                                <Select
                                  value={activity.type}
                                  onValueChange={(value) => {
                                    const newDays = [...formData.itinerary.days]
                                    newDays[dayIndex].activities[activityIndex].type = value
                                    setFormData({
                                      ...formData,
                                      itinerary: { ...formData.itinerary, days: newDays }
                                    })
                                  }}
                                >
                                  <SelectTrigger className="text-sm">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="attraction">Attraction</SelectItem>
                                    <SelectItem value="food">Food</SelectItem>
                                    <SelectItem value="transport">Transport</SelectItem>
                                    <SelectItem value="accommodation">Accommodation</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label className="text-xs">Cost</Label>
                                <Input
                                  value={activity.cost}
                                  onChange={(e) => {
                                    const newDays = [...formData.itinerary.days]
                                    newDays[dayIndex].activities[activityIndex].cost = e.target.value
                                    setFormData({
                                      ...formData,
                                      itinerary: { ...formData.itinerary, days: newDays }
                                    })
                                  }}
                                  placeholder="₱2,000"
                                  className="text-sm"
                                />
                              </div>
                            </div>

                            <div className="mb-2">
                              <Label className="text-xs">Activity Name</Label>
                              <Input
                                value={activity.activity}
                                onChange={(e) => {
                                  const newDays = [...formData.itinerary.days]
                                  newDays[dayIndex].activities[activityIndex].activity = e.target.value
                                  setFormData({
                                    ...formData,
                                    itinerary: { ...formData.itinerary, days: newDays }
                                  })
                                }}
                                placeholder="Arrival & Check-in"
                                className="text-sm"
                              />
                            </div>

                            <div>
                              <Label className="text-xs">Description</Label>
                              <Textarea
                                value={activity.description}
                                onChange={(e) => {
                                  const newDays = [...formData.itinerary.days]
                                  newDays[dayIndex].activities[activityIndex].description = e.target.value
                                  setFormData({
                                    ...formData,
                                    itinerary: { ...formData.itinerary, days: newDays }
                                  })
                                }}
                                placeholder="Description of the activity..."
                                rows={2}
                                className="text-sm"
                              />
                            </div>
                          </Card>
                        ))}
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="seo" className="space-y-4">
                  <h3 className="text-lg font-semibold mb-4">Tips & Travel Advice</h3>
                  
                  <div>
                    <Label>Packing List (one item per line)</Label>
                    <Textarea
                      value={formData.tips.packing.join('\n')}
                      onChange={(e) => setFormData({
                        ...formData,
                        tips: {
                          ...formData.tips,
                          packing: e.target.value.split('\n').filter(item => item.trim())
                        }
                      })}
                      placeholder="Sunscreen SPF 50+&#10;Swimwear&#10;Beach towels&#10;Waterproof phone case"
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label>Travel Advice (one tip per line)</Label>
                    <Textarea
                      value={formData.tips.advice.join('\n')}
                      onChange={(e) => setFormData({
                        ...formData,
                        tips: {
                          ...formData.tips,
                          advice: e.target.value.split('\n').filter(tip => tip.trim())
                        }
                      })}
                      placeholder="Book accommodation early for better rates&#10;Respect local holiday traditions&#10;Stay hydrated and protect from sun&#10;Plan indoor activities for rainy days"
                      rows={6}
                    />
                  </div>

                  <div className="border-t pt-4 mt-6">
                    <h4 className="font-semibold mb-4">SEO Settings</h4>
                    
                    <div>
                      <Label htmlFor="metaTitle">Meta Title</Label>
                      <Input
                        id="metaTitle"
                        value={formData.metaTitle}
                        onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                        placeholder="SEO title for search engines"
                      />
                    </div>

                    <div>
                      <Label htmlFor="metaDescription">Meta Description</Label>
                      <Textarea
                        id="metaDescription"
                      value={formData.metaDescription}
                      onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                      placeholder="SEO description for search engines"
                      rows={3}
                    />
                  </div>
                </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select 
                        value={formData.status} 
                        onValueChange={(value: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED') => 
                          setFormData({ ...formData, status: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DRAFT">Draft</SelectItem>
                          <SelectItem value="PUBLISHED">Published</SelectItem>
                          <SelectItem value="ARCHIVED">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        id="published"
                        checked={formData.published}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, published: checked })
                        }
                      />
                      <Label htmlFor="published">Published</Label>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2 justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Seasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seasons.map((season) => (
          <Card key={season.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className={`h-5 w-5 text-${getSeasonColor(season.season)}-600`} />
                  <CardTitle className="text-lg">{season.title}</CardTitle>
                </div>
                <div className="flex gap-2">
                  {season.published ? (
                    <Eye className="h-4 w-4 text-green-600" />
                  ) : (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <Badge 
                  variant="secondary" 
                  className={`text-${getSeasonColor(season.season)}-600 bg-${getSeasonColor(season.season)}-100`}
                >
                  {season.season}
                </Badge>
                <Badge className={getStatusColor(season.status)}>
                  {season.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {season.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {season.months}
                </div>
                <div className="flex items-center gap-1">
                  <Thermometer className="h-3 w-3" />
                  {season.temperature}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(season)}
                  className="flex-1"
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(season.id, season.season)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {seasons.length === 0 && !loading && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No seasonal content yet</h3>
          <p className="text-gray-600 mb-4">
            Start by creating your first seasonal content to help travelers plan their perfect trip.
          </p>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create First Season
          </Button>
        </div>
      )}
    </div>
  )
}