/* Owl pellet species profiles — global coverage.
 *
 * Every owl species regurgitates pellets of undigested prey remains, so this
 * file aims for broad worldwide coverage rather than an exhaustive list of all
 * ~250 species: it includes the common and/or distinctive pellet-producers of
 * each region. Lengths are in millimetres. Colour is described in HSV ranges;
 * "gloss" is the expected fraction of bright specular pixels on a fresh
 * pellet's surface (fresh Tyto pellets are famously glossy/varnished).
 *
 * regions vocabulary: europe | northamerica | southamerica | africa | asia |
 * australasia | global
 */
window.OWL_DATA = [
  /* ---------- Europe & UK ---------- */
  {
    id: "tyto-alba",
    name: "Barn owl",
    latin: "Tyto alba",
    regions: ["europe", "northamerica", "southamerica", "africa", "asia", "australasia", "global"],
    pelletLen: [30, 80],
    hue: [0, 360], sat: [0, 60], val: [5, 45],
    gloss: 0.8, elongation: [1.5, 3.0], texture: "smooth",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Pellets are typically black and distinctly glossy or 'varnished' when fresh — " +
      "the most reliable visual clue. Almost exclusively small mammals (field voles, " +
      "wood mice, shrews). Look under barns, church towers, hollow trees and nest boxes.",
    weight: { colour: 1.0, gloss: 2.0, size: 1.5, elongation: 0.5, contents: 1.5, region: 0.5 }
  },
  {
    id: "strix-aluco",
    name: "Tawny owl",
    latin: "Strix aluco",
    regions: ["europe"],
    pelletLen: [20, 55],
    hue: [15, 45], sat: [20, 70], val: [25, 60],
    gloss: 0.25, elongation: [1.3, 2.5], texture: "felted",
    contents: ["fur", "bones", "skull", "teeth", "feathers", "insects", "earthworms"],
    notes:
      "Greyer and browner than barn owl pellets, usually matt and loosely felted; they " +
      "crumble more easily. The most catholic diet of the European owls: mammals plus " +
      "birds, beetles and earthworms. Common in woodland, parks and suburban gardens.",
    weight: { colour: 1.5, gloss: 1.5, size: 1.0, elongation: 0.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "athene-noctua",
    name: "Little owl",
    latin: "Athene noctua",
    regions: ["europe", "asia", "africa"],
    pelletLen: [15, 30],
    hue: [20, 50], sat: [10, 50], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones", "earthworms"],
    notes:
      "Small pellets, often full of shiny beetle and insect remains — a strong clue. " +
      "Found around farmland, orchards, parkland and old buildings; often below fence " +
      "posts and low perches rather than high roosts.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.0, region: 0.5 }
  },
  {
    id: "asio-otus",
    name: "Long-eared owl",
    latin: "Asio otus",
    regions: ["europe", "northamerica", "asia"],
    pelletLen: [25, 45],
    hue: [0, 360], sat: [0, 45], val: [15, 50],
    gloss: 0.35, elongation: [2.0, 3.5], texture: "felted",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Narrow, elongated, dark grey pellets. The giveaway is often the setting: winter " +
      "communal roosts can carpet the ground under a single conifer with pellets. Diet " +
      "is mostly small rodents.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.0, elongation: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "asio-flammeus",
    name: "Short-eared owl",
    latin: "Asio flammeus",
    regions: ["europe", "northamerica", "southamerica", "asia", "global"],
    pelletLen: [35, 70],
    hue: [20, 50], sat: [15, 55], val: [20, 55],
    gloss: 0.3, elongation: [1.8, 3.0], texture: "felted",
    contents: ["fur", "bones", "skull"],
    notes:
      "Large pellets for a medium owl, found on open moorland, marsh and rough grassland " +
      "rather than woodland. Heavily vole-dependent, so contents are usually uniform " +
      "small-mammal remains.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 1.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "bubo-bubo",
    name: "Eurasian eagle-owl",
    latin: "Bubo bubo",
    regions: ["europe", "asia"],
    pelletLen: [80, 160],
    hue: [0, 360], sat: [0, 60], val: [10, 55],
    gloss: 0.4, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull", "feathers", "beak", "fish"],
    notes:
      "Huge pellets — anything over ~8 cm rules out the smaller owls entirely. May " +
      "contain large bones, rabbit remains or whole bird parts including beaks.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 1.5, region: 0.5 }
  },
  {
    id: "otus-scops",
    name: "Eurasian scops owl",
    latin: "Otus scops",
    regions: ["europe", "asia", "africa"],
    pelletLen: [12, 25],
    hue: [20, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "earthworms", "fur"],
    notes:
      "Very small pellets dominated by moth, cricket and beetle remains — a largely " +
      "insectivorous owl. Look below roosts in old trees, walls and building cavities " +
      "around the Mediterranean and east into Asia.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.0, region: 0.5 }
  },
  {
    id: "strix-uralensis",
    name: "Ural owl",
    latin: "Strix uralensis",
    regions: ["europe", "asia"],
    pelletLen: [45, 75],
    hue: [15, 45], sat: [15, 55], val: [25, 60],
    gloss: 0.3, elongation: [1.4, 2.6], texture: "felted",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Large, coarse pellets beneath roosts in mature forest. Diet is dominated by " +
      "voles, with shrews, mice and occasionally small birds.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 0.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "aegolius-funereus",
    name: "Boreal (Tengmalm's) owl",
    latin: "Aegolius funereus",
    regions: ["europe", "northamerica", "asia"],
    pelletLen: [15, 30],
    hue: [15, 45], sat: [15, 50], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.4], texture: "felted",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Small dark pellets below conifer roosts and nest boxes in boreal forest. " +
      "Contents are almost entirely voles and mice.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "glaucidium-passerinum",
    name: "Eurasian pygmy owl",
    latin: "Glaucidium passerinum",
    regions: ["europe", "asia"],
    pelletLen: [10, 20],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.0], texture: "felted",
    contents: ["fur", "bones", "feathers", "insects"],
    notes:
      "Tiny pellets from Europe's smallest owl — often cached at larder sites. " +
      "Contents mix small voles/mice with small birds and large insects.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "surnia-ulula",
    name: "Northern hawk owl",
    latin: "Surnia ulula",
    regions: ["europe", "northamerica", "asia"],
    pelletLen: [30, 55],
    hue: [15, 45], sat: [15, 55], val: [20, 55],
    gloss: 0.3, elongation: [1.6, 3.0], texture: "felted",
    contents: ["fur", "bones", "skull", "feathers"],
    notes:
      "Slim pellets below exposed day-time hunting perches in boreal forest and " +
      "muskeg. Mostly voles with seasonal small birds.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 1.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "strix-nebulosa",
    name: "Great grey owl",
    latin: "Strix nebulosa",
    regions: ["europe", "northamerica", "asia"],
    pelletLen: [50, 90],
    hue: [0, 360], sat: [0, 55], val: [15, 55],
    gloss: 0.3, elongation: [1.5, 2.8], texture: "coarse",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Large grey pellets under hunting perches at forest-meadow edges. Almost a " +
      "vole/pocket-gopher specialist — contents are uniform small-mammal remains.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "bubo-scandiacus",
    name: "Snowy owl",
    latin: "Bubo scandiacus",
    regions: ["europe", "northamerica", "asia", "global"],
    pelletLen: [50, 100],
    hue: [0, 360], sat: [0, 50], val: [20, 60],
    gloss: 0.35, elongation: [1.4, 2.6], texture: "coarse",
    contents: ["fur", "bones", "feathers"],
    notes:
      "Large pellets on open tundra, airfields and coastal marshes in winter. Contents " +
      "are usually lemming/vole in the Arctic, with birds taken elsewhere.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 0.5 }
  },

  /* ---------- North America ---------- */
  {
    id: "bubo-virginianus",
    name: "Great horned owl",
    latin: "Bubo virginianus",
    regions: ["northamerica", "southamerica"],
    pelletLen: [70, 130],
    hue: [0, 360], sat: [0, 60], val: [10, 55],
    gloss: 0.4, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull", "feathers", "beak"],
    notes:
      "The North American counterpart of the eagle-owl: very large, loosely compacted " +
      "pellets, frequently with substantial bones, feathers or even skunk remains.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "strix-varia",
    name: "Barred owl",
    latin: "Strix varia",
    regions: ["northamerica"],
    pelletLen: [30, 60],
    hue: [15, 45], sat: [20, 65], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.4], texture: "felted",
    contents: ["fur", "bones", "skull", "feathers", "fish"],
    notes:
      "Medium, grey-brown pellets from mature and swampy woodland. Diet includes " +
      "crayfish and amphibians as well as rodents — occasionally fish bones.",
    weight: { colour: 1.0, gloss: 1.0, size: 1.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "strix-occidentalis",
    name: "Spotted owl",
    latin: "Strix occidentalis",
    regions: ["northamerica"],
    pelletLen: [30, 60],
    hue: [15, 45], sat: [15, 60], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.4], texture: "felted",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Old-growth forest owl of the Pacific Northwest and Southwest; pellets contain " +
      "woodrats, flying squirrels and mice — often larger rodent remains than barred owl.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "megascops-asio",
    name: "Eastern screech-owl",
    latin: "Megascops asio",
    regions: ["northamerica"],
    pelletLen: [15, 35],
    hue: [15, 50], sat: [15, 55], val: [25, 60],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones"],
    notes:
      "Small pellets with a large invertebrate fraction — moths, beetles, crayfish — " +
      "plus small rodents and songbirds. Look below roost holes in trees and boxes.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "megascops-kennicottii",
    name: "Western screech-owl",
    latin: "Megascops kennicottii",
    regions: ["northamerica"],
    pelletLen: [15, 35],
    hue: [15, 50], sat: [15, 55], val: [25, 60],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones"],
    notes:
      "Very similar to eastern screech-owl pellets — separate them by range (west of " +
      "the Rockies) and the same insect-plus-rodent signature.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "psiloscops-flammeolus",
    name: "Flammulated owl",
    latin: "Psiloscops flammeolus",
    regions: ["northamerica"],
    pelletLen: [10, 20],
    hue: [15, 45], sat: [15, 50], val: [25, 60],
    gloss: 0.3, elongation: [1.2, 2.0], texture: "felted",
    contents: ["insects"],
    notes:
      "Tiny pellets that are almost pure insect chitin — moths and beetles. A " +
      "migratory insectivore of western pine forest.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.0, region: 1.0 }
  },
  {
    id: "micrathene-whitneyi",
    name: "Elf owl",
    latin: "Micrathene whitneyi",
    regions: ["northamerica"],
    pelletLen: [8, 15],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.1, 1.8], texture: "fine",
    contents: ["insects"],
    notes:
      "The world's smallest owl produces matchstick-sized pellets of moth, beetle and " +
      "scorpion remains below saguaro and woodpecker-hole roosts in the Southwest.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 2.0, region: 1.0 }
  },
  {
    id: "athene-cunicularia",
    name: "Burrowing owl",
    latin: "Athene cunicularia",
    regions: ["northamerica", "southamerica"],
    pelletLen: [12, 25],
    hue: [20, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.0], texture: "felted",
    contents: ["insects", "fur", "bones"],
    notes:
      "Small pellets at the mouths of grassland burrows — a unique setting. Heavy on " +
      "beetles, crickets and scorpions with some mice; often mixed with mammal dung " +
      "the owls collect as mulch.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "aegolius-acadius",
    name: "Northern saw-whet owl",
    latin: "Aegolius acadius",
    regions: ["northamerica"],
    pelletLen: [15, 28],
    hue: [15, 45], sat: [15, 50], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.3], texture: "felted",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "Small pellets under dense conifer roosts; deer mice and voles dominate. Roost " +
      "trees can accumulate hundreds over a winter.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "glaucidium-gnoma",
    name: "Northern pygmy-owl",
    latin: "Glaucidium californicum / G. gnoma",
    regions: ["northamerica"],
    pelletLen: [10, 20],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.0], texture: "felted",
    contents: ["fur", "bones", "feathers", "insects"],
    notes:
      "Tiny day-hunter pellets mixing small rodents, birds and large insects; often " +
      "found near cached-prey larders in western forest.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "glaucidium-brasilianum",
    name: "Ferruginous pygmy-owl",
    latin: "Glaucidium brasilianum",
    regions: ["northamerica", "southamerica"],
    pelletLen: [10, 20],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.0], texture: "felted",
    contents: ["insects", "fur", "bones", "feathers"],
    notes:
      "Small pellets with a strong reptile/insect component in the south-Texas and " +
      "Neotropical lowlands; rodents and small birds also appear.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 0.5 }
  },

  /* ---------- Central & South America ---------- */
  {
    id: "pulsatrix-perspicillata",
    name: "Spectacled owl",
    latin: "Pulsatrix perspicillata",
    regions: ["southamerica"],
    pelletLen: [60, 100],
    hue: [0, 360], sat: [0, 55], val: [15, 55],
    gloss: 0.35, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull", "insects", "feathers"],
    notes:
      "The large tropical-forest owl of Central and South America. Big pellets with " +
      "rats, bats, opossum young and large insects; found below dense-canopy roosts.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "strix-virgata",
    name: "Mottled owl",
    latin: "Strix virgata",
    regions: ["southamerica"],
    pelletLen: [30, 55],
    hue: [15, 45], sat: [15, 60], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.4], texture: "felted",
    contents: ["insects", "fur", "bones", "feathers"],
    notes:
      "Medium pellets with a notably mixed diet — beetles and other large insects " +
      "alongside rodents and small birds — typical of Neotropical Strix owls.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "asio-stygius",
    name: "Stygian owl",
    latin: "Asio stygius",
    regions: ["southamerica"],
    pelletLen: [30, 55],
    hue: [0, 360], sat: [0, 50], val: [15, 55],
    gloss: 0.35, elongation: [1.8, 3.2], texture: "felted",
    contents: ["feathers", "bones", "fur"],
    notes:
      "Elongated dark pellets like other Asio owls, but unusually bird-rich — small " +
      "passerines and bats are staple prey.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "asio-clamator",
    name: "Striped owl",
    latin: "Asio clamator",
    regions: ["southamerica"],
    pelletLen: [30, 55],
    hue: [0, 360], sat: [0, 50], val: [15, 55],
    gloss: 0.35, elongation: [1.8, 3.0], texture: "felted",
    contents: ["fur", "bones", "insects"],
    notes:
      "Open-country Neotropical Asio; elongated pellets with small rodents and a " +
      "marked large-insect fraction.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "megascops-choliba",
    name: "Tropical screech-owl",
    latin: "Megascops choliba",
    regions: ["southamerica"],
    pelletLen: [15, 30],
    hue: [15, 50], sat: [15, 55], val: [25, 60],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones"],
    notes:
      "The common Neotropical screech-owl; small insect-heavy pellets below roosts in " +
      "forest edge, gardens and plantations.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "bubo-magellanicus",
    name: "Magellanic horned owl",
    latin: "Bubo magellanicus",
    regions: ["southamerica"],
    pelletLen: [60, 110],
    hue: [0, 360], sat: [0, 60], val: [10, 55],
    gloss: 0.4, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull", "feathers"],
    notes:
      "Andean/Patagonian great-horned-owl counterpart: very large pellets with hares, " +
      "large rodents and bird remains.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 1.5, region: 1.0 }
  },

  /* ---------- Africa ---------- */
  {
    id: "bubo-africanus",
    name: "Spotted eagle-owl",
    latin: "Bubo africanus",
    regions: ["africa"],
    pelletLen: [45, 80],
    hue: [0, 360], sat: [0, 55], val: [15, 55],
    gloss: 0.35, elongation: [1.4, 2.6], texture: "coarse",
    contents: ["fur", "bones", "skull", "insects", "feathers"],
    notes:
      "Africa's commonest large owl — pellets under roosts on cliffs, buildings and " +
      "trees contain rodents, insects and small birds.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "bubo-lacteus",
    name: "Verreaux's eagle-owl",
    latin: "Bubo lacteus",
    regions: ["africa"],
    pelletLen: [80, 150],
    hue: [0, 360], sat: [0, 60], val: [10, 55],
    gloss: 0.4, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull", "feathers", "beak"],
    notes:
      "Africa's largest owl — huge pellets with hares, hedgehogs, mongoose and large " +
      "bird remains including other owls.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "scotopelia-peli",
    name: "Pel's fishing owl",
    latin: "Scotopelia peli",
    regions: ["africa"],
    pelletLen: [50, 90],
    hue: [0, 360], sat: [0, 50], val: [20, 60],
    gloss: 0.35, elongation: [1.4, 2.4], texture: "coarse",
    contents: ["fish", "bones"],
    notes:
      "Large pellets under riverine roosts containing almost exclusively fish scales, " +
      "fin rays and vertebrae — a strong specialist signature.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.5, region: 1.0 }
  },
  {
    id: "strix-woodfordii",
    name: "African wood owl",
    latin: "Strix woodfordii",
    regions: ["africa"],
    pelletLen: [25, 50],
    hue: [15, 45], sat: [15, 60], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.4], texture: "felted",
    contents: ["fur", "bones", "insects", "feathers"],
    notes:
      "The African counterpart of the tawny owl; medium felted pellets with rodents, " +
      "shrews, insects and small birds in forest and woodland.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "otus-senegalensis",
    name: "African scops owl",
    latin: "Otus senegalensis",
    regions: ["africa"],
    pelletLen: [12, 25],
    hue: [20, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "earthworms"],
    notes:
      "Very small insect-dominated pellets below roosts in savanna trees — crickets, " +
      "moths, beetles and scorpions.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.0, region: 1.0 }
  },
  {
    id: "glaucidium-perlatum",
    name: "Pearl-spotted owlet",
    latin: "Glaucidium perlatum",
    regions: ["africa"],
    pelletLen: [10, 18],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.1, 2.0], texture: "felted",
    contents: ["insects", "fur", "bones", "feathers"],
    notes:
      "Tiny day-active owlet of African savanna; pellets mix beetles, lizards, small " +
      "rodents and birds.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "asio-capensis",
    name: "African marsh owl",
    latin: "Asio capensis",
    regions: ["africa"],
    pelletLen: [35, 65],
    hue: [20, 50], sat: [15, 55], val: [20, 55],
    gloss: 0.3, elongation: [1.8, 3.0], texture: "felted",
    contents: ["fur", "bones", "skull"],
    notes:
      "The African counterpart of the short-eared owl; elongated pellets on open " +
      "marsh and grassland, almost purely small rodents.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "tyto-capensis",
    name: "African grass owl",
    latin: "Tyto capensis",
    regions: ["africa"],
    pelletLen: [35, 70],
    hue: [0, 360], sat: [0, 55], val: [10, 50],
    gloss: 0.7, elongation: [1.5, 2.8], texture: "smooth",
    contents: ["fur", "bones", "skull"],
    notes:
      "Shares the barn owl's glossy black finish but found in dense marsh and " +
      "grassland; rodents and shrews dominate.",
    weight: { colour: 0.5, gloss: 1.5, size: 1.5, elongation: 1.0, contents: 1.0, region: 1.0 }
  },

  /* ---------- Asia ---------- */
  {
    id: "ketupa-ketupu",
    name: "Buffy fish owl",
    latin: "Ketupa ketupu",
    regions: ["asia"],
    pelletLen: [50, 90],
    hue: [0, 360], sat: [0, 50], val: [20, 60],
    gloss: 0.35, elongation: [1.4, 2.4], texture: "coarse",
    contents: ["fish", "bones"],
    notes:
      "Large pellets below waterside roosts in SE Asia — fish, crustaceans and frogs; " +
      "scales and fin rays dominate.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.5, region: 1.0 }
  },
  {
    id: "ketupa-zeylonensis",
    name: "Brown fish owl",
    latin: "Ketupa zeylonensis",
    regions: ["asia"],
    pelletLen: [50, 90],
    hue: [0, 360], sat: [0, 50], val: [20, 60],
    gloss: 0.35, elongation: [1.4, 2.4], texture: "coarse",
    contents: ["fish", "bones", "fur"],
    notes:
      "South Asian riverine owl; pellets contain fish remains with occasional crabs, " +
      "frogs and small mammals.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.5, region: 1.0 }
  },
  {
    id: "bubo-bengalensis",
    name: "Indian (rock) eagle-owl",
    latin: "Bubo bengalensis",
    regions: ["asia"],
    pelletLen: [60, 110],
    hue: [0, 360], sat: [0, 60], val: [10, 55],
    gloss: 0.4, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull", "feathers", "insects"],
    notes:
      "Large pellets below rocky outcrops and ruins; rats, mice, birds and large " +
      "insects typical.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "otus-bakkamoena",
    name: "Indian / collared scops owl",
    latin: "Otus bakkamoena / O. lettia",
    regions: ["asia"],
    pelletLen: [12, 25],
    hue: [20, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "earthworms"],
    notes:
      "Small insect-rich pellets under roosts in wooded areas, gardens and groves " +
      "across South and SE Asia.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.0, region: 1.0 }
  },
  {
    id: "athene-brama",
    name: "Spotted owlet",
    latin: "Athene brama",
    regions: ["asia"],
    pelletLen: [15, 30],
    hue: [20, 50], sat: [10, 50], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones"],
    notes:
      "The South Asian counterpart of the little owl; small pellets with beetles, " +
      "other insects and small mammals, often below urban and ruin roosts.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "strix-leptogrammica",
    name: "Brown wood owl",
    latin: "Strix leptogrammica",
    regions: ["asia"],
    pelletLen: [30, 60],
    hue: [15, 45], sat: [15, 60], val: [25, 60],
    gloss: 0.3, elongation: [1.3, 2.4], texture: "felted",
    contents: ["fur", "bones", "skull", "feathers"],
    notes:
      "Medium pellets in Asian forest; rodents, shrews, bats and small birds.",
    weight: { colour: 0.5, gloss: 0.5, size: 1.5, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "glaucidium-cuculoides",
    name: "Asian barred owlet",
    latin: "Glaucidium cuculoides",
    regions: ["asia"],
    pelletLen: [12, 22],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.0], texture: "felted",
    contents: ["insects", "fur", "bones", "feathers"],
    notes:
      "Small pygmy-owl-type pellets with insects, lizards, small rodents and birds " +
      "across S/SE Asian woodland.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "otus-sunia",
    name: "Oriental scops owl",
    latin: "Otus sunia",
    regions: ["asia"],
    pelletLen: [12, 25],
    hue: [20, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.2, 2.2], texture: "felted",
    contents: ["insects", "earthworms"],
    notes:
      "Tiny insect-dominated pellets; migratory across S and E Asia.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 2.0, region: 1.0 }
  },
  {
    id: "ninox-scutulata",
    name: "Brown boobook (hawk-owl)",
    latin: "Ninox scutulata",
    regions: ["asia"],
    pelletLen: [15, 30],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.3, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones", "feathers"],
    notes:
      "Small pellets of the widespread Asian hawk-owl — insects dominate with some " +
      "small vertebrates; found below roosts in open woodland and parks.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },

  /* ---------- Australasia ---------- */
  {
    id: "ninox-boobook",
    name: "Southern boobook",
    latin: "Ninox boobook",
    regions: ["australasia"],
    pelletLen: [15, 30],
    hue: [15, 50], sat: [15, 55], val: [30, 65],
    gloss: 0.3, elongation: [1.3, 2.2], texture: "felted",
    contents: ["insects", "fur", "bones", "feathers"],
    notes:
      "Australia's commonest small owl; pellets are insect-heavy with mice and small " +
      "birds, found under roost trees in almost any habitat.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "ninox-strenua",
    name: "Powerful owl",
    latin: "Ninox strenua",
    regions: ["australasia"],
    pelletLen: [60, 110],
    hue: [0, 360], sat: [0, 55], val: [15, 55],
    gloss: 0.35, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull"],
    notes:
      "Australia's largest owl — big pellets containing possum and glider fur and " +
      "substantial bones, a signature unlike any Northern-Hemisphere owl.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.5, elongation: 0.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "ninox-connivens",
    name: "Barking owl",
    latin: "Ninox connivens",
    regions: ["australasia"],
    pelletLen: [40, 70],
    hue: [15, 45], sat: [15, 55], val: [20, 60],
    gloss: 0.3, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "insects", "feathers"],
    notes:
      "Medium-large pellets of northern Australian woodland; rabbits, rodents, birds " +
      "and large insects.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "ninox-rufa",
    name: "Rufous owl",
    latin: "Ninox rufa",
    regions: ["australasia"],
    pelletLen: [50, 90],
    hue: [0, 360], sat: [0, 55], val: [15, 55],
    gloss: 0.35, elongation: [1.4, 2.5], texture: "coarse",
    contents: ["fur", "bones", "skull"],
    notes:
      "Large rainforest owl of N Australia and New Guinea; pellets with possums, " +
      "flying foxes and other arboreal mammals.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "tyto-novaehollandiae",
    name: "Australian masked owl",
    latin: "Tyto novaehollandiae",
    regions: ["australasia"],
    pelletLen: [50, 100],
    hue: [0, 360], sat: [0, 55], val: [10, 50],
    gloss: 0.7, elongation: [1.5, 2.8], texture: "smooth",
    contents: ["fur", "bones", "skull"],
    notes:
      "The largest Tyto — glossy dark pellets like an oversized barn owl's, with " +
      "possums, rats and bandicoots; roosts in hollows and dense forest.",
    weight: { colour: 0.5, gloss: 1.5, size: 2.0, elongation: 1.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "tyto-tenebricosa",
    name: "Greater sooty owl",
    latin: "Tyto tenebricosa",
    regions: ["australasia"],
    pelletLen: [45, 80],
    hue: [0, 360], sat: [0, 55], val: [10, 50],
    gloss: 0.7, elongation: [1.5, 2.8], texture: "smooth",
    contents: ["fur", "bones", "skull"],
    notes:
      "Rainforest Tyto with glossy dark pellets containing ringtail possums, " +
      "sugar gliders and native rodents.",
    weight: { colour: 0.5, gloss: 1.5, size: 2.0, elongation: 1.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "tyto-javanica",
    name: "Eastern barn owl",
    latin: "Tyto javanica",
    regions: ["australasia", "asia"],
    pelletLen: [30, 70],
    hue: [0, 360], sat: [0, 60], val: [5, 45],
    gloss: 0.8, elongation: [1.5, 3.0], texture: "smooth",
    contents: ["fur", "bones", "skull", "teeth"],
    notes:
      "The Australasian barn owl — same glossy black fresh pellets, same small-mammal " +
      "diet; distinguish from masked/sooty owls by smaller size.",
    weight: { colour: 1.0, gloss: 2.0, size: 1.5, elongation: 0.5, contents: 1.5, region: 0.5 }
  }
];
