import { getProduct, getProducts } from '@/lib/woocommerce';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = await getProducts('per_page=100');
  return products.map((product: any) => ({
    slug: product.slug || product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const wcProduct = await getProduct(slug);

  if (!wcProduct) {
    notFound();
  }

  // Fetch related products if any
  let relatedProducts: any[] = [];
  if (wcProduct.related_ids && wcProduct.related_ids.length > 0) {
    const relatedQuery = wcProduct.related_ids.slice(0, 3).join(',');
    relatedProducts = await getProducts(`include=${relatedQuery}`);
  }

  const productData = {
    id: wcProduct.id,
    title: wcProduct.name,
    price: Number(wcProduct.price) || 0,
    rating: Number(wcProduct.average_rating) || 0,
    reviews: wcProduct.rating_count || 0,
    description: wcProduct.description || wcProduct.short_description || '',
    images: wcProduct.images?.length > 0 
      ? wcProduct.images.map((img: any) => img.src) 
      : ['/photos/default-product.jpeg'],
    relatedProducts: relatedProducts.map((p: any) => ({
      id: p.id,
      title: p.name,
      price: Number(p.price) || 0,
      image: p.images?.[0]?.src || '/photos/default-product.jpeg',
      slug: p.slug
    }))
  };

  return <ProductClient productData={productData} />;
}
