'use client';

import { useState } from 'react';
import { Calendar, Send } from 'lucide-react';

const services = [
  'Artificial Turf Installation',
  'Concrete Masonry',
  'Custom Landscape Design',
  'Desert Landscaping',
  'Driveway Landscaping',
  'Driveway or Path Paving',
  'Garden Decorating',
  'Garden Design',
  'Garden Drainage',
  'Garden Landscaping',
  'Landscape Design Construction',
  'Landscape Installations',
  'Outdoor Step Construction',
  'Outdoor Water Feature Design',
  'Path Landscaping',
  'Patio Design',
  'Retaining Wall Design',
  'Stonemasonry',
];

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          preferredDate: '',
          message: '',
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-muted/30" id="booking-form">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request Your <span className="text-primary">Free Quote</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours to discuss your project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="079 123 4567"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block mb-2 font-medium">
                  Preferred Consultation Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your landscaping project, including size, location, and any specific requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                style={{
                  backgroundColor: 'hsl(140 65% 28%)',
                  color: 'white',
                }}
              >
                {isSubmitting ? (
                  <span style={{ color: 'white' }}>Sending...</span>
                ) : (
                  <>
                    <span style={{ color: 'white' }}>Send Request</span>
                    <Send className="h-5 w-5" style={{ color: 'white' }} />
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg text-center">
                  <p className="font-semibold">Thank you for your request!</p>
                  <p className="text-sm">We'll contact you within 24 hours to discuss your project.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
