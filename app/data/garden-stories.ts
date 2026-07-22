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
    relatedSlugs: [
      "monty-don-japanese-gardens-noticing",
      "secret-history-british-garden-time",
      "secret-garden-paying-attention",
    ],
  },
  {
    slug: "secret-history-british-garden-time",
    category: "On screen",
    title: "What The Secret History of the British Garden teaches us about time",
    shortTitle: "Four centuries inside the British garden",
    dek: "Topiary, borrowed views, glasshouses, and garden rooms reveal a landscape that has never stood still.",
    opening:
      "A beautiful old garden can give the impression that it has always been there, waiting calmly outside history. The Secret History of the British Garden offers a lovelier and more complicated thought: a garden lasts because people keep changing it, and every change leaves a little of its century behind.",
    publishedAt: "2026-07-21",
    updatedAt: "2026-07-21",
    readingTime: "9 min read",
    setting: "Documentary & garden history",
    theme: "Time, taste, inheritance",
    image: "/garden-stories-british-garden.webp",
    imageAlt: "A flower-lined path through the historic walled gardens at Rousham House",
    imagePosition: "center 54%",
    sections: [
      {
        id: "living-document",
        heading: "A garden is a document written in living material",
        paragraphs: [
          "Monty Don's four-part journey moves from the formal gardens of the 1600s to the landscapes, glasshouses, garden rooms, allotments, and ordinary back gardens that followed. At each stop, plants tell only part of the story. Paths reveal how people wanted to move. Walls show what they wished to keep in or out. A view records what an owner hoped the world would look like.",
          "Unlike a chair or a painting, a garden cannot be preserved simply by leaving it alone. Hedges grow out, trees fall, tastes change, and the people who know how to care for a place eventually hand that knowledge to someone else. Survival is an active verb here.",
        ],
        callout: "A garden looks timeless only when many hands have agreed to keep meeting time inside it.",
      },
      {
        id: "seventeenth-century",
        heading: "The seventeenth century shaped nature into a statement",
        paragraphs: [
          "At Levens Hall, topiary, hedged walks, and a formal plan preserve the language of the late seventeenth century. The shapes are playful now, but the original order carried status, belief, fashion, and a visible claim of control. Even an orchard could announce wealth through its scale and variety.",
          "The documentary makes the labor behind that confidence difficult to ignore. A clipped tree is never only an idea by a designer; it is also years of growth, ladders, tools, skilled hands, and the decision to return next season. What appears fixed is being remade all the time.",
        ],
      },
      {
        id: "eighteenth-century",
        heading: "The most natural view may be the most carefully made",
        paragraphs: [
          "In the eighteenth century, straight lines and tight formality gave way to a landscape that seemed to open into the countryside. At Rousham, William Kent arranged paths, water, statues, trees, and distant architecture as a sequence of scenes. The boundary could be hidden in a ha-ha, allowing grazing land to appear joined to the lawn.",
          "The effect feels effortless because the effort has been concealed. That is one of the documentary's most useful lessons for a smaller garden: natural and designed are not opposites. Moving a chair, opening one sightline, or letting a path turn before it reveals its destination can change how a place is felt without filling it with more things.",
        ],
      },
      {
        id: "nineteenth-century",
        heading: "Every exotic leaf arrives with a history",
        paragraphs: [
          "The nineteenth-century garden grew through plant hunting, new transport, the Wardian case, iron, glass, coal, and the enormous reach of the British Empire. Kew's Palm House made tropical plants into a public spectacle of engineering as much as botany. The same century also widened access through public parks, nurseries, magazines, and a growing middle-class enthusiasm for gardening.",
          "Beauty and extraction sit together in this history. Plants were gathered, moved, displayed, and sometimes stripped from wild populations in the pursuit of novelty and prestige. Looking closely at a familiar houseplant can therefore lead outward: where did it first grow, who carried it, and what systems made it ordinary in our homes? Knowing that story need not lessen delight. It can make our delight more responsible.",
        ],
      },
      {
        id: "twentieth-century",
        heading: "The garden moved closer to ordinary life",
        paragraphs: [
          "By the twentieth century, strong structure and loose planting began to live together in a particularly intimate way. Gertrude Jekyll treated planting as color and texture within Edwin Lutyens' architectural frames. At Sissinghurst, Harold Nicolson's layout and Vita Sackville-West's abundant planting turned the garden into a sequence of rooms, each with its own atmosphere.",
          "Two world wars changed the meaning of useful ground, while allotments, garden centers, radio, and television brought practical gardening to a much wider public. The story no longer belongs only to estates and designers. It reaches the person choosing a perennial for a back garden, growing food on a borrowed plot, or learning from a familiar voice on a screen.",
        ],
      },
      {
        id: "inheritance",
        heading: "To inherit a garden is to enter an unfinished conversation",
        paragraphs: [
          "The four centuries do not replace one another neatly. Later gardens borrow the axis of a formal plan, the borrowed view of a landscape garden, the plant range made possible by Victorian collecting, and the color confidence of the twentieth century. A living garden keeps several times at once.",
          "This is perhaps the most consoling idea in the series. We do not need to complete a garden, because completion would be strangely lifeless. We only need to notice what came before, care honestly for what is here, and leave the next person something worth continuing.",
        ],
      },
      {
        id: "watching",
        heading: "Watch it once with a gardener's eye",
        paragraphs: [
          "As the documentary crosses each century, look past the grand house and notice what makes the garden legible. The most reusable ideas are often small enough to bring home.",
        ],
        items: [
          "Where has a boundary been hidden, softened, or made important?",
          "Which view looks natural but has actually been composed?",
          "What kind of labor is required to keep the style alive?",
          "Who was able to enter, work in, or enjoy the garden in each century?",
          "Which older idea quietly survives inside a later garden?",
        ],
      },
    ],
    bringHome: [
      "Find the oldest living or built feature in your garden, balcony, or shared outdoor space, and write down what you know about it.",
      "Choose one view from a window or chair, then improve only its foreground by moving a pot, trimming a branch, or clearing a distraction.",
      "Give one small corner the feeling of a room with a clear edge, a path, and one reason to pause there.",
      "Learn the native home and travel history of one plant you already grow, especially if it is sold as exotic or rare.",
      "Leave one useful record for the future: a plant label, a sketch, a seasonal photograph, or a note about what thrives.",
    ],
    sources: [
      {
        title: "Secret History Of The British Garden | Full Journey",
        publisher: "Gardening With Monty Don",
        url: "https://www.youtube.com/watch?v=kx23BSgo-GE",
        note: "The complete documentary journey shared by our reader and used as the primary viewing source.",
      },
      {
        title: "The Secret History of the British Garden",
        publisher: "Apple TV",
        url: "https://tv.apple.com/us/show/the-secret-history-of-the-british-garden/umc.cmc.6ps3se4zhavkfr7vvyrhf87vp",
        note: "Series overview and episode guide for the four-century structure and featured gardens.",
      },
      {
        title: "About Rousham House & Gardens",
        publisher: "Rousham House & Gardens",
        url: "https://rousham.org/about/",
        note: "The garden's account of William Kent's design, staged views, and surviving landscape.",
      },
      {
        title: "The Topiary Garden at Levens Hall",
        publisher: "Levens Hall",
        url: "https://www.levenshall.co.uk/DB/latest-news/the-topiary-garden-at-levens-hall",
        note: "The garden's history of its 1694 topiary design and long continuity of care.",
      },
      {
        title: "Palm House",
        publisher: "Royal Botanic Gardens, Kew",
        url: "https://www.kew.org/kew-gardens/whats-in-the-gardens/palm-house",
        note: "Primary history of the Palm House's 1844 construction and shipbuilding-inspired engineering.",
      },
      {
        title: "A potted history of houseplants",
        publisher: "National Trust",
        url: "https://www.nationaltrust.org.uk/discover/history/gardens-landscapes/a-potted-history-of-houseplants",
        note: "Context for nineteenth-century plant collecting, domestic display, and ecological harm.",
      },
      {
        title: "The garden at Sissinghurst Castle Garden",
        publisher: "National Trust",
        url: "https://www.nationaltrust.org.uk/visit/kent/sissinghurst-castle-garden/the-garden-at-sissinghurst-castle-garden",
        note: "Garden history and the relationship between Harold Nicolson's structure and Vita Sackville-West's planting.",
      },
      {
        title: "Rousham House Gardens",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Rousham_House_Gardens.jpg",
        note: "Hero photograph by Jason Ballard, used under CC BY 2.0 and converted to WebP.",
      },
    ],
    relatedSlugs: [
      "monty-don-japanese-gardens-noticing",
      "little-forest-growing-a-life",
      "secret-garden-paying-attention",
    ],
  },
  {
    slug: "monty-don-japanese-gardens-noticing",
    category: "On screen",
    title: "What Monty Don's Japanese Gardens teaches us to notice",
    shortTitle: "Learning to notice with Japanese gardens",
    dek: "Spring blossom, autumn leaves, stepping stones, moss, and borrowed mountains reveal a garden made through attention rather than ornament.",
    opening:
      "A Japanese garden can be easy to misread from a distance. We see a lantern, a maple, gravel, and moss, then assume the style can be assembled from recognizable parts. Monty Don's Japanese Gardens keeps returning to something slower: the garden is not a set of objects, but a relationship among season, place, movement, and care.",
    publishedAt: "2026-07-21",
    updatedAt: "2026-07-21",
    readingTime: "9 min read",
    setting: "Documentary & Japanese gardens",
    theme: "Attention, season, restraint",
    image: "/garden-stories-japanese-gardens.webp",
    imageAlt: "The Murin-an garden in Kyoto framed by the open rooms of its main house",
    imagePosition: "center 52%",
    sections: [
      {
        id: "not-objects",
        heading: "The garden is not a collection of objects",
        paragraphs: [
          "Across two episodes, filmed in spring and autumn, Monty Don visits strolling gardens, temple gardens, dry landscapes, tea gardens, contemporary spaces, urban rooftops, and bonsai collections. A stone lantern may appear in one place and moss in another, but those objects are not what holds the journey together.",
          "What matters is the relationship between them: a path that changes pace, a branch that frames a mountain, an opening that makes light feel momentary. The garden is experienced through time and movement. Its character cannot be ordered from a catalog because it lives in the space between things.",
        ],
        callout: "The garden does not ask to be copied. It asks to be noticed.",
      },
      {
        id: "two-seasons",
        heading: "Spring and autumn make two different gardens",
        paragraphs: [
          "The series begins in the brightness of spring and returns in autumn, when color, weather, and work have changed. At Kenroku-en in Kanazawa, blossom can make the garden feel almost weightless in one season. Later, maples deepen the scene and preparations for winter become part of what visitors see.",
          "Kenroku-en's famous yukitsuri uses ropes suspended from tall poles to protect pine branches from heavy snow. It is practical care, but it also gives the winter garden its own unmistakable outline. Season is not a decorative theme added after design. It changes the garden's work, structure, and meaning.",
        ],
      },
      {
        id: "path",
        heading: "The path teaches the body how to look",
        paragraphs: [
          "In tea gardens and strolling gardens, the route is part of the composition. A stepping stone can shorten a stride. A turn can withhold a view for a few seconds. At Murin-an in Kyoto, stones, water, and changing viewpoints guide visitors through the garden rather than offering everything at once.",
          "The official history of Murin-an describes stepping stones arranged to influence both the line of sight and the speed of walking. Some encourage a pause; others lead the eye forward. This is a quietly useful idea for a small home garden too. Even the few steps from a door to a chair can create a moment of arrival.",
        ],
      },
      {
        id: "borrowed-scenery",
        heading: "A borrowed view begins beyond the boundary",
        paragraphs: [
          "Murin-an was created in the 1890s by landscape gardener Ogawa Jihei VII for statesman Yamagata Aritomo. Its composition reaches beyond its own ground, drawing the Higashiyama mountains into the scene. Trees are cared for not only as individual specimens, but as living frames for a landscape the garden does not own.",
          "Borrowed scenery does not require a mountain. From a balcony or window, it might be a street tree, a patch of evening sky, a neighbor's vine, or the line of light between buildings. The question is not what can be added, but what is already present and worth framing.",
        ],
      },
      {
        id: "space",
        heading: "Empty space is doing real work",
        paragraphs: [
          "Dry landscape gardens can look spare, but spareness is not the same as absence. The position of a rock, the surface of gravel, the clipped edge of planting, and the open interval around them all affect how the composition is read. Restraint requires choices and continued maintenance.",
          "That makes empty space practical at home. Removing one competing ornament may let the shape of a plant become clearer. Leaving a little ground visible can make rain, fallen leaves, shadows, and the change of season easier to see. Fewer things can create more attention.",
        ],
      },
      {
        id: "visible-care",
        heading: "Care is allowed to remain visible",
        paragraphs: [
          "The ropes and supports at Kenroku-en reveal something the series returns to often: maintenance need not be hidden for a garden to feel beautiful. Pruning, tying, sweeping, guiding water, and protecting old trees are not backstage activities. They are part of the garden's present form.",
          "Murin-an carries a gentler example of adaptation. Yamagata first imagined expanses of lawn, but Kyoto's humid conditions favored moss. Rather than forcing the original idea indefinitely, the garden accepted what the place could grow; today more than fifty moss species contribute to its character. Care here means paying enough attention to change one's mind.",
        ],
      },
      {
        id: "living-tradition",
        heading: "Tradition stays alive by changing",
        paragraphs: [
          "The documentary does not end with historic gardens. It visits modern work, rooftop planting, contemporary tea spaces, and bonsai, showing a tradition that continues to answer new lives and limited urban space. The Omiya Bonsai Art Museum likewise changes its displays with the season, presenting living trees whose condition and best viewing moment keep moving.",
          "This is a more respectful lesson than reproducing a generic Japanese look. Begin with local weather, local materials, and the life already happening around the garden. Then borrow principles: reveal a view slowly, mark one season precisely, make room for weather, and care for a plant long enough to learn its character.",
        ],
      },
      {
        id: "watching",
        heading: "Watch it once with a gardener's eye",
        paragraphs: [
          "The first viewing is easy to spend admiring blossom, moss, stone, and water. On a second viewing, watch what the garden asks the visitor to do. Its most portable ideas are often invisible until a person moves through them.",
        ],
        items: [
          "Where does the path make someone slow, turn, or stop?",
          "What has been deliberately left out of the composition?",
          "Which view begins outside the garden's boundary?",
          "How does the season change both the work and the meaning of the place?",
          "Which forms of maintenance have been allowed to remain visible?",
        ],
      },
    ],
    bringHome: [
      "Choose one seasonal marker already suited to your climate: a flowering bulb, a deciduous leaf, a summer herb, or a branch that holds rain.",
      "Rework one short route or threshold so there is a reason to pause before the whole space is revealed.",
      "Sit in your usual place and frame one borrowed view with careful pruning or the position of a single pot.",
      "Remove one decorative object for a week and notice whether the plants, light, and weather become easier to see.",
      "Let care be honest and local: use a stake, tie, repair, or climate-suited groundcover when the garden needs it instead of forcing a borrowed look.",
    ],
    sources: [
      {
        title: "Television: Monty Don's Japanese Gardens",
        publisher: "Monty Don",
        url: "https://www.montydon.com/television/",
        note: "Official series overview of the spring and autumn journey through historic and contemporary Japanese gardens.",
      },
      {
        title: "Monty Don's Japanese Gardens",
        publisher: "Apple TV",
        url: "https://tv.apple.com/gb/show/monty-dons-japanese-gardens/umc.cmc.44lu363ax94ruuxgrwy2u88bj",
        note: "Episode guide for the two-part structure, from garden history to modern urban interpretations.",
      },
      {
        title: "What Is Kenrokuen Garden?",
        publisher: "Kenrokuen Digital Archive",
        url: "https://kenrokuen-archive.pref.ishikawa.lg.jp/en/what-is-kenrokuen-garden/",
        note: "Official history of Kenroku-en, its strolling design, and the six qualities behind its name.",
      },
      {
        title: "Kenrokuen Garden",
        publisher: "Kanazawa City Tourism Association",
        url: "https://visitkanazawa.jp/en/attractions/detail_10106.html",
        note: "Seasonal garden context and an explanation of yukitsuri winter rope supports.",
      },
      {
        title: "About Murin-an",
        publisher: "Murin-an",
        url: "https://murin-an.jp/en/about/",
        note: "Primary history of the garden's borrowed scenery, water, paths, viewpoints, moss, and long-term care.",
      },
      {
        title: "Facilities and Services",
        publisher: "Omiya Bonsai Art Museum",
        url: "https://www.bonsai-art-museum.jp/en/facilities/service/",
        note: "Museum information about its seasonal, changing displays of living bonsai.",
      },
      {
        title: "View of Murin-an garden from main house",
        publisher: "Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:View_of_Murin-an_garden_from_main_house.jpg",
        note: "Hero photograph by Yasu, used under CC BY-SA 3.0 and GFDL, resized and converted to WebP.",
      },
    ],
    relatedSlugs: [
      "secret-history-british-garden-time",
      "little-forest-growing-a-life",
      "secret-garden-paying-attention",
    ],
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
    relatedSlugs: [
      "secret-history-british-garden-time",
      "little-forest-growing-a-life",
      "one-herb-by-the-kitchen",
    ],
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
    relatedSlugs: [
      "secret-history-british-garden-time",
      "little-forest-growing-a-life",
      "secret-garden-paying-attention",
    ],
  },
  {
    slug: "miniature-christmas-garden-living-tree",
    category: "Small wonders",
    title: "How to make a miniature Christmas garden that stays alive",
    shortTitle: "A real miniature Christmas garden",
    dek: "One living tree, one little path, and a few warm lights can hold more wonder than a crowded holiday display.",
    opening:
      "A miniature Christmas garden works because the eye understands two things at once: this is a tiny imagined world, and every needle, root, stone, and patch of green is real. The magic lasts longer when the garden is designed around what the plants need after the decorations come down.",
    publishedAt: "2026-07-21",
    updatedAt: "2026-07-21",
    readingTime: "8 min read",
    setting: "Winter & miniature gardening",
    theme: "Living tradition, small scale",
    image: "/garden-stories-miniature-christmas.webp",
    imageAlt: "A real miniature Christmas garden with a tiny conifer, stone path, bench, and warm lights",
    imagePosition: "center 48%",
    sections: [
      {
        id: "why-small-feels-magical",
        heading: "Why a tiny living world stops people in their tracks",
        paragraphs: [
          "Miniature garden artist Janit Calvo describes watching shoppers realize that the little Christmas tree, shrubs, path, and garden were all alive. That moment of recognition is the heart of the idea. A miniature is not impressive because it contains many things. It is moving because familiar things have become small enough to notice again.",
          "The best scene therefore needs very little: one tree with a clear silhouette, one path that suggests where a person might walk, and one reason to pause. A bench, gate, lantern, or tiny stack of wood can imply a whole story without covering the soil in objects.",
        ],
        callout: "Make the world small, but keep the plants' lives full-sized in your decisions.",
      },
      {
        id: "two-kinds-of-tree",
        heading: "First choose which kind of Christmas tree you are actually growing",
        paragraphs: [
          "A hardy dwarf spruce and an indoor Norfolk Island pine may look similar on a holiday table, but they need different winters. A dormant outdoor spruce belongs outside. Penn State recommends acclimating a living outdoor tree through a cool sheltered place, displaying it indoors only briefly, and then reversing the transition. Four or five indoor days is ideal, and no more than a week.",
          "A Norfolk Island pine is a tropical houseplant, not a true pine and not a cold-hardy miniature spruce. Illinois Extension recommends bright light, moderate moisture with drainage, and protection from cold. It can remain indoors after the holidays and slowly become a much larger houseplant over the years.",
        ],
        items: [
          "For an outdoor miniature garden: choose a conifer hardy in your climate and treat indoor display as a short visit.",
          "For a permanent indoor scene: choose an indoor plant such as Norfolk Island pine and use companions with similar light and moisture needs.",
          "Keep the label. The shelf phrase mini Christmas tree does not tell you which winter the plant needs.",
        ],
      },
      {
        id: "miniature-not-forever",
        heading: "Miniature is a design scale, not a promise that nothing will grow",
        paragraphs: [
          "Plants sold as dwarf still have a mature size. Dwarf Alberta spruce is a useful warning: NC State says it may be only three to four feet tall after ten years, yet can eventually reach ten to thirteen feet. In a container it will need pruning, root care, a larger home, or a future place in the landscape.",
          "Before buying, read the mature height, width, hardiness zone, and light requirement. Then decide whether the tree can anchor this container for several seasons or whether the miniature garden is one chapter in a longer life outdoors.",
        ],
      },
      {
        id: "build-scene",
        heading: "Build the garden before decorating the holiday",
        paragraphs: [
          "Start with a broad container that has a real drainage hole and enough depth for the tree's roots. Position the tree off center, then test a path with small stones before planting low companions. Leave visible soil and open space; the scene needs room for watering, growth, and the imagination.",
          "Choose companion plants by shared care rather than scale alone. University of Minnesota's terrarium guidance makes the same practical point: plants living together should prefer similar water and light, and their mature size matters. A plant that looks like perfect tiny groundcover today may overwhelm the tree or demand a wetter root zone later.",
        ],
        items: [
          "One anchor tree gives the eye a place to begin.",
          "A curved path makes the shallow container feel deeper.",
          "One low plant mass feels more garden-like than many unrelated specimens.",
          "One removable object suggests a story without becoming clutter.",
        ],
      },
      {
        id: "lights",
        heading: "Let the lights touch the scene lightly",
        paragraphs: [
          "Use a short strand of cool-running micro LEDs and drape it loosely. Penn State recommends LED or other low-temperature lights for living Christmas trees, while Minnesota Extension cautions against heavy ornaments on Norfolk Island pine. Tiny branches can bend or break long before a decoration looks heavy to us.",
          "Keep the battery pack and electrical connections away from irrigation water. Do not wind wire tightly around a growing trunk or branch. The lights should be simple to remove in January without cutting, pulling, or leaving a hidden loop behind.",
        ],
      },
      {
        id: "indoor-visit",
        heading: "Treat a hardy outdoor garden's indoor stay as a visit",
        paragraphs: [
          "Move the container first to a protected, cool transition space rather than straight from freezing air to a heated room. Indoors, choose the coolest useful location away from fireplaces, radiators, heating vents, and harsh direct sun. Check the root ball daily and keep it moist without leaving the pot in standing water.",
          "After the brief display, return through the same cool transition. The goal is to keep a dormant outdoor tree from waking into spring growth in the middle of winter. If the ground is frozen or the container needs winter protection, follow local Extension guidance for your climate rather than improvising indoors.",
        ],
      },
      {
        id: "after-holiday",
        heading: "The loveliest tradition begins after the decorations come down",
        paragraphs: [
          "Remove lights and accessories carefully, clear any fallen material from the soil, and return the plant to the conditions its label requires. Photograph the scene before taking it apart. Next year, you can use the same path and bench while allowing the living garden to look a little older.",
          "That continuity is what a disposable decoration cannot offer. A branch grows, a groundcover reaches the path, and the tiny world records another year of care. The tradition is not recreating one perfect image. It is meeting the same garden again.",
        ],
      },
    ],
    bringHome: [
      "Choose the plant first, then decide whether the finished garden will live indoors or outdoors.",
      "Keep the full plant label and write its mature size and hardiness beside the container plan.",
      "Design with one tree, one path, one low planting, and one small object before adding lights.",
      "Use loose, cool-running micro LEDs and remove them without pulling on branches.",
      "Take one photograph each December so the plant's growth becomes part of the holiday tradition.",
    ],
    sources: [
      {
        title: "Real Miniature Christmas Magic in a Real Miniature Garden",
        publisher: "Mini Garden Guru",
        url: "https://minigardenguru.com/2024/12/13/all-about-miniature-christmas-tree-traditions/",
        note: "Creative inspiration, miniature scene-making, lights, and the practice of briefly staging an outdoor miniature garden indoors.",
      },
      {
        title: "Caring for a Living Christmas Tree",
        publisher: "Penn State Extension",
        url: "https://extension.psu.edu/caring-for-a-living-christmas-tree",
        note: "Acclimation, short indoor display, moisture, cool placement, lighting, and return-to-outdoors guidance.",
      },
      {
        title: "Norfolk Island Pines",
        publisher: "Illinois Extension",
        url: "https://extension.illinois.edu/blogs/good-growing/2020-01-22-norfolk-island-pines",
        note: "Indoor identity, light, moisture, humidity, temperature, growth, and post-holiday care.",
      },
      {
        title: "Dwarf Alberta Spruce",
        publisher: "NC State Extension",
        url: "https://plants.ces.ncsu.edu/plants/picea-laxa-conica/common-name/dwarf-alberta-spruce/",
        note: "Long-term size, growth habit, climate, light, and container context for a commonly sold miniature-looking conifer.",
      },
      {
        title: "Terrarium Gardening",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/news/writers-guild-article-terrarium-gardening",
        note: "Matching companion plants by light, water, mature size, and container conditions.",
      },
      {
        title: "Your Holiday Plant Survival Guide",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-news/your-holiday-plant-survival-guide",
        note: "Norfolk Island pine as a living mini tree, bright-light care, moderate watering, and lightweight decoration guidance.",
      },
    ],
    relatedSlugs: [
      "one-herb-by-the-kitchen",
      "secret-garden-paying-attention",
      "little-forest-growing-a-life",
    ],
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
