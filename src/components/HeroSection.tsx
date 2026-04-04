import heroImg from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="domov" className="relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Profesionalno ročno pranje avtomobila"
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 container text-center px-6 py-28 md:py-0">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Ivančna Gorica
        </p>
        <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight text-balance max-w-3xl mx-auto">
          Ročna avtopralnica Glosi
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Temeljito zunanje in notranje čiščenje vozil v Ivančni Gorici.
        </p>
        <p className="mt-3 md:mt-4 text-xs md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Poskrbimo, da je vaše vozilo čisto, urejeno in pripravljeno na vsakdan. Pri delu stavimo na natančnost, kakovost in 9 letne izkušnje s področja avtokozmetike.
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
            className="inline-flex items-center justify-center px-6 py-2.5 md:px-7 md:py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors min-w-[180px] md:min-w-[200px]"
          >
            Pošljite povpraševanje
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
