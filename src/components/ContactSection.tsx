import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Za termin, ponudbo ali dodatne informacije nas kontaktirajte. Odgovorimo hitro in z veseljem svetujemo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <Phone className="w-4 h-4 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                <a href="tel:068172230" className="text-foreground font-medium hover:text-primary transition-colors">
                  068 172 230
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-4 h-4 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:avtopralnica.glosi@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors">
                  avtopralnica.glosi@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Naslov</p>
                <p className="text-foreground font-medium">Ljubljanska cesta 6, 1295 Ivančna Gorica</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-4 h-4 text-accent mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Delovni čas</p>
                <div className="text-foreground text-sm space-y-1">
                  <p>PON–PET: 8.00–17.00</p>
                  <p>SOB: 8.00–15.00</p>
                  <p className="text-muted-foreground">Nedelja in prazniki: zaprto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/80 border border-border/60 rounded-lg p-5 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-foreground font-medium mb-2">Hvala za vaše povpraševanje!</p>
                <p className="text-muted-foreground text-sm">Odgovorili vam bomo v najkrajšem možnem času.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5">Ime in priimek</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-secondary/80 border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-secondary/80 border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-secondary/80 border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5">Sporočilo</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-secondary/80 border border-border/60 rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-medium text-sm py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Pošlji povpraševanje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
