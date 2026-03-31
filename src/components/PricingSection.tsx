const categories = [
  {
    title: "Zunanje čiščenje",
    items: [
      { name: "Ročno zunanje pranje", price: "12 €" },
      { name: "Ročno zunanje pranje XL", price: "15 €" },
      { name: "Voskanje vozila", price: "25 €" },
      { name: "Čiščenje stekel", price: "8 €" },
    ],
  },
  {
    title: "Notranje čiščenje",
    items: [
      { name: "Hitro osvežitveno notranje čiščenje", price: "18 €" },
      { name: "Temeljito notranje čiščenje", price: "30 €" },
      { name: "Sesanje vozila", price: "10 €" },
      { name: "Čiščenje armature in plastik", price: "12 €" },
      { name: "Čiščenje prtljažnega prostora", price: "12 €" },
    ],
  },
  {
    title: "Globinsko čiščenje & poliranje",
    items: [
      { name: "Globinsko čiščenje sedežev", price: "45 €" },
      { name: "Globinsko čiščenje celotne notranjosti", price: "70 €" },
      { name: "Poliranje vozila basic", price: "60 €" },
      { name: "Poliranje vozila premium", price: "120 €" },
      { name: "Obnova žarometov", price: "35 €" },
    ],
  },
  {
    title: "Dodatne storitve",
    items: [
      { name: "Odstranjevanje pasje dlake", price: "20 €" },
      { name: "Dezinfekcija notranjosti", price: "15 €" },
      { name: "Osvežitev notranjosti z vonjem", price: "7 €" },
      { name: "Izposoja globinskega sesalca", price: "25 €" },
      { name: "Globinsko čiščenje oblazinjenega pohištva", price: "50 €" },
      { name: "Paket komplet nega vozila", price: "99 €" },
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="cenik" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Cenik
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Orientacijske cene naših storitev. Za točno ponudbo nas pokličite ali nam pišite.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-lg p-6 md:p-8"
            >
              <h3 className="font-heading text-lg font-medium text-foreground mb-6">
                {cat.title}
              </h3>
              <ul className="space-y-0">
                {cat.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`flex items-baseline justify-between py-3 ${
                      i < cat.items.length - 1 ? "border-b border-border/50" : ""
                    }`}
                  >
                    <span className="text-sm text-muted-foreground pr-4">{item.name}</span>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs text-muted-foreground mb-6">
            Cene so informativne in se lahko razlikujejo glede na velikost in stanje vozila.
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
