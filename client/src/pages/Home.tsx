import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center pt-16">
      <ThreeBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-6"
            >
              HELLO WORLD_
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">Rahul</span>
              <br />
              <span className="text-white">Angural</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-body font-light mb-8 max-w-xl mx-auto md:mx-0">
              Computer Engineering Fresher | Python & Web Developer crafting futuristic digital experiences.
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
              <Link href="/projects">
                <div className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold font-body uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all cursor-pointer flex items-center gap-2">
                  View Work <ArrowRight size={18} />
                </div>
              </Link>
              <Link href="/contact">
                <div className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white font-body uppercase tracking-wider transition-all cursor-pointer">
                  Contact Me
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "mailto:anguralrahul7205@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-primary transition-colors border border-white/5 hover:border-primary/30"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Element / 3D Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Abstract decorative circles */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-secondary/30 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 rounded-full border border-white/10 animate-[pulse_3s_ease-in-out_infinite]" />
              
              {/* Center glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              
              {/* Code snippet decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl glass border-primary/20 w-3/4">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-xs text-primary/80">
                  <code>
                    <span className="text-secondary">class</span> <span className="text-white">Developer</span> {"{"}
                    {"\n"}  <span className="text-secondary">constructor</span>() {"{"}
                    {"\n"}    <span className="text-purple-400">this</span>.name = <span className="text-green-400">"Rahul"</span>;
                    {"\n"}    <span className="text-purple-400">this</span>.role = <span className="text-green-400">"Fresher"</span>;
                    {"\n"}    <span className="text-purple-400">this</span>.skills = [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"React"</span>];
                    {"\n"}  {"}"}
                    {"\n"}
                    {"\n"}  <span className="text-secondary">buildFuture</span>() {"{"}
                    {"\n"}    <span className="text-secondary">return</span> <span className="text-green-400">"Loading..."</span>;
                    {"\n"}  {"}"}
                    {"\n"}{"}"}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
