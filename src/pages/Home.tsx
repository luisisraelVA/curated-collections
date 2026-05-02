import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, heroLiving, products, formatPrice } from "@/data/catalog";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={heroLiving}
          alt="Salón premium con mobiliario AURUM"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="relative z-10 container-luxe h-full flex flex-col justify-center max-w-4xl">
          <div className="eyebrow fade-in" style={{ animationDelay: "0.2s" }}>Edición 2026</div>
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground fade-up" style={{ animationDelay: "0.35s" }}>
            Presentando nuestra
            <br />
            <em className="text-primary not-italic">Colección Exclusiva</em>
            <br />
            de Muebles
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed fade-up" style={{ animationDelay: "0.55s" }}>
            Piezas concebidas a mano por un atelier europeo. Cada mueble es una arquitectura íntima
            de materiales nobles, líneas serenas y oficio.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6 fade-up" style={{ animationDelay: "0.75s" }}>
            <a
              href="#categorias"
              className="group inline-flex items-center gap-3 px-9 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-all duration-500 ease-luxe shadow-glow"
            >
              Explorar Categorías
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to={`/producto/${products[0].id}`} className="text-xs uppercase tracking-[0.3em] text-foreground/80 hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-1">
              Ver pieza destacada
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-foreground/60 animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </div>
      </section>

      {/* INTRO STRIP — like example bottom strip */}
      <section className="relative -mt-px">
        <div className="container-luxe grid md:grid-cols-3 -mt-24 relative z-20 shadow-elegant">
          <div className="bg-surface-elevated p-10 md:p-12">
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">Desde</div>
            <div className="mt-2 font-display text-5xl text-foreground">1987</div>
          </div>
          <div className="bg-gradient-bronze p-10 md:p-12 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] opacity-70">Atelier</div>
            <div className="mt-2 font-display text-3xl leading-tight">
              Diseño, oficio<br />y materia noble
            </div>
          </div>
          <div className="bg-surface p-10 md:p-12">
            <p className="text-sm text-foreground/75 leading-relaxed">
              Catálogo de visualización: explora cada categoría, descubre las piezas y
              cambia entre tapicerías y acabados en tiempo real.
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
              <h2 className="mt-5 font-display text-5xl md:text-6xl leading-tight max-w-2xl">
                Una <em className="text-primary not-italic">colección</em> organizada por habitación
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Selecciona una categoría para descubrir las piezas y sus variaciones de tapicería, madera y acabado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={`/categoria/${cat.id}`}
                className="group relative overflow-hidden bg-surface aspect-[4/5] block fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 ring-0 ring-primary/0 group-hover:ring-1 group-hover:ring-primary/40 transition-all duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{cat.tagline}</div>
                  <div className="mt-2 flex items-end justify-between">
                    <h3 className="font-display text-4xl text-foreground">{cat.name}</h3>
                    <ArrowRight className="h-5 w-5 text-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PIECES */}
      <section className="py-24 bg-surface">
        <div className="container-luxe">
          <div className="eyebrow">Piezas en cabecera</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl mb-14">Lo más codiciado del atelier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <Link key={p.id} to={`/producto/${p.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-background">
                  <img src={p.baseImage} alt={p.name} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.collection}</div>
                    <h4 className="mt-1 font-display text-xl group-hover:text-primary transition-colors">{p.name}</h4>
                  </div>
                  <div className="price-tag text-lg whitespace-nowrap">{formatPrice(p.basePrice)}</div>
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
