import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, ExternalLink } from 'lucide-react';

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
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary-foreground/30">
              <Image
                src="/photos/IMG_8385.PNG"
                alt="SMYL Gifting"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground">SMYL Gifting</h3>
              <p className="text-primary-foreground/70 text-sm mt-1">Frames and hampers by love</p>
            </div>
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <ExternalLink className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-base font-medium text-primary-foreground mb-5 tracking-wide">Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base font-medium text-primary-foreground mb-5 tracking-wide">24/7 Support</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+918129272580" className="hover:text-primary-foreground transition-colors">
                  +91 81292 72580
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:smylgifting@gmail.com" className="hover:text-primary-foreground transition-colors">
                  smylgifting@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()}, SMYL Gifting · All rights reserved
          </p>
          <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of service</Link>
            <span>·</span>
            <Link href="/refund" className="hover:text-primary-foreground transition-colors">Refund policy</Link>
            <span>·</span>
            <Link href="/shipping" className="hover:text-primary-foreground transition-colors">Shipping policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
