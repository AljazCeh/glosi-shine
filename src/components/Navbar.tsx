import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSrc from "../assets/logoglosi.png";

const navLinks = [
  { label: "Domov", href: "#domov" },
  { label: "Storitve", href: "#storitve" },
  { label: "Cenik", href: "#cenik" },
  { label: "Lokacija", href: "#lokacija" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#domov" className="flex items-center gap-2" aria-label="Avtopralnica Glosi - domov">
          <img
            src={logoSrc}
            alt="Avtopralnica Glosi logo"
            className="max-h-10 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:068172230"
          className="hidden md:inline-flex text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Pokličite nas
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-6">
          <ul className="flex flex-col items-center gap-5 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="tel:068172230"
                className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg"
              >
                Pokličite nas
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
