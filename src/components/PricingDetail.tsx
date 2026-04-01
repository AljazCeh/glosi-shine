import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceDetail, VehicleCategory } from "@/data/services";
import { Check } from "lucide-react";

interface PricingDetailProps {
  service: ServiceDetail;
  onContactClick?: () => void;
}

export const PricingDetail = ({ service, onContactClick }: PricingDetailProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    service.vehicleCategories[0]?.value || "all"
  );

  // Handle services without vehicle categories
  const categories = service.vehicleCategories.length > 0 ? service.vehicleCategories : [];
  const showCategoryTabs = categories.length > 0;

  const getCategoryLabel = (value: string) => {
    return categories.find((c) => c.value === value)?.label || value;
  };

  const formatPrice = (price: number) => {
    return `€${price}`;
  };

  return (
    <div className="w-full">
      {/* Category Selector */}
      {showCategoryTabs && (
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Izbira velikosti vozila
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "border-2 border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {service.packages.map((pkg, index) => {
          // Find the price for selected category
          const selectedPrice = pkg.pricing.find((p) => p.category === selectedCategory || p.category === "all");
          const price = selectedPrice?.price;

          return (
            <div
              key={index}
              className={`relative rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                pkg.featured
                  ? "border-primary bg-gradient-to-br from-primary/5 via-card to-card shadow-xl hover:shadow-2xl scale-100 md:scale-105 md:col-span-2 md:w-1/2 md:mx-auto"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-0 right-0 z-10">
                  <Badge className="rounded-none rounded-bl-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-xs px-3 py-1">
                    Najbolj priljubljeno
                  </Badge>
                </div>
              )}

              <div className="p-7 md:p-9">
                {/* Package Name */}
                <h3 className={`font-bold text-foreground mb-3 ${
                  pkg.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  {price !== undefined && price !== 0 ? (
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`font-bold text-primary ${
                        pkg.featured ? "text-5xl" : "text-4xl"
                      }`}>
                        {formatPrice(price)}
                      </span>
                    </div>
                  ) : (
                    <div className="text-lg text-muted-foreground italic font-medium">
                      Po dogovoru
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground">za storitev</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-border via-border to-transparent mb-8"></div>

                {/* What's Included */}
                <div className="mb-10">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
                    Vključeno
                  </h4>
                  <ul className="space-y-3.5">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start group/item">
                        <div className="flex-shrink-0 mt-1 rounded-full bg-primary/20 p-1 group-hover/item:bg-primary/30 transition-colors">
                          <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={onContactClick}
                  size="lg"
                  className={`w-full font-semibold py-3 h-auto ${
                    pkg.featured
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
                      : "bg-secondary hover:bg-secondary/90 text-foreground border-2 border-border hover:border-primary/50"
                  }`}
                >
                  Pošlji povpraševanje
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Divider for additional info */}
      {service.additionalInfo && (
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-muted/50 border-2 border-border">
          <p className="text-sm text-foreground italic leading-relaxed">
            <span className="font-semibold block mb-2">Dodatne informacije:</span>
            {service.additionalInfo}
          </p>
        </div>
      )}
    </div>
  );
};
