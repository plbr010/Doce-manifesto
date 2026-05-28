export const WHATSAPP_MAIN =
  "https://wa.me/5532988191595?text=Olá!%20Vim%20pelo%20site%20da%20Doce%20Manifesto%20🍫✨";

export const WHATSAPP_NUMBER = "5532988191595";
export const INSTAGRAM = "https://instagram.com/doce_manifesto";
export const INSTAGRAM_HANDLE = "@doce_manifesto";

export const LOGO = "/logo.png";

/** Imagens locais — /public */
export const IMAGES = {
  hero: "/hero/hero-brownie.jpg",
  heroAccent: "/produtos/brownie-ninho.jpg",
  about: "/produtos/caixa-brownies.jpg",
  products: {
    brownieTradicional: "/produtos/brownie-tradicional.jpg",
    brownieNinho: "/produtos/brownie-ninho.jpg",
    copoFelicidade: "/produtos/copo-felicidade.jpg",
    brigadeiro: "/produtos/brigadeiro-gourmet.jpg",
    caixaBrownies: "/produtos/caixa-brownies.jpg",
  },
  gallery: [
    "/galeria/galeria-1.jpg",
    "/galeria/galeria-2.jpg",
    "/galeria/galeria-3.jpg",
    "/galeria/galeria-4.jpg",
    "/galeria/galeria-5.jpg",
    "/galeria/galeria-6.jpg",
  ],
} as const;

export type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  whatsapp: string;
  image: string;
  rating: number;
  bestseller?: boolean;
};

export const products: Product[] = [
  {
    id: "brownie-tradicional",
    name: "Brownie Tradicional",
    price: "R$ 9,90",
    description: "Brownie artesanal super chocolatudo e macio 🍫",
    whatsapp:
      "https://wa.me/5532988191595?text=Olá!%20Quero%20pedir%20o%20Brownie%20Tradicional%20🍫",
    image: IMAGES.products.brownieTradicional,
    rating: 4.9,
    bestseller: true,
  },
  {
    id: "brownie-ninho",
    name: "Brownie de Ninho",
    price: "R$ 12,90",
    description: "Brownie recheado com creme de leite Ninho ✨",
    whatsapp:
      "https://wa.me/5532988191595?text=Olá!%20Quero%20pedir%20o%20Brownie%20de%20Ninho%20✨",
    image: IMAGES.products.brownieNinho,
    rating: 5,
  },
  {
    id: "copo-felicidade",
    name: "Copo da Felicidade",
    price: "R$ 18,90",
    description: "Camadas cremosas e muito chocolate 😍",
    whatsapp:
      "https://wa.me/5532988191595?text=Olá!%20Quero%20pedir%20um%20Copo%20da%20Felicidade%20😍",
    image: IMAGES.products.copoFelicidade,
    rating: 4.8,
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro Gourmet",
    price: "R$ 4,50",
    description: "Brigadeiro premium feito artesanalmente 🍬",
    whatsapp:
      "https://wa.me/5532988191595?text=Olá!%20Quero%20pedir%20Brigadeiros%20Gourmet%20🍬",
    image: IMAGES.products.brigadeiro,
    rating: 4.9,
  },
  {
    id: "caixa-brownies",
    name: "Caixa de Brownies",
    price: "R$ 39,90",
    description: "Perfeita para presentear alguém especial 🎁",
    whatsapp:
      "https://wa.me/5532988191595?text=Olá!%20Quero%20pedir%20uma%20Caixa%20de%20Brownies%20🎁",
    image: IMAGES.products.caixaBrownies,
    rating: 5,
  },
];

/** Galeria sem instagramaveis3 (foto indesejada) */
export const galleryItems = [
  { src: IMAGES.gallery[0], alt: "Fatias de brownie gourmet com cobertura", layout: "tall" as const },
  { src: IMAGES.gallery[1], alt: "Doces artesanais Doce Manifesto", layout: "wide" as const },
  { src: IMAGES.gallery[2], alt: "Sobremesa gourmet especial", layout: "square" as const },
  { src: IMAGES.gallery[3], alt: "Brigadeiros gourmet na caixa", layout: "tall" as const },
  { src: IMAGES.gallery[4], alt: "Caixa de brownies para presente", layout: "square" as const },
  { src: IMAGES.gallery[5], alt: "Copo da felicidade em camadas", layout: "wide" as const },
];

export const differentials = [
  {
    title: "Produção artesanal",
    description: "Cada doce preparado à mão, com tempo e dedicação em cada detalhe.",
    icon: "sparkles" as const,
  },
  {
    title: "Ingredientes selecionados",
    description: "Chocolate nobre, cremes premium e matérias-primas de alta qualidade.",
    icon: "leaf" as const,
  },
  {
    title: "Atendimento personalizado",
    description: "Seu pedido tratado com carinho, do primeiro contato à entrega.",
    icon: "heart" as const,
  },
  {
    title: "Entrega rápida",
    description: "Freshness garantida — doces fresquinhos até você.",
    icon: "truck" as const,
  },
  {
    title: "Qualidade premium",
    description: "Sabor de confeitaria gourmet, experiência inesquecível.",
    icon: "award" as const,
  },
];

export const testimonials = [
  { name: "Mariana S.", text: "Melhor brownie da cidade 😍", rating: 5 },
  { name: "Camila R.", text: "Simplesmente perfeito — pedi de novo na mesma semana!", rating: 5 },
  { name: "Juliana M.", text: "Experiência incrível do pedido à entrega. Super recomendo!", rating: 5 },
  {
    name: "Ana Paula L.",
    text: "Presenteei minha mãe com a caixa de brownies. Ela amou! 🎁",
    rating: 5,
  },
];
