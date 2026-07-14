'use client';

import { Building2, Mail, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Corporate Gifting</span>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Elevate Your <br/><span className="text-primary italic font-serif">Corporate Relations</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Impress clients, reward employees, and celebrate milestones with our luxury, bespoke corporate hampers. We handle everything from curation to doorstep delivery.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 font-medium text-foreground"><CheckCircle className="text-primary w-5 h-5"/> Brand Customization & Logo Engraving</li>
              <li className="flex items-center gap-3 font-medium text-foreground"><CheckCircle className="text-primary w-5 h-5"/> Bulk Discounts Available</li>
              <li className="flex items-center gap-3 font-medium text-foreground"><CheckCircle className="text-primary w-5 h-5"/> Pan-India Secure Delivery</li>
            </ul>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-muted">
            <Image src="/photos/4.jpeg" alt="Corporate Gifting" fill className="object-cover" />
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded-[3rem] p-10 lg:p-16 max-w-4xl mx-auto shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-4">Request a Quotation</h2>
            <p className="text-muted-foreground">Fill out the form below and our corporate gifting expert will get in touch within 24 hours.</p>
          </div>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Name</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input type="text" className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input type="text" className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="John Doe" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="email" className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Requirements & Budget</label>
              <textarea className="w-full h-32 p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none" placeholder="Tell us about your requirements (e.g., 50 Diwali hampers, budget around ₹2000 per hamper)..."></textarea>
            </div>
            <button type="button" className="w-full h-14 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
