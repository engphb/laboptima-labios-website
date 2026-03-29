import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap } from "lucide-react";
import { team } from "@/data/mock";

function MemberPhoto({ member }: { member: typeof team[0] }) {
  const [imgError, setImgError] = useState(false);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const photoSrc = member.photo ? `${base}/images/team/${member.photo}` : null;

  if (photoSrc && !imgError) {
    return (
      <img
        src={photoSrc}
        alt={member.name}
        className="w-full h-full object-cover rounded-full"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <span className="text-2xl font-display font-bold text-slate-300 group-hover:text-primary transition-colors">
      {member.initials}
    </span>
  );
}

export function Team() {
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Pesquisadores</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Nossa Equipe</h3>
          <p className="text-lg text-slate-600">
            Pesquisadores dedicados trabalhando juntos para expandir as fronteiras da ciência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl p-8 text-center group hover:bg-white hover:shadow-xl hover:shadow-primary/5 border border-transparent hover:border-slate-100 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full mb-6 p-1 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <MemberPhoto member={member} />
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-accent font-medium text-sm mb-4">{member.role}</p>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">{member.bio}</p>

              <div className="flex items-center justify-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                {member.lattes ? (
                  <a
                    href={member.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Currículo Lattes"
                    className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </a>
                ) : (
                  <span
                    title="Currículo Lattes não disponível"
                    className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-300 cursor-default"
                  >
                    <GraduationCap className="w-4 h-4" />
                  </span>
                )}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
