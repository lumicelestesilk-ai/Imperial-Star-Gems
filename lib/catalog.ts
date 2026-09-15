export type ShapeKey =
  | "Round"
  | "Princess"
  | "Cushion"
  | "Emerald"
  | "Oval"
  | "Pear"
  | "Marquise"
  | "Radiant"
  | "Asscher"
  | "Heart"
  | "Trillion";

export type DiamondStone = {
  sku: string;
  shape: ShapeKey;
  origin: "Natural" | "Lab-grown";
  carat: string;
  color: string;
  clarity: string;
  cut: string;
  certificate: "GIA" | "IGI";
  thumbnail: string;
  note: string;
};

export const shapeList: { name: ShapeKey; summary: string }[] = [
  { name: "Round", summary: "Classic brilliance and balanced fire." },
  { name: "Princess", summary: "Crisp corners with vibrant sparkle." },
  { name: "Cushion", summary: "Soft edges, romantic proportions." },
  { name: "Emerald", summary: "Step cuts for clarity and line." },
  { name: "Oval", summary: "Lengthened profile with luminous spread." },
  { name: "Pear", summary: "Elegant silhouette with a pointed end." },
  { name: "Marquise", summary: "A refined, elongated look." },
  { name: "Radiant", summary: "A modern square with softened corners." },
  { name: "Asscher", summary: "Crisp geometry and vintage appeal." },
  { name: "Heart", summary: "Distinctive, unmistakable symmetry." },
  { name: "Trillion", summary: "A sharp facet pattern with dynamic light." },
];

export const naturalStones: DiamondStone[] = [
  {
    sku: "ISG-RD-N-10234",
    shape: "Round",
    origin: "Natural",
    carat: "1.02 ct",
    color: "D",
    clarity: "VVS1",
    cut: "Very Good",
    certificate: "GIA",
    thumbnail:
      "radial-gradient(circle at 30% 30%, #ecf7ff 0%, #d3dfe7 28%, #a1b5c2 52%, #6d7f8d 100%)",
    note: "Bright, balanced and strongly returning in the body.",
  },
  {
    sku: "ISG-OV-N-10461",
    shape: "Oval",
    origin: "Natural",
    carat: "1.41 ct",
    color: "E",
    clarity: "VS2",
    cut: "Excellent",
    certificate: "IGI",
    thumbnail:
      "radial-gradient(circle at 20% 20%, #f2f7ff 0%, #d9e5eb 26%, #9fb9ca 50%, #718194 100%)",
    note: "Longer profile with even sparkle across the table.",
  },
  {
    sku: "ISG-PR-N-10877",
    shape: "Princess",
    origin: "Natural",
    carat: "1.18 ct",
    color: "F",
    clarity: "VS1",
    cut: "Ideal",
    certificate: "GIA",
    thumbnail:
      "radial-gradient(circle at 40% 20%, #edf5fb 0%, #dfe9ef 32%, #c0ccd5 58%, #7f8ea0 100%)",
    note: "Crisp corners and high scintillation across the crown.",
  },
  {
    sku: "ISG-EM-N-11195",
    shape: "Emerald",
    origin: "Natural",
    carat: "2.03 ct",
    color: "G",
    clarity: "SI1",
    cut: "Very Good",
    certificate: "GIA",
    thumbnail:
      "radial-gradient(circle at 25% 30%, #f5f9fb 0%, #dce5eb 25%, #becdd7 54%, #8798a6 100%)",
    note: "A broad face with excellent clarity and stepped brilliance.",
  },
];

export const labStones: DiamondStone[] = [
  {
    sku: "ISG-OV-L-40871",
    shape: "Oval",
    origin: "Lab-grown",
    carat: "1.51 ct",
    color: "F",
    clarity: "VVS2",
    cut: "Excellent",
    certificate: "IGI",
    thumbnail:
      "radial-gradient(circle at 35% 35%, #edf7ff 0%, #dfeaf0 25%, #b8cfd9 56%, #7d8b9d 100%)",
    note: "High spread and vivid sparkle in a clean, controlled color grade.",
  },
  {
    sku: "ISG-PE-L-40620",
    shape: "Pear",
    origin: "Lab-grown",
    carat: "1.22 ct",
    color: "E",
    clarity: "VS1",
    cut: "Ideal",
    certificate: "GIA",
    thumbnail:
      "radial-gradient(circle at 35% 25%, #f3f6fb 0%, #dfeaf1 30%, #becfe0 55%, #7e8f9a 100%)",
    note: "Balanced silhouette with excellent light return at the tip.",
  },
  {
    sku: "ISG-RD-L-40234",
    shape: "Round",
    origin: "Lab-grown",
    carat: "0.92 ct",
    color: "D",
    clarity: "VS2",
    cut: "Ideal",
    certificate: "GIA",
    thumbnail:
      "radial-gradient(circle at 30% 30%, #f8fbff 0%, #dfeaf2 27%, #c2d0db 52%, #73859b 100%)",
    note: "A compact yet luminous round with crisp fire and scintillation.",
  },
  {
    sku: "ISG-RA-L-41087",
    shape: "Radiant",
    origin: "Lab-grown",
    carat: "1.76 ct",
    color: "G",
    clarity: "VS1",
    cut: "Very Good",
    certificate: "IGI",
    thumbnail:
      "radial-gradient(circle at 20% 30%, #eef7fb 0%, #d6e4eb 30%, #b4c4d1 54%, #7d8ca0 100%)",
    note: "Broader face and modern line work with stable, even brilliance.",
  },
];
