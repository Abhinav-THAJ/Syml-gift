'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6] pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[50%] rounded-full bg-secondary/30 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
            Premium Gifting Experience
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
            Thoughtfully Curated Gifts For <span className="text-primary italic font-serif font-light">Every Occasion</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            "Something You Love for Someone You Love"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <Link 
              href="/categories/hampers" 
              className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 text-primary-foreground shadow-[0_0_40px_-10px_rgba(212,175,55,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.7)]"
            >
              <span className="font-medium text-lg">Shop Hampers</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/categories" 
              className="flex h-14 items-center justify-center rounded-full border-2 border-border px-8 font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
            >
              Explore Collections
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] w-full hidden lg:block"
        >
          {/* Main Hero Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[90%] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="/photos/1.jpeg"
              alt="Luxury Gift Hamper"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          {/* Floating Pinterest-style Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-[10%] left-0 sm:-left-4 bg-background p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 backdrop-blur-md bg-white/90 border border-border/50"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl">✨</div>
            <div>
              <p className="font-semibold text-sm">Best Seller</p>
              <p className="text-xs text-muted-foreground">Luxury Birthday Box</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[15%] right-0 sm:-right-4 bg-background p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3 backdrop-blur-md bg-white/90 border border-border/50"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">💝</div>
            <div>
              <p className="font-semibold text-sm">Top Rated</p>
              <p className="text-xs text-muted-foreground">Anniversary Special</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
