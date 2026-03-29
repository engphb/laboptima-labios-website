import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Infrastructure() {
  const { t } = useLanguage();
  const inf = t.infrastructure;

  return (
    <section id="infraestrutura" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{inf.subtitle}</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{inf.title}</h3>
          <p className="text-lg text-slate-600">{inf.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/infrastructure.png`}
              alt="Scientific Equipment"
              className="w-full h-auto aspect-video object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
              <div className="text-4xl font-display font-extrabold text-primary mb-1">R$ 15M+</div>
              <div className="text-slate-600 text-sm font-medium">{inf.equipmentValue}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100"
          >
            <h4 className="text-2xl font-bold text-slate-900 mb-6">{inf.equipmentTitle}</h4>
            <ul className="space-y-6">
              {inf.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Check className="w-3 h-3 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 leading-tight group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-slate-100">
              <a href="#contato" className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2">
                {inf.scheduleVisit}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
