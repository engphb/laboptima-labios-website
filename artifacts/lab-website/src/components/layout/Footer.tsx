import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const linkHrefs: Record<string, string> = {
    "Pesquisa": "#pesquisa",
    "Publicações": "#publicacoes",
    "Serviços": "#servicos",
    "Equipe": "#equipe",
    "Research": "#pesquisa",
    "Publications": "#publicacoes",
    "Services": "#servicos",
    "Team": "#equipe",
  };

  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/logo-lab.png`}
                alt="Logo LabOPTIMA | LaBioS"
                className="w-[100px] h-[100px] object-contain"
              />
              <div>
                <span className="font-display font-bold text-2xl text-white tracking-tight block">
                  LaBioS <span className="text-white/40 font-light">|</span> LabOPTIMA
                </span>
                <span className="text-slate-400 text-xs leading-snug block mt-1">{f.tagline}</span>
              </div>
            </div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">{f.description}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">{f.quickLinks}</h4>
            <ul className="space-y-4">
              {f.links.map((item) => (
                <li key={item}>
                  <a href={linkHrefs[item] ?? "#"} className="text-slate-400 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">{f.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>LaBioS | LabOPTIMA<br />Rua Moniz Aragão, 360 - Cidade Universitária<br />Rio de Janeiro, RJ - 21941-914</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+55 (21) 99663-6877</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>fernando_gomes@ima.ufrj.br</span>
              </li>
              <li className="pt-2">
                <img
                  src={`${import.meta.env.BASE_URL}images/ufrj.png`}
                  alt="UFRJ"
                  className="h-10 object-contain opacity-80"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} LaBioS | LabOPTIMA. {f.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">{f.privacy}</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">{f.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
