import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, Gift, ShieldCheck, Smile, ArrowRight, Award, PackageCheck, Layers, Hammer, Truck } from 'lucide-react';

export const metadata = {
  title: 'Our Journey | SMYL GIFTING by Athira D Nair',
  description: 'Discover the story behind SMYL GIFTING by Athira D Nair. Explore our brand philosophy, manufacturing process, and handcrafted gift hampers.',
};

export default function AboutPage() {
  const manufacturingSteps = [
    {
      step: '01',
      icon: Layers,
      title: 'Ethical Sourcing & Material Selection',
      desc: 'We carefully hand-select premium ingredients, authentic Kerala Kasavu fabrics, traditional brassware, and luxury eco-friendly gift boxes from trusted local artisans.'
    },
    {
      step: '02',
      icon: Hammer,
      title: 'Studio Printing & Personalization',
      desc: 'Inside our Kochi studio, photo prints are output with gallery-grade HD color fidelity. Custom wooden frames, polaroids, and hand-lettered cards are prepared with precision.'
    },
    {
      step: '03',
      icon: Gift,
      title: 'Artisan Styling & Assembly',
      desc: 'Our design team hand-arranges every gift item, ensuring aesthetic color harmony, soft shredded filling, custom tissue wraps, and hand-tied satin ribbons.'
    },
    {
      step: '04',
      icon: PackageCheck,
      title: 'Quality Audit & Secure Packaging',
      desc: 'Each completed hamper passes a 5-point quality inspection before being sealed in shock-proof protective outer transit boxes for 100% damage-free delivery.'
    }
  ];

  const brandPillars = [
    {
      icon: Sparkles,
      title: 'Artistic Excellence',
      desc: 'Thoughtfully designed hamper layouts with vibrant aesthetics, premium textures, and seasonal themes.'
    },
    {
      icon: Gift,
      title: 'Bespoke Customization',
      desc: 'Personalized frames, custom message notes, and tailor-made item selections for every relationship.'
    },
    {
      icon: ShieldCheck,
      title: 'Premium Quality Standard',
      desc: 'Rigid luxury boxes, gold-embossed accents, and fresh, authentic gourmet treats.'
    },
    {
      icon: Smile,
      title: 'Emotional Connection',
      desc: 'Gifts engineered to evoke genuine delight, warm smiles, and unforgettable memories.'
    }
  ];

  const milestones = [
    { value: '20,000+', label: 'Happy Customers' },
    { value: '50,000+', label: 'Orders Delivered' },
    { value: '100%', label: 'Handcrafted Quality' },
    { value: 'Free', label: 'Kerala Delivery' }
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-primary/5 via-background to-background border-b border-border/40">
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 fill-primary" /> Our Journey & Story
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-tight mb-4">
            The Story Behind <span className="text-primary">SMYL GIFTING</span>
          </h1>
          <p className="text-lg md:text-xl font-serif italic text-muted-foreground mb-6">
            by Athira D Nair
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
            From a passionate creative studio in Kerala to delivering over 50,000+ handcrafted hampers across India — our journey is built on love, craftsmanship, and the joy of creating <strong className="text-foreground">Something You Love</strong>.
          </p>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-8 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-heading font-bold tracking-wide">
            SMYL GIFTING — Wrapped with Love. Delivered with a Smile.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-background">
                <Image
                  src="/photos/about-artwork.jpg"
                  alt="SMYL GIFTING Artwork by Athira D Nair"
                  fill
                  className="object-contain p-3"
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:right-2 bg-background border border-border p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs text-foreground">Handcrafted in Kerala</p>
                  <p className="text-[11px] text-muted-foreground">Curated by Athira D Nair</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Brand Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Transforming Emotions into Timeless Gift Experiences
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Founded by <strong className="text-foreground font-semibold">Athira D Nair</strong>, SMYL GIFTING started with a vision to replace generic gift boxes with deeply personalized, aesthetic keepsakes that tell a story.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Whether celebrating birthdays, anniversaries, Onam festivities, corporate milestones, or baby showers, every hamper is conceptualized to evoke genuine warmth. From authentic Kasavu silk elegance to handcrafted photo frames, we infuse art into every gift.
              </p>
              
              <div className="pt-4 border-t border-border">
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground font-medium text-base">
                  “A gift is not just an object — it is a physical expression of love and memory. Our goal is to make every unboxing feel magical.”
                </blockquote>
                <p className="text-right text-xs font-semibold text-primary mt-2">
                  — Athira D Nair, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Crafting Process */}
      <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
              In-House Workshop
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Manufacturing & Crafting Process
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Take a look behind the scenes at how our studio brings every custom hamper from concept to delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufacturingSteps.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              return (
                <div
                  key={idx}
                  className="bg-card border border-border/80 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm hover:shadow-md hover:border-primary/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-heading font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                        {stepItem.step}
                      </span>
                    </div>
                    <h3 className="text-base font-heading font-bold text-foreground mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Stats Section */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {milestones.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs md:text-sm text-primary-foreground/80 font-medium tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Pillars & Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What Defines SMYL GIFTING
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Our core values guide every hamper we craft and ship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center space-y-3 p-6 rounded-2xl bg-card border border-border/80 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground mx-auto flex items-center justify-center shadow-md shadow-primary/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Be Part of Our Journey
          </h2>
          <p className="text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Explore our curated gift collections or build your own custom hamper to surprise your loved ones today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/categories"
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore Collections <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/build-hamper"
              className="px-8 py-3.5 rounded-full bg-background border-2 border-primary text-primary text-sm font-semibold hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              Build Custom Hamper
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
