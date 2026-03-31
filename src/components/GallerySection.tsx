import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryBeforeAfter from "@/assets/gallery-before-after.jpg";
import galleryPolishing from "@/assets/gallery-polishing.jpg";

const images = [
  { src: galleryExterior, alt: "Ročno čiščenje zunanjosti vozila", wide: true },
  { src: galleryInterior, alt: "Čiščenje notranjosti vozila", wide: false },
  { src: galleryPolishing, alt: "Poliranje avtomobila", wide: false },
  { src: galleryBeforeAfter, alt: "Rezultat čiščenja – pred in po", wide: true },
];

const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Galerija
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Nekaj utrinkov našega dela in rezultatov čiščenja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-lg ${img.wide ? "md:col-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-64 md:h-80 object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
