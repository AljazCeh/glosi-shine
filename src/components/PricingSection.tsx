import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail, Droplets, Wind, Sparkles, CircleDot } from "lucide-react";
import { services, vehicleCategories } from "@/data/services";

const iconMap: Record<string, React.ComponentType<any>> = {
  Droplets,
  Wind,
  Sparkles,
  CircleDot,
};

// Primary main services for pricing section
const MAIN_SERVICES = ["Zunanje čiščenje", "Temeljito notranje čiščenje", "Kompletno čiščenje", "Osnovno čiščenje"];

// Additional services data
const ADDITIONAL_SERVICES = [
  { name: "Osnovno hitro čiščenje notranjosti", price: 10 },
  { name: "Spiranje vozila", price: 7 },
  { name: "Čiščenje sedeža (1 kos)", price: 10 },
  { name: "Čiščenje sedežev (5 kos)", price: 40 },
  { name: "Zaščita usnjenih sedežev", price: 10 },
  { name: "Prevzem vozila na domu (do 5 km iz Ivančne Gorice)", price: 5 },
  { name: "Izposoja nadomestnega vozila", price: 5 },
  { name: "Obnova žarometov + dolgotrajna zaščita para", priceNote: "50–60€" },
  { name: "Dezinfekcija z ozonom / dezinfekcija klime", price: 15 },
  { name: "Poliranje vozila", priceNote: "130–180€" },
];

