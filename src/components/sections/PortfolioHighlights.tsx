"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Luxe Fashion Rebrand",
    category: "Branding / Web Design",
    image: "/port-1.png",
    slug: "luxe-fashion",
  },
  {
    title: "Urban Nights Campaign",
    category: "Video Production",
    image: "/port-2.png",
    slug: "urban-nights",
  },
  {
    title: "AI Commerce Engine",
    category: "Development / AI",
    image: "/port-1.png",
    slug: "ai-commerce",
  },
];

export default function PortfolioHighlights() {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
              Selected <span className="text-primary">Works</span>
            </h2>
            <p className="text-white/50 text-xl">
              A curated collection of projects where creativity meets digital innovation.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white hover:text-black transition-all"
          >
            See All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <Link href={`/portfolio/${project.slug}`} className="group block relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
                  <div>
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight className="w-8 h-8 text-black" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
