'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, SlidersHorizontal, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data to simulate database response for dynamic categories
const allProducts = [
  { id: 1, title: 'The Royal Anniversary Box', price: '₹4,999', image: '/photos/26.jpeg', height: 'h-[400px]' },
  { id: 2, title: 'Personalized Executive Set', price: '₹2,499', image: '/photos/27.jpeg', height: 'h-[300px]' },
  { id: 3, title: 'Blush & Gold Birthday Hamper', price: '₹3,299', image: '/photos/28.jpeg', height: 'h-[450px]' },
  { id: 4, title: 'Minimalist Gift Box', price: '₹1,499', image: '/photos/29.jpeg', height: 'h-[300px]' },
];

export default function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const resolvedParams = use(params);
  // Format slug to readable title (e.g., "mothers-day-hampers" -> "Mother's Day Hampers")
  const title = resolvedParams.categorySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
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
          <p className="text-muted-foreground">{allProducts.length} Products Found</p>
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
          {allProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-muted">
                <Link href={`/product/${product.id}`} className="absolute inset-0 z-0">
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
                <Link href={`/product/${product.id}`} className="block mb-2">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
