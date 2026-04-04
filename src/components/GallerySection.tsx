import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const images = [
  { src: gallery1, alt: "Ročno pranje zunanjosti vozila" },
  { src: gallery2, alt: "Notranjost vozila po čiščenju" },
  { src: gallery3, alt: "Poliranje avtomobila" },
  { src: gallery4, alt: "Čisti usnjeni sedeži" },
  { src: gallery5, alt: "Čiščenje platišč" },
  { src: gallery6, alt: "Detajl laka po poliranju" },
  { src: gallery7, alt: "Čiščenje notranjosti z razpršilcem" },
  { src: gallery8, alt: "Obnovljeni žarometi" },
  { src: gallery9, alt: "Urejen prtljažni prostor" },
  { src: gallery10, alt: "Končni rezultat detailinga" },
];

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Galerija
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Nekaj utrinkov našega dela in rezultatov čiščenja.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.slice(0, 3).map((img, i) => (
              <GalleryImage key={i} {...img} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.slice(3, 5).map((img, i) => (
              <GalleryImage key={i} {...img} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.slice(5, 8).map((img, i) => (
              <GalleryImage key={i} {...img} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.slice(8, 10).map((img, i) => (
              <GalleryImage key={i} {...img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="overflow-hidden rounded-lg border border-border/40">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width={960}
      height={720}
      className="w-full h-36 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
    />
  </div>
);

export default GallerySection;
