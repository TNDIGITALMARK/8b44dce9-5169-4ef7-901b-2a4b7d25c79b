import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to reach us - choose what works best for you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone Contact */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(140 65% 28%)', color: 'white' }}>
                  <Phone className="h-8 w-8" style={{ color: 'white' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-3">
                    Speak directly with our team for immediate assistance
                  </p>
                  <a
                    href="tel:0796125659"
                    className="text-2xl font-bold text-primary hover:text-accent transition-colors"
                  >
                    079 612 5659
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-border rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'hsl(140 55% 45%)', color: 'white' }}>
                  <MapPin className="h-8 w-8" style={{ color: 'white' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground mb-3">
                    Come see us for an in-person consultation
                  </p>
                  <address className="not-italic text-foreground font-medium">
                    19 Phillip Fourie St<br />
                    Langenhoven Park<br />
                    Bloemfontein, 9301
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-muted/50 rounded-xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-primary/10 text-primary p-4 rounded-lg">
                <Clock className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-2">Weekdays</p>
                    <p className="text-muted-foreground">Monday - Friday</p>
                    <p className="text-xl font-bold text-primary">8:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground mb-2">Weekend</p>
                    <p className="text-muted-foreground">Saturday</p>
                    <p className="text-xl font-bold text-primary">8:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Closed on Sundays and public holidays
                </p>
              </div>
            </div>
          </div>

          {/* Service Area Note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white border border-primary/30 rounded-xl p-6">
              <p className="text-lg text-muted-foreground">
                <span className="font-bold text-primary">Serving Bloemfontein</span> and surrounding areas within the Free State
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
