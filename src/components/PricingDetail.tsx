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
      {/* Category Tabs */}
      {showCategoryTabs && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-0 border-b border-slate-600">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-3 py-2 text-xs sm:text-sm font-medium transition-all border-b-2 ${
                  selectedCategory === category.value
                    ? "text-cyan-400 border-b-cyan-400"
                    : "text-slate-400 border-b-transparent hover:text-slate-300"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Pricing Packages Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {service.packages.map((pkg, index) => {
          const selectedPrice = pkg.pricing.find((p) => p.category === selectedCategory || p.category === "all");
          const price = selectedPrice?.price;
          const IconComponent = iconMap[service.icon];

          return (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl overflow-hidden transition-all h-full ${
                pkg.featured
                  ? "border-2 border-cyan-500 bg-gradient-to-b from-slate-800/60 to-slate-900/80 shadow-xl shadow-cyan-500/20"
                  : "border border-slate-700/60 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-900/70"
              }`}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 z-20">
                  <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-center py-1.5 text-xs uppercase tracking-wider">
                    Najbol-i<br />priljubljeno
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className={`p-5 sm:p-6 flex flex-col h-full ${pkg.featured ? "pt-16" : ""}`}>
                {/* Icon */}
                {IconComponent && (
                  <div className="flex justify-center mb-4">
                    <div className="bg-slate-800/50 rounded-full p-4">
                      <IconComponent className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-center font-bold text-white mb-4 text-sm sm:text-base uppercase tracking-tight leading-snug">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  {price !== undefined && price !== 0 ? (
                    <div className="text-5xl sm:text-4xl font-bold text-white">
                      {formatPrice(price)} <span className="text-3xl">€</span>
                    </div>
                  ) : (
                    <div className="text-base text-slate-400 italic">Po dogovoru</div>
                  )}
                </div>

                {/* Features List */}
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-200 leading-snug">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="mb-4 h-px bg-slate-700/50"></div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2.5">
                  <Button
                    onClick={onContactClick}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2.5 h-auto text-sm rounded-lg transition-colors"
                  >
                    Naročilo se
                  </Button>
                  <Button
                    variant="outline"
                    onClick={onContactClick}
                    className="w-full border-cyan-500/60 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 font-semibold py-2.5 h-auto text-sm rounded-lg border-2 transition-colors"
                  >
                    Več info?
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info Box */}
      {service.additionalInfo && (
        <div className="p-5 rounded-lg bg-slate-800/40 border border-slate-700/60 mb-12">
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            {service.additionalInfo}
          </p>
        </div>
      )}
    </div>
  );
};
