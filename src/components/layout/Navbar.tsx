'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/categories', label: 'COLLECTIONS' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50' : 'bg-background border-b border-border/30'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left nav links - desktop */}
        <nav className="hidden lg:flex items-center gap-8 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center logo */}
        <Link href="/" className="flex-shrink-0 mx-auto lg:mx-0">
          <div className="relative w-48 h-14">
            <Image
              src="/photos/IMG_8385.PNG"
              alt="SMYL GIFTING"
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </Link>

        {/* Right icons - desktop */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 text-foreground hover:text-primary transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium tracking-widest text-foreground hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-foreground hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
