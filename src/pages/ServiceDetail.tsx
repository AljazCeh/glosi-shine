import { useParams, Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { PricingDetail } from "@/components/PricingDetail";
import { Button } from "@/components/ui/button";
import { services, additionalServices } from "@/data/services";
import { ChevronLeft, Mail, Phone } from "lucide-react";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = useMemo(() => {
    return services.find((s) => s.slug === slug);
  }, [slug]);

  // Handle meta tags
  useMemo(() => {
    if (service) {
      // Update document title
      document.title = `${service.title} | GLOSI Shine`;

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", service.shortDesc);

      // Set canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", `${window.location.origin}/storitve/${slug}`);
    }
  }, [service, slug]);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Storitev ne obstaja</h1>
            <p className="text-muted-foreground mb-8">Preverite URL in poskusite znova.</p>
            <Link to="/">
              <Button>Nazaj na naslovnico</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleContactClick = () => {
    // Find the contact section and scroll to it
    const contactSection = document.querySelector("#kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container py-4">
            <Link
              to="/#storitve"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ChevronLeft className="w-4 h-4" />
              Nazaj na storitve
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-24 border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {service.title}
              </h1>
              <div className="h-1 w-16 bg-primary rounded-full mb-8"></div>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                {service.description || service.shortDesc}
              </p>

              {/* Duration and Quick Info */}
              {service.duration && (
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold shadow-lg">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                    </svg>
                    <span>{service.duration}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Dark Background with Car Image */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95 z-0"></div>
          <div className="absolute inset-0 opacity-20 z-0" style={{
            backgroundImage: 'url(/hero-car-BTyg7RAy.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}></div>

          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <p className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
                  Pravno da bomo presegil vata pričakovanja
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  Cenik
                </h2>
              </div>

              <PricingDetail service={service} onContactClick={handleContactClick} />
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        {additionalServices && additionalServices.length > 0 && (
          <section className="py-16 md:py-20 bg-slate-900/50 border-t border-slate-700/60">
            <div className="container">
              <div className="max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Dodatne storitve
                </h2>
                <div className="h-1 w-12 bg-cyan-400 rounded-full mb-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {additionalServices.map((svc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-5 bg-slate-800/40 border border-slate-700/50 rounded-lg hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all"
                    >
                      <span className="text-sm md:text-base text-slate-200 font-medium">
                        {svc.name}
                      </span>
                      <span className="text-lg md:text-xl font-bold text-cyan-400 whitespace-nowrap ml-4">
                        {svc.priceNote ? svc.priceNote : `${svc.price}€`}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-slate-800/30 border border-slate-700/60 rounded-lg">
                  <p className="text-xs md:text-sm text-slate-400 italic leading-relaxed">
                    Cene veljajo za obratovanje na našem mestu. Pri prevzemu vozila na domu primenjujemo dodatni prevozni stroški.
                    Za posebne okolišči nam prosim pokličejo ali pošljete povpraševanje. Prinaša se tudi ročin nasproti DGV.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ste zainteresirani?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas za povpraševanje ali naročilo. Naša ekipa je vedno pripravljena pomagati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleContactClick}
                className="gap-2"
              >
                <Mail className="w-5 h-5" />
                Pošlji povpraševanje
              </Button>
              <a href="tel:+38631234567">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full"
                >
                  <Phone className="w-5 h-5" />
                  Pokličite nas
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              Ostale storitve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter((s) => s.slug !== slug)
                .slice(0, 3)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/storitve/${s.slug}`}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{s.shortDesc}</p>
                    <div className="mt-4 text-primary font-medium text-sm">
                      Izvedite več →
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
