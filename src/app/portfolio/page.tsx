"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web", "Video", "Branding", "Ads"];

const projects = [
  { title: "Luxe Fashion Rebrand", category: "Branding", image: "/port-1.png" },
  { title: "Urban Nights Campaign", category: "Video", image: "/port-2.png" },
  { title: "AI Commerce Engine", category: "Web", image: "/port-1.png" },
  { title: "Global Reach Ads", category: "Ads", image: "/port-2.png" },
  { title: "Future Tech UI", category: "Web", image: "/port-1.png" },
  { title: "Minimalist Brand", category: "Branding", image: "/port-2.png" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-12">
            Selected <span className="text-primary">Projects</span>
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-black" 
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-3xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{project.category}</span>
                    <h3 className="text-2xl font-black uppercase text-white mb-4">{project.title}</h3>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <ArrowUpRight className="text-black w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
