import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const images = [
  { src: before1, label: "Before", alt: "Umazano vozilo pred čiščenjem" },
  { src: after1, label: "After", alt: "Čisto vozilo po čiščenju" },
  { src: before2, label: "Before", alt: "Notranjost pred čiščenjem" },
  { src: after2, label: "After", alt: "Notranjost po čiščenju" },
  { src: before3, label: "Before", alt: "Žarometi pred obnovo" },
  { src: after3, label: "After", alt: "Žarometi po obnovi" },
];

const BeforeAfterSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Before / After
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Primeri rezultatov našega dela.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg group">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <span
                className={`absolute bottom-4 left-4 text-xs font-medium tracking-widest uppercase px-3 py-1 rounded ${
                  img.label === "Before"
                    ? "bg-muted/80 text-muted-foreground"
                    : "bg-primary/80 text-primary-foreground"
                }`}
              >
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
