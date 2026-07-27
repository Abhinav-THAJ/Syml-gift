'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Send, Bookmark, MoreVertical } from 'lucide-react';

function InstagramIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

interface InstagramPost {
  id: string;
  image: string;
  location?: string;
  likes: string;
  caption?: string;
  date: string;
  url: string;
}

const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/smyl.gifting?igsh=aWdwOGJubDRpMDZu';
const INSTAGRAM_HANDLE = '@smyl.gifting';

const instagramPosts: InstagramPost[] = [
  {
    id: 'post-1',
    image: '/photos/onam_hamper.png',
    location: 'Kochi, Kerala',
    likes: '1,240',
    caption: 'Celebrate Onam in style with our handcrafted Kerala hampers! ✨🌸',
    date: 'Aug 10th, 2024',
    url: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'post-2',
    image: '/photos/1.jpeg',
    location: 'Kochi, Kerala',
    likes: '890',
    caption: 'Personalized luxury photo frames to preserve your best moments forever ❤️',
    date: 'Jul 28th, 2024',
    url: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'post-3',
    image: '/photos/25.jpeg',
    location: 'Kochi, Kerala',
    likes: '1,150',
    caption: 'Curated hampers packed with love and premium treats. Order via WhatsApp!',
    date: 'Jul 15th, 2024',
    url: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'post-4',
    image: '/photos/29.jpeg',
    location: 'Kochi, Kerala',
    likes: '740',
    caption: 'Fun & memorable hampers customized for your loved ones 🎁💫',
    date: 'Jun 30th, 2024',
    url: INSTAGRAM_PROFILE_URL,
  },
  {
    id: 'post-5',
    image: '/photos/5.jpeg',
    location: 'Kochi, Kerala',
    likes: '960',
    caption: 'Handpicked customized gifts delivered all across Kerala with free shipping!',
    date: 'Jun 18th, 2024',
    url: INSTAGRAM_PROFILE_URL,
  },
];

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>(instagramPosts);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    if (token) {
      fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${token}`)
        .then(res => res.json())
        .then(data => {
          if (data && Array.isArray(data.data)) {
            const fetched = data.data
              .filter((item: any) => item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM')
              .map((item: any) => ({
                id: item.id,
                image: item.media_url,
                location: 'Kochi, Kerala',
                likes: '❤️',
                caption: item.caption || '',
                date: item.timestamp ? new Date(item.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
                url: item.permalink || INSTAGRAM_PROFILE_URL,
              }));
            if (fetched.length > 0) {
              setPosts(fetched);
            }
          }
        })
        .catch(err => console.error('Error fetching Instagram live feed:', err));
    }
  }, []);
  return (
    <section className="py-16 md:py-24 bg-[#fffaf3] border-t border-border/40 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Follow us on insta.
          </h2>
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-semibold text-primary hover:underline underline-offset-4 transition-all"
          >
            <InstagramIcon className="w-6 h-6" />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        {process.env.NEXT_PUBLIC_ELFSIGHT_ID ? (
          <div className="w-full max-w-6xl mx-auto px-4">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className={`elfsight-app-${process.env.NEXT_PUBLIC_ELFSIGHT_ID}`} data-elfsight-app-lazy></div>
          </div>
        ) : (
          /* Scrollable Instagram Feed Row (Fallback/API) */
          <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 scrollbar-hide snap-x">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex-shrink-0 w-[290px] sm:w-[320px] snap-center"
              >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border/80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Post Header */}
                <div className="flex items-center justify-between p-3.5 border-b border-border/40 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border/50">
                      <Image
                        src="/photos/IMG_8385.PNG"
                        alt="SMYL Gifting"
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {INSTAGRAM_HANDLE}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-tight">
                        {post.location || 'Kochi, Kerala'}
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-1 text-muted-foreground hover:text-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(post.url, '_blank');
                    }}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>

                {/* Post Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
                  <Image
                    src={post.image}
                    alt={post.caption || 'Instagram Post'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Post Action Icons */}
                <div className="p-3.5 space-y-2 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <Heart className="w-5 h-5 text-foreground hover:text-red-500 hover:fill-red-500 transition-colors" />
                      <MessageCircle className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                      <Send className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                    </div>
                    <Bookmark className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                  </div>

                  {/* Caption & Date */}
                  <div className="space-y-1 text-xs pt-1">
                    <p className="font-semibold text-foreground">{post.likes} likes</p>
                    {post.caption && (
                      <p className="text-foreground/90 line-clamp-2 leading-relaxed">
                        <span className="font-bold mr-1">{INSTAGRAM_HANDLE}</span>
                        {post.caption}
                      </p>
                    )}
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider pt-0.5">
                      {post.date}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        )}

        {/* View Profile CTA Button */}
        <div className="flex justify-center mt-8">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all hover:scale-105 shadow-md shadow-primary/20"
          >
            <InstagramIcon className="w-4 h-4" /> View Profile on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
