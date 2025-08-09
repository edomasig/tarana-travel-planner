export interface SeasonalData {
  season: {
    name: string
    title: string
    description: string
    months: string
    temperature: string
    weather: string
    bestFor: string
    events: string
  }
  destinations: Array<{
    name: string
    location: string
    description: string
    image: string
    rating: string
    bestTime: string
    budget: string
    highlights: string[]
  }>
  featuredItinerary: {
    title: string
    duration: string
    budget: string
    difficulty: string
    season: string
    days: Array<{
      day: number
      location: string
      image: string
      activities: Array<{
        time: string
        activity: string
        description: string
        cost: string
        type: 'attraction' | 'food' | 'accommodation' | 'transport'
        tips?: string
      }>
    }>
  }
  tips: {
    packing: string[]
    advice: string[]
  }
}

export function getCurrentSeason(): string {
  const now = new Date()
  const month = now.getMonth() + 1 // JavaScript months are 0-indexed
  const day = now.getDate()

  // Holiday Season (December 15 - January 15)
  if ((month === 12 && day >= 15) || (month === 1 && day <= 15)) {
    return 'holiday'
  }
  
  // Summer Season (March - May)
  if (month >= 3 && month <= 5) {
    return 'summer'
  }
  
  // Rainy Season (June - October)
  if (month >= 6 && month <= 10) {
    return 'rainy'
  }
  
  // Dry Season (November - February)
  return 'dry'
}

