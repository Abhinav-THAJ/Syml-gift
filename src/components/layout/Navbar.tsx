'use client';

import Link from 'next/link';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex-shrink-0">
          <span className="font-heading text-2xl font-bold tracking-tighter text-primary">
            SMYL GIFTING
          </span>
        </Link>

        {/* Search Bar - Pinterest Style */}
        <div className="flex-1 max-w-2xl hidden md:flex items-center relative group">
          <div className="absolute left-4 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for hampers, gifts, occasions..."
            className="w-full h-12 pl-12 pr-4 bg-muted/50 hover:bg-muted focus:bg-background border-2 border-transparent focus:border-primary/20 rounded-full outline-none transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-foreground/80 h-full">
          <div className="relative h-full flex items-center group">
            <Link href="/categories" className="hover:text-primary transition-colors py-8">Categories</Link>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-3xl p-8 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-4 border-b border-border pb-2">Occasions</h4>
                  <ul className="space-y-3">
                    <li><Link href="/categories/birthday-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Birthday Hampers</Link></li>
                    <li><Link href="/categories/anniversary-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Anniversary Hampers</Link></li>
                    <li><Link href="/categories/mothers-day-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Mother's Day Hampers</Link></li>
                    <li><Link href="/categories/valentines-day-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Valentine's Day Hampers</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-4 border-b border-border pb-2">Special Collections</h4>
                  <ul className="space-y-3">
                    <li><Link href="/categories/period-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Period Hampers</Link></li>
                    <li><Link href="/categories/breakup-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Breakup Hampers</Link></li>
                    <li><Link href="/categories/patch-up-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Patch Up Hampers</Link></li>
                    <li><Link href="/categories/sorry-hampers" className="text-muted-foreground hover:text-foreground transition-colors">Sorry Hampers</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-4 border-b border-border pb-2">Gifts &amp; Decor</h4>
                  <ul className="space-y-3">
                    <li><Link href="/categories/photo-frames" className="text-muted-foreground hover:text-foreground transition-colors">Photo Frames</Link></li>
                    <li><Link href="/categories/lighting-lamps" className="text-muted-foreground hover:text-foreground transition-colors">Lighting Lamps</Link></li>
                    <li><Link href="/categories/jewellery-sets" className="text-muted-foreground hover:text-foreground transition-colors">Jewellery Sets</Link></li>
                    <li><Link href="/categories/corporate-hampers" className="text-muted-foreground hover:text-foreground transition-colors font-medium text-primary">Corporate Gifting &rarr;</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link href="/occasions" className="hover:text-primary transition-colors py-8">Occasions</Link>
          <Link href="/build-hamper" className="hover:text-primary transition-colors py-8">Build a Hamper</Link>
          <Link href="/corporate" className="hover:text-primary transition-colors py-8">Corporate</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-all">
            <Heart className="w-6 h-6" />
          </button>
          <button className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-all relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-all hidden sm:block">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
