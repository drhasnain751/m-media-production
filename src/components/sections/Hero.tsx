"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(descRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Media Production Background"
          fill
          className="object-cover opacity-60 scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">
              Creative Excellence Since 2018
            </span>
          </motion.div>
          
          <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] uppercase">
            Define The <br />
            <span className="text-gradient">Digital Era</span>
          </h1>
          
          <p ref={descRef} className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
            We blend cinematic visual production with data-driven digital strategies to scale global brands beyond their limits.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/portfolio"
              className="group px-10 py-5 bg-primary text-black font-bold rounded-full flex items-center gap-3 hover:scale-105 transition-all text-lg"
            >
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                <Play className="w-6 h-6 text-white group-hover:text-black fill-current ml-1" />
              </div>
              <span className="font-bold tracking-widest uppercase text-sm group-hover:text-primary transition-colors">
                Watch Showreel
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-20 hidden lg:block animate-float">
        <div className="glass-dark p-8 rounded-2xl flex flex-col gap-2">
          <span className="text-4xl font-bold text-primary">500+</span>
          <span className="text-white/40 uppercase tracking-widest text-xs">Projects Delivered</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/20 blur-[120px] rounded-full" />
    </section>
  );
}
