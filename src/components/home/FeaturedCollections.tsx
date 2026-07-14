'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
const products = [
  { id: 1, title: 'The Royal Anniversary Box', price: '₹4,999', image: '/photos/10.jpeg', height: 'h-[400px]' },
  { id: 2, title: 'Personalized Executive Set', price: '₹2,499', image: '/photos/11.jpeg', height: 'h-[300px]' },
  { id: 3, title: 'Blush & Gold Birthday Hamper', price: '₹3,299', image: '/photos/12.jpeg', height: 'h-[450px]' },
  { id: 4, title: 'Minimalist Gift Box', price: '₹1,499', image: '/photos/13.jpeg', height: 'h-[300px]' },
  { id: 5, title: 'Luxury Wellness Kit', price: '₹5,999', image: '/photos/14.jpeg', height: 'h-[400px]' },
  { id: 6, title: 'Festive Delight Hamper', price: '₹2,999', image: '/photos/15.jpeg', height: 'h-[350px]' },
];

export default function FeaturedCollections() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Featured Collections
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Handpicked luxury hampers that are sure to make an impression. Save your favorites for later.
            </p>
          </div>
          <Link href="/categories/hampers" className="text-primary font-medium hover:underline decoration-2 underline-offset-4">
            View All Collections
          </Link>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative break-inside-avoid rounded-[2rem] overflow-hidden group bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              <div className={`relative w-full ${product.height}`}>
                <Link href={`/product/${product.id}`} className="absolute inset-0 z-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-primary hover:scale-110 shadow-sm z-10">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 relative z-10 pointer-events-none">
                <Link href={`/product/${product.id}`} className="pointer-events-auto">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-semibold text-lg">{product.price}</span>
                  <button className="text-sm font-medium text-primary hover:underline underline-offset-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
