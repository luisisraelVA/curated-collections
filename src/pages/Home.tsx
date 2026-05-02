import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, heroLiving, formatPrice } from "@/data/catalog";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO - Cambiado h-screen por min-h-screen para evitar recortes */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
        <img
          src={heroLiving}
          alt="Interior moderno con muebles Mueblería Tokio"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          // Cloudflare servirá esto más rápido si es WebP
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/45" />

        {/* Contenedor con padding superior para no chocar con el Header fijo */}
        <div className="relative z-10 container-luxe py-24 md:py-32 h-full flex flex-col justify-center max-w-5xl">
          <div className="eyebrow fade-in inline-flex items-center gap-2" style={{ animationDelay: "0.2s" }}>
            <MapPin className="h-3 w-3" /> Bolivia · Edición 2026
          </div>
          
          {/* TAMAÑO DE FUENTE CORREGIDO: Más pequeño en tablets/laptops para que no choque */}
          <h1 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-foreground fade-up" style={{ animationDelay: "0.35s" }}>
            Transforma tu espacio con 
            <br />
            <span className="text-primary">Mueblería Tokio.</span>
            <br />
            <span className="text-foreground/90 font-light text-3xl md:text-4xl lg:text-6xl">Calidad y diseño.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/85 leading-relaxed fade-up" style={{ animationDelay: "0.55s" }}>
            Una colección curada de muebles premium para living, comedor y descanso.
            Explora cada categoría y descubre variaciones de diseño únicas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 fade-up" style={{ animationDelay: "0.75s" }}>
            <a
              href="#categorias"
              className="group w-full sm:w-auto justify-center inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-all duration-500 shadow-glow rounded font-semibold"
            >
              Explorar Catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* FLECHA DE BAJAR - Oculta en pantallas muy bajas para que no tape el botón */}
        <a href="#categorias" aria-label="Bajar al catálogo" className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-foreground/60 animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* INTRO STRIP - Arreglado el Grid para que no se amontone en tablets */}
      <section className="relative -mt-px">
        <div className="container-luxe grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-16 md:-mt-24 relative z-20 shadow-elegant rounded-md overflow-hidden">
          <div className="bg-surface-elevated p-8 md:p-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Categorías</div>
            <div className="mt-2 font-display font-bold text-4xl md:text-5xl text-foreground">{categories.length}</div>
          </div>
          <div className="bg-gradient-bronze p-8 md:p-10 text-primary-foreground">
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-80">Mueblería Tokio</div>
            <div className="mt-2 font-display font-semibold text-xl md:text-2xl leading-tight">
              Diseño, calidad<br />y entrega en Bolivia
            </div>
          </div>
          <div className="bg-surface p-8 md:p-10 md:col-span-2 lg:col-span-1">
            <p className="text-sm text-foreground/75 leading-relaxed italic">
              "Explora cada categoría, descubre las piezas y cambia entre diseños y acabados en tiempo real."
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES - Optimizadas con Lazy Loading */}
      <section id="categorias" className="py-20 md:py-32">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow">Catálogo</div>
              <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl leading-tight max-w-2xl">
                Una <span className="text-primary">colección</span> por ambiente
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-muted-foreground">
              Selecciona una categoría para descubrir sus diseños y variaciones de color y madera.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className="group relative overflow-hidden bg-surface aspect-[4/5] block fade-up rounded-md border border-border/40"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                <div className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.2em] bg-background/80 backdrop-blur-sm px-2.5 py-1 text-foreground rounded">
                  {cat.styles.length} opciones
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-primary font-bold">{cat.tagline}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground">{cat.name}</h3>
                    <ArrowRight className="h-5 w-5 text-primary translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="font-semibold text-lg">{formatPrice(cat.price)}</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/60">
                      Ver Catálogo
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;