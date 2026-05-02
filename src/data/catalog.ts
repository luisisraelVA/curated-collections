// =====================================================================
// MUEBLERÍA TOKIO — Catálogo de productos
// ---------------------------------------------------------------------
// 👉 Para reemplazar las imágenes con tus propias URLs:
//    Cambia el valor de `imageUrl` en cada estilo (ej: "/images/cat1-estilo1.jpg").
//    Cada categoría es un "producto" con varias variaciones de estilo.
// =====================================================================

import heroLiving from "@/assets/hero-living.jpg";

import aresFabric from "@/assets/ares-fabric.jpg";
import aresVelvet from "@/assets/ares-velvet.jpg";
import aresLeather from "@/assets/ares-leather.jpg";
import heraLinen from "@/assets/hera-linen.jpg";
import heraVelvet from "@/assets/hera-velvet.jpg";
import atlasLeather from "@/assets/atlas-leather.jpg";
import atlasVelvet from "@/assets/atlas-velvet.jpg";
import orionMarble from "@/assets/orion-marble.jpg";
import orionWood from "@/assets/orion-wood.jpg";
import lunaBoucle from "@/assets/luna-boucle.jpg";
import lunaVelvet from "@/assets/luna-velvet.jpg";
import heliosBrass from "@/assets/helios-brass.jpg";
import heliosBlack from "@/assets/helios-black.jpg";
import vestaWalnut from "@/assets/vesta-walnut.jpg";
import vestaOak from "@/assets/vesta-oak.jpg";

export { heroLiving };

