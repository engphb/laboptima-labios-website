import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/mock";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/images/logo-lab.png"
            alt="Logo LabOPTIMA | LaBioS"
            className="w-16 h-16 object-contain rounded-full"
          />
          <div className="leading-tight">
            <span className={`font-display font-bold text-xl tracking-tight block transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white drop-shadow-md"
            }`}>
              LaBioS <span className={`font-light ${isScrolled ? "text-slate-400" : "text-white/50"}`}>|</span> LabOPTIMA
            </span>
            <span className={`text-xs font-normal hidden sm:block transition-colors duration-300 ${
              isScrolled ? "text-slate-500" : "text-white/70"
            }`}>
              Laboratório de Biopolímeros e Sensores
            </span>
            <span className={`text-xs font-normal hidden sm:block transition-colors duration-300 ${
              isScrolled ? "text-slate-500" : "text-white/70"
            }`}>
              Laboratório de Otimização, Produção e Tecnologias Inteligentes Multidisciplinares e Analíticas
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? isActive
                      ? "text-primary"
                      : "text-slate-700 hover:text-primary"
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute inset-0 rounded-full -z-10 ${
                      isScrolled ? "bg-primary/10" : "bg-white/10"
                    }`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-white/80"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 lg:hidden flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
