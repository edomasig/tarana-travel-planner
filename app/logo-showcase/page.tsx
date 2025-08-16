import { TaranaLogoMain } from '@/components/logos/tarana-logo-main'
import { TaranaLogoCompact } from '@/components/logos/tarana-logo-compact'
import { TaranaLogoIcon } from '@/components/logos/tarana-logo-icon'
import { TaranaLogoHorizontal } from '@/components/logos/tarana-logo-horizontal'
import { TaranaLogoBadge } from '@/components/logos/tarana-logo-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Footer } from '@/components/footer'

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TaraNa.ph Logo Collection</h1>
          <p className="text-xl text-gray-600">Travel-themed logo variations for your Philippine AI travel assistant</p>
        </div>

        {/* Main Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Main Logo - Primary Brand Identity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-8 p-6 bg-white rounded-lg border">
              <TaranaLogoMain size={50} />
              <TaranaLogoMain size={40} />
              <TaranaLogoMain size={32} />
            </div>
            <p className="text-sm text-gray-600">
              Perfect for headers, business cards, and main branding. Features tropical islands, palm trees, and sun.
            </p>
          </CardContent>
        </Card>

        {/* Compact Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Compact Logo - Navigation & Mobile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-8 p-6 bg-white rounded-lg border">
              <TaranaLogoCompact size={40} />
              <TaranaLogoCompact size={32} />
              <TaranaLogoCompact size={24} />
            </div>
            <p className="text-sm text-gray-600">
              Ideal for navigation bars, mobile apps, and space-constrained areas. Clean and modern design.
            </p>
          </CardContent>
        </Card>

        {/* Icon Variations */}
        <Card>
          <CardHeader>
            <CardTitle>Icon Variations - App Icons & Favicons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-8 p-6 bg-gray-100 rounded-lg">
              <TaranaLogoIcon size={64} variant="default" />
              <TaranaLogoIcon size={64} variant="white" />
              <TaranaLogoIcon size={64} variant="dark" />
            </div>
            <div className="flex flex-wrap items-center gap-4 p-6 bg-white rounded-lg border">
              <TaranaLogoIcon size={48} />
              <TaranaLogoIcon size={32} />
              <TaranaLogoIcon size={24} />
              <TaranaLogoIcon size={16} />
            </div>
            <p className="text-sm text-gray-600">
              Perfect for app icons, favicons, and social media profiles. Features Philippine archipelago silhouette.
            </p>
          </CardContent>
        </Card>

        {/* Horizontal Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Horizontal Logo - Headers & Banners</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4 p-6 bg-white rounded-lg border">
              <TaranaLogoHorizontal size="lg" showTagline />
              <TaranaLogoHorizontal size="md" showTagline />
              <TaranaLogoHorizontal size="sm" />
            </div>
            <p className="text-sm text-gray-600">
              Great for website headers, email signatures, and horizontal layouts. Optional tagline included.
            </p>
          </CardContent>
        </Card>

        {/* Badge Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Logo - Certificates & Awards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-8 p-6 bg-gray-100 rounded-lg">
              <TaranaLogoBadge size={160} style="filled" />
              <TaranaLogoBadge size={160} style="outline" />
              <TaranaLogoBadge size={160} style="minimal" />
            </div>
            <p className="text-sm text-gray-600">
              Perfect for certificates, awards, and premium branding. Available in filled, outline, and minimal styles.
            </p>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Color Palette</h4>
                <div className="flex gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-600 rounded" title="Primary Blue #3B82F6"></div>
                  <div className="w-8 h-8 bg-blue-700 rounded" title="Dark Blue #1E40AF"></div>
                  <div className="w-8 h-8 bg-emerald-500 rounded" title="Green #10B981"></div>
                  <div className="w-8 h-8 bg-amber-500 rounded" title="Amber #F59E0B"></div>
                </div>
                <p className="text-sm text-gray-600">Ocean blues, tropical greens, and sunset amber</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maintain minimum 16px clear space around logo</li>
                  <li>• Use high contrast backgrounds</li>
                  <li>• Don't stretch or distort proportions</li>
                  <li>• Use appropriate size for medium</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
