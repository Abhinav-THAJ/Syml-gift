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
    <div className="min-h-screen bg-background pb-20" style={{ paddingTop: '120px' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">Explore Collections</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our thoughtfully curated hampers for every special occasion.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-border">
          {/* Categories Scrollable Row */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-border text-sm font-medium hover:bg-muted/50 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>

        {/* Product Grid — 4 columns like reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted/30 mb-3">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                    {product.category}
                  </span>
                  <button
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:text-primary shadow-sm"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm font-semibold text-foreground">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
