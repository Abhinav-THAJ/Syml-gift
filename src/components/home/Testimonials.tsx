'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Verified Buyer',
    content: 'The hampers are absolutely beautiful! The attention to detail in packaging and the quality of products exceeded my expectations.',
    rating: 5,
    initial: 'P',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Corporate Client',
    content: 'We ordered 50 hampers for our annual employee gifting. The team customized everything perfectly. Highly recommended!',
    rating: 5,
    initial: 'R',
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Verified Buyer',
    content: 'I ordered the Anniversary box for my parents. They loved the personalized touch. It felt so premium and thoughtful.',
    rating: 5,
    initial: 'A',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl font-heading font-semibold text-foreground">
            Let customers speak for us
          </h2>
          <p className="text-sm text-muted-foreground">from {testimonials.length} reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
