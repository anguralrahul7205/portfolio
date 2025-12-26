import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export default function Education() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        title="Education" 
        subtitle="My academic journey and qualifications." 
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative pl-8 border-l-2 border-white/10 space-y-12"
        >
          {/* Timeline Item */}
          <div className="relative">
            {/* Dot */}
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_var(--primary)]" />
            
            <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap size={120} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">Diploma in Computer Engineering</h3>
                  <p className="text-lg text-secondary font-medium mt-1">Government Polytechnic College</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground font-mono">
                  <span className="flex items-center gap-2"><Calendar size={14} /> Expected 2026</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> Jammu, India</span>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Currently pursuing a comprehensive curriculum covering software development, 
                system architecture, and computer networks. Focusing on practical applications 
                of programming languages and modern web technologies.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Data Structures", "Algorithms", "OS", "DBMS", "Networking"].map((subject, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Previous Education (Placeholder to show timeline effect) */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background border-2 border-white/20 group-hover:border-primary transition-colors" />
            
            <div className="glass-card p-6 rounded-2xl opacity-60 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-white">High School Education</h3>
              <p className="text-muted-foreground mt-1">Science Stream (Non-Medical)</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground font-mono">
                <Calendar size={14} /> Completed 2023
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
