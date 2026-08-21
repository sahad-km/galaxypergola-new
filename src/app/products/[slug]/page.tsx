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
  const extraSlugs = ['canopy', 'carport', 'blinds', 'outdoor-blinds', 'pergola'];
  const allSlugs = [...productsData.map((product) => product.id), ...extraSlugs];
  return Array.from(new Set(allSlugs)).map((slug) => ({ slug }));
}

function resolveProduct(slug: string) {
  let product = productsData.find((p) => p.id === slug);
  if (!product) {
    if (slug === 'straight-canopy' || slug === 'curved-canopy' || slug === 'window-canopy' || slug === 'canopy') {
      product = productsData.find((p) => p.id === 'canopy' || p.id === 'straight-canopy');
    } else if (slug === 'arch-carport' || slug === 'straight-carport' || slug === 'carport') {
      product = productsData.find((p) => p.id === 'carport' || p.id === 'arch-carport');
    } else if (slug === 'easychannel-blinds' || slug === 'easytrack-blinds' || slug === 'outdoor-blinds' || slug === 'blinds') {
      product = productsData.find((p) => p.id === 'ziptrak-blinds');
    } else if (slug === 'pergola') {
      product = productsData.find((p) => p.id === 'pergo-vue');
    }
  }
  return product;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = resolveProduct(slug);

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
  const product = resolveProduct(slug);

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
