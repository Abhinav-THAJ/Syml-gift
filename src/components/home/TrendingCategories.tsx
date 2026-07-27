'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type TrendingCategory = { title: string; image: string; href: string };

export default function TrendingCategories({ categories = [] }: { categories?: TrendingCategory[] }) {
  const validCategories = categories.filter(
    (c) => c.title.toLowerCase() !== 'uncategorized' && !c.href.includes('uncategorized')
  );

  if (!validCategories || validCategories.length === 0) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Shop by Collection
          </h2>
          <Link
            href="/categories"
            className="ml-auto flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scrollable row of circles */}
        <div className="flex justify-start gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {validCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex-1 min-w-[110px] max-w-[160px] flex flex-col items-center gap-3 group cursor-pointer"
            >
              <Link href={cat.href} className="block">
                {/* Circle image */}
                <div className="relative w-[110px] h-[110px] md:w-[130px] md:h-[130px] mx-auto rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Label */}
                <p className="mt-3 text-sm font-medium text-foreground text-center leading-tight group-hover:text-primary transition-colors">
                  {cat.title} →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
