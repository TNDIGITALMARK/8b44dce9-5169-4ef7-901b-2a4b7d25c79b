import { Header } from '@/components/landscaping/Header';
import { BookingForm } from '@/components/landscaping/BookingForm';
import { PricingTable } from '@/components/landscaping/PricingTable';
import { ContactInfo } from '@/components/landscaping/ContactInfo';
import { Footer } from '@/components/landscaping/Footer';

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 bg-gradient-to-br from-primary/5 via-white to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your <span className="text-primary">Free Consultation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your outdoor space? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <PricingTable />
        <BookingForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}
