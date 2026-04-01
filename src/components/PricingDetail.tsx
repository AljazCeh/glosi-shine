import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceDetail } from "@/data/services";
import { Check, Droplets, Wind, Sparkles, CircleDot, Lightbulb, Fan, Sofa } from "lucide-react";

interface PricingDetailProps {
  service: ServiceDetail;
  onContactClick?: () => void;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Droplets,
  Wind,
  Sparkles,
  CircleDot,
  Lightbulb,
  Fan,
  Sofa,
};

export const PricingDetail = ({ service, onContactClick }: PricingDetailProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    service.vehicleCategories[0]?.value || "all"
  );

  const categories = service.vehicleCategories.length > 0 ? service.vehicleCategories : [];
  const showCategoryTabs = categories.length > 0;

  const formatPrice = (price: number) => {
    return price;
  };

  return (
    <div className="w-full">
      {/* Category Tabs - Horizontal like reference */}
      {showCategoryTabs && (
        <div className="mb-12">
          <div className="flex flex-wrap gap-0 justify-start border-b-2 border-muted">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-3 text-sm font-semibold transition-all ${
                  selectedCategory === category.value
                    ? "text-primary border-b-2 border-b-primary -mb-0.5"
                    : "text-muted-foreground border-b-2 border-b-transparent hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Packages - Horizontal layout like reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {service.packages.map((pkg, index) => {
          const selectedPrice = pkg.pricing.find((p) => p.category === selectedCategory || p.category === "all");
          const price = selectedPrice?.price;
          const IconComponent = iconMap[service.icon];

          return (
            <div
              key={index}
              className={`relative rounded-lg border-2 transition-all overflow-hidden flex flex-col h-full ${
                pkg.featured
                  ? "border-primary bg-gradient-to-b from-blue-900/30 to-card shadow-lg"
                  : "border-slate-700 bg-slate-900 hover:border-primary/50 hover:shadow-md"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 z-10">
                  <div className="w-full bg-primary text-primary-foreground font-bold text-center py-1.5 text-xs uppercase">
                    Najbol-i<br/>priljubljeno
                  </div>
                </div>
              )}

              <div className={`p-5 flex flex-col h-full ${pkg.featured ? "pt-14" : "pt-5"}`}>
                {/* Icon */}
                {IconComponent && (
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-11 h-11 text-primary" strokeWidth={1.5} />
                  </div>
                )}

                {/* Package Name */}
                <h3 className="text-center font-bold text-foreground mb-4 text-base  uppercase tracking-wide">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  {price !== undefined && price !== 0 ? (
                    <div className="text-4xl font-bold text-primary">
                      {formatPrice(price)} €
                    </div>
                  ) : (
                    <div className="text-base text-muted-foreground italic">Po dogovoru</div>
                  )}
                </div>

                {/* What's Included */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs text-foreground leading-tight">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-slate-700">
                  <Button
                    onClick={onContactClick}
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 h-auto text-xs"
                  >
                    Naročilo se
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onContactClick}
                    className="w-full text-foreground border-slate-700 hover:border-primary/50 hover:bg-slate-800 py-2 h-auto text-xs font-semibold"
                  >
                    Več info?
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      {service.additionalInfo && (
        <div className="p-6 rounded-lg bg-muted/30 border border-border mb-12">
          <p className="text-sm text-foreground italic">
            {service.additionalInfo}
          </p>
        </div>
      )}
    </div>
  );
};
