const PricingSection = () => {
  return (
    <section id="cenik" className="py-24 md:py-32">
      <div className="container max-w-xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
          Cenik
        </h2>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-2">
            Cenik je trenutno v pripravi.
          </p>
          <p className="text-muted-foreground text-sm mb-8">
            Za točno ponudbo nas pokličite ali nam pišite na email.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:068172230"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Pokličite nas
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              Pošljite povpraševanje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
