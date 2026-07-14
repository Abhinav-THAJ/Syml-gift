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
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Corporate Client',
    content: 'We ordered 50 hampers for our annual employee gifting. The team at SMYL GIFTING customized everything perfectly. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'Verified Buyer',
    content: 'I ordered the Anniversary box for my parents. They loved the personalized touch. It felt so premium and thoughtful.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Customer Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our wonderful customers have to say about their gifting experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-sm border border-border/50 relative"
            >
              <div className="absolute top-8 right-8 text-primary/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-heading font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
