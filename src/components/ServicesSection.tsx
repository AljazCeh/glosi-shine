import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { Droplets, Wind, Sparkles, CircleDot, Lightbulb, Fan, Sofa } from "lucide-react";

const ServicesSection = () => {
  // Split services into rows: 2 / 3 / 2
  const rows = [services.slice(0, 2), services.slice(2, 5), services.slice(5, 7)];

  // Map icon names to actual icon components
  const iconMap: Record<string, React.ComponentType<any>> = {
    Droplets,
    Wind,
    Sparkles,
    CircleDot,
    Lightbulb,
    Fan,
    Sofa,
  };

  return (
    <section id="storitve" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Naše storitve
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ponujamo storitve za urejen videz, večjo čistost in boljši občutek v vašem vozilu.
            Kliknite na storitev, da vidite podrobni cenik in opis.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`grid gap-6 ${
                row.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[66%] lg:mx-auto"
              }`}
            >
              {row.map((service) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <Link
                    key={service.slug}
                    to={`/storitve/${service.slug}`}
                    className="group bg-card rounded-lg p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
                    )}
                    <h3 className="font-heading text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {service.shortDesc}
                    </p>
                    <div className="mt-4 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
