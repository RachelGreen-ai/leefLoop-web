export type PlantPulseRegion = {
  id: string;
  name: string;
  shortName: string;
  zone: string;
  description: string;
};

export type PlantPulseSource = {
  label: string;
  publisher: string;
  url: string;
  observedAt: string;
};

export type PlantPulseSignal = {
  id: string;
  plant: string;
  regionId: string;
  rank: number;
  attention: "Strong signal" | "Worth watching" | "Seasonal now";
  momentum: "Rising" | "Steady" | "Seasonal";
  whyNow: string;
  careNote: string;
  commonMistake: string;
  contentAngle: string;
  guideSlug?: string;
  sourceBadges: string[];
  sources: PlantPulseSource[];
  updatedAt: string;
};

export const plantPulseRegions: PlantPulseRegion[] = [
  {
    id: "bay-area",
    name: "Bay Area / San Jose",
    shortName: "Bay Area",
    zone: "Zone 9b and nearby microclimates",
    description:
      "Patio trees, herbs, citrus, and container plants shaped by dry afternoons and small-space gardens.",
  },
  {
    id: "southern-california",
    name: "Southern California",
    shortName: "SoCal",
    zone: "Zones 9-10",
    description:
      "Container fruit, drought-aware ornamentals, warm-season herbs, and balcony-friendly edible plants.",
  },
  {
    id: "central-texas",
    name: "Central Texas / Austin",
    shortName: "Central Texas",
    zone: "Zones 8b-9a",
    description:
      "Heat-aware planting, fall-garden timing, tough herbs, and practical protection for tender starts.",
  },
  {
    id: "indoor-plants",
    name: "Indoor plants",
    shortName: "Indoor plants",
    zone: "Light, humidity, room temperature, and pot drainage",
    description:
      "Potted houseplants shaped by window direction, watering rhythm, pets, humidity, and small-space style.",
  },
];

