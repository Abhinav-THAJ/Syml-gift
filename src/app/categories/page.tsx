import { getCategories, getProducts } from '@/lib/woocommerce';
import ShopClient from './ShopClient';

export default async function ShopPage() {
  const [wcCategories, wcProducts] = await Promise.all([
    getCategories('per_page=100&hide_empty=false'),
    getProducts('per_page=100'),
  ]);
  
  // Build category tree
  const categoryTree = wcCategories.reduce((acc: any[], cat: any) => {
    if (cat.slug === 'uncategorized') return acc;
    if (cat.parent === 0) {
      acc.push({ ...cat, children: wcCategories.filter((c: any) => c.parent === cat.id && c.slug !== 'uncategorized') });
    }
    return acc;
  }, []);
  
  const products = wcProducts.map((p: any) => {
    const validCats = p.categories?.filter((c: any) => c.slug !== 'uncategorized' && c.name.toLowerCase() !== 'uncategorized') || [];
    const mainCategory = validCats[0]?.name;
    const allCategoryNames = validCats.map((c: any) => c.name);

    return {
      id: p.id,
      title: p.name,
      price: p.price && p.price !== '' ? `₹${p.price}` : (p.regular_price && p.regular_price !== '' ? `₹${p.regular_price}` : '₹0'),
      category: mainCategory || (p.name?.toLowerCase().includes('onam') ? 'Onam Hamper' : undefined),
      categories: allCategoryNames,
      image: p.images?.[0]?.src || '/photos/default-product.jpeg',
      slug: p.slug
    };
  });

  return <ShopClient categories={categoryTree} initialProducts={products} />;
}
