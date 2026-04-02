import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Link } from "wouter";
import { publications } from "@/data/mock";
import { useLanguage } from "@/contexts/LanguageContext";

export function Publications() {
  const { t } = useLanguage();
  const p = t.publications;

  return (
    <section id="publicacoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{p.subtitle}</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{p.title}</h3>
            <p className="text-lg text-slate-600">{p.description}</p>
          </div>
          <Link
            href="/publicacoes"
            className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-colors shrink-0 inline-block"
          >
            {p.viewAll}
          </Link>
        </div>

        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {p.type}
                    </span>
                    <span className="text-primary font-bold">{pub.year}</span>
                    <span className="text-slate-400 text-sm">{pub.journal}</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{pub.title}</h4>
                  <p className="text-slate-600 mb-3">{pub.authors}</p>
                  {pub.link && pub.link !== "#" ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      DOI: {pub.link.replace(/https?:\/\/(dx\.)?doi\.org\//, "")}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                      <ExternalLink className="w-3.5 h-3.5" />
                      DOI: —
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
