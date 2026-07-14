export async function generateStaticParams() {
  return [
    { categorySlug: 'hampers' },
    { categorySlug: 'personalized' },
    { categorySlug: 'festive' },
    { categorySlug: 'corporate' },
    { categorySlug: 'birthday-hampers' },
    { categorySlug: 'anniversary-hampers' },
    { categorySlug: 'mothers-day-hampers' },
    { categorySlug: 'valentines-day-hampers' },
    { categorySlug: 'wedding-hampers' },
  ];
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
