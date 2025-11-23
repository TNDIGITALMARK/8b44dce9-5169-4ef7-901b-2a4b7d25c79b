'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

const categories = [
  'All Projects',
  'Residential Gardens',
  'Commercial Landscaping',
  'Artificial Turf',
  'Water Features',
  'Driveways & Pathways',
  'Retaining Walls',
];

// Professional gallery images - accurately matching categories
const projects = [
  {
    id: 1,
    category: 'Residential Gardens',
    title: 'Modern Garden Transformation',
    description: 'Complete backyard makeover with native plants and entertainment area',
    imageUrl: '/generated/residential-garden-1.png',
  },
  {
    id: 2,
    category: 'Artificial Turf',
    title: 'Premium Artificial Lawn',
    description: 'Low-maintenance artificial turf installation for family home',
    imageUrl: '/generated/artificial-turf-1.png',
  },
  {
    id: 3,
    category: 'Water Features',
    title: 'Custom Water Feature',
    description: 'Elegant fountain centerpiece with natural stone surround',
    imageUrl: '/generated/water-feature-1.png',
  },
  {
    id: 4,
    category: 'Driveways & Pathways',
    title: 'Paved Driveway',
    description: 'Durable paving with decorative border patterns',
    imageUrl: '/generated/driveway-paving-1.png',
  },
  {
    id: 5,
    category: 'Commercial Landscaping',
    title: 'Office Complex Landscape',
    description: 'Professional landscaping for corporate environment',
    imageUrl: '/generated/commercial-landscaping-1.png',
  },
  {
    id: 6,
    category: 'Retaining Walls',
    title: 'Tiered Retaining Wall',
    description: 'Multi-level stone retaining wall with integrated planting',
    imageUrl: '/generated/retaining-wall-1.png',
  },
  {
    id: 7,
    category: 'Residential Gardens',
    title: 'Cottage Garden Design',
    description: 'Colorful perennial garden with natural stone paths',
    imageUrl: '/generated/residential-garden-2.png',
  },
  {
    id: 8,
    category: 'Artificial Turf',
    title: 'Rooftop Turf Installation',
    description: 'Synthetic grass for urban rooftop space',
    imageUrl: '/generated/artificial-turf-2.png',
  },
  {
    id: 9,
    category: 'Water Features',
    title: 'Natural Pond Feature',
    description: 'Eco-friendly pond with aquatic plants and fish',
    imageUrl: '/generated/water-feature-2.png',
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const filteredProjects =
    activeCategory === 'All Projects'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Project Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of completed landscaping projects across Bloemfontein and surrounding areas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'bg-white text-foreground border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Want to See Your Project Here?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let's discuss your landscaping vision and create something amazing together.
            </p>
            <a
              href="/booking"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
