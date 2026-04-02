import { motion } from "framer-motion";
import { ExternalLink, FileText, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { publications } from "@/data/mock";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AllPublications() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 pt-56 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-10 group bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para a página inicial
          </button>

          <div className="mb-14">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
              Produção Científica
            </h2>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-4">
              Todas as Publicações
            </h1>
          </div>

          <div className="mb-8">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {publications.length} publicações
            </span>
          </div>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 }}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-slate-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {pub.type}
                    </span>
                    <span className="text-primary font-bold">{pub.year}</span>
                    <span className="text-slate-400 text-sm">{pub.journal}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {pub.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{pub.authors}</p>
                  {pub.link && pub.link !== "#" ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
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
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
