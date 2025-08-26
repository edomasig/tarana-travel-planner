import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Plane, MapPin, CreditCard, Smartphone, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function TravelTipsPage() {
  const tipCategories = [
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Pre-Travel Planning",
      description: "Essential steps before your Philippine adventure",
      color: "blue",
      tips: [
        "Apply for visa if required (check your nationality)",
        "Get travel insurance with medical coverage",
        "Vaccinations: Hepatitis A/B, Typhoid, Japanese Encephalitis",
        "Book flights 2-3 months in advance for better rates",
        "Research weather patterns for your travel dates"
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Money & Budgeting", 
      description: "Smart financial tips for traveling in the Philippines",
      color: "green",
      tips: [
        "Philippine Peso (PHP) is the only accepted currency",
        "Bring USD or your local currency to exchange",
        "ATMs are widely available in cities, limited in remote areas",
        "Credit cards accepted in hotels and malls, not in small establishments",
        "Budget ₱2,000-5,000 per day depending on your style"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Health & Safety",
      description: "Stay safe and healthy during your travels",
      color: "red",
      tips: [
        "Drink bottled or filtered water only",
        "Use mosquito repellent (dengue and malaria prevention)",
        "Pack basic first aid kit and medications",
        "Avoid raw foods from street vendors initially",
        "Keep copies of important documents"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Communication & Tech",
      description: "Stay connected while exploring",
      color: "purple",
      tips: [
        "Buy local SIM card for data and calls",
        "Major networks: Globe, Smart, DITO",
        "Free WiFi available in hotels, malls, and cafes",
        "Download offline maps before traveling to remote areas",
        "Bring portable power bank for long days out"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Transportation",
      description: "Getting around the Philippines efficiently",
      color: "orange",
      tips: [
        "Domestic flights for island hopping (book in advance)",
        "Jeepneys and tricycles for local transport",
        "Grab (ride-hailing) available in major cities",
        "Rent a scooter for flexibility (international license required)",
        "Ferry travel between islands (check weather conditions)"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Cultural Etiquette",
      description: "Respect local customs and traditions",
      color: "indigo",
      tips: [
        "Filipinos are very friendly and hospitable",
        "Tipping is appreciated but not mandatory (10%)",
        "Dress modestly when visiting churches",
        "Remove shoes when entering homes",
        "Learn basic Tagalog phrases (Salamat = Thank you)"
      ]
    }
  ]

  const essentialPhrases = [
    { english: "Hello", tagalog: "Kumusta", pronunciation: "koo-MUS-tah" },
    { english: "Thank you", tagalog: "Salamat", pronunciation: "sah-LAH-mat" },
    { english: "Please", tagalog: "Pakisuyo", pronunciation: "pah-kee-SOO-yoh" },
    { english: "Excuse me", tagalog: "Makakadaan", pronunciation: "mah-kah-kah-DAH-an" },
    { english: "How much?", tagalog: "Magkano?", pronunciation: "mahg-KAH-noh" },
    { english: "Where is?", tagalog: "Saan ang?", pronunciation: "SAH-an ahng" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Header */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-4xl">Travel Tips for the Philippines</CardTitle>
              <p className="text-xl text-gray-600 mt-4">
                Essential advice to make your Philippine adventure smooth and memorable
              </p>
            </CardHeader>
          </Card>

          {/* Tips Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tipCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 flex items-center justify-center text-${category.color}-600 mb-3`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Essential Phrases */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Essential Filipino Phrases</CardTitle>
              <p className="text-gray-600">Basic phrases to help you connect with locals</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {essentialPhrases.map((phrase, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold text-gray-900">{phrase.english}</div>
                    <div className="text-blue-600 font-medium text-lg">{phrase.tagalog}</div>
                    <div className="text-sm text-gray-500 italic">{phrase.pronunciation}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weather Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Weather & Best Time to Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-yellow-800 mb-2">Dry Season</h4>
                  <p className="text-yellow-700 font-medium mb-2">November - April</p>
                  <p className="text-sm text-yellow-600">
                    Best time to visit. Sunny skies, minimal rainfall, perfect for island hopping and outdoor activities.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Wet Season</h4>
                  <p className="text-blue-700 font-medium mb-2">May - October</p>
                  <p className="text-sm text-blue-600">
                    Rainy season with occasional typhoons. Lower prices but some activities may be canceled.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Peak Season</h4>
                  <p className="text-green-700 font-medium mb-2">December - February</p>
                  <p className="text-sm text-green-600">
                    Cool, dry weather. Most expensive but also the most comfortable time to travel.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Emergency Numbers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Police Emergency:</span>
                      <span className="font-mono">117</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fire Emergency:</span>
                      <span className="font-mono">116</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Medical Emergency:</span>
                      <span className="font-mono">911</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Coast Guard:</span>
                      <span className="font-mono">143</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tourist Assistance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Tourism Hotline:</span>
                      <span className="font-mono">02-459-5200</span>
                    </li>
                    <li className="flex justify-between">
                      <span>DOT Tourist Police:</span>
                      <span className="font-mono">02-524-1728</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Philippine Red Cross:</span>
                      <span className="font-mono">143</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Packing Checklist */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Packing Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Essentials</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Passport & copies</li>
                    <li>• Visa (if required)</li>
                    <li>• Travel insurance</li>
                    <li>• Vaccination certificates</li>
                    <li>• Flight tickets</li>
                    <li>• Hotel confirmations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tropical Gear</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• High SPF sunscreen</li>
                    <li>• Mosquito repellent</li>
                    <li>• Light, breathable clothing</li>
                    <li>• Waterproof bag</li>
                    <li>• Quick-dry towel</li>
                    <li>• Water shoes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Electronics</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Universal adapter</li>
                    <li>• Portable power bank</li>
                    <li>• Waterproof phone case</li>
                    <li>• Underwater camera</li>
                    <li>• Headphones</li>
                    <li>• Backup cables</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Philippine Adventure?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Use our AI travel planner to create a personalized itinerary that takes into account all these tips 
                and recommendations for a perfect trip to the Philippines.
              </p>
              <Link 
                href="/chat"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Start Planning Now
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
