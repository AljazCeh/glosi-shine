import { useState, type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail, Droplets, Wind, Sparkles, CircleDot } from "lucide-react";
import { services, vehicleCategories } from "@/data/services";

const iconMap: Record<string, ComponentType<any>> = {
  Droplets,
  Wind,
  Sparkles,
  CircleDot,
};

const MAIN_SERVICES = [
  "Zunanje čiščenje",
  "Temeljito notranje čiščenje",
  "Kompletno čiščenje",
  "Osnovno čiščenje",
];

const ADDITIONAL_SERVICES = [
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

const BUSINESS_DESCRIPTION =
  "Podjetjem in obrtnikom z večjim voznim parkom nudimo celovito skrb za čistočo vozil. Kontaktirajte nas in naredili bomo ponudbo, prilagojeno vašim željam in potrebam.";

const sectionShellClass =
  "rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(15,23,42,0.58))] p-5 shadow-[0_24px_80px_-48px_rgba(2,6,23,0.95)] backdrop-blur-sm md:p-8";

const subtlePanelClass =
  "rounded-[1.35rem] border border-white/10 bg-slate-950/35 shadow-[0_18px_40px_-30px_rgba(2,6,23,0.95)]";

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("small");

  const mainServices = services.filter((service) =>
    MAIN_SERVICES.some((title) => service.title.includes(title))
  );

  const visibleMainServices = mainServices.filter((service) =>
    service.packages.some((pkg) =>
      pkg.pricing.some(
        (tier) => tier.category === selectedCategory || tier.category === "all"
      )
    )
  );

  const selectedCategoryLabel =
    vehicleCategories.find((category) => category.value === selectedCategory)?.label ?? "";

  const getPrice = (service: typeof services[number], category: string) => {
    if (!service.packages.length) return null;

    const pkg = service.packages[0];
    const priceObj = pkg.pricing.find(
      (tier) => tier.category === category || tier.category === "all"
    );

    return priceObj?.price ?? null;
  };

  const getMainCardPlacementClass = (serviceCount: number) => {
    if (serviceCount === 3) {
      return "xl:col-span-4";
    }

    return "xl:col-span-3";
  };

  return (
    <section id="cenik" className="relative overflow-hidden py-16 md:py-28">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: "url(/hero-car-BTyg7RAy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-x-0 top-20 z-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_68%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-b from-transparent to-slate-950/70" />

      <div className="relative z-10">
        <div className="container">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
              Transparentne cene • Kakovostne storitve
            </p>
            <h2 className="mb-4 text-5xl font-bold leading-tight text-white md:text-7xl">CENIK</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Pregledne cene za vse storitve. Izberite velikost vozila in poglejte ponudbo.
            </p>
          </div>

          <div className="mx-auto mb-8 max-w-6xl md:mb-10">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/65 p-2 shadow-[0_18px_50px_-32px_rgba(2,6,23,0.95)] backdrop-blur-sm">
              <div className="overflow-x-auto -mx-2 px-2 md:mx-0 md:px-0">
                <div className="flex min-w-max gap-2 md:min-w-0 md:flex-wrap md:justify-center">
                  {vehicleCategories.map((category) => (
                    <button
                      key={category.value}
                      type="button"
                      aria-pressed={selectedCategory === category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`rounded-2xl border px-4 py-3 text-xs font-semibold whitespace-nowrap transition-all duration-300 sm:text-sm md:px-5 ${
                        selectedCategory === category.value
                          ? "border-cyan-300/70 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30"
                          : "border-white/10 bg-slate-950/35 text-slate-300 hover:border-cyan-400/35 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-8 md:space-y-10">
            <div className={sectionShellClass}>
              <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/85">
                    Izbrane storitve
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">Glavni paketi</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                    Najbolj iskane storitve za vsakodnevno urejenost, hitro osvežitev ali celovito
                    nego vozila.
                  </p>
                </div>

                <div className="inline-flex w-fit rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-sm text-slate-200 shadow-inner shadow-white/5">
                  {selectedCategoryLabel}
                </div>
              </div>

              <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-12 xl:gap-6">
                {visibleMainServices.map((service) => {
                  const price = getPrice(service, selectedCategory);
                  const isFeatured = service.title.includes("Kompletno");
                  const IconComponent = iconMap[service.icon];

                  return (
                    <article
                      key={service.slug}
                      className={getMainCardPlacementClass(visibleMainServices.length)}
                    >
                      <div
                        className={`group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border transition-all duration-300 hover:-translate-y-1 ${
                          isFeatured
                            ? "border-cyan-400/65 bg-[linear-gradient(180deg,rgba(8,47,73,0.5),rgba(2,6,23,0.92))] shadow-[0_24px_60px_-34px_rgba(34,211,238,0.4)]"
                            : "border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.88))] shadow-[0_24px_60px_-34px_rgba(2,6,23,0.95)] hover:border-cyan-400/30"
                        }`}
                      >
                        {isFeatured && (
                          <div className="absolute right-0 top-0 z-20">
                            <Badge className="rounded-none rounded-bl-2xl bg-gradient-to-r from-cyan-500 to-sky-400 px-4 py-2 text-xs font-bold text-slate-950">
                              Največkrat izbrano
                            </Badge>
                          </div>
                        )}

                        <div className={`p-5 md:p-6 ${isFeatured ? "pt-14 md:pt-16" : ""}`}>
                          <div className="mb-4 flex items-center justify-between gap-3">
                            {IconComponent && (
                              <div
                                className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                                  isFeatured
                                    ? "border-cyan-400/25 bg-cyan-400/10"
                                    : "border-white/10 bg-slate-950/45"
                                }`}
                              >
                                <IconComponent className="h-5 w-5 text-cyan-300" strokeWidth={1.8} />
                              </div>
                            )}

                            {service.duration && (
                              <span className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                                {service.duration}
                              </span>
                            )}
                          </div>

                          <h3 className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-100">
                            {service.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-slate-300/90">
                            {service.shortDesc}
                          </p>

                          <div className={`${subtlePanelClass} mt-5 px-4 py-4`}>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400/85">
                              Cena
                            </p>
                            {price !== null ? (
                              <div className="mt-2 flex items-end gap-2">
                                <span
                                  className={`font-bold text-white ${
                                    isFeatured ? "text-4xl md:text-[2.75rem]" : "text-3xl md:text-[2.35rem]"
                                  }`}
                                >
                                  {price}
                                </span>
                                <span className="pb-1 text-xl font-semibold text-cyan-300">€</span>
                              </div>
                            ) : (
                              <p className="mt-2 text-base italic text-slate-400">Po dogovoru</p>
                            )}
                          </div>

                          {service.packages[0]?.includes && (
                            <div className={`${subtlePanelClass} mt-5 p-4`}>
                              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400/85">
                                Vključeno
                              </p>
                              <ul className="space-y-2.5 text-sm">
                                {service.packages[0].includes.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-2.5 text-slate-300"
                                  >
                                    <Check
                                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400"
                                      strokeWidth={3}
                                    />
                                    <span className="leading-snug">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className={sectionShellClass}>
              <div className="mb-6 text-center md:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/85">
                  Poglobljena nega
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">Globinsko čiščenje</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                  Ko vozilo potrebuje več kot le osvežitev, izberite paket z izrazitejšo globino
                  čiščenja in detajlno obdelavo notranjosti.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {DEEP_CLEANING_PACKAGES.map((pkg) => (
                  <article
                    key={pkg.name}
                    className={`relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border transition-all duration-300 hover:-translate-y-1 ${
                      pkg.featured
                        ? "border-cyan-400/65 bg-[linear-gradient(180deg,rgba(8,47,73,0.5),rgba(2,6,23,0.92))] shadow-[0_24px_60px_-34px_rgba(34,211,238,0.4)]"
                        : "border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.88))] shadow-[0_24px_60px_-34px_rgba(2,6,23,0.95)] hover:border-cyan-400/30"
                    }`}
                  >
                    {pkg.featured && (
                      <div className="absolute right-0 top-0 z-20">
                        <Badge className="rounded-none rounded-bl-2xl bg-gradient-to-r from-cyan-500 to-sky-400 px-4 py-2 text-xs font-bold text-slate-950">
                          Priporočeno
                        </Badge>
                      </div>
                    )}

                    <div className={`p-6 md:p-7 ${pkg.featured ? "pt-14 md:pt-16" : ""}`}>
                      <h4 className="text-2xl font-bold text-white">{pkg.name}</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-300/90">{pkg.description}</p>

                      <div className={`${subtlePanelClass} mt-5 px-4 py-4`}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400/85">
                          Paket
                        </p>
                        <p className="mt-2 text-3xl font-bold text-cyan-300 md:text-4xl">{pkg.price}</p>
                      </div>

                      <div className={`${subtlePanelClass} mt-5 p-4`}>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-400/85">
                          Vključeno
                        </p>
                        <ul className="space-y-2.5 text-sm">
                          {pkg.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-slate-300">
                              <Check
                                className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400"
                                strokeWidth={3}
                              />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className={sectionShellClass}>
              <div className="mb-6 text-center md:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/85">
                  Fleksibilne možnosti
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">Dodatna pomoč za dom in vozilo</h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className={`${subtlePanelClass} flex h-full flex-col p-6 md:p-7`}>
                  <div className="inline-flex w-fit rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Samostojno čiščenje
                  </div>
                  <h4 className="mt-4 text-2xl font-bold text-white">Izposoja globinskega sesalca</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300/90">
                    Sami si lahko očistite domače pohištvo, avtomobilske sedeže, preproge in
                    vzmetnice.
                  </p>
                  <div className="mt-5 rounded-[1.15rem] border border-white/10 bg-slate-900/65 px-4 py-3 text-sm text-slate-300">
                    V ceno je vključeno čistilo in krtača.
                  </div>
                </div>

                <div className={`${subtlePanelClass} flex h-full flex-col p-6 md:p-7`}>
                  <div className="inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    Na vašem naslovu
                  </div>
                  <h4 className="mt-4 text-2xl font-bold text-white">Čiščenje sedežnih garnitur na domu</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300/90">
                    Pridemo na vaš dom in s pomočjo pare očistimo sedežno garnituro, vzmetnico in
                    drugo oblazinjeno pohištvo.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    <li className="flex items-start gap-2.5 text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" strokeWidth={3} />
                      Odstranjevanje bakterij in pršic
                    </li>
                    <li className="flex items-start gap-2.5 text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" strokeWidth={3} />
                      Čiščenje trdovratnih madeža
                    </li>
                    <li className="flex items-start gap-2.5 text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" strokeWidth={3} />
                      Odstranjevanje neprijetnih vonjev
                    </li>
                  </ul>
                  <p className="mt-5 text-base font-bold text-cyan-300">Po dogovoru</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(15,23,42,0.94),rgba(8,47,73,0.7))] p-6 shadow-[0_28px_80px_-40px_rgba(34,211,238,0.35)] md:p-9">
              <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.18),_transparent_70%)] lg:block" />
              <div className="relative grid gap-6 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
                <div className="max-w-2xl">
                  <Badge className="mb-4 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-cyan-100">
                    Za podjetja
                  </Badge>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">Za podjetja</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-200 md:text-lg">
                    {BUSINESS_DESCRIPTION}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-6 shadow-[0_18px_40px_-30px_rgba(2,6,23,0.95)] backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    Prilagojena ponudba
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Za redno vzdrževanje čistoče voznega parka pripravimo rešitev, ki se prilagodi
                    vašemu obsegu dela in ritmu uporabe vozil.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href="#kontakt" className="sm:flex-1">
                      <Button
                        size="lg"
                        className="w-full gap-2 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-300"
                      >
                        <Mail className="h-5 w-5" />
                        Pošlji povpraševanje
                      </Button>
                    </a>
                    <a href="tel:068172230" className="sm:flex-1">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full gap-2 border-cyan-300/40 bg-slate-950/30 text-cyan-100 hover:bg-cyan-500/10 hover:text-white"
                      >
                        <Phone className="h-5 w-5" />
                        Pokličite nas
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={sectionShellClass}>
              <div className="mb-6 text-center md:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/85">
                  Dopolnilna nega
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">Dodatne storitve</h3>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                  Dopolnilne storitve za zaščito, osvežitev in dodatno nego vozila po meri.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {ADDITIONAL_SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className={`${subtlePanelClass} flex h-full flex-col justify-between p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/80`}
                  >
                    <p className="mb-4 text-sm leading-6 text-slate-200">{service.name}</p>
                    <div className="flex items-end justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Cena
                      </span>
                      <p className="text-2xl font-bold text-cyan-300">
                        {service.priceNote || `${service.price}€`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.8),rgba(15,23,42,0.62))] px-6 py-8 shadow-[0_24px_80px_-48px_rgba(2,6,23,0.95)] backdrop-blur-sm md:px-10 md:py-10">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-400/85">
                  Kontakt
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">Ste zainteresirani?</h3>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
                  Izberite storitev ali nas kontaktirajte za poglobljeno svetovanje in osebno ponudbo.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a href="tel:068172230" className="sm:flex-1 sm:max-w-[240px]">
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 hover:bg-cyan-300"
                    >
                      <Phone className="h-5 w-5" />
                      Pokličite nas
                    </Button>
                  </a>
                  <a href="#kontakt" className="sm:flex-1 sm:max-w-[240px]">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2 border-cyan-300/40 bg-slate-950/30 text-cyan-100 hover:bg-cyan-500/10 hover:text-white"
                    >
                      <Mail className="h-5 w-5" />
                      Pošlji povpraševanje
                    </Button>
                  </a>
                </div>

                <p className="mx-auto mt-7 max-w-2xl text-xs leading-relaxed text-slate-400">
                  Cene so informativne in se lahko razlikujejo glede na velikost, stanje vozila in
                  specifične zahteve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;