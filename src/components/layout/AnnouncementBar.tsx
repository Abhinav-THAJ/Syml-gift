'use client';

import { useState, useEffect } from 'react';

const messages = [
  'Made to Celebrate Your Special Moments',
  'Enjoy Free Shipping All Over Kerala',
  'Over 20,000+ Happy Customers',
  'Handcrafted Personalized Hampers',
  'Over 50,000 Orders Shipped With Love',
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-primary text-primary-foreground text-sm py-2.5 overflow-hidden">
      <div className="hidden md:flex items-center justify-center gap-8">
        {messages.map((msg, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap font-medium tracking-wide">
            {msg}
            {i < messages.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 inline-block" />}
          </span>
        ))}
      </div>
      {/* Mobile: single cycling message */}
      <div className="md:hidden text-center font-medium tracking-wide px-4">
        {messages[currentIndex]}
      </div>
    </div>
  );
}
