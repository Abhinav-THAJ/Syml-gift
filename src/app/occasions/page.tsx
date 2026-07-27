import { getCategories } from '@/lib/woocommerce';
import OccasionsClient from './OccasionsClient';

export default async function OccasionsPage() {
  const wcCategories = await getCategories('per_page=100');
  
  const occasions = wcCategories.map((c: any) => ({
    title: c.name,
    image: c.image?.src || '/photos/default-category.jpeg',
    slug: c.slug
  }));

  // If no categories from WooCommerce, provide empty array.
  // The client will just render nothing or empty state.
  return <OccasionsClient occasions={occasions} />;
}
