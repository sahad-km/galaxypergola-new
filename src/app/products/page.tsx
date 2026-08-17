import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsCatalogClient from '@/components/ProductsCatalogClient';

export const metadata: Metadata = {
  title: 'Our Products | Louvre Roofs, Pergolas & Outdoor Blinds | Cluster Outdoor',
  description: 'Browse our full lineup of New Zealand engineered louvre roofs, glass pergolas, architectural canopies, Ziptrak outdoor blinds, carports, shutters, and sunrooms.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream-bg">
      <Header />
      <main className="flex-grow pt-28 pb-20">
        <ProductsCatalogClient />
      </main>
      <Footer />
    </div>
  );
}
