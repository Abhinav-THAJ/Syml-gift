'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <>
      {/* "Customise Your Hamper" Section - full width with image bg */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <Image
          src="/photos/5.jpeg"
          alt="Customise Your Hamper"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background/95 backdrop-blur-sm rounded-2xl p-10 md:p-14 text-center max-w-2xl w-full shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
              Customise Your Hamper
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Make your gifting memorable with a personalised hamper. Choose your theme, budget and items – our team will curate and pack it beautifully for you.
            </p>
            <Link
              href="/build-hamper"
              className="inline-flex items-center h-12 px-10 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:opacity-90 shadow-lg shadow-primary/25"
            >
              Start Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dark maroon banner — social proof */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            {['C', 'H', 'O', 'S', 'E', 'N', '✓'].map((letter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="w-14 h-14 md:w-20 md:h-20 bg-foreground/10 rounded-xl flex items-center justify-center text-2xl md:text-4xl font-bold text-primary-foreground shadow-lg"
              >
                {letter}
              </motion.div>
            ))}
          </div>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-6">
            Turn your favorite memories into a physical celebration. Personalized, hand-picked, and delivered with care.
          </p>
          <div className="flex items-center justify-center gap-12 mt-10 flex-wrap">
            {[
              { number: '20,000+', label: 'Happy Customers' },
              { number: '50,000+', label: 'Orders Shipped' },
              { number: '100%', label: 'Handcrafted' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.number}</p>
                <p className="text-sm text-primary-foreground/70 mt-1 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split feature: image left, text right */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-border shadow-sm">
            {/* Image */}
            <div className="relative h-[340px] md:h-[420px]">
              <Image
                src="/photos/6.jpeg"
                alt="Make Their Wish Come True"
                fill
                className="object-cover"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center p-10 md:p-14 bg-background">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 leading-tight">
                Make Their Wish Come True
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From fun surprises to luxury indulgences, find the perfect birthday hamper that matches their personality and celebrates their special day.
              </p>
              <Link
                href="/categories/birthday-hampers"
                className="self-start h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:opacity-90 shadow-md shadow-primary/20 flex items-center"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
