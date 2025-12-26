import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const mutation = useSubmitContact();

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Have a project in mind? Let's build something amazing together." 
      />

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto w-full">
        
        {/* Contact Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="glass-card p-8 rounded-2xl h-full">
            <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">Phone</p>
                  <p className="text-lg font-medium">+91 72980 86629</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">Email</p>
                  <a href="mailto:anguralrahul7205@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    anguralrahul7205@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/20 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">Location</p>
                  <p className="text-lg font-medium">Jammu, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/5">
              <p className="text-gray-400 italic">
                "Code is like humor. When you have to explain it, it’s bad."
              </p>
              <p className="mt-2 text-primary font-mono text-sm">— Cory House</p>
            </div>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold font-display mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-black font-bold text-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
