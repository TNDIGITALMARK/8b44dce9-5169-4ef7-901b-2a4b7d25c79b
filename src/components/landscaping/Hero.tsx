import Link from 'next/link';
import { ArrowRight, Award, Users, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0">
        <img
          src="/generated/hero-background.png"
          alt="Professional landscaping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full mb-8">
            <Award className="h-4 w-4" />
            <span className="text-sm font-semibold">Bloemfontein's Premier Landscaping Service</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Transform Your <span className="text-primary">Outdoor Space</span> Into Paradise
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
            From artificial turf installation to custom landscape design, we bring your outdoor vision to life with professional craftsmanship and attention to detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/booking"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/gallery"
              className="bg-white text-foreground border-2 border-border px-8 py-4 rounded-lg font-bold text-lg hover:border-primary hover:text-primary transition-all w-full sm:w-auto justify-center flex items-center"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 text-primary p-4 rounded-full">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Professional Quality</h3>
              <p className="text-muted-foreground text-sm">Expert craftsmanship in every project</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 text-primary p-4 rounded-full">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Trusted Service</h3>
              <p className="text-muted-foreground text-sm">100+ satisfied customers</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-primary/10 text-primary p-4 rounded-full">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Custom Designs</h3>
              <p className="text-muted-foreground text-sm">Tailored to your unique vision</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
