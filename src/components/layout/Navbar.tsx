"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-black font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">M</span>
          </div>
          <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase">
            M Media
          </span>
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
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#000000] z-[9999] lg:hidden flex flex-col h-screen w-screen"
          >
            <div className="flex items-center justify-between px-6 py-8 border-b border-white/10">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center rotate-45">
                  <span className="text-black font-bold text-xl -rotate-45">M</span>
                </div>
                <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase">
                  M Media
                </span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-10 bg-black">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-5xl font-heading font-black uppercase tracking-tighter transition-all block",
                      pathname === link.href ? "text-primary" : "text-white hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="mt-6 pl-6 flex flex-col gap-6 border-l-2 border-primary/20">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="text-2xl font-bold text-white/30 hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-white/10 bg-black">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 bg-primary text-black font-black uppercase tracking-widest rounded-2xl text-center block text-xl shadow-[0_0_40px_rgba(255,119,18,0.3)]"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
}
