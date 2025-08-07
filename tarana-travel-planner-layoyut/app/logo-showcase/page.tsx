import { GalaGPTLogoMain } from '@/components/logos/galagpt-logo-main'
import { GalaGPTLogoCompact } from '@/components/logos/galagpt-logo-compact'
import { GalaGPTLogoIcon } from '@/components/logos/galagpt-logo-icon'
import { GalaGPTLogoHorizontal } from '@/components/logos/galagpt-logo-horizontal'
import { GalaGPTLogoBadge } from '@/components/logos/galagpt-logo-badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">GalaGPT.ph Logo Collection</h1>
          <p className="text-xl text-gray-600">AI-powered travel assistant logo variations for the Philippines</p>
        </div>

        {/* Main Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Main Logo - Primary Brand Identity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap items-center gap-8 p-6 bg-white rounded-lg border">
              <GalaGPTLogoMain size={50} />
              <GalaGPTLogoMain size={40} />
              <GalaGPTLogoMain size={32} />
            </div>
            <p className="text-sm text-gray-600">
              Perfect for headers, business cards, and main branding. Features tropical islands, palm trees, and AI neural network elements representing the fusion of travel and technology.
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
              <GalaGPTLogoCompact size={40} />
              <GalaGPTLogoCompact size={32} />
              <GalaGPTLogoCompact size={24} />
            </div>
            <p className="text-sm text-gray-600">
              Ideal for navigation bars, mobile apps, and space-constrained areas. Features a stylized "G" with AI circuit elements and modern gradient design.
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
              <GalaGPTLogoIcon size={64} variant="default" />
              <GalaGPTLogoIcon size={64} variant="white" />
              <GalaGPTLogoIcon size={64} variant="dark" />
            </div>
            <div className="flex flex-wrap items-center gap-4 p-6 bg-white rounded-lg border">
              <GalaGPTLogoIcon size={48} />
              <GalaGPTLogoIcon size={32} />
              <GalaGPTLogoIcon size={24} />
              <GalaGPTLogoIcon size={16} />
            </div>
            <p className="text-sm text-gray-600">
              Perfect for app icons, favicons, and social media profiles. Features Philippine archipelago silhouette with AI neural network patterns and compass elements.
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
              <GalaGPTLogoHorizontal size="lg" showTagline />
              <GalaGPTLogoHorizontal size="md" showTagline />
              <GalaGPTLogoHorizontal size="sm" />
            </div>
            <p className="text-sm text-gray-600">
              Great for website headers, email signatures, and horizontal layouts. Features a modern "G" with AI elements and optional "AI Travel Assistant" tagline.
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
              <GalaGPTLogoBadge size={160} style="filled" />
              <GalaGPTLogoBadge size={160} style="outline" />
              <GalaGPTLogoBadge size={160} style="minimal" />
            </div>
            <p className="text-sm text-gray-600">
              Perfect for certificates, awards, and premium branding. Features Philippine islands with AI neural network elements. Available in filled, outline, and minimal styles.
            </p>
          </CardContent>
        </Card>

        {/* Usage Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Brand Guidelines & Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Color Palette</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded" title="Primary Purple #8B5CF6"></div>
                    <span className="text-sm">Primary Purple #8B5CF6</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded" title="Tech Blue #3B82F6"></div>
                    <span className="text-sm">Tech Blue #3B82F6</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded" title="Accent Cyan #06B6D4"></div>
                    <span className="text-sm">Accent Cyan #06B6D4</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded" title="Travel Green #10B981"></div>
                    <span className="text-sm">Travel Green #10B981</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">AI-focused purples and blues with tropical accents</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best Practices</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maintain minimum 16px clear space around logo</li>
                  <li>• Use high contrast backgrounds for readability</li>
                  <li>• Don't stretch or distort proportions</li>
                  <li>• Use appropriate size for medium and context</li>
                  <li>• Prefer gradient versions for digital use</li>
                  <li>• Use solid colors for print applications</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Logo Variations Usage</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Main Logo:</strong> Website headers, business cards</li>
                  <li>• <strong>Compact:</strong> Navigation bars, mobile apps</li>
                  <li>• <strong>Icon:</strong> Favicons, social media profiles</li>
                  <li>• <strong>Horizontal:</strong> Email signatures, banners</li>
                  <li>• <strong>Badge:</strong> Certificates, premium features</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Brand Personality</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Intelligent:</strong> AI-powered recommendations</li>
                  <li>• <strong>Adventurous:</strong> Philippine travel exploration</li>
                  <li>• <strong>Modern:</strong> Cutting-edge technology</li>
                  <li>• <strong>Friendly:</strong> Approachable chat interface</li>
                  <li>• <strong>Local:</strong> Deep Philippine knowledge</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">File Formats</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SVG - Scalable vector format</li>
                  <li>• PNG - Transparent backgrounds</li>
                  <li>• JPG - Solid backgrounds</li>
                  <li>• ICO - Favicon format</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Recommended Sizes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Favicon: 16x16, 32x32, 48x48px</li>
                  <li>• Mobile: 57x57, 114x114, 180x180px</li>
                  <li>• Social: 400x400, 1200x630px</li>
                  <li>• Print: 300 DPI minimum</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• WCAG AA contrast compliance</li>
                  <li>• Alt text: "GalaGPT.ph logo"</li>
                  <li>• Screen reader friendly</li>
                  <li>• High contrast variants available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Section */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Use GalaGPT.ph Branding?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Download the complete logo package including all variations, color schemes, and usage guidelines 
              to maintain consistent branding across all your Philippine AI travel assistant applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Download Logo Package
              </button>
              <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all">
                View Brand Guidelines
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
