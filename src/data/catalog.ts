import heroLiving from "@/assets/hero-living.jpg";
import catChairs from "@/assets/cat-chairs.jpg";
import catSofas from "@/assets/cat-sofas.jpg";
import catTables from "@/assets/cat-tables.jpg";
import catBeds from "@/assets/cat-beds.jpg";
import catLighting from "@/assets/cat-lighting.jpg";
import catStorage from "@/assets/cat-storage.jpg";

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

/* ---------- Types ---------- */
export type Style = {
  id: string;
  name: string;
  swatch: string; // hex/HSL color for the chip
  imageUrl: string;
  price: number;
  description: string;
};

export type Product = {
  id: string;
  categoryId: string;
  name: string;
  collection: string;
  basePrice: number;
  baseImage: string;
  shortDescription: string;
  styles: Style[];
};

export type Category = {
  id: string;
  name: string;
  tagline: string;
  image: string;
};

export const CURRENCY = "€";

/* ---------- Categories ---------- */
export const categories: Category[] = [
  { id: "sofas",    name: "Sofás",         tagline: "Confort esculpido",       image: catSofas },
  { id: "chairs",   name: "Sillas",        tagline: "Asiento como escultura",  image: catChairs },
  { id: "tables",   name: "Mesas",         tagline: "Centros de gravedad",     image: catTables },
  { id: "beds",     name: "Camas",         tagline: "Reposo de autor",         image: catBeds },
  { id: "lighting", name: "Iluminación",   tagline: "Atmósfera tallada",       image: catLighting },
  { id: "storage",  name: "Almacenaje",    tagline: "Arquitectura interior",   image: catStorage },
];