/* ---------- Tipos ---------- */
export type Style = {
  id: string;
  name: string;
  swatch: string;          // color del chip (hex/HSL/css color)
  imageUrl: string;        // 👉 reemplazar con tu URL: ej "/images/cat1-estilo1.jpg"
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

/* ---------- Pool de imágenes placeholder (reemplazar) ---------- */
const POOL = [
  aresFabric, aresVelvet, aresLeather,
  heraLinen, heraVelvet,
  atlasLeather, atlasVelvet,
  orionMarble, orionWood,
  lunaBoucle, lunaVelvet,
  heliosBrass, heliosBlack,
  vestaWalnut, vestaOak,
];
const pick = (i: number) => POOL[i % POOL.length];

/* ---------- Helper para generar variaciones ---------- */
const makeStyles = (
  prefix: string,
  variants: { name: string; swatch: string }[],
): Style[] =>
  variants.map((v, i) => ({
    id: `${prefix}-${i + 1}`,
    name: v.name,
    swatch: v.swatch,
    imageUrl: pick(prefix.charCodeAt(0) + i), // placeholder — reemplazar
  }));

/* ---------- Categorías (9) ---------- */
export const categories: Category[] = [
  {
    id: "juegos-living",
    name: "Juegos de Living",
    tagline: "Sala completa en L",
    price: 6800,
    description:
      "Sofás seccionales en \"L\", incluye cojines, mesa de centro y puffs. Tapicería premium, estructura reforzada y confort de larga duración.",
    coverImage: aresFabric,
    styles: makeStyles("L", [
      { name: "Lino Crema",          swatch: "#E8DCC4" },
      { name: "Terciopelo Esmeralda", swatch: "#0F6E5A" },
      { name: "Cuero Coñac",          swatch: "#8B4A2B" },
      { name: "Gris Pizarra",         swatch: "#3F4750" },
      { name: "Beige Arena",          swatch: "#C9B79A" },
      { name: "Azul Petróleo",        swatch: "#1F3D4A" },
      { name: "Camel Tostado",        swatch: "#A8743E" },
      { name: "Verde Oliva",          swatch: "#566B3A" },
      { name: "Tabaco Profundo",      swatch: "#6B3A1E" },
      { name: "Negro Ébano",          swatch: "#171717" },
      { name: "Marfil Suave",         swatch: "#F1E7D2" },
      { name: "Burdeos",              swatch: "#6E1A2E" },
      { name: "Mostaza Dorado",       swatch: "#C9962E" },
      { name: "Topo Cálido",          swatch: "#897063" },
    ]),
  },
  {
    id: "salas-esquineras",
    name: "Salas Esquineras",
    tagline: "Modulares tipo U",
    price: 7800,
    description:
      "Salas modulares grandes tipo U con accesorios integrados como repisas y puffs. Ideal para espacios amplios y reuniones familiares prolongadas.",
    coverImage: heraLinen,
    styles: makeStyles("U", [
      { name: "Gris Carbón",      swatch: "#2E3338" },
      { name: "Beige Lino",       swatch: "#D7C8AE" },
      { name: "Verde Bosque",     swatch: "#1F4233" },
      { name: "Azul Medianoche",  swatch: "#1B2A4E" },
      { name: "Camel Suave",      swatch: "#B98C5C" },
      { name: "Topo Elegante",    swatch: "#7A6B5D" },
      { name: "Negro Mate",       swatch: "#0F0F11" },
    ]),
  },
  {
    id: "poltronas-individuales",
    name: "Poltronas Individuales",
    tagline: "Confort esculpido",
    price: 900,
    description:
      "Diseño curvo, tela aterciopelada de alta calidad, patas de madera natural. Pieza de acento ideal para complementar living, dormitorio o estudio.",
    coverImage: atlasVelvet,
    styles: makeStyles("P", [
      { name: "Verde Esmeralda",  swatch: "#0F6E5A" },
      { name: "Rosa Antiguo",     swatch: "#C29390" },
      { name: "Azul Cobalto",     swatch: "#1E3F8A" },
      { name: "Mostaza Vintage",  swatch: "#C9962E" },
      { name: "Gris Topo",        swatch: "#7A6B5D" },
      { name: "Crema Marfil",     swatch: "#F1E7D2" },
      { name: "Burdeos Profundo", swatch: "#6E1A2E" },
      { name: "Negro Aterciopelado", swatch: "#171717" },
    ]),
  },
  {
    id: "sillones-orejeros",
    name: "Sillones Orejeros",
    tagline: "Acento clásico capitoné",
    price: 1300,
    description:
      "Diseño clásico de acento, respaldo alto capitoné, brazos curvados y tela aterciopelada. Una pieza atemporal que aporta carácter y elegancia.",
    coverImage: lunaVelvet,
    styles: makeStyles("O", [
      { name: "Burdeos Real",     swatch: "#6E1A2E" },
      { name: "Verde Botánico",   swatch: "#2A5240" },
      { name: "Azul Marino",      swatch: "#1B2A4E" },
      { name: "Gris Plomo",       swatch: "#4A4F55" },
    ]),
  },
  {
    id: "sofas-cama",
    name: "Sofás Cama / Futones",
    tagline: "Función clic-clac",
    price: 2000,
    description:
      "Diseño funcional clic-clac sin brazos, acolchado capitoné en cuadros. Convierte cualquier ambiente en una habitación de huéspedes en segundos.",
    coverImage: heraVelvet,
    styles: makeStyles("F", [
      { name: "Gris Pizarra",   swatch: "#3F4750" },
      { name: "Beige Cálido",   swatch: "#C9B79A" },
      { name: "Azul Denim",     swatch: "#3A5A7A" },
      { name: "Verde Salvia",   swatch: "#7A8B6E" },
    ]),
  },
  {
    id: "mecedoras",
    name: "Mecedoras",
    tagline: "Balanceo artesanal",
    price: 1500,
    description:
      "Respaldo alto, base curva de madera para balanceo suave, detalles en capitoné. Confort terapéutico con estética premium.",
    coverImage: atlasLeather,
    styles: makeStyles("M", [
      { name: "Nogal & Beige",  swatch: "#6B3A20" },
      { name: "Roble & Gris",   swatch: "#A8814E" },
      { name: "Ébano & Negro",  swatch: "#0E0E10" },
    ]),
  },
  {
    id: "sofas-modulares-premium",
    name: "Sofás Modulares Premium",
    tagline: "Curvas en bouclé",
    price: 4800,
    description:
      "Textura tipo bouclé, líneas curvas, completamente tapizado, incluye ottoman y cojines. Una declaración escultórica de confort contemporáneo.",
    coverImage: lunaBoucle,
    styles: makeStyles("S", [
      { name: "Bouclé Arena",   swatch: "#D9C7A2" },
      { name: "Bouclé Marfil",  swatch: "#F1E7D2" },
    ]),
  },
  {
    id: "comedores-elegantes",
    name: "Comedores Elegantes",
    tagline: "Vidrio & sillas tapizadas",
    price: 8000,
    description:
      "Mesas con cubierta de vidrio, bases modernas, sillas tapizadas de respaldo alto para 6 a 8 personas. Geometría limpia para anfitriones exigentes.",
    coverImage: orionMarble,
    styles: makeStyles("C", [
      { name: "Vidrio & Negro",  swatch: "#0F0F11" },
      { name: "Vidrio & Bronce", swatch: "#B08A4A" },
      { name: "Vidrio & Blanco", swatch: "#EDEAE3" },
    ]),
  },
  {
    id: "comedores-premium-madera",
    name: "Comedores Premium Madera",
    tagline: "Madera maciza para 8",
    price: 8800,
    description:
      "Diseño robusto para 8 personas, madera maciza con centros de vidrio, sillas con asiento tapizado. Una mesa hecha para reunir generaciones.",
    coverImage: orionWood,
    styles: makeStyles("W", [
      { name: "Nogal Natural",   swatch: "#6B3A20" },
      { name: "Roble Claro",     swatch: "#A8814E" },
      { name: "Cerezo Oscuro",   swatch: "#5A2418" },
      { name: "Roble Negro",     swatch: "#0E0E10" },
    ]),
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
