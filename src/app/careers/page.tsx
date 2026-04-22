"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  { title: "Senior Video Editor", location: "Remote / CA", type: "Full-time" },
  { title: "AI Integration Specialist", location: "Tech Valley, CA", type: "Full-time" },
  { title: "Digital Ads Strategist", location: "Remote", type: "Contract" },
  { title: "3D Motion Designer", location: "CA / Hybrid", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-24"
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase mb-8">
              Join the <br />
              <span className="text-gradient">M Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed">
              We are always looking for the world's best creative and technical talent. If you live at the intersection of cinematic art and digital innovation, we want to meet you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Culture */}
            <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase">Our Culture</h2>
              <div className="space-y-8">
                {[
                  { title: "Radical Innovation", desc: "We don't play it safe. We build the future." },
                  { title: "Creative Freedom", desc: "Autonomy to explore and create your best work." },
                  { title: "Global Impact", desc: "Work with brands that reach millions daily." },
                ].map((item) => (
                  <div key={item.title} className="p-8 bg-white/5 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
                    <p className="text-white/40">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-12">
              <h2 className="text-4xl font-black uppercase">Open Roles</h2>
              <div className="space-y-4">
                {jobs.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 glass rounded-3xl border border-white/10 hover:border-primary/50 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold uppercase group-hover:text-primary transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                          <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {job.location}</span>
                          <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {job.type}</span>
                          <span className="flex items-center gap-2"><Briefcase className="w-3 h-3" /> Production</span>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
