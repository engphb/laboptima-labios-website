import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Research() {
  const { t } = useLanguage();
  const r = t.research;

  return (
    <section id="pesquisa" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{r.subtitle}</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{r.title}</h3>
          <p className="text-lg text-slate-600">{r.description}</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {r.lines.map((line) => {
            const Icon = line.icon;
            return (
              <motion.div
                key={line.id}
                variants={item}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  <Icon className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{line.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{line.description}</p>
                  <a href="#contato" className="inline-flex font-medium text-primary mt-6 hover:text-accent transition-colors group-hover:underline underline-offset-4">
                    {r.learnMore} &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
