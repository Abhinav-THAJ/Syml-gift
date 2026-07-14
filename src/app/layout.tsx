import type { Metadata } from "next";
import { Archivo, Proza_Libre } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Preloader from "@/components/layout/Preloader";

const prozaLibre = Proza_Libre({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-proza-libre',
});

const archivo = Archivo({ 
  subsets: ["latin"],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: "SMYL GIFTING | Personalized Hampers & Frames",
  description: "Discover handcrafted personalized frames and gift hampers. Celebrate every occasion with our curated luxury hampers. Free shipping available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prozaLibre.variable} ${archivo.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        {/* Preloader — shown on every page load */}
        <Preloader />
        {/* Fixed announcement bar + navbar */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <AnnouncementBar />
          <Navbar />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
