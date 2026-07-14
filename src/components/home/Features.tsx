'use client';

import { motion } from 'framer-motion';
import { Gift, Package, Truck, HeartHandshake, Briefcase, MessageSquareHeart } from 'lucide-react';

const features = [
  { icon: Gift, title: 'Customised Gifts', description: 'Tailor every gift to match the personality of your loved ones.' },
  { icon: Package, title: 'Premium Packaging', description: 'Luxurious, eco-friendly packaging that unboxes like a dream.' },
  { icon: Truck, title: 'Fast Delivery', description: 'Reliable and timely delivery across the country.' },
  { icon: HeartHandshake, title: 'Handcrafted Collections', description: 'Curated by artisans with love and attention to detail.' },
  { icon: Briefcase, title: 'Corporate Bulk Orders', description: 'Seamless corporate gifting with custom branding options.' },
  { icon: MessageSquareHeart, title: 'Personalized Messages', description: 'Add a handwritten note to express your true feelings.' },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            The SMYL Promise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience gifting like never before with our signature services designed to delight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
