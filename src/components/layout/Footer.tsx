import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-tighter text-primary">
                SMYL GIFTING
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed italic font-serif">
              "Something You Love for Someone You Love"
            </p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/categories/hampers" className="text-muted-foreground hover:text-primary transition-colors">Luxury Hampers</Link>
              </li>
              <li>
                <Link href="/categories/personalized" className="text-muted-foreground hover:text-primary transition-colors">Personalized Gifts</Link>
              </li>
              <li>
                <Link href="/categories/festive" className="text-muted-foreground hover:text-primary transition-colors">Festive Specials</Link>
              </li>
              <li>
                <Link href="/categories/corporate" className="text-muted-foreground hover:text-primary transition-colors">Corporate Gifting</Link>
              </li>
              <li>
                <Link href="/build-hamper" className="text-muted-foreground hover:text-primary transition-colors">Build Your Own Hamper</Link>
              </li>
            </ul>
          </div>

          {/* Help & Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Customer Care</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping &amp; Delivery</Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns &amp; Refunds</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Design District, Mumbai, 400001</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="https://wa.me/918129272580" target="_blank" rel="noreferrer">+91 81292 72580 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:smylgifting@gmail.com">smylgifting@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SMYL GIFTING. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
