'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full bg-[#fce5eb]">
      <Link href="/categories" className="block w-full">
        <img
          src="/photos/hero-image-new.png"
          alt="Smyl Curated Gift Hampers"
          className="w-full h-auto max-h-[70vh] md:max-h-[80vh] lg:max-h-[800px] object-cover mx-auto block"
        />
      </Link>
    </section>
  );
}
