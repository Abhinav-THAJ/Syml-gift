'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918129272580"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      {/* Fallback to Lucide MessageCircle if we don't have custom SVG */}
      <MessageCircle className="w-8 h-8 fill-current" />
      
      {/* Notification Dot */}
      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-background rounded-full animate-pulse"></span>
    </motion.a>
  );
}
