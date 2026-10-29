/* Prey-remains profiles for dissected pellet contents.
 * "signs" are the visible-content checkboxes in the UI; "colour" describes the
 * expected dominant HSV character of the photographed remains.
 * "skullLen" is the expected range (mm) for the largest skull found — used for
 * prey-size estimation. "massG" is the typical live mass range (g) shown to the
 * user. "lenKeys" describes how to read bones/jaws when no skull survives.
 */
window.PREY_DATA = [
  {
    id: "microtus-agrestis",
    name: "Field vole (short-tailed vole)",
    latin: "Microtus agrestis",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [22, 28], massG: [20, 50],
    lenKeys: "Mandible (lower jaw) typically 14–17 mm; femur ~15 mm.",
    hue: [15, 40], sat: [20, 60], val: [25, 60],
    keys:
      "The single most common prey of European barn owls. Molars are rootless and " +
      "ever-growing, with angled enamel ridges on the grinding surface — the easiest " +
      "vole-vs-mouse test. Fur is coarse and brownish-grey.",
    weight: { signs: 1.0, colour: 0.5, size: 1.0 }
  },
  {
    id: "clethrionomys-glareolus",
    name: "Bank vole",
    latin: "Clethrionomys glareolus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [21, 26], massG: [15, 35],
    lenKeys: "Mandible 12–15 mm; molars rooted with zig-zag ridges.",
    hue: [10, 35], sat: [30, 70], val: [25, 55],
    keys:
      "Chestnut-redder fur than the field vole; rooted molars with a zig-zag ridge " +
      "pattern. Common in woodland-edge tawny owl pellets.",
    weight: { signs: 1.0, colour: 0.5, size: 1.0 }
  },
  {
    id: "apodemus-sylvaticus",
    name: "Wood mouse",
    latin: "Apodemus sylvaticus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [23, 30], massG: [15, 35],
    lenKeys: "Mandible 13–17 mm, slender; molars rooted with rounded cusps.",
    hue: [20, 45], sat: [25, 65], val: [30, 65],
    keys:
      "Molars have roots and rounded cusps (not the vole's angled ridges). Skull is " +
      "more pointed than a vole's. Second only to the field vole in UK barn-owl diets.",
    weight: { signs: 1.0, colour: 0.5, size: 1.0 }
  },
  {
    id: "micromys-minutus",
    name: "Harvest mouse",
    latin: "Micromys minutus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [15, 19], massG: [4, 8],
    lenKeys: "Very small mandible 9–11 mm; tiny rooted molars.",
    hue: [20, 45], sat: [30, 70], val: [35, 70],
    keys:
      "Europe's smallest rodent — a skull under ~20 mm points here rather than to a " +
      "young wood mouse. Common in reed-bed and grassland barn-owl pellets.",
    weight: { signs: 1.0, colour: 0.5, size: 1.5 }
  },
  {
    id: "mus-musculus",
    name: "House mouse",
    latin: "Mus musculus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [18, 24], massG: [10, 25],
    lenKeys: "Mandible 11–14 mm; small rooted molars.",
    hue: [20, 45], sat: [15, 55], val: [30, 65],
    keys:
      "Smaller and greyer than the wood mouse; typical of barn owls hunting around " +
      "farm buildings and human habitation.",
    weight: { signs: 1.0, colour: 0.5, size: 1.0 }
  },
  {
    id: "sorex-araneus",
    name: "Common shrew",
    latin: "Sorex araneus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [18, 22], massG: [5, 12],
    lenKeys: "Mandible 9–11 mm, deep-jawed; red-tipped teeth unmistakable.",
    hue: [0, 30], sat: [15, 50], val: [20, 55],
    keys:
      "Diagnostic: the teeth have chestnut-red iron-pigmented tips — unmistakable even " +
      "as loose teeth. Skull is long, narrow and lacks the zygomatic arches of rodents. " +
      "Owls eat shrews readily though mammal predators often reject them.",
    weight: { signs: 1.5, colour: 0.5, size: 1.0 }
  },
  {
    id: "sorex-minutus",
    name: "Pygmy shrew",
    latin: "Sorex minutus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [14, 17], massG: [2, 6],
    lenKeys: "Mandible 7–8 mm; red-tipped teeth on a noticeably smaller skull.",
    hue: [0, 30], sat: [15, 50], val: [25, 60],
    keys:
      "Like the common shrew but distinctly smaller — a red-toothed skull under ~17 mm " +
      "is probably pygmy shrew rather than a juvenile common shrew.",
    weight: { signs: 1.5, colour: 0.5, size: 1.5 }
  },
  {
    id: "neomys-fodiens",
    name: "Water shrew",
    latin: "Neomys fodiens",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [20, 24], massG: [12, 20],
    lenKeys: "Mandible 11–13 mm; larger red-toothed skull than common shrew.",
    hue: [0, 30], sat: [10, 45], val: [15, 50],
    keys:
      "The largest UK shrew with the same red-tipped teeth; dark, almost black fur. " +
      "Expect it in pellets from owls hunting near streams and marshes.",
    weight: { signs: 1.5, colour: 0.5, size: 1.0 }
  },
  {
    id: "rattus-norvegicus",
    name: "Brown rat / larger murids",
    latin: "Rattus norvegicus",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [35, 55], massG: [150, 500],
    lenKeys: "Mandible 22–30 mm; heavy molars. Juveniles overlap large voles.",
    hue: [15, 40], sat: [15, 50], val: [20, 55],
    keys:
      "Skulls over ~35 mm with heavy molars indicate rat-sized prey — mostly taken by " +
      "the largest owls (eagle-owl, great horned). Check jaw length against a scale.",
    weight: { signs: 1.0, colour: 0.5, size: 2.0 }
  },
  {
    id: "oryctolagus-cuniculus",
    name: "Rabbit / lagomorph",
    latin: "Oryctolagus cuniculus (young)",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [40, 90], massG: [150, 2000],
    lenKeys: "Distinctive fenestrated (lattice-sided) skull; large curved incisors.",
    hue: [15, 40], sat: [15, 50], val: [25, 60],
    keys:
      "Only eagle-owls and great horned owls take rabbits regularly, and usually " +
      "young ones. The latticed skull sides and huge incisors are diagnostic.",
    weight: { signs: 1.0, colour: 0.5, size: 2.0 }
  },
  {
    id: "sciuridae",
    name: "Squirrel / chipmunk",
    latin: "Sciuridae",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [30, 65], massG: [100, 800],
    lenKeys: "Rounded braincase, large orange incisors, 4–5 cheek teeth.",
    hue: [10, 40], sat: [20, 60], val: [20, 55],
    keys:
      "Bushy fur and heavy incisors; typical of great horned and spotted owls in " +
      "North America, eagle-owls in Eurasia.",
    weight: { signs: 1.0, colour: 0.5, size: 1.5 }
  },
  {
    id: "chiroptera",
    name: "Bat",
    latin: "Chiroptera",
    signs: ["fur", "bones", "skull", "teeth"],
    skullLen: [12, 25], massG: [3, 40],
    lenKeys: "Delicate skulls and needle-fine finger bones; wing membrane scraps.",
    hue: [10, 35], sat: [20, 55], val: [15, 50],
    keys:
      "Extremely fine, fragile bones and tiny pointed teeth; membranous wing tissue " +
      "may survive. Taken by Strix, Asio and tropical owls.",
    weight: { signs: 1.0, colour: 0.5, size: 1.0 }
  },
  {
    id: "aves",
    name: "Bird prey",
    latin: "Aves spp.",
    signs: ["feathers", "beak", "bones", "skull"],
    skullLen: [15, 90], massG: [10, 1500],
    lenKeys: "Hollow thin-walled bones; beak length scales with bird size.",
    hue: [0, 360], sat: [0, 60], val: [30, 70],
    keys:
      "Feathers are the giveaway; beaks and slender bird leg bones confirm it. Starlings " +
      "and sparrows dominate in tawny and little owl diets; larger owls take birds up to " +
      "duck size.",
    weight: { signs: 1.5, colour: 0.5, size: 0.5 }
  },
  {
    id: "coleoptera",
    name: "Beetles & other insects",
    latin: "Coleoptera / Insecta",
    signs: ["insects"],
    skullLen: [2, 40], massG: [0.5, 15],
    lenKeys: "Individual wing cases and leg segments; count pronota to estimate numbers.",
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    keys:
      "Shiny black or dark-brown chitin fragments — wing cases and leg segments — that " +
      "glint in the light. A pellet dominated by these points strongly to little owl or " +
      "screech-owl; dung beetles are a favourite.",
    weight: { signs: 2.0, colour: 0.5, size: 0.2 }
  },
  {
    id: "lumbricidae",
    name: "Earthworms",
    latin: "Lumbricidae",
    signs: ["earthworms"],
    skullLen: [1, 5], massG: [1, 10],
    lenKeys: "No hard parts — look for gritty soil and chaetae under magnification.",
    hue: [25, 45], sat: [20, 55], val: [20, 50],
    keys:
      "Rarely visible directly — look for gritty soil content and tiny bristles " +
      "(chaetae) under magnification. Common in tawny owl pellets in wet weather.",
    weight: { signs: 1.5, colour: 0.5, size: 0.2 }
  },
  {
    id: "pisces",
    name: "Fish",
    latin: "Pisces spp.",
    signs: ["fish"],
    skullLen: [10, 80], massG: [5, 500],
    lenKeys: "Translucent vertebrae in neat stacks; silvery cycloid scales.",
    hue: [0, 360], sat: [0, 40], val: [40, 80],
    keys:
      "Silvery scales and translucent, needle-like fin rays and vertebrae. Typical of " +
      "fish-eating and barred owls near water; rare elsewhere.",
    weight: { signs: 2.0, colour: 0.5, size: 0.5 }
  },
  {
    id: "amphibia-reptilia",
    name: "Amphibian or reptile",
    latin: "Amphibia / Reptilia",
    signs: ["bones", "skull"],
    skullLen: [10, 40], massG: [5, 100],
    lenKeys: "Frog skulls are broad and flat; lizard jaws carry pleurodont teeth.",
    hue: [80, 160], sat: [10, 50], val: [25, 60],
    keys:
      "Fine, light bones with frog or lizard geometry; scaly skin scraps may survive. " +
      "Taken by barred, screech and pygmy owls near water or in warm climates.",
    weight: { signs: 1.0, colour: 0.5, size: 1.0 }
  }
];
