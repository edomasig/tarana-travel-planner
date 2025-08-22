'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, User } from 'lucide-react'
import { GalaGPTLogoHorizontal } from '@/components/logos/galagpt-logo-horizontal'
import Link from 'next/link'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Chat', href: '/chat' },
    { name: 'Seasonal', href: '/seasonal' },
    { name: 'Plan Trip', href: '/plan' },
    { name: 'Saved', href: '/saved' },
    // { name: 'About', href: '/about' },
    // { name: 'Pricing', href: '/pricing' } // Hidden for now
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <GalaGPTLogoHorizontal size="lg" className="hidden md:block" />
            <GalaGPTLogoHorizontal size="md" className="block md:hidden" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          {/* Hidden for now
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          */}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900 font-medium py-2 px-1 text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Hidden for now
              <div className="pt-4 space-y-2 border-t">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </div>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
