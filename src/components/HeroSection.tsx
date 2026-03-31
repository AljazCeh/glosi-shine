import heroImg from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="domov" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Profesionalno ročno pranje avtomobila"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-background/70 pointer-events-none transition-all duration-700" />
      {/* Subtle bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative z-10 container text-center px-6 py-32 md:py-0">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Ivančna Gorica
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight text-balance max-w-3xl mx-auto">
          Ročna avtopralnica Glosi
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Temeljito zunanje in notranje čiščenje vozil v Ivančni Gorici.
        </p>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Poskrbimo, da je vaše vozilo čisto, urejeno in pripravljeno na vsakdan. Pri delu stavimo na natančnost, kakovost in osebni pristop.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:068172230"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors min-w-[200px]"
          >
            Pokličite nas
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors min-w-[200px]"
          >
            Pošljite povpraševanje
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
