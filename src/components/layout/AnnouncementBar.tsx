'use client';

import { motion } from 'framer-motion';

const messages = [
  'Made to Celebrate Your Special Moments',
  'Enjoy Free Shipping All Over Kerala',
  'Over 20,000+ Happy Customers',
  'Handcrafted Personalized Hampers',
  'Over 50,000 Orders Shipped With Love',
];

export default function AnnouncementBar() {
  // Duplicate array a few times to ensure smooth infinite scrolling
  const marqueeItems = [...messages, ...messages, ...messages];

  return (
    <div className="w-full bg-gradient-to-r from-primary via-pink-600 to-primary text-primary-foreground text-xs sm:text-sm py-2 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        className="flex items-center gap-12"
        animate={{ x: [0, -2000] }}
        transition={{ 
          ease: "linear",
          duration: 35,
          repeat: Infinity,
        }}
      >
        {marqueeItems.map((msg, i) => (
          <span key={i} className="flex items-center gap-12 font-medium tracking-wide">
            {msg}
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/40 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
