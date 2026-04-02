import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

        <div className="max-w-5xl mx-auto px-10">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => {
                const title = lang === "en" ? project.titleEn : project.title;
                const description = lang === "en" ? project.descriptionEn : project.description;
                const type = lang === "en" ? project.typeEn : project.type;
                const status = lang === "en" ? project.statusEn : project.status;

                return (
                  <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-lg transition-all duration-300 border border-border bg-card flex flex-col h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="text-xs bg-primary/10 text-primary border-0">
                            {type}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <CalendarDays className="w-3 h-3" />
                            {project.year}
                          </span>
                        </div>

                        {project.logo ? (
                          <div className="h-14 flex items-center mb-4">
                            <img
                              src={project.logo}
                              alt={`${project.partner} logo`}
                              className="max-h-12 max-w-[140px] object-contain"
                            />
                          </div>
                        ) : (
                          <div className="h-14 flex items-center mb-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building2 className="w-6 h-6" />
                              <span className="font-semibold text-foreground text-sm">
                                {project.partner}
                              </span>
                            </div>
                          </div>
                        )}

                        <h3 className="font-bold text-foreground text-base mb-3 leading-snug group-hover:text-primary transition-colors">
                          {title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                          {description}
                        </p>

                        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                            {status}
                          </span>
                          {!project.logo && (
                            <span className="text-xs text-muted-foreground font-medium">
                              {project.partner}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
