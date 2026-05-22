import { Link, NavLink, useLocation } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { categories } from "@/data/catalog";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleCatalogClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("categorias");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-luxe flex items-center justify-between py-4">
        
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
          <img 
            src="/logo-tokio.svg" 
            alt="Logo MT" 
            className="h-10 md:h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all" 
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
            isActive ? "text-primary font-bold" : "text-foreground/80 hover:text-primary transition-colors"}>
            Inicio
          </NavLink>
          <Link to="/#categorias" onClick={handleCatalogClick} className="text-foreground/80 hover:text-primary transition-colors">
            Catálogo
          </Link>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="hidden sm:flex items-center gap-3 px-4 py-2 border border-primary/40 rounded-full text-[10px] md:text-xs tracking-wider text-primary bg-primary/5">
          <MapPin className="h-3.5 w-3.5" />
          <span className="font-semibold">BOLIVIA</span>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Menú">
          <div className="flex flex-col gap-1.5">
            <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container-luxe flex flex-col py-6 gap-5 text-sm uppercase tracking-[0.2em]">
            <Link to="/" onClick={() => setOpen(false)} className={location.pathname === "/" ? "text-primary font-bold" : "text-foreground/80"}>Inicio</Link>
            <Link to="/#categorias" onClick={handleCatalogClick} className="text-foreground/80 hover:text-primary">Ver Catálogo</Link>
            
            <div className="grid grid-cols-2 gap-2 pl-4 border-l border-primary/20">
              {categories.slice(0, 6).map((c) => (
                <Link key={c.id} to={`/categoria/${c.id}`} onClick={() => setOpen(false)} className="text-foreground/60 text-[10px] hover:text-primary truncate">
                  · {c.name}
                </Link>
              ))}
            </div>

            <a href="#contact" onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary">Contacto</a>
            
            <div className="flex justify-between items-center pt-4 border-t border-border/50">
              <a href="tel:+59173159744" className="flex items-center gap-2 text-primary font-bold">
                <Phone className="h-4 w-4" /> LLAMAR AHORA
              </a>
              <div className="text-[10px] text-foreground/40 italic">Sucre, Bolivia</div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;