/* ---------- Products ---------- */
export const products: Product[] = [
  {
    id: "ares",
    categoryId: "sofas",
    name: "Sofá Modular «Ares»",
    collection: "Colección Olympus",
    basePrice: 4280,
    baseImage: aresFabric,
    shortDescription:
      "Una arquitectura modular de líneas serenas, hecha a mano en Italia.",
    styles: [
      {
        id: "fabric",
        name: "Lino Crema",
        swatch: "#E8DCC4",
        imageUrl: aresFabric,
        price: 4280,
        description:
          "Tapizado en lino italiano de hilo grueso color crema. Estructura de roble macizo y patas de acero negro mate. Ideal para espacios luminosos y minimalistas.",
      },
      {
        id: "velvet",
        name: "Terciopelo Esmeralda",
        swatch: "#0F6E5A",
        imageUrl: aresVelvet,
        price: 4980,
        description:
          "Terciopelo de algodón teñido en esmeralda profunda. Cojines de pluma de oca y refuerzo lumbar oculto. Una declaración de carácter para ambientes íntimos.",
      },
      {
        id: "leather",
        name: "Cuero Coñac",
        swatch: "#8B4A2B",
        imageUrl: aresLeather,
        price: 6450,
        description:
          "Cuero italiano de plena flor curtido al vegetal, con pátina natural que envejece con el tiempo. Costura a mano en hilo encerado.",
      },
    ],
  },
  {
    id: "hera",
    categoryId: "sofas",
    name: "Sofá Chaiselongue «Hera»",
    collection: "Colección Olympus",
    basePrice: 3690,
    baseImage: heraLinen,
    shortDescription:
      "Silueta curva continua que invita al reposo prolongado.",
    styles: [
      {
        id: "linen",
        name: "Lino Niebla",
        swatch: "#B7BAC1",
        imageUrl: heraLinen,
        price: 3690,
        description:
          "Lino belga lavado en tono niebla. Forma curva continua tallada sobre estructura de haya. Patas en negro grafito.",
      },
      {
        id: "velvet",
        name: "Terciopelo Medianoche",
        swatch: "#1B2A4E",
        imageUrl: heraVelvet,
        price: 4150,
        description:
          "Terciopelo azul medianoche con reflejos índigo. Patas torneadas con remates en latón pulido. Una pieza de salón cinematográfica.",
      },
    ],
  },
  {
    id: "atlas",
    categoryId: "chairs",
    name: "Butaca «Atlas»",
    collection: "Colección Heritage",
    basePrice: 1890,
    baseImage: atlasLeather,
    shortDescription:
      "Inspirada en el modernismo escandinavo, ensamblada artesanalmente.",
    styles: [
      {
        id: "leather",
        name: "Cuero Caramelo",
        swatch: "#C0793E",
        imageUrl: atlasLeather,
        price: 1890,
        description:
          "Estructura de nogal americano con cojines en cuero curtido natural color caramelo. Suaviza con el uso, perfecta para lectura prolongada.",
      },
      {
        id: "velvet",
        name: "Terciopelo Bosque",
        swatch: "#1F4233",
        imageUrl: atlasVelvet,
        price: 1690,
        description:
          "Cojines en terciopelo verde bosque sobre estructura de nogal. Combinación cálida y contemporánea con identidad de mediados de siglo.",
      },
    ],
  },
  {
    id: "orion",
    categoryId: "tables",
    name: "Mesa Comedor «Orión»",
    collection: "Colección Cosmos",
    basePrice: 3250,
    baseImage: orionMarble,
    shortDescription:
      "Tapa circular sobre pedestal de bronce cepillado. Asiento para seis.",
    styles: [
      {
        id: "marble",
        name: "Mármol Carrara",
        swatch: "#EDEAE3",
        imageUrl: orionMarble,
        price: 3250,
        description:
          "Tapa de mármol Carrara italiano de 28 mm con canto biselado. Pedestal de bronce cepillado macizo. Una pieza heredable.",
      },
      {
        id: "wood",
        name: "Nogal Macizo",
        swatch: "#5A2F1E",
        imageUrl: orionWood,
        price: 2890,
        description:
          "Tapa de nogal americano macizo con veteado simétrico. Acabado al aceite natural. Cálida y sólida bajo cualquier luz.",
      },
    ],
  },
  {
    id: "luna",
    categoryId: "beds",
    name: "Cama «Luna»",
    collection: "Colección Nocturne",
    basePrice: 3890,
    baseImage: lunaBoucle,
    shortDescription:
      "Cabecero envolvente de gran altura con tapizado capitoné.",
    styles: [
      {
        id: "boucle",
        name: "Bouclé Arena",
        swatch: "#D9C7A2",
        imageUrl: lunaBoucle,
        price: 3890,
        description:
          "Cabecero de 1,8 m en bouclé arena con tachuelas de bronce. Estructura reforzada y somier integrado.",
      },
      {
        id: "velvet",
        name: "Terciopelo Burdeos",
        swatch: "#6E1A2E",
        imageUrl: lunaVelvet,
        price: 4290,
        description:
          "Terciopelo borgoña intenso con capitoné profundo y remaches plateados. Una atmósfera teatral para el dormitorio principal.",
      },
    ],
  },
  {
    id: "helios",
    categoryId: "lighting",
    name: "Lámpara «Helios»",
    collection: "Colección Solis",
    basePrice: 1290,
    baseImage: heliosBrass,
    shortDescription:
      "Suspensión multibrazo con seis pantallas cónicas orientables.",
    styles: [
      {
        id: "brass",
        name: "Latón Cepillado",
        swatch: "#B08A4A",
        imageUrl: heliosBrass,
        price: 1290,
        description:
          "Estructura y pantallas en latón cepillado. Brazos articulados que permiten dirigir la luz. Bombillas LED cálidas incluidas.",
      },
      {
        id: "black",
        name: "Negro Mate",
        swatch: "#1A1A1A",
        imageUrl: heliosBlack,
        price: 1190,
        description:
          "Versión grafito en acero pintado al horno con interior dorado. Contraste dramático para techos altos.",
      },
    ],
  },
  {
    id: "vesta",
    categoryId: "storage",
    name: "Armario «Vesta»",
    collection: "Colección Heritage",
    basePrice: 2450,
    baseImage: vestaWalnut,
    shortDescription:
      "Armario alto de dos puertas con tiradores artesanales en bronce.",
    styles: [
      {
        id: "walnut",
        name: "Nogal Natural",
        swatch: "#6B3A20",
        imageUrl: vestaWalnut,
        price: 2450,
        description:
          "Nogal macizo con veta vertical seleccionada. Interior en cedro perfumado. Tiradores fundidos a mano en bronce.",
      },
      {
        id: "oak",
        name: "Roble Negro",
        swatch: "#0E0E10",
        imageUrl: vestaOak,
        price: 2350,
        description:
          "Roble teñido en negro profundo con tiradores en latón pulido. Líneas clásicas reinterpretadas con un acabado contemporáneo.",
      },
    ],
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const getProductsByCategory = (id: string) =>
  products.filter((p) => p.categoryId === id);
export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (n: number) =>
  `${CURRENCY}${n.toLocaleString("es-ES")}`;
