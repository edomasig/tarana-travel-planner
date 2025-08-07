import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Clock, DollarSign, Download, Save, Share2, Camera, Utensils, Bed } from 'lucide-react'

interface ItineraryProps {
  itinerary: {
    title: string
    duration: string
    totalBudget: string
    days: Array<{
      day: number
      location: string
      activities: Array<{
        time: string
        activity: string
        description: string
        cost: string
        type: 'attraction' | 'food' | 'accommodation' | 'transport'
      }>
    }>
    tips: string[]
    transportation: string
    bestTime: string
  }
}

export function ItineraryDisplay({ itinerary }: ItineraryProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'food': return Utensils
      case 'accommodation': return Bed
      case 'transport': return MapPin
      default: return Camera
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'food': return 'text-orange-600 bg-orange-100'
      case 'accommodation': return 'text-purple-600 bg-purple-100'
      case 'transport': return 'text-blue-600 bg-blue-100'
      default: return 'text-green-600 bg-green-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl text-gray-900">{itinerary.title}</CardTitle>
              <div className="flex items-center gap-4 mt-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {itinerary.duration}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {itinerary.totalBudget}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Transportation</h4>
              <p className="text-sm text-gray-600">{itinerary.transportation}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Best Time to Visit</h4>
              <p className="text-sm text-gray-600">{itinerary.bestTime}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Total Budget</h4>
              <p className="text-sm text-gray-600">{itinerary.totalBudget}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Itinerary */}
      {itinerary.days.map((day) => (
        <Card key={day.day}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {day.day}
              </div>
              Day {day.day} - {day.location}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {day.activities.map((activity, index) => {
                const Icon = getActivityIcon(activity.type)
                const colorClass = getActivityColor(activity.type)
                
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{activity.activity}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {activity.time}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {activity.cost}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Travel Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Travel Tips & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {itinerary.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
