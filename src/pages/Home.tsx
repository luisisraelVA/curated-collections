import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, MapPin, Phone } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { categories, heroLiving, formatPrice } from "@/data/catalog";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
        <img
          src={heroLiving}
          alt="Interior moderno Mueblería Tokio"
          className="absolute inset-0 h-full w-full object-cover scale-105"
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container-luxe py-24 md:py-32 h-full flex flex-col justify-center max-w-5xl">
          <div className="eyebrow fade-in inline-flex items-center gap-2" style={{ animationDelay: "0.2s" }}>
            <MapPin className="h-3 w-3" /> Bolivia · Edición 2026
          </div>
          
          <h1 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-white fade-up" style={{ animationDelay: "0.35s" }}>
            Transforma tu espacio con 
            <br />
            <span className="text-primary">Mueblería Tokio.</span>
            <br />
            <span className="text-white/90 font-light text-3xl md:text-4xl lg:text-6xl">Calidad y diseño.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed fade-up" style={{ animationDelay: "0.55s" }}>
            Colección premium para living y comedor. Explora cada categoría y descubre variaciones de diseño únicas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6 fade-up" style={{ animationDelay: "0.75s" }}>
            <a
              href="#categorias"
              className="group w-full sm:w-auto justify-center inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-primary-glow transition-all duration-500 shadow-glow rounded font-semibold"
            >
              Explorar Catálogo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <a href="#categorias" className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce">
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* CATEGORIES GRID */}
      <section id="categorias" className="py-20 md:py-32 bg-background">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="eyebrow">Catálogo</div>
              <h2 className="mt-4 font-display font-bold text-3xl md:text-5xl text-foreground">
                Una <span className="text-primary">colección</span> por ambiente
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-muted-foreground">
              Selecciona una categoría para descubrir sus diseños y variaciones de color y madera.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={cat.id} className="flex flex-col gap-4">
                <Link
                  to={`/categoria/${cat.id}`}
                  className="group relative overflow-hidden bg-surface aspect-[4/5] block rounded-md border border-border/40"
                >
                  <img src={cat.coverImage} alt={cat.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display font-bold text-xl md:text-2xl">{cat.name}</h3>
                    <div className="mt-2 flex items-center justify-between border-t border-white/20 pt-3">
                      <span className="font-semibold">{formatPrice(cat.price)}</span>
                      <span className="text-[9px] uppercase tracking-widest">Ver diseños</span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const msg = `Hola!%20Me%20interesa%20el%20producto:%20*${cat.name}*%20(${cat.tagline}).%0APrecio:%20*${formatPrice(cat.price)}*%0A¿Tienen%20disponibilidad?`;
                    window.open(`https://wa.me/59173159744?text=${msg}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary/10 hover:bg-primary hover:text-white text-primary border border-primary/20 rounded text-[10px] uppercase font-bold transition-all"
                >
                  <Phone className="h-3.5 w-3.5" /> Cotizar WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* BOTÓN FLOTANTE */}
      <a
        href="https://wa.me/59177161259?text=Hola%20Mueblería%20Tokio!%20Quisiera%20hacer%20una%20consulta%20general."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform group"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.556-5.333 11.888-11.889 11.888-2.01 0-3.983-.51-5.728-1.478l-6.255 1.701zm6.114-3.533l.369.219c1.472.873 3.177 1.335 4.93 1.335 5.176 0 9.388-4.212 9.388-9.388 0-2.504-.975-4.858-2.744-6.628s-4.125-2.744-6.629-2.744c-5.176 0-9.388 9.388 0 2.057.669 4.055 1.932 5.707l.241.314-.99 3.616 3.7-.993zm10.367-5.58c-.282-.141-1.664-.822-1.923-.917-.258-.095-.447-.141-.636.141-.188.282-.729.917-.894 1.107-.165.19-.33.213-.612.072-.282-.141-1.189-.438-2.264-1.398-.837-.747-1.401-1.671-1.566-1.953-.165-.282-.018-.434.122-.574.127-.127.282-.33.424-.495.142-.165.189-.282.283-.471.094-.188.047-.354-.023-.495-.071-.141-.636-1.532-.871-2.099-.229-.551-.46-.477-.636-.485-.164-.008-.353-.01-.542-.01s-.495.071-.754.354c-.259.282-.989.966-.989 2.358 0 1.391 1.013 2.736 1.155 2.924.141.188 1.992 3.041 4.825 4.263.673.291 1.2.465 1.61.595.677.215 1.293.185 1.781.112.544-.082 1.664-.681 1.899-1.341.235-.66.235-1.226.165-1.341-.07-.116-.259-.204-.541-.345z"/></svg>
        <span className="absolute right-16 bg-background text-foreground text-[10px] px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border font-bold">¿CÓMO PODEMOS AYUDARTE?</span>
      </a>
    </div>
  );
};

export default Home;