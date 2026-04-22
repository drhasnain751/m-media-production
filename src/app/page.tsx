import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import PortfolioHighlights from "@/components/sections/PortfolioHighlights";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <Hero />
      
      {/* Brands Slider Placeholder */}
      <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span key={i} className="text-4xl font-heading font-black text-white/10 uppercase tracking-tighter italic">
              Global Brand {i}
            </span>
          ))}
        </div>
      </section>

      <Services />
      
      <PortfolioHighlights />

      {/* About Preview Section */}
      <section className="py-24 md:py-32 lg:py-48 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="p-12 h-full flex flex-col justify-center">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Our DNA</span>
                <h3 className="text-5xl font-black uppercase mb-8 leading-tight">
                  We don't just follow trends. <br />
                  <span className="text-gradient">We set them.</span>
                </h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Founded in 2018, M Media has grown from a small creative studio into a global force in media and digital innovation. We believe in the power of cinematic storytelling and precision-engineered marketing.
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/10 blur-3xl rounded-full" />
          </div>
          
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Years Experience", value: "6+" },
                { label: "Global Clients", value: "150+" },
                { label: "Awards Won", value: "24" },
                { label: "Team Members", value: "45" },
              ].map((stat) => (
                <div key={stat.label} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-4xl font-black text-primary block mb-2">{stat.value}</span>
                  <span className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white font-bold group"
            >
              Learn More About Our Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 lg:py-48 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black uppercase text-black mb-12 leading-none">
            Ready to scale <br />
            your brand?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-12 py-6 bg-black text-white font-bold rounded-full text-xl hover:scale-105 active:scale-95 transition-all"
          >
            Let's Start a Project
          </Link>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-black/20 h-full" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
