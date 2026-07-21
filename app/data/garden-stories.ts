export type GardenStorySource = {
  title: string;
  publisher: string;
  url: string;
  note: string;
};

export type GardenStorySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  items?: string[];
  callout?: string;
};

export type GardenStory = {
  slug: string;
  category: "On screen" | "On the page" | "Small wonders";
  title: string;
  shortTitle: string;
  dek: string;
  opening: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  setting: string;
  theme: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  sections: GardenStorySection[];
  bringHome: string[];
  sources: GardenStorySource[];
  relatedSlugs: string[];
};

export const gardenStories: GardenStory[] = [
  {
    slug: "little-forest-growing-a-life",
    category: "On screen",
    title: "What Little Forest understands about growing a life",
    shortTitle: "Growing a life with Little Forest",
    dek: "Rice, tomatoes, nuts, and preserves turn the four seasons into something you can touch, taste, and remember.",
    opening:
      "Little Forest is often described as comforting, but its comfort does not come from pretending country life is effortless. It comes from watching ordinary work become a rhythm: sow, weed, harvest, cook, preserve, begin again.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "8 min read",
    setting: "Film & seasonal living",
    theme: "Grow, cook, preserve",
    image: "/garden-stories-little-forest.webp",
    imageAlt: "Fresh tomatoes, shiso, rice stalks, nuts, and preserves beside a summer garden",
    imagePosition: "center",
    sections: [
      {
        id: "garden-calendar",
        heading: "The garden is the calendar",
        paragraphs: [
          "The Japanese films follow Ichiko after she returns from the city to Komori, a mountain village in Tohoku. Official film materials describe a life built around ingredients she grows and gathers, with each part shaped by one of the four seasons.",
          "Rice and tomatoes are more than scenery. They make time visible. A tomato asks to be used while it is abundant. Rice carries months of labor into one bowl. The season is not a decorative backdrop; it decides what the day requires.",
        ],
        callout: "A garden becomes more intimate when we stop asking only what is growing and begin noticing what time it is keeping.",
      },
      {
        id: "preserving",
        heading: "Preserving is a way of caring for the future",
        paragraphs: [
          "The films linger on turning a brief abundance into something that lasts: tomatoes become pantry food, fruit becomes jam, and nuts become a spread. Preserving is practical, but it is also emotional. A jar made in August can carry a little sunlight into a colder month.",
          "This changes the meaning of a harvest. The goal is not simply to produce more. It is to notice the moment when there is enough to share, save, or transform.",
        ],
      },
      {
        id: "wild-cultivated",
        heading: "The table belongs to both garden and landscape",
        paragraphs: [
          "Komori's meals move between cultivated plots and the wider landscape. Rice, vegetables, mountain ingredients, nuts, and fruit share the same table. The distinction between gardening and cooking becomes pleasantly thin.",
          "For a home gardener, that does not require a forest. It might mean using basil before it flowers, learning when neighborhood citrus ripens, or letting one farmers-market ingredient lead the week's meals.",
        ],
      },
      {
        id: "work",
        heading: "The quiet is earned, not purchased",
        paragraphs: [
          "What makes Little Forest feel restorative is not a perfect cottage or an expensive collection of tools. The calm comes after repetition: wash, cut, stir, wait; check the field, repair what failed, try the recipe again.",
          "That is a useful correction to the fantasy of a beautiful garden. A living place is beautiful because someone keeps returning to it.",
        ],
      },
      {
        id: "watching",
        heading: "Watch it once with a gardener's eye",
        paragraphs: [
          "On a second viewing, look just before the meal appears. Notice the weather, the task, the waiting, and the ingredient in its unfinished form. The most interesting plant story often happens before anything reaches the plate.",
        ],
        items: [
          "Which ingredient announces each season?",
          "What gets eaten immediately, and what gets preserved?",
          "Which jobs have to be repeated before they become peaceful?",
          "What does the landscape offer that a cultivated garden cannot?",
        ],
      },
    ],
    bringHome: [
      "Grow one edible leaf you already use every week: basil, shiso, chives, or mint in its own pot.",
      "Choose one seasonal ingredient and preserve only a small jar, enough to remember the week without turning it into a project.",
      "Keep a one-line harvest note: what was ready, what you made, and what you would change next time.",
      "Let one repeated garden task become a ritual instead of trying to redesign everything at once.",
    ],
    sources: [
      {
        title: "Little Forest: Summer/Autumn",
        publisher: "Shochiku",
        url: "https://www.shochiku.co.jp/cinema/lineup/littleforest-summer/",
        note: "Official Japanese film overview, production background, and seasonal food premise.",
      },
      {
        title: "Little Forest: Summer/Autumn",
        publisher: "Japanese Film Database",
        url: "https://jfdb.jp/en/title/4303",
        note: "Film credits and story summary from Japan's film database.",
      },
      {
        title: "Little Forest: Summer/Autumn",
        publisher: "Japan Media Arts Festival",
        url: "https://j-mediaarts-festival.bunka.go.jp/award/single/little_forest/index.html",
        note: "Cultural context for the film's Tohoku location, rice growing, fieldwork, and seasonal cooking.",
      },
    ],
    relatedSlugs: ["secret-garden-paying-attention", "one-herb-by-the-kitchen"],
  },
  {
    slug: "secret-garden-paying-attention",
    category: "On the page",
    title: "The Secret Garden is really a story about paying attention",
    shortTitle: "The garden that came back",
    dek: "Before the roses return, someone has to notice the smallest green shoots and decide they are worth protecting.",
    opening:
      "The garden in Frances Hodgson Burnett's novel does not wake all at once. It returns through curiosity, observation, fresh air, shared work, and the stubborn belief that something neglected may still be alive.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "6 min read",
    setting: "Books & garden memory",
    theme: "Attention, repair, return",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "A generous green kitchen garden with paths and flowering plants",
    imagePosition: "center",
    sections: [
      {
        id: "locked-place",
        heading: "A locked place can still be alive",
        paragraphs: [
          "When Mary first finds the hidden garden, it is tangled and uncertain rather than conveniently beautiful. The important question is not whether it already looks like a garden. It is whether the roots and shoots beneath the neglect are still alive.",
          "Gardeners learn this form of hope quickly. A bare perennial, a tired rose, or a forgotten corner may ask for patience before judgment.",
        ],
      },
      {
        id: "small-signs",
        heading: "The smallest signs change the story",
        paragraphs: [
          "The novel keeps returning to bulbs, shoots, buds, nesting birds, and swelling stems. These are modest events, but paying attention to them gives the children a relationship with time beyond their own moods.",
          "A garden journal works for the same reason. One sentence about a new shoot or the first warm evening can make slow change visible.",
        ],
        callout: "Care often begins before certainty: protect the small green thing, then keep watching.",
      },
      {
        id: "shared-work",
        heading: "The garden improves through shared work",
        paragraphs: [
          "The garden is secret, but its recovery is not solitary. Knowledge, tools, stories, and labor pass between people. The place becomes healthier as the circle of care widens.",
          "That is one reason gardens make such rich literary spaces. They hold private feeling while requiring practical cooperation with weather, soil, plants, and other people.",
        ],
      },
      {
        id: "returning",
        heading: "Bringing a place back is different from making it perfect",
        paragraphs: [
          "The emotional center of the story is return, not display. The children do not need a fashionable new garden. They need to enter an old one, learn what remains, and participate in its next season.",
          "At home, restoration might be as small as clearing one pot, pruning one dead stem, or making a chair-sized place where you can notice what happens next.",
        ],
      },
    ],
    bringHome: [
      "Choose one neglected pot or corner instead of beginning a full makeover.",
      "Look for proof of life before removing a dormant plant.",
      "Write down one small change each week: a bud, a bird, a longer shadow, or a new scent.",
      "Invite someone to help with one real task, then sit in the space together.",
    ],
    sources: [
      {
        title: "The Secret Garden",
        publisher: "Project Gutenberg",
        url: "https://www.gutenberg.org/ebooks/113",
        note: "Public-domain edition of Frances Hodgson Burnett's novel used for the literary reading.",
      },
    ],
    relatedSlugs: ["little-forest-growing-a-life", "one-herb-by-the-kitchen"],
  },
  {
    slug: "one-herb-by-the-kitchen",
    category: "Small wonders",
    title: "The small magic of keeping one herb beside the kitchen",
    shortTitle: "One herb beside the kitchen",
    dek: "A useful plant changes the room differently: you touch it, smell it, cut it, and let tonight's dinner decide how it grows next.",
    opening:
      "A kitchen herb is not quite a houseplant and not quite a crop. It lives in the tender middle, beautiful enough to notice and useful enough to become part of an ordinary Tuesday.",
    publishedAt: "2026-07-20",
    updatedAt: "2026-07-20",
    readingTime: "5 min read",
    setting: "Home & everyday ritual",
    theme: "Useful beauty",
    image:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Fresh basil leaves growing in soft natural light",
    imagePosition: "center",
    sections: [
      {
        id: "within-reach",
        heading: "Nearness changes what gets used",
        paragraphs: [
          "The herb beside the kitchen is the one you remember. A few leaves can finish eggs, noodles, tomatoes, beans, tea, or a glass of water. Usefulness comes less from having many varieties than from keeping one healthy plant close to the life it serves.",
          "Light still matters. Penn State Extension recommends choosing herbs suited to containers and giving most of them substantial direct light. The best location is a bright place you will actually notice, not a dim decorative shelf.",
        ],
      },
      {
        id: "harvest-conversation",
        heading: "Harvest becomes a conversation",
        paragraphs: [
          "Cutting an herb is not simply taking from it. Thoughtful harvesting can guide the next shape of the plant. Basil cut above a pair of leaves can branch; chives return after a trim; mint keeps reaching beyond the space you thought it had agreed to occupy.",
          "The plant changes dinner, and dinner changes the plant. That small exchange is farm to table at its most believable scale.",
        ],
      },
      {
        id: "enough",
        heading: "One pot is enough to begin",
        paragraphs: [
          "A row of matching pots is lovely, but it is not the price of entry. Start with the flavor you already buy. Give it a container with drainage, the strongest suitable light you have, and enough room that harvesting does not strip every leaf.",
          "When it produces more than dinner needs, preserve a small amount. Illinois Extension suggests several simple methods, including drying or freezing chopped herbs in portions for later cooking.",
        ],
        callout: "The best first edible garden may be the plant that saves you one trip to the refrigerator.",
      },
      {
        id: "choose",
        heading: "Choose by habit, not aspiration",
        paragraphs: [
          "Grow basil if tomatoes and pasta already appear in your kitchen. Choose chives for eggs and soups, cilantro for salsas and noodles, or mint for tea and summer drinks. The right herb is the one that already belongs to your cooking.",
        ],
      },
    ],
    bringHome: [
      "Pick the herb you bought most often in the last month.",
      "Use one pot with a drainage hole rather than a decorative container that traps water.",
      "Place it in the strongest suitable light and rotate it as growth leans toward the window.",
      "Plan the first meal before the first harvest so using the plant feels natural.",
    ],
    sources: [
      {
        title: "Growing Herbs Indoors",
        publisher: "Penn State Extension",
        url: "https://extension.psu.edu/growing-herbs-indoors",
        note: "Indoor herb selection, light, temperature, container, and watering guidance.",
      },
      {
        title: "Growing Herbs in Home Gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/gardening-minnesota/growing-herbs",
        note: "Container drainage, light, watering, and harvest guidance.",
      },
      {
        title: "Preserving Garden-Grown Herbs",
        publisher: "Illinois Extension",
        url: "https://extension.illinois.edu/blogs/good-growing/2025-11-25-preserving-garden-grown-herbs",
        note: "Practical ways to harvest and preserve surplus herbs.",
      },
    ],
    relatedSlugs: ["little-forest-growing-a-life", "secret-garden-paying-attention"],
  },
];

export function getGardenStory(slug: string) {
  return gardenStories.find((story) => story.slug === slug);
}

export function getRelatedGardenStories(slugs: string[]) {
  return slugs
    .map((slug) => getGardenStory(slug))
    .filter((story): story is GardenStory => Boolean(story));
}

export function formatGardenStoryDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
