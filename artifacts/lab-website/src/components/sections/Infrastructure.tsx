import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { equipment } from "@/data/mock";

export function Infrastructure() {
  const { t, lang } = useLanguage();
  const inf = t.infrastructure;

  return (
    <section id="infraestrutura" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{inf.subtitle}</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{inf.title}</h3>
          <p className="text-lg text-slate-600">{inf.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, idx) => {
            const name = lang === "en" ? item.nameEn : item.name;
            const description = lang === "en" ? item.descriptionEn : item.description;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-blue-50">
                      <Microscope className="w-12 h-12 text-primary/30" />
                      <span className="text-3xl font-bold text-primary/20 tracking-widest">
                        {item.acronym}
                      </span>
                      <span className="text-xs text-slate-400 px-4 text-center">
                        {lang === "en" ? "Photo coming soon" : "Foto em breve"}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    {item.acronym}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-slate-800 text-sm leading-snug mb-2">
                    {name}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed flex-1">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-8 py-5 shadow-sm">
            <div>
              <div className="text-3xl font-extrabold text-primary">R$ 15M+</div>
              <div className="text-slate-500 text-sm">{inf.equipmentValue}</div>
            </div>
            <div className="w-px h-10 bg-slate-200 mx-2" />
            <a href="#contato" className="text-primary font-medium hover:text-primary/80 transition-colors text-sm">
              {inf.scheduleVisit} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
