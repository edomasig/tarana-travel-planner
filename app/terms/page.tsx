import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
            <p className="text-gray-600">Last updated: December 12, 2024</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using GalaGPT.ph ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="mb-4">
                GalaGPT.ph is an AI-powered travel planning assistant specializing in Philippine destinations. Our service provides:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Personalized travel itineraries and recommendations</li>
                <li>Budget planning and cost estimates</li>
                <li>Local insights and cultural information</li>
                <li>Transportation and accommodation suggestions</li>
                <li>Food and activity recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Responsibilities</h2>
              <p className="mb-4">
                When using our service, you agree to:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Use the service for lawful purposes only</li>
                <li>Not attempt to disrupt or damage our systems</li>
                <li>Respect intellectual property rights</li>
                <li>Not share inappropriate or offensive content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. AI-Generated Content Disclaimer</h2>
              <p className="mb-4">
                Our AI travel assistant provides recommendations based on available data and algorithms. Please note:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Information may not always be 100% accurate or up-to-date</li>
                <li>Recommendations are suggestions, not guaranteed outcomes</li>
                <li>Always verify travel information with official sources</li>
                <li>We are not responsible for changes in prices, availability, or conditions</li>
                <li>Travel decisions and bookings are made at your own risk</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Subscription and Payment Terms</h2>
              <p className="mb-4">
                For our Premium Traveler subscription:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Subscription fees are charged monthly in advance</li>
                <li>You may cancel your subscription at any time</li>
                <li>Refunds are not provided for partial months</li>
                <li>Price changes will be communicated 30 days in advance</li>
                <li>Free trial periods may be offered at our discretion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
              <p className="mb-4">
                The service and its original content, features, and functionality are owned by GalaGPT.ph and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Prohibited Uses</h2>
              <p className="mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>For any unlawful purpose or to solicit unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations or laws</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links and Services</h2>
              <p className="mb-4">
                Our service may contain links to third-party websites or services, including:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Hotel and accommodation booking platforms</li>
                <li>Activity and tour providers (like Klook)</li>
                <li>Transportation services</li>
                <li>Restaurant reservation systems</li>
              </ul>
              <p className="mb-4">
                We are not responsible for the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall GalaGPT.ph, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Disclaimer</h2>
              <p className="mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Excludes all representations and warranties relating to this website and its contents</li>
                <li>Does not guarantee the accuracy of travel information</li>
                <li>Is not responsible for changes in travel conditions, prices, or availability</li>
                <li>Does not warrant that the website will be constantly available or error-free</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Advertising and Affiliate Partnerships</h2>
              <p className="mb-4">
                Our website displays advertisements and contains affiliate links. We may earn commissions from:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Google AdSense advertisements</li>
                <li>Affiliate bookings through partner platforms</li>
                <li>Sponsored content and recommendations</li>
              </ul>
              <p className="mb-4">
                These partnerships do not influence our AI recommendations, which remain objective and user-focused.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Email: admin@galagpt.ph</li>
                <li>Website: https://galagpt.ph</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">15. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be interpreted and governed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Terms of Service | GalaGPT.ph',
  description: 'Terms of Service for GalaGPT.ph - Our AI-powered Philippine travel planning platform terms and conditions.',
}
