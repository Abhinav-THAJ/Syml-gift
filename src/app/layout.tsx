import type { Metadata } from "next";
import { Archivo, Proza_Libre, Caveat, Great_Vibes } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Preloader from "@/components/layout/Preloader";
import { AppProvider } from '@/context/AppContext';
import CartDrawer from '@/components/layout/CartDrawer';
import SignInModal from '@/components/layout/SignInModal';
import { getCategories } from '@/lib/woocommerce';

const prozaLibre = Proza_Libre({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-proza-libre',
});

const archivo = Archivo({ 
  subsets: ["latin"],
  variable: '--font-archivo',
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-caveat',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "SMYL GIFTING | Personalized Hampers & Frames",
  description: "Discover handcrafted personalized frames and gift hampers. Celebrate every occasion with our curated luxury hampers. Free shipping available.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories('per_page=100&hide_empty=false');
  
  // Build category tree
  const categoryTree = categories.reduce((acc: any[], cat: any) => {
    if (cat.parent === 0) {
      acc.push({ ...cat, children: categories.filter((c: any) => c.parent === cat.id) });
    }
    return acc;
  }, []);
  return (
    <html lang="en" suppressHydrationWarning className={`${archivo.variable} ${prozaLibre.variable} ${caveat.variable} ${greatVibes.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <AppProvider>
          <Preloader />
          <AnnouncementBar />
          <div className="sticky top-0 z-50">
            <Navbar categories={categoryTree} />
          </div>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <SignInModal />
          <WhatsAppButton />
        </AppProvider>
      </body>
    </html>
  );
}
