import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Valentines Day Hampers', href: '/categories/valentines-day-hampers' },
  { label: 'Anniversary Hampers', href: '/categories/anniversary-hampers' },
  { label: 'Photo Frames', href: '/categories/photo-frames' },
  { label: 'Birthday Hamper', href: '/categories/birthday-hampers' },
  { label: 'Baby Hampers', href: '/categories/baby-hampers' },
  { label: 'All Collections', href: '/categories' },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground pt-20 pb-10 overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top section: Newsletter & Big Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20 border-b border-primary-foreground/20 pb-16">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Join our VIP list.</h2>
            <p className="text-primary-foreground/80 mb-6 font-medium">Get exclusive access to new collections and special gifting offers.</p>
            <div className="flex relative max-w-md mx-auto lg:mx-0 shadow-xl shadow-black/10 rounded-full">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full h-14 pl-6 pr-32 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-white text-primary rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <h3 className="text-[120px] font-heading font-black opacity-10 leading-none tracking-tighter">SMYL</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="/" className="relative w-28 h-28 rounded-2xl overflow-hidden border border-white/20 shadow-2xl inline-block group">
              <Image
                src="/photos/IMG_8385.PNG"
                alt="SMYL Gifting"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
            </Link>
            <div>
              <h3 className="text-2xl font-heading font-bold tracking-tight">SMYL Gifting</h3>
              <p className="text-primary-foreground/70 mt-2 max-w-sm">Handcrafted personalized frames and hampers made with love to celebrate your most precious moments.</p>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-lg hover:-translate-y-1" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all shadow-lg hover:-translate-y-1" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Quick links */}
          <div className="md:col-span-6 lg:col-span-3 text-center md:text-left">
            <h4 className="text-lg font-heading font-semibold mb-6 tracking-wide text-white">Collections</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white hover:translate-x-1 inline-flex transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-6 lg:col-span-3 text-center md:text-left">
            <h4 className="text-lg font-heading font-semibold mb-6 tracking-wide text-white">Get in touch</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:+918129272580" className="group flex flex-col md:items-start items-center gap-1">
                  <span className="text-xs text-primary-foreground/60 uppercase tracking-wider font-bold">Call Us</span>
                  <span className="flex items-center gap-2 text-primary-foreground/90 group-hover:text-white transition-colors font-medium">
                    <Phone className="w-4 h-4" /> +91 81292 72580
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:smylgifting@gmail.com" className="group flex flex-col md:items-start items-center gap-1">
                  <span className="text-xs text-primary-foreground/60 uppercase tracking-wider font-bold">Email Us</span>
                  <span className="flex items-center gap-2 text-primary-foreground/90 group-hover:text-white transition-colors font-medium">
                    <Mail className="w-4 h-4" /> smylgifting@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70 font-medium">
            © {new Date().getFullYear()} SMYL Gifting. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-foreground/70 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
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

function YoutubeIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <path d="m10 15 5-3-5-3z"/>
    </svg>
  );
}
