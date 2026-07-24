import type { PlantGuide } from "../guide-types";

const publishedAt = "2026-07-23";

export const lateSummerFruitGuides: PlantGuide[] = [
  {
    slug: "august-fruit-harvest-guide",
    category: "Seasonal",
    tags: [
      "August harvest",
      "Backyard fruit trees",
      "Fruit ripeness",
      "Farm to table",
      "Late summer",
    ],
    aliases: [
      "What fruit is ready in August",
      "August fruit harvest",
      "Fruit trees that ripen in August",
      "Late summer fruit harvest",
    ],
    title: "What fruit ripens in August? A backyard harvest guide that checks climate first.",
    shortTitle: "What fruit ripens in August?",
    dek: "Peaches, figs, plums, early apples, pears, and grapes may all enter harvest season, but the cultivar and your local weather matter more than the calendar square.",
    answer:
      "Across many parts of the United States, August can bring peaches, nectarines, plums, figs, early apples, early pears, grapes, blackberries, and raspberries. It is a harvest window, not a nationwide promise: a cultivar that finishes in July in Georgia may not mature until September in a cooler northern or coastal garden. Use the plant label or cultivar name, then confirm ripeness by background color, softness, flavor, stem position, and ease of release rather than by date alone.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "10 min read",
    place: "Backyards, patios, and home orchards",
    season: "Late July through early September",
    image: "/editorial/august-backyard-fruit-harvest.webp",
    imagePosition: "center 54%",
    imageAlt:
      "A late-summer backyard harvest of peaches, figs, apples, pears, plums, and grapes",
    firstChecks: [
      "Find the fruit's cultivar name; harvest dates can differ by weeks within one species.",
      "Compare fruit on the sunny outside and shaded inside of the canopy.",
      "Taste or cut one representative fruit before picking the whole crop.",
    ],
    picks: {
      heading: "An August harvest map, not a promise",
      intro:
        "These are useful late-summer starting points for many U.S. gardens. Move the window earlier or later for your cultivar, region, elevation, and season.",
      bestForLabel: "Typical window",
      lightLabel: "Ripe when",
      watchForLabel: "Watch for",
      items: [
        {
          name: "Peaches and nectarines",
          bestFor: "Many cultivars finish from midsummer into August or early September.",
          light:
            "The green background turns yellow or cream, aroma develops, and fruit gives slightly.",
          watchFor: "Red blush alone is not a dependable maturity test.",
        },
        {
          name: "Figs",
          bestFor: "Often August into fall; some trees also carry an earlier breba crop.",
          light: "The neck bends, the fruit droops, softens, and releases with little resistance.",
          watchFor: "Green figs picked hard generally do not become sweet indoors.",
        },
        {
          name: "Plums",
          aliases: ["Japanese plums", "European plums"],
          bestFor: "Varieties span summer into early fall.",
          light: "Full varietal color develops and the flesh softens enough for its intended use.",
          watchFor: "A ripe-looking skin can hide firm or damaged flesh, so taste one.",
        },
        {
          name: "Early apples",
          bestFor: "Early cultivars can start in August; storage cultivars usually come later.",
          light: "Fruit tastes less starchy and lifts away with a gentle upward twist.",
          watchFor: "Windfall, drought, insects, and cultivar tendency can cause early drop.",
        },
        {
          name: "Pears",
          aliases: ["European pears", "Asian pears"],
          bestFor: "Some early pears begin in August, while many continue into fall.",
          light:
            "European pears are picked mature and firm; Asian pears become sweet and juicy on the tree.",
          watchFor: "Treating both pear groups the same creates hard or internally mushy fruit.",
        },
        {
          name: "Table grapes",
          bestFor: "Late summer through fall, depending on cultivar and climate.",
          light: "A sampled grape tastes fully sweet because color alone is not enough.",
          watchFor: "Grapes do not improve in sugar after harvest.",
        },
      ],
    },
    sections: [
      {
        id: "calendar",
        heading: "Why the calendar can only start the conversation",
        paragraphs: [
          "Harvest timing is controlled by genetics and accumulated weather. Cultivar, winter chill, spring bloom date, summer heat, elevation, irrigation, and canopy exposure can move maturity. Even one tree may ripen from the sunny outer branches inward over several pickings.",
          "Use local Extension harvest calendars as regional evidence, not as a guarantee for a specific backyard. If you inherited an unlabeled tree, record the date and ripeness signs this year; that small garden journal becomes more useful next season than a generic national chart.",
        ],
        image: {
          src: "/editorial/august-harvest-ripeness-check.webp",
          alt:
            "Hands comparing ripe and unripe late-summer fruit from a backyard garden",
          caption:
            "Check one fruit from the sunny side and one from the shaded canopy before harvesting everything.",
          width: 1536,
          height: 1024,
        },
      },
      {
        id: "tree-or-counter",
        heading: "Some fruit can soften indoors; that does not mean every fruit gains flavor there",
        paragraphs: [
          "European pears are the clearest exception to the idea of tree-ripe fruit: they are normally picked mature but firm and finished indoors, sometimes after variety-specific chilling. Peaches and plums can soften after harvest once they are mature, but fruit picked hard and green will not gain the same tree-developed quality.",
          "Figs and grapes should be treated as tree- or vine-ripe fruit. A hard green fig does not become a honeyed ripe fig on the counter, and harvested grapes do not become sweeter. The useful question is not simply whether a fruit softens after picking, but whether it had reached physiological maturity first.",
        ],
      },
      {
        id: "three-signals",
        heading: "Use three signals before filling the basket",
        items: [
          "Appearance: look at the background color, not only the sun-exposed blush.",
          "Touch: compare firmness without squeezing delicate fruit hard enough to bruise it.",
          "Release and flavor: lift or twist gently, then taste one fruit from that part of the canopy.",
          "Damage check: cut open fallen or suspicious fruit and look for rot, tunnels, larvae, or internal breakdown.",
          "Cultivar check: search the exact named variety with your state Extension or local growing region.",
        ],
      },
      {
        id: "harvest-rhythm",
        heading: "A small harvest every day is often better than one dramatic picking",
        paragraphs: [
          "In warm weather, ripe fruit can move from perfect to split, pecked, fermented, or rotten quickly. Walk the tree in the cool morning, collect ready fruit, and pick up damaged windfalls. Handle peaches, figs, and berries in shallow containers so the lower layers are not crushed.",
          "Cool sound fruit promptly if you will not eat or process it that day. Keep bruised, split, insect-damaged, and moldy fruit separate from storage-quality produce. A mixed basket can turn one small problem into a larger one.",
        ],
      },
      {
        id: "late-summer-care",
        heading: "What the tree needs while fruit is finishing",
        items: [
          "Keep soil moisture reasonably steady during heat; do not swing between bone dry and saturated.",
          "Avoid a late rush of high-nitrogen fertilizer to force ripening.",
          "Support overloaded branches rather than making large emergency pruning cuts.",
          "Remove rotting and mummified fruit instead of leaving disease inoculum on the tree.",
          "Note what ripened, what failed, and where damage began for next year's thinning and protection plan.",
        ],
        callout:
          "Late summer is mostly a season for observation, steady water, timely harvest, and sanitation, not a last-minute feeding campaign.",
      },
    ],
    faq: [
      {
        question: "What fruits are usually ready to pick in August?",
        answer:
          "Depending on location and cultivar, August may include peaches, nectarines, plums, figs, early apples, early pears, grapes, blackberries, and raspberries. Confirm with ripeness signs and local guidance rather than the month alone.",
      },
      {
        question: "Why is my neighbor harvesting before me?",
        answer:
          "The trees may be different cultivars or receive different heat, sun, irrigation, and wind exposure. A warmer wall or sunny canopy edge can advance ripening even within the same neighborhood.",
      },
      {
        question: "Should I pick all the fruit at once?",
        answer:
          "Usually not. Backyard fruit often ripens in stages. Pick the fruit that has reached the correct color, firmness, release, and flavor, then return every day or two during peak season.",
      },
      {
        question: "Can I use a red blush to tell whether fruit is ripe?",
        answer:
          "Not by itself. Sun exposure and cultivar genetics affect blush. For peaches especially, the background color changing from green toward yellow or cream is more useful.",
      },
      {
        question: "Should I fertilize a fruit tree in August to sweeten the crop?",
        answer:
          "Do not add fertilizer as a reflex. Excess or late nitrogen can stimulate tender growth without fixing immature fruit. Base fertility on a soil test, annual growth, and species-specific local guidance.",
      },
    ],
    sources: [
      {
        title: "Harvest Calendar",
        publisher: "University of California Agriculture and Natural Resources",
        url: "https://ucanr.edu/site/online-agricultural-resources/harvest-calendar?about=1",
        note:
          "Regional evidence for the range of fruit that can enter harvest during August.",
      },
      {
        title: "Harvesting and Storing Tree Fruit",
        publisher: "Iowa State University Extension and Outreach",
        url: "https://yardandgarden.extension.iastate.edu/how-to/harvesting-and-storing-tree-fruit",
        note: "Cultivar-sensitive maturity, harvest signs, and storage guidance.",
      },
      {
        title: "Growing Tree Fruits and Nuts at Home",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/catalog/ec-819-growing-tree-fruits-nuts-home",
        note:
          "Fruit-specific maturity cues and the different harvest behavior of apples, pears, figs, peaches, and plums.",
      },
      {
        title: "Fruit: Harvesting",
        publisher: "Royal Horticultural Society",
        url: "https://www.rhs.org.uk/fruit/fruit-trees/harvesting",
        note: "Late-summer crop range, staged harvest, and practical readiness checks.",
      },
    ],
    relatedSlugs: [
      "figs-not-ripening-on-tree",
      "when-to-pick-peaches",
      "when-to-pick-pears-european-asian",
    ],
  },
  {
    slug: "figs-not-ripening-on-tree",
    category: "Farm to table",
    tags: [
      "Fig tree",
      "Figs not ripening",
      "Fig harvest",
      "Fruit drop",
      "Late summer",
    ],
    aliases: [
      "Why are my figs not ripening",
      "Green figs not ripening",
      "Figs falling before ripe",
      "When are figs ripe",
    ],
    title: "Figs not ripening on the tree? Check the neck, weather, water, and crop.",
    shortTitle: "Figs not ripening on the tree",
    dek: "A fig can sit green for weeks and soften quickly at the end. Before feeding it, decide whether the fruit is simply early, stalled by conditions, or dropping from a real problem.",
    answer:
      "A ripe fig usually softens, droops as its neck bends, swells, and comes away with little resistance; its final color depends on the variety. Hard green figs generally will not become sweet after picking. If the crop stays firm, first check the cultivar and expected local season, then look at warmth and sun, steady soil moisture, tree age and vigor, and premature drop or pest damage. Do not use extra fertilizer as a late-summer ripening shortcut.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "In-ground and container fig trees",
    season: "Fig swell through harvest",
    image: "/editorial/figs-not-ripening-tree.webp",
    imagePosition: "center 50%",
    imageAlt: "Green and ripening figs at different stages on a backyard fig tree",
    firstChecks: [
      "Find the variety name and learn whether it carries a breba crop, main crop, or both.",
      "Compare firm upright figs with the softest fruit whose neck has begun to bend.",
      "Review heat, sun, and root-zone moisture before adding fertilizer.",
    ],
    sections: [
      {
        id: "ripe-signs",
        heading: "A ripe fig changes posture as well as color",
        paragraphs: [
          "Color is unreliable by itself because ripe figs may be purple, brown, bronze, yellow, or remain green. The stronger clues are a larger, softer body; a neck that bends so the fruit hangs downward; a rich varietal color; and easy release when lifted gently.",
          "Milky latex at the stem and firm resistance usually mean the fruit is not ready. Fig sap can irritate skin, so wash exposed skin and consider gloves when harvesting a large crop.",
        ],
        image: {
          src: "/editorial/fig-ripeness-neck-droop.webp",
          alt:
            "Close view comparing an upright unripe fig with a soft ripe fig drooping on its neck",
          caption:
            "The bent neck and soft body are more dependable than a single color rule.",
          width: 1536,
          height: 1024,
        },
      },
      {
        id: "long-pause",
        heading: "A long green pause can still be normal",
        paragraphs: [
          "Fig development is not a smooth daily color change. Fruit may remain firm and similar in size for a long stretch, then swell and soften quickly near maturity. A late crop on current-season growth can run out of warm days in a cool region even when the tree looks healthy.",
          "Some figs carry an earlier breba crop on last year's wood and a later main crop on new growth. Winter injury, pruning, and cultivar type can change which crop survives and when it matures. That is why advice from a gardener with a different variety or climate can be misleading.",
        ],
      },
      {
        id: "stalled",
        heading: "When the whole crop seems stalled",
        items: [
          "Sun and warmth: figs mature best in a warm, bright position; a shaded or cool site can delay the crop.",
          "Water: drought can reduce quality or trigger drop, while waterlogged roots create a different stress.",
          "Tree age: young, vigorously growing trees may set fruit before they can finish a dependable crop.",
          "Nitrogen: lush shoot growth after heavy feeding does not guarantee ripe fruit and can work against balance.",
          "Crop timing: small late-set figs may simply lack enough season before cold weather.",
        ],
      },
      {
        id: "drop",
        heading: "Fruit dropping green needs a closer look",
        paragraphs: [
          "A few failed fruits do not diagnose the whole tree. Widespread drop can follow drought, cool conditions, a crop the young tree cannot support, or a cultivar and pollination mismatch in regions where that matters. Soft rot, sour odor, entry marks, larvae, or repeated premature softening point toward disease or insects instead.",
          "Black fig fly is an emerging concern in parts of California and can cause infested fruit to soften or drop early. Do not assume every dropped fig has this pest. Bag a sample, photograph the fruit inside and out, remove fallen fruit, and contact local Extension or the county agricultural office for regional identification.",
        ],
      },
      {
        id: "this-week",
        heading: "What to do this week",
        items: [
          "Leave hard green fruit attached and inspect the tree daily as the earliest figs begin to soften.",
          "Water deeply when the root zone needs it, then allow drainage; avoid erratic small splashes.",
          "Remove rotten and suspicious fallen fruit rather than leaving it under the canopy.",
          "Pause high-nitrogen feeding and avoid a hard late-summer prune.",
          "Record the first ripe date and photograph the fruit color so next year's timing is easier to judge.",
        ],
        callout:
          "A fig that is not ripe today may change quickly. A fig picked hard and green usually cannot be rescued on the counter.",
      },
      {
        id: "use",
        heading: "Once figs begin, harvest often",
        paragraphs: [
          "Ripe figs are delicate and short-lived. Pick in the cool morning, refrigerate promptly if they will not be eaten the same day, and keep split or damaged fruit out of the storage batch.",
          "For preservation, use a tested recipe. Figs are a low-acid food, so safe canning guidance adds acid and specifies processing time; a casual family recipe should not replace a current Extension or National Center for Home Food Preservation method.",
        ],
      },
    ],
    faq: [
      {
        question: "Will green figs ripen after I pick them?",
        answer:
          "Hard green figs generally do not develop full sweetness after harvest. Leave them on the tree until they soften, droop, swell, and release easily.",
      },
      {
        question: "How can I tell when a green-skinned fig is ripe?",
        answer:
          "Do not wait for it to turn purple. Look for a bent neck, downward droop, a soft full body, varietal color change, and easy release.",
      },
      {
        question: "Why are my figs falling before they ripen?",
        answer:
          "Possible causes include drought, cool weather, young-tree vigor, crop timing, cultivar or pollination requirements, and pests. Cut open a dropped fig and inspect for rot, odor, entry marks, or larvae before deciding.",
      },
      {
        question: "Should I fertilize a fig tree when the fruit will not ripen?",
        answer:
          "Not as a reflex. Excess nitrogen can favor leafy growth, and fertilizer will not replace warmth, sun, time, or steady moisture. Use growth history and a soil test to guide future feeding.",
      },
      {
        question: "Do all fig trees produce two crops?",
        answer:
          "No. Crop pattern depends on cultivar and climate. Some produce a breba crop on older wood and a main crop on current growth, while others provide one useful crop in a given region.",
      },
    ],
    sources: [
      {
        title: "Fig Drop or No Fruit",
        publisher: "UC Statewide Integrated Pest Management Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/fig-drop-or-no-fruit/",
        note:
          "Tree age, weather, drought, fruit drop, site warmth, and cultivar context.",
      },
      {
        title: "Figs Are Ripening",
        publisher: "Clemson Cooperative Extension",
        url: "https://hgic.clemson.edu/figs-are-ripening/",
        note: "Sight, touch, droop, variety, and seasonal ripeness signals.",
      },
      {
        title: "Growing Tree Fruits and Nuts at Home",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/catalog/ec-819-growing-tree-fruits-nuts-home",
        note: "Regional fig varieties, maturity windows, warm sites, and ripe softness.",
      },
      {
        title: "Growing Figs in Maryland",
        publisher: "University of Maryland Extension",
        url: "https://www.extension.umd.edu/resource/growing-figs-maryland",
        note:
          "Current guidance on August-through-frost harvest and why green figs should remain on the tree.",
      },
      {
        title: "How to Grow Figs",
        publisher: "Royal Horticultural Society",
        url: "https://www.rhs.org.uk/fruit/figs/grow-your-own",
        note:
          "Fruit color range, soft drooping harvest signs, crop timing, and irritating sap.",
      },
      {
        title: "Preserving Figs",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/food/preservation/preserving-figs",
        note: "Tree-ripening, storage, freezing, and tested acidified canning guidance.",
      },
    ],
    relatedSlugs: [
      "august-fruit-harvest-guide",
      "protect-ripening-fruit-birds-squirrels-wasps",
      "apples-falling-before-ripe",
    ],
  },
  {
    slug: "when-to-pick-peaches",
    category: "Farm to table",
    tags: [
      "Peach harvest",
      "When to pick peaches",
      "Peach ripeness",
      "Brown rot",
      "Late summer",
    ],
    aliases: [
      "How to tell when peaches are ripe",
      "When are peaches ready to pick",
      "Tree ripe peaches",
      "Peach background color",
    ],
    title: "When should you pick peaches? Read the background color, not the red blush.",
    shortTitle: "When to pick peaches",
    dek: "A beautiful red cheek can come from sun exposure while the fruit is still immature. The green-to-yellow or cream background shift tells a better story.",
    answer:
      "Pick a peach when its background color has changed from green to yellow on yellow-fleshed varieties or to cream on white-fleshed varieties, then confirm with aroma, slight give, and easy release. Red blush is not a reliable maturity test because sunlight and cultivar genetics affect it. Harvest soft, fragrant fruit for immediate eating; pick mature but still-firm fruit for a short indoor finish. Remove peaches with fast-spreading tan-brown rot or fuzzy spores instead of treating rot as ripeness.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Backyard peach and nectarine trees",
    season: "Final swell through harvest",
    image: "/editorial/when-to-pick-peaches.webp",
    imagePosition: "center 48%",
    imageAlt: "Ripe peaches being harvested by hand from a sunny backyard tree",
    firstChecks: [
      "Turn the fruit and inspect the background color where the skin is not red.",
      "Smell near the stem and press very gently for slight give.",
      "Check shaded interior fruit separately from the sunny outer canopy.",
    ],
    sections: [
      {
        id: "color",
        heading: "The useful color is hiding behind the blush",
        paragraphs: [
          "A peach's red surface color is strongly affected by sunlight, canopy position, cultivar, and growing conditions. A fruit can look richly red and still have a green background. For yellow-fleshed peaches, watch that green ground color shift toward yellow; for white-fleshed peaches, look for cream.",
          "The stem end and shaded side often show the background most clearly. Compare several fruit on the tree because the warm outer canopy may be days ahead of the interior.",
        ],
        image: {
          src: "/editorial/peach-background-color-check.webp",
          alt:
            "Hands turning peaches to compare green, yellow, and cream background color",
          caption:
            "Ignore the size of the red cheek for a moment and inspect the background color.",
          width: 1536,
          height: 1024,
        },
      },
      {
        id: "purpose",
        heading: "Pick for the way you plan to use the fruit",
        paragraphs: [
          "For eating today, wait for developed aroma, slight softness, and easy separation with a gentle lift and twist. For a two- or three-day kitchen finish, choose fruit that has lost its green background but is still firm enough to travel without bruising.",
          "A hard, distinctly green peach may soften after picking but cannot recreate all the flavor it would have developed after reaching maturity on the tree. A paper bag can concentrate ethylene and speed softening; it cannot turn an immature peach into a tree-mature one.",
        ],
      },
      {
        id: "staged",
        heading: "Harvest the tree in rounds",
        items: [
          "Begin with fruit on the sunny outside and upper canopy.",
          "Cradle each peach instead of pulling hard on the stem or branch.",
          "Use a shallow tray and avoid stacking warm soft fruit deeply.",
          "Return every day or two as the next group changes background color.",
          "Cool sound fruit promptly and keep bruised or split peaches separate.",
        ],
      },
      {
        id: "rot",
        heading: "Soft and brown is not the same as ripe",
        paragraphs: [
          "Brown rot can expand rapidly on ripening peaches, nectarines, and plums, especially during warm wet weather. It begins as a tan or brown spot and may develop dusty or fuzzy spore tufts. Infected fruit may fall or dry into a mummy that carries the disease forward.",
          "Remove diseased fruit from the tree and ground. Do not leave mummies hanging, and do not expect a fungicide applied after visible rot to cure that fruit. If brown rot is recurring, local prevention recommendations begin before harvest and vary by region and product label.",
        ],
      },
      {
        id: "this-week",
        heading: "A practical final-week routine",
        items: [
          "Check fruit daily after the first background color change.",
          "Keep irrigation steady without wetting fruit repeatedly late in the day.",
          "Remove cracked, insect-damaged, and rotting peaches promptly.",
          "Support a heavily loaded branch rather than cutting away a large leafy section.",
          "Write down the first and peak harvest dates under the cultivar name.",
        ],
        callout:
          "The best peach is not necessarily the reddest one. It is the fruit whose background, aroma, feel, and release agree.",
      },
    ],
    faq: [
      {
        question: "Do peaches get sweeter after picking?",
        answer:
          "A mature peach can soften and become more aromatic after harvest, but fruit picked hard and green will not develop the same quality as fruit allowed to reach maturity on the tree.",
      },
      {
        question: "What color should a ripe peach be?",
        answer:
          "Look past the red blush. Yellow-fleshed peaches should lose the green background and turn yellow; white-fleshed peaches move toward cream.",
      },
      {
        question: "Should a ripe peach be soft on the tree?",
        answer:
          "For immediate eating, slight softness and aroma are useful. If the fruit must travel or sit for a few days, harvest it mature but firmer once the background color has changed.",
      },
      {
        question: "Why are peaches turning brown before I can pick them?",
        answer:
          "Fast-growing tan-brown spots with spore tufts are consistent with brown rot. Remove affected fruit and mummies, improve sanitation, and use local Extension prevention guidance for the next crop.",
      },
      {
        question: "Can I pick peaches in several rounds?",
        answer:
          "Yes. Fruit on the outside of a backyard canopy often matures before shaded interior fruit, so several small harvests usually produce better quality than one date-based sweep.",
      },
    ],
    sources: [
      {
        title: "Determining Peach Fruit Maturity",
        publisher: "University of Maryland Extension",
        url: "https://www.extension.umd.edu/resource/determining-peach-fruit-maturity",
        note:
          "Background color, surface blush limitations, firmness, and maturity indices.",
      },
      {
        title: "Home Garden Peaches",
        publisher: "University of Georgia Cooperative Extension",
        url: "https://extension.uga.edu/publications/detail.html?number=C1063",
        note:
          "Harvest windows, yellow or cream background color, aroma, and common peach diseases.",
      },
      {
        title: "Harvesting and Storing Peaches and Nectarines",
        publisher: "UC Statewide Integrated Pest Management Program",
        url:
          "https://ipm.ucanr.edu/home-and-landscape/harvesting-and-storing-peaches-and-nectarines/",
        note: "Tree maturity, indoor finishing, handling, and storage.",
      },
      {
        title: "Brown Rot on Peaches",
        publisher: "University of Georgia Cooperative Extension",
        url: "https://site.extension.uga.edu/bartow/brown-rot-on-peaches/",
        note:
          "Brown rot symptoms, mummies, sanitation, wet-weather pressure, and prevention timing.",
      },
    ],
    relatedSlugs: [
      "august-fruit-harvest-guide",
      "protect-ripening-fruit-birds-squirrels-wasps",
      "figs-not-ripening-on-tree",
    ],
  },
  {
    slug: "apples-falling-before-ripe",
    category: "Organic-first",
    tags: [
      "Apple tree",
      "Apples falling early",
      "Preharvest drop",
      "Codling moth",
      "Late summer",
    ],
    aliases: [
      "Why are apples falling off the tree",
      "Apples dropping before ripe",
      "Premature apple drop",
      "August apple drop",
    ],
    title: "Apples falling before they are ripe? Cut one open before you change the tree.",
    shortTitle: "Apples falling before ripe",
    dek: "August drop can mean an early cultivar nearing harvest, a stressed or overloaded tree, wind, or insect damage. The fallen apple usually contains the best clue.",
    answer:
      "When apples fall before they taste ripe, cut open several fresh windfalls first. A clean apple with mature color, less-starchy flavor, and easy release may belong to an early cultivar entering harvest. A hole with crumbly frass or a tunnel toward the core points toward codling moth; dimples, winding flesh damage, or larvae suggest another fruit pest. If fruit is clean, review drought and heat, crop overload, wind, heavy summer pruning, and the cultivar's tendency to drop. Pick up fallen fruit promptly and avoid trying to stop the problem with late nitrogen.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "10 min read",
    place: "Backyard apple trees and small orchards",
    season: "Preharvest through apple season",
    image: "/editorial/apples-falling-before-ripe.webp",
    imagePosition: "center 54%",
    imageAlt: "Freshly fallen apples being inspected beneath a backyard apple tree",
    firstChecks: [
      "Cut across and through several fresh fallen apples before discarding them.",
      "Look for entry holes, crumbly frass, tunnels, dimples, rot, and damaged seeds.",
      "Identify the cultivar and taste fruit still attached to the tree.",
    ],
    sections: [
      {
        id: "june-or-preharvest",
        heading: "August drop is not automatically June drop",
        paragraphs: [
          "Fruit trees naturally shed small developing fruit earlier in the season when they set more than they can carry. By late summer, a new wave of larger apples needs a different diagnosis. It may be preharvest drop as the fruit produces ethylene and the stem loosens, but stress, crop load, wind, insects, and disease can accelerate it.",
          "Some cultivars are naturally more prone to dropping near maturity. An unknown backyard tree can therefore appear to be failing when it is actually an early apple that should be checked for harvest.",
        ],
        image: {
          src: "/editorial/apple-drop-diagnostic.webp",
          alt:
            "A clean cut apple compared with an apple showing a small entry hole and tunnel near the core",
          caption:
            "The inside separates normal maturity and stress from fruit-feeding insects more clearly than the ground count alone.",
          width: 1536,
          height: 1024,
        },
      },
      {
        id: "inside",
        heading: "What the inside of a fallen apple can tell you",
        items: [
          "Clean flesh and normal seeds: compare flavor, background color, and release on the tree; harvest may be beginning.",
          "Hole with crumbly brown frass and a tunnel toward the core: consistent with codling moth feeding.",
          "Dimpled skin with winding brown trails through flesh: investigate apple maggot where it occurs.",
          "Crescent-shaped scars: investigate plum curculio, especially if damage began much earlier.",
          "Soft watery brown tissue or expanding lesions: separate rot and disease from a simple maturity problem.",
        ],
      },
      {
        id: "clean-fruit",
        heading: "If the fruit is clean, read the tree and the previous month",
        paragraphs: [
          "Dry soil and heat can increase preharvest drop. A heavy crop can also push short-stemmed apples against each other and divide the tree's available carbohydrates among too many fruit. Wind then removes apples whose stems are already loosening.",
          "Heavy late summer pruning can make drop worse by removing functional leaves while fruit is finishing. Fertilizer is not an emergency repair. Keep moisture steady, support overloaded limbs, and harvest fruit that has reached cultivar-appropriate maturity.",
        ],
      },
      {
        id: "today",
        heading: "What you can still do now",
        items: [
          "Pick up fallen apples frequently so pests do not complete part of their life cycle beneath the tree.",
          "Harvest sound mature fruit before a forecast of strong wind or extreme heat.",
          "Water the root zone deeply when dry, without keeping it saturated.",
          "Do not make a large summer prune or apply high-nitrogen fertilizer to force recovery.",
          "Photograph the damage and ask local Extension when the insect or disease pattern is unclear.",
        ],
      },
      {
        id: "next-year",
        heading: "The strongest prevention work begins next spring",
        paragraphs: [
          "Thin apples after natural early drop so clusters do not remain crowded and the tree carries a realistic crop. Monitor local pest timing from bloom onward; many fruit insects cannot be solved after the larva is already inside an August apple.",
          "Sanitation is still worthwhile now. Apple maggot larvae and other pests can continue development in dropped fruit, so municipal disposal or the method recommended by local Extension may be more appropriate than a cool backyard compost pile.",
        ],
        callout:
          "Do not diagnose by the number of apples on the lawn. Diagnose by cultivar, maturity, weather, crop load, and the evidence inside fresh fruit.",
      },
    ],
    faq: [
      {
        question: "Does apple drop mean the fruit is ripe?",
        answer:
          "Sometimes, especially with early or drop-prone cultivars, but not always. Taste attached fruit and inspect windfalls for insect tunnels, rot, and stress evidence before harvesting everything.",
      },
      {
        question: "What does codling moth damage look like in an apple?",
        answer:
          "A small entry or exit hole may have crumbly brown frass. Inside, the larva tunnels toward the core and feeds around the seeds.",
      },
      {
        question: "Can drought make apples fall early?",
        answer:
          "Yes. Preharvest drop can be more severe in dry seasons, and heat can accelerate maturity in some cultivars. Restore steady deep watering rather than flooding a very dry root zone repeatedly.",
      },
      {
        question: "Should I leave fallen apples under the tree?",
        answer:
          "No. Collect them frequently. Damaged fruit can support apple maggot, codling moth, rot, and other orchard problems. Follow local guidance for disposal rather than assuming a backyard compost pile will interrupt every pest.",
      },
      {
        question: "How can I reduce early apple drop next year?",
        answer:
          "Identify the cultivar, thin crowded clusters early, maintain steady water, avoid excessive late summer pruning, and begin pest monitoring at the locally recommended time after bloom.",
      },
    ],
    sources: [
      {
        title: "Why Does Apple Fruit Drop Prematurely?",
        publisher: "Michigan State University Extension",
        url: "https://www.canr.msu.edu/news/why_does_apple_fruit_drop_prematurely",
        note:
          "Ethylene, crop load, cultivar tendency, water and heat, nutrition, insects, and summer pruning.",
      },
      {
        title: "Codling Moths in Home Orchards",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-insects/codling-moths",
        note: "Entry damage, frass, core feeding, life cycle, and home-orchard management.",
      },
      {
        title: "Apple Maggots",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-insects/apple-maggot",
        note:
          "Fruit dimpling and internal damage, fallen-fruit sanitation, and bagging options.",
      },
      {
        title: "Growing Apples in the Home Garden",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/gardening-minnesota/growing-apples",
        note: "Thinning, August-through-October harvest, taste testing, water, and sanitation.",
      },
      {
        title: "Pre-harvest Drop",
        publisher: "eXtension Apples Community of Practice",
        url: "https://apples.extension.org/pre-harvest-drop/",
        note: "Natural stem abscission and cultivar-sensitive preharvest fruit drop.",
      },
    ],
    relatedSlugs: [
      "august-fruit-harvest-guide",
      "protect-ripening-fruit-birds-squirrels-wasps",
      "when-to-pick-pears-european-asian",
    ],
  },
  {
    slug: "when-to-pick-pears-european-asian",
    category: "Farm to table",
    tags: [
      "Pear harvest",
      "European pear",
      "Asian pear",
      "Pear ripening",
      "Late summer",
    ],
    aliases: [
      "When to pick pears",
      "Do pears ripen on the tree",
      "How to ripen pears indoors",
      "Nashi pear harvest",
    ],
    title: "When should you pick pears? European and Asian pears need opposite answers.",
    shortTitle: "When to pick European and Asian pears",
    dek: "Most European pears are harvested mature but firm and finished off the tree. Asian pears are tasted on the tree and picked sweet, crisp, and juicy.",
    answer:
      "Pick most European pears when they are mature but still firm: the ground color lightens, lenticels darken, and the fruit separates when lifted from vertical toward horizontal. Finish ripening indoors, using variety-specific cold conditioning when required. Pick Asian pears only after they taste sweet and juicy on the tree because they do not need the European pear's off-tree finish. First identify the type and cultivar; one universal pear rule will spoil part of the harvest.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Backyard pear trees and kitchen counters",
    season: "Early pear season through fall",
    image: "/editorial/when-to-pick-european-asian-pears.webp",
    imagePosition: "center 50%",
    imageAlt:
      "European pears and round Asian pears harvested from a home garden",
    firstChecks: [
      "Identify whether the tree carries a European, Asian, or hybrid pear.",
      "Lift a representative fruit from vertical toward horizontal without pulling.",
      "Cut and taste one fruit; do not wait for every pear to soften on the tree.",
    ],
    picks: {
      heading: "Two pear groups, two harvest rules",
      intro:
        "Cultivar instructions override this broad comparison, but identifying the group prevents the most common harvest mistake.",
      bestForLabel: "Pick from the tree",
      lightLabel: "Finish ripening",
      watchForLabel: "Common mistake",
      items: [
        {
          name: "European pears",
          aliases: ["Bartlett", "Bosc", "Comice", "D'Anjou"],
          bestFor:
            "Mature but firm, when the fruit lightens and lifts away without a hard pull.",
          light:
            "Indoors after harvest; some cultivars need a specific period of cold conditioning.",
          watchFor:
            "Waiting for the middle to become soft on the tree can produce gritty texture or internal breakdown.",
        },
        {
          name: "Asian pears",
          aliases: ["Nashi pear", "Apple pear", "Pyrus pyrifolia"],
          bestFor: "Sweet, crisp, and juicy after a taste test on the tree.",
          light: "No European-style counter ripening is needed.",
          watchFor:
            "Picking very early and expecting the fruit to gain its best flavor indoors.",
        },
      ],
    },
    sections: [
      {
        id: "identify",
        heading: "Identify the pear before testing the fruit",
        paragraphs: [
          "European pears commonly include Bartlett, Bosc, Comice, and D'Anjou and often have the familiar necked pear shape. Asian pears are frequently round and may be sold as nashi or apple pears, but shape alone is not enough for every cultivar or hybrid.",
          "Look for the original plant label, old garden records, fruit shape and texture, or a local identification. A named cultivar gives you a regional maturity window and any cold-conditioning requirement that a generic pear guide cannot.",
        ],
        image: {
          src: "/editorial/pear-harvest-two-types.webp",
          alt:
            "A hand lifting a firm European pear beside a ripe round Asian pear on the tree",
          caption:
            "European pears leave the tree firm; Asian pears should already taste ready.",
          width: 1536,
          height: 1024,
        },
      },
      {
        id: "european",
        heading: "For European pears, test maturity without waiting for softness",
        paragraphs: [
          "Lift a fruit gently from its hanging position toward horizontal. A mature pear often separates with little force. The background color may lighten, and the small lenticels on the skin can become browner and shallower. These clues work together; one loose windfall is not enough.",
          "Harvest several firm mature pears, cool them as the cultivar requires, then bring a small batch to room temperature. A European pear is ready to eat when the flesh near the stem yields slightly to thumb pressure. The exact conditioning and counter time differ by variety.",
        ],
      },
      {
        id: "asian",
        heading: "For Asian pears, the tree is the ripening room",
        paragraphs: [
          "Asian pears should be allowed to develop sweetness and juiciness on the tree. Taste is essential because color differs among green, yellow, bronze, and russeted cultivars. Pick when the fruit has its characteristic flavor, crisp texture, and easy release.",
          "Handle Asian pears carefully despite their crisp flesh. Bruising can remain hidden beneath the skin, and fruit intended for storage should be cooled promptly.",
        ],
      },
      {
        id: "exceptions",
        heading: "Cultivar instructions still matter",
        paragraphs: [
          "Early pears can begin in August in some regions. University of Minnesota's 2026 update, for example, notes that Summercrisp is often harvested slightly underripe around mid-August in southern Minnesota and refrigerated promptly to preserve its crisp texture.",
          "That is a useful reminder that broad European-versus-Asian rules are the first filter, not the final calendar. Search the cultivar name with your state Extension or ask a local orchard when your tree's history is unknown.",
        ],
      },
      {
        id: "batch",
        heading: "Ripen a small batch instead of the whole tree",
        items: [
          "Harvest a few mature European pears and label them with the date.",
          "Apply cultivar-specific chilling rather than guessing that every pear needs the same treatment.",
          "Move only a few to room temperature so the rest do not ripen at once.",
          "Check the neck daily and refrigerate ripe fruit.",
          "Taste Asian pears on the tree and harvest in rounds as their flavor develops.",
        ],
        callout:
          "European pears are usually picked before eating-ripe. Asian pears are usually picked when eating-ripe.",
      },
    ],
    faq: [
      {
        question: "Do pears ripen on the tree or on the counter?",
        answer:
          "Most European pears are harvested mature and firm, then ripened off the tree. Asian pears are allowed to become sweet and juicy on the tree. Identify the group before choosing.",
      },
      {
        question: "How do I know a European pear is mature enough to pick?",
        answer:
          "Look for a lighter ground color, browner lenticels, and easy separation when the fruit is lifted toward horizontal. It should still feel firm.",
      },
      {
        question: "Do all European pears need cold conditioning?",
        answer:
          "The requirement and duration depend on cultivar. Some need a meaningful cold period for even ripening, while others require little. Use named-variety Extension guidance.",
      },
      {
        question: "Can Asian pears ripen after picking?",
        answer:
          "They may change during storage, but they should have already developed their characteristic sweetness and juiciness on the tree. Do not pick them hard and flavorless expecting a European-style finish.",
      },
      {
        question: "Why is my pear soft outside but brown in the middle?",
        answer:
          "A European pear left to eating softness on the tree can ripen from the inside and develop internal breakdown. Harvesting mature but firm and finishing it correctly indoors reduces that risk.",
      },
    ],
    sources: [
      {
        title: "Ripening European Pears from the Home Orchard",
        publisher: "Penn State Extension",
        url: "https://extension.psu.edu/ripening-european-pears-from-the-home-orchard",
        note:
          "Current guidance on cold conditioning, variety-specific counter time, and neck testing.",
      },
      {
        title: "Asian Pears in the Home Orchard",
        publisher: "Penn State Extension",
        url: "https://extension.psu.edu/asian-pears-in-the-home-orchard-variety-selection",
        note:
          "Tree-ripening, lift-and-twist harvest, taste testing, and August cultivar windows.",
      },
      {
        title: "Harvesting and Ripening Pears",
        publisher: "Iowa State University Extension and Outreach",
        url:
          "https://blogs.extension.iastate.edu/answerline/2016/08/04/harvesting-and-ripening-pears/",
        note:
          "August season, lift test, internal breakdown, indoor ripening, and the Asian pear distinction.",
      },
      {
        title: "Fruit Update - July 1, 2026",
        publisher: "University of Minnesota Extension",
        url: "https://blog-fruit-vegetable-ipm.extension.umn.edu/2026/07/written-by-madeline-wimmer-umn.html",
        note:
          "Current Summercrisp maturity, mid-August timing, refrigeration, and use guidance.",
      },
      {
        title: "Home Garden Pears",
        publisher: "University of Georgia Cooperative Extension",
        url:
          "https://extension.uga.edu/publications/detail.html?number=C742&title=home-garden-pears",
        note: "Lenticel color, picking maturity, texture, and internal breakdown.",
      },
      {
        title: "Growing Tree Fruits and Nuts at Home",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/catalog/ec-819-growing-tree-fruits-nuts-home",
        note: "European and Asian pear harvest and storage differences.",
      },
    ],
    relatedSlugs: [
      "august-fruit-harvest-guide",
      "apples-falling-before-ripe",
      "protect-ripening-fruit-birds-squirrels-wasps",
    ],
  },
  {
    slug: "protect-ripening-fruit-birds-squirrels-wasps",
    category: "Organic-first",
    tags: [
      "Protect fruit trees",
      "Bird netting",
      "Squirrels",
      "Wasps",
      "Organic garden",
    ],
    aliases: [
      "How to keep birds off fruit trees",
      "Protect fruit from squirrels",
      "Wasps eating ripe fruit",
      "Fruit tree netting",
    ],
    title: "How to protect ripening fruit from birds, squirrels, and wasps without spraying everything.",
    shortTitle: "Protect ripening fruit without spraying",
    dek: "Start with the animal, then protect a realistic share of the crop. Timely harvest, cleanup, framed netting, and selected fruit bags outperform many dramatic homemade deterrents.",
    answer:
      "For a small backyard crop, the most reliable low-intervention strategy is physical exclusion plus timely harvest: suspend bird netting on a frame so wildlife cannot reach fruit through it, protect selected reachable clusters with suitable mesh bags when conditions allow, harvest as soon as fruit is truly ready, and remove split, overripe, or fallen fruit daily. Identify the visitor first. Netting is effective for birds, less dependable against squirrels that can chew plastic, and loose netting can entangle wildlife. Wasps are attracted to sweet damaged fruit, so sanitation and prompt picking reduce the food source without eliminating beneficial paper wasps.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "10 min read",
    place: "Small fruit trees, vines, and backyard harvests",
    season: "Fruit color change through harvest",
    image: "/editorial/protect-ripening-fruit.webp",
    imagePosition: "center 50%",
    imageAlt:
      "A small backyard fruit tree protected by neat framed netting during harvest",
    firstChecks: [
      "Identify pecks, tooth marks, missing whole fruit, split skins, or insect entry holes.",
      "Decide whether to protect the whole small tree or only a reachable harvest zone.",
      "Remove damaged and overripe fruit before adding barriers.",
    ],
    sections: [
      {
        id: "culprit",
        heading: "Different damage calls for different protection",
        paragraphs: [
          "Birds often peck exposed ripening fruit or knock it down. Squirrels may remove whole fruit, leave tooth marks, or strip a crop quickly. Wasps feed on sugar from ripe and overripe fruit and are especially noticeable around cracked skins and fallen fruit in late summer.",
          "A small hole with frass or internal tunneling is not bird or squirrel damage. That points toward a fruit insect whose management timing may have begun around bloom. Cut open a sample before building a barrier for the wrong visitor.",
        ],
        image: {
          src: "/editorial/fruit-tree-netting-frame.webp",
          alt:
            "Fine bird netting held away from fruit on a simple frame around a small tree",
          caption:
            "A frame keeps netting away from fruit and reduces access through the mesh.",
          width: 1536,
          height: 1024,
        },
      },
      {
        id: "birds",
        heading: "For birds, framed netting is the dependable option",
        paragraphs: [
          "UC IPM and Oregon State identify netting as the most effective exclusion method for small orchards and home-scale fruit. Hold the mesh away from the canopy on a frame, close gaps at the bottom, and inspect it regularly. Birds can still reach fruit pressed against loose netting.",
          "Choose mesh intended for crop protection and install it taut enough to avoid loose folds. Check for trapped wildlife, repair openings, and remove or store the net after harvest. Reflective tape, fake predators, and noise may work briefly, but birds often adapt unless devices are changed and combined.",
        ],
      },
      {
        id: "bags",
        heading: "Protect the fruit you can realistically use",
        paragraphs: [
          "On a large tree, covering every branch may be impractical. Mesh fruit bags can protect selected apples or clusters when installed before damage, with enough room for growth and airflow. Bag only dry, intact fruit and inspect after rain; a bag is not a cure for larvae already inside.",
          "This selective approach also creates a useful harvest experiment. Compare protected and unprotected fruit, note the date damage begins, and refine next year's timing instead of buying a complicated orchard system immediately.",
        ],
      },
      {
        id: "squirrels",
        heading: "Squirrels are a harder exclusion problem",
        paragraphs: [
          "Tree squirrels climb and jump well, and they can chew through plastic netting. A barrier may protect one small isolated tree, but no simple scent, sound, or plastic owl reliably makes an accessible canopy squirrel-proof.",
          "Protect a limited reachable zone, harvest promptly, trim only genuinely useful access routes when tree health and utility safety allow, and avoid illegal or hazardous control. Wildlife rules vary; local Extension or wildlife agencies can explain lawful options.",
        ],
      },
      {
        id: "wasps",
        heading: "Reduce the late-summer buffet for wasps",
        paragraphs: [
          "Adult yellowjackets and paper wasps seek sugary foods, including juices from ripe and overripe fruit. Pick ready fruit, remove split and fermenting pieces, cover outdoor food and drinks, and watch where insects travel before reaching into dense foliage.",
          "Paper wasps also hunt caterpillars and can be useful garden predators. The goal is not to spray every wasp near a peach. If a nest creates a sting risk near a path or harvest area, use local nest-identification and safety guidance rather than approaching it casually.",
        ],
      },
      {
        id: "seven-day",
        heading: "A seven-day harvest defense for a small garden",
        items: [
          "Day 1: identify damage and remove all split, rotten, and fallen fruit.",
          "Day 1: taste-test the crop so ripe fruit is not left outside unnecessarily.",
          "Day 2: frame and secure netting over the smallest valuable tree or branch zone.",
          "Daily: harvest ready fruit in the morning and inspect the barrier.",
          "After rain: check bags and netting for trapped moisture, gaps, and damaged fruit.",
          "After harvest: remove barriers, clean the ground, and record what worked.",
        ],
        callout:
          "Protect a harvestable share well. A neat barrier, daily picking, and cleanup usually beat an arsenal of unproven repellents.",
      },
    ],
    faq: [
      {
        question: "What is the best way to keep birds off a small fruit tree?",
        answer:
          "Use crop netting supported on a frame and closed around the tree so birds cannot reach fruit through the mesh. Inspect it often and remove it after harvest.",
      },
      {
        question: "Will bird netting stop squirrels?",
        answer:
          "It may slow access to one small tree, but squirrels can climb, jump, and chew plastic. Treat netting as less dependable for squirrels and protect a realistic portion of the crop.",
      },
      {
        question: "Why do wasps gather around my fruit tree in August?",
        answer:
          "Adult wasps seek sugar from ripe, split, and overripe fruit. Prompt harvest and daily removal of fallen or fermenting fruit reduce that attraction.",
      },
      {
        question: "Do fake owls keep birds away from fruit?",
        answer:
          "They may create a brief response, but birds often become accustomed to stationary visual devices. Physical exclusion is more dependable for a small high-value crop.",
      },
      {
        question: "Can I bag fruit that is almost ripe?",
        answer:
          "You can protect selected dry, intact fruit with breathable crop bags, but inspect them after rain and allow room and airflow. Late bagging does not remove insects already feeding inside.",
      },
    ],
    sources: [
      {
        title: "Birds on Tree Fruits and Vines",
        publisher: "UC Statewide Integrated Pest Management Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/birds/",
        note:
          "Bird-damage monitoring, framed netting, mesh size, and the limits of frightening devices.",
      },
      {
        title: "Nonlethal Bird Deterrent Strategies",
        publisher: "Oregon State University Extension Service",
        url:
          "https://extension.oregonstate.edu/catalog/em-9286-nonlethal-bird-deterrent-strategies",
        note: "Physical exclusion and home-scale bird protection.",
      },
      {
        title: "Tree Squirrels",
        publisher: "UC Statewide Integrated Pest Management Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/tree-squirrels/",
        note:
          "Squirrel behavior, fruit damage, exclusion limitations, and legal context.",
      },
      {
        title: "Wasps and Bees",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-insects/wasps-and-bees",
        note:
          "Late-summer sugar feeding, ripe fruit attraction, identification, and safety.",
      },
      {
        title: "Softer, Smarter Codling Moth Control for Home Orchards",
        publisher: "Oregon State University Extension Service",
        url:
          "https://extension.oregonstate.edu/news/softer-smarter-codling-moth-control-home-orchards",
        note:
          "Individual mesh-bag exclusion and the importance of timing before larvae enter fruit.",
      },
    ],
    relatedSlugs: [
      "august-fruit-harvest-guide",
      "figs-not-ripening-on-tree",
      "apples-falling-before-ripe",
    ],
  },
];
