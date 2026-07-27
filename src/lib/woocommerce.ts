export const WC_URL = process.env.WC_URL || 'https://paleturquoise-guanaco-735591.hostingersite.com';
export const WC_CONSUMER_KEY = process.env.WC_CONSUMER_KEY || 'ck_e369d38cb478cd422334dcf7affe28f11c86facb';
export const WC_CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || 'cs_dd6e2754d434d147fa2e0e02178d0ac98d7508f9';

// Slugs or names of products to exclude from frontend display
const EXCLUDED_PRODUCT_SLUGS = ['men-hamper'];

export async function fetchWC(endpoint: string, options: RequestInit = {}) {
  if (!WC_URL || !WC_CONSUMER_KEY || !WC_CONSUMER_SECRET) {
    console.warn('WooCommerce credentials are not set in environment variables.');
    return [];
  }

  const auth = Buffer.from(`${WC_CONSUMER_KEY}:${WC_CONSUMER_SECRET}`).toString('base64');
  
  try {
    const url = new URL(`${WC_URL}/wp-json/wc/v3/${endpoint}`);
    const response = await fetch(url.toString(), {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error(`WooCommerce API Error: ${response.statusText} (${response.status}) on ${url.toString()}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch from WooCommerce:', error);
    return [];
  }
}

export async function getProducts(query = 'per_page=100') {
  const products = await fetchWC(`products?${query}`);
  if (!Array.isArray(products)) return [];
  return products.filter(
    (p: any) => 
      !EXCLUDED_PRODUCT_SLUGS.includes(p.slug?.toLowerCase()) && 
      p.name?.toUpperCase() !== 'MEN HAMPER'
  );
}

export async function getProduct(slugOrId: string) {
  if (!slugOrId) return null;
  
  if (EXCLUDED_PRODUCT_SLUGS.includes(slugOrId.toLowerCase()) || slugOrId.toLowerCase() === 'men-hamper') {
    return null;
  }

  // 1. Try slug search
  const productsBySlug = await fetchWC(`products?slug=${encodeURIComponent(slugOrId)}`);
  if (Array.isArray(productsBySlug) && productsBySlug.length > 0) {
    return productsBySlug[0];
  }

  // 2. If slug search returned empty and identifier is numeric, try direct ID fetch
  if (!isNaN(Number(slugOrId))) {
    const singleProduct = await fetchWC(`products/${slugOrId}`);
    if (singleProduct && singleProduct.id && singleProduct.name?.toUpperCase() !== 'MEN HAMPER') {
      return singleProduct;
    }
  }

  // 3. Fallback: retrieve products list and find matching slug or ID
  const allProducts = await fetchWC(`products?per_page=100`);
  if (Array.isArray(allProducts)) {
    const found = allProducts.find(
      (p: any) => 
        (p.slug === slugOrId || p.id.toString() === slugOrId) &&
        !EXCLUDED_PRODUCT_SLUGS.includes(p.slug?.toLowerCase()) &&
        p.name?.toUpperCase() !== 'MEN HAMPER'
    );
    if (found) return found;
  }

  return null;
}

export async function getCategories(query = 'per_page=100&hide_empty=false') {
  const cats = await fetchWC(`products/categories?${query}`);
  if (!Array.isArray(cats)) return [];
  return cats.filter(
    (c: any) => c.slug !== 'uncategorized' && c.name.toLowerCase() !== 'uncategorized'
  );
}

export async function getCategory(slugOrId: string) {
  if (!slugOrId) return null;
  if (slugOrId === 'uncategorized') return null;

  const categoriesBySlug = await fetchWC(`products/categories?slug=${encodeURIComponent(slugOrId)}`);
  if (Array.isArray(categoriesBySlug) && categoriesBySlug.length > 0) {
    return categoriesBySlug[0];
  }
  if (!isNaN(Number(slugOrId))) {
    const singleCategory = await fetchWC(`products/categories/${slugOrId}`);
    if (singleCategory && singleCategory.id) {
      return singleCategory;
    }
  }
  const allCats = await fetchWC(`products/categories?per_page=100&hide_empty=false`);
  if (Array.isArray(allCats)) {
    const found = allCats.find(
      (c: any) => c.slug === slugOrId || c.id.toString() === slugOrId
    );
    if (found) return found;
  }
  return null;
}