// Deep cleaning packages
const DEEP_CLEANING_PACKAGES = [
  {
    name: "OSNOVNI PAKET",
    price: "80–100€",
    description: "Intenzivno čiščenje z globinskim pristopom",
    includes: [
      "Globinsko čiščenje sedežev",
      "Globinsko čiščenje tapet in plastik",
      "Čiščenje tečajev med vrati",
      "Čiščenje tečajev pri sedežih",
      "Premaz plastik",
      "Zunanje pranje",
      "Notranje čiščenje",
    ],
    featured: false,
  },
  {
    name: "GLOSI PAKET",
    price: "120–170€",
    description: "Celovito čiščenje celotnega vozila",
    includes: [
      "Globinsko čiščenje celotnega vozila",
      "Sedeži, tla, tapete, strop, pasovi…",
      "Detajlno čiščenje celotne notranjosti",
      "Dezinfekcija z ozonom",
      "Čiščenje tečajev med vrati",
      "Zunanje pranje",
    ],
    featured: true,
  },
];

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("small");

  // Get main services for pricing display
  const mainServices = services.filter(s =>
    MAIN_SERVICES.some(title => s.title.includes(title))
  );

  // Get price for a service in selected category
  const getPrice = (service: typeof services[0], category: string) => {
    if (!service.packages.length) return null;
    const pkg = service.packages[0];
    const priceObj = pkg.pricing.find(p => p.category === category || p.category === "all");
    return priceObj?.price;
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="cenik" className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-0"></div>
        <div className="absolute inset-0 opacity-15 z-0" style={{
          backgroundImage: 'url(/hero-car-BTyg7RAy.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
              Transparentne cene • Kakovostne storitve
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              CENIK
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              Pregledne cene za vse storitve. Izberite velikost vozila in poglejte ponudbo.
            </p>
          </div>

          {/* Vehicle Category Tabs */}
          <div className="flex justify-center">
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0">
              <div className="flex gap-2.5 justify-start md:justify-center min-w-min md:min-w-0">
                {vehicleCategories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 md:px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-lg transition-all ${
                      selectedCategory === category.value
                        ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50"
                        : "bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:bg-slate-700/80"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN PRICING CARDS SECTION ===== */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-24 border-t border-slate-800">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            {/* Main Services Grid - 4 cards, properly aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 mb-20">
              {mainServices.map((service) => {
                const price = getPrice(service, selectedCategory);
                const isFeatured = service.title.includes("Kompletno");
                const IconComponent = iconMap[service.icon];

                return (
                  <div
                    key={service.slug}
                    className={`group relative rounded-xl overflow-hidden transition-all flex flex-col h-full ${
                      isFeatured
                        ? "border-2 border-cyan-500 bg-gradient-to-br from-cyan-900/30 to-slate-900/80 shadow-xl shadow-cyan-500/20"
                        : "border border-slate-700/60 bg-slate-800/40"
                    }`}
                  >
                    {/* Featured Badge */}
                    {isFeatured && (
                      <div className="absolute top-0 right-0 z-20">
                        <Badge className="rounded-none rounded-bl-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs px-4 py-2">
                          Največkrat izbrano
                        </Badge>
                      </div>
                    )}

                    <div className={`p-6 md:p-7 flex flex-col h-full ${isFeatured ? "pt-14 md:pt-16" : ""}`}>
                      {/* Icon */}
                      {IconComponent && (
                        <div className="mb-4">
                          <IconComponent className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {service.title}
                      </h3>

                      {/* Duration */}
                      {service.duration && (
                        <p className="text-xs text-slate-400 mb-4">
                          <span className="font-semibold text-slate-300">Trajanje:</span> {service.duration}
                        </p>
                      )}

                      {/* Price */}
                      <div className="mb-6">
                        {price !== undefined && price !== 0 ? (
                          <div className="flex items-baseline gap-1.5">
                            <span className={`font-bold text-white ${isFeatured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}>
                              {price}
                            </span>
                            <span className="text-xl md:text-2xl text-cyan-400">€</span>
                          </div>
                        ) : (
                          <div className="text-base text-slate-400 italic">Po dogovoru</div>
                        )}
                      </div>

                      {/* Features - Fixed height, scrollable if needed */}
                      {service.packages[0]?.includes && (
                        <div className="mb-6 flex-grow">
                          <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-4">
                            Vključeno:
                          </p>
                          <ul className="space-y-2.5 text-sm">
                            {service.packages[0].includes.slice(0, 5).map((item, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start text-slate-300">
                                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                            {service.packages[0].includes.length > 5 && (
                              <li className="text-xs text-slate-400 italic mt-2">
                                + {service.packages[0].includes.length - 5} več
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ===== DEEP CLEANING PACKAGES ===== */}
            <div className="mb-20 pt-12 border-t border-slate-800">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Globinsko čiščenje
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {DEEP_CLEANING_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`rounded-xl overflow-hidden transition-all flex flex-col h-full relative ${
                      pkg.featured
                        ? "border-2 border-cyan-500 bg-gradient-to-br from-cyan-900/30 to-slate-900/80 shadow-xl shadow-cyan-500/20"
                        : "border border-slate-700/60 bg-slate-800/40 hover:border-cyan-500/60"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute top-0 right-0 z-20">
                        <Badge className="rounded-none rounded-bl-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs px-4 py-2">
                          Priporočeno
                        </Badge>
                      </div>
                    )}

                    <div className={`p-7 md:p-8 flex flex-col h-full ${pkg.featured ? "pt-16" : ""}`}>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {pkg.name}
                      </h4>
                      <p className="text-sm text-slate-400 mb-5">{pkg.description}</p>

                      <div className="mb-6">
                        <span className="text-3xl md:text-4xl font-bold text-cyan-400">
                          {pkg.price}
                        </span>
                      </div>

                      <div className="flex-grow">
                        <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-4">
                          Vključeno:
                        </p>
                        <ul className="space-y-2.5">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-300">
                              <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== RENTAL & HOME CLEANING ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 pt-12 border-t border-slate-800">
              {/* Deep Cleaner Rental */}
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-7 md:p-8 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-3">Izposoja globinskega sesalca</h4>
                <p className="text-sm text-slate-300 mb-5">
                  Sami si lahko očistite domače pohištvo, avtomobilske sedeže, preproge in vzmetnice.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">30 EUR / dan</span>
                    <span className="text-cyan-400 font-semibold">Brežplačno</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">50 EUR / 2 dni</span>
                    <span className="text-cyan-400 font-semibold">Brežplačno</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic">V ceno je vključeno čistilo in krtača.</p>
              </div>

              {/* Home Upholstery Cleaning */}
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-7 md:p-8 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-3">Čiščenje sedežnih garnitur na domu</h4>
                <p className="text-sm text-slate-300 mb-5">
                  Pridemo na vaš dom in s pomočjo pare očistimo sedežno garnituro, vzmetnico in drugo oblazinjeno pohištvo.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-300 flex-grow">
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    Odstranjevanje bakterij in pršic
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    Čiščenje trdovratnih madeža
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    Odstranjevanje neprijetnih vonjev
                  </li>
                </ul>
                <p className="text-base font-bold text-cyan-400 mt-6">Po dogovoru</p>
              </div>
            </div>

            {/* ===== ADDITIONAL SERVICES ===== */}
            <div className="pt-12 border-t border-slate-800 mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Dodatne storitve
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ADDITIONAL_SERVICES.map((svc, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-5 hover:border-cyan-500/40 hover:bg-slate-800/50 transition-all"
                  >
                    <p className="text-sm text-slate-300 font-medium mb-2">{svc.name}</p>
                    <p className="text-2xl font-bold text-cyan-400">
                      {svc.priceNote || `${svc.price}€`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== CTA FOOTER ===== */}
            <div className="pt-12 border-t border-slate-800 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ste zainteresirani?
              </h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Izberite storitev ali nas kontaktirajte za poglobljeno svetovanje in osebno ponudbo.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="tel:068172230">
                  <Button
                    size="lg"
                    className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold shadow-lg shadow-cyan-500/30 w-full sm:w-auto"
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

              <p className="text-xs text-slate-400">
                Cene so informativne in se lahko razlikujejo glede na velikost, stanje vozila in specifične zahteve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
