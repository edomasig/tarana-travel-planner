import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API', href: '#api' }
    ],
    destinations: [
      { name: 'Luzon', href: '#luzon' },
      { name: 'Visayas', href: '#visayas' },
      { name: 'Mindanao', href: '#mindanao' },
      { name: 'Popular Routes', href: '#routes' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: 'mailto:admin@galagpt.ph' },
      { name: 'Travel Tips', href: '#tips' },
      { name: 'Community', href: '#community' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold">GalaGPT.ph</span>
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 max-w-sm text-sm md:text-base">
              Discover the beauty of the Philippines with AI-powered travel planning. 
              Create personalized itineraries in seconds.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            {/* Contact email */}
            <div className="mt-4 flex items-center gap-2 text-gray-300 text-sm">
              <Mail className="h-4 w-4" />
              <a href="mailto:admin@galagpt.ph" className="hover:text-white transition-colors">
                admin@galagpt.ph
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 GalaGPT.ph. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
