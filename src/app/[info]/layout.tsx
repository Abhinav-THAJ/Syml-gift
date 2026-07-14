export async function generateStaticParams() {
  return [
    { info: 'about' },
    { info: 'contact' },
    { info: 'faq' },
    { info: 'shipping' },
    { info: 'returns' },
    { info: 'privacy' },
    { info: 'terms' },
  ];
}

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
