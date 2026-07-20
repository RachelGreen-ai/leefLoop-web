import sourceSnapshot from "../../content-engine/snapshots/latest-source-check.json";

type RetailProduct = {
  name: string;
  url: string;
  sku: string | null;
};

type SourceCheck = {
  id: string;
  publisher: string;
  productCount?: number;
  products?: RetailProduct[];
};

const checks = sourceSnapshot.checks as unknown as SourceCheck[];
const costcoCheck = checks.find((check) => check.id === "costco-easy-indoor-plants");

const featureTerms = [
  "Phalaenopsis Orchid Duo",
  "Peace Lily",
  "Monstera Esqueleto",
  "Golden Pothos",
  "Snake Plant Houseplant in Decor",
  "Fiddle Leaf Fig",
  "Kumquat Nagami",
  "Fruiting Olive Tree",
];

export const costcoPlantFinds = costcoCheck?.products ?? [];
export const featuredCostcoFinds = featureTerms
  .map((term) => costcoPlantFinds.find((product) => product.name.includes(term)))
  .filter((product): product is RetailProduct => Boolean(product));
export const costcoFindCount = costcoCheck?.productCount ?? costcoPlantFinds.length;
export const retailerSnapshotDate = sourceSnapshot.generatedAt;
