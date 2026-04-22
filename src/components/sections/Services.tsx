"use client";

import { motion } from "framer-motion";
import { Camera, Megaphone, Globe, Cpu, Palette, Film } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Media Production",
    desc: "Cinematic video production, 3D animation, and professional photography that tells your brand's story.",
    icon: Film,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven strategies including Meta & TikTok Ads, SEO, and social media management for maximum ROI.",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Web Development",
    desc: "High-performance websites, E-commerce stores (Shopify), and custom web applications built for conversion.",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Automation",
    desc: "Custom AI solutions and workflow automations to scale your business efficiency and customer experience.",
    icon: Cpu,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Branding & Design",
    desc: "Futuristic brand identities, logo design, and high-end graphic assets that stand out in the digital noise.",
    icon: Palette,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Photography",
    desc: "Professional model shoots and product photography with a high-end cinematic feel.",
    icon: Camera,
    color: "from-red-500 to-rose-500",
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-white/50 text-xl">
              We provide end-to-end digital solutions that combine creativity with technology to drive measurable growth.
            </p>
          </div>
          <button className="text-primary font-bold uppercase tracking-widest text-sm hover:underline underline-offset-8">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500",
                service.color
              )}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/40 leading-relaxed mb-8">
                {service.desc}
              </p>
              
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
    </section>
  );
}
