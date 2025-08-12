import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Privacy Policy</CardTitle>
            <p className="text-gray-600">Last updated: December 12, 2024</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                GalaGPT.ph ("we," "our," or "us") collects information to provide better travel planning services to our users. We collect:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Travel preferences and queries you submit through our AI chat interface</li>
                <li>Usage data and analytics to improve our service</li>
                <li>Technical information like IP address, browser type, and device information</li>
                <li>Cookies and similar tracking technologies for functionality and advertising</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use collected information to:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Provide personalized travel recommendations and itineraries</li>
                <li>Improve our AI travel assistant capabilities</li>
                <li>Display relevant advertisements through Google AdSense</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Communicate with you about service updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Google AdSense for advertising purposes</li>
                <li>Analytics providers to understand usage patterns</li>
                <li>Travel partners for booking and reservation services</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Remember your preferences and saved conversations</li>
                <li>Provide personalized advertising through Google AdSense</li>
                <li>Analyze site performance and user behavior</li>
                <li>Enable social media sharing features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your information, including:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Secure HTTPS encryption for all data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information by authorized personnel</li>
                <li>Secure data storage with reputable cloud providers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies through your browser settings</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="mb-4">
                Our website integrates with third-party services including:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Google AdSense for advertising</li>
                <li>Google Analytics for usage tracking</li>
                <li>Klook for travel booking affiliate links</li>
                <li>Social media platforms for sharing features</li>
              </ul>
              <p className="mb-4">
                These services have their own privacy policies which govern their use of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="mb-4">
                Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy periodically. We will notify users of significant changes by posting the updated policy on our website with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Email: admin@galagpt.ph</li>
                <li>Website: https://galagpt.ph</li>
                <li>Address: Philippines</li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Privacy Policy | GalaGPT.ph',
  description: 'Privacy policy for GalaGPT.ph - Learn how we collect, use, and protect your data while providing AI-powered Philippine travel planning services.',
}
