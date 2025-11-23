import { Check } from 'lucide-react';

const pricingData = [
  {
    title: 'Artificial Turf Installation',
    price: 'from R450',
    unit: 'per m²',
    features: [
      'Premium quality synthetic grass',
      'Professional installation',
      'Drainage system included',
      'Low maintenance solution',
      '10-year warranty',
    ],
    popular: false,
  },
  {
    title: 'Custom Landscape Design',
    price: 'from R1,500',
    unit: 'consultation',
    features: [
      'Personalized design consultation',
      'Detailed landscape plan',
      'Plant selection guidance',
      '3D visualization (optional)',
      'Implementation support',
    ],
    popular: true,
  },
  {
    title: 'Garden Landscaping',
    price: 'from R5,000',
    unit: 'project',
    features: [
      'Complete garden transformation',
      'Planting and hardscaping',
      'Irrigation system setup',
      'Soil preparation',
      'Ongoing maintenance advice',
    ],
    popular: false,
  },
  {
    title: 'Driveway Paving',
    price: 'from R320',
    unit: 'per m²',
    features: [
      'Durable paving materials',
      'Professional installation',
      'Pattern options available',
      'Edging and borders',
      'Warranty included',
    ],
    popular: false,
  },
  {
    title: 'Water Feature Design',
    price: 'from R8,000',
    unit: 'custom',
    features: [
      'Custom fountain design',
      'Pond construction',
      'Pump and filtration system',
      'LED lighting (optional)',
      'Maintenance guidance',
    ],
    popular: false,
  },
  {
    title: 'Retaining Wall Construction',
    price: 'from R580',
    unit: 'per linear meter',
    features: [
      'Structural engineering',
      'Stone or concrete options',
      'Drainage solutions',
      'Decorative finishes',
      'Long-term durability',
    ],
    popular: false,
  },
];

export function PricingTable() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear, competitive pricing for all our landscaping services. All quotes are free and customized to your project.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                service.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Title */}
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-primary">
                    {service.price}
                  </span>
                  <span className="text-muted-foreground">{service.unit}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#booking-form"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  service.popular
                    ? 'bg-primary text-primary-foreground hover:bg-accent'
                    : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Something Else?</h3>
            <p className="text-muted-foreground mb-4">
              We offer many more services including concrete masonry, garden decorating, outdoor step construction, patio design, and more.
            </p>
            <p className="text-lg font-semibold text-foreground">
              Contact us for a custom quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
