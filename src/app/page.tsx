import Hero from '@/components/home/Hero';
import FestivalSection from '@/components/home/FestivalSection';
import TrendingCategories from '@/components/home/TrendingCategories';
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

  const trendingCategories = wcCategories.map((c: any) => ({
    title: c.name,
    image: c.image?.src || '/photos/default-category.jpeg',
    href: `/categories/${c.slug || c.id}`
  }));

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
      <TrendingCategories categories={trendingCategories} />
      <FeaturedCollections products={featuredProducts.slice(0, 4)} />
      <Features />
      <FAQSection />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
