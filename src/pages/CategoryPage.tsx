import { Link, NavLink, useParams } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, getCategory, getProductsByCategory, formatPrice } from "@/data/catalog";
import { ArrowRight } from "lucide-react";

const CategoryPage = () => {
  const { categoryId = "" } = useParams();
  const category = getCategory(categoryId);
  const items = getProductsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-luxe pt-48 pb-32 text-center">
          <h1 className="font-display text-4xl">Categoría no encontrada</h1>
          <Link to="/" className="mt-6 inline-block text-primary">Volver al inicio</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero strip */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="container-luxe relative">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/" className="hover:text-primary">Catálogo</Link>
            <span className="mx-3 text-foreground/30">/</span>
            <span className="text-foreground">{category.name}</span>
          </div>
          <h1 className="mt-6 font-display text-6xl md:text-7xl">
            {category.name}
          </h1>
          <p className="mt-4 text-lg text-primary italic font-display">{category.tagline}</p>
        </div>
      </section>

      {/* Layout: side nav + grid */}
      <section className="container-luxe pb-24">
        <div className="grid lg:grid-cols-[220px_1fr] gap-12">
          {/* Sidebar nav */}
          <aside className="lg:sticky lg:top-32 self-start">
            <div className="eyebrow mb-6">Categorías</div>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {categories.map((c) => (
                <NavLink
                  key={c.id}
                  to={`/categoria/${c.id}`}
                  className={({ isActive }) =>
                    `whitespace-nowrap py-2.5 px-3 text-sm tracking-wide border-l-2 transition-all ${
                      isActive
                        ? "border-primary text-primary bg-primary/5"
                        : "border-transparent text-foreground/70 hover:text-foreground hover:border-foreground/30"
                    }`
                  }
                >
                  {c.name}
                </NavLink>
              ))}
            </nav>
          </aside>

          {/* Product grid */}
          <div>
            <div className="hidden md:flex items-center justify-between mb-8 pb-4 border-b border-border text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span>{items.length} {items.length === 1 ? "pieza" : "piezas"}</span>
              <span>Precios desde tapicería base</span>
            </div>

            {items.length === 0 ? (
              <p className="text-muted-foreground">Próximamente nuevas piezas en esta categoría.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14">
                {items.map((p, i) => (
                  <Link key={p.id} to={`/producto/${p.id}`} className="group fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                      <img
                        src={p.baseImage}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-foreground/80 bg-background/60 backdrop-blur px-3 py-1.5">
                        {p.styles.length} acabados
                      </div>
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.collection}</div>
                        <h3 className="mt-1.5 font-display text-2xl group-hover:text-primary transition-colors">{p.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2 max-w-sm">{p.shortDescription}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Desde</div>
                        <div className="price-tag text-2xl mt-1">{formatPrice(p.basePrice)}</div>
                      </div>
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60 group-hover:text-primary transition-colors">
                      Ver detalle <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
