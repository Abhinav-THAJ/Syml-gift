'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, SlidersHorizontal, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const allProducts = [
  { id: 1, title: 'The Royal Anniversary Box', price: '₹4,999', category: 'Anniversary', image: '/photos/16.jpeg', height: 'h-[400px]' },
  { id: 2, title: 'Personalized Executive Set', price: '₹2,499', category: 'Corporate', image: '/photos/17.jpeg', height: 'h-[300px]' },
  { id: 3, title: 'Blush & Gold Birthday Hamper', price: '₹3,299', category: 'Birthday', image: '/photos/19.jpeg', height: 'h-[450px]' },
  { id: 4, title: 'Minimalist Gift Box', price: '₹1,499', category: 'Budget', image: '/photos/20.jpeg', height: 'h-[300px]' },
  { id: 5, title: 'Luxury Wellness Kit', price: '₹5,999', category: 'Special', image: '/photos/21.jpeg', height: 'h-[400px]' },
  { id: 6, title: 'Festive Delight Hamper', price: '₹2,999', category: 'Festive', image: '/photos/22.jpeg', height: 'h-[350px]' },
  { id: 7, title: 'Premium Chocolate Assortment', price: '₹1,999', category: 'Birthday', image: '/photos/23.jpeg', height: 'h-[300px]' },
  { id: 8, title: 'Elegant Floral Box', price: '₹3,499', category: 'Anniversary', image: '/photos/24.jpeg', height: 'h-[450px]' },
  { id: 9, title: 'Corporate Welcome Kit', price: '₹2,199', category: 'Corporate', image: '/photos/25.jpeg', height: 'h-[400px]' },
];

const categories = ['All', 'Birthday', 'Anniversary', 'Corporate', 'Festive', 'Budget', 'Special'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Explore Collections</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover our thoughtfully curated hampers. Use filters to find the perfect gift for your special occasion.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-border">
          {/* Categories Scrollable Row */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
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
                <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">{product.category}</p>
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
