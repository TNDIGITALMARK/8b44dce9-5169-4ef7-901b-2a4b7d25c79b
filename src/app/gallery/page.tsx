import { Header } from '@/components/landscaping/Header';
import { Gallery } from '@/components/landscaping/Gallery';
import { Testimonials } from '@/components/landscaping/Testimonials';
import { Footer } from '@/components/landscaping/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
