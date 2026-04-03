export interface VehicleCategory {
  label: string;
  value: string;
}

export interface PricingTier {
  category: string;
  price: number;
}

export interface ServicePackage {
  name: string;
  includes: string[];
  pricing: PricingTier[];
  featured?: boolean;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  duration?: string;
  description?: string;
  vehicleCategories: VehicleCategory[];
  packages: ServicePackage[];
  additionalInfo?: string;
  cta?: {
    text: string;
    link: string;
  };
}

export const vehicleCategories: VehicleCategory[] = [
  { label: "Manjša vozila", value: "small" },
  { label: "Karavani / SUV", value: "suv" },
  { label: "Večja vozila / enoprostorci / terenska vozila", value: "large" },
  { label: "Potniški kombi", value: "minibus" },
  { label: "Tovorni kombi", value: "cargo" },
];

export const services: ServiceDetail[] = [
  {
    id: "1",
    slug: "zunanje-ciscenje",
    title: "Zunanje čiščenje",
    shortDesc: "Temeljito ročno pranje vozila za čist in urejen zunanji videz.",
    icon: "Droplets",
    duration: "15–20 min",
    description:
      "Naše zunanje čiščenje vključuje predpranje, ročno oče, čiščenje platišč, zaščitni vosek in premaz za gume. Vozilo ostane neskodljivo čisto in zaščiteno.",
    vehicleCategories: vehicleCategories,
    packages: [
      {
        name: "Zunanje čiščenje",
        includes: [
          "Predpranje",
          "Ročno zunanje pranje",
          "Čiščenje prednjih tepihov (samo gumjastih)",
          "Čiščenje platišč",
          "Zaščitni vosek",
          "Brisanje celotnega vozila (tudi med vrati)",
          "Premaz za gume",
        ],
        pricing: [
          { category: "small", price: 13 },
          { category: "suv", price: 15 },
          { category: "large", price: 15 },
          { category: "minibus", price: 17 },
          { category: "cargo", price: 20 },
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "temeljito-notranje-ciscenje",
    title: "Temeljito notranje čiščenje",
    shortDesc: "Čiščenje notranjosti vozila za svežino, urejenost in boljše počutje med vožnjo.",
    icon: "Wind",
    duration: "40 min",
    description:
      "Temeljito notranje čiščenje poskrbi za popolno čistost in svežino vozila. Sesamo vse površine, čistimo plastike in armature, ter premazujemo za dolgoročno zaščito.",
    vehicleCategories: vehicleCategories,
    packages: [
      {
        name: "Temeljito notranje čiščenje",
        includes: [
          "Spihovanje tal in sedežev",
          "Sesanje celotnega vozila",
          "Čiščenje plastik in armature",
          "Čiščenje stekel",
          "Temeljito čiščenje tepihov",
          "Premaz za plastike",
        ],
        pricing: [
          { category: "small", price: 25 },
          { category: "suv", price: 28 },
          { category: "large", price: 30 },
          { category: "minibus", price: 35 },
          { category: "cargo", price: 20 },
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "kompletno-ciscenje",
    title: "Kompletno čiščenje",
    shortDesc: "Kombinacija temeljitega notranjega in zunanjega čiščenja za popolno nega vozila.",
    icon: "Sparkles",
    duration: "1 ura",
    description:
      "Naša najpopularnejša storitev! Kompletno čiščenje vključuje tako temeljito notranje kot zunanje čiščenje. Vozilo je po končanem čiščenju kot novo.",
    vehicleCategories: vehicleCategories,
    packages: [
      {
        name: "Kompletno čiščenje",
        includes: [
          "Temeljito notranje čiščenje",
          "Temeljito zunanje čiščenje",
          "Sesanje in čiščenje notranjosti",
          
        ],
        pricing: [
          { category: "small", price: 35 },
          { category: "suv", price: 38 },
          { category: "large", price: 40 },
          { category: "minibus", price: 45 },
          { category: "cargo", price: 40 },
        ],
        featured: true,
      },
    ],
  },
  {
    id: "4",
    slug: "osnovno-ciscenje",
    title: "Osnovno čiščenje",
    shortDesc: "Hitro čiščenje za osnovne potrebe - pranje in čiščenje notranjosti.",
    icon: "CircleDot",
    duration: "40 min",
    description:
      "Osnovno čiščenje je idealno za redne ali hitro potrebne osnovne popravke. Vključuje zunanje pranje in notranje čiščenje z sesanjem in čiščenjem armature.",
    vehicleCategories: vehicleCategories.slice(0, 3),
    packages: [
      {
        name: "Osnovno čiščenje",
        includes: [
          "Zunanje pranje",
          "Sesanje celotnega vozila",
          "Čiščenje armature",
          "Čiščenje tepihov",
        ],
        pricing: [
          { category: "small", price: 23 },
          { category: "suv", price: 25 },
          { category: "large", price: 28 },
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "globinsko-ciscenje",
    title: "Globinsko čiščenje",
    shortDesc: "Poglobljeno čiščenje površin in tekstila za odstranjevanje trdovratnejše umazanije.",
    icon: "Lightbulb",
    description:
      "Globinsko čiščenje pojema do najtrdovratnejše madeže in onesnaženja. Ponujamo dva paketa - osnovni in GLOSI paket s celotno detajlno nega vozila.",
    vehicleCategories: [],
    packages: [
      {
        name: "Osnovni paket",
        includes: [
          "Globinsko čiščenje sedežev",
          "Globinsko čiščenje tapet in plastik",
          "Čiščenje tečajev med vrati",
          "Čiščenje tečajev pri sedežih",
          "Premaz plastik",
          "Zunanje pranje",
          "Notranje čiščenje",
        ],
        pricing: [{ category: "all", price: 80 }],
      },
      {
        name: "GLOSI paket",
        includes: [
          "Globinsko čiščenje celotnega vozila",
          "Sedeži, tla, tapete, strop, pasovi...",
          "Detajlno čiščenje celotne notranjosti",
          "Dezinfekcija z ozonom",
          "Čiščenje tečajev med vrati",
          "Zunanje pranje",
        ],
        pricing: [{ category: "all", price: 120 }],
        featured: true,
      },
    ],
  },
  {
    id: "6",
    slug: "izposoja-globinskega-sesalca",
    title: "Izposoja globinskega sesalca",
    shortDesc: "Možnost izposoje globinskega sesalca za samostojno čiščenje doma.",
    icon: "Fan",
    description:
      "Želite sami čistiti vaše pohištvo? Izposodite si naš profesionalni globinski sesalec. V najem je vključeno tudi čistilo in krtača za lažje delo.",
    vehicleCategories: [],
    packages: [
      {
        name: "Izposoja sesalca - 1 dan",
        includes: [
          "Profesionalni globinski sesalec",
          "Čistilo za čiščenje",
          "Krtača za lažje čiščenje",
          "Navodila za uporabo",
        ],
        pricing: [{ category: "all", price: 30 }],
      },
      {
        name: "Izposoja sesalca - 2 dni",
        includes: [
          "Profesionalni globinski sesalec",
          "Čistilo za čiščenje",
          "Krtača za lažje čiščenje",
          "Navodila za uporabo",
        ],
        pricing: [{ category: "all", price: 50 }],
        featured: true,
      },
    ],
    additionalInfo:
      "Sesalec je primeren za čiščenje sedežnih garnitur, avtomobilskih sedežev, preprog, vzmetnic in stolov.",
  },
  {
    id: "7",
    slug: "ciscenje-sedeznih-garnitur",
    title: "Globinsko čiščenje sedežnih garnitur na domu",
    shortDesc: "Pridemo na vaš dom in očistimo sedežno garnituro in drugo oblazinjeno pohištvo.",
    icon: "Sofa",
    description:
      "Naša ekipa pride na vaš naslov in profesionalno očisti sedežno garnituro, vzmetnico in drugo oblazinjeno pohištvo. S pomočjo pare odstranimo bakterije, pršice in neprijetne vonjave.",
    vehicleCategories: [],
    packages: [
      {
        name: "Globinsko čiščenje sedežnih garnitur",
        includes: [
          "Čiščenje s pomočjo pare",
          "Odstranjevanje bakterij in pršic",
          "Čiščenje trdovratnih madeža",
          "Odstranjevanje neprijetnih vonjev",
          "Osušitev pohištva",
        ],
        pricing: [{ category: "all", price: 0 }],
      },
    ],
    additionalInfo: "Cena je dogovorjena glede na obseg dela in tip pohištva. Pokličite za povpraševanje.",
  },
];

export const additionalServices = [
  { name: "Spiranje vozila", price: 7 },
  { name: "Globinsko čiščenje sedeža (1 kos)", price: 10 },
  { name: "Globinsko čiščenje sedežev (5 kosov)", price: 40 },
  { name: "Zaščita usnjenih sedežev", price: 10 },
  { name: "Prevzem vozila na domu (do 5 km iz Ivančne Gorice)", price: 5 },
  { name: "Izposoja nadomestnega vozila", price: 5 },
  { name: "Obnova žarometov + dolgotrajna zaščita (2 kosa)", price: 50, priceNote: "50–60€" },
  { name: "Dezinfekcija z ozonom / dezinfekcija klime", price: 15 },
  { name: "Poliranje vozila", price: 130, priceNote: "130–180€" },
];
