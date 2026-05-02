import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, getCategory, formatPrice } from "@/data/catalog";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const CategoryDetail = () => {
  const { categoryId = "" } = useParams();
  const category = getCategory(categoryId);
  const [selectedId, setSelectedId] = useState(category?.styles[0]?.id ?? "");

  const selected = useMemo(
    () => category?.styles.find((s) => s.id === selectedId) ?? category?.styles[0],
    [category, selectedId],
  );

  if (!category || !selected) {
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

  const others = categories.filter((c) => c.id !== category.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 md:pt-40">
        <div className="container-luxe">
          {/* Breadcrumb */}
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-3 text-foreground/30">/</span>
            <Link to="/#categorias" className="hover:text-primary">Catálogo</Link>
            <span className="mx-3 text-foreground/30">/</span>
            <span className="text-foreground">{category.name}</span>
          </div>

          {/* Layout: en móviles -> imagen, selector, info. En desktop -> imagen | info */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            {/* IMAGEN PRINCIPAL */}
            <div className="order-1">
              <div className="relative aspect-[5/4] overflow-hidden bg-surface shadow-elegant rounded-md">
                <img
                  key={selected.imageUrl}
                  src={selected.imageUrl}
                  alt={`${category.name} – ${selected.name}`}
                  className="h-full w-full object-cover fade-in"
                />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 text-foreground rounded">
                  {category.tagline}
                </div>
                <div className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground px-3 py-1.5 rounded">
                  {selected.name}
                </div>
              </div>

              {/* Selector de diseños — en móvil aparece justo debajo de la imagen */}
              <div className="mt-8 lg:hidden">
                <StyleGrid
                  styles={category.styles}
                  selectedId={selected.id}
                  onSelect={setSelectedId}
                />
              </div>
            </div>

            {/* INFO */}
            <div className="order-2 lg:pt-4">
              <div className="eyebrow">{category.tagline}</div>
              <h1 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
                {category.name}
              </h1>

              <div className="mt-8 flex items-baseline gap-4">
                <div className="price-tag text-5xl md:text-6xl">{formatPrice(category.price)}</div>
              </div>

              <div className="hairline my-8" />

              <p className="text-foreground/80 leading-relaxed text-base">
                {category.description}
              </p>

              {/* Spec strip */}
              <div className="mt-10 grid grid-cols-3 border-y border-border py-5 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Garantía</div>
                  <div className="mt-2 font-display font-semibold">2 años</div>
                </div>
                <div className="border-x border-border">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Diseños</div>
                  <div className="mt-2 font-display font-semibold">{category.styles.length}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Entrega</div>
                  <div className="mt-2 font-display font-semibold">Bolivia</div>
                </div>
              </div>

              {/* Selector de diseños — desktop */}
              <div className="mt-10 hidden lg:block">
                <StyleGrid
                  styles={category.styles}
                  selectedId={selected.id}
                  onSelect={setSelectedId}
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-colors rounded font-semibold">
                  Consultar disponibilidad
                </a>
                <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-primary">
                  <ArrowLeft className="h-4 w-4" /> Volver al catálogo
                </Link>
              </div>
            </div>
          </div>

          {/* Otras categorías */}
          <div className="mt-32">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="eyebrow">Continúa explorando</div>
                <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl">Otras categorías</h2>
              </div>
              <Link to="/#categorias" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                Ver todo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {others.map((c) => (
                <Link key={c.id} to={`/categoria/${c.id}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden bg-surface rounded-md">
                    <img src={c.coverImage} alt={c.name} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105" />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-display font-semibold text-base md:text-lg group-hover:text-primary transition-colors">{c.name}</h4>
                    <div className="price-tag text-sm mt-1">{formatPrice(c.price)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

/* ---------- Selector reusable ---------- */
const StyleGrid = ({
  styles,
  selectedId,
  onSelect,
}: {
  styles: { id: string; name: string; swatch: string; imageUrl: string }[];
  selectedId: string;
  onSelect: (id: string) => void;
}) => (
  <div>
    <div className="flex items-center justify-between mb-5">
      <div className="eyebrow">Selecciona un diseño</div>
      <span className="text-xs text-muted-foreground tracking-wider">
        {styles.length} {styles.length === 1 ? "diseño" : "diseños"}
      </span>
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
      {styles.map((s) => {
        const active = s.id === selectedId;
        return (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            aria-pressed={active}
            aria-label={`Seleccionar diseño ${s.name}`}
            className={`group relative aspect-square overflow-hidden rounded-md border-2 transition-all duration-300 ${
              active
                ? "border-primary shadow-glow scale-[1.03]"
                : "border-border hover:border-foreground/40"
            }`}
          >
            <img src={s.imageUrl} alt={s.name} loading="lazy"
              className="absolute inset-0 h-full w-full object-cover" />
            <div className={`absolute inset-x-0 bottom-0 px-2 py-1.5 text-[10px] uppercase tracking-wider truncate ${
              active ? "bg-primary text-primary-foreground font-semibold" : "bg-background/80 text-foreground"
            }`}>
              {s.name}
            </div>
            <span
              className="absolute top-1.5 left-1.5 h-3.5 w-3.5 rounded-full ring-2 ring-background"
              style={{ background: s.swatch }}
            />
            {active && (
              <span className="absolute top-1.5 right-1.5 h-5 w-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Check className="h-3 w-3" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  </div>
);

export default CategoryDetail;