export const plantPulseSignals: PlantPulseSignal[] = [
  {
    id: "indoor-orchid",
    plant: "Phalaenopsis orchids",
    regionId: "indoor-plants",
    rank: 98,
    attention: "Strong signal",
    momentum: "Steady",
    whyNow:
      "Costco's easy-care indoor plant collection currently leads with a Phalaenopsis Orchid Duo and a deep trail of customer attention.",
    careNote: "Check the roots and potting bark before watering; the decorative outer pot can hide standing water.",
    commonMistake: "Adding a small splash on a fixed schedule without checking the root zone.",
    contentAngle: "A grocery or warehouse orchid came home: how to read roots before watering.",
    sourceBadges: ["Costco", "Indoor", "Care questions"],
    sources: [
      {
        label: "Easy to grow indoor plants",
        publisher: "Costco",
        url: "https://www.costco.com/opt/easy-to-grow-indoor-plants",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
  {
    id: "indoor-monstera",
    plant: "Monstera",
    regionId: "indoor-plants",
    rank: 96,
    attention: "Strong signal",
    momentum: "Steady",
    whyNow:
      "Home Depot currently carries both familiar trellised Monstera and the collectible Thai Constellation, keeping beginner and enthusiast questions close together.",
    careNote: "Read soil moisture first, then light, room conditions, roots, and pests.",
    commonMistake: "Treating every curled leaf as a request for more water.",
    contentAngle: "Monstera leaves are curling: five calm checks before changing the routine.",
    guideSlug: "monstera-leaves-curling",
    sourceBadges: ["Home Depot", "Indoor", "Current guide"],
    sources: [
      {
        label: "Monstera Thai Constellation",
        publisher: "The Home Depot",
        url: "https://www.homedepot.com/p/341396770",
        observedAt: "2026-07-20",
      },
      {
        label: "Monstera on trellis",
        publisher: "The Home Depot",
        url: "https://www.homedepot.com/p/315994915",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
  {
    id: "bay-area-olive-tree",
    plant: "Olive trees",
    regionId: "bay-area",
    rank: 92,
    attention: "Strong signal",
    momentum: "Seasonal",
    whyNow:
      "A live Alder & Oak olive tree is visible in Costco's current online plant catalog, making first-week sun and drainage questions timely for California patios.",
    careNote: "Give strong sun, fast drainage, and a quiet first week before making several changes.",
    commonMistake: "Watering every day because a newly moved tree looks stressed.",
    contentAngle: "A new olive tree came home: first-week care for a sunny patio.",
    guideSlug: "new-olive-tree-first-week-care",
    sourceBadges: ["Costco", "California", "Current guide"],
    sources: [
      {
        label: "Alder & Oak Olive Tree",
        publisher: "Costco",
        url: "https://www.costco.com/p/-/alder-oak-olive-tree/4000417874",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
  {
    id: "socal-patio-citrus",
    plant: "Patio citrus and kumquat",
    regionId: "southern-california",
    rank: 86,
    attention: "Worth watching",
    momentum: "Seasonal",
    whyNow:
      "Kumquat and other useful patio trees are appearing alongside houseplants in Costco's easy-grow collection, a natural bridge between ornament and harvest.",
    careNote: "Keep the root zone draining freely and acclimate the plant gradually to intense afternoon sun.",
    commonMistake: "Leaving a nursery pot inside a cachepot where irrigation water collects.",
    contentAngle: "A patio citrus tree that can move from flower and fragrance to the kitchen.",
    sourceBadges: ["Costco", "SoCal", "Farm to table"],
    sources: [
      {
        label: "Easy to grow indoor plants",
        publisher: "Costco",
        url: "https://www.costco.com/opt/easy-to-grow-indoor-plants",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
  {
    id: "bay-area-basil",
    plant: "Basil",
    regionId: "bay-area",
    rank: 84,
    attention: "Seasonal now",
    momentum: "Seasonal",
    whyNow:
      "Basil is in its generous summer stretch, when frequent picking and early flower removal can turn one small pot into repeated harvests.",
    careNote: "Cut above a pair of leaves, keep the soil evenly moist, and store cut stems at room temperature.",
    commonMistake: "Picking only the largest bottom leaves while the main stems grow tall and flower.",
    contentAngle: "The first basil harvest: how one cut helps the plant branch.",
    guideSlug: "basil-first-harvest",
    sourceBadges: ["Season", "Extension", "Current guide"],
    sources: [
      {
        label: "Basil, A Summer Favorite",
        publisher: "Penn State Extension",
        url: "https://extension.psu.edu/basil-a-summer-favorite",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
  {
    id: "central-texas-fall-tomato",
    plant: "Fall tomato starts",
    regionId: "central-texas",
    rank: 82,
    attention: "Seasonal now",
    momentum: "Rising",
    whyNow:
      "Texas A&M's July checklist says fall-garden preparation begins now, with tomato transplants going in around late July or early August under careful heat protection.",
    careNote: "Prepare moist, mulched soil and temporary afternoon shade before a tender transplant goes outside.",
    commonMistake: "Over-fertilizing a heat-stressed plant or transplanting into hot, dry soil.",
    contentAngle: "Why Austin gardeners prepare fall tomatoes in the middle of summer.",
    sourceBadges: ["Texas A&M", "Austin", "July timing"],
    sources: [
      {
        label: "July gardening checklist for Austin",
        publisher: "Texas A&M AgriLife Extension, Travis County",
        url: "https://travis-tx.tamu.edu/about-2/horticulture/monthly-gardening-calendar-for-austin-area/july-gardening-checklist-for-austin-and-central-texas/",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
  {
    id: "central-texas-rosemary",
    plant: "Rosemary",
    regionId: "central-texas",
    rank: 74,
    attention: "Worth watching",
    momentum: "Steady",
    whyNow:
      "Rosemary remains a useful heat-aware herb for Central Texas, where Texas A&M notes that adapted varieties prefer full sun and good drainage.",
    careNote: "Prioritize drainage, sun, and restraint with water.",
    commonMistake: "Treating rosemary like basil and keeping the soil continuously wet.",
    contentAngle: "Rosemary likes a lighter hand than most kitchen herbs.",
    sourceBadges: ["Texas A&M", "Herb garden", "Heat-aware"],
    sources: [
      {
        label: "Herbs for Central Texas",
        publisher: "Texas A&M AgriLife Extension, Travis County",
        url: "https://travis-tx.tamu.edu/about-2/horticulture/edible-gardens-for-austin/herbs-for-central-texas/",
        observedAt: "2026-07-20",
      },
    ],
    updatedAt: "2026-07-20",
  },
];

export function getSignalsForRegion(regionId: string) {
  return plantPulseSignals.filter((signal) => signal.regionId === regionId);
}

export function getTopSignals(limit = 3) {
  return [...plantPulseSignals].sort((a, b) => b.rank - a.rank).slice(0, limit);
}

export function getRegionName(regionId: string) {
  return plantPulseRegions.find((region) => region.id === regionId)?.shortName ?? regionId;
}
