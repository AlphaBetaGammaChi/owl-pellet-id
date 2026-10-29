/* Animal dropping / scat profiles — global coverage.
 *
 * Shape vocabulary (must match the #shape select in index.html):
 *   pellets  = separate balls/ovoids (rabbits, deer, kangaroos)
 *   tubular  = sausage / rope, blunt ends (cats, raccoons, cattle)
 *   tapered  = tubular with pointed/twisted ends (foxes, mustelids)
 *   splat    = smear / liquid / whitewash (otter spraint, birds, badger)
 *   cubes    = cubic or blocky chunks (wombats, horse family)
 *
 * dropLen = typical dropping length (mm) for tubular forms, or pellet diameter
 * for pellet producers. Colour is the expected HSV envelope of a fresh
 * dropping. contents uses the same sign vocabulary as the UI checkboxes.
 */
window.DROPPING_DATA = [
  /* ---------- Europe & UK ---------- */
  {
    id: "vulpes-vulpes",
    name: "Red fox",
    latin: "Vulpes vulpes",
    regions: ["europe", "asia", "africa", "australasia", "global"],
    dropLen: [50, 90], shape: "tapered",
    hue: [0, 40], sat: [15, 60], val: [5, 40],
    contents: ["fur", "bones", "seeds", "insects", "feathers"],
    notes:
      "Twisted, pointed tubes ~1 cm wide, left conspicuously on paths, stones and " +
      "tufts. Full of hair, small bones and berry seeds in season; smells musky.",
    weight: { colour: 0.5, size: 1.5, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "meles-meles",
    name: "European badger",
    latin: "Meles meles",
    regions: ["europe", "asia"],
    dropLen: [40, 90], shape: "splat",
    hue: [15, 45], sat: [15, 60], val: [15, 50],
    contents: ["earthworms", "seeds", "plant", "insects", "fur"],
    notes:
      "Soft, sausage-to-splat droppings deposited in shallow dug 'latrine' pits — " +
      "the pits are diagnostic. Full of earthworm remains in wet weather, plum and " +
      "berry seeds in autumn.",
    weight: { colour: 0.5, size: 1.0, shape: 1.5, contents: 1.5, region: 0.5 }
  },
  {
    id: "lutra-lutra",
    name: "Otter spraint",
    latin: "Lutra lutra",
    regions: ["europe", "asia"],
    dropLen: [10, 40], shape: "splat",
    hue: [0, 360], sat: [0, 45], val: [5, 40],
    contents: ["fish", "shell", "mucus", "bones"],
    notes:
      "Small black tarry smears on prominent riverside stones, bridge footings and " +
      "under bridges. Packed with fish scales, vertebrae and crab shell; famously " +
      "smells of jasmine tea or violets when fresh — not unpleasant.",
    weight: { colour: 1.5, size: 1.0, shape: 2.0, contents: 2.0, region: 0.5 }
  },
  {
    id: "erinaceus-europaeus",
    name: "Hedgehog",
    latin: "Erinaceus europaeus",
    regions: ["europe"],
    dropLen: [15, 50], shape: "tubular",
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    contents: ["insects", "earthworms"],
    notes:
      "Dark, often glittering 15–50 mm cylinders on lawns and flowerbeds — the " +
      "glint is beetle wing cases. A common garden find.",
    weight: { colour: 1.0, size: 1.5, shape: 1.0, contents: 1.5, region: 0.5 }
  },
  {
    id: "oryctolagus-cuniculus-d",
    name: "Rabbit",
    latin: "Oryctolagus cuniculus",
    regions: ["europe", "australasia", "southamerica", "global"],
    dropLen: [5, 11], shape: "pellets",
    hue: [20, 45], sat: [20, 60], val: [25, 60],
    contents: ["plant"],
    notes:
      "Small round dry pellets 7–10 mm, deposited in piles at latrines or scattered " +
      "on grazing lawns. Pure plant fibre; crumbles to reveal grass fragments.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "lepus-europaeus",
    name: "Brown hare",
    latin: "Lepus europaeus",
    regions: ["europe", "asia"],
    dropLen: [10, 15], shape: "pellets",
    hue: [20, 45], sat: [20, 60], val: [25, 60],
    contents: ["plant"],
    notes:
      "Larger, flatter, squarer pellets than rabbit, scattered singly in open " +
      "fields rather than piled at latrines.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "capreolus-capreolus",
    name: "Roe deer",
    latin: "Capreolus capreolus",
    regions: ["europe", "asia"],
    dropLen: [15, 20], shape: "pellets",
    hue: [0, 360], sat: [10, 55], val: [5, 40],
    contents: ["plant"],
    notes:
      "Black-brown cylindrical pellets with a pointed end and a dimpled other end, " +
      "in clusters — sometimes stuck together in winter. Darker and shinier than " +
      "hare pellets.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "cervus-elaphus",
    name: "Red / fallow deer",
    latin: "Cervus elaphus / Dama dama",
    regions: ["europe", "asia", "australasia"],
    dropLen: [18, 30], shape: "pellets",
    hue: [0, 360], sat: [10, 55], val: [5, 40],
    contents: ["plant"],
    notes:
      "Larger pellets than roe in the same pointed-end style, often massed into a " +
      "single pile in winter. Dama dama (fallow) similar at 15–25 mm.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "muntiacus-reevesi",
    name: "Muntjac",
    latin: "Muntiacus reevesi",
    regions: ["europe", "asia"],
    dropLen: [10, 15], shape: "pellets",
    hue: [0, 360], sat: [10, 55], val: [5, 40],
    contents: ["plant"],
    notes:
      "Small dark deer pellets — the smallest of the UK deer — in dense cover and " +
      "woodland edge.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "martes-martes",
    name: "Pine marten",
    latin: "Martes martes",
    regions: ["europe"],
    dropLen: [40, 80], shape: "tapered",
    hue: [0, 40], sat: [15, 60], val: [5, 40],
    contents: ["fur", "seeds", "feathers", "bones"],
    notes:
      "Fox-like twisted tubes but usually on prominent forest-floor spots — stumps, " +
      "rocks, path junctions. Famously full of rowan/bilberry seeds in autumn " +
      "(purple scats); fur and vole bones at other times.",
    weight: { colour: 0.5, size: 1.5, shape: 2.0, contents: 1.5, region: 0.5 }
  },
  {
    id: "mustela-spp",
    name: "Stoat / weasel",
    latin: "Mustela erminea / M. nivalis",
    regions: ["europe", "asia", "northamerica"],
    dropLen: [20, 50], shape: "tapered",
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    contents: ["fur", "bones", "feathers"],
    notes:
      "Thin, twisted, dark threads 3–8 mm wide — much narrower than fox. Stoat " +
      "droppings are longer and often deposited on walls and banks; weasel are " +
      "shorter and thinner still.",
    weight: { colour: 0.5, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "sciurus-carolinensis",
    name: "Grey squirrel",
    latin: "Sciurus carolinensis",
    regions: ["europe", "northamerica"],
    dropLen: [5, 10], shape: "pellets",
    hue: [15, 40], sat: [15, 55], val: [15, 50],
    contents: ["seeds", "plant"],
    notes:
      "Small barrel-shaped pellets ~8 mm scattered under feeding trees; pale when " +
      "fresh, darkening with age.",
    weight: { colour: 0.5, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "rattus-norvegicus-d",
    name: "Brown rat",
    latin: "Rattus norvegicus",
    regions: ["global", "europe", "northamerica", "asia", "australasia", "africa", "southamerica"],
    dropLen: [10, 18], shape: "pellets",
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    contents: ["seeds", "plant", "fur"],
    notes:
      "Spindle-shaped pellets 10–18 mm in loose groups along runs and near food " +
      "sources. Larger and more scattered than mouse droppings.",
    weight: { colour: 0.5, size: 2.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "muridae-small",
    name: "Mouse / vole",
    latin: "Apodemus / Mus / Microtus spp.",
    regions: ["global", "europe", "northamerica", "asia", "australasia", "africa", "southamerica"],
    dropLen: [3, 7], shape: "pellets",
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    contents: ["seeds", "plant"],
    notes:
      "Tiny rod-shaped droppings 3–7 mm — rice-grain sized — scattered widely " +
      "indoors and out. Mouse droppings are pointed at the ends.",
    weight: { colour: 0.5, size: 2.5, shape: 2.0, contents: 0.5, region: 0.5 }
  },
  {
    id: "ardea-cinerea",
    name: "Heron / egret whitewash",
    latin: "Ardea cinerea",
    regions: ["europe", "asia", "africa"],
    dropLen: [30, 150], shape: "splat",
    hue: [0, 360], sat: [0, 15], val: [70, 100],
    contents: ["fish", "bones"],
    notes:
      "White liquid splashes — chalky uric-acid whitewash — below nests, roost " +
      "branches and regular fishing perches.",
    weight: { colour: 2.5, size: 1.0, shape: 2.0, contents: 1.0, region: 0.5 }
  },
  {
    id: "anser-spp",
    name: "Goose / duck",
    latin: "Anser / Branta spp.",
    regions: ["europe", "northamerica", "asia", "australasia"],
    dropLen: [50, 100], shape: "tubular",
    hue: [60, 130], sat: [15, 60], val: [15, 55],
    contents: ["plant"],
    notes:
      "Greenish-brown segmented tubes on grazed grass; pure chewed vegetation. " +
      "Goose droppings are larger and greener than duck.",
    weight: { colour: 1.5, size: 1.5, shape: 1.0, contents: 1.0, region: 0.5 }
  },

  /* ---------- North America ---------- */
  {
    id: "canis-latrans",
    name: "Coyote",
    latin: "Canis latrans",
    regions: ["northamerica"],
    dropLen: [60, 120], shape: "tapered",
    hue: [0, 40], sat: [15, 60], val: [5, 40],
    contents: ["fur", "bones", "seeds", "insects"],
    notes:
      "Like a large fox scat — twisted rope with pointed ends and lots of hair — " +
      "deposited on trails and junctions. Mesquite-bean and juniper seeds common " +
      "in the Southwest.",
    weight: { colour: 0.5, size: 1.5, shape: 2.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "canis-lupus-familiaris",
    name: "Domestic / feral dog",
    latin: "Canis lupus familiaris",
    regions: ["global", "europe", "northamerica", "southamerica", "africa", "asia", "australasia"],
    dropLen: [60, 150], shape: "tubular",
    hue: [10, 40], sat: [20, 65], val: [15, 55],
    contents: ["plant"],
    notes:
      "Uniform blunt-ended logs without the twisted hairy look of wild canids — " +
      "kibble diets produce a homogeneous texture. Very common; always the first " +
      "thing to rule out.",
    weight: { colour: 0.5, size: 1.0, shape: 1.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "felis-catus",
    name: "Domestic / feral cat",
    latin: "Felis catus",
    regions: ["global", "europe", "northamerica", "southamerica", "africa", "asia", "australasia"],
    dropLen: [40, 80], shape: "tubular",
    hue: [15, 45], sat: [20, 60], val: [15, 55],
    contents: ["fur", "bones", "feathers"],
    notes:
      "Segmented blunt tubes, usually buried or scraped over in loose soil — burial " +
      "behaviour itself is the clue.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 0.5, region: 0.5 }
  },
  {
    id: "odocoileus-virginianus",
    name: "White-tailed / mule deer",
    latin: "Odocoileus spp.",
    regions: ["northamerica", "southamerica"],
    dropLen: [12, 25], shape: "pellets",
    hue: [0, 360], sat: [10, 55], val: [5, 40],
    contents: ["plant"],
    notes:
      "Dark pointed-end pellets in piles; winter pellets may fuse into clumps. " +
      "The default deer answer across the Americas.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "alces-alces",
    name: "Moose / elk",
    latin: "Alces alces / Cervus canadensis",
    regions: ["northamerica", "asia", "europe"],
    dropLen: [20, 35], shape: "pellets",
    hue: [0, 360], sat: [10, 55], val: [5, 40],
    contents: ["plant"],
    notes:
      "The largest deer pellets — almond-sized, in big piles. Moose pellets are " +
      "20–30 mm; elk slightly smaller. (European 'elk' = moose.)",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "ursus-americanus",
    name: "Black bear",
    latin: "Ursus americanus",
    regions: ["northamerica"],
    dropLen: [50, 180], shape: "tubular",
    hue: [0, 45], sat: [15, 60], val: [10, 50],
    contents: ["seeds", "plant", "insects", "fur", "bones"],
    notes:
      "Massive blunt tubes 25–40 mm across, packed with whatever is in season — " +
      "berry seeds, sedge, ants, or (ominously) undigested meat and hair. Size and " +
      "content variety are diagnostic.",
    weight: { colour: 0.5, size: 2.0, shape: 1.5, contents: 2.0, region: 1.0 }
  },
  {
    id: "procyon-lotor",
    name: "Raccoon",
    latin: "Procyon lotor",
    regions: ["northamerica", "europe"],
    dropLen: [50, 100], shape: "tubular",
    hue: [15, 45], sat: [15, 60], val: [10, 50],
    contents: ["seeds", "shell", "insects", "fur"],
    notes:
      "Blunt-ended tubes at communal 'latrines' — bases of trees, logs, rocks, " +
      "attics. Often full of berry seeds and crayfish shell. NOTE: can carry " +
      "Baylisascaris roundworm — do not handle.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "lynx-rufus",
    name: "Bobcat / lynx",
    latin: "Lynx rufus / L. canadensis",
    regions: ["northamerica", "europe", "asia"],
    dropLen: [60, 110], shape: "tubular",
    hue: [0, 35], sat: [15, 55], val: [5, 40],
    contents: ["fur", "bones", "feathers"],
    notes:
      "Dense segmented tubes with tightly packed fur and bone — pure carnivore " +
      "scat, no plant matter. Often scraped over with soil or leaf litter.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "mephitis-mephitis",
    name: "Striped skunk",
    latin: "Mephitis mephitis",
    regions: ["northamerica"],
    dropLen: [30, 60], shape: "tubular",
    hue: [0, 30], sat: [10, 50], val: [5, 40],
    contents: ["insects", "fur", "seeds"],
    notes:
      "Blunt tubes 10–15 mm wide packed with insect exoskeleton bits — beetles, " +
      "crickets, grasshoppers.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "didelphis-virginiana",
    name: "Virginia opossum",
    latin: "Didelphis virginiana",
    regions: ["northamerica"],
    dropLen: [40, 70], shape: "tubular",
    hue: [15, 45], sat: [15, 60], val: [10, 50],
    contents: ["seeds", "insects", "fur", "bones"],
    notes:
      "Medium tubes with pointed ends, often curled; omnivore contents — seeds, " +
      "insects, small vertebrates, carrion scraps.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "erethizon-dorsatum",
    name: "North American porcupine",
    latin: "Erethizon dorsatum",
    regions: ["northamerica"],
    dropLen: [8, 15], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["plant"],
    notes:
      "Cashew-shaped pellets that accumulate in great heaps under winter dens and " +
      "feeding trees — decades of accumulated scat is diagnostic.",
    weight: { colour: 0.5, size: 2.0, shape: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "meleagris-gallopavo",
    name: "Wild turkey",
    latin: "Meleagris gallopavo",
    regions: ["northamerica"],
    dropLen: [40, 80], shape: "tubular",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["seeds", "plant", "insects"],
    notes:
      "Distinctive: males produce J- or hook-shaped droppings, females coiled " +
      "spirals. Plant and mast (acorn) filled.",
    weight: { colour: 0.5, size: 1.5, shape: 2.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "sylvilagus-spp",
    name: "Cottontail rabbit",
    latin: "Sylvilagus spp.",
    regions: ["northamerica"],
    dropLen: [5, 10], shape: "pellets",
    hue: [20, 45], sat: [20, 60], val: [25, 60],
    contents: ["plant"],
    notes:
      "The North American equivalent of rabbit pellets — small round dry balls of " +
      "pure plant fibre, scattered or piled.",
    weight: { colour: 1.0, size: 2.0, shape: 2.0, contents: 1.0, region: 1.0 }
  },

  /* ---------- Central & South America ---------- */
  {
    id: "pecari-tayassu",
    name: "Peccary / capybara",
    latin: "Pecari / Tayassu / Hydrochoerus",
    regions: ["southamerica"],
    dropLen: [15, 30], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["plant", "seeds"],
    notes:
      "Capybara leave oval pellets at communal waterside latrines; peccaries leave " +
      "clustered fruit-seed-rich scats on forest paths.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "puma-concolor",
    name: "Puma / jaguar",
    latin: "Puma concolor / Panthera onca",
    regions: ["northamerica", "southamerica"],
    dropLen: [80, 150], shape: "tubular",
    hue: [0, 35], sat: [15, 55], val: [5, 40],
    contents: ["fur", "bones"],
    notes:
      "Large segmented carnivore tubes with packed deer or peccary hair; puma scats " +
      "are often scraped over, jaguar's left in the open on forest trails.",
    weight: { colour: 0.5, size: 2.0, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "dasypodidae",
    name: "Armadillo",
    latin: "Dasypodidae",
    regions: ["southamerica", "northamerica"],
    dropLen: [20, 40], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["insects", "earthworms"],
    notes:
      "Clay-rich pellets that look like they contain mud — because they do; " +
      "armadillos ingest soil with their ants and termites.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },

  /* ---------- Africa ---------- */
  {
    id: "crocuta-crocuta",
    name: "Spotted hyena",
    latin: "Crocuta crocuta",
    regions: ["africa"],
    dropLen: [30, 70], shape: "pellets",
    hue: [0, 360], sat: [0, 15], val: [75, 100],
    contents: ["bones", "fur"],
    notes:
      "Unmistakable chalky WHITE lumps — calcium from crushed bone — in latrine " +
      "piles. The classic 'what is this white poo?' of African safari.",
    weight: { colour: 3.0, size: 1.5, shape: 1.0, contents: 1.5, region: 1.0 }
  },
  {
    id: "panthera-leo",
    name: "Lion / leopard",
    latin: "Panthera leo / P. pardus",
    regions: ["africa", "asia"],
    dropLen: [80, 160], shape: "tubular",
    hue: [0, 35], sat: [15, 55], val: [10, 50],
    contents: ["fur", "bones"],
    notes:
      "Very large segmented tubes full of antelope hair; leopard scats are smaller " +
      "and often deposited in the open as territorial markers.",
    weight: { colour: 0.5, size: 2.0, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "elephantidae",
    name: "Elephant",
    latin: "Loxodonta / Elephas",
    regions: ["africa", "asia"],
    dropLen: [100, 200], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [20, 55],
    contents: ["plant", "seeds"],
    notes:
      "Huge fibrous balls 10–20 cm across, loosely packed with grass, twigs and " +
      "whole seeds — an important seed-dispersal route. Impossible to confuse.",
    weight: { colour: 0.5, size: 2.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "aepyceros-melampus",
    name: "Antelope (impala, gazelle, etc.)",
    latin: "Aepyceros / Gazella / Antilope spp.",
    regions: ["africa", "asia"],
    dropLen: [10, 25], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["plant"],
    notes:
      "Small dark ovoid pellets in middens (impala) or scattered; the African and " +
      "Asian equivalent of deer pellets.",
    weight: { colour: 0.5, size: 2.0, shape: 2.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "equidae",
    name: "Horse / zebra / donkey",
    latin: "Equidae",
    regions: ["global", "africa", "asia", "europe", "northamerica", "southamerica", "australasia"],
    dropLen: [40, 70], shape: "cubes",
    hue: [20, 50], sat: [20, 60], val: [20, 60],
    contents: ["plant"],
    notes:
      "Flattened irregular balls in piles, coarse with undigested grass fibre — " +
      "horses are inefficient digesters. Zebra and donkey droppings look identical.",
    weight: { colour: 1.0, size: 2.0, shape: 1.5, contents: 1.0, region: 0.5 }
  },
  {
    id: "hystrix-africaeaustralis",
    name: "Cape porcupine",
    latin: "Hystrix africaeaustralis",
    regions: ["africa", "asia"],
    dropLen: [10, 20], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["plant", "seeds"],
    notes:
      "Pellets accumulating at burrow mouths; gnawed bones collected by porcupines " +
      "often lie nearby — a supporting clue.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.0, region: 1.0 }
  },

  /* ---------- Asia ---------- */
  {
    id: "panthera-tigris",
    name: "Tiger",
    latin: "Panthera tigris",
    regions: ["asia"],
    dropLen: [100, 180], shape: "tubular",
    hue: [0, 35], sat: [15, 55], val: [10, 50],
    contents: ["fur", "bones"],
    notes:
      "The largest cat scat — thick tubes packed with deer or boar hair, usually " +
      "part-buried on trails and scrape sites.",
    weight: { colour: 0.5, size: 2.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "viverridae",
    name: "Civet / genet",
    latin: "Viverridae / Genetta",
    regions: ["asia", "africa", "europe"],
    dropLen: [40, 90], shape: "tubular",
    hue: [15, 45], sat: [15, 60], val: [10, 50],
    contents: ["seeds", "fur", "insects", "bones"],
    notes:
      "Fruit-seed-rich tubes at regular latrine sites — the famous source of kopi " +
      "luwak coffee cherries. Genets use elevated latrines on branches and roofs.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "ailurus-fulgens",
    name: "Red panda",
    latin: "Ailurus fulgens",
    regions: ["asia"],
    dropLen: [20, 35], shape: "pellets",
    hue: [60, 130], sat: [15, 55], val: [20, 55],
    contents: ["plant"],
    notes:
      "Bamboo-fibre pellets — greenish, shreddy, almost pure leaf fibre — below " +
      "feeding platforms in Himalayan forest.",
    weight: { colour: 1.5, size: 1.5, shape: 1.0, contents: 1.5, region: 1.0 }
  },
  {
    id: "macropodidae",
    name: "Macaque / langur (primate)",
    latin: "Macaca / Semnopithecus",
    regions: ["asia"],
    dropLen: [30, 60], shape: "tubular",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["seeds", "plant"],
    notes:
      "Soft irregular tubes under roosting trees and around temples; fruit and leaf " +
      "filled.",
    weight: { colour: 0.5, size: 1.5, shape: 1.0, contents: 1.0, region: 1.0 }
  },

  /* ---------- Australasia ---------- */
  {
    id: "vombatus-ursinus",
    name: "Common wombat",
    latin: "Vombatus ursinus",
    regions: ["australasia"],
    dropLen: [20, 30], shape: "cubes",
    hue: [20, 50], sat: [20, 60], val: [20, 60],
    contents: ["plant"],
    notes:
      "The famous CUBED droppings — up to 100 a night, stacked on logs and rocks as " +
      "territory markers. Dry, fibrous, faintly sweet-smelling when fresh.",
    weight: { colour: 1.0, size: 1.5, shape: 3.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "macropus-spp",
    name: "Kangaroo / wallaby",
    latin: "Macropus / Wallabia spp.",
    regions: ["australasia"],
    dropLen: [10, 25], shape: "pellets",
    hue: [15, 45], sat: [15, 60], val: [15, 55],
    contents: ["plant"],
    notes:
      "Oval pellets scattered where animals graze; larger and darker than rabbit " +
      "pellets. Kangaroo pellets reach 25 mm.",
    weight: { colour: 0.5, size: 2.0, shape: 2.0, contents: 1.0, region: 1.0 }
  },
  {
    id: "phascolarctos-cinereus",
    name: "Koala",
    latin: "Phascolarctos cinereus",
    regions: ["australasia"],
    dropLen: [10, 18], shape: "pellets",
    hue: [20, 50], sat: [20, 60], val: [25, 60],
    contents: ["plant"],
    notes:
      "Rugby-ball pellets beneath food trees that smell faintly of eucalyptus — " +
      "pure shredded leaf.",
    weight: { colour: 0.5, size: 2.0, shape: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "trichosurus-vulpecula",
    name: "Brushtail possum",
    latin: "Trichosurus vulpecula",
    regions: ["australasia"],
    dropLen: [15, 25], shape: "pellets",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["plant", "seeds"],
    notes:
      "Dark oval pellets under roosts and roof voids; finer-textured than kangaroo.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.0, region: 1.0 }
  },
  {
    id: "tachyglossus-aculeatus",
    name: "Echidna",
    latin: "Tachyglossus aculeatus",
    regions: ["australasia"],
    dropLen: [30, 60], shape: "tubular",
    hue: [15, 45], sat: [15, 55], val: [15, 55],
    contents: ["insects", "earthworms"],
    notes:
      "Soil-rich cylinders full of ant and termite fragments — like a miniature " +
      "armadillo scat, often partly buried.",
    weight: { colour: 0.5, size: 1.5, shape: 1.5, contents: 1.5, region: 1.0 }
  },
  {
    id: "dromaius-casuarius",
    name: "Emu / cassowary",
    latin: "Dromaius novaehollandiae / Casuarius",
    regions: ["australasia"],
    dropLen: [80, 200], shape: "splat",
    hue: [15, 50], sat: [15, 60], val: [15, 55],
    contents: ["seeds", "plant", "insects"],
    notes:
      "Large fibrous masses; cassowary scats famously contain WHOLE fruit seeds — " +
      "an essential rainforest seed disperser.",
    weight: { colour: 0.5, size: 2.0, shape: 1.0, contents: 1.5, region: 1.0 }
  }
];
