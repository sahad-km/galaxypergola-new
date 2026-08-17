import { Metadata } from 'next';
import { Suspense } from 'react';
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
      <main className="flex-grow pt-42 pb-20">
        <Suspense fallback={
          <div className="max-w-7xl mx-auto px-6 py-20 text-center text-neutral-400 font-semibold text-sm">
            Loading products catalog...
          </div>
        }>
          <ProductsCatalogClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
