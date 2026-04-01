import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail } from "lucide-react";
import { services } from "@/data/services";

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("small");

  // Main service categories to display
  const mainServices = services.filter(s => 
    ["Eksterne čiščenje", "Temeljito notranje čiščenje", "Kompletno čiščenje", "Osnovno čiščenje"].some(
      title => s.title.includes(title)
    )
  );

  const vehicleCategories = [
    { label: "Manjša vozila", value: "small" },
    { label: "Karavani / SUV", value: "suv" },
    { label: "Večja vozila / enoprostorci", value: "large" },
    { label: "Potniški kombi", value: "minibus" },
    { label: "Tovorni kombi", value: "cargo" },
  ];

  const getPrice = (service: typeof services[0], category: string) => {
    if (service.packages.length === 0) return null;
    const pkg = service.packages[0];
    const priceObj = pkg.pricing.find(p => p.category === category || p.category === "all");
    return priceObj?.price;
  };

  return (
    <>
      {/* Hero Section */}
      <section id="cenik" className="relative py-20 md:py-32 overflow-hidden">
        {/* Dark Background with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-15 z-0" style={{
          backgroundImage: 'url(/hero-car-BTyg7RAy.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 md:mb-4">
              Transparentne cene • Kakovostne storitve
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight">
              CENIK
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 md:mb-12">
              Odgovarajući paketi za vsak avtomobil. Izberite velikost svojega vozila in poglejte cene.
            </p>
          </div>

          {/* Vehicle Category Tabs */}
          <div className="mb-16 md:mb-20 flex justify-center">
            <div className="w-full md:w-auto">
              <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex gap-2 md:gap-3 justify-start md:justify-center min-w-min md:min-w-0">
                  {vehicleCategories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-lg transition-all ${
                        selectedCategory === category.value
                          ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50"
                          : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24 border-t border-slate-800">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
              {mainServices.map((service, index) => {
                const price = getPrice(service, selectedCategory);
                const isFeatured = service.title.includes("Kompletno");

                return (
                  <Link
                    key={service.slug}
                    to={`/storitve/${service.slug}`}
                    className={`group relative rounded-xl overflow-hidden transition-all hover:shadow-2xl cursor-pointer h-full flex flex-col ${
                      isFeatured
                        ? "sm:col-span-2 lg:col-span-2 border-2 border-cyan-500 bg-gradient-to-br from-cyan-900/30 to-slate-900/80 shadow-xl shadow-cyan-500/20 lg:max-w-2xl lg:mx-auto"
                        : "border border-slate-700/60 bg-slate-800/40 hover:border-cyan-500/60 hover:bg-slate-800/70"
                    }`}
                  >
                    {/* Featured Badge */}
                    {isFeatured && (
                      <div className="absolute top-0 right-0 z-20">
                        <Badge className="rounded-none rounded-bl-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs uppercase px-4 py-2">
                          Najpopularnije
                        </Badge>
                      </div>
                    )}

                    <div className={`p-6 md:p-8 flex flex-col h-full ${isFeatured ? "pt-16" : ""}`}>
                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Price */}
                      <div className="mb-6">
                        {price !== undefined && price !== 0 ? (
                          <div className="flex items-baseline gap-2">
                            <span className={`font-bold text-white ${isFeatured ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}`}>
                              {price}
                            </span>
                            <span className="text-2xl md:text-3xl text-cyan-400">€</span>
                          </div>
                        ) : (
                          <div className="text-lg text-slate-400 italic">Po dogovoru</div>
                        )}
                        {service.duration && (
                          <p className="text-xs md:text-sm text-slate-400 mt-2">
                            Trajanje: {service.duration}
                          </p>
                        )}
                      </div>

                      {/* Features */}
                      {service.packages.length > 0 && service.packages[0].includes.length > 0 && (
                        <div className="mb-8 flex-grow">
                          <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-4">
                            Vključeno:
                          </p>
                          <ul className="space-y-2.5">
                            {service.packages[0].includes.slice(0, 5).map((item, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-300">
                                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                <span>{item}</span>
                              </li>
                            ))}
                            {service.packages[0].includes.length > 5 && (
                              <li className="text-xs text-slate-400 italic mt-2">
                                + {service.packages[0].includes.length - 5} več storitev
                              </li>
                            )}
                          </ul>
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="pt-6 border-t border-slate-700/50">
                        <span className="inline-flex items-center justify-center w-full px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-colors group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                          Preglej cenik
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom CTA Section */}
            <div className="border-t border-slate-800 pt-12 md:pt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ste zainteresirani?
                </h3>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                  Izberite storitev zgoraj ali nas kontaktirajte za več informacij in ponudbo.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:068172230">
                  <Button
                    size="lg"
                    className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold w-full sm:w-auto shadow-lg shadow-cyan-500/30"
                  >
                    <Phone className="w-5 h-5" />
                    Pokličite nas
                  </Button>
                </a>
                <a href="#kontakt">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-2 border-cyan-500/60 text-cyan-400 hover:bg-cyan-500/10 font-bold w-full sm:w-auto"
                  >
                    <Mail className="w-5 h-5" />
                    Pošlji povpraševanje
                  </Button>
                </a>
              </div>

              <p className="text-xs text-slate-400 text-center mt-8">
                Cene so informativne in se lahko razlikujejo glede na velikost in stanje vozila.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
