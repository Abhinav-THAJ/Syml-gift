'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, SlidersHorizontal, Heart, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ShopClientContent({ categories: initialCategories, initialProducts }: { categories: any[], initialProducts: any[] }) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || searchParams.get('cat');

  const categoriesTree = initialCategories || [];
  
  const extractAllCategoryNames = (tree: any[]) => {
    let names = ['All'];
    tree.forEach(cat => {
      names.push(cat.name);
      if (cat.children) {
        cat.children.forEach((child: any) => names.push(child.name));
      }
    });
    return names;
  };
  
  const productList = initialProducts || [];

  const filteredCategories = extractAllCategoryNames(categoriesTree).filter(c => c.toLowerCase() !== 'uncategorized');

  const isCategoryMatch = (c1?: string, c2?: string) => {
    if (!c1 || !c2) return false;
    const norm1 = c1.toLowerCase().trim().replace(/s$/, '');
    const norm2 = c2.toLowerCase().trim().replace(/s$/, '');
    if (norm1 === norm2) return true;
    if (norm1.includes(norm2) || norm2.includes(norm1)) return true;
    return false;
  };

  const getCategoryFromParam = (param: string | null) => {
    if (!param) return 'All';
    const match = filteredCategories.find(c => isCategoryMatch(c, param));
    return match || param;
  };

  const [activeCategory, setActiveCategory] = useState(() => getCategoryFromParam(categoryParam));

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(getCategoryFromParam(categoryParam));
    }
  }, [categoryParam]);

  const [sortBy, setSortBy] = useState('default');
  const [showSort, setShowSort] = useState(false);
  
  const [priceFilter, setPriceFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSort(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
      if (categoriesRef.current && !categoriesRef.current.contains(event.target as Node)) {
        setShowMobileCategories(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Apply category filter
  let displayProducts = activeCategory === 'All' 
    ? productList 
    : productList.filter(p => {
        if (isCategoryMatch(p.category, activeCategory)) return true;
        if (Array.isArray(p.categories) && p.categories.some((c: string) => isCategoryMatch(c, activeCategory))) {
          return true;
        }
        if (activeCategory.toLowerCase().includes('onam')) {
          const catName = p.category?.toLowerCase() || '';
          const titleName = p.title?.toLowerCase() || '';
          const allCats = Array.isArray(p.categories) ? p.categories.join(' ').toLowerCase() : '';
          if (catName.includes('onam') || titleName.includes('onam') || allCats.includes('onam')) return true;
        }
        return false;
      });

  // Apply price filter
  const getPriceNum = (priceStr: string) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  if (priceFilter === 'under500') {
    displayProducts = displayProducts.filter(p => getPriceNum(p.price) < 500);
  } else if (priceFilter === '500-1500') {
    displayProducts = displayProducts.filter(p => {
      const pr = getPriceNum(p.price);
      return pr >= 500 && pr <= 1500;
    });
  } else if (priceFilter === 'over1500') {
    displayProducts = displayProducts.filter(p => getPriceNum(p.price) > 1500);
  }

  // Apply sorting
  displayProducts = [...displayProducts]; // clone to avoid mutating state
  if (sortBy === 'price-asc') {
    displayProducts.sort((a, b) => getPriceNum(a.price) - getPriceNum(b.price));
  } else if (sortBy === 'price-desc') {
    displayProducts.sort((a, b) => getPriceNum(b.price) - getPriceNum(a.price));
  } else if (sortBy === 'name-asc') {
    displayProducts.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  } else if (sortBy === 'name-desc') {
    displayProducts.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
  }

  const sortOptions = [
    { value: 'default', label: 'Default Sorting' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
  ];

  const filterOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'under500', label: 'Under ₹500' },
    { value: '500-1500', label: '₹500 - ₹1500' },
    { value: 'over1500', label: 'Over ₹1500' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-16 md:pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 space-y-3">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">Explore Collections</h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our thoughtfully curated hampers for every special occasion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="sticky top-28 bg-card border border-border/50 shadow-sm rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 pb-4 border-b border-border/50">Categories</h3>
              <ul className="space-y-3 max-h-[65vh] overflow-y-auto custom-scrollbar pr-2">
                <li>
                  <button
                    onClick={() => setActiveCategory('All')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-[14px] transition-all flex items-center justify-between ${
                      activeCategory === 'All'
                        ? 'bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20'
                        : 'text-foreground/75 hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    All Collections
                    {activeCategory === 'All' && <Check className="w-4 h-4" />}
                  </button>
                </li>
                
                {categoriesTree.map((parent) => (
                  <li key={parent.id} className="pt-2">
                    <button
                      onClick={() => setActiveCategory(parent.name)}
                      className={`w-full text-left px-4 py-2 rounded-xl text-[14px] font-bold transition-all flex items-center justify-between ${
                        activeCategory === parent.name
                          ? 'text-primary'
                          : 'text-foreground/80 hover:text-primary'
                      }`}
                    >
                      {parent.name.toUpperCase()}
                      {activeCategory === parent.name && <Check className="w-4 h-4" />}
                    </button>
                    
                    {parent.children && parent.children.length > 0 && (
                      <ul className="mt-2 ml-4 border-l-2 border-border/50 pl-2 space-y-1">
                        {parent.children.map((child: any) => (
                          <li key={child.id}>
                            <button
                              onClick={() => setActiveCategory(child.name)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-[13px] transition-all flex items-center justify-between ${
                                activeCategory === child.name
                                  ? 'bg-primary/10 text-primary font-semibold'
                                  : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                              }`}
                            >
                              {child.name}
                              {activeCategory === child.name && <Check className="w-3 h-3 text-primary" />}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-border relative z-10">
              <div className="text-sm text-muted-foreground font-medium">
                Showing {displayProducts.length} results
              </div>

              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {/* Mobile Categories Dropdown */}
            <div className="relative flex-1 md:flex-none lg:hidden" ref={categoriesRef}>
              <button 
                onClick={() => setShowMobileCategories(!showMobileCategories)}
                className={`w-full flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                  showMobileCategories || activeCategory !== 'All' ? 'border-primary text-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                }`}
              >
                Category
                {activeCategory !== 'All' && (
                  <span className="flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4 bg-primary text-primary-foreground rounded-full text-[9px] sm:text-[10px] ml-1">
                    1
                  </span>
                )}
              </button>
              
              <AnimatePresence>
                {showMobileCategories && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 min-w-[220px] max-w-[90vw] z-50 bg-card border border-border rounded-xl shadow-lg overflow-y-auto max-h-[60vh] py-1"
                  >
                    <button
                      onClick={() => { setActiveCategory('All'); setShowMobileCategories(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors hover:bg-muted ${
                        activeCategory === 'All' ? 'text-primary font-medium bg-primary/5' : 'text-foreground'
                      }`}
                    >
                      All Collections
                      {activeCategory === 'All' && <Check className="w-4 h-4" />}
                    </button>
                    {categoriesTree.map((parent) => (
                      <div key={parent.id}>
                        <button
                          onClick={() => { setActiveCategory(parent.name); setShowMobileCategories(false); }}
                          className={`w-full text-left px-4 py-2.5 text-sm font-bold flex items-center justify-between transition-colors hover:bg-muted ${
                            activeCategory === parent.name ? 'text-primary bg-primary/5' : 'text-foreground'
                          }`}
                        >
                          {parent.name.toUpperCase()}
                          {activeCategory === parent.name && <Check className="w-4 h-4 text-primary" />}
                        </button>
                        {parent.children?.map((child: any) => (
                          <button
                            key={child.id}
                            onClick={() => { setActiveCategory(child.name); setShowMobileCategories(false); }}
                            className={`w-full text-left pl-8 pr-4 py-2 text-sm flex items-center justify-between transition-colors hover:bg-muted ${
                              activeCategory === child.name ? 'text-primary font-medium bg-primary/5' : 'text-foreground/80'
                            }`}
                          >
                            {child.name}
                            {activeCategory === child.name && <Check className="w-3 h-3 text-primary" />}
                          </button>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filters Dropdown */}
            <div className="relative flex-1 md:flex-none" ref={filterRef}>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`w-full flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                  showFilters || priceFilter !== 'all' ? 'border-primary text-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
                {priceFilter !== 'all' && (
                  <span className="flex items-center justify-center w-4 h-4 bg-primary text-primary-foreground rounded-full text-[10px] ml-1">
                    1
                  </span>
                )}
              </button>
              
              <AnimatePresence>
                {showFilters && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden py-1"
                  >
                    <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50">
                      Price Range
                    </div>
                    {filterOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setPriceFilter(opt.value);
                          setShowFilters(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors hover:bg-muted ${
                          priceFilter === opt.value ? 'text-primary font-medium bg-primary/5' : 'text-foreground'
                        }`}
                      >
                        {opt.label}
                        {priceFilter === opt.value && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex-1 md:flex-none" ref={sortRef}>
              <button 
                onClick={() => setShowSort(!showSort)}
                className={`w-full flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2 rounded-full border text-xs sm:text-sm font-medium transition-colors ${
                  showSort || sortBy !== 'default' ? 'border-primary text-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Sort
              </button>
              
              <AnimatePresence>
                {showSort && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden py-1"
                  >
                    {sortOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setShowSort(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors hover:bg-muted ${
                          sortBy === opt.value ? 'text-primary font-medium bg-primary/5' : 'text-foreground'
                        }`}
                      >
                        {opt.label}
                        {sortBy === opt.value && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 relative z-0">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                className="group"
              >
                <Link href={`/product/${product.slug || product.id}`}>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-muted/30 mb-3">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.category && product.category.toLowerCase() !== 'uncategorized' && (
                      <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                        {product.category}
                      </span>
                    )}
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
        ) : (
          <div className="py-20 text-center space-y-4 relative z-0">
            <div className="inline-flex w-16 h-16 rounded-full bg-muted items-center justify-center text-muted-foreground mb-4">
              <Filter className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="text-xl font-semibold">No products found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We couldn&apos;t find any products matching your current filters. Try selecting a different category or adjusting your price range.
            </p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setPriceFilter('all');
                setSortBy('default');
              }}
              className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
  );
}

export default function ShopClient(props: { categories: any[], initialProducts: any[] }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background pb-20 pt-16 md:pt-20">
        <div className="container mx-auto px-4 text-center py-20">
          <p className="text-muted-foreground">Loading collections...</p>
        </div>
      </div>
    }>
      <ShopClientContent {...props} />
    </Suspense>
  );
}
