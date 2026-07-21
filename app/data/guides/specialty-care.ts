import type { PlantGuide } from "../guide-types";

const publishedAt = "2026-07-21";

export const specialtyCareGuides: PlantGuide[] = [
  {
    slug: "best-succulent-soil-mix",
    category: "Indoor favorite",
    title: "The best succulent soil is not one recipe. Here is how to build the right mix.",
    shortTitle: "How to choose succulent soil",
    dek: "A useful mix holds enough moisture for roots, then gives them air again. Start simple and adjust by what the pot does after watering.",
    answer:
      "For most indoor succulents, start with a mix that contains about one part organic material to two parts coarse mineral material, then adjust for your plant and room. The finished mix should wet throughout, drain freely, and return air to the root zone instead of staying dense for many days. Pot size, drainage, light, humidity, and the species matter as much as the bag label.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Indoor pots and container gardens",
    season: "Repotting and root care",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center",
    imageAlt: "Potting mix, a hand scoop, and a small container ready for repotting",
    firstChecks: [
      "Confirm that the container has a real drainage hole.",
      "Notice how long the current root zone stays damp after a full watering.",
      "Identify the succulent before choosing a very dry or moisture-retentive blend.",
    ],
    sections: [
      {
        id: "job",
        heading: "Judge soil by the job it performs",
        paragraphs: [
          "Roots need both water and oxygen. Ordinary indoor potting soil can hold too much water for many succulents, especially in a large plastic pot or a lower-light room. A useful succulent mix absorbs water across the root ball, drains the excess, and does not collapse into a dense airless mass.",
          "A bag labeled cactus and succulent mix is a reasonable beginner starting point, not a guarantee. Test a small pot after watering and watch how the mix behaves in your own conditions.",
        ],
      },
      {
        id: "starting-mix",
        heading: "A practical starting blend",
        paragraphs: [
          "Iowa State suggests one part organic material to two parts mineral material for indoor succulents. The organic part can be potting mix, fine bark, coir, or compost. The mineral part can include perlite, pumice, coarse sand, or fine gravel. Measure by volume and mix thoroughly so roots do not sit in separate wet and dry layers.",
          "This is a starting range, not a commandment. A thirsty, fine-rooted trailing succulent may need slightly more moisture retention than a desert cactus. A humid room, dim window, or plastic pot may call for more coarse mineral material and a smaller container.",
        ],
      },
      {
        id: "ingredients",
        heading: "What each ingredient changes",
        items: [
          "Potting mix, bark, coir, or compost holds water and nutrients; too much can keep a low-light pot wet.",
          "Pumice adds durable pore space and weight without breaking down quickly.",
          "Perlite adds lightness and air but can float upward during watering.",
          "Coarse horticultural sand can improve texture; fine sand may pack tightly and reduce the air space you wanted.",
          "Fine gravel adds drainage and weight but little water storage, so use it as part of a mix rather than a bottom layer.",
        ],
      },
      {
        id: "pot",
        heading: "The pot is part of the soil recipe",
        paragraphs: [
          "A drainage hole is more important than decorative gravel at the bottom. Iowa State specifically warns that a gravel layer does not replace drainage and can leave the saturated zone higher in the pot. Keep a plant in a draining nursery pot inside the decorative vessel if you cannot drill it.",
          "Choose a pot close to the size of the root system. Terracotta can dry faster through its sides, while glazed ceramic and plastic retain moisture longer. Those differences are useful levers when the same mix behaves differently across homes.",
        ],
      },
      {
        id: "adjust",
        heading: "Adjust after three real watering cycles",
        items: [
          "If the deep mix remains wet for many days and the plant is not using water, add coarse mineral material or reduce pot size.",
          "If water runs around a hardened root ball without wetting it, break up the hydrophobic mix and add fresh material that can rehydrate.",
          "If roots stay healthy but the plant dries extremely fast, add a little more moisture-retentive material or change the pot.",
          "Change one variable at a time and record the result.",
        ],
        callout: "The best recipe is the one whose wet-to-dry behavior you can read reliably.",
      },
    ],
    faq: [
      {
        question: "Can I use regular potting soil for succulents?",
        answer:
          "It often holds too much water on its own. Use it as the organic portion of a blend with coarse mineral material, or choose a tested commercial succulent mix and watch how quickly it restores air after watering.",
      },
      {
        question: "Is sand good for succulent soil?",
        answer:
          "Coarse horticultural sand can be useful. Very fine sand can pack pores and slow drainage, so texture matters more than the word sand on a bag.",
      },
      {
        question: "Should I put rocks in the bottom of a succulent pot?",
        answer:
          "No. A rock layer does not substitute for a drainage hole and can raise the saturated zone within the pot. Mix suitable mineral material throughout the medium instead.",
      },
      {
        question: "Do I need to replace succulent soil after root rot?",
        answer:
          "Yes. Discard the old saturated mix, remove dead tissue, clean the container, and use fresh, airy mix in a pot sized to the healthy roots or cutting that remains.",
      },
    ],
    sources: [
      {
        title: "Growing Succulents Indoors",
        publisher: "Iowa State University Extension",
        url: "https://yardandgarden.extension.iastate.edu/how-to/growing-succulents-indoors",
        note: "Starting mix ratio, drainage, container, and watering guidance.",
      },
      {
        title: "Homemade Potting Mix",
        publisher: "University of Florida IFAS Extension",
        url: "https://sfyl.ifas.ufl.edu/lawn-and-garden/homemade-potting-mix/",
        note: "Component roles and an alternative Extension succulent-mix recipe.",
      },
      {
        title: "Growing Succulents",
        publisher: "Montana State University Extension",
        url: "https://extension-store.montana.edu/assets/publications/montguidepdfs/mt202208ag-growing-succulents.pdf",
        note: "Potting-media texture, drainage, and container guidance.",
      },
    ],
    relatedSlugs: [
      "how-often-water-succulents",
      "mushy-succulent-leaves-root-rot",
      "costco-succulent-garden-separate-repot",
    ],
  },
  {
    slug: "desert-rose-yellow-leaves-caudex",
    category: "Indoor favorite",
    title: "Desert rose leaves turning yellow: check the season, soil, and caudex.",
    shortTitle: "Desert rose yellow leaves",
    dek: "Leaf drop can be a normal winter pause or a warning from wet roots. The swollen trunk and potting mix help you tell which story fits.",
    answer:
      "When desert rose leaves turn yellow, first check the season and temperature, then the soil and swollen trunk, called the caudex. Leaf drop can be normal as the plant enters cool-season dormancy. Yellowing during warm active growth with wet mix, a soft dark caudex, or a sour smell is more concerning for excess moisture and root rot. Do not water again until you know which pattern you have.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Sunny windows and warm patios",
    season: "Seasonal diagnosis",
    image:
      "https://images.unsplash.com/photo-1586170112425-3adf1ed0146e?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 56%",
    imageAlt: "A potted desert rose showing its thick caudex and branching form",
    firstChecks: [
      "Note the recent nighttime temperatures and whether days are shortening.",
      "Feel the root zone and confirm that the pot drains through several holes.",
      "Press the caudex gently and inspect the soil line for dark, soft, or sunken tissue.",
    ],
    sections: [
      {
        id: "dormancy",
        heading: "Pattern one: a seasonal pause",
        paragraphs: [
          "Desert rose may drop leaves and become dormant as temperatures cool. NC State recommends bringing it inside when nights approach 55°F and reducing water. If leaf drop follows that seasonal change while the caudex and stems remain firm and clean, the plant may be resting rather than dying.",
          "Keep a dormant plant warm and well lit. Reduce watering sharply because a leafless plant uses much less moisture, then increase gradually only when active growth returns.",
        ],
      },
      {
        id: "wet",
        heading: "Pattern two: yellow leaves in wet soil",
        paragraphs: [
          "During warm active growth, widespread yellowing with consistently damp mix deserves a root inspection. Desert rose is highly prone to rot in waterlogged conditions. Remove the plant from a decorative outer pot, clear standing water, and check whether the drainage path is open.",
          "If the root ball smells sour or roots are dark and soft, remove dead tissue with a clean blade and repot the healthy portion in a clean draining container with a coarse, porous mix. Do not solve saturated soil by adding fertilizer.",
        ],
      },
      {
        id: "caudex",
        heading: "Let the caudex refine the diagnosis",
        paragraphs: [
          "The caudex is the swollen water-storing trunk that makes a desert rose recognizable. A healthy caudex should feel firm, though a thirsty plant may lose some fullness. A localized soft, dark, collapsing, or foul-smelling area, especially at the wet soil line, is a warning for rot.",
          "Use light pressure and compare several areas; do not repeatedly squeeze or puncture the plant. If softness is spreading upward, cut above damaged tissue while a firm healthy section remains. Wear gloves because desert rose sap is toxic and can irritate skin.",
        ],
      },
      {
        id: "other-causes",
        heading: "Other clues that change the answer",
        items: [
          "A sudden move into harsh sun can scorch leaves; acclimate to stronger light gradually.",
          "Cold exposure can trigger rapid leaf drop even before obvious stem damage appears.",
          "Very dry mix with a slightly less full but still firm caudex can indicate thirst during active growth.",
          "Fine stippling, webbing, or cottony clusters point toward pests rather than a seasonal change.",
        ],
      },
      {
        id: "recovery",
        heading: "Build a safer recovery rhythm",
        paragraphs: [
          "During active warm growth, give the plant abundant light, water thoroughly when the mix is ready, and let excess leave the pot. During dormancy, keep it protected from cold and rain and use far less water. The correct rhythm follows growth and temperature, not a year-round calendar.",
        ],
        callout: "Yellow leaves are not the diagnosis. Season, moisture, and a firm or failing caudex make the diagnosis useful.",
      },
    ],
    faq: [
      {
        question: "Does desert rose lose all its leaves in winter?",
        answer:
          "It can. Cool temperatures and shorter days may trigger partial or complete dormancy. Keep the plant warm and bright, reduce watering, and make sure the caudex remains firm and free of rot.",
      },
      {
        question: "What does a healthy desert rose caudex feel like?",
        answer:
          "It should generally feel firm. A plant using stored water may become a little less full, but dark, collapsing, foul-smelling, or spreading soft tissue is more concerning for rot.",
      },
      {
        question: "Should I water a leafless desert rose?",
        answer:
          "Use very little water while it is dormant because it is using moisture slowly. Keep it protected from cold and winter rain, and resume more regular watering only as warmth and active growth return.",
      },
      {
        question: "Is desert rose poisonous?",
        answer:
          "Yes. All parts contain toxic sap. Keep it away from children and pets, wear gloves when cutting, and wash tools and skin after contact.",
      },
    ],
    sources: [
      {
        title: "Desert Rose",
        publisher: "NC State Extension Plant Toolbox",
        url: "https://plants.ces.ncsu.edu/plants/adenium/common-name/desert-rose/",
        note: "Dormancy, temperature, drainage, root-rot, and toxicity guidance.",
      },
      {
        title: "Florida Foliage House Plant Care: Adenium obesum",
        publisher: "University of Florida IFAS Extension",
        url: "https://ask.ifas.ufl.edu/publication/EP474",
        note: "High-light, watering, temperature, and active-growth care.",
      },
      {
        title: "Adenium obesum",
        publisher: "Oregon State University Landscape Plants",
        url: "https://landscapeplants.oregonstate.edu/plants/adenium-obesum",
        note: "Caudex description, porous media, waterlogging risk, and toxicity.",
      },
    ],
    relatedSlugs: [
      "desert-rose-not-blooming",
      "best-succulent-soil-mix",
      "mushy-succulent-leaves-root-rot",
    ],
  },
  {
    slug: "desert-rose-not-blooming",
    category: "Indoor favorite",
    title: "Desert rose not blooming? Give it summer sun before more fertilizer.",
    shortTitle: "Why desert rose is not blooming",
    dek: "This flowering succulent runs on abundant light, warmth, active growth, and drainage. Feeding cannot replace a dim location.",
    answer:
      "A desert rose that grows but does not bloom most often needs more light. During summer active growth, aim for at least six hours of bright sun, acclimating the plant gradually to prevent scorch. Keep it warm, use a draining pot, water without waterlogging, and feed lightly according to the fertilizer label only after the light and roots are right.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "8 min read",
    place: "Sunny patios and brightest windows",
    season: "Warm-season flowering",
    image:
      "https://images.unsplash.com/photo-1658768720987-91518ce03b56?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center",
    imageAlt: "A desert rose covered with pink and white trumpet-shaped flowers",
    firstChecks: [
      "Count the hours of direct, unobstructed summer sun the leaves actually receive.",
      "Confirm that nights are warm and the plant is producing active new growth.",
      "Check drainage and root health before adding fertilizer.",
    ],
    sections: [
      {
        id: "light",
        heading: "Light is the first flowering ingredient",
        paragraphs: [
          "UF/IFAS states that desert rose will not flower in low light and recommends six or more hours of high light during summer. A bright-looking room several feet from a window may still be too dim. Move the plant toward direct sun in stages so leaves formed indoors have time to acclimate.",
          "If the best window cannot provide that exposure, a suitable horticultural light can extend usable light. Judge the result by compact new growth and bud formation rather than the brightness your eyes perceive.",
        ],
      },
      {
        id: "season",
        heading: "Ask whether the plant is in its flowering season",
        paragraphs: [
          "Desert rose flowers during warm active growth. Cool nights, a recent move indoors, or winter dormancy can pause both leaves and buds. Protect it when nights approach 55°F and do not try to force a dormant plant with more water.",
          "When warm conditions return and new leaves appear, increase water gradually and restore the high-light position. Flowering follows a healthy growth cycle, not a one-day treatment.",
        ],
      },
      {
        id: "roots",
        heading: "Healthy roots support flowers",
        paragraphs: [
          "Use a pot with several drainage holes and a porous mix. Water regularly during active growth but never leave the root zone waterlogged. A plant protecting damaged roots will not redirect its energy into reliable flowering.",
          "An oversized pot stays wet longer and can hide root problems. Repot only when needed, keep the caudex at a safe depth, and inspect any soft dark tissue before returning the plant to a flowering routine.",
        ],
      },
      {
        id: "feed",
        heading: "Feed lightly after the basics are working",
        paragraphs: [
          "UF/IFAS recommends a low dose of liquid fertilizer during the summer growing season, following the product label. NC State recommends spring feeding to encourage bloom. Apply fertilizer to an actively growing, properly watered plant rather than dry or damaged roots.",
          "More fertilizer is not a shortcut for more light. Excess salts can injure roots, and lush soft growth is not the same as buds. Begin conservatively and keep notes on the product, dilution, and date.",
        ],
      },
      {
        id: "checklist",
        heading: "A bloom-first summer checklist",
        items: [
          "Acclimate toward at least six hours of strong summer light.",
          "Keep the plant warm and protected from prolonged rain.",
          "Water deeply during active growth, then let the porous mix recover air.",
          "Feed lightly according to the label after active growth is established.",
          "Do not make several changes at once; buds take time to follow better conditions.",
        ],
        callout: "Before buying a bloom booster, measure the light the plant receives.",
      },
    ],
    faq: [
      {
        question: "How much sun does desert rose need to bloom?",
        answer:
          "UF/IFAS recommends high light for six hours or more per day during summer. Acclimate gradually if the plant has been indoors or shaded, because a sudden move can scorch leaves.",
      },
      {
        question: "Can desert rose bloom indoors?",
        answer:
          "It can near an exceptionally sunny window or with suitable supplemental light, but an average bright room may not provide enough intensity for reliable flowering.",
      },
      {
        question: "Should I use bloom booster fertilizer?",
        answer:
          "Correct light, warmth, drainage, and active growth first. Then use a low dose of a suitable fertilizer exactly as labeled. A concentrated bloom product cannot replace the energy from adequate light.",
      },
      {
        question: "Will pruning make desert rose bloom?",
        answer:
          "Pruning can shape branches and future growing tips, but it also removes tissue and may delay flowering temporarily. Time shaping for active growth, use clean tools and gloves, and fix low light before expecting pruning to create buds.",
      },
    ],
    sources: [
      {
        title: "Florida Foliage House Plant Care: Adenium obesum",
        publisher: "University of Florida IFAS Extension",
        url: "https://ask.ifas.ufl.edu/publication/EP474",
        note: "Six-hour high-light requirement, flowering, watering, and fertilizer guidance.",
      },
      {
        title: "Desert Azalea: Adenium obesum",
        publisher: "NC State Extension Plant Toolbox",
        url: "https://plants.ces.ncsu.edu/plants/adenium-obesum/common-name/desert-azalea/",
        note: "Full-sun, drainage, spring feeding, temperature, and dormancy guidance.",
      },
      {
        title: "Adenium obesum",
        publisher: "Oregon State University Landscape Plants",
        url: "https://landscapeplants.oregonstate.edu/plants/adenium-obesum",
        note: "Porous media, temperature, and waterlogging guidance.",
      },
    ],
    relatedSlugs: [
      "desert-rose-yellow-leaves-caudex",
      "best-succulent-soil-mix",
      "how-often-water-succulents",
    ],
  },
  {
    slug: "string-of-pearls-shriveled-mushy-bald",
    category: "Indoor favorite",
    title: "String of pearls shriveled, mushy, or bald? Read the pearls and roots together.",
    shortTitle: "String of pearls problem guide",
    dek: "Wrinkled pearls can mean a dry root ball or roots too damaged to drink. The soil, stem base, and pattern keep you from choosing the opposite cure.",
    answer:
      "For a shriveled string of pearls, check the root zone before watering: dry mix and firm stems point toward thirst, while damp mix with a soft stem base points toward root damage. Mushy or translucent pearls usually signal excess moisture. A bald crown often needs better top light and fresh stems laid across the mix so their nodes can root.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Bright shelves and hanging planters",
    season: "Year-round diagnosis",
    image:
      "https://images.unsplash.com/photo-1546896665-6b5dbfd32790?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 54%",
    imageAlt: "String of pearls trailing from a small indoor pot",
    firstChecks: [
      "Feel deep into the shallow root zone instead of judging one pearl.",
      "Inspect the crown and stem at the soil line for softness or dark tissue.",
      "Look down from above and check whether light reaches the top of the pot.",
    ],
    sections: [
      {
        id: "shriveled",
        heading: "Shriveled pearls: dry roots or failed roots?",
        paragraphs: [
          "Slightly shriveled pearls in dry mix can signal that stored water is being used. Water thoroughly, drain the pot, and watch for the pearls to regain firmness. If the mix is damp but the pearls continue to collapse, do not add more water; unpot the plant and inspect whether roots and the stem base are still firm.",
          "Both underwatering and overwatering can produce a wilted appearance. NC State explicitly lists both as causes, which is why the root-zone check comes before the cure.",
        ],
      },
      {
        id: "mushy",
        heading: "Mushy or translucent pearls: act before the stem fails",
        paragraphs: [
          "Soft, swollen, yellow, or translucent pearls with wet soil indicate excess moisture more strongly than thirst. Stop watering, empty the outer pot, and inspect the shallow roots. Remove rotten tissue and keep healthy green stem sections for propagation if the crown is failing.",
          "Use a shallow container with a drainage hole and a fast-draining mix. Wisconsin Horticulture notes that string of pearls has a limited root system, so a large volume of wet mix raises the risk of rot.",
        ],
      },
      {
        id: "bald",
        heading: "A bald top is often a light and contact problem",
        paragraphs: [
          "A hanging pot may receive window light on its trailing sides while the crown sits above the window line in shade. Move it so bright indirect light reaches the top of the pot, acclimating carefully because harsh direct sun can scorch the pearls.",
          "String of pearls naturally roots where stems touch soil. Coil a few healthy vines over the bare surface and pin nodes gently against fresh mix. Those contact points can root and fill the crown more naturally than burying the pearls.",
        ],
      },
      {
        id: "propagate",
        heading: "Make an insurance pot from healthy stems",
        items: [
          "Cut a healthy 3- to 5-inch stem with several firm pearls.",
          "Remove a few pearls from the lower section to expose nodes.",
          "Lay the nodes on moist, fast-draining mix or insert the bare end shallowly.",
          "Keep bright indirect light and modest, even moisture while roots establish, without saturating the pot.",
          "Take several small cuttings rather than depending on one long strand.",
        ],
      },
      {
        id: "steady-care",
        heading: "Keep the pot readable after recovery",
        paragraphs: [
          "Give bright indirect light, a shallow draining pot, and an airy mix. Water after the mix dries and the pearls begin to show a need, using more restraint in cooler, slower winter growth. Check periodically for mealybugs and aphids along crowded stems.",
        ],
        callout: "Read the pearl, soil, and stem together. Any one clue by itself can send watering in the wrong direction.",
      },
    ],
    faq: [
      {
        question: "How do I know when string of pearls needs water?",
        answer:
          "Check that the shallow root zone is dry and look for pearls beginning to lose some plumpness. Then water thoroughly and drain. Do not water from appearance alone if the mix is still damp.",
      },
      {
        question: "Why is string of pearls bald on top?",
        answer:
          "The crown may receive less light than the trailing vines, and older stems can lose leaves. Improve top light and lay healthy stem nodes across fresh mix so they can root and refill the surface.",
      },
      {
        question: "Can I save string of pearls with root rot?",
        answer:
          "Yes, if healthy firm stems remain. Cut above all soft dark tissue and propagate several clean sections in fresh draining mix while correcting the pot, light, and watering problem.",
      },
      {
        question: "Is string of pearls safe for pets?",
        answer:
          "No. NC State lists the plant as toxic to people and pets if ingested, and the sap can irritate skin. Keep trailing stems out of reach and wear gloves when taking many cuttings.",
      },
    ],
    sources: [
      {
        title: "String of Pearls: Curio rowleyanus",
        publisher: "NC State Extension Plant Toolbox",
        url: "https://plants.ces.ncsu.edu/plants/curio-rowleyanus/common-name/senecio-rowleyanus/",
        note: "Light, watering, symptom, propagation, pest, and toxicity guidance.",
      },
      {
        title: "String of Pearls, Senecio rowleyanus",
        publisher: "University of Wisconsin-Madison Horticulture",
        url: "https://hort.extension.wisc.edu/articles/string-of-pearls-senecio-rowleyanus/",
        note: "Shallow roots, drainage, watering, and stem-cutting guidance.",
      },
      {
        title: "Propagating Houseplants",
        publisher: "Iowa State University Extension",
        url: "https://yardandgarden.extension.iastate.edu/how-to/propagating-houseplants",
        note: "Species-specific propagation method and seasonal timing.",
      },
    ],
    relatedSlugs: [
      "how-often-water-succulents",
      "best-succulent-soil-mix",
      "mushy-succulent-leaves-root-rot",
    ],
  },
  {
    slug: "tomato-blossom-end-rot-eggshells",
    category: "Organic-first",
    title: "Tomato blossom-end rot: why eggshells usually do not fix the fruit.",
    shortTitle: "Tomato blossom-end rot and eggshells",
    dek: "The black leathery patch is a calcium-delivery problem, usually driven by uneven moisture. Protect the next fruits with water management, mulch, and evidence from a soil test.",
    answer:
      "Blossom-end rot is a physiological disorder, not a contagious disease. The developing fruit is not receiving enough calcium, most often because uneven soil moisture, root stress, or excess fertilizer interferes with uptake and transport. Eggshells break down slowly and cannot heal an affected tomato. Remove damaged fruit, keep the root zone evenly moist, mulch, protect roots, avoid excess nitrogen, and add calcium only if a soil test shows it is needed.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Vegetable beds and tomato containers",
    season: "Flowering and fruit set",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Blossom_end_rot.JPG/1280px-Blossom_end_rot.JPG",
    imagePosition: "center",
    imageAlt: "Tomatoes with dark sunken leathery patches at the blossom end",
    firstChecks: [
      "Confirm that the patch begins at the end opposite the fruit stem.",
      "Review dry spells, heat, heavy rain, and changes in irrigation during early fruit growth.",
      "Check soil moisture in the root zone and test soil before adding calcium or lime.",
    ],
    sections: [
      {
        id: "identify",
        heading: "Recognize the blossom-end pattern",
        paragraphs: [
          "The first spot is often water-soaked on the blossom end, opposite the stem. It enlarges, sinks, and becomes brown to black and leathery. Iowa State notes that secondary fungi and bacteria may colonize the dead area, but they did not cause the original disorder.",
          "Because blossom-end rot is physiological, it does not spread from one plant to another. A spot elsewhere on the fruit, rings, leaf lesions, or insect holes may require a different diagnosis.",
        ],
      },
      {
        id: "calcium-water",
        heading: "The fruit lacks calcium, but the soil often does not",
        paragraphs: [
          "Calcium moves with water from roots into growing tissue. If the root zone swings from very dry to very wet, roots are damaged, or salts interfere with uptake, the fast-growing fruit may be deprived even when the soil contains calcium. Heavy nitrogen feeding can also push rapid leafy growth and increase the problem.",
          "That is why adding a calcium-rich material without testing can miss the cause. Mississippi State Extension advises that eggshells do not fix blossom-end rot when uneven water availability is preventing uptake.",
        ],
      },
      {
        id: "eggshells",
        heading: "What eggshells can and cannot do",
        paragraphs: [
          "Finely crushed eggshells can eventually contribute calcium carbonate to soil or compost, but they release it slowly. They cannot reverse dead tissue in a tomato already showing blossom-end rot and may not help future fruit if the soil already has adequate calcium.",
          "Compost clean, crushed shells if that fits your household routine. Treat them as a slow soil ingredient, not an emergency medicine. Use a laboratory soil test before adding lime, gypsum, or another calcium amendment because each affects soil differently.",
        ],
      },
      {
        id: "next-fruit",
        heading: "Protect the next set of fruit",
        items: [
          "Water deeply enough to moisten the root zone and keep moisture reasonably even rather than alternating drought and saturation.",
          "Add 2 to 3 inches of organic mulch while keeping it slightly away from the stem.",
          "Avoid damaging roots with deep cultivation near the plant.",
          "Pause heavy high-nitrogen feeding and follow soil-test recommendations.",
          "For containers, use enough pot volume and check more often during heat because small pots dry quickly.",
        ],
      },
      {
        id: "fruit",
        heading: "The marked fruit will not heal",
        paragraphs: [
          "Once tissue becomes leathery and dark, it will not return to normal. Remove a badly affected fruit so the plant can continue directing resources to healthy growth. Then monitor the next cluster; later fruit can develop normally after moisture stress is corrected.",
          "Do not spray several homemade treatments onto fruit and leaves. A steady root-zone environment is the higher-value correction, and a local Extension office can interpret a soil test for your region.",
        ],
        callout: "Eggshells answer the word calcium. Consistent moisture answers the plant's calcium-delivery problem.",
      },
    ],
    faq: [
      {
        question: "Can blossom-end rot spread to other tomatoes?",
        answer:
          "No. It is a physiological disorder rather than a contagious pathogen. Several fruits can develop it because they share the same moisture, root, or nutrient conditions.",
      },
      {
        question: "Can a tomato recover from blossom-end rot?",
        answer:
          "The damaged tissue cannot heal. Remove badly affected fruit and correct moisture management so later fruit has a better chance to develop normally.",
      },
      {
        question: "Should I add Cal-Mag or calcium spray?",
        answer:
          "Do not add calcium by guesswork. Test the soil and correct uneven moisture and root stress first. Some Extension programs discuss calcium products for confirmed needs, but they cannot repair an already damaged fruit.",
      },
      {
        question: "Do eggshells add calcium to garden soil?",
        answer:
          "They contain calcium carbonate and can contribute calcium as they weather, but decomposition is slow. They are not a quick treatment, and adding them may be unnecessary when a soil test already shows adequate calcium.",
      },
    ],
    sources: [
      {
        title: "Can Eggshells Prevent Blossom End Rot?",
        publisher: "Mississippi State University Extension",
        url: "https://extension.msstate.edu/blogs/extension-for-real-life/can-eggshells-prevent-blossom-end-rot",
        note: "Eggshell limitation, moisture-driven calcium uptake, and soil-testing guidance.",
      },
      {
        title: "Blossom End Rot",
        publisher: "Iowa State University Extension",
        url: "https://yardandgarden.extension.iastate.edu/encyclopedia/blossom-end-rot",
        note: "Identification, cause, and moisture-management guidance.",
      },
      {
        title: "Blossom End Rot",
        publisher: "Utah State University Extension",
        url: "https://extension.usu.edu/vegetableguide/tomato-pepper-eggplant/blossom-end-rot",
        note: "Soil testing, irrigation, mulch, root protection, and fertilizer guidance.",
      },
      {
        title: "Blossom end rot.JPG",
        publisher: "Wikimedia Commons, photo by A13ean",
        url: "https://commons.wikimedia.org/wiki/File:Blossom_end_rot.JPG",
        note: "Guide image, licensed CC BY-SA 3.0 and cropped responsively for display.",
      },
    ],
    relatedSlugs: [
      "eggshells-in-the-garden",
      "tomato-leaf-curl-summer",
      "balcony-snack-garden",
    ],
  },
];
