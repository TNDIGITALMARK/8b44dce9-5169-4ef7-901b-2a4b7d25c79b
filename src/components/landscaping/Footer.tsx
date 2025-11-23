import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Inside Out Landscaping</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transforming outdoor spaces in Bloemfontein with professional landscaping services and expert craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <a href="tel:0796125659" className="text-gray-300 hover:text-white transition-colors">
                  079 612 5659
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <address className="text-gray-300 not-italic">
                  19 Phillip Fourie St<br />
                  Langenhoven Park<br />
                  Bloemfontein, 9301
                </address>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Monday - Friday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Saturday</p>
                  <p>8:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Inside Out Landscaping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
