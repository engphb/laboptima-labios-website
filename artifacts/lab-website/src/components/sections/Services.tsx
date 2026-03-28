import { motion } from "framer-motion";
import { services } from "@/data/mock";

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Parcerias e Extensão</h2>
          <h3 className="text-4xl font-display font-bold text-white mb-6">Serviços Oferecidos</h3>
          <p className="text-lg text-slate-300">
            Colocamos nossa infraestrutura e expertise à disposição da comunidade acadêmica e do setor produtivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 mb-8">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
