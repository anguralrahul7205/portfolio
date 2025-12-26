import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-16 sm:h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold font-display tracking-wider cursor-pointer group">
            <span className="text-primary group-hover:text-glow transition-all duration-300">RAHUL</span>
            <span className="text-white">.DEV</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`
                  relative cursor-pointer text-sm font-medium tracking-wide uppercase font-body
                  ${location === link.href ? "text-primary text-glow" : "text-muted-foreground hover:text-white"}
                  transition-colors duration-200
                `}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary shadow-[0_0_10px_var(--primary)]"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary transition-colors p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 glass border-b border-white/10 md:hidden p-4 flex flex-col space-y-4"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                onClick={() => setIsOpen(false)}
                className={`
                  block py-2 text-center text-lg font-body uppercase
                  ${location === link.href ? "text-primary font-bold" : "text-muted-foreground"}
                `}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
