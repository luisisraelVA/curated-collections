import { Link, NavLink, useLocation } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { categories } from "@/data/catalog";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-luxe flex items-center justify-between py-4">
        
<Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo-tokio.svg" 
            alt="Logo MT" 
            className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
          />
          <div className="flex flex-col justify-center border-l border-border/50 pl-3">
            <span className="font-display font-semibold text-lg md:text-xl tracking-[0.15em] text-foreground group-hover:text-primary transition-colors leading-none">
              MUEBLERÍA
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary mt-1.5 leading-none font-medium">
              Tokio
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium">
          <NavLink to="/" end className={({ isActive }) =>
            isActive ? "text-primary" : "text-foreground/80 hover:text-primary transition-colors"}>
            Inicio
          </NavLink>
          <a href="/#categorias" className="text-foreground/80 hover:text-primary transition-colors">
            Catálogo
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3 px-4 py-2 border border-primary/40 rounded-full text-xs tracking-wider text-primary bg-primary/5">
          <MapPin className="h-3.5 w-3.5" />
          <span className="font-semibold">Bolivia</span>
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
          <nav className="container-luxe flex flex-col py-6 gap-4 text-sm uppercase tracking-[0.2em]" onClick={() => setOpen(false)}>
            <Link to="/" className={location.pathname === "/" ? "text-primary" : "text-foreground/80"}>Inicio</Link>
            <a href="/#categorias" className="text-foreground/80 hover:text-primary">Catálogo</a>
            {categories.map((c) => (
              <Link key={c.id} to={`/categoria/${c.id}`} className="text-foreground/70 text-xs hover:text-primary pl-4">
                · {c.name}
              </Link>
            ))}
            <a href="#contact" className="text-foreground/80 hover:text-primary">Contacto</a>
            <div className="inline-flex items-center gap-2 text-primary mt-2">
              <MapPin className="h-3.5 w-3.5" /> Bolivia
            </div>
            <a href="tel:+59100000000" className="inline-flex items-center gap-2 text-foreground/70">
              <Phone className="h-3.5 w-3.5 text-primary" /> Llamar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;