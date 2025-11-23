import {
  Sprout,
  Home,
  TreePine,
  Hammer,
  Droplets,
  Fence,
  Mountain,
  Footprints,
  Palette
} from 'lucide-react';

const services = [
  {
    icon: Sprout,
    title: 'Artificial Turf Installation',
    description: 'Premium quality artificial grass that looks natural and requires minimal maintenance.',
    price: 'from R450 per m²',
  },
  {
    icon: Palette,
    title: 'Custom Landscape Design',
    description: 'Personalized landscape plans tailored to your property and preferences.',
    price: 'consultation from R1,500',
  },
  {
    icon: Home,
    title: 'Garden Landscaping',
    description: 'Complete garden transformations including design, planting, and hardscaping.',
    price: 'project quotes from R5,000',
  },
  {
    icon: Hammer,
    title: 'Driveway Paving',
    description: 'Durable and attractive paving solutions for driveways and pathways.',
    price: 'from R320 per m²',
  },
  {
    icon: Droplets,
    title: 'Water Feature Design',
    description: 'Custom fountains, ponds, and water features to enhance your outdoor space.',
    price: 'custom quotes from R8,000',
  },
  {
    icon: Mountain,
    title: 'Retaining Wall Construction',
    description: 'Structural and decorative retaining walls for sloped landscapes.',
    price: 'from R580 per linear meter',
  },
  {
    icon: TreePine,
    title: 'Garden Drainage',
    description: 'Effective drainage solutions to protect your landscape from water damage.',
    price: 'custom quotes available',
  },
  {
    icon: Footprints,
    title: 'Outdoor Step Construction',
    description: 'Safe and elegant outdoor steps and stairways.',
    price: 'custom quotes available',
  },
  {
    icon: Fence,
    title: 'Stonemasonry & Concrete',
    description: 'Professional masonry work for walls, patios, and decorative elements.',
    price: 'custom quotes available',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Expert <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of landscaping services to transform your outdoor space into a beautiful, functional environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 text-primary p-4 rounded-lg inline-flex mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-primary font-semibold text-lg">
                    {service.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's bring your outdoor vision to life!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto text-center"
                style={{
                  backgroundColor: 'hsl(140 65% 28%)',
                  color: 'white',
                }}
              >
                <span style={{ color: 'white' }}>Book Free Consultation</span>
              </a>
              <a
                href="tel:0796125659"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-lg transition-all w-full sm:w-auto text-center"
                style={{
                  backgroundColor: 'white',
                  color: 'hsl(140 40% 15%)',
                  border: '2px solid hsl(30 10% 85%)',
                }}
              >
                <span style={{ color: 'hsl(140 40% 15%)' }}>Call: 079 612 5659</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
