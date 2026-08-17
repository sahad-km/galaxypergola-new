import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/siteData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Cluster Outdoor',
    };
  }

  return {
    title: `${product.name} | Cluster Outdoor New Zealand`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.tagline || 'Cluster Outdoor NZ'}`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-cream-bg">
      <Header />
      <main className="flex-grow pt-42 pb-20">
        <ProductDetailClient product={product} allProducts={productsData} />
      </main>
      <Footer />
    </div>
  );
}
