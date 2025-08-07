import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Manila',
      rating: 5,
      text: 'GalaGPT.ph planned the most amazing 5-day Palawan trip for us! The AI suggestions were spot-on and we discovered places we never would have found on our own.',
      image: '/filipino-woman-smiling.png'
    },
    {
      name: 'James Kim',
      location: 'Seoul',
      rating: 5,
      text: 'As a frequent traveler, I was skeptical about AI planning. But GalaGPT.ph exceeded my expectations with detailed itineraries that fit my budget perfectly.',
      image: '/korean-woman-smiling.png'
    },
    {
      name: 'Carlos Rodriguez',
      location: 'Barcelona',
      rating: 5,
      text: 'Planning my first trip to the Philippines was overwhelming until I found GalaGPT.ph. The cultural insights and local tips made my experience authentic and memorable.',
      image: '/filipino-man-smiling.png'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy travelers who have discovered the Philippines with GalaGPT.ph
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
