/* Owl pellet species profiles.
 * Each profile describes measurable photo features and context used by the
 * matcher in app.js. Lengths are in millimetres. Colour is described in HSV
 * ranges; "gloss" is the expected fraction of bright specular pixels on a
 * fresh pellet's surface.
 */
window.OWL_DATA = [
  {
    id: "tyto-alba",
    name: "Barn owl",
    latin: "Tyto alba",
    regions: ["europe", "northamerica", "global"],
    pelletLen: [30, 80],
    // Dark, characteristically black and glossy when fresh; smooth surface.
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
    regions: ["europe", "global"],
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
    regions: ["europe", "global"],
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
    regions: ["europe", "northamerica", "global"],
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
    regions: ["europe", "northamerica", "global"],
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
    regions: ["europe", "global"],
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
    id: "bubo-virginianus",
    name: "Great horned owl",
    latin: "Bubo virginianus",
    regions: ["northamerica"],
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
    id: "bubo-scandiacus",
    name: "Snowy owl",
    latin: "Bubo scandiacus",
    regions: ["europe", "northamerica", "global"],
    pelletLen: [50, 100],
    hue: [0, 360], sat: [0, 50], val: [20, 60],
    gloss: 0.35, elongation: [1.4, 2.6], texture: "coarse",
    contents: ["fur", "bones", "feathers"],
    notes:
      "Large pellets on open tundra, airfields and coastal marshes in winter. Contents " +
      "are usually lemming/vole in the Arctic, with birds taken elsewhere.",
    weight: { colour: 0.5, gloss: 0.5, size: 2.0, elongation: 0.5, contents: 1.0, region: 0.5 }
  }
];
