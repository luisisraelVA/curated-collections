import { MapPin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border mt-24">
    <div className="container-luxe py-16 grid md:grid-cols-4 gap-12">
      <div>
        <div className="font-display font-bold text-2xl tracking-tight">
          Mueblería <span className="text-primary">Tokio</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Muebles premium para hogares con carácter. Diseño, calidad y entrega en todo Bolivia.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs text-primary">
          <MapPin className="h-3.5 w-3.5" /> Bolivia
        </div>
      </div>
      <div>
        <div className="eyebrow mb-5">Catálogo</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Juegos de Living</li>
          <li>Salas Esquineras</li>
          <li>Comedores</li>
          <li>Poltronas</li>
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-5">Contacto</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Showroom Bolivia</li>
          <li>Lunes – Sábado · 9:00 – 19:00</li>
          <li className="text-primary">contacto@muebleriatokio.bo</li>
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-5">Mueblería Tokio</div>
        <p className="text-sm text-foreground/70 leading-relaxed">
          Catálogo de visualización. Para consultas de stock, precios y entregas escríbenos por nuestros canales oficiales.
        </p>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground tracking-wider">
        <span>© {new Date().getFullYear()} Mueblería Tokio · Todos los derechos reservados</span>
        <span className="mt-2 md:mt-0">Diseño & calidad premium</span>
      </div>
    </div>
  </footer>
);

export default Footer;
