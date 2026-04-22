"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { 
  Megaphone, Globe, Video, Palette, Cpu, Search, 
  ShoppingBag, Smartphone, Layers, Share2, Target, 
  Camera, Zap, BarChart 
} from "lucide-react";

const categories = [
  {
    name: "Marketing & Strategy",
    services: [
      { name: "Digital Marketing", icon: Megaphone, desc: "Omnichannel growth strategies." },
      { name: "Social Media Management", icon: Share2, desc: "Building communities and engagement." },
      { name: "Meta & TikTok Ads", icon: Target, desc: "High-conversion performance marketing." },
      { name: "SEO Optimization", icon: Search, desc: "Dominating search engine results." },
    ]
  },
  {
    name: "Development & Tech",
    services: [
      { name: "Web Development", icon: Globe, desc: "Next.js & React expert solutions." },
      { name: "WordPress Development", icon: Layers, desc: "Custom themes and enterprise builds." },
      { name: "Shopify Development", icon: ShoppingBag, desc: "Scaling E-commerce to millions." },
      { name: "App Development", icon: Smartphone, desc: "Native and cross-platform apps." },
      { name: "AI Automation", icon: Cpu, desc: "Workflow and customer support AI." },
    ]
  },
  {
    name: "Creative & Production",
    services: [
      { name: "Branding & Design", icon: Palette, desc: "Visual identities that resonate." },
      { name: "Video Production", icon: Video, desc: "Cinematic commercials and reels." },
      { name: "Photography & Shoots", icon: Camera, desc: "High-end model and product shoots." },
      { name: "3D Design & Animation", icon: Zap, desc: "Futuristic 3D assets and motion." },
      { name: "Content Creation", icon: BarChart, desc: "Shorts, Reels, and TikTok content." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      {/* Header */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase mb-8">
              Expert <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed">
              From cinematic production to AI-driven growth, we provide the tools and strategy to dominate your market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      {categories.map((category, idx) => (
        <section key={category.name} className={`py-24 ${idx % 2 === 0 ? "bg-secondary" : "bg-black"}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 tracking-tighter">
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, sIdx) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: sIdx * 0.1 }}
                  className="glass p-10 rounded-3xl hover:border-primary/50 transition-all group"
                >
                  <service.icon className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold uppercase mb-4">{service.name}</h3>
                  <p className="text-white/40 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-24 bg-primary text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-16">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and vision." },
              { step: "02", title: "Strategy", desc: "Planning the roadmap to success." },
              { step: "03", title: "Execution", desc: "Crafting with precision and passion." },
              { step: "04", title: "Optimization", desc: "Scaling and refining for growth." },
            ].map((p) => (
              <div key={p.step} className="space-y-4">
                <span className="text-6xl font-black opacity-20">{p.step}</span>
                <h4 className="text-2xl font-bold uppercase">{p.title}</h4>
                <p className="font-medium opacity-70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
