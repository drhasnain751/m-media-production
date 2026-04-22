"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "The Future of AI in Media Production",
    desc: "How generative AI is changing the way we create cinematic content.",
    date: "May 15, 2024",
    author: "Elena Volkov",
    img: "/port-1.png",
    category: "AI & Tech"
  },
  {
    title: "Mastering Short-Form Content in 2024",
    desc: "Why Reels and TikTok are the most powerful tools for brand growth.",
    date: "May 10, 2024",
    author: "Sarah Chen",
    img: "/port-2.png",
    category: "Strategy"
  },
  {
    title: "Behind the Lens: 8K Production Workflows",
    desc: "A technical guide to handling high-resolution cinema footage.",
    date: "May 5, 2024",
    author: "Alex Rivers",
    img: "/port-1.png",
    category: "Production"
  }
];

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase">
              The <span className="text-gradient">Journal</span>
            </h1>
            <div className="relative w-full md:w-80">
              <input
                placeholder="Search articles..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-primary transition-all"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col h-full"
              >
                <div className="aspect-[16/10] relative rounded-3xl overflow-hidden mb-8">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</span>
                </div>
                
                <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-primary transition-colors flex-grow">
                  {post.title}
                </h3>
                <p className="text-white/50 leading-relaxed mb-8 line-clamp-2">
                  {post.desc}
                </p>
                
                <Link href="/blog/slug" className="text-white font-bold border-b-2 border-primary/20 hover:border-primary transition-all w-fit">
                  Read More
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
