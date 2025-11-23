'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              Inside Out Landscaping
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </Link>
            <Link href="/booking" className="text-foreground hover:text-primary transition-colors font-medium">
              Book Now
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0796125659" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-medium">079 612 5659</span>
            </a>
            <Link
              href="/booking"
              className="px-6 py-2.5 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: 'hsl(140 65% 28%)',
                color: 'white',
              }}
            >
              <span style={{ color: 'white' }}>Get a Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/booking"
              className="block text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
            <a href="tel:0796125659" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span className="font-medium">079 612 5659</span>
            </a>
            <Link
              href="/booking"
              className="block px-6 py-2.5 rounded-lg font-semibold transition-colors text-center"
              style={{
                backgroundColor: 'hsl(140 65% 28%)',
                color: 'white',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span style={{ color: 'white' }}>Get a Quote</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
