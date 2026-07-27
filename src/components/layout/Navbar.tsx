'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, ShoppingBag, Menu, X, ArrowRight, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/categories', label: 'COLLECTIONS' },
  { href: '/about', label: 'OUR JOURNEY' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar({ categories = [] }: { categories?: any[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<any>(null);
  const { cartCount, setIsCartOpen, setIsSignInOpen, user, logout } = useAppContext();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20 py-2' 
          : 'bg-background border-b border-border/30 py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        <nav className="hidden lg:flex items-center gap-10 flex-1">
          {navLinks.map((link) => {
            if (link.label === 'COLLECTIONS') {
              return (
                <div key={link.href} className="group relative py-2">
                  <Link
                    href={link.href}
                    className="relative text-sm font-semibold tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                  
                  {/* Mega Menu */}
                  {categories.length > 0 && (
                    <div className="absolute top-full -left-4 w-[800px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-background/98 backdrop-blur-3xl border border-border/50 shadow-2xl rounded-2xl flex min-h-[380px] overflow-hidden">
                        {/* Left Pane: Main Categories */}
                        <div className="w-1/3 bg-muted/30 p-4 border-r border-border/50">
                          <ul className="space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                            {categories.map((parent) => (
                              <li key={parent.id}>
                                <Link 
                                  href={`/categories/${parent.slug}`}
                                  onMouseEnter={() => setActiveCategory(parent)}
                                  className={`block px-3 py-2 rounded-xl text-[11px] font-bold tracking-widest transition-all ${
                                    (activeCategory?.id === parent.id || (!activeCategory && categories[0]?.id === parent.id))
                                      ? 'bg-background text-primary shadow-sm border border-border/50'
                                      : 'text-foreground/75 hover:bg-background/50 hover:text-primary'
                                  }`}
                                >
                                  {parent.name.toUpperCase()}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Right Pane: Sub Categories */}
                        <div className="w-2/3 p-8 bg-background">
                          {(() => {
                            const displayCat = activeCategory || categories[0];
                            if (!displayCat) return null;
                            
                            return (
                              <div key={displayCat.id} className="animate-in fade-in slide-in-from-right-4 duration-300">
                                <h3 className="text-lg font-bold text-foreground mb-6 pb-4 border-b border-border/50 flex items-center justify-between">
                                  {displayCat.name}
                                  <Link href={`/categories/${displayCat.slug}`} className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                                    Shop All <ArrowRight className="w-3 h-3" />
                                  </Link>
                                </h3>
                                
                                {displayCat.children && displayCat.children.length > 0 ? (
                                  <div className="columns-2 gap-6 space-y-4 max-h-[50vh] overflow-y-auto custom-scrollbar pr-2 pb-2">
                                    {displayCat.children.map((child: any) => (
                                      <div key={child.id} className="break-inside-avoid pb-1">
                                        <Link 
                                          href={`/categories/${child.slug}`} 
                                          className="group flex items-center gap-2 text-[14px] text-foreground/75 hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/5 -ml-2"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                          {child.name}
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center justify-center h-[200px] text-muted-foreground">
                                    <p className="text-sm">Explore our curated collection of {displayCat.name}</p>
                                    <Link href={`/categories/${displayCat.slug}`} className="mt-6 px-8 py-3 bg-primary text-primary-foreground rounded-full text-xs font-semibold hover:opacity-90 transition-opacity">
                                      View Collection
                                    </Link>
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <div key={link.href} className="group relative py-2">
                <Link
                  href={link.href}
                  className="relative text-sm font-semibold tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Center logo */}
        <Link href="/" className="flex-shrink-0 mx-auto lg:mx-0 group">
          <div className="relative w-48 h-12 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/photos/IMG_8385.PNG"
              alt="SMYL GIFTING"
              fill
              className="object-contain drop-shadow-sm"
              unoptimized
              priority
            />
          </div>
        </Link>

        {/* Right icons & CTA - desktop */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            {user ? (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium text-sm">
                <User className="w-4 h-4" />
                {user.name.split(' ')[0]}
                <button onClick={logout} className="ml-1 p-1 hover:bg-white/50 rounded-full" title="Logout">
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <button onClick={() => setIsSignInOpen(true)} className="p-2.5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
            )}
            <button onClick={() => setIsCartOpen(true)} className="p-2.5 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all relative group" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 ? (
                <span className="absolute top-0 right-0 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center -translate-y-1/4 translate-x-1/4">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              )}
            </button>
          </div>
          
          <div className="w-px h-6 bg-border/50 hidden xl:block" />
          
          <Link href="/build-hamper" className="hidden xl:flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
            Build Hamper
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors flex items-center gap-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {cartCount > 0 && !mobileOpen && (
            <span className="w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-white/20 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.label}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </Link>
              ))}
              
              <div className="h-px w-full bg-border/50 my-2" />
              
              <Link 
                href="/build-hamper" 
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 rounded-xl bg-primary/10 text-primary font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <GiftIcon className="w-5 h-5" />
                Build Custom Hamper
              </Link>
              
              <div className="flex items-center justify-around pt-6">
                <button className="p-3 rounded-full bg-muted/50 text-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 relative">
                  <Search className="w-5 h-5" />
                  <span className="text-[10px] font-medium tracking-wider">SEARCH</span>
                </button>
                <button 
                  onClick={() => { setIsSignInOpen(true); setMobileOpen(false); }}
                  className="p-3 rounded-full bg-muted/50 text-foreground hover:text-primary transition-colors flex flex-col items-center gap-1"
                >
                  <User className="w-5 h-5" />
                  <span className="text-[10px] font-medium tracking-wider">{user ? 'PROFILE' : 'ACCOUNT'}</span>
                </button>
                <button 
                  onClick={() => { setIsCartOpen(true); setMobileOpen(false); }}
                  className="p-3 rounded-full bg-muted/50 text-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 relative"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="text-[10px] font-medium tracking-wider">CART</span>
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-2 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}
