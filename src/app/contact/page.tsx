"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: any) => {
    // Simulated form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Message sent successfully!");
  };

  return (
    <main className="flex min-h-screen flex-col pt-24">
      <Navbar />
      
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-6xl md:text-8xl font-black uppercase mb-8 leading-tight">
                  Let's <span className="text-gradient">Talk</span>
                </h1>
                <p className="text-xl text-white/50 mb-12 max-w-md">
                  Have a vision? We have the team to make it reality. Reach out and let's build something iconic.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email Us", val: "hello@mmediaproduction.com" },
                    { icon: Phone, label: "Call Us", val: "+1 (555) 000-1111" },
                    { icon: MapPin, label: "Visit Us", val: "123 Innovation Drive, Tech Valley, CA" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <item.icon className="text-primary w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-white/30 text-xs uppercase tracking-widest font-bold block mb-1">{item.label}</span>
                        <span className="text-lg font-bold">{item.val}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-16 border-t border-white/5">
                  <span className="text-white/30 text-xs uppercase tracking-widest font-bold block mb-6">Follow Our Journey</span>
                  <div className="flex items-center gap-4">
                    {[
                      { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.247 2.242 1.308 3.607.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.365-.333 2.633-1.308 3.608-.975.975-2.242 1.247-3.607 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.365-.062-2.633-.333-3.608-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.365.332-2.633 1.308-3.608.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.072 1.688-.072 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.688.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                      { name: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                      { name: "Linkedin", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }
                    ].map((social, i) => (
                      <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d={social.path} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 md:p-12 rounded-[40px]"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/50">Full Name</label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/50">Email Address</label>
                    <input
                      {...register("email")}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message as string}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Service Interest</label>
                  <select
                    {...register("service")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="" className="bg-black">Select a service</option>
                    <option value="marketing" className="bg-black">Digital Marketing</option>
                    <option value="web" className="bg-black">Web Development</option>
                    <option value="video" className="bg-black">Video Production</option>
                    <option value="ai" className="bg-black">AI Automation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary outline-none transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message as string}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-primary text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed Placeholder */}
      <section className="h-[500px] bg-secondary relative overflow-hidden grayscale">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450937!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy"
        />
      </section>

      <Footer />
    </main>
  );
}
