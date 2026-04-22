"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase mb-12 leading-tight">
              Crafting the <br />
              <span className="text-gradient">Future of Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed">
              M Media was born from a simple observation: the line between cinematic media and digital strategy is disappearing. We bridge that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">Our <span className="text-primary">Visionaries</span></h2>
            <p className="text-white/50 text-xl max-w-2xl">The creative minds and technical experts behind our global success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Rivers", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
              { name: "Sarah Chen", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
              { name: "Marcus Thorne", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
              { name: "Elena Volkov", role: "Lead AI Engineer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h4 className="text-xl font-bold uppercase">{member.name}</h4>
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">{member.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Innovation", desc: "Pushing boundaries with AI and emerging tech.", icon: Rocket },
              { title: "Precision", desc: "Data-driven results in every campaign.", icon: Target },
              { title: "Collaboration", desc: "We work as an extension of your team.", icon: Users },
              { title: "Excellence", desc: "High-end cinematic quality is our standard.", icon: Award },
            ].map((value, i) => (
              <div key={value.title} className="space-y-6">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold uppercase">{value.title}</h3>
                <p className="text-white/40 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
