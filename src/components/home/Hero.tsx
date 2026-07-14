'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{ paddingTop: '104px' }} /* announcement bar (~40px) + navbar (64px) */
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-0 items-center min-h-[calc(100vh-106px)]">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center py-16 lg:py-0 space-y-6 text-center lg:text-left"
        >
          <p className="text-xs font-medium tracking-[0.3em] text-foreground/50 uppercase">
            www.smylgifting.com
          </p>

          {/* Script heading */}
          <div>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground italic">
              Surprise them
            </h1>
            <p className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-primary uppercase tracking-widest mt-1 not-italic">
              TODAY!
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-lg font-medium text-foreground">
              Customized Hampers Starting from
            </p>
            <p className="text-3xl font-bold text-primary">₹850</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link
              href="/categories"
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide transition-all hover:opacity-90 hover:scale-105 shadow-lg shadow-primary/25 flex items-center justify-center"
            >
              Shop Now
            </Link>
            <Link
              href="/build-hamper"
              className="h-12 px-8 rounded-full border-2 border-foreground/20 text-foreground font-medium text-sm tracking-wide transition-all hover:border-primary hover:text-primary flex items-center justify-center"
            >
              Build a Hamper
            </Link>
          </div>
        </motion.div>

        {/* Right: stacked image collage like craftoarte */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative h-[500px] lg:h-[620px] flex items-center justify-center"
        >
          {/* Back top-left image */}
          <div className="absolute top-[5%] left-[5%] w-[55%] aspect-square rounded-xl overflow-hidden border-4 border-background shadow-2xl z-10">
            <Image
              src="/photos/1.jpeg"
              alt="Gift Hamper 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Front top-right image */}
          <div className="absolute top-[0%] right-[0%] w-[50%] aspect-square rounded-xl overflow-hidden border-4 border-background shadow-2xl z-20">
            <Image
              src="/photos/9.jpeg"
              alt="Gift Hamper 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Bottom center image */}
          <div className="absolute bottom-[2%] left-[25%] w-[52%] aspect-square rounded-xl overflow-hidden border-4 border-background shadow-2xl z-15">
            <Image
              src="/photos/3.jpeg"
              alt="Gift Hamper 3"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
