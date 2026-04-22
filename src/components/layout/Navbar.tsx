"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Digital Marketing", href: "/services#marketing" },
      { name: "Web Development", href: "/services#web" },
      { name: "Video Production", href: "/services#video" },
      { name: "AI Automation", href: "/services#ai" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
        scrolled ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/10" : "py-8 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group">
          <Image 
            src="/logo-agency.png" 
            alt="M Media Logo" 
            width={scrolled ? 180 : 220} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-500"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1",
                  pathname === link.href ? "text-primary" : "text-white/70"
                )}
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />}
              </Link>
              
              {link.submenu && (
                <div className="absolute top-full left-0 mt-4 w-64 glass-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-xl overflow-hidden p-2">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-3 text-sm text-white/70 hover:text-primary hover:bg-white/5 rounded-lg transition-all"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="px-6 py-3 bg-primary text-black font-bold rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] lg:hidden"
            />
            
            {/* Menu Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[5%] left-4 right-4 max-w-lg mx-auto bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] z-[9999] lg:hidden overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-8">
                <Image 
                  src="/logo-agency.png" 
                  alt="M Media Logo" 
                  width={160} 
                  height={50} 
                  className="h-8 w-auto object-contain"
                />
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links List */}
              <div className="px-6 py-4 space-y-2 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-8 py-5 rounded-2xl text-xl font-bold transition-all",
                      pathname === link.href 
                        ? "bg-primary text-white" 
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Bottom Button */}
              <div className="p-6">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl text-center block text-lg shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </nav>
  );
}
