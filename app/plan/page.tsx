'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Clock, DollarSign, Download, Save, Share2, Loader2 } from 'lucide-react'
import { generateItinerary } from '@/lib/ai-service'
import { ItineraryDisplay } from '@/components/itinerary-display'
import { AdBanner } from '@/components/ads/ad-banner'

export default function PlanPage() {
  const [prompt, setPrompt] = useState('')
  const [itinerary, setItinerary] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateItinerary = async () => {
    if (!prompt.trim()) return
    
    setIsLoading(true)
    try {
      const result = await generateItinerary(prompt)
      setItinerary(result)
    } catch (error) {
      console.error('Error generating itinerary:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
      {/* Top Banner Ad - Smaller on mobile */}
      <AdBanner position="top" className="mb-3 md:mb-6" />
      
      <div className="mb-4 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Plan Your Philippine Adventure</h1>
        <p className="text-sm md:text-base text-gray-600">Tell us what you're looking for and we'll create a personalized itinerary just for you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <Card className="lg:sticky lg:top-4">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                Describe Your Trip
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="e.g., Where to go in North Luzon for 3 days? I love hiking and local food. Budget is around ₱15,000."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                className="resize-none"
              />
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-medium">Popular prompts:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Beach hopping in Palawan for 5 days",
                    "Cultural tour of Ilocos for a weekend",
                    "Adventure trip to Bohol",
                    "Food tour in Metro Manila"
                  ].map((suggestion) => (
                    <Badge 
                      key={suggestion}
                      variant="outline" 
                      className="cursor-pointer hover:bg-blue-50 text-xs"
                      onClick={() => setPrompt(suggestion)}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGenerateItinerary}
                disabled={!prompt.trim() || isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Itinerary'
                )}
              </Button>
            </CardContent>
          </Card>
          
          {/* Sidebar Ad - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <AdBanner position="sidebar" />
          </div>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
                <p className="text-gray-600">Creating your perfect Philippine adventure...</p>
              </CardContent>
            </Card>
          ) : itinerary ? (
            <ItineraryDisplay itinerary={itinerary} />
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Explore?</h3>
                <p className="text-gray-600">Enter your travel preferences and let our AI create the perfect itinerary for your Philippine adventure.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      {/* Bottom Banner Ad - Smaller margin on mobile */}
      <AdBanner position="bottom" className="mt-4 md:mt-8" />
    </div>
  )
}
