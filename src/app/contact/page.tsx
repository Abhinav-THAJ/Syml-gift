'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const messageText = `Hi SMYL GIFTING!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOccasion: ${formData.occasion}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918129272580?text=${encodeURIComponent(messageText)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            Get In Touch
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-foreground tracking-tight mb-3">
            Contact <span className="text-primary">SMYL GIFTING</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have a custom hamper request or a special occasion planned? We’d love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          
          {/* 1. Form & Info Section (TOP) */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Details & Info */}
            <div className="lg:col-span-5 space-y-6 bg-card p-6 md:p-8 rounded-2xl border border-border/80">
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground mb-2">
                  Let’s Create Magic Together
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Whether you need a single customized keepsake or bulk corporate hampers, we are here to assist you.
                </p>
              </div>

              <div className="space-y-5 pt-4 border-t border-border/60">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Phone / Call</h4>
                    <p className="text-xs text-muted-foreground">+91 81292 72580</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Response Time</h4>
                    <p className="text-xs text-muted-foreground">Within 1-2 hours on WhatsApp & Instagram</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Delivery Range</h4>
                    <p className="text-xs text-muted-foreground">Handcrafted with love and delivered across India</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-primary text-primary-foreground space-y-1">
                <h4 className="font-heading font-bold text-base">SMYL GIFTING</h4>
                <p className="text-xs opacity-90">Wrapped with Love. Delivered with a Smile.</p>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-card p-6 md:p-8 rounded-2xl border border-border/80">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-5">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-heading font-bold text-foreground">Message Prepared!</h3>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    We have redirected your request to WhatsApp so you can connect with us directly.
                  </p>
                  <a
                    href={`https://wa.me/918129272580?text=${encodeURIComponent(`Hi SMYL GIFTING! My name is ${formData.name}. ${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs shadow-md shadow-emerald-500/20 hover:scale-105 transition-all"
                  >
                    Open WhatsApp Chat <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Athira Nair"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="8129272580"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">Occasion / Service</label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-xs"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Birthday Hamper">Birthday Hamper</option>
                        <option value="Anniversary Special">Anniversary Special</option>
                        <option value="Wedding / Return Gifts">Wedding / Return Gifts</option>
                        <option value="Baby Shower">Baby Shower</option>
                        <option value="Festive Gifting">Festive Gifting</option>
                        <option value="Corporate Bulk Order">Corporate Bulk Order</option>
                        <option value="Custom Box Request">Custom Box Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Your Message / Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us what hamper items, budget, or custom message you have in mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-xs resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-md shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.005] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message via WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* 2. Minimal Quick Contact Cards Grid (BELOW FORM) */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-6 text-center">
              Direct Contact Options
            </h3>
            <div className="grid sm:grid-cols-3 gap-5">
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/918129272580"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-card border border-border/80 hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-1">WhatsApp Us</h3>
                  <p className="text-xs text-muted-foreground mb-4">Instant chat & fast customization support</p>
                </div>
                <span className="text-sm font-semibold text-[#25D366] group-hover:underline">
                  +91 81292 72580 →
                </span>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/smyl_gifting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-card border border-border/80 hover:border-pink-500/50 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-1">Instagram</h3>
                  <p className="text-xs text-muted-foreground mb-4">Follow our latest creations & DM us</p>
                </div>
                <span className="text-sm font-semibold text-pink-600 group-hover:underline">
                  @smyl_gifting →
                </span>
              </a>

              {/* Email Card */}
              <a
                href="mailto:smylgifting@gmail.com"
                className="p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-1">Email Us</h3>
                  <p className="text-xs text-muted-foreground mb-4">For corporate orders & general inquiries</p>
                </div>
                <span className="text-sm font-semibold text-primary group-hover:underline break-all">
                  smylgifting@gmail.com →
                </span>
              </a>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
