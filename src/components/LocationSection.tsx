import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="lokacija" className="py-10 md:py-24 bg-[hsl(220,8%,12%)]">
      <div className="container px-5 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
            Kje se nahajamo
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Najdete nas na naslovu Ljubljanska cesta 6, 1295 Ivančna Gorica. Za obisk, termin ali dodatne informacije nas pokličite ali nam pišite.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <div className="bg-card/80 border border-border/60 rounded-lg p-4 md:p-6 flex flex-col items-center text-center">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2 md:mb-3" strokeWidth={1.5} />
            <p className="text-foreground font-medium text-sm">Ljubljanska cesta 6</p>
            <p className="text-muted-foreground text-sm">1295 Ivančna Gorica</p>
          </div>

          <div className="md:col-span-2 rounded-lg overflow-hidden border border-border/60 min-h-[220px] md:min-h-[280px]">
            <iframe
              title="Lokacija Avtopralnica Glosi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.8!2d14.7286!3d45.9369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47653a0a0a0a0a0a%3A0x0!2sLjubljanska+cesta+6%2C+1295+Ivan%C4%8Dna+Gorica!5e0!3m2!1ssl!2ssi!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 220 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
