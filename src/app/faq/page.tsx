import FAQSection from '@/components/home/FAQSection';

export const metadata = {
  title: 'FAQ - Frequently Asked Questions | SMYL GIFTING',
  description: 'Find answers to questions about ordering, custom hampers, photo frames, delivery across Kerala, and payment options.',
};

export default function FAQPage() {
  return (
    <div className="pt-20">
      <FAQSection />
    </div>
  );
}
