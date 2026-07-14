'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Valentine's Day Breathing Teddy with Light & Soothing Sound",
    price: '₹899',
    originalPrice: '₹1,099',
    image: '/photos/10.jpeg',
    badge: 'Sale',
    badgeColor: 'bg-primary text-primary-foreground',
  },
  {
    id: 2,
    title: 'Cute Breathing Rabbit Plush Toy with Light & Sound',
    price: '₹899',
    originalPrice: '₹999',
    image: '/photos/11.jpeg',
    badge: 'Sale',
    badgeColor: 'bg-primary text-primary-foreground',
  },
  {
    id: 3,
    title: 'Lollipop Bunny Night Lamp – Cute Mini LED Night Light',
    price: '₹120',
    originalPrice: '₹149',
    image: '/photos/12.jpeg',
    badge: 'Sold out',
    badgeColor: 'bg-background text-foreground border border-border',
  },
  {
    id: 4,
    title: 'Flower Bunny Night Lamp – Cute Mini LED Night Light',
    price: '₹120',
    originalPrice: '₹149',
    image: '/photos/13.jpeg',
    badge: 'Sold out',
    badgeColor: 'bg-background text-foreground border border-border',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Budget Hamper Solutions Perfect for Gifting
          </h2>
          <Link
            href="/categories"
            className="hidden sm:block text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <Link href={`/product/${product.id}`}>
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
