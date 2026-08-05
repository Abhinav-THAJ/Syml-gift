'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export type FeaturedProduct = {
  id: string | number;
  slug?: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  badgeColor?: string;
};

export default function FeaturedCollections({ 
  products = [],
  title,
  subtitle
}: { 
  products?: FeaturedProduct[],
  title?: string,
  subtitle?: string
}) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-foreground">
              {title || "Budget Hamper Solutions Perfect for Gifting"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {subtitle || "Beautifully curated gift hampers handpicked for your special moments"}
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden sm:block text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View all →
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x scrollbar-hide">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
              className="group w-[160px] min-w-[160px] sm:w-[240px] sm:min-w-[240px] md:w-[280px] md:min-w-[280px] lg:w-[300px] lg:min-w-[300px] flex-shrink-0 snap-start"
            >
              <Link href={`/product/${product.slug || product.id}`}>
                {/* Image container */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted/30 mb-3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product info */}
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:hidden">
          <Link
            href="/categories"
            className="h-11 px-8 rounded-full border-2 border-primary text-primary font-medium text-sm transition-all hover:bg-primary hover:text-primary-foreground flex items-center"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
