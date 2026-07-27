import Hero from '@/components/home/Hero';
import FestivalSection from '@/components/home/FestivalSection';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import Features from '@/components/home/Features';
import FAQSection from '@/components/home/FAQSection';
import Testimonials from '@/components/home/Testimonials';
import InstagramFeed from '@/components/home/InstagramFeed';
import { getCategories, getProducts } from '@/lib/woocommerce';

export const revalidate = 60;

export default async function Home() {
  const [wcCategories, wcProducts] = await Promise.all([
    getCategories('per_page=100&hide_empty=false'),
    getProducts('per_page=100'),
  ]);

  const featuredProducts = wcProducts.map((p: any) => ({
    id: p.id,
    slug: p.slug || p.id.toString(),
    title: p.name,
    price: p.price ? `₹${p.price}` : '₹0',
    originalPrice: p.regular_price && p.regular_price !== p.price ? `₹${p.regular_price}` : undefined,
    image: p.images?.[0]?.src || '/photos/default-product.jpeg',
    badge: p.on_sale ? 'Sale' : undefined,
    badgeColor: p.on_sale ? 'bg-primary text-primary-foreground' : undefined,
  }));

  return (
    <>
      <Hero />
      <FestivalSection />
      <FeaturedCollections products={featuredProducts} />
      <Features />
      <FAQSection />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
