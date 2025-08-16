import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Mail, MessageSquare, Globe, Users } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="space-y-8">
          {/* Header */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Contact Us</CardTitle>
              <p className="text-gray-600 text-lg">
                We'd love to hear from you! Get in touch with the GalaGPT.ph team.
              </p>
            </CardHeader>
          </Card>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Mail className="h-6 w-6 text-blue-500" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For general inquiries, support, or feedback about GalaGPT.ph:
                </p>
                <a 
                  href="mailto:admin@galagpt.ph" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  admin@galagpt.ph
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  We typically respond within 24 hours
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-green-500" />
                  Try Our AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For travel-related questions, try our AI chat first:
                </p>
                <Link 
                  href="/chat" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  Start Chatting
                </Link>
                <p className="text-sm text-gray-500 mt-2">
                  Get instant travel recommendations for the Philippines
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What to Contact Us About */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What can we help you with?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    🛠️ Technical Support
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Website issues or bugs</li>
                    <li>• Account and subscription problems</li>
                    <li>• Payment and billing questions</li>
                    <li>• Feature requests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    🌍 Travel Content
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Destination information updates</li>
                    <li>• Local business partnerships</li>
                    <li>• Content corrections</li>
                    <li>• Tourism board collaborations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    💼 Business Inquiries
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Partnership opportunities</li>
                    <li>• Affiliate program</li>
                    <li>• Media and press inquiries</li>
                    <li>• API access requests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    💬 General Feedback
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• User experience feedback</li>
                    <li>• Suggestions for improvement</li>
                    <li>• Success stories</li>
                    <li>• General questions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Times */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Response Times</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24 hours</div>
                  <div className="text-sm text-gray-600">General inquiries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">48 hours</div>
                  <div className="text-sm text-gray-600">Technical support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">1 week</div>
                  <div className="text-sm text-gray-600">Business partnerships</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Before You Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">For Travel Questions:</h3>
                  <p className="text-gray-600">
                    Try our AI chat assistant first! It can instantly help with Philippine travel planning, 
                    itineraries, budget estimates, and local recommendations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Technical Issues:</h3>
                  <p className="text-gray-600">
                    Please include details about your device, browser, and the specific problem you're experiencing. 
                    Screenshots are very helpful!
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Partnerships:</h3>
                  <p className="text-gray-600">
                    Include information about your business, proposed collaboration, and how it would benefit 
                    Philippine travelers using our platform.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Globe className="h-6 w-6 text-blue-500" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Website:</strong> https://galagpt.ph</p>
                <p><strong>Email:</strong> admin@galagpt.ph</p>
                <p><strong>Service Area:</strong> Philippines and international travelers</p>
                <p><strong>Business Hours:</strong> We monitor emails 24/7, but responses are typically sent during Philippine business hours (GMT+8)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: 'Contact Us | GalaGPT.ph',
  description: 'Get in touch with GalaGPT.ph team for support, partnerships, or feedback about our AI-powered Philippine travel planning service.',
}
