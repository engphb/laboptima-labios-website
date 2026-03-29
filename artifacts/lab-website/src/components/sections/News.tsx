import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function News() {
  const { t } = useLanguage();
  const n = t.news;

  return (
    <section id="noticias" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{n.subtitle}</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{n.title}</h3>
            <p className="text-lg text-slate-600">{n.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {n.items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 group cursor-pointer flex flex-col transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <time>{item.date}</time>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-1">{item.summary}</p>
                <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors">
                  {n.readMore}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
