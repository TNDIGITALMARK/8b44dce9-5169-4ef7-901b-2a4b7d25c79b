import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Williams',
    role: 'Homeowner',
    location: 'Bloemfontein',
    rating: 5,
    content:
      'Inside Out Landscaping transformed our backyard into an amazing entertainment space. The artificial turf looks incredible and the kids love it. Professional service from start to finish!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Mike van der Merwe',
    role: 'Property Developer',
    location: 'Free State',
    rating: 5,
    content:
      'Professional service from start to finish. They completed our commercial landscaping project on time and within budget. The attention to detail and quality of work is outstanding.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Jenny Oosthuizen',
    role: 'Suburban Resident',
    location: 'Langenhoven Park',
    rating: 5,
    content:
      'The custom water feature they designed became the centerpiece of our garden. Highly recommend their creative approach and professional execution. Our neighbors are all jealous!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'David Botha',
    role: 'Business Owner',
    location: 'Bloemfontein CBD',
    rating: 5,
    content:
      'They landscaped our office complex and the results exceeded expectations. The team was professional, punctual, and the quality of work is exceptional. Great value for money.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Linda Pretorius',
    role: 'Homeowner',
    location: 'Waverley',
    rating: 5,
    content:
      'Our driveway paving looks stunning! The team handled everything professionally and cleaned up thoroughly each day. Very happy with the result and would definitely use them again.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Johan Kruger',
    role: 'Homeowner',
    location: 'Universitas',
    rating: 5,
    content:
      'The retaining wall they built for our sloped garden is both functional and beautiful. Excellent craftsmanship and great communication throughout the project. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Bloemfontein.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-border rounded-xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="h-10 w-10 text-primary/20" />
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-10 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <StarRating rating={5} />
              <span className="text-2xl font-bold text-foreground ml-4">5.0</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Trusted by 100+ Happy Customers</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join our growing list of satisfied clients who have transformed their outdoor spaces.
            </p>
            <a
              href="/booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all hover:scale-105 shadow-lg"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
