"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, Target } from "lucide-react";

const cases = [
  {
    title: "Revolutionizing Fashion E-commerce",
    client: "Luxe Couture",
    results: "+240% Sales Growth",
    img: "/port-1.png",
    category: "Web & Ads"
  },
  {
    title: "Cinematic Brand Identity",
    client: "Urban Pulse",
    results: "10M+ Views Across Social",
    img: "/port-2.png",
    category: "Video & Branding"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-12">
            Success <span className="text-gradient">Stories</span>
          </h1>
          
          <div className="space-y-32">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`space-y-8 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">{c.category}</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase">{c.title}</h2>
                  <p className="text-white/50 text-xl leading-relaxed">
                    A deep dive into how we transformed {c.client}'s digital presence and delivered record-breaking results.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <BarChart3 className="w-8 h-8 text-primary mx-auto mb-4" />
                      <span className="text-2xl font-black block">{c.results.split(' ')[0]}</span>
                      <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Growth</span>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                      <span className="text-2xl font-black block">6 Months</span>
                      <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Duration</span>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <Target className="w-8 h-8 text-green-500 mx-auto mb-4" />
                      <span className="text-2xl font-black block">12.5x</span>
                      <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">ROAS</span>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/slug`}
                    className="inline-flex items-center gap-3 text-white font-bold group pt-8"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-primary" />
                  </Link>
                </div>

                <div className={`relative aspect-video rounded-[40px] overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Image src={c.img} alt={c.title} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
