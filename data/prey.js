/* Prey-remains profiles for dissected pellet contents.
 * "signs" are the visible-content checkboxes in the UI; "colour" describes the
 * expected dominant HSV character of the photographed remains.
 */
window.PREY_DATA = [
  {
    id: "microtus-agrestis",
    name: "Field vole (short-tailed vole)",
    latin: "Microtus agrestis",
    signs: ["fur", "bones", "skull", "teeth"],
    hue: [15, 40], sat: [20, 60], val: [25, 60],
    keys:
      "The single most common prey of European barn owls. Molars are rootless and " +
      "ever-growing, with angled enamel ridges on the grinding surface — the easiest " +
      "vole-vs-mouse test. Fur is coarse and brownish-grey.",
    weight: { signs: 1.0, colour: 0.5 }
  },
  {
    id: "apodemus-sylvaticus",
    name: "Wood mouse",
    latin: "Apodemus sylvaticus",
    signs: ["fur", "bones", "skull", "teeth"],
    hue: [20, 45], sat: [25, 65], val: [30, 65],
    keys:
      "Molars have roots and rounded cusps (not the vole's angled ridges). Skull is " +
      "more pointed than a vole's. Second only to the field vole in UK barn-owl diets.",
    weight: { signs: 1.0, colour: 0.5 }
  },
  {
    id: "sorex-araneus",
    name: "Common shrew",
    latin: "Sorex araneus",
    signs: ["fur", "bones", "skull", "teeth"],
    hue: [0, 30], sat: [15, 50], val: [20, 55],
    keys:
      "Diagnostic: the teeth have chestnut-red iron-pigmented tips — unmistakable even " +
      "as loose teeth. Skull is long, narrow and lacks the zygomatic arches of rodents. " +
      "Owls eat shrews readily though mammal predators often reject them.",
    weight: { signs: 1.5, colour: 0.5 }
  },
  {
    id: "myodes-glareolus",
    name: "Bank vole",
    latin: "Myodes glareolus",
    signs: ["fur", "bones", "skull", "teeth"],
    hue: [10, 35], sat: [30, 70], val: [25, 55],
    keys:
      "Chestnut-redder fur than the field vole; rooted molars with a zig-zag ridge " +
      "pattern. Common in woodland-edge tawny owl pellets.",
    weight: { signs: 1.0, colour: 0.5 }
  },
  {
    id: "rattus-norvegicus",
    name: "Brown rat / larger murids",
    latin: "Rattus norvegicus",
    signs: ["fur", "bones", "skull", "teeth"],
    hue: [15, 40], sat: [15, 50], val: [20, 55],
    keys:
      "Skulls over ~35 mm with heavy molars indicate rat-sized prey — mostly taken by " +
      "the largest owls (eagle-owl, great horned). Check jaw length against a scale.",
    weight: { signs: 1.0, colour: 0.5 }
  },
  {
    id: "aves",
    name: "Bird prey",
    latin: "Aves spp.",
    signs: ["feathers", "beak", "bones", "skull"],
    hue: [0, 360], sat: [0, 60], val: [30, 70],
    keys:
      "Feathers are the giveaway; beaks and slender bird leg bones confirm it. Starlings " +
      "and sparrows dominate in tawny and little owl diets; larger owls take birds up to " +
      "duck size.",
    weight: { signs: 1.5, colour: 0.5 }
  },
  {
    id: "coleoptera",
    name: "Beetles & other insects",
    latin: "Coleoptera / Insecta",
    signs: ["insects"],
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    keys:
      "Shiny black or dark-brown chitin fragments — wing cases and leg segments — that " +
      "glint in the light. A pellet dominated by these points strongly to little owl or " +
      "screech-owl; dung beetles are a favourite.",
    weight: { signs: 2.0, colour: 0.5 }
  },
  {
    id: "lumbricidae",
    name: "Earthworms",
    latin: "Lumbricidae",
    signs: ["earthworms"],
    hue: [25, 45], sat: [20, 55], val: [20, 50],
    keys:
      "Rarely visible directly — look for gritty soil content and tiny bristles " +
      "(chaetae) under magnification. Common in tawny owl pellets in wet weather.",
    weight: { signs: 1.5, colour: 0.5 }
  },
  {
    id: "pisces",
    name: "Fish",
    latin: "Pisces spp.",
    signs: ["fish"],
    hue: [0, 360], sat: [0, 40], val: [40, 80],
    keys:
      "Silvery scales and translucent, needle-like fin rays and vertebrae. Typical of " +
      "fish-eating and barred owls near water; rare elsewhere.",
    weight: { signs: 2.0, colour: 0.5 }
  }
];
