import { useState, type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail, Droplets, Wind, Sparkles, CircleDot, type LucideIcon } from "lucide-react";
import { services, vehicleCategories } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
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
  "relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-3.5 shadow-lg backdrop-blur-sm md:rounded-2xl md:p-8";

const subtlePanelClass =
  "rounded-lg border border-border/50 bg-secondary/60 md:rounded-xl";

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
    <section
      id="cenik"
      className="relative overflow-hidden py-8 md:py-24"
    >

      <div className="relative z-10">
        <div className="container">
          <div className="mx-auto mb-7 max-w-3xl px-1 text-center md:mb-14">
            <p className="mb-2 md:mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
              Transparentne cene • Kakovostne storitve
            </p>
            <h2 className="mb-2.5 text-2xl font-bold leading-tight text-foreground sm:text-3xl md:mb-4 md:text-5xl lg:text-7xl">CENIK</h2>
            <p className="mx-auto max-w-2xl text-[13px] leading-relaxed text-muted-foreground sm:text-sm md:text-lg lg:text-xl">
              Pregledne cene za vse storitve. Izberite velikost vozila in poglejte ponudbo.
            </p>
          </div>

          <div className="mx-auto mb-6 max-w-6xl md:mb-10">
            <div className="rounded-xl border border-border/50 bg-card/40 p-1.5 shadow-md backdrop-blur-sm md:rounded-2xl md:p-2">
              <div>
                <div className="grid grid-cols-2 gap-2 md:flex md:min-w-0 md:flex-wrap md:justify-center">
                  {vehicleCategories.map((category, categoryIndex) => (
                    <button
                      key={category.value}
                      type="button"
                      aria-pressed={selectedCategory === category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={cn(
                        "w-full rounded-xl border px-2.5 py-2 text-center text-[11px] font-semibold leading-tight transition-all duration-300 md:w-auto md:rounded-2xl md:px-5 md:py-3 md:text-sm md:whitespace-nowrap",
                        categoryIndex === vehicleCategories.length - 1 && "col-span-2 md:col-span-1",
                        selectedCategory === category.value
                          ? "border-border bg-primary text-primary-foreground shadow-md"
                          : "border-border/50 bg-secondary/60 text-muted-foreground hover:border-border/80 hover:bg-secondary/60 hover:text-foreground"
                      )}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-4 md:space-y-10">
            <div className={sectionShellClass}>
              <div className="mb-4 flex flex-col gap-2.5 md:mb-8 md:flex-row md:items-end md:justify-between md:gap-4">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
                    Izbrane storitve
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-foreground md:mt-2 md:text-3xl">Glavni paketi</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground md:text-base">
                    Najbolj iskane storitve za vsakodnevno urejenost, hitro osvežitev ali celovito
                    nego vozila.
                  </p>
                </div>

                <div className="inline-flex w-fit rounded-full border border-border/50 bg-secondary/80 px-3 py-1.5 text-xs text-foreground/90 md:px-4 md:py-2 md:text-sm">
                  {selectedCategoryLabel}
                </div>
              </div>

              <div className="grid grid-cols-1 items-start gap-3.5 sm:grid-cols-2 xl:grid-cols-12 xl:gap-6">
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
                        className={`group relative flex h-full flex-col overflow-hidden rounded-lg border transition-all duration-300 md:rounded-xl hover:-translate-y-1 ${
                          isFeatured
                            ? "border-border bg-card/80 shadow-lg"
                            : "border-border/50 bg-card/50 shadow-md hover:border-border/80"
                        }`}
                      >
                    
                        <div className="p-3.5 md:p-6">
                          <div className="mb-3 flex items-center justify-between gap-2.5 md:mb-4 md:gap-3">
                            {IconComponent && (
                              <div
                                className={`flex h-9 w-9 items-center justify-center rounded-xl border md:h-11 md:w-11 md:rounded-2xl ${
                                  isFeatured
                                    ? "border-border/80 bg-secondary/60"
                                    : "border-border/50 bg-secondary/80"
                                }`}
                              >
                                <IconComponent className="h-3.5 w-3.5 text-primary md:h-5 md:w-5" strokeWidth={1.8} />
                              </div>
                            )}

                            {service.duration && (
                              <span className="rounded-full border border-border/50 bg-secondary/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:px-3 md:text-[11px] md:tracking-[0.22em]">
                                {service.duration}
                              </span>
                            )}
                          </div>

                          <h3 className="text-base font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-lg md:text-2xl">
                            {service.title}
                          </h3>
                          <p className="mt-2 text-[13px] leading-5 text-muted-foreground md:mt-3 md:text-sm md:leading-6">
                            {service.shortDesc}
                          </p>

                          <div className={`${subtlePanelClass} mt-3 px-3 py-2.5 md:mt-5 md:px-4 md:py-4`}>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/90 md:text-[11px] md:tracking-[0.24em]">
                              Cena
                            </p>
                            {price !== null ? (
                              <div className="mt-1.5 flex items-end gap-1.5 md:mt-2 md:gap-2">
                                <span
                                  className={`font-bold text-foreground ${
                                    isFeatured ? "text-[2rem] md:text-[2.75rem]" : "text-[1.7rem] md:text-[2.35rem]"
                                  }`}
                                >
                                  {price}
                                </span>
                                <span className="pb-0.5 text-base font-semibold text-primary md:pb-1 md:text-xl">€</span>
                              </div>
                            ) : (
                              <p className="mt-1.5 text-sm italic text-muted-foreground md:mt-2 md:text-base">Po dogovoru</p>
                            )}
                          </div>

                          {service.packages[0]?.includes && (
                            <div className={`${subtlePanelClass} mt-3 p-3 md:mt-5 md:p-4`}>
                              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/90 md:mb-3 md:text-[11px] md:tracking-[0.24em]">
                                Vključeno
                              </p>
                              <ul className="grid grid-cols-1 gap-x-3 gap-y-2 text-[13px] min-[480px]:grid-cols-2 md:grid-cols-1 md:gap-y-2.5 md:text-sm">
                                {service.packages[0].includes.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="flex items-start gap-2 text-muted-foreground md:gap-2.5"
                                  >
                                    <Check
                                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary md:h-4 md:w-4"
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
              <div className="mb-4 text-center md:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
                  Poglobljena nega
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground md:mt-2 md:text-3xl">Globinsko čiščenje</h3>
                <p className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground md:text-base">
                  Ko vozilo potrebuje več kot le osvežitev, izberite paket z izrazitejšo globino
                  čiščenja in detajlno obdelavo notranjosti.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3.5 md:gap-6 lg:grid-cols-2">
                {DEEP_CLEANING_PACKAGES.map((pkg) => (
                  <article
                    key={pkg.name}
                    className={`relative flex h-full flex-col overflow-hidden rounded-lg border transition-all duration-300 md:rounded-xl hover:-translate-y-1 ${
                      pkg.featured
                        ? "border-border bg-card/80 shadow-lg"
                        : "border-border/50 bg-card/50 shadow-md hover:border-border/80"
                    }`}
                  >

                                    <div className="p-3.5 md:p-7">
                      <h4 className="text-base font-bold text-foreground sm:text-lg md:text-2xl">{pkg.name}</h4>
                      <p className="mt-2 text-[13px] leading-5 text-muted-foreground md:mt-3 md:text-sm md:leading-6">{pkg.description}</p>

                      <div className={`${subtlePanelClass} mt-3 px-3 py-2.5 md:mt-5 md:px-4 md:py-4`}>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/90 md:text-[11px] md:tracking-[0.24em]">
                          Paket
                        </p>
                        <p className="mt-1 text-xl font-bold text-primary md:mt-2 md:text-4xl">{pkg.price}</p>
                      </div>

                      <div className={`${subtlePanelClass} mt-3 p-3 md:mt-5 md:p-4`}>
                        <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/90 md:mb-3 md:text-[11px] md:tracking-[0.24em]">
                          Vključeno
                        </p>
                        <ul className="grid grid-cols-1 gap-x-3 gap-y-2 text-[13px] min-[480px]:grid-cols-2 md:grid-cols-1 md:gap-y-2.5 md:text-sm">
                          {pkg.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground md:gap-2.5">
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary md:h-4 md:w-4"
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
              <div className="mb-4 text-center md:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
                  Fleksibilne možnosti
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground md:mt-2 md:text-3xl">Dodatna pomoč za dom in vozilo</h3>
              </div>

              <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-6">
                <div className={`${subtlePanelClass} flex h-full flex-col p-3.5 md:p-7`}>
                  <div className="inline-flex w-fit rounded-full border border-border/60 bg-secondary/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:px-3 md:text-[11px] md:tracking-[0.2em]">
                    Samostojno čiščenje
                  </div>
                  <h4 className="mt-2.5 text-base font-bold text-foreground sm:text-lg md:mt-3 md:text-2xl">Izposoja globinskega sesalca</h4>
                  <p className="mt-2.5 text-[13px] leading-5 text-muted-foreground md:mt-3 md:text-sm md:leading-6">
                    Sami si lahko očistite domače pohištvo, avtomobilske sedeže, preproge in
                    vzmetnice.
                  </p>
                  <div className="mt-3 rounded-lg border border-border/60 bg-secondary/60 px-3 py-2.5 text-[13px] text-muted-foreground md:mt-5 md:px-4 md:py-3 md:text-sm">
                    V ceno je vključeno čistilo in krtača.
                  </div>
                </div>

                <div className={`${subtlePanelClass} flex h-full flex-col p-3.5 md:p-7`}>
                  <div className="inline-flex w-fit rounded-full border border-border/60 bg-secondary/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground md:px-3 md:text-[11px] md:tracking-[0.2em]">
                    Na vašem naslovu
                  </div>
                  <h4 className="mt-2.5 text-base font-bold text-foreground sm:text-lg md:mt-3 md:text-2xl">Čiščenje sedežnih garnitur na domu</h4>
                  <p className="mt-2.5 text-[13px] leading-5 text-muted-foreground md:mt-3 md:text-sm md:leading-6">
                    Pridemo na vaš dom in s pomočjo pare očistimo sedežno garnituro, vzmetnico in
                    drugo oblazinjeno pohištvo.
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[13px] md:mt-5 md:space-y-2.5 md:text-sm">
                    <li className="flex items-start gap-2 text-muted-foreground md:gap-2.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary md:h-4 md:w-4" strokeWidth={3} />
                      Odstranjevanje bakterij in pršic
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground md:gap-2.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary md:h-4 md:w-4" strokeWidth={3} />
                      Čiščenje trdovratnih madeža
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground md:gap-2.5">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary md:h-4 md:w-4" strokeWidth={3} />
                      Odstranjevanje neprijetnih vonjev
                    </li>
                  </ul>
                  <p className="mt-4 text-sm font-bold text-primary md:mt-5 md:text-base">Po dogovoru</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-border/60 bg-card/60 p-3.5 shadow-lg md:rounded-2xl md:p-9">
              <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_70%)] lg:block" />
              <div className="relative grid gap-4 md:gap-6 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
                <div className="max-w-2xl">
                  <Badge className="mb-3 rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-xs text-foreground md:mb-4 md:px-4 md:py-1.5">
                    Za podjetja
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground md:text-3xl">Za podjetja</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/90 md:mt-4 md:text-lg md:leading-relaxed">
                    {BUSINESS_DESCRIPTION}
                  </p>
                </div>

                <div className="rounded-lg border border-border/60 bg-secondary/50 p-3.5 shadow-md backdrop-blur-sm md:rounded-xl md:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/90 md:text-[11px] md:tracking-[0.24em]">
                    Prilagojena ponudba
                  </p>
                  <p className="mt-2.5 text-[13px] leading-5 text-muted-foreground md:mt-3 md:text-sm md:leading-6">
                    Za redno vzdrževanje čistoče voznega parka pripravimo rešitev, ki se prilagodi
                    vašemu obsegu dela in ritmu uporabe vozil.
                  </p>

                  <div className="mt-3.5 flex flex-col gap-2.5 min-[430px]:flex-row md:mt-6 md:gap-3">
                    <a href="#kontakt" className="min-[430px]:flex-1">
                      <Button
                        size="lg"
                        className="h-10 w-full gap-2 px-3 text-sm bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 md:h-11 md:px-4 md:text-base"
                      >
                        <Mail className="h-4 w-4 md:h-5 md:w-5" />
                        Pošlji povpraševanje
                      </Button>
                    </a>
                    <a href="tel:068172230" className="min-[430px]:flex-1">
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-10 w-full gap-2 border-border/80 bg-secondary/60 px-3 text-sm text-foreground hover:bg-secondary/60 md:h-11 md:px-4 md:text-base"
                      >
                        <Phone className="h-4 w-4 md:h-5 md:w-5" />
                        Pokličite nas
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={sectionShellClass}>
              <div className="mb-4 text-center md:mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
                  Dopolnilna nega
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground md:mt-2 md:text-3xl">Dodatne storitve</h3>
                <p className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground md:mt-3 md:text-base">
                  Dopolnilne storitve za zaščito, osvežitev in dodatno nego vozila po meri.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {ADDITIONAL_SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className={`${subtlePanelClass} flex h-full flex-col justify-between p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-border/80 hover:bg-secondary/40 md:p-5`}
                  >
                    <p className="mb-3 text-[13px] leading-5 text-foreground/90 md:mb-4 md:text-sm md:leading-6">{service.name}</p>
                    <div className="flex flex-col gap-1.5 min-[390px]:flex-row min-[390px]:items-end min-[390px]:justify-between md:flex-row md:items-end md:justify-between md:gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-[11px] md:tracking-[0.22em]">
                        Cena
                      </span>
                      <p className="text-lg font-bold text-primary md:text-2xl">
                        {service.priceNote || `${service.price}€`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border/60 bg-card/70 px-3.5 py-4 shadow-lg backdrop-blur-sm md:rounded-2xl md:px-10 md:py-10">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary/90">
                  Kontakt
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground md:mt-2 md:text-3xl">Ste zainteresirani?</h3>
                <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-muted-foreground md:mt-4 md:text-base">
                  Izberite storitev ali nas kontaktirajte za poglobljeno svetovanje in osebno ponudbo.
                </p>

                <div className="mt-4 flex flex-col items-center justify-center gap-2.5 min-[430px]:flex-row md:mt-7 md:gap-4">
                  <a href="tel:068172230" className="w-full min-[430px]:max-w-[240px] min-[430px]:flex-1">
                    <Button
                      size="lg"
                      className="h-10 w-full gap-2 bg-primary px-3 text-sm text-primary-foreground shadow-lg hover:bg-primary/90 md:h-11 md:px-4 md:text-base"
                    >
                      <Phone className="h-4 w-4 md:h-5 md:w-5" />
                      Pokličite nas
                    </Button>
                  </a>
                  <a href="#kontakt" className="w-full min-[430px]:max-w-[240px] min-[430px]:flex-1">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-10 w-full gap-2 border-border/80 bg-secondary/60 px-3 text-sm text-foreground hover:bg-secondary/60 md:h-11 md:px-4 md:text-base"
                    >
                      <Mail className="h-4 w-4 md:h-5 md:w-5" />
                      Pošlji povpraševanje
                    </Button>
                  </a>
                </div>

                <p className="mx-auto mt-4 max-w-2xl text-[11px] leading-relaxed text-muted-foreground md:mt-7 md:text-xs">
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