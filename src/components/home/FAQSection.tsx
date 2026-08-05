'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Search } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Custom Orders',
    question: 'How long does it take to prepare a custom order?',
    answer: 'Standard custom orders are prepared and handcrafted within 1 to 2 business days prior to dispatch. For bulk or corporate orders, preparation time depends on order volume, and our team will coordinate the exact timeline directly with you.'
  },
  {
    category: 'Shipping & Delivery',
    question: 'Can I choose a specific delivery date?',
    answer: 'Yes! You can specify your preferred delivery date during checkout or by contacting us directly on WhatsApp (+91 81292 72580). We schedule dispatch so your hamper arrives right on time for your special moment.'
  },
  {
    category: 'Shipping & Delivery',
    question: 'Do you offer pan-India shipping?',
    answer: 'Yes, we offer pan-India shipping across all states in India! We also provide Free Standard Delivery on all orders across Kerala. Express shipping is available for urgent surprises.'
  },
  {
    category: 'Returns & Policies',
    question: 'What is your return policy for customized items?',
    answer: 'Because customized hampers and photo frames are handcrafted specifically for you, we do not accept general returns or cancellations once production starts. However, if your order arrives damaged or defective in transit, share an unboxing photo/video on WhatsApp within 24 hours for a prompt free replacement.'
  }
];

const categories = ['All', 'Custom Orders', 'Shipping & Delivery', 'Returns & Policies'];

export default function FAQSection({ title, description }: { title?: string, description?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
            <HelpCircle className="w-4 h-4" /> Got Questions? We&apos;ve Got Answers.
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            {title || "Got Questions? We've Got Answers."}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {description || "Everything you need to know about our handcrafted hampers, customization options, and delivery."}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-full bg-card border border-border shadow-sm text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-card border border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card border border-border/70 rounded-2xl overflow-hidden shadow-sm hover:border-primary/30 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-lg text-foreground hover:text-primary transition-colors focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-muted-foreground text-sm sm:text-base leading-relaxed border-t border-border/30 mt-1 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-card border border-border rounded-2xl">
            <p className="text-muted-foreground">No questions found matching your search query.</p>
          </div>
        )}

        {/* WhatsApp Contact Callout */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-heading font-bold text-foreground">
            Still have a question?
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Our friendly customer support team is available on WhatsApp to help you choose or customize your hamper.
          </p>
          <a
            href="https://wa.me/918129272580?text=Hello!%20I%20have%20a%20question%20about%20your%20gift%20hampers."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm transition-all shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" /> Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
