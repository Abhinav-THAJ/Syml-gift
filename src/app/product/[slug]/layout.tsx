export async function generateStaticParams() {
  return [
    { slug: '1' },
    { slug: '2' },
    { slug: '3' },
    { slug: '4' },
    { slug: '5' },
    { slug: '6' },
  ];
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
