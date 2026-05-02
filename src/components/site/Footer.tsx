const Footer = () => (
  <footer id="contact" className="border-t border-border mt-32">
    <div className="container-luxe py-20 grid md:grid-cols-4 gap-12">
      <div>
        <div className="font-display text-3xl tracking-wider">AURUM</div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Mobiliario de autor concebido en nuestro atelier desde 1987. Piezas hechas para durar generaciones.
        </p>
      </div>
      <div>
        <div className="eyebrow mb-5">Atelier</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Filosofía</li><li>Artesanos</li><li>Materiales</li><li>Sostenibilidad</li>
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-5">Contacto</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Paseo de Gracia 88, Barcelona</li>
          <li>+34 900 123 456</li>
          <li>atelier@aurum.com</li>
        </ul>
      </div>
      <div>
        <div className="eyebrow mb-5">Showroom</div>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>Lunes – Sábado</li>
          <li>10:00 – 20:00</li>
          <li className="text-primary mt-3">Visita con cita previa</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground tracking-wider">
        <span>© {new Date().getFullYear()} AURUM Atelier · Todos los derechos reservados</span>
        <span className="mt-2 md:mt-0">Hecho a mano en Europa</span>
      </div>
    </div>
  </footer>
);

export default Footer;
