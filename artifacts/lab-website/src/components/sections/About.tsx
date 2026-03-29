import { motion } from "framer-motion";
import { Target, Flag, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/about-lab.png`}
                alt="Modern Laboratory"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="Logo"
                  className="w-16 h-16 bg-white p-2 rounded-xl mb-4"
                />
                <h3 className="text-white font-display font-bold text-2xl">{a.yearsLabel}</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{a.subtitle}</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{a.title}</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{a.description}</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{a.mission.title}</h4>
                  <p className="text-slate-600">{a.mission.text}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                  <Flag className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{a.vision.title}</h4>
                  <p className="text-slate-600">{a.vision.text}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{a.values.title}</h4>
                  <p className="text-slate-600">{a.values.text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
