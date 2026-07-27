'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, Star, Calendar, MessageSquare, Truck, ShieldCheck, ShoppingBag, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

export default function ProductClient({ productData }: { productData: any }) {
  const { addToCart } = useAppContext();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showVideo, setShowVideo] = useState(false);
  const [personalNote, setPersonalNote] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-32" style={{ paddingTop: '120px' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/categories" className="hover:text-primary">Categories</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{productData.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden bg-muted border border-border/50 group">
              <AnimatePresence mode="wait">
                {showVideo ? (
                  <motion.div key="video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex items-center justify-center bg-black/5">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto cursor-pointer hover:bg-primary/30 transition-colors">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">Product Video</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={activeImage} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full h-full relative">
                    <Image
                      src={productData.images[activeImage]}
                      alt={productData.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="absolute top-6 right-6 flex flex-col gap-3 z-10">
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-foreground hover:text-primary hover:scale-110 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {productData.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => { setActiveImage(idx); setShowVideo(false); }}
                  className={`relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === idx && !showVideo ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border'}`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
              {productData.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(productData.rating) ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium underline underline-offset-4 cursor-pointer hover:text-foreground transition-colors">
                {productData.reviews} Reviews
              </span>
            </div>

            <div className="text-3xl font-semibold mb-8">₹{productData.price.toLocaleString('en-IN')}</div>
            
            <div className="text-muted-foreground leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: productData.description }} />

            {/* Customization Options */}
            <div className="space-y-6 bg-muted/30 p-6 sm:p-8 rounded-[2rem] border border-border/50 mb-8">
              <div>
                <label className="flex items-center gap-2 font-medium mb-3">
                  <Calendar className="w-5 h-5 text-primary" /> Select Delivery Date
                </label>
                <input 
                  type="date" 
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full h-14 px-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              
              <div>
                <label className="flex items-center gap-2 font-medium mb-3">
                  <MessageSquare className="w-5 h-5 text-primary" /> Personalized Note
                </label>
                <textarea 
                  value={personalNote}
                  onChange={(e) => setPersonalNote(e.target.value)}
                  placeholder="Write a heartfelt message to be included in the hamper..."
                  className="w-full p-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none h-28"
                />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-10 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Free & Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Add to Cart Bar for Mobile (Hidden on Desktop) */}
        <div className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-xl border-t border-border p-4 z-40 lg:hidden flex gap-4">
          <button className="flex-1 h-14 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/20" onClick={() => addToCart({
                id: productData.id,
                name: productData.title,
                price: productData.price,
                quantity: quantity,
                image: productData.images[0]
              })}>
            <ShoppingBag className="w-5 h-5" /> Add to Cart - ₹{productData.price}
          </button>
        </div>

        {/* Desktop Add to Cart */}
        <div className="hidden lg:flex fixed bottom-8 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-full p-2 z-40 items-center gap-4 min-w-[500px]">
          <div className="flex-1 px-6 font-semibold flex flex-col">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider line-clamp-1">{productData.title}</span>
            <span className="text-lg">₹{productData.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex items-center gap-4 pr-2">
            <div className="flex items-center border border-border rounded-full h-12">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-full flex items-center justify-center hover:bg-muted rounded-l-full transition-colors">-</button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-full flex items-center justify-center hover:bg-muted rounded-r-full transition-colors">+</button>
            </div>
            <button 
              onClick={() => addToCart({
                id: productData.id,
                name: productData.title,
                price: productData.price,
                quantity: quantity,
                image: productData.images[0]
              })}
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            >
              <ShoppingBag className="w-5 h-5" /> Add to Cart
            </button>
          </div>
        </div>

        {/* Related Products */}
        {productData.relatedProducts && productData.relatedProducts.length > 0 && (
          <div className="mt-32 pt-16 border-t border-border">
            <h2 className="text-3xl font-heading font-bold mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {productData.relatedProducts.map((product: any) => (
                <Link href={`/product/${product.slug || product.id}`} key={product.id} className="group">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-4 bg-muted">
                    <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="font-medium text-muted-foreground mt-1">₹{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
