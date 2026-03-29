import { motion } from "framer-motion";
import { ArrowRight, Microscope } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-48 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Scientific Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground mb-8 backdrop-blur-sm"
          >
            <Microscope className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium tracking-wide uppercase">Pesquisa de Excelência</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] mb-6"
          >
            Avançando as <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-200">Fronteiras</span> do Conhecimento
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Localizados na UFRJ, os nossos laboratórios são multidisciplinares e dedicados à investigação científica de ponta, integrando biotecnologia, nanomateriais e inteligência artificial para solucionar desafios da sociedade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#pesquisa"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-accent text-primary-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Conheça Nossas Linhas
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-200"
            >
              Fale Conosco
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
