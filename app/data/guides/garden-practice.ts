import type { PlantGuide } from "../guide-types";

const publishedAt = "2026-07-21";

export const gardenPracticeGuides: PlantGuide[] = [
  {
    slug: "tomato-leaf-curl-summer",
    category: "Farm to table",
    title: "Tomato leaves curling in summer: when to wait and when to worry.",
    shortTitle: "Tomato leaves curling in summer",
    dek: "Older leaves rolling upward in heat can be a stress response. Pale distorted new growth, mottling, or damage across nearby plants deserves a closer diagnosis.",
    answer:
      "If older lower tomato leaves roll upward but stay green and leathery while the plant continues growing and fruiting, the cause is often physiological stress from heat, uneven moisture, heavy pruning, root damage, or excess nitrogen. Keep moisture even, mulch, reduce root disturbance, and avoid severe pruning. Worry more when new growth is pale, stunted, twisted, mottled, or when several kinds of nearby plants show distortion, because viruses or herbicide exposure can look similar.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "9 min read",
    place: "Tomato beds and containers",
    season: "Hot-weather diagnosis",
    image:
      "https://ucanr.edu/sites/default/files/styles/social_media_facebook/public/2023-08/blog101377.png.webp?h=0afd8502&itok=2Ap8CAc7",
    imagePosition: "center",
    imageAlt: "A fruiting tomato plant with leaves curling at their edges",
    firstChecks: [
      "Notice whether rolling begins on older lower leaves or distorted new growth.",
      "Check soil moisture several inches deep and review the previous week's heat and watering.",
      "Look for yellow edges, mottling, stunting, unusual narrow growth, whiteflies, and damage on nearby plants.",
    ],
    sections: [
      {
        id: "physiological",
        heading: "The common summer pattern: physiological leaf roll",
        paragraphs: [
          "Physiological leaf roll usually begins with older lower leaves cupping upward and rolling inward. The leaves may become firm or leathery but otherwise retain normal green color. Washington State University reports that this condition is not believed to reduce fruit yield or quality by itself.",
          "It can follow a wet spring and sudden heat, drought, excess soil moisture, high nitrogen, severe pruning, transplant stress, or root damage. The rolled leaf is reducing exposed surface while the plant responds to conditions; it is not automatically asking for pesticide.",
        ],
      },
      {
        id: "support",
        heading: "Support the plant without overcorrecting",
        items: [
          "Check the root zone and maintain reasonably uniform moisture without keeping it saturated.",
          "Add mulch to slow evaporation, leaving space around the stem.",
          "Avoid deep hoeing, root disturbance, and aggressive removal of healthy leaves.",
          "Pause extra nitrogen fertilizer unless a soil test or clear deficiency supports it.",
          "During extreme heat, temporary afternoon shade can reduce stress without putting the plant in deep shade all day.",
        ],
      },
      {
        id: "virus",
        heading: "When the new growth changes the diagnosis",
        paragraphs: [
          "Tomato yellow leaf curl virus more often affects new growth, with upward cupping, pale green or yellow edges, stunting, and reduced fruit production. Tomato mosaic virus can add mottling, small leaflets, and fruit symptoms. These patterns are different from an otherwise vigorous plant whose older green leaves rolled during heat.",
          "There is no curative spray for a virus-infected plant. Photograph the whole plant and close leaves, check for whiteflies or other vectors, and contact local Extension for confirmation before removing it. Clean tools and avoid moving sap between plants.",
        ],
      },
      {
        id: "herbicide",
        heading: "Twisted growth across the garden can point to herbicide exposure",
        paragraphs: [
          "Herbicide drift or contaminated compost can create narrow, twisted, cupped new growth. If tomatoes and unrelated broadleaf plants change at the same time, ask about recent weed treatment nearby and any new compost, manure, or mulch.",
          "Do not eat damaged produce or replant broadly based on a photo alone. Contact your local Extension office or state pesticide agency with dates, weather, product history, and images for case-specific guidance.",
        ],
      },
      {
        id: "watch",
        heading: "Use the next seven days as evidence",
        paragraphs: [
          "Take a photo today, correct one clear stressor, and compare the newest growth after several days. Old rolled leaves may not flatten completely, but healthy new leaves and continued fruit set support a physiological explanation. Spreading discoloration, stunting, or deformation is a reason to escalate the diagnosis.",
        ],
        callout: "Green older leaves rolling in heat often call for steadier care. Distorted pale new growth calls for investigation.",
      },
    ],
    faq: [
      {
        question: "Should I remove curled tomato leaves?",
        answer:
          "Not if they remain green and functional. Severe pruning can itself contribute to physiological leaf roll. Remove only clearly diseased or dead tissue after identifying the problem, and clean tools between plants.",
      },
      {
        question: "Does curled tomato foliage mean I need more water?",
        answer:
          "Not automatically. Both dry and excessively wet conditions can contribute. Check moisture in the root zone and recent weather before watering, then aim for a more even pattern.",
      },
      {
        question: "Will physiological leaf roll hurt the tomatoes?",
        answer:
          "Washington State University reports that fruit yield and quality are not believed to be affected by physiological leaf roll itself. The underlying heat, water, or root stress still deserves correction.",
      },
      {
        question: "How can I tell leaf roll from tomato yellow leaf curl virus?",
        answer:
          "Physiological roll commonly starts on older green lower leaves while growth continues. Yellow leaf curl virus more often affects new growth and adds pale or yellow edges, stunting, and reduced fruiting. Seek local diagnosis when those warning signs appear.",
      },
    ],
    sources: [
      {
        title: "Tomato Leaves Curling?",
        publisher: "UC Agriculture and Natural Resources",
        url: "https://ucanr.edu/blog/pests-urban-landscape/article/tomato-leaves-curling",
        note: "Environmental, viral, and herbicide causes; also the guide image.",
      },
      {
        title: "Physiological Leaf Roll of Tomato",
        publisher: "Washington State University Extension",
        url: "https://pubs.extension.wsu.edu/product/physiological-leaf-roll-of-tomato/",
        note: "Symptom pattern, yield context, causes, and management.",
      },
      {
        title: "Tomato Leaves Rolling?",
        publisher: "Clemson Cooperative Extension",
        url: "https://hgic.clemson.edu/factsheet/tomato-leaves-rolling/",
        note: "Comparison of physiological roll, viruses, and herbicide injury.",
      },
    ],
    relatedSlugs: [
      "tomato-blossom-end-rot-eggshells",
      "balcony-snack-garden",
      "zucchini-flowers-no-fruit",
    ],
  },
  {
    slug: "zucchini-flowers-no-fruit",
    category: "Farm to table",
    title: "Zucchini flowers but no fruit? Learn the male, female, and pollination check.",
    shortTitle: "Zucchini flowers but no fruit",
    dek: "Early flowers are often male. Once both flower types open together, a one-minute morning pollination check can explain the missing squash.",
    answer:
      "Zucchini commonly produces male flowers before female flowers, so early blooms can fall without making fruit. A female flower has a tiny zucchini-shaped ovary directly behind it; a male flower sits on a thin stem. When both are open the same morning, bees normally transfer pollen. If pollinator visits are scarce, move fresh pollen from a male flower to the center of a female flower with a small clean brush.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "8 min read",
    place: "Vegetable beds and large containers",
    season: "Flowering and fruit set",
    image:
      "https://extension.unh.edu/sites/default/files/styles/landscape_480x310/public/migrated_images/zucchini-372648_1920.jpg?h=8f967d64&itok=935I95fp",
    imagePosition: "center",
    imageAlt: "An open yellow zucchini flower growing above broad green leaves",
    firstChecks: [
      "Look behind each flower for a tiny zucchini-shaped swelling.",
      "Check early in the morning to see whether male and female flowers are open together.",
      "Watch for bee visits before assuming the plant needs fertilizer.",
    ],
    sections: [
      {
        id: "male-female",
        heading: "First, identify the two flowers",
        paragraphs: [
          "Zucchini makes separate male and female flowers on the same plant. A male flower rises on a narrow stem. A female flower has a thicker base that looks like a miniature zucchini. Only the female flower can become a fruit, and it still needs pollen from a male flower.",
          "Early in the season, plants often produce many male flowers first. This is normal preparation, not a failed crop. Give the plant time for female flowers to join the sequence.",
        ],
      },
      {
        id: "pollination",
        heading: "A tiny zucchini that yellows and drops was not fully pollinated",
        paragraphs: [
          "If a female flower closes and its small fruit stops growing, yellows, or rots from the tip, incomplete pollination is a common reason. Rainy mornings, few pollinators, or male and female flowers opening on different days can interrupt transfer.",
          "Squash flowers open early and last only a day, so observe during the morning rather than after petals have folded. Avoid spraying insecticides while flowers are open and pollinators are active.",
        ],
      },
      {
        id: "hand",
        heading: "How to hand-pollinate in one minute",
        items: [
          "Choose a freshly opened male and female zucchini flower in the morning.",
          "Use a small clean paintbrush to collect the visible yellow pollen from the male anther.",
          "Brush pollen across the lobed stigma in the center of the female flower.",
          "Use fresh pollen and repeat on another morning if more female flowers open.",
          "Do not force a closed flower or assume one brief touch always provides enough pollen.",
        ],
      },
      {
        id: "weather-care",
        heading: "When pollination is not the only issue",
        paragraphs: [
          "Extreme heat can delay female flowers and fruit development. Excess nitrogen can create a large leafy plant with fewer useful blooms. Drought, a cramped container, or persistent wet roots can also reduce the plant's ability to hold fruit.",
          "Give zucchini full sun, generous root space, even moisture, and balanced nutrition based on soil or potting-mix guidance. One plant in a tiny patio pot is a difficult setup; bush types still need a large container and daily attention during heat.",
        ],
      },
      {
        id: "pollinator-garden",
        heading: "Make tomorrow's pollination easier",
        paragraphs: [
          "Grow a succession of nectar and pollen flowers nearby, leave some shallow water with safe landing stones, and avoid broad insecticide use. A small diverse garden gives pollinators more reason to return than one zucchini flower that opens for a single morning.",
        ],
        callout: "Many flowers are not the same as many female flowers. Check the base before changing the plant's care.",
      },
    ],
    faq: [
      {
        question: "Why are all my zucchini flowers male?",
        answer:
          "Male flowers commonly appear first, and hot weather can extend that pattern. Keep the plant healthy and observe over the next stretch of growth rather than adding heavy fertilizer.",
      },
      {
        question: "How can I tell a female zucchini flower?",
        answer:
          "Look directly behind the petals. A female flower has a swollen ovary shaped like a tiny zucchini; a male flower sits on a plain narrow stem.",
      },
      {
        question: "What time should I hand-pollinate zucchini?",
        answer:
          "Early morning, when both flowers are freshly open and pollen is available. The blooms last only one day, so afternoon may be too late.",
      },
      {
        question: "Can one zucchini plant make fruit by itself?",
        answer:
          "Yes, if male and female flowers on that plant are open at the same time and pollen is transferred between them. A second plant can improve the overlap of available flowers but is not strictly required.",
      },
    ],
    sources: [
      {
        title: "Zucchini Plants Flowering But Not Producing Fruit",
        publisher: "University of New Hampshire Extension",
        url: "https://extension.unh.edu/blog/2018/06/zucchini-plants-flowering-not-producing-fruit",
        note: "Flower identification, timing, hand pollination, and the guide image.",
      },
      {
        title: "Pollination",
        publisher: "University of Florida IFAS Extension",
        url: "https://sfyl.ifas.ufl.edu/lawn-and-garden/pollination/",
        note: "Squash pollination biology and morning hand-pollination guidance.",
      },
      {
        title: "Why Is My Crop Not Producing Fruit?",
        publisher: "Kansas State University Extension",
        url: "https://extension.k-state.edu/news-and-publications/news/stories/2025/07/horticulture-why-is-my-crop-not-producing-fruit.html",
        note: "Male-first flowering, pollinator checks, and paintbrush transfer.",
      },
    ],
    relatedSlugs: [
      "balcony-snack-garden",
      "tomato-leaf-curl-summer",
      "basil-first-harvest",
    ],
  },
  {
    slug: "balcony-snack-garden",
    category: "Farm to table",
    title: "A balcony snack garden: what to grow for the light and space you actually have.",
    shortTitle: "Build a balcony snack garden",
    dek: "Count sunlight before buying plants, give fruiting crops real root space, and begin with a harvest you already like to eat.",
    answer:
      "For a balcony with six or more hours of direct sun, start with one container cherry tomato, one herb pot, and a shallow box of quick greens or radishes. With four to six hours, favor lettuce, arugula, green onions, parsley, cilantro, and other leafy harvests. Use draining containers, quality potting mix, sturdy supports, and a watering plan that accounts for heat, wind, weight, and neighbors below.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "10 min read",
    place: "Balconies, patios, and sunny doorsteps",
    season: "Small-space growing",
    image:
      "https://images.unsplash.com/photo-1757111084393-2f034590d3b0?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 50%",
    imageAlt: "Edible herbs growing in a sunlit balcony container",
    firstChecks: [
      "Record direct sun on the balcony at three times during one clear day.",
      "Check building rules, railing safety, wind, load, and where drained water will go.",
      "Choose three foods you already reach for in the kitchen.",
    ],
    sections: [
      {
        id: "light-menu",
        heading: "Let sunlight write the menu",
        items: [
          "Eight or more hours: tomatoes, peppers, compact cucumbers, bush beans, and sun-loving herbs have the strongest chance.",
          "Six to eight hours: a container cherry tomato or pepper can work, with herbs and quick greens around the plan.",
          "Four to six hours: prioritize leaf lettuce, arugula, parsley, cilantro, green onions, kale, and radishes.",
          "Less than four useful hours: grow a modest herb or leafy experiment and measure results before buying fruiting crops.",
        ],
      },
      {
        id: "starter-plan",
        heading: "A useful three-container first season",
        paragraphs: [
          "Container one is the anchor: one determinate, dwarf, or cherry tomato in at least a five-gallon pot with a support installed at planting. Container two is the kitchen pot: basil in warm full sun, or parsley and cilantro in cooler or less intense conditions. Container three is the fast harvest: leaf lettuce, arugula, radishes, or green onions sown in short successions.",
          "This gives you one long-season fruit, one repeat-cut herb, and one quick crop. It is easier to learn than a balcony crowded with ten unrelated watering needs.",
        ],
      },
      {
        id: "containers",
        heading: "Choose root space before decorative scale",
        paragraphs: [
          "Fruiting vegetables need larger containers than they appear to need at the store. Virginia Tech recommends a five-gallon minimum for a standard tomato, while lettuce and radishes can grow in much smaller volumes. Larger containers buffer heat and drying but become extremely heavy when wet.",
          "Use drainage holes and a lightweight container potting mix rather than garden soil. Put supports into the pot before roots fill it. Secure tall plants against wind without fastening heavy pots to a railing where they could fall.",
        ],
      },
      {
        id: "water-neighbors",
        heading: "Plan water, wind, and the downstairs neighbor",
        items: [
          "Check containers daily during hot or windy weather, but water only according to the root-zone condition.",
          "Water thoroughly and catch drainage in a saucer, then empty it so roots do not stand in water.",
          "Use mulch on larger vegetable pots to slow evaporation.",
          "Place the tallest trellised crop where it will not shade every smaller pot.",
          "Confirm the balcony's allowed load with the building or a qualified professional before adding large planters.",
        ],
      },
      {
        id: "harvest-loop",
        heading: "Design for a harvest this week and one later",
        paragraphs: [
          "Pick outer lettuce leaves, green onion tops, and herb tips regularly while the tomato establishes. Sow a few radishes or greens every couple of weeks instead of one crowded packet. Harvest basil above a leaf pair so it branches.",
          "At the end of each month, keep the plants you actually ate and replace the ones that only looked aspirational. A balcony garden succeeds when it joins dinner, not when it copies a shopping photo.",
        ],
        callout: "One tomato, one herb, one fast green. That is enough to begin a real farm-to-table habit.",
      },
    ],
    faq: [
      {
        question: "What vegetables grow best on a balcony?",
        answer:
          "Match the crop to light. Fruiting crops need at least six hours of direct sun and often perform better with more; leafy greens, green onions, parsley, and cilantro tolerate partial shade better.",
      },
      {
        question: "How large should a pot be for a balcony tomato?",
        answer:
          "Use at least a five-gallon container for a standard tomato and consider a larger pot for vigorous varieties and hot exposure. Choose a compact or determinate variety and install a sturdy support early.",
      },
      {
        question: "Can I use garden soil in balcony containers?",
        answer:
          "Avoid it. Garden soil can become heavy and poorly aerated in pots. Use a quality container potting mix that drains while retaining enough moisture for vegetables.",
      },
      {
        question: "What can I grow with only four hours of sun?",
        answer:
          "Try leaf lettuce, arugula, parsley, cilantro, green onions, and some radishes. Expect slower growth than in brighter conditions and avoid promising yourself a heavy tomato harvest from that location.",
      },
    ],
    sources: [
      {
        title: "Vegetable Gardening in Containers",
        publisher: "Virginia Cooperative Extension",
        url: "https://www.pubs.ext.vt.edu/426/426-336/426-336.html",
        note: "Balcony suitability, light, crop, container-size, and spacing guidance.",
      },
      {
        title: "No Yard? Grow Vegetables in Containers",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/news/no-yard-grow-vegetables-containers",
        note: "Light, drainage, potting mix, and container-size guidance.",
      },
      {
        title: "Container Gardening",
        publisher: "Alabama Cooperative Extension System",
        url: "https://www.aces.edu/blog/topics/landscaping/container-gardening/",
        note: "Kitchen-garden crop choices, tomato pot volume, and moisture management.",
      },
    ],
    relatedSlugs: [
      "basil-first-harvest",
      "tomato-blossom-end-rot-eggshells",
      "zucchini-flowers-no-fruit",
    ],
  },
  {
    slug: "easy-succulents-propagate-gifts-swaps-sales",
    category: "Indoor favorite",
    title: "Five easy succulents to propagate for gifts, plant swaps, or a small local sale.",
    shortTitle: "Five succulents to propagate and share",
    dek: "Choose the propagation method the plant already wants to use, start from clean stock, and share only after the new plant is healthy and accurately labeled.",
    answer:
      "Five practical succulents to propagate and share are jade plant from stems or whole leaves, Sedum from stems or leaves, Echeveria from stem rosettes, Haworthia or Gasteria from rooted offsets, and string of pearls from stem cuttings. Begin with healthy pest-free parent plants, clean tools, draining media, and the original labels. Do not propagate a patented or PPAF cultivar without permission.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "10 min read",
    place: "Home propagation shelves",
    season: "Spring through active summer growth",
    image:
      "https://images.unsplash.com/photo-1465636360230-1255730fa033?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center 50%",
    imageAlt: "Several labeled potted succulents arranged on a propagation tray",
    firstChecks: [
      "Read the parent tag for a cultivar name, patent number, PPAF, or propagation restriction.",
      "Inspect every parent for pests, spots, and soft tissue before taking material.",
      "Choose a stem, leaf, or offset method that matches that species.",
    ],
    sections: [
      {
        id: "five",
        heading: "The five, with the method that fits",
        items: [
          "Jade plant: take a firm stem cutting or a complete healthy leaf. It is sturdy, familiar, and easy to label in plain language.",
          "Sedum: many types root readily from small stem sections, and some also grow from complete leaves. Confirm the exact plant first.",
          "Echeveria: reroot a compact rosette with a short stem, especially when a plant has stretched. Keep the original cultivar name only if you can verify it.",
          "Haworthia or Gasteria: separate a rooted offset from an established cluster. Division gives the new owner a plant with roots from the start.",
          "String of pearls: lay several stem nodes on a shallow pot of draining mix. Multiple short cuttings make a fuller, more resilient gift than one long vine.",
        ],
      },
      {
        id: "clean-start",
        heading: "Clean material is the first feature",
        paragraphs: [
          "Oregon State recommends new or sanitized pots, sterile commercial media, clean work surfaces, and tools sanitized between plants. Take material only from healthy plants. A cutting can look clean while carrying mealybugs, mites, scale, or a root-zone pathogen into another collection.",
          "Keep new batches separated from the main collection while they establish. Discard suspicious material rather than turning one parent problem into twenty small ones.",
        ],
      },
      {
        id: "cut-root",
        heading: "Cut, callus, and root according to the plant",
        paragraphs: [
          "For stem cuttings, Iowa State recommends a clean 3- to 6-inch section, lower leaves removed, and several days for the cut to callus before placing it in well-drained media. For a leaf method, remove the entire leaf including its attachment tissue; a torn partial leaf may lack the cells needed for a new plant.",
          "Offsets should include healthy roots whenever possible. Pot them into a draining container and water lightly while they establish. Do not call an unrooted cutting a rooted starter.",
        ],
      },
      {
        id: "label",
        heading: "A good label is part of the gift",
        items: [
          "Plain common name first, with botanical name and cultivar only when known.",
          "Propagation method and date.",
          "Rooted, lightly rooted, or unrooted status.",
          "Realistic light and watering checks rather than a weekly command.",
          "Toxicity or sharp-spine warning when relevant.",
        ],
      },
      {
        id: "rights",
        heading: "Check the tag before multiplying a named cultivar",
        paragraphs: [
          "A U.S. plant patent can give its owner the right to exclude others from asexually reproducing and selling that protected plant for twenty years from filing. PPAF means a plant patent has been applied for. Keep the nursery tag, search the patent status, and do not propagate a protected plant without authorization.",
          "For a first sharing batch, use clearly identified, unprotected common species from your own clean plants. Accurate modest claims build more trust than a fashionable name you cannot verify.",
        ],
        callout: "The shareable plant is not the fastest cutting. It is the healthy, rooted, correctly named one.",
      },
    ],
    faq: [
      {
        question: "What succulent is easiest to propagate from a leaf?",
        answer:
          "Jade, many Sedum, Graptopetalum, Pachyphytum, and some Kalanchoe commonly work from a complete leaf. The leaf must detach cleanly with its base intact, and the exact method still depends on the species.",
      },
      {
        question: "How long before I can give away a succulent cutting?",
        answer:
          "Wait until it has healthy new roots and stable growth unless the recipient knowingly wants an unrooted cutting. State the propagation date and root status instead of promising a universal timeline.",
      },
      {
        question: "Can I propagate a patented succulent for myself?",
        answer:
          "Do not assume personal use is allowed. Extension guidance advises gardeners not to propagate patented or PPAF plants without permission. Check the tag and current patent record.",
      },
      {
        question: "Should I root succulent cuttings in water?",
        answer:
          "Iowa State notes that most succulents do not root well in a glass of water. Callus suitable stem cuttings and root them in clean, well-drained media instead.",
      },
    ],
    sources: [
      {
        title: "How to Propagate Succulents",
        publisher: "Iowa State University Extension",
        url: "https://yardandgarden.extension.iastate.edu/how-to/how-propagate-succulents",
        note: "Offset, stem, leaf, rosette, and species-specific methods.",
      },
      {
        title: "Safe Plant Propagation and Plant Sales",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/catalog/em-9883-safe-plant-propagation-plant-sales",
        note: "Sanitation, clean stock, labeling, and pest-risk practices.",
      },
      {
        title: "Starting Plants From Cuttings for the Home Gardener",
        publisher: "University of Georgia Extension",
        url: "https://extension.uga.edu/publications/detail.html?number=B1553",
        note: "Cutting technique and patented-plant warning.",
      },
      {
        title: "General Information About Plant Patents",
        publisher: "U.S. Patent and Trademark Office",
        url: "https://www.uspto.gov/patents/basics/apply/plant-patent",
        note: "Plant-patent term and asexual reproduction rights.",
      },
    ],
    relatedSlugs: [
      "realistic-succulent-selling-plan",
      "easiest-indoor-succulents-ranked",
      "best-succulent-soil-mix",
    ],
  },
  {
    slug: "realistic-succulent-selling-plan",
    category: "Indoor favorite",
    title: "Can you make money selling succulents locally? A realistic small-batch plan.",
    shortTitle: "A realistic local succulent-selling plan",
    dek: "Test demand before filling a shelf. Clean plants, honest labels, legal checks, and careful cost tracking matter more than a large propagation count.",
    answer:
      "A small local succulent project can cover costs or become a modest side business, but propagation alone does not guarantee profit. Start with five to ten clean, unprotected plants that you already grow well. Verify local nursery rules, track every pot and hour, post the actual rooted plants, and offer local pickup first. Continue only when repeat demand pays for materials, losses, selling fees, and your time.",
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "11 min read",
    place: "Neighborhood swaps and local pickup",
    season: "Small-batch planning",
    image:
      "https://images.unsplash.com/photo-1776151243153-7c50dd432304?auto=format&fit=crop&w=1800&q=85",
    imagePosition: "center",
    imageAlt: "Rows of clearly labeled potted plants displayed for local sale",
    firstChecks: [
      "Ask the state agriculture department and local authority which nursery, tax, market, and business rules apply.",
      "Check parent tags and patents before taking any cutting for sale.",
      "Calculate the full cost of one sale-ready plant, including time and losses.",
    ],
    sections: [
      {
        id: "business-question",
        heading: "Begin with demand, not multiplication",
        paragraphs: [
          "Choose two plants that thrive in your conditions and that local people already ask about. Make a small batch of five to ten total, document the process, and show the actual rooted starters to a neighborhood group or local audience. Questions, saves, waitlist signups, and completed pickups are stronger demand signals than likes alone.",
          "Do not propagate fifty plants before learning whether buyers want the plant, pot size, price, and pickup location you can realistically provide.",
        ],
      },
      {
        id: "unit-economics",
        heading: "Count the costs that disappear in a pretty photo",
        items: [
          "Parent plant or licensed starter material.",
          "Pot, clean mix, label, packaging, and payment fee.",
          "Water, light, shelf space, pest treatment, and unsold inventory.",
          "Market fee, mileage, messages, photography, pickup coordination, and customer support.",
          "Your propagation, cleaning, labeling, and selling time.",
        ],
        callout: "Contribution per plant equals selling price minus every variable cost. Profit also has to cover your time and fixed costs.",
      },
      {
        id: "trust-product",
        heading: "Turn trust into the product",
        paragraphs: [
          "Sell only clean, stable plants and state whether each is rooted. Label the plain common name first, followed by botanical name and verified cultivar. Include propagation date, practical light guidance, a soil-check watering instruction, and pet or handling cautions when relevant.",
          "Use photographs of the exact plant offered. Show the pot, scale, top growth, and any cosmetic damage. A buyer who receives what the listing promised is more valuable than a one-time sale won through a dramatic but vague photo.",
        ],
      },
      {
        id: "rules",
        heading: "Check rules before accepting money",
        paragraphs: [
          "Plant-sale requirements differ by location. In California, CDFA states that a license to sell nursery stock is required, while a fee-exempt path may apply only when specific conditions are met, including low annual sales, own production, county reporting, and sales within the county. Contact the local County Agricultural Commissioner instead of assuming a hobby exception.",
          "Also check active plant patents and PPAF labels. A plant patent can restrict asexual reproduction and sale. Review state tax registration, city business rules, market policies, lease or HOA terms, and any restrictions that apply to the species or movement of soil.",
        ],
      },
      {
        id: "local-first",
        heading: "Keep the first version local",
        paragraphs: [
          "USDA APHIS notes that moving plants can spread hidden pests and recommends local groups, neighborhood apps, or garden centers for rehoming where possible. Local pickup avoids shipping damage and gives you a smaller regulatory and customer-service surface while you learn.",
          "Inspect every plant before handoff, use clean commercial media and sanitized containers, and keep records by batch. Pause the whole batch if you find a pest. Never sell a symptomatic plant with a treatment promise.",
        ],
      },
      {
        id: "thirty-days",
        heading: "A thirty-day validation loop",
        items: [
          "Days 1-5: verify rules and patents; choose two clean parent plants and create a cost sheet.",
          "Days 6-12: start five to ten propagules, label every one, and publish the learning process rather than a sales claim.",
          "Days 13-21: inspect, discard failures, photograph progress, and collect local interest without promising a ready date.",
          "Days 22-30: offer only stable rooted plants, record inquiries and completed pickups, and ask buyers which care question mattered most.",
          "After day 30: repeat one small batch only if demand, quality, compliance, and the numbers support it.",
        ],
      },
    ],
    faq: [
      {
        question: "How much should I charge for a propagated succulent?",
        answer:
          "There is no universal price. Add the plant, pot, mix, label, fees, losses, selling time, and local market costs, then compare the exact size and condition with local alternatives. A price that ignores labor is not evidence of a viable business.",
      },
      {
        question: "Do I need a license to sell plants from home?",
        answer:
          "Possibly. Rules vary by state and locality. California generally requires a nursery-stock license and has a conditional fee-exempt path. Contact your state agriculture department and local authority before offering plants for sale or barter.",
      },
      {
        question: "Can I sell cuttings from any houseplant I own?",
        answer:
          "No. Active plant patents and PPAF status can restrict asexual reproduction and sale, and some plants are regulated or invasive. Keep original tags and verify both intellectual-property and plant-health rules.",
      },
      {
        question: "Should I ship succulents across the country?",
        answer:
          "Not for the first test. Local pickup reduces shipping damage and pest movement. Interstate shipping can add destination restrictions, certificates, packaging rules, and customer-service costs that require separate research.",
      },
    ],
    sources: [
      {
        title: "Safe Plant Propagation and Plant Sales",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/catalog/em-9883-safe-plant-propagation-plant-sales",
        note: "Clean stock, sanitation, labeling, recordkeeping, and sale practices.",
      },
      {
        title: "Nursery Services Program",
        publisher: "California Department of Food and Agriculture",
        url: "https://www.cdfa.ca.gov/plant/pe/nsc/nursery/index.html",
        note: "Current California nursery-license requirement and program contacts.",
      },
      {
        title: "What to Know Before Moving Plants or Soil",
        publisher: "USDA Animal and Plant Health Inspection Service",
        url: "https://www.aphis.usda.gov/plant-pests-diseases/hungry-pests/how-stop-them/think-you-move-plants-or-soil",
        note: "Hidden pest risk, inspection, quarantine, and local rehoming guidance; reviewed July 21, 2026.",
      },
      {
        title: "General Information About Plant Patents",
        publisher: "U.S. Patent and Trademark Office",
        url: "https://www.uspto.gov/patents/basics/apply/plant-patent",
        note: "Asexual reproduction, sale rights, and the twenty-year plant-patent term.",
      },
    ],
    relatedSlugs: [
      "easy-succulents-propagate-gifts-swaps-sales",
      "easiest-indoor-succulents-ranked",
      "best-succulent-soil-mix",
    ],
  },
];
