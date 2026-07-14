'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 18 + 5;
      });
    }, 120);

    // Hide after ~1.8s
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1900);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#f2efdd' }}
        >
          {/* Ribbon curtain top */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            style={{ originY: 0, backgroundColor: '#910f3f' }}
            className="absolute top-0 left-0 right-0 h-1"
          />

          {/* Main content */}
          <div className="flex flex-col items-center gap-8 select-none">
            {/* Gift box SVG animation */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'backOut' }}
              className="relative"
            >
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Box body */}
                <rect x="8" y="32" width="56" height="34" rx="3" fill="#910f3f" />
                {/* Box lid */}
                <rect x="5" y="20" width="62" height="14" rx="3" fill="#7a0d35" />
                {/* Vertical ribbon */}
                <rect x="32" y="20" width="8" height="46" fill="#f2efdd" opacity="0.35" />
                {/* Horizontal ribbon */}
                <rect x="5" y="27" width="62" height="8" fill="#f2efdd" opacity="0.35" />

                {/* Bow left loop */}
                <motion.path
                  d="M36 20 C28 8, 12 8, 16 18 C20 24, 32 22, 36 20Z"
                  fill="#f9e547"
                  animate={{ rotate: [0, -8, 0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  style={{ transformOrigin: '36px 20px' }}
                />
                {/* Bow right loop */}
                <motion.path
                  d="M36 20 C44 8, 60 8, 56 18 C52 24, 40 22, 36 20Z"
                  fill="#f9e547"
                  animate={{ rotate: [0, 8, 0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  style={{ transformOrigin: '36px 20px' }}
                />
                {/* Bow center knot */}
                <circle cx="36" cy="20" r="5" fill="#f9c30a" />

                {/* Sparkles */}
                <motion.circle
                  cx="58"
                  cy="14"
                  r="2.5"
                  fill="#f9e547"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.6, delay: 0.2 }}
                />
                <motion.circle
                  cx="14"
                  cy="10"
                  r="2"
                  fill="#f9e547"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.8, delay: 0.6 }}
                />
                <motion.circle
                  cx="62"
                  cy="38"
                  r="1.5"
                  fill="#f2efdd"
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.4, delay: 0.9 }}
                />
              </svg>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-center"
            >
              <p
                className="text-3xl font-heading font-semibold tracking-tight"
                style={{ color: '#3d081b' }}
              >
                SMYL Gifting
              </p>
              <p
                className="text-sm font-sans tracking-[0.22em] mt-1 uppercase"
                style={{ color: '#7a3a50' }}
              >
                Something You Love
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-48 h-[2px] rounded-full overflow-hidden"
              style={{ backgroundColor: '#dcd7c0' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor: '#910f3f',
                  width: `${Math.min(progress, 100)}%`,
                  transition: 'width 0.15s ease-out',
                }}
              />
            </motion.div>
          </div>

          {/* Decorative corner dots */}
          <div
            className="absolute top-6 left-6 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#910f3f', opacity: 0.3 }}
          />
          <div
            className="absolute top-6 right-6 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#910f3f', opacity: 0.3 }}
          />
          <div
            className="absolute bottom-6 left-6 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#910f3f', opacity: 0.3 }}
          />
          <div
            className="absolute bottom-6 right-6 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#910f3f', opacity: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
