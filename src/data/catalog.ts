// =====================================================================
// MUEBLERÍA TOKIO — Catálogo de productos
// =====================================================================

// Mantenemos heroLiving por si lo usa el componente Home para el fondo principal
import heroLiving from "@/assets/hero-living.jpg";
export { heroLiving };

/* ---------- Tipos ---------- */
export type Style = {
  id: string;
  name: string;
  swatch: string;          // color del chip (hex/HSL/css color)
  imageUrl: string;        // Ruta de la imagen en public/
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  price: number;           // en Bs.
  description: string;
  coverImage: string;      // imagen de la tarjeta en el home
  styles: Style[];         // variaciones de diseño
};

export const CURRENCY = "Bs.";

export const formatPrice = (n: number) =>
  `${n.toLocaleString("es-BO")} ${CURRENCY}`;

/* ---------- Categorías (9) ---------- */
export const categories: Category[] = [
  {
    id: "juegos-living",
    name: "Juegos de Living",
    tagline: "Sala completa en L",
    price: 6800,
    description:
      "Sofás seccionales en \"L\", incluye cojines, mesa de center y puffs. Tapicería premium, estructura reforzada y confort de larga duración.",
    coverImage: "/Muebles/completo1.webp",
   styles: [
      { id: "L-1", name: "Beige y Esmeralda", swatch: "#0A5C45", imageUrl: "/Muebles/completo1.webp" },
      { id: "L-2", name: "Arena y Carmesí", swatch: "#A62B2B", imageUrl: "/Muebles/completo2.webp" },
      { id: "L-3", name: "Beige y Naranja Cálido", swatch: "#D35400", imageUrl: "/Muebles/completo3.webp" },
      { id: "L-4", name: "Arena con Sillón Rojo", swatch: "#C0392B", imageUrl: "/Muebles/completo4.webp" },
      { id: "L-5", name: "Beige y Celeste", swatch: "#3498DB", imageUrl: "/Muebles/completo5.webp" },
      { id: "L-6", name: "Azul Denim y Rojo", swatch: "#4A6984", imageUrl: "/Muebles/completo6.webp" },
      { id: "L-7", name: "Beige con Sillón Marrón", swatch: "#6E4B3A", imageUrl: "/Muebles/completo7.webp" },
      { id: "L-8", name: "Azul Marino y Amarillo", swatch: "#1A2530", imageUrl: "/Muebles/completo8.webp" },
      { id: "L-9", name: "Gris Plata y Turquesa", swatch: "#5B7485", imageUrl: "/Muebles/completo9.webp" },
      { id: "L-10", name: "Beige Clásico y Madera", swatch: "#D4C8B8", imageUrl: "/Muebles/completo10.webp" },
      { id: "L-11", name: "Arena y Verde Botánico", swatch: "#1E4D2B", imageUrl: "/Muebles/completo11.webp" },
      { id: "L-12", name: "Marfil y Rojo Pasión", swatch: "#F0EAD6", imageUrl: "/Muebles/completo12.webp" },
      { id: "L-13", name: "Beige y Verde Tropical", swatch: "#82937A", imageUrl: "/Muebles/completo13.webp" },
      { id: "L-14", name: "Beige con Sillón Naranja", swatch: "#E67E22", imageUrl: "/Muebles/completo14.webp" },
    ],
  },
  {
    id: "salas-esquineras",
    name: "Salas Esquineras",
    tagline: "Modulares tipo U",
    price: 7800,
    description:
      "Salas modulares grandes tipo U con accesorios integrados como repisas y puffs. Ideal para espacios amplios y reuniones familiares prolongadas.",
    coverImage: "/Muebles2/esquinero1.webp",
    styles: [
      { id: "U-1", name: "Gris Claro y Azul", swatch: "#B8BCBE", imageUrl: "/Muebles2/esquinero1.webp" },
      { id: "U-2", name: "Gris y Carmesí", swatch: "#82858A", imageUrl: "/Muebles2/esquinero2.webp" },
      { id: "U-3", name: "Azul Marino y Mostaza", swatch: "#25345C", imageUrl: "/Muebles2/esquinero3.webp" },
      { id: "U-4", name: "Gris Perla y Azul Rey", swatch: "#C4C6C8", imageUrl: "/Muebles2/esquinero4.webp" },
      { id: "U-5", name: "Bicolor Gris y Ceniza", swatch: "#566471", imageUrl: "/Muebles2/esquinero5.webp" },
      { id: "U-6", name: "Gris Plata y Azul", swatch: "#A2A5AA", imageUrl: "/Muebles2/esquinero6.webp" },
      { id: "U-7", name: "Gris Carbón y Amarillo", swatch: "#2A2D34", imageUrl: "/Muebles2/esquinero7.webp" },
    ],
  },
  {
    id: "poltronas-individuales",
    name: "Poltronas Individuales",
    tagline: "Confort esculpido",
    price: 900,
    description:
      "Diseño curvo, tela aterciopelada de alta calidad, patas de madera natural. Pieza de acento ideal para complementar living, dormitorio o estudio.",
    coverImage: "/Muebles3/silla1.webp",
    styles: [
      { id: "P-1", name: "Rosa Palo", swatch: "#D89A9E", imageUrl: "/Muebles3/silla1.webp" },
      { id: "P-2", name: "Negro Profundo", swatch: "#1F1F1F", imageUrl: "/Muebles3/silla2.webp" },
      { id: "P-3", name: "Azul Rey", swatch: "#1A3673", imageUrl: "/Muebles3/silla3.webp" },
      { id: "P-4", name: "Rojo Carmesí", swatch: "#A61922", imageUrl: "/Muebles3/silla4.webp" },
      { id: "P-5", name: "Azul con Cojín", swatch: "#0B265E", imageUrl: "/Muebles3/silla5.webp" },
      { id: "P-6", name: "Blanco Perla (Set 4)", swatch: "#EFEFEF", imageUrl: "/Muebles3/silla6.webp" },
      { id: "P-7", name: "Blanco Marfil", swatch: "#FAFAFA", imageUrl: "/Muebles3/silla7.webp" },
      { id: "P-8", name: "Amarillo Mostaza", swatch: "#DCA71B", imageUrl: "/Muebles3/silla8.webp" },
      { id: "P-9", name: "Turquesa Vivo", swatch: "#009C9C", imageUrl: "/Muebles3/silla9.webp" },
    ],
  },
  {
    id: "sillones-orejeros",
    name: "Sillones Orejeros",
    tagline: "Acento clásico capitoné",
    price: 1300,
    description:
      "Diseño clásico de acento, respaldo alto capitoné, brazos curvados y tela aterciopelada. Una pieza atemporal que aporta carácter y elegancia.",
    coverImage: "/Muebles4/Asilla1.webp",
    styles: [
      { id: "O-1", name: "Celeste Vibrante", swatch: "#00BFFF", imageUrl: "/Muebles4/Asilla1.webp" },
      { id: "O-2", name: "Amarillo Sol", swatch: "#FFD700", imageUrl: "/Muebles4/Asilla2.webp" },
      { id: "O-3", name: "Gris Perla Azulado", swatch: "#A9B0B8", imageUrl: "/Muebles4/Asilla3.webp" },
      { id: "O-4", name: "Fucsia Real", swatch: "#E0115F", imageUrl: "/Muebles4/Asilla4.webp" },
    ],
  },
  {
    id: "sofas-cama",
    name: "Sofás Cama / Futones",
    tagline: "Función clic-clac",
    price: 2000,
    description:
      "Diseño funcional clic-clac sin brazos, acolchado capitoné en cuadros. Convierte cualquier ambiente en una habitación de huéspedes en segundos.",
    coverImage: "/Muebles5/sofa1.webp",
    styles: [
      { id: "F-1", name: "Azul Rey", swatch: "#0000CD", imageUrl: "/Muebles5/sofa1.webp" },
      { id: "F-2", name: "Gris Oscuro Antracita", swatch: "#36454F", imageUrl: "/Muebles5/sofa2.webp" },
      { id: "F-3", name: "Beige Capitoné", swatch: "#D3D3CB", imageUrl: "/Muebles5/sofa3.webp" },
      { id: "F-4", name: "Gris Claro Liso", swatch: "#DCDCDC", imageUrl: "/Muebles5/sofa4.webp" },
    ],
  },
  {
    id: "mecedoras",
    name: "Mecedoras",
    tagline: "Balanceo artesanal",
    price: 1500,
    description:
      "Respaldo alto, base curva de madera para balanceo suave, detalles en capitoné. Confort terapéutico con estética premium.",
    coverImage: "/Muebles6/Mesedora1.webp",
    styles: [
      { id: "M-1", name: "Gris Texturizado", swatch: "#8A8D8F", imageUrl: "/Muebles6/Mesedora1.webp" },
      { id: "M-2", name: "Blanco Marfil", swatch: "#F4F4F0", imageUrl: "/Muebles6/Mesedora2.webp" },
      { id: "M-3", name: "Gris Plomo Oscuro", swatch: "#606263", imageUrl: "/Muebles6/Mesedora3.webp" },
    ],
  },
  {
    id: "sofas-modulares-premium",
    name: "Sofás Modulares Premium",
    tagline: "Curvas en bouclé",
    price: 4800,
    description:
      "Textura tipo bouclé, líneas curvas, completamente tapizado, incluye ottoman y cojines. Una declaración escultórica de confort contemporáneo.",
    coverImage: "/Muebles7/tapisado1.webp",
    styles: [
      { id: "S-1", name: "Bouclé Marfil (Set 1)", swatch: "#F1E7D2", imageUrl: "/Muebles7/tapisado1.webp" },
      { id: "S-2", name: "Bouclé Marfil (Set 2)", swatch: "#E8DCC4", imageUrl: "/Muebles7/tapisado2.webp" },
    ],
  },
  {
    id: "comedores-elegantes",
    name: "Comedores Elegantes",
    tagline: "Vidrio & sillas tapizadas",
    price: 8000,
    description:
      "Mesas con cubierta de vidrio, bases modernas, sillas tapizadas de respaldo alto para 6 a 8 personas. Geometría limpia para anfitriones exigentes.",
    coverImage: "/Muebles8/comedor1.webp",
    styles: [
      { id: "C-1", name: "Base Nogal y Crema", swatch: "#E5DFD3", imageUrl: "/Muebles8/comedor1.webp" },
      { id: "C-2", name: "Sillas Blancas Lino", swatch: "#EAE8E3", imageUrl: "/Muebles8/comedor2.webp" },
      { id: "C-3", name: "Sillas Marrón Oscuro", swatch: "#3A2A22", imageUrl: "/Muebles8/comedor3.webp" },
    ],
  },
  {
    id: "comedores-premium-madera",
    name: "Comedores Premium Madera",
    tagline: "Madera maciza para 8",
    price: 8800,
    description:
      "Diseño robusto para 8 personas, madera maciza con centros de vidrio, sillas con asiento tapizado. Una mesa hecha para reunir generaciones.",
    coverImage: "/Muebles9/Acomedor1.webp",
    styles: [
      { id: "W-1", name: "Nogal Sillas Curvas", swatch: "#4A3018", imageUrl: "/Muebles9/Acomedor1.webp" },
      { id: "W-2", name: "Roble Sillas Caladas", swatch: "#3E2723", imageUrl: "/Muebles9/Acomedor2.webp" },
      { id: "W-3", name: "Caoba Oscura Recta", swatch: "#2D1A11", imageUrl: "/Muebles9/Acomedor3.webp" },
      { id: "W-4", name: "Roble Respaldo Sólido", swatch: "#5C3A21", imageUrl: "/Muebles9/Acomedor4.webp" },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);