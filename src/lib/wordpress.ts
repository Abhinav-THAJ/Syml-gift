// Fetch generic WordPress content, particularly pages which contain ACF fields
export const WP_URL = process.env.WC_URL || 'https://paleturquoise-guanaco-735591.hostingersite.com';

export async function getPageData(slug: string) {
  try {
    const url = new URL(`${WP_URL}/wp-json/wp/v2/pages?slug=${slug}`);
    
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!response.ok) {
      console.error(`WordPress API Error: ${response.statusText} (${response.status})`);
      return null;
    }

    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.error('Failed to fetch from WordPress:', error);
    return null;
  }
}
