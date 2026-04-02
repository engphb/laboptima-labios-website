import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays, Building2 } from "lucide-react";

export function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="projetos"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f2744 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-white/30 text-white/80 bg-white/10 backdrop-blur-sm"
          >
            {t.projects.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            {t.projects.description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {projects.map((project) => {
                const title = lang === "en" ? project.titleEn : project.title;
                const description =
                  lang === "en" ? project.descriptionEn : project.description;
                const type = lang === "en" ? project.typeEn : project.type;
                const status =
                  lang === "en" ? project.statusEn : project.status;

                return (
                  <CarouselItem
                    key={project.id}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div
                      className="group h-full rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "rgba(255, 255, 255, 0.07)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow:
                          "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(99, 102, 241, 0.3)",
                            border: "1px solid rgba(99, 102, 241, 0.5)",
                            color: "#a5b4fc",
                          }}
                        >
                          {type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <CalendarDays className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>

                      {project.logo ? (
                        <div className="h-14 flex items-center mb-4">
                          <div
                            className="px-3 py-2 rounded-lg"
                            style={{ background: "rgba(255,255,255,0.9)" }}
                          >
                            <img
                              src={project.logo}
                              alt={`${project.partner} logo`}
                              className="max-h-8 max-w-[120px] object-contain"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="h-14 flex items-center mb-4">
                          <div className="flex items-center gap-2 text-white/50">
                            <Building2 className="w-5 h-5" />
                            <span className="font-semibold text-white text-sm">
                              {project.partner}
                            </span>
                          </div>
                        </div>
                      )}

                      <h3 className="font-bold text-white text-base mb-3 leading-snug group-hover:text-blue-200 transition-colors">
                        {title}
                      </h3>

                      <p className="text-white/50 text-sm leading-relaxed flex-1">
                        {description}
                      </p>

                      <div
                        className="mt-5 pt-4 flex items-center justify-between"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                          {status}
                        </span>
                        {!project.logo && (
                          <span className="text-xs text-white/30 font-medium">
                            {project.partner}
                          </span>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" />
            <CarouselNext className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" />
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-white/60 font-medium hover:text-white transition"
          >
            {t.projects.contact} →
          </a>
        </div>
      </div>
    </section>
  );
}
