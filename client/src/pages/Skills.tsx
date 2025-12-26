import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Code2, Layout, Database, Terminal, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "C++", level: 75 },
      { name: "HTML / CSS", level: 95 },
    ]
  },
  {
    title: "Frontend Frameworks",
    icon: <Layout className="w-6 h-6 text-secondary" />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js / Fiber", level: 60 },
      { name: "Framer Motion", level: 70 },
    ]
  },
  {
    title: "Tools & Others",
    icon: <Terminal className="w-6 h-6 text-green-400" />,
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 65 },
      { name: "Node.js (Basic)", level: 50 },
    ]
  }
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="Technologies and tools I work with." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-display tracking-wide">{category.title}</h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (idx * 0.1) + (sIdx * 0.05) }}
                      className={`h-full rounded-full ${
                        idx === 0 ? "bg-primary" : idx === 1 ? "bg-secondary" : "bg-green-400"
                      } relative`}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Floating Elements */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Cpu, label: "Problem Solving" },
          { icon: Globe, label: "Web Development" },
          { icon: Database, label: "Data Structures" },
          { icon: Layout, label: "UI/UX Design" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <item.icon className="w-8 h-8 mb-3 text-muted-foreground" />
            <span className="font-mono text-sm text-gray-400 text-center">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
