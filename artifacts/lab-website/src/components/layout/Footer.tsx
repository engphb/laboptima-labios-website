import { Beaker, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <Beaker className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-white tracking-tight block">
                  LaBioS <span className="text-white/40 font-light">|</span> LabOPTIMA
                </span>
                <span className="text-slate-400 text-xs leading-snug block mt-1">Laboratórios Integrados de Pesquisa Científica</span>
              </div>
            </div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Avançando as fronteiras do conhecimento científico através de pesquisa inovadora, excelência acadêmica e impacto na sociedade.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Pesquisa', 'Publicações', 'Serviços', 'Equipe'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o')}`} className="text-slate-400 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>LaBioS | LabOPTIMA<br />Universidade Federal do Rio de Janeiro
                  Rua Moniz Aragão, 360 - Cidade Universitária
                  Universidade Federal do Rio de Janeiro
                  Centro de Tecnologia II<br />Rio de Janeiro, RJ - 21941-914</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+55 (21) 99663-6877</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>fernando_gomes@ima.ufrj.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LaBioS | LabOPTIMA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
