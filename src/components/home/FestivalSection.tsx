'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FestivalSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

export default function FestivalSection({
  badge,
  title,
  description,
  buttonText,
  buttonLink,
  image
}: FestivalSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#fff8ea] to-[#fff1d6] relative overflow-hidden">
      {/* Decorative floral hints */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#fde68a] rounded-full opacity-30 blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-[-50px] left-[-50px] w-72 h-72 bg-[#fbcfe8] rounded-full opacity-30 blur-3xl mix-blend-multiply" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 items-stretch">
            
            {/* Content Side */}
            <div className="p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center order-2 md:order-1 relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="inline-block px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-amber-100 text-amber-800 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-sm border border-amber-200">
                  {badge || "Festival Special"}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-[#831843] mb-4 sm:mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: title || "Celebrate Onam <br class='hidden md:block' />in Style" }} />
                <p className="text-[#9d174d] text-base sm:text-lg mb-8 md:mb-10 leading-relaxed font-medium">
                  {description || "The harvest festival is almost here! Bring joy to your loved ones with our exclusive Onam Hampers, featuring traditional Kerala delicacies, beautiful brass diyas, and authentic Kasavu elegance, all packed with love."}
                </p>
                
                <Link
                  href={buttonLink || "/categories?category=Onam+Hamper"}
                  className="inline-flex items-center justify-center w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 rounded-full bg-[#831843] text-white font-semibold text-base sm:text-lg transition-all hover:bg-[#9d174d] hover:scale-105 shadow-xl shadow-[#831843]/20"
                >
                  {buttonText || "Customize Your Onam Hamper"}
                </Link>
              </motion.div>
            </div>

            {/* Image Side */}
            <div className="relative h-[280px] sm:h-[360px] md:h-auto min-h-[280px] sm:min-h-[360px] order-1 md:order-2 overflow-hidden">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0"
              >
                <Image
                  src={image || "/photos/onam_hamper.png"}
                  alt={title ? title.replace(/<[^>]*>?/gm, '') : "Exclusive Onam Gift Hamper"}
                  fill
                  className="object-cover object-center"
                />
                {/* Gradient overlay to blend image seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white/20 to-transparent mix-blend-overlay" />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
