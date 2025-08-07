import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Manila',
      rating: 5,
      text: 'TaraNa.ph planned the most amazing 5-day Palawan trip for us! The AI suggestions were spot-on and we discovered places we never would have found on our own.',
      avatar: '/filipino-woman-smiling.png'
    },
    {
      name: 'John Cruz',
      location: 'Cebu',
      rating: 5,
      text: 'As a frequent traveler, I was skeptical about AI planning. But TaraNa.ph exceeded my expectations with detailed itineraries that fit my budget perfectly.',
      avatar: '/filipino-man-smiling.png'
    },
    {
      name: 'Sarah Kim',
      location: 'Seoul, Korea',
      rating: 5,
      text: 'Planning my first trip to the Philippines was overwhelming until I found TaraNa.ph. The cultural insights and local tips made my experience authentic and memorable.',
      avatar: '/korean-woman-smiling.png'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered the Philippines with TaraNa.ph
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
