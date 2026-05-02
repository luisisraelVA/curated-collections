import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, MapPin } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, heroLiving, formatPrice } from "@/data/catalog";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroLiving}
          alt="Interior moderno con muebles Mueblería Tokio"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/45" />

        <div className="relative z-10 container-luxe h-full flex flex-col justify-center max-w-4xl">
          <div className="eyebrow fade-in" style={{ animationDelay: "0.2s" }}>
            <MapPin className="h-3 w-3" /> Bolivia · Edición 2026
          </div>
          <h1 className="mt-8 font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground fade-up" style={{ animationDelay: "0.35s" }}>
            Transforma tu espacio con
            <br />
            <span className="text-primary">Mueblería Tokio.</span>
            <br />
            <span className="text-foreground/90 font-light">Calidad y diseño en cada detalle.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed fade-up" style={{ animationDelay: "0.55s" }}>
            Una colección curada de muebles premium para living, comedor y descanso.
            Explora cada categoría y descubre todas sus variaciones de diseño.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6 fade-up" style={{ animationDelay: "0.75s" }}>
            <a
              href="#categorias"
              className="group inline-flex items-center gap-3 px-9 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-all duration-500 ease-luxe shadow-glow rounded font-semibold"
            >
              Explorar Catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <a href="#categorias" aria-label="Bajar al catálogo" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-foreground/60 animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* INTRO STRIP */}
      <section className="relative -mt-px">
        <div className="container-luxe grid md:grid-cols-3 -mt-24 relative z-20 shadow-elegant rounded-md overflow-hidden">
          <div className="bg-surface-elevated p-10 md:p-12">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">Categorías</div>
            <div className="mt-2 font-display font-bold text-5xl text-foreground">{categories.length}</div>
          </div>
          <div className="bg-gradient-bronze p-10 md:p-12 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] opacity-80">Mueblería Tokio</div>
            <div className="mt-2 font-display font-semibold text-2xl leading-tight">
              Diseño, calidad<br />y entrega en Bolivia
            </div>
          </div>
          <div className="bg-surface p-10 md:p-12">
            <p className="text-sm text-foreground/75 leading-relaxed">
              Catálogo de visualización: explora cada categoría, descubre las piezas y
              cambia entre diseños y acabados en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categorias" className="py-32">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow">Catálogo</div>
              <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
                Una <span className="text-primary">colección</span> organizada por ambiente
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Selecciona una categoría para descubrir sus diseños y variaciones de color, tapicería y madera.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className="group relative overflow-hidden bg-surface aspect-[4/5] block fade-up rounded-md"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <img
                  src={cat.coverImage}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 ring-0 ring-primary/0 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-500" />

                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 text-foreground rounded">
                  {cat.styles.length} diseños
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{cat.tagline}</div>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight">{cat.name}</h3>
                    <ArrowRight className="h-5 w-5 text-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="price-tag text-xl">{formatPrice(cat.price)}</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 group-hover:text-primary transition-colors">
                      Ver diseños
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
