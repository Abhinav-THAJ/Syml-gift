import Hero from '@/components/home/Hero';
import TrendingCategories from '@/components/home/TrendingCategories';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <TrendingCategories />
      <FeaturedCollections />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  );
}
