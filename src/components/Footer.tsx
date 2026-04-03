const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-[hsl(220,10%,9%)] py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground mb-2">Avtopralnica Glosi</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ročna avtopralnica Glosi, Matej Mihalič s.p.
            </p>
          </div>

          <div className="text-sm text-muted-foreground space-y-1">
            <p>Ljubljanska cesta 6, 1295 Ivančna Gorica</p>
            <p>
              <a href="tel:068172230" className="hover:text-foreground transition-colors">068 172 230</a>
            </p>
            <p>
              <a href="mailto:avtopralnica.glosi@gmail.com" className="hover:text-foreground transition-colors">
                avtopralnica.glosi@gmail.com
              </a>
            </p>
          </div>

          <div className="text-sm text-muted-foreground space-y-1 md:text-right">
            <a href="#" className="block hover:text-foreground transition-colors">Politika zasebnosti</a>
            <a href="#" className="block hover:text-foreground transition-colors">Piškotki</a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-border/40 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Avtopralnica Glosi. Vse pravice pridržane.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
