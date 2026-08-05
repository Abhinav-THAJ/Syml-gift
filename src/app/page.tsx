import Hero from '@/components/home/Hero';
import FestivalSection from '@/components/home/FestivalSection';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import Features from '@/components/home/Features';
import FAQSection from '@/components/home/FAQSection';
import Testimonials from '@/components/home/Testimonials';
import InstagramFeed from '@/components/home/InstagramFeed';
import { getCategories, getProducts } from '@/lib/woocommerce';
import { getPageData } from '@/lib/wordpress';

export const revalidate = 60;

export default async function Home() {
  const [wcCategories, wcProducts, homePageData] = await Promise.all([
    getCategories('per_page=100&hide_empty=false'),
    getProducts('per_page=100'),
    getPageData('home'),
  ]);

  const acf = homePageData?.acf || {};

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
      <Hero 
        image={acf.hero_image || undefined}
        link={acf.hero_link || undefined}
      />
      <FestivalSection 
        badge={acf.festival_badge || undefined}
        title={acf.festival_title || undefined}
        description={acf.festival_description || undefined}
        buttonText={acf.festival_button_text || undefined}
        buttonLink={acf.festival_button_link || undefined}
        image={acf.festival_image || undefined}
      />
      <FeaturedCollections 
        products={featuredProducts} 
        title={acf.featured_collections_title || undefined}
        subtitle={acf.featured_collections_subtitle || undefined}
      />
      <Features 
        customise_image={acf.customise_image || undefined}
        customise_title={acf.customise_title || undefined}
        customise_description={acf.customise_description || undefined}
        customise_button_text={acf.customise_button_text || undefined}
        customise_button_link={acf.customise_button_link || undefined}
        stats_title={acf.stats_title || undefined}
        stats_description={acf.stats_description || undefined}
        wish_image={acf.wish_image || undefined}
        wish_title={acf.wish_title || undefined}
        wish_description={acf.wish_description || undefined}
        wish_button_text={acf.wish_button_text || undefined}
        wish_button_link={acf.wish_button_link || undefined}
      />
      <FAQSection 
        title={acf.faq_title || undefined}
        description={acf.faq_description || undefined}
      />
      <Testimonials 
        title={acf.testimonials_title || undefined}
        subtitle={acf.testimonials_subtitle || undefined}
        testimonials={[
          ...(acf.t1_name && acf.t1_content ? [{
            id: 1,
            name: acf.t1_name,
            role: acf.t1_role || 'Customer',
            content: acf.t1_content,
            rating: parseInt(acf.t1_rating) || 5,
            initial: acf.t1_initial || acf.t1_name.charAt(0).toUpperCase()
          }] : []),
          ...(acf.t2_name && acf.t2_content ? [{
            id: 2,
            name: acf.t2_name,
            role: acf.t2_role || 'Customer',
            content: acf.t2_content,
            rating: parseInt(acf.t2_rating) || 5,
            initial: acf.t2_initial || acf.t2_name.charAt(0).toUpperCase()
          }] : []),
          ...(acf.t3_name && acf.t3_content ? [{
            id: 3,
            name: acf.t3_name,
            role: acf.t3_role || 'Customer',
            content: acf.t3_content,
            rating: parseInt(acf.t3_rating) || 5,
            initial: acf.t3_initial || acf.t3_name.charAt(0).toUpperCase()
          }] : [])
        ].length > 0 ? [
          ...(acf.t1_name && acf.t1_content ? [{
            id: 1,
            name: acf.t1_name,
            role: acf.t1_role || 'Customer',
            content: acf.t1_content,
            rating: parseInt(acf.t1_rating) || 5,
            initial: acf.t1_initial || acf.t1_name.charAt(0).toUpperCase()
          }] : []),
          ...(acf.t2_name && acf.t2_content ? [{
            id: 2,
            name: acf.t2_name,
            role: acf.t2_role || 'Customer',
            content: acf.t2_content,
            rating: parseInt(acf.t2_rating) || 5,
            initial: acf.t2_initial || acf.t2_name.charAt(0).toUpperCase()
          }] : []),
          ...(acf.t3_name && acf.t3_content ? [{
            id: 3,
            name: acf.t3_name,
            role: acf.t3_role || 'Customer',
            content: acf.t3_content,
            rating: parseInt(acf.t3_rating) || 5,
            initial: acf.t3_initial || acf.t3_name.charAt(0).toUpperCase()
          }] : [])
        ] : undefined}
      />
      <InstagramFeed />
    </>
  );
}
