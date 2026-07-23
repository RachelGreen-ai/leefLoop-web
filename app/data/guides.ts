import type { GuideSummary, PlantGuide } from "./guide-types";
import { gardenPracticeGuides } from "./guides/garden-practice";
import { culturalHomeGuides } from "./guides/cultural-homes";
import { retailRescueGuides } from "./guides/retail-rescue";
import { retailFindGuides } from "./guides/retail-finds";
import { seasonalGuides } from "./guides/seasonal";
import { specialtyCareGuides } from "./guides/specialty-care";
import { succulentBasicsGuides } from "./guides/succulent-basics";

export type {
  GuideFaq,
  GuidePick,
  GuidePickList,
  GuideSection,
  GuideSource,
  GuideSummary,
  PlantGuide,
} from "./guide-types";

export const guides: PlantGuide[] = [
  {
    slug: "new-olive-tree-first-week-care",
    category: "Local find",
    tags: ["Olive tree", "Costco plants", "First-week care", "Container trees"],
    aliases: ["Costco olive tree", "Potted olive tree", "Fruiting olive tree"],
    title: "A new olive tree came home. Here is what to do in the first week.",
    shortTitle: "New olive tree: first-week care",
    dek: "Sun, drainage, and a little patience matter more than a complicated shopping list.",
    answer:
      "Put a new olive tree in the brightest suitable place you have, make sure water can leave the pot freely, and check the soil before watering again. Give it several quiet days to adjust before repotting unless the pot is damaged, waterlogged, or severely root-bound.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "6 min read",
    place: "Patios and sunny gardens",
    season: "Warm-season care",
    image:
      "https://images.unsplash.com/photo-1591122523233-22037c1dec9f?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 58%",
    imageAlt: "A young potted tree in a bright garden setting",
    firstChecks: [
      "Find the drainage holes and make sure they are open.",
      "Give the tree full sun, but increase exposure gradually if it came from a covered aisle.",
      "Feel the soil below the surface before adding water.",
    ],
    sections: [
      {
        id: "first-thirty-minutes",
        heading: "The first thirty minutes",
        paragraphs: [
          "Set the pot down somewhere bright and sheltered from strong wind. Remove decorative wrapping or anything that traps water around the nursery pot. Then look underneath: a healthy container needs a clear path for water to drain.",
          "Do not add fertilizer on arrival. A moved plant may droop or drop a few leaves while it adjusts, and extra feeding does not solve transition stress.",
        ],
        callout: "The kindest first move is usually observation, not intervention.",
      },
      {
        id: "light",
        heading: "Give it the sun an olive expects",
        paragraphs: [
          "Olive trees are full-sun plants. Costco's current Alder & Oak olive listing specifies full sun and USDA zones 8-11, while UC guidance describes olives as well suited to hot, dry summers and mild winters.",
          "If the tree was displayed under a roof or shade cloth, increase direct sun over several days. A sudden move into intense afternoon sun can scorch leaves even on a sun-loving plant.",
        ],
      },
      {
        id: "water",
        heading: "Water by soil, not by calendar",
        paragraphs: [
          "Push a finger a couple of inches into the mix. If it still feels cool and moist, wait. When the upper mix has dried, water slowly until it drains from the bottom, then empty the saucer. Container olives need regular attention because their root zone is limited, but constantly wet roots invite trouble.",
          "UC IPM calls careful soil-water management the foundation for preventing olive root and crown rot. The practical translation is simple: avoid frequent saturation and never let the pot stand in water.",
        ],
      },
      {
        id: "repotting",
        heading: "Should you repot it right away?",
        paragraphs: [
          "Usually, wait a few days. Repot sooner if the container has no drainage, the root ball smells sour, water cannot enter the mix, or thick roots circle tightly with almost no growing medium left.",
          "Choose a stable pot only a little wider than the current root ball and use a well-draining container mix. Gravel at the bottom does not improve drainage; UC guidance warns that it can leave water perched in the mix above it.",
        ],
        items: [
          "Keep the trunk at the same depth it was growing before.",
          "Cover the drainage hole with mesh, not a solid layer.",
          "Water once to settle the mix, then return to checking before watering.",
        ],
      },
      {
        id: "week-one",
        heading: "A quiet seven-day rhythm",
        items: [
          "Day 1: check drainage, light, wind, and soil moisture.",
          "Days 2-3: watch the leaves and rotate only if one side is heavily shaded.",
          "Days 4-5: check soil again; water only if it has dried enough.",
          "Days 6-7: decide whether the current pot and location are working.",
        ],
        callout: "Skip fertilizer, daily watering, and repeated moves during this settling week.",
      },
    ],
    faq: [
      {
        question: "Can an olive tree live indoors?",
        answer:
          "Only if it receives exceptional light. Most homes are too dim for long-term vigor, so a sunny patio or outdoor full-sun position is usually the better home.",
      },
      {
        question: "Why is my new olive tree dropping leaves?",
        answer:
          "A move can cause temporary stress, but also check for wet soil, blocked drainage, very low light, or a sudden jump in sun exposure. Correct the condition and give the tree time before adding fertilizer.",
      },
      {
        question: "How often should I water a potted olive tree?",
        answer:
          "There is no dependable fixed interval. Check the mix and water thoroughly after the upper layer dries; heat, pot size, wind, and root density all change the timing.",
      },
    ],
    sources: [
      {
        title: "Alder & Oak Olive Tree",
        publisher: "Costco",
        url: "https://www.costco.com/p/-/alder-oak-olive-tree/4000417874",
        note: "Current product details and growing requirements; observed July 20, 2026.",
      },
      {
        title: "Growing Olive Trees in Napa County",
        publisher: "UC Agriculture and Natural Resources",
        url: "https://ucanr.edu/node/100000/printable/print",
        note: "Climate, sun, and container-watering guidance.",
      },
      {
        title: "Phytophthora Root and Crown Rot: Olive",
        publisher: "UC Statewide IPM Program",
        url: "https://ipm.ucanr.edu/agriculture/olive/phytophthora-root-and-crown-rot/",
        note: "Evidence-based drainage and soil-water management guidance.",
      },
    ],
    relatedSlugs: ["eggshells-in-the-garden", "basil-first-harvest"],
  },
  {
    slug: "monstera-leaves-curling",
    category: "Indoor favorite",
    tags: ["Monstera", "Leaf problems", "Indoor plants", "Watering"],
    aliases: ["Monstera deliciosa leaves curling", "Swiss cheese plant curling leaves"],
    title: "Monstera leaves are curling. Start with these five checks.",
    shortTitle: "Monstera leaves curling",
    dek: "A curled leaf is a clue, not a diagnosis. Read the soil, light, room, roots, and leaf surface in that order.",
    answer:
      "When Monstera leaves curl, first feel the soil. Dry mix points toward thirst; persistently wet mix points toward stressed roots. Then check light, temperature, humidity, and pests before changing several things at once.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "7 min read",
    place: "Indoor plant homes",
    season: "Year-round care",
    image:
      "https://images.unsplash.com/photo-1748674918683-b286653f4f1b?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center",
    imageAlt: "Large green Monstera leaves near a bright window",
    firstChecks: [
      "Feel two inches into the soil instead of judging the surface alone.",
      "Look for a recent move, heater, air conditioner, or sharp light change.",
      "Inspect the backs of leaves and new growth for pests.",
    ],
    sections: [
      {
        id: "read-soil",
        heading: "1. Read the soil first",
        paragraphs: [
          "If the mix is dry well below the surface and the pot feels unusually light, water thoroughly and let the excess drain. If it is still wet many days after watering, pause and inspect the drainage holes, pot cover, and smell of the root zone.",
          "Wisconsin Horticulture recommends watering Monstera thoroughly and allowing the soil to dry slightly between waterings. Leaves that appear to sweat can be a sign that the growing medium is too moist.",
        ],
      },
      {
        id: "light",
        heading: "2. Look at the light it actually receives",
        paragraphs: [
          "Monstera usually grows best indoors with bright, indirect or filtered light. It tolerates lower light, which is why it is often described as shade-loving, but tolerance is not the same as best growth. In lower light, growth may be slower and new leaves may stay smaller or develop fewer splits.",
          "Bright does not mean harsh direct sun. Move the plant closer to usable window light gradually, and soften intense midday or afternoon sun with distance or a sheer curtain. A sudden move outdoors or into strong direct sun can burn the leaves.",
        ],
      },
      {
        id: "room",
        heading: "3. Notice the room around the leaf",
        paragraphs: [
          "A heater, air-conditioning vent, cold window, or dry spell can change a leaf quickly. Monstera prefers warm rooms and medium to high humidity. Brown, crisp edges are more suggestive of dry air or repeated dryness than a soft, yellowing leaf in wet soil.",
          "You do not need a fancy humidifier first. Move the plant away from direct airflow, group it with other plants, and make sure the watering problem is not being mistaken for a humidity problem.",
        ],
      },
      {
        id: "roots",
        heading: "4. Check whether the roots still have room",
        paragraphs: [
          "Roots circling densely at the bottom, water running straight through a hardened root ball, or a plant that dries again almost immediately may need a slightly larger pot. Use a rich but airy mix and keep the support in mind: mature Monstera is a climber, not a freestanding shrub.",
        ],
      },
      {
        id: "pests",
        heading: "5. Inspect before you treat",
        paragraphs: [
          "Look closely along veins, leaf backs, and new growth for webbing, scale-like bumps, cottony clusters, or insects. Wisconsin Horticulture lists aphids, mealybugs, scale, and spider mites among the indoor pests that can affect Monstera.",
          "Isolate a suspicious plant and identify the pest before choosing a treatment. Spraying a stressed but pest-free plant adds one more variable when what it needs is a clearer diagnosis.",
        ],
        callout: "Change one meaningful condition, make a dated note, and watch the next leaf as well as the old one.",
      },
    ],
    faq: [
      {
        question: "Should I cut off a curled Monstera leaf?",
        answer:
          "Not automatically. A green leaf can still photosynthesize. Remove it if it is badly damaged, diseased, or declining after the underlying issue has been corrected.",
      },
      {
        question: "Will a curled Monstera leaf flatten again?",
        answer:
          "A mildly curled leaf may relax after the cause is corrected, but damaged tissue may not return to perfect form. New growth is the better measure of recovery.",
      },
      {
        question: "Does Monstera need misting every day?",
        answer:
          "No. Misting creates only a brief humidity change. Stable room conditions, correct watering, usable light, and healthy roots matter more.",
      },
      {
        question: "Is Monstera a shade-loving or low-light plant?",
        answer:
          "Monstera can tolerate medium or lower indoor light, but it generally grows more vigorously in bright, indirect or filtered light. Protect it from abrupt, intense direct sun. In everyday plant language, shade-loving often means no harsh sun, not a dark corner with very little usable light.",
      },
    ],
    sources: [
      {
        title: "Swiss-Cheese Plant, Monstera deliciosa",
        publisher: "University of Wisconsin-Madison Horticulture",
        url: "https://hort.extension.wisc.edu/articles/monstera-deliciosa/",
        note: "Light, watering, humidity, support, repotting, and pest guidance.",
      },
      {
        title: "Monstera deliciosa",
        publisher: "Missouri Botanical Garden",
        url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?kempercode=b605",
        note: "Bright indoor light and protection from strong direct sun.",
      },
      {
        title: "6 in. Monstera Thai Constellation Plant",
        publisher: "The Home Depot",
        url: "https://www.homedepot.com/p/341396770",
        note: "A current retailer signal for continued Monstera visibility; observed July 20, 2026.",
      },
    ],
    relatedSlugs: ["new-olive-tree-first-week-care", "eggshells-in-the-garden"],
  },
  {
    slug: "basil-first-harvest",
    category: "Farm to table",
    tags: ["Basil", "First harvest", "Kitchen garden", "Summer herbs"],
    aliases: ["How to harvest basil", "Basil pruning", "Grocery-store basil"],
    title: "Your basil is ready. Make the first harvest help it grow bushier.",
    shortTitle: "Basil to first harvest",
    dek: "Cut above a pair of leaves, keep flower buds in check, and turn a small pot into a generous summer ritual.",
    answer:
      "Harvest basil by cutting a stem just above a healthy pair of leaves. New growth can branch from that point, so regular thoughtful picking makes the plant bushier instead of bare. Remove flower buds if leaves are your goal, and keep cut stems in water at room temperature.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "6 min read",
    place: "Windowsills, patios, and kitchen gardens",
    season: "Summer harvest",
    image:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center",
    imageAlt: "Fresh green basil growing in a garden",
    firstChecks: [
      "Wait until the plant has several sets of true leaves.",
      "Choose a stem and find a pair of leaves below the tip.",
      "Cut just above that pair with clean scissors or a pinch.",
    ],
    sections: [
      {
        id: "cut",
        heading: "Make one cut that creates two new directions",
        paragraphs: [
          "Follow a stem down from the tip until you see a strong pair of leaves. Cut just above that pair. The small buds at the leaf joints can become two branches, which is why harvesting stems is more useful than repeatedly plucking only the largest bottom leaves.",
          "Penn State's June 2026 basil guide recommends repeated pinching as branches develop. Illinois Extension likewise notes that pinching tips encourages a rounder, bushier plant with more leaf growth.",
        ],
      },
      {
        id: "flowers",
        heading: "Decide what you want to do with the flowers",
        paragraphs: [
          "If your priority is a long leaf harvest, pinch flower buds when they appear. Once basil puts energy into flowers and seed, leaf production slows and flavor can become less tender or more bitter.",
          "You can also leave a few flowers for pollinators. This is not a failure; it is simply a different purpose for part of the plant.",
        ],
      },
      {
        id: "rhythm",
        heading: "Keep the harvest rhythm gentle",
        items: [
          "Harvest smaller amounts often instead of stripping the whole plant.",
          "Keep the soil evenly moist but never leave the pot standing in water.",
          "Give basil warmth and strong light; container plants dry faster than garden beds.",
          "Watch leaf undersides if yellowing appears, since basil downy mildew can spread quickly.",
        ],
      },
      {
        id: "table",
        heading: "Bring the first handful to the table",
        paragraphs: [
          "For a forgiving small-batch pesto, blend two loose cups of basil with a small handful of nuts or seeds, one garlic clove, olive oil added gradually, salt, and a squeeze of lemon. Add grated hard cheese if you like. Taste before adding more of anything.",
          "If dinner is later, place cut basil stems in a glass of water at room temperature. University of Minnesota and Illinois Extension both caution that basil can discolor in the refrigerator.",
        ],
        callout: "The first harvest does not need to be abundant. A few leaves on tomatoes or toast still closes the loop from pot to table.",
      },
    ],
    faq: [
      {
        question: "How much basil can I harvest at once?",
        answer:
          "For a young plant, take only a few stem tips. On an established, vigorous plant, a larger harvest is fine as long as plenty of leafy growth remains to power recovery.",
      },
      {
        question: "Can I still use basil after it flowers?",
        answer:
          "Yes. The leaves are still edible, though they may be less tender or aromatic. The flowers are also edible, and leaving some supports pollinators.",
      },
      {
        question: "Why is grocery-store basil crowded and wilting?",
        answer:
          "Many supermarket pots contain numerous seedlings competing in a small volume of mix. Give them strong light, reliable drainage, and consider dividing the clump into a few pots after it settles.",
      },
    ],
    sources: [
      {
        title: "Basil, A Summer Favorite",
        publisher: "Penn State Extension",
        url: "https://extension.psu.edu/basil-a-summer-favorite",
        note: "Updated June 29, 2026; pruning, flowering, harvest, and storage guidance.",
      },
      {
        title: "Basil",
        publisher: "Illinois Extension",
        url: "https://extension.illinois.edu/herbs/basil",
        note: "Pinching, flower removal, indoor culture, and room-temperature storage guidance.",
      },
      {
        title: "Harvesting and storing home garden vegetables",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/planting-and-growing-guides/harvesting-and-storing-home-garden-vegetables",
        note: "Reviewed in 2026; basil harvest and storage guidance.",
      },
    ],
    relatedSlugs: ["eggshells-in-the-garden", "new-olive-tree-first-week-care"],
  },
  {
    slug: "eggshells-in-the-garden",
    category: "Organic-first",
    tags: ["Eggshells", "Garden myths", "Compost", "Soil care"],
    aliases: ["Eggshell fertilizer", "Eggshell water for plants", "Crushed eggshells for plants"],
    title: "Eggshells in the garden: useful compost ingredient, unreliable quick fix.",
    shortTitle: "What eggshells really do in a garden",
    dek: "Keep the low-cost habit. Let go of the promise that shells will quickly cure blossom-end rot or replace a soil test.",
    answer:
      "Eggshells are fine in compost, but they break down too slowly to act as a quick calcium treatment in garden soil. They do not reliably prevent blossom-end rot. Crush them for faster decomposition, add modest amounts to compost, and use a soil test before adding calcium amendments.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "5 min read",
    place: "Home compost and edible gardens",
    season: "Any season",
    image:
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center",
    imageAlt: "Kitchen scraps and natural materials ready for composting",
    firstChecks: [
      "If a tomato has blossom-end rot, correct uneven watering first.",
      "Do not assume your soil lacks calcium without a soil test.",
      "Put clean, crushed shells into compost if you want to reuse them.",
    ],
    sections: [
      {
        id: "truth",
        heading: "The useful truth is quieter than the viral hack",
        paragraphs: [
          "Eggshells contain calcium, but having calcium in a material is not the same as making it quickly available to a plant. Shell pieces decompose slowly, especially when left in large fragments.",
          "University of Minnesota Extension reviewed this home remedy in 2026 and concluded that eggshells do not prevent blossom-end rot. Many soils already contain adequate calcium, while irregular moisture keeps plants from moving it where developing fruit needs it.",
        ],
      },
      {
        id: "compost",
        heading: "The easiest good use: add them to compost",
        paragraphs: [
          "Rinse shells if they are messy, let them dry, crush them, and mix them into an active compost pile rather than leaving a thick visible layer. Smaller pieces expose more surface area, though fragments may still remain visible for quite a while.",
          "Think of shells as one modest ingredient among leaves, vegetable scraps, and other compost materials, not as a complete fertilizer.",
        ],
      },
      {
        id: "tomatoes",
        heading: "For blossom-end rot, steady moisture comes first",
        paragraphs: [
          "Water deeply enough to moisten the root zone, mulch to slow moisture swings, and avoid damaging roots through aggressive cultivation. Remove badly affected fruit so the plant can direct energy elsewhere.",
          "If a soil test shows that calcium or pH correction is actually needed, use the amendment and rate recommended for that soil. More is not automatically better, even when the ingredient feels natural.",
        ],
        callout: "Organic-first care should be evidence-aware: inexpensive, gentle, and honest about what a remedy can do.",
      },
      {
        id: "skip",
        heading: "Three eggshell promises to skip",
        items: [
          "A ring of sharp shells is not a dependable slug barrier.",
          "Shell water is not a measured replacement for balanced nutrition.",
          "A few shells in a planting hole will not quickly correct a calcium problem.",
        ],
      },
    ],
    faq: [
      {
        question: "Can eggshells hurt plants?",
        answer:
          "Modest amounts in compost are unlikely to cause harm. The larger risk is relying on them while the actual problem, such as uneven watering, poor drainage, pests, or unsuitable pH, goes untreated.",
      },
      {
        question: "Do I need to bake eggshells before composting?",
        answer:
          "No. Rinsing and air-drying is sufficient for a normal home compost routine. Crushing is useful because smaller pieces break down faster.",
      },
      {
        question: "Should I put eggshells directly in a houseplant pot?",
        answer:
          "It offers little immediate benefit and leaves slow-decomposing fragments in a small container. Use an appropriate potting mix and diagnose a nutrient issue before adding amendments.",
      },
    ],
    sources: [
      {
        title: "Do common soil health home remedies work?",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/manage-soil-nutrients/coffee-grounds-eggshells-epsom-salts",
        note: "Reviewed in 2026; eggshell, blossom-end rot, coffee-ground, and Epsom-salt guidance.",
      },
    ],
    relatedSlugs: ["basil-first-harvest", "monstera-leaves-curling"],
  },
  ...retailFindGuides,
  ...retailRescueGuides,
  ...seasonalGuides,
  ...succulentBasicsGuides,
  ...specialtyCareGuides,
  ...gardenPracticeGuides,
  ...culturalHomeGuides,
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideSummaries(): GuideSummary[] {
  return guides
    .map(
      ({
        slug,
        category,
        tags,
        aliases,
        title,
        shortTitle,
        dek,
        answer,
        updatedAt,
        readingTime,
        place,
        season,
        image,
        imagePosition,
      }) => ({
        slug,
        category,
        tags,
        aliases,
        title,
        shortTitle,
        dek,
        answer,
        updatedAt,
        readingTime,
        place,
        season,
        image,
        imagePosition,
      }),
    )
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function getRelatedGuides(slugs: string[]) {
  return slugs.map(getGuide).filter((guide): guide is PlantGuide => Boolean(guide));
}

export function formatGuideDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
