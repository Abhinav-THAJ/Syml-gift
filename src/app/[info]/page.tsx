'use client';

import { use } from 'react';

export default function InfoPage({ params }: { params: Promise<{ info: string }> }) {
  const resolvedParams = use(params);
  const title = resolvedParams.info
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-5xl font-heading font-bold text-foreground mb-6">{title}</h1>
        <p className="text-muted-foreground text-lg mb-10">
          This is a placeholder for the {title} page. Real content will be updated soon!
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10"></div>
        <div className="p-10 border border-border rounded-3xl bg-muted/30">
          <p className="text-muted-foreground">
            More details regarding {title.toLowerCase()} will appear here. Thank you for choosing SMYL GIFTING.
          </p>
        </div>
      </div>
    </div>
  );
}
