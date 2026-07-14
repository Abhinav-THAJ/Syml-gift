'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  { title: 'Birthday Hampers', image: '/photos/3.jpeg', colSpan: 'md:col-span-2 md:row-span-2', href: '/categories/birthday' },
  { title: 'Corporate Hampers', image: '/photos/4.jpeg', colSpan: 'col-span-1 row-span-1', href: '/categories/corporate' },
  { title: 'Festive Hampers', image: '/photos/5.jpeg', colSpan: 'col-span-1 row-span-1', href: '/categories/festive' },
  { title: 'Anniversary Hampers', image: '/photos/6.jpeg', colSpan: 'md:col-span-2 row-span-1', href: '/categories/anniversary' },
  { title: 'Budget Hampers', image: '/photos/7.jpeg', colSpan: 'col-span-1 row-span-1', href: '/categories/budget' },
  { title: 'No Reason Hampers', image: '/photos/9.jpeg', colSpan: 'col-span-1 row-span-1', href: '/categories/no-reason' },
];

export default function TrendingCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Trending Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our most loved collections curated to bring joy to every special moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-[2rem] overflow-hidden ${category.colSpan}`}
            >
              <Link href={category.href} className="block w-full h-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-2 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {category.title}
                  </h3>
                  <div className="w-10 h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
