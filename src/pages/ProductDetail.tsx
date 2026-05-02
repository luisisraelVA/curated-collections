import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { getProduct, getCategory, getProductsByCategory, formatPrice } from "@/data/catalog";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const ProductDetail = () => {
  const { productId = "" } = useParams();
  const product = getProduct(productId);
  const [selectedStyleId, setSelectedStyleId] = useState(product?.styles[0]?.id ?? "");

  const selected = useMemo(
    () => product?.styles.find((s) => s.id === selectedStyleId) ?? product?.styles[0],
    [product, selectedStyleId],
  );

  if (!product || !selected) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-luxe pt-48 pb-32 text-center">
          <h1 className="font-display text-4xl">Pieza no encontrada</h1>
          <Link to="/" className="mt-6 inline-block text-primary">Volver al inicio</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const category = getCategory(product.categoryId);
  const related = getProductsByCategory(product.categoryId).filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 md:pt-40">
        <div className="container-luxe">
          {/* Breadcrumb */}
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-3 text-foreground/30">/</span>
            <Link to={`/categoria/${product.categoryId}`} className="hover:text-primary">{category?.name}</Link>
            <span className="mx-3 text-foreground/30">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          {/* Main: image + info */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Hero image */}
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden bg-surface shadow-elegant">
                <img
                  key={selected.imageUrl}
                  src={selected.imageUrl}
                  alt={`${product.name} – ${selected.name}`}
                  className="h-full w-full object-cover fade-in"
                />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] bg-background/70 backdrop-blur px-3 py-1.5 text-foreground">
                  {product.collection}
                </div>
              </div>
            </div>

            {/* Info column */}
            <div className="lg:pt-4">
              <div className="eyebrow">{category?.name}</div>
              <h1 className="mt-5 font-display text-5xl md:text-6xl leading-[1] text-foreground">
                {product.name}
              </h1>

              <div className="mt-6 flex items-baseline gap-4">
                <div className="price-tag text-4xl md:text-5xl font-display">{formatPrice(selected.price)}</div>
                {selected.price !== product.basePrice && (
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    base {formatPrice(product.basePrice)}
                  </span>
                )}
              </div>

              <div className="hairline my-8" />

              <p key={selected.id} className="text-foreground/80 leading-relaxed text-[15px] fade-in">
                {selected.description}
              </p>

              {/* Style variations */}
              <div className="mt-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="eyebrow">Variaciones de estilo</div>
                  <span className="text-xs text-muted-foreground tracking-wider">
                    {product.styles.length} acabados
                  </span>
                </div>

                <div className="space-y-3">
                  {product.styles.map((s) => {
                    const active = s.id === selected.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setSelectedStyleId(s.id)}
                        className={`w-full group flex items-center gap-5 p-4 border text-left transition-all duration-500 ease-luxe ${
                          active
                            ? "border-primary bg-primary/5 shadow-glow"
                            : "border-border hover:border-foreground/40 bg-surface/40"
                        }`}
                      >
                        {/* Swatch */}
                        <div
                          className={`relative h-14 w-14 shrink-0 rounded-sm border-2 transition-all ${
                            active ? "border-primary" : "border-border group-hover:border-foreground/40"
                          }`}
                          style={{ background: s.swatch }}
                        >
                          {active && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <Check className="h-5 w-5 text-primary-foreground drop-shadow" />
                            </span>
                          )}
                        </div>
                        {/* Mini thumb */}
                        <div className="h-14 w-20 shrink-0 overflow-hidden bg-background">
                          <img src={s.imageUrl} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-medium tracking-wide ${active ? "text-primary" : "text-foreground"}`}>
                            {s.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">Acabado · Tapicería</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Precio</div>
                          <div className={`font-display text-lg ${active ? "text-primary" : "text-foreground"}`}>
                            {formatPrice(s.price)}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spec strip */}
              <div className="mt-10 grid grid-cols-3 border-t border-border pt-6 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Origen</div>
                  <div className="mt-2 font-display text-base">Europa</div>
                </div>
                <div className="border-x border-border">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Garantía</div>
                  <div className="mt-2 font-display text-base">10 años</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Entrega</div>
                  <div className="mt-2 font-display text-base">8 sem.</div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-colors">
                  Solicitar visita
                </a>
                <Link to={`/categoria/${product.categoryId}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/70 hover:text-primary">
                  <ArrowLeft className="h-4 w-4" /> Volver
                </Link>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-32">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <div className="eyebrow">También en {category?.name}</div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl">Continúa explorando</h2>
                </div>
                <Link to={`/categoria/${product.categoryId}`} className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  Ver categoría <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((p) => (
                  <Link key={p.id} to={`/producto/${p.id}`} className="group">
                    <div className="aspect-[4/3] overflow-hidden bg-surface">
                      <img src={p.baseImage} alt={p.name} loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105" />
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <h4 className="font-display text-xl group-hover:text-primary transition-colors">{p.name}</h4>
                      <div className="price-tag whitespace-nowrap">{formatPrice(p.basePrice)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProductDetail;
