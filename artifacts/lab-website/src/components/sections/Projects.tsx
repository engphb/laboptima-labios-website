import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarDays, Building2 } from "lucide-react";

export function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            {t.projects.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.projects.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {projects.map((project) => {
              const title = lang === "en" ? project.titleEn : project.title;
              const description = lang === "en" ? project.descriptionEn : project.description;
              const type = lang === "en" ? project.typeEn : project.type;
              const status = lang === "en" ? project.statusEn : project.status;
              const yearLabel = project.yearEnd ? `${project.year}–${project.yearEnd}` : String(project.year);
              const isCompleted = project.status === "Concluído";

              return (
                <AccordionItem
                  key={project.id}
                  value={String(project.id)}
                  className="bg-card border border-border rounded-xl px-5 shadow-sm data-[state=open]:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 gap-4">
                    <div className="flex flex-col gap-2 text-left flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        {project.logo ? (
                          <img
                            src={project.logo}
                            alt={`${project.partner} logo`}
                            className="h-7 max-w-[72px] object-contain flex-shrink-0"
                          />
                        ) : (
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <Building2 className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                              {project.partner}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <Badge className="text-xs bg-primary/10 text-primary border-0 whitespace-nowrap">
                            {type}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                            <CalendarDays className="w-3 h-3" />
                            {yearLabel}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold text-foreground text-sm leading-snug">
                        {title}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className={`flex items-center gap-1.5 text-xs font-medium ${isCompleted ? "text-slate-500" : "text-green-600"}`}>
                        <span className={`w-2 h-2 rounded-full inline-block ${isCompleted ? "bg-slate-400" : "bg-green-500"}`} />
                        {status}
                      </span>
                      {!project.logo && (
                        <span className="text-xs text-muted-foreground">
                          {project.partner}
                        </span>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition"
          >
            {t.projects.contact} →
          </a>
        </div>
      </div>
    </section>
  );
}
