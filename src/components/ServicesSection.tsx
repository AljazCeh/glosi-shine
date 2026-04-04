import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { Droplets, Wind, Sparkles, CircleDot, Lightbulb, Fan, Sofa, type LucideIcon } from "lucide-react";

const ServicesSection = () => {
  const rows = [services.slice(0, 2), services.slice(2, 5), services.slice(5, 7)];

  const iconMap: Record<string, LucideIcon> = {
    Droplets, Wind, Sparkles, CircleDot, Lightbulb, Fan, Sofa,
  };

  return (
    <section id="storitve" className="py-10 md:py-24 bg-[hsl(220,8%,12%)]">
      <div className="container px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
            Naše storitve
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Ponujamo storitve za urejen videz, večjo čistost in boljši občutek v vašem vozilu.
            Kliknite na storitev, da vidite podrobni cenik in opis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3 md:space-y-5">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`grid gap-3 md:gap-5 ${
                row.length === 3
                  ? "grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-2 lg:grid-cols-2 lg:max-w-[66%] lg:mx-auto"
              }`}
            >
              {row.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <Link
                    key={service.slug}
                    to={`/storitve/${service.slug}`}
                    className="group bg-card/80 rounded-lg p-4 md:p-6 border border-border/60 hover:border-primary/40 hover:bg-card transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {IconComponent && (
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-accent mb-3 md:mb-4" strokeWidth={1.5} />
                    )}
                    <h3 className="font-heading text-base md:text-lg font-medium text-foreground mb-1.5 md:mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-grow">
                      {service.shortDesc}
                    </p>
                    <div className="mt-3 md:mt-4 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Preglej cenik →
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
