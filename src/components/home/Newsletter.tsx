'use client';

import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-heading font-semibold text-foreground">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground">
            Subscribe for exclusive deals, new arrivals, and gifting inspiration delivered to your inbox.
          </p>

          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 h-12 px-5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
              required
            />
            <button
              type="submit"
              className="h-12 px-5 rounded-lg bg-transparent border-2 border-foreground/30 text-foreground hover:border-primary hover:text-primary transition-all"
              aria-label="Subscribe"
            >
              →
            </button>
          </form>

          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
