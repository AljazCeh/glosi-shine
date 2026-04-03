import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import BeforeAfterSlider from "./BeforeAfterSlider";

const comparisons = [
  {
    before: before1,
    after: after1,
    beforeAlt: "Umazano vozilo pred čiščenjem",
    afterAlt: "Čisto vozilo po čiščenju",
    title: "Zunanje pranje",
  },
  {
    before: before2,
    after: after2,
    beforeAlt: "Notranjost pred čiščenjem",
    afterAlt: "Notranjost po čiščenju",
    title: "Notranje čiščenje",
  },
  {
    before: before3,
    after: after3,
    beforeAlt: "Žarometi pred obnovo",
    afterAlt: "Žarometi po obnovi",
    title: "Obnova žarometov",
  },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[hsl(220,8%,12%)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Before / After
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Primeri rezultatov našega dela.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {comparisons.map((comp, i) => (
            <BeforeAfterSlider key={i} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
