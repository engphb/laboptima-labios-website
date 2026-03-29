import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { team } from "@/data/mock";
import { useLanguage } from "@/contexts/LanguageContext";

function MemberPhoto({ member }: { member: typeof team[0] }) {
  const [imgError, setImgError] = useState(false);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const photoSrc = member.photo
    ? member.photo.startsWith("http")
      ? member.photo
      : `${base}/images/team/${member.photo}`
    : null;

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
  const { t } = useLanguage();
  const tm = t.team;

  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{tm.subtitle}</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">{tm.title}</h3>
          <p className="text-lg text-slate-600">{tm.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, idx) => {
            const translated = tm.members.find((m) => m.id === member.id);
            const role = translated?.role ?? member.role;
            const bio = translated?.bio ?? member.bio;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group text-center"
              >
                <div className="relative mx-auto w-32 h-32 mb-4 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-300">
                  <MemberPhoto member={member} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-sm text-primary font-medium mb-2">{role}</p>
                <p className="text-sm text-slate-500 mb-3 line-clamp-3">{bio}</p>
                <div className="flex justify-center gap-2">
                  {member.lattes ? (
                    <a
                      href={member.lattes}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tm.lattesLabel}
                      className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200"
                    >
                      <GraduationCap className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="p-2 rounded-full bg-slate-50 text-slate-300 cursor-not-allowed">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
