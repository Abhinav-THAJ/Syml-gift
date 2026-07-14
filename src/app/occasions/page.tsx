'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const occasions = [
  { title: 'Birthday', image: '/photos/3.jpeg', slug: 'birthday-hampers' },
  { title: 'Anniversary', image: '/photos/6.jpeg', slug: 'anniversary-hampers' },
  { title: "Mother's Day", image: '/photos/7.jpeg', slug: 'mothers-day-hampers' },
  { title: "Valentine's Day", image: '/photos/12.jpeg', slug: 'valentines-day-hampers' },
  { title: 'Festive', image: '/photos/5.jpeg', slug: 'festive-hampers' },
  { title: 'Wedding', image: '/photos/19.jpeg', slug: 'wedding-hampers' },
];

export default function OccasionsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-heading font-bold text-foreground">Shop by Occasion</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find the perfect gift for every special moment. Curated with love, packaged with perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occ, idx) => (
            <motion.div
              key={occ.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={`/categories/${occ.slug}`} className="group block relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image src={occ.image} alt={occ.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <h3 className="text-white text-3xl font-heading font-bold group-hover:-translate-y-2 transition-transform duration-300">
                    {occ.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