export async function getSeasonalRecommendations(season: string): Promise<SeasonalData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const seasonalData: Record<string, SeasonalData> = {
    holiday: {
      season: {
        name: 'Holiday Season',
        title: 'Magical Holiday Adventures in the Philippines',
        description: 'Experience the warmth of Filipino Christmas traditions, vibrant festivals, and perfect weather for island hopping during the most festive time of the year.',
        months: 'December - January',
        temperature: '24-30°C',
        weather: 'Cool, dry weather with gentle breezes',
        bestFor: 'Festivals, family trips, beach destinations',
        events: 'Christmas festivals, New Year celebrations, Sinulog Festival'
      },
      destinations: [
        {
          name: 'Boracay',
          location: 'Aklan',
          description: 'World-famous white sand beaches with festive holiday atmosphere, perfect for Christmas and New Year celebrations.',
          image: '/boracay-holiday.png',
          rating: '4.8',
          bestTime: 'December - February',
          budget: '₱15,000 - ₱25,000',
          highlights: ['White Beach', 'Holiday Parties', 'Water Sports', 'Sunset Sailing']
        },
        {
          name: 'Baguio City',
          location: 'Benguet',
          description: 'Cool mountain air and Christmas decorations make this the perfect holiday destination for a cozy getaway.',
          image: '/baguio-christmas.png',
          rating: '4.7',
          bestTime: 'December - January',
          budget: '₱8,000 - ₱15,000',
          highlights: ['Christmas Village', 'Strawberry Fields', 'Cool Weather', 'Night Market']
        },
        {
          name: 'Cebu City',
          location: 'Cebu',
          description: 'Experience the grand Sinulog Festival and explore historical sites during the festive holiday season.',
          image: '/cebu-sinulog.png',
          rating: '4.6',
          bestTime: 'January (Sinulog Festival)',
          budget: '₱12,000 - ₱20,000',
          highlights: ['Sinulog Festival', 'Historical Sites', 'Lechon', 'Island Hopping']
        }
      ],
      featuredItinerary: {
        title: '5-Day Holiday Magic in Boracay',
        duration: '5 Days',
        budget: '₱18,000 - ₱28,000',
        difficulty: 'Easy',
        season: 'Holiday',
        days: [
          {
            day: 1,
            location: 'Arrival & White Beach',
            image: '/boracay-day1.png',
            activities: [
              {
                time: '10:00 AM',
                activity: 'Arrival & Check-in',
                description: 'Arrive at Caticlan Airport, take boat to Boracay, and check into your beachfront resort.',
                cost: '₱2,000',
                type: 'transport',
                tips: 'Book airport transfers in advance during holiday season'
              },
              {
                time: '2:00 PM',
                activity: 'White Beach Exploration',
                description: 'Stroll along the famous 4km White Beach, enjoy the festive holiday decorations.',
                cost: 'Free',
                type: 'attraction',
                tips: 'Station 1 has the finest sand and best photo spots'
              },
              {
                time: '6:00 PM',
                activity: 'Holiday Sunset Dinner',
                description: 'Enjoy a special Christmas dinner with sunset views at a beachfront restaurant.',
                cost: '₱1,500',
                type: 'food'
              }
            ]
          },
          {
            day: 2,
            location: 'Island Hopping Adventure',
            image: '/boracay-day2.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Island Hopping Tour',
                description: 'Visit Crystal Cove Island, Crocodile Island for snorkeling, and Magic Island.',
                cost: '₱1,800',
                type: 'attraction',
                tips: 'Bring underwater camera for amazing coral photos'
              },
              {
                time: '12:00 PM',
                activity: 'Beach Picnic Lunch',
                description: 'Enjoy a prepared lunch on a secluded beach with holiday treats.',
                cost: '₱800',
                type: 'food'
              },
              {
                time: '4:00 PM',
                activity: 'Ariel\'s Point Cliff Jumping',
                description: 'Experience thrilling cliff jumping and rope swinging at different heights.',
                cost: '₱2,200',
                type: 'attraction',
                tips: 'Start with lower cliffs if you\'re a beginner'
              }
            ]
          },
          {
            day: 3,
            location: 'Adventure & Relaxation',
            image: '/boracay-day3.png',
            activities: [
              {
                time: '8:00 AM',
                activity: 'Parasailing Adventure',
                description: 'Soar above Boracay\'s crystal-clear waters and get panoramic island views.',
                cost: '₱2,500',
                type: 'attraction'
              },
              {
                time: '11:00 AM',
                activity: 'Spa & Massage',
                description: 'Relax with a traditional Filipino hilot massage at a beachfront spa.',
                cost: '₱1,200',
                type: 'attraction',
                tips: 'Book early as spas get busy during holidays'
              },
              {
                time: '7:00 PM',
                activity: 'New Year\'s Eve Preparation',
                description: 'Join the beach party preparations and enjoy live music and dancing.',
                cost: '₱1,000',
                type: 'attraction'
              }
            ]
          },
          {
            day: 4,
            location: 'Cultural & Culinary Experience',
            image: '/boracay-day4.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Ati-Atihan Cultural Show',
                description: 'Learn about local Ati culture and watch traditional dance performances.',
                cost: '₱500',
                type: 'attraction'
              },
              {
                time: '1:00 PM',
                activity: 'Cooking Class',
                description: 'Learn to cook traditional Filipino holiday dishes like bibingka and lechon.',
                cost: '₱1,800',
                type: 'food',
                tips: 'Great way to bring Philippine flavors home'
              },
              {
                time: '6:00 PM',
                activity: 'Sunset Sailing',
                description: 'Enjoy a romantic sunset sail with champagne and holiday music.',
                cost: '₱2,000',
                type: 'attraction'
              }
            ]
          },
          {
            day: 5,
            location: 'Departure',
            image: '/boracay-day5.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Last Beach Walk',
                description: 'Take final photos and collect seashells as souvenirs.',
                cost: 'Free',
                type: 'attraction'
              },
              {
                time: '11:00 AM',
                activity: 'Souvenir Shopping',
                description: 'Buy local crafts, dried mangoes, and Boracay t-shirts at D\'Mall.',
                cost: '₱1,500',
                type: 'attraction'
              },
              {
                time: '2:00 PM',
                activity: 'Departure',
                description: 'Check out and transfer to Caticlan Airport for your flight home.',
                cost: '₱500',
                type: 'transport'
              }
            ]
          }
        ]
      },
      tips: {
        packing: [
          'Light, breathable clothing for warm weather',
          'Swimwear and beach cover-ups',
          'Waterproof phone case and camera',
          'Reef-safe sunscreen (SPF 30+)',
          'Festive outfits for holiday parties',
          'Comfortable sandals and water shoes'
        ],
        advice: [
          'Book accommodations early - holiday season is peak time',
          'Expect higher prices and larger crowds',
          'Join local Christmas and New Year celebrations',
          'Try traditional holiday foods like bibingka and puto bumbong',
          'Respect local customs during religious celebrations',
          'Keep hydrated and use sun protection'
        ]
      }
    },
    summer: {
      season: {
        name: 'Summer Season',
        title: 'Ultimate Summer Beach Adventures',
        description: 'Dive into crystal-clear waters, explore pristine beaches, and enjoy perfect weather for all water activities during the Philippines\' hottest season.',
        months: 'March - May',
        temperature: '26-34°C',
        weather: 'Hot and dry with minimal rainfall',
        bestFor: 'Beach activities, diving, island hopping',
        events: 'Holy Week, Summer festivals, Beach parties'
      },
      destinations: [
        {
          name: 'Palawan',
          location: 'El Nido & Coron',
          description: 'Pristine lagoons, limestone cliffs, and crystal-clear waters perfect for summer exploration.',
          image: '/palawan-summer.png',
          rating: '4.9',
          bestTime: 'March - May',
          budget: '₱20,000 - ₱35,000',
          highlights: ['Hidden Lagoons', 'Island Hopping', 'Snorkeling', 'Kayaking']
        },
        {
          name: 'Siargao',
          location: 'Surigao del Norte',
          description: 'Surfing paradise with perfect waves, coconut palm beaches, and laid-back island vibes.',
          image: '/siargao-summer.png',
          rating: '4.8',
          bestTime: 'March - October',
          budget: '₱15,000 - ₱25,000',
          highlights: ['Cloud 9 Surf Break', 'Island Hopping', 'Magpupungko Pools', 'Coconut Forest']
        },
        {
          name: 'Bohol',
          location: 'Panglao Island',
          description: 'Chocolate Hills, pristine beaches, and diverse marine life make this perfect for summer adventures.',
          image: '/bohol-summer.png',
          rating: '4.7',
          bestTime: 'March - May',
          budget: '₱12,000 - ₱22,000',
          highlights: ['Chocolate Hills', 'Tarsier Sanctuary', 'Alona Beach', 'Dolphin Watching']
        }
      ],
      featuredItinerary: {
        title: '7-Day Ultimate Palawan Summer Adventure',
        duration: '7 Days',
        budget: '₱25,000 - ₱40,000',
        difficulty: 'Moderate',
        season: 'Summer',
        days: [
          {
            day: 1,
            location: 'Puerto Princesa Arrival',
            image: '/palawan-day1.png',
            activities: [
              {
                time: '2:00 PM',
                activity: 'Airport Arrival & City Tour',
                description: 'Arrive at Puerto Princesa Airport and take a city tour including the Cathedral and Baywalk.',
                cost: '₱1,500',
                type: 'transport'
              },
              {
                time: '6:00 PM',
                activity: 'Welcome Dinner',
                description: 'Try local specialties like crocodile sisig and fresh seafood at a waterfront restaurant.',
                cost: '₱1,200',
                type: 'food'
              }
            ]
          },
          {
            day: 2,
            location: 'Underground River',
            image: '/palawan-day2.png',
            activities: [
              {
                time: '6:00 AM',
                activity: 'Underground River Tour',
                description: 'Explore the UNESCO World Heritage Underground River with its stunning rock formations.',
                cost: '₱2,500',
                type: 'attraction',
                tips: 'Book permits in advance, especially during summer peak season'
              },
              {
                time: '2:00 PM',
                activity: 'Sabang Beach Relaxation',
                description: 'Relax on Sabang Beach and enjoy water activities like kayaking.',
                cost: '₱500',
                type: 'attraction'
              }
            ]
          },
          {
            day: 3,
            location: 'Travel to El Nido',
            image: '/palawan-day3.png',
            activities: [
              {
                time: '8:00 AM',
                activity: 'Van Transfer to El Nido',
                description: 'Scenic 5-hour van ride through Palawan\'s countryside to El Nido.',
                cost: '₱800',
                type: 'transport'
              },
              {
                time: '3:00 PM',
                activity: 'El Nido Town Exploration',
                description: 'Explore El Nido town, visit local shops, and enjoy the beach sunset.',
                cost: '₱300',
                type: 'attraction'
              }
            ]
          },
          {
            day: 4,
            location: 'El Nido Island Hopping Tour A',
            image: '/palawan-day4.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Big Lagoon & Small Lagoon',
                description: 'Kayak through the famous lagoons with towering limestone cliffs.',
                cost: '₱1,500',
                type: 'attraction',
                tips: 'Bring waterproof bags for your belongings'
              },
              {
                time: '12:00 PM',
                activity: 'Secret Lagoon',
                description: 'Swim through a small opening to reach this hidden paradise.',
                cost: 'Included',
                type: 'attraction'
              },
              {
                time: '3:00 PM',
                activity: 'Shimizu Island Snorkeling',
                description: 'Snorkel among colorful coral reefs and tropical fish.',
                cost: 'Included',
                type: 'attraction'
              }
            ]
          },
          {
            day: 5,
            location: 'El Nido Island Hopping Tour C',
            image: '/palawan-day5.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Hidden Beach & Matinloc Shrine',
                description: 'Discover secluded beaches and visit the hilltop shrine with panoramic views.',
                cost: '₱1,500',
                type: 'attraction'
              },
              {
                time: '1:00 PM',
                activity: 'Helicopter Island',
                description: 'Relax on pristine white sand beaches shaped like a helicopter.',
                cost: 'Included',
                type: 'attraction'
              },
              {
                time: '4:00 PM',
                activity: 'Star Beach Swimming',
                description: 'Swim in crystal-clear waters surrounded by dramatic limestone formations.',
                cost: 'Included',
                type: 'attraction'
              }
            ]
          },
          {
            day: 6,
            location: 'Travel to Coron',
            image: '/palawan-day6.png',
            activities: [
              {
                time: '8:00 AM',
                activity: 'Ferry to Coron',
                description: 'Scenic ferry ride through the Bacuit Archipelago to Coron.',
                cost: '₱2,000',
                type: 'transport'
              },
              {
                time: '2:00 PM',
                activity: 'Kayangan Lake',
                description: 'Swim in the cleanest lake in the Philippines with stunning limestone scenery.',
                cost: '₱300',
                type: 'attraction',
                tips: 'Climb to the viewpoint first for the iconic photo'
              }
            ]
          },
          {
            day: 7,
            location: 'Coron Island Hopping & Departure',
            image: '/palawan-day7.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Twin Lagoon & Barracuda Lake',
                description: 'Experience the unique thermocline at Barracuda Lake and swim in Twin Lagoon.',
                cost: '₱1,800',
                type: 'attraction'
              },
              {
                time: '2:00 PM',
                activity: 'Coron Town & Departure',
                description: 'Last-minute souvenir shopping before flight back to Manila.',
                cost: '₱500',
                type: 'transport'
              }
            ]
          }
        ]
      },
      tips: {
        packing: [
          'High SPF sunscreen and after-sun lotion',
          'Multiple swimwear sets',
          'Quick-dry clothing and UV protection shirts',
          'Waterproof phone case and dry bags',
          'Snorkeling gear (optional - can rent)',
          'Insect repellent for evening activities',
          'Plenty of water and electrolyte drinks'
        ],
        advice: [
          'Stay hydrated - drink water frequently in the heat',
          'Apply sunscreen every 2 hours, especially when swimming',
          'Plan water activities for early morning or late afternoon',
          'Book island hopping tours in advance',
          'Respect marine life - don\'t touch corals or feed fish',
          'Bring cash - many islands don\'t accept cards'
        ]
      }
    },
    rainy: {
      season: {
        name: 'Rainy Season',
        title: 'Discover Indoor Wonders & Cultural Gems',
        description: 'Experience the Philippines\' rich culture, indoor attractions, and lush green landscapes during the refreshing rainy season.',
        months: 'June - October',
        temperature: '24-30°C',
        weather: 'Warm with frequent afternoon showers',
        bestFor: 'Cultural sites, museums, indoor activities, mountain destinations',
        events: 'Pahiyas Festival, Kadayawan Festival, Independence Day'
      },
      destinations: [
        {
          name: 'Manila',
          location: 'National Capital Region',
          description: 'Explore world-class museums, shopping malls, and historical sites perfect for rainy day adventures.',
          image: '/manila.jpg',
          rating: '4.5',
          bestTime: 'June - October',
          budget: '₱8,000 - ₱15,000',
          highlights: ['Intramuros', 'National Museum', 'SM Mall of Asia', 'Cultural Shows']
        },
        {
          name: 'Tagaytay',
          location: 'Cavite',
          description: 'Cool mountain air, cozy cafes, and stunning Taal Volcano views make rainy days romantic.',
          image: '/tagaytay.jpg',
          rating: '4.6',
          bestTime: 'June - November',
          budget: '₱6,000 - ₱12,000',
          highlights: ['Taal Volcano View', 'Sky Ranch', 'Bulalo Restaurants', 'Puzzle Mansion']
        },
        {
          name: 'Iloilo City',
          location: 'Iloilo',
          description: 'Rich heritage sites, covered markets, and delicious local cuisine perfect for rainy season exploration.',
          image: '/iloilo.jpg',
          rating: '4.4',
          bestTime: 'June - October',
          budget: '₱7,000 - ₱13,000',
          highlights: ['Molo Church', 'La Paz Batchoy', 'Iloilo Museum', 'Jaro Cathedral']
        }
      ],
      featuredItinerary: {
        title: '4-Day Manila Cultural & Indoor Adventure',
        duration: '4 Days',
        budget: '₱10,000 - ₱18,000',
        difficulty: 'Easy',
        season: 'Rainy',
        days: [
          {
            day: 1,
            location: 'Intramuros Historical District',
            image: '/intramuros-historic-district.jpg',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Fort Santiago Exploration',
                description: 'Explore the historic fort and learn about Philippine history and José Rizal.',
                cost: '₱50',
                type: 'attraction',
                tips: 'Covered walkways provide shelter from rain'
              },
              {
                time: '11:00 AM',
                activity: 'San Agustin Church',
                description: 'Visit the oldest stone church in the Philippines, a UNESCO World Heritage Site.',
                cost: '₱30',
                type: 'attraction'
              },
              {
                time: '1:00 PM',
                activity: 'Barbara\'s Heritage Restaurant',
                description: 'Enjoy traditional Filipino cuisine in a heritage house setting.',
                cost: '₱800',
                type: 'food'
              },
              {
                time: '3:00 PM',
                activity: 'Casa Manila Museum',
                description: 'Step back in time in this recreated 19th-century Filipino home.',
                cost: '₱15',
                type: 'attraction'
              }
            ]
          },
          {
            day: 2,
            location: 'Museums & Cultural Centers',
            image: '/National-Museum-Complex.jpg',
            activities: [
              {
                time: '9:00 AM',
                activity: 'National Museum Complex',
                description: 'Explore Filipino art, culture, and natural history in air-conditioned comfort.',
                cost: 'Free',
                type: 'attraction',
                tips: 'Allow 3-4 hours to see all three buildings'
              },
              {
                time: '1:00 PM',
                activity: 'Lunch at Aristocrat',
                description: 'Try the famous chicken barbecue at this iconic Filipino restaurant.',
                cost: '₱600',
                type: 'food'
              },
              {
                time: '3:00 PM',
                activity: 'Cultural Center of the Philippines',
                description: 'Watch a cultural performance or explore art exhibitions.',
                cost: '₱500',
                type: 'attraction'
              },
              {
                time: '6:00 PM',
                activity: 'Manila Bay Sunset (covered area)',
                description: 'Watch the sunset from a covered restaurant along Manila Bay.',
                cost: '₱800',
                type: 'food'
              }
            ]
          },
          {
            day: 3,
            location: 'Shopping & Entertainment',
            image: '/SM_Mall_of_Asia_in_2024.png',
            activities: [
              {
                time: '10:00 AM',
                activity: 'SM Mall of Asia',
                description: 'Shop, dine, and enjoy indoor entertainment at one of Asia\'s largest malls.',
                cost: '₱1,000',
                type: 'attraction',
                tips: 'Perfect rainy day activity with everything under one roof'
              },
              {
                time: '1:00 PM',
                activity: 'MOA Eye Ferris Wheel',
                description: 'Enjoy panoramic city views from the climate-controlled gondolas.',
                cost: '₱250',
                type: 'attraction'
              },
              {
                time: '4:00 PM',
                activity: 'Manila Ocean Park',
                description: 'Explore marine life in Southeast Asia\'s first world-class oceanarium.',
                cost: '₱700',
                type: 'attraction'
              },
              {
                time: '7:00 PM',
                activity: 'Dinner & Cultural Show',
                description: 'Enjoy dinner with traditional Filipino dance performances.',
                cost: '₱1,500',
                type: 'food'
              }
            ]
          },
          {
            day: 4,
            location: 'Chinatown & Departure',
            image: '/Binondo-Church.jpg',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Binondo Food Tour',
                description: 'Explore the world\'s oldest Chinatown and try authentic Chinese-Filipino dishes.',
                cost: '₱800',
                type: 'food',
                tips: 'Many food stalls have covered areas'
              },
              {
                time: '12:00 PM',
                activity: 'Binondo Church',
                description: 'Visit the Minor Basilica of Saint Lorenzo Ruiz, the first Filipino saint.',
                cost: 'Free',
                type: 'attraction'
              },
              {
                time: '2:00 PM',
                activity: 'Last-minute Shopping',
                description: 'Buy pasalubong (souvenirs) at covered markets or malls.',
                cost: '₱1,000',
                type: 'attraction'
              }
            ]
          }
        ]
      },
      tips: {
        packing: [
          'Lightweight rain jacket or poncho',
          'Waterproof shoes or sandals',
          'Quick-dry clothing',
          'Umbrella (compact, sturdy)',
          'Waterproof bag for electronics',
          'Extra socks and underwear',
          'Light sweater for air-conditioned spaces'
        ],
        advice: [
          'Check weather forecasts and plan indoor alternatives',
          'Carry a waterproof bag for your phone and valuables',
          'Embrace the rain - it cools down the temperature',
          'Try local rainy season delicacies like lugaw and champorado',
          'Book covered transportation or use ride-sharing apps',
          'Visit museums and malls during heavy downpours'
        ]
      }
    },
    dry: {
      season: {
        name: 'Dry Season',
        title: 'Perfect Weather for Every Adventure',
        description: 'Experience the Philippines at its finest with clear skies, gentle breezes, and perfect conditions for any type of travel adventure.',
        months: 'November - February',
        temperature: '22-28°C',
        weather: 'Cool, dry, and comfortable',
        bestFor: 'All activities, hiking, beaches, cultural tours',
        events: 'All Saints Day, Christmas season, Chinese New Year'
      },
      destinations: [
        {
          name: 'Batanes',
          location: 'Northernmost Philippines',
          description: 'Rolling hills, stone houses, and dramatic coastlines with perfect cool weather.',
          image: '/batanes-dry.png',
          rating: '4.9',
          bestTime: 'November - April',
          budget: '₱25,000 - ₱40,000',
          highlights: ['Marlboro Hills', 'Honesty Stores', 'Ivatan Culture', 'Lighthouse Views']
        },
        {
          name: 'Siquijor',
          location: 'Central Visayas',
          description: 'Mystical island with pristine beaches, waterfalls, and perfect weather for exploration.',
          image: '/siquijor-dry.png',
          rating: '4.7',
          bestTime: 'November - April',
          budget: '₱12,000 - ₱20,000',
          highlights: ['Cambugahay Falls', 'Salagdoong Beach', 'Old Balete Tree', 'Healing Traditions']
        },
        {
          name: 'Sagada',
          location: 'Mountain Province',
          description: 'Cool mountain air, hanging coffins, and stunning sunrise views over the clouds.',
          image: '/sagada-dry.png',
          rating: '4.8',
          bestTime: 'November - February',
          budget: '₱8,000 - ₱15,000',
          highlights: ['Hanging Coffins', 'Sumaguing Cave', 'Kiltepan Viewpoint', 'Echo Valley']
        }
      ],
      featuredItinerary: {
        title: '6-Day Batanes Ultimate Adventure',
        duration: '6 Days',
        budget: '₱30,000 - ₱45,000',
        difficulty: 'Moderate',
        season: 'Dry',
        days: [
          {
            day: 1,
            location: 'Arrival in Basco',
            image: '/batanes-day1.png',
            activities: [
              {
                time: '11:00 AM',
                activity: 'Arrival at Basco Airport',
                description: 'Arrive at the northernmost airport in the Philippines and transfer to accommodation.',
                cost: '₱500',
                type: 'transport'
              },
              {
                time: '2:00 PM',
                activity: 'Basco Town Tour',
                description: 'Explore the charming capital town and visit the Basco Lighthouse.',
                cost: '₱300',
                type: 'attraction'
              },
              {
                time: '6:00 PM',
                activity: 'Welcome Dinner',
                description: 'Try Ivatan cuisine including coconut crab and flying fish.',
                cost: '₱1,200',
                type: 'food',
                tips: 'Ivatan food is unique - try the local specialties'
              }
            ]
          },
          {
            day: 2,
            location: 'South Batan Island Tour',
            image: '/batanes-day2.png',
            activities: [
              {
                time: '8:00 AM',
                activity: 'Marlboro Hills',
                description: 'Visit the famous rolling hills that look like the Marlboro cigarette ads.',
                cost: '₱200',
                type: 'attraction',
                tips: 'Best photos in the morning light'
              },
              {
                time: '10:00 AM',
                activity: 'Racuh a Payaman (Marlboro Hills)',
                description: 'Walk among grazing cattle on the vast grasslands with ocean views.',
                cost: 'Free',
                type: 'attraction'
              },
              {
                time: '1:00 PM',
                activity: 'Mahatao Traditional Lunch',
                description: 'Enjoy lunch in a traditional Ivatan stone house.',
                cost: '₱800',
                type: 'food'
              },
              {
                time: '3:00 PM',
                activity: 'Valugan Boulder Beach',
                description: 'Walk along the unique beach covered with smooth volcanic boulders.',
                cost: 'Free',
                type: 'attraction'
              }
            ]
          },
          {
            day: 3,
            location: 'North Batan Island Tour',
            image: '/batanes-day3.png',
            activities: [
              {
                time: '7:00 AM',
                activity: 'Vayang Rolling Hills',
                description: 'Watch the sunrise over the rolling hills and traditional Ivatan houses.',
                cost: '₱200',
                type: 'attraction'
              },
              {
                time: '9:00 AM',
                activity: 'Honesty Coffee Shop',
                description: 'Experience the famous honesty store where you pay without a cashier.',
                cost: '₱150',
                type: 'food',
                tips: 'A unique cultural experience - be honest!'
              },
              {
                time: '11:00 AM',
                activity: 'Dipnaysupuan Japanese Tunnel',
                description: 'Explore WWII tunnels built by Japanese forces.',
                cost: '₱100',
                type: 'attraction'
              },
              {
                time: '2:00 PM',
                activity: 'Alapad Rock Formation',
                description: 'Marvel at the natural rock arches carved by wind and waves.',
                cost: 'Free',
                type: 'attraction'
              }
            ]
          },
          {
            day: 4,
            location: 'Sabtang Island Day Trip',
            image: '/batanes-day4.png',
            activities: [
              {
                time: '8:00 AM',
                activity: 'Boat to Sabtang Island',
                description: 'Take a traditional falowa boat across the channel to Sabtang.',
                cost: '₱300',
                type: 'transport',
                tips: 'Weather dependent - boats may not operate in rough seas'
              },
              {
                time: '10:00 AM',
                activity: 'Chavayan Village',
                description: 'Visit the traditional village with centuries-old stone houses.',
                cost: '₱200',
                type: 'attraction'
              },
              {
                time: '1:00 PM',
                activity: 'Traditional Ivatan Lunch',
                description: 'Enjoy lunch prepared by local families in traditional style.',
                cost: '₱600',
                type: 'food'
              },
              {
                time: '3:00 PM',
                activity: 'Morong Beach',
                description: 'Relax on the pristine white sand beach with crystal-clear waters.',
                cost: 'Free',
                type: 'attraction'
              }
            ]
          },
          {
            day: 5,
            location: 'Cultural Immersion',
            image: '/batanes-day5.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Ivatan Cultural Village',
                description: 'Learn about traditional Ivatan crafts, weaving, and lifestyle.',
                cost: '₱400',
                type: 'attraction'
              },
              {
                time: '11:00 AM',
                activity: 'Traditional Craft Workshop',
                description: 'Try your hand at vakul (traditional headgear) making.',
                cost: '₱500',
                type: 'attraction'
              },
              {
                time: '2:00 PM',
                activity: 'Fundacion Pacita Nature Lodge',
                description: 'Visit this eco-lodge and learn about sustainable tourism.',
                cost: '₱300',
                type: 'attraction'
              },
              {
                time: '5:00 PM',
                activity: 'Sunset at Naidi Hills',
                description: 'Watch the spectacular sunset over the West Philippine Sea.',
                cost: 'Free',
                type: 'attraction',
                tips: 'Bring a jacket - it gets windy and cool'
              }
            ]
          },
          {
            day: 6,
            location: 'Departure',
            image: '/batanes-day6.png',
            activities: [
              {
                time: '9:00 AM',
                activity: 'Last-minute Shopping',
                description: 'Buy Ivatan handicrafts and local products as souvenirs.',
                cost: '₱1,500',
                type: 'attraction'
              },
              {
                time: '11:00 AM',
                activity: 'Airport Transfer',
                description: 'Transfer to Basco Airport for departure flight.',
                cost: '₱300',
                type: 'transport'
              }
            ]
          }
        ]
      },
      tips: {
        packing: [
          'Light layers for varying temperatures',
          'Comfortable walking shoes',
          'Light jacket for evening and early morning',
          'Sun hat and sunglasses',
          'Camera with extra batteries',
          'Reusable water bottle',
          'Cash - ATMs are limited in remote areas'
        ],
        advice: [
          'Book flights early - limited seats to remote destinations',
          'Respect local customs and traditions',
          'Bring cash - credit cards not widely accepted',
          'Pack light - domestic flight baggage limits',
          'Be flexible with weather-dependent activities',
          'Try local food - it\'s part of the cultural experience'
        ]
      }
    }
  }

  return seasonalData[season] || seasonalData.dry
}
