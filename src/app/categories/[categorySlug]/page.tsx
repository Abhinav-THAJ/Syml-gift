import Image from 'next/image';
import Link from 'next/link';
import { Filter, SlidersHorizontal, Heart, ShoppingBag } from 'lucide-react';
import { getCategory, getProducts, getCategories } from '@/lib/woocommerce';

export async function generateStaticParams() {
  const categories = await getCategories('per_page=100');
  return categories.map((category: any) => ({
    categorySlug: category.slug || category.id.toString(),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const resolvedParams = await params;
  const { categorySlug } = resolvedParams;
  const category = await getCategory(categorySlug);

  let products = [];
  if (category) {
    products = await getProducts(`category=${category.id}&per_page=100`);
  }

  if (products.length === 0) {
    const allProducts = await getProducts('per_page=100');
    const slugClean = categorySlug.replace(/-/g, ' ').toLowerCase();
    products = allProducts.filter((p: any) => {
      const pCats = p.categories?.map((c: any) => c.name.toLowerCase()).join(' ') || '';
      const pName = (p.name || '').toLowerCase();
      return pCats.includes(slugClean) || pName.includes(slugClean) || (slugClean.includes('onam') && (pCats.includes('onam') || pName.includes('onam')));
    });
  }

  const title = category?.name || categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const mappedProducts = products.map((p: any) => ({
    id: p.id,
    title: p.name,
    price: `₹${p.price}`,
    image: p.images?.[0]?.src || '/photos/default-product.jpeg',
    slug: p.slug
  }));

  return (
    <div className="min-h-screen bg-background pb-20" style={{ paddingTop: '120px' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Explore our beautifully curated collection of {title.toLowerCase()}. Perfect for making memories.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-border">
          <p className="text-muted-foreground">{mappedProducts.length} Products Found</p>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mappedProducts.map((product: any, index: number) => (
            <div
              key={product.id}
              className="relative group bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col animate-in fade-in slide-in-from-bottom-5"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
                <Link href={`/product/${product.slug || product.id}`} className="absolute inset-0 z-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-primary hover:scale-110 shadow-sm z-10">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <Link href={`/product/${product.slug || product.id}`} className="block mb-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50">
                  <span className="font-semibold text-lg text-foreground">{product.price}</span>
                  <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
