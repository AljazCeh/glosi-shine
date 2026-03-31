import { Droplets, Wind, Sparkles, CircleDot, Lightbulb, Fan, Sofa } from "lucide-react";

const services = [
  { icon: Droplets, title: "Ročno zunanje pranje", desc: "Temeljito ročno pranje vozila za čist in urejen zunanji videz." },
  { icon: Wind, title: "Notranje čiščenje", desc: "Čiščenje notranjosti vozila, kjer poskrbimo za svežino, urejenost in boljše počutje med vožnjo." },
  { icon: Sparkles, title: "Globinsko čiščenje", desc: "Poglobljeno čiščenje površin in tekstila za odstranjevanje trdovratnejše umazanije." },
  { icon: CircleDot, title: "Poliranje", desc: "Poliranje za lepši sijaj in bolj negovan videz vozila." },
  { icon: Lightbulb, title: "Obnova žarometov", desc: "Obnova motnih ali obrabljenih žarometov za lepši videz in boljšo vidljivost." },
  { icon: Fan, title: "Izposoja globinskega sesalca", desc: "Možnost izposoje globinskega sesalca za samostojno čiščenje." },
  { icon: Sofa, title: "Globinsko čiščenje pohištva", desc: "Poskrbimo tudi za globinsko čiščenje oblazinjenega pohištva pri vas doma." },
];

const ServicesSection = () => {
  // Split into rows: 2 / 3 / 2
  const rows = [services.slice(0, 2), services.slice(2, 5), services.slice(5, 7)];

  return (
    <section id="storitve" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Naše storitve
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ponujamo storitve za urejen videz, večjo čistost in boljši občutek v vašem vozilu.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`grid gap-6 ${
                row.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-[66%] lg:mx-auto"
              }`}
            >
              {row.map((s) => (
                <div
                  key={s.title}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors duration-300 flex flex-col"
                >
                  <s.icon className="w-5 h-5 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg font-medium text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
