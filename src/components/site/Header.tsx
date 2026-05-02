import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { categories } from "@/data/catalog";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className="border-b border-foreground/10 bg-background/30 backdrop-blur-sm">
        <div className="container-luxe flex items-center justify-between py-2.5 text-[11px] tracking-wider text-foreground/70">
          <div className="hidden md:flex items-center gap-6">
            <span className="inline-flex items-center gap-2"><Phone className="h-3 w-3 text-primary" /> +34 900 123 456</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-3 w-3 text-primary" /> atelier@aurum.com</span>
            <span className="opacity-70">Showroom · L–S 10:00 – 20:00</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-luxe flex items-center justify-between py-6">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-3xl tracking-wider text-foreground group-hover:text-primary transition-colors">
            AURUM
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.4em] text-primary">Atelier</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-[0.25em]">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>
            Inicio
          </NavLink>
          {categories.slice(0, 5).map((c) => (
            <NavLink
              key={c.id}
              to={`/categoria/${c.id}`}
              className={({isActive}) => isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}
            >
              {c.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-primary/60 text-primary text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-colors">
            Visita Privada
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menú">
          <div className="flex flex-col gap-1.5">
            <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="container-luxe flex flex-col py-6 gap-4 text-sm uppercase tracking-[0.25em]" onClick={() => setOpen(false)}>
            <Link to="/" className={location.pathname === "/" ? "text-primary" : "text-foreground/80"}>Inicio</Link>
            {categories.map((c) => (
              <Link key={c.id} to={`/categoria/${c.id}`} className="text-foreground/80 hover:text-primary">
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
