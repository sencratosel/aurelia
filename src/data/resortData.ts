export const RESORT_IMAGES = {
  hero: '/src/assets/images/hero_resort_exterior_1795358737088.jpg',
  suite: '/src/assets/images/suite_presidential_interior_1795358737714.jpg',
  casino: '/src/assets/images/casino_salon_noir_1795358738297.jpg',
  dining: '/src/assets/images/dining_haute_gastronomy_1795358737496.jpg',
  spa: '/src/assets/images/spa_infinity_wellness_1795358737941.jpg',
};

export interface SuiteOption {
  id: string;
  name: string;
  tier: string;
  tagline: string;
  size: string;
  view: string;
  capacity: string;
  floor: string;
  nightlyRate: number;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
}

export const SUITES: SuiteOption[] = [
  {
    id: 'deluxe-grand',
    name: 'Deluxe Grand Room',
    tier: 'Executive Sanctuary',
    tagline: 'Refined coastal haven overlooking the manicured reflection gardens',
    size: '650 sq ft / 60 m²',
    view: 'Private Courtyard & Reflecting Lagoon',
    capacity: '2 Guests',
    floor: 'Floors 8–18',
    nightlyRate: 780,
    image: RESORT_IMAGES.suite,
    description:
      'Designed as a serene sanctuary after an exhilarating evening at the tables. Features custom ivory leather paneling, an Italian Arabescato marble bath with deep soaking tub, and a bespoke velvet daybed overlooking tranquil reflecting waters.',
    features: [
      'Handcrafted king featherbed dressed in 800-thread-count Egyptian cotton',
      'Arabescato marble bath with twin vanities and rainfall shower',
      'Private sunrise terrace with bespoke travertine lounge seating',
      'Curated in-room cocktail credenza and sommelier wine reserve',
    ],
    amenities: [
      '24-Hour In-Suite Dining',
      'Diptyque Paris Bath Collection',
      'Bang & Olufsen Acoustic Suite',
      'Complimentary Valet Arrival',
      'Express Casino Concierge Check-In',
    ],
  },
  {
    id: 'royal-penthouse',
    name: 'Royal Penthouse Suite',
    tier: 'Grand Signature',
    tagline: 'Expansive duplex elevation with panoramic coastal twilight vistas',
    size: '1,550 sq ft / 144 m²',
    view: 'Panoramic Coastal Horizon & Marina',
    capacity: '4 Guests',
    floor: 'Floors 28–34',
    nightlyRate: 1650,
    image: RESORT_IMAGES.suite,
    description:
      'A masterwork of contemporary coastal architecture and timeless European glamour. Features an open-concept living salon, private dining table for six, executive study, and a master retreat anchored by a carved marble fireplace.',
    features: [
      'Wrap-around glass terrace with hearth firepit and heated chaises',
      'Dedicated dining salon with butler pantry and sub-zero wine cellar',
      'Private massage alcove tucked inside the walnut dressing gallery',
      'Direct private elevator access from the VIP Casino Salon',
    ],
    amenities: [
      'Dedicated 24/7 White-Glove Butler',
      'Private Chauffeur Airport Transfer',
      'Priority Seating Across All Venues',
      'Custom Pillow & Linen Menu',
      'Salon Noir Invitation Privileges',
    ],
  },
  {
    id: 'presidential-imperial',
    name: 'Presidential Imperial Suite',
    tier: 'Crown Jewel of Aurelia',
    tagline: 'The pinnacle of private luxury and architectural magnificence',
    size: '3,200 sq ft / 297 m²',
    view: '360° Coastal Bay, Cliffs & Harbor Skyline',
    capacity: '6 Guests',
    floor: 'Crown Floor 38',
    nightlyRate: 3850,
    image: RESORT_IMAGES.suite,
    description:
      'Occupying the highest private tier of the estate. Designed for international tastemakers and discerning patrons, uniting two master pavilions, a grand piano salon, private screening room, and heated rooftop plunge terrace.',
    features: [
      'Private heated rooftop plunge pool and twilight pergola cabana',
      'Handcrafted parlor grand piano and curated acoustic listening room',
      'Private security foyer and dedicated culinary service vestibule',
      'Personal Finnish cedarwood dry sauna and cold-plunge stone shower',
    ],
    amenities: [
      'Dual Private Butlers & Dedicated Chauffeur',
      'In-Suite Private Chef Tasting Experience',
      'Reserved High-Limit Salon Noir Table',
      'Rare Vintage Cognac & Champagne Bar',
      'Unlimited Celestial Spa Thermal Access',
    ],
  },
];

export interface CasinoSalon {
  id: string;
  title: string;
  category: string;
  limits: string;
  attire: string;
  description: string;
  highlights: string[];
}

export const CASINO_SALONS: CasinoSalon[] = [
  {
    id: 'salon-noir',
    title: 'Salon Noir High-Limit',
    category: 'Private Salon',
    limits: '€500 – €50,000 per hand',
    attire: 'Evening Elegant · Jacket Required',
    description:
      'An intimate, sound-attenuated sanctuary beneath contemporary crystal chandeliers and rich dark walnut coffers. Designed for guests who value absolute discretion alongside championship-grade European table play.',
    highlights: [
      'Single-Zero French Roulette and bespoke Punto Banco Baccarat tables',
      'Private velvet-curtained alcoves available for reserved group play',
      'Dedicated sommelier and tableside vintage spirit service',
      'Direct discreet elevator link to Royal and Imperial Penthouses',
    ],
  },
  {
    id: 'grand-promenade',
    title: 'The Grand Promenade Floor',
    category: 'Main Casino',
    limits: '€25 – €5,000 per hand',
    attire: 'Smart Resort Evening',
    description:
      'Sweeping travertine arches frame our flagship gaming hall, pairing classic European blackjack and roulette pits with precision architectural lighting and immaculate clean-air acoustic engineering.',
    highlights: [
      '42 custom emerald-baize live dealer tables staffed by Monte Carlo-trained croupiers',
      'Private VIP electronic gaming alcoves with handcrafted leather seating',
      'Complimentary craft cocktail and espresso service throughout play',
      'Non-smoking dedicated salons with whisper-quiet air filtration',
    ],
  },
  {
    id: 'invitational-poker',
    title: 'Aurelia Invitational Poker Lounge',
    category: 'Tournaments',
    limits: '€5/€10 to €100/€200 No-Limit',
    attire: 'Evening Casual · Member Guestlist',
    description:
      'A dedicated, soundproof poker room hosting high-stakes No-Limit Hold’em, Pot-Limit Omaha cash games, and quarterly European invitational championships.',
    highlights: [
      'RFID-equipped championship tables with custom clay-composite chips',
      'Hand-stitched saddle leather chairs with integrated device charging',
      'On-call tableside shoulder massage and express culinary menu',
      'Dedicated tournament director and private cage vault access',
    ],
  },
];

export interface TastingCourse {
  course: string;
  dish: string;
  description: string;
  pairing: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  cuisine: string;
  chef: string;
  hours: string;
  dressCode: string;
  tagline: string;
  description: string;
  tastingMenu: TastingCourse[];
}

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'laura-gastronomie',
    name: "L'Aura Gastronomie",
    cuisine: 'Contemporary French Haute Cuisine',
    chef: 'Chef Henri de Valmont',
    hours: 'Dinner: 18:00 – 23:30 (Tue – Sun)',
    dressCode: 'Evening Elegant · Jacket Preferred',
    tagline: 'A symphonic celebration of coastal terroir and rare cellar vintages',
    description:
      "Honoring classical French technique with modern Mediterranean lightness. Overlooking the resort's illuminated reflection lagoon, L'Aura curates an award-winning cellar of 3,400 premier cru labels.",
    tastingMenu: [
      {
        course: 'First Course',
        dish: 'Langoustine Rôtie & Royal Osetra Caviar',
        description: 'Brittany langoustine glazed in yuzu butter, crisp green apple carpaccio, champagne emulsion.',
        pairing: 'Dom Pérignon Vintage 2013',
      },
      {
        course: 'Fish Course',
        dish: 'Wild Atlantic Turbot au Feu de Bois',
        description: 'Line-caught turbot roasted over olive wood, braised baby leeks, smoked bone marrow velouté.',
        pairing: 'Puligny-Montrachet 1er Cru 2020',
      },
      {
        course: 'Main Course',
        dish: 'Miyazaki A5 Wagyu & Périgord Truffle',
        description: 'Charcoal-seared striploin, roasted wild morels, sunchoke mousseline, 30-year Madeira jus.',
        pairing: 'Château Margaux Premier Cru 2015',
      },
      {
        course: 'Dessert',
        dish: 'Sphère Cacao & 24K Gold Leaf',
        description: 'Single-origin dark chocolate dome, salted hazelnut praline, smoked Madagascar vanilla gelato.',
        pairing: 'Château d’Yquem Sauternes 2011',
      },
    ],
  },
  {
    id: 'osteria-mare',
    name: 'Osteria del Mare',
    cuisine: 'Coastal Italian & Raw Crudo Bar',
    chef: 'Chef Lorenzo Bellini',
    hours: 'Lunch & Dinner: 12:30 – 23:00 Daily',
    dressCode: 'Refined Resort Attire',
    tagline: 'Line-caught Mediterranean seafood and handmade coastal pasta on travertine terraces',
    description:
      'Set beside the lantern-lit cypress courtyard, Osteria del Mare showcases daily catches from local Mediterranean fishermen, dry-aged coastal steaks, and century-old Tuscan cellar bottles.',
    tastingMenu: [
      {
        course: 'Crudo',
        dish: 'Red Mazara Prawns & Amalfi Bergamot',
        description: 'Chilled Sicilian gamberi rossi, cold-pressed olive oil, sea fennel, pink peppercorn.',
        pairing: 'Franciacorta Satèn Riserva',
      },
      {
        course: 'Primi',
        dish: 'Tagliolini al Tartufo Bianco',
        description: 'Forty-yolk hand-cut pasta, cultured Alpine butter, shaved Alba white truffle.',
        pairing: 'Barbaresco Asili 2018',
      },
      {
        course: 'Secondi',
        dish: 'Branzino in Crosta di Sale',
        description: 'Whole sea bass baked in Trapani sea salt crust, charred lemon, wild oregano oil.',
        pairing: 'Etna Bianco Superiore 2021',
      },
      {
        course: 'Dolci',
        dish: 'Tiramisù Espresso & Bronte Pistachio',
        description: 'Warm tableside mascarpone zabaglione layered with savoiardi and toasted pistachio.',
        pairing: 'Passito di Pantelleria',
      },
    ],
  },
  {
    id: 'velvet-lounge',
    name: 'The Velvet Lounge & Terrace',
    cuisine: 'Rare Spirits, Caviar & Late-Night Bites',
    chef: 'Head Mixologist Clara Moreau',
    hours: 'Evening: 17:00 – 03:00 Daily',
    dressCode: 'Evening Chic',
    tagline: 'Vintage cognacs, live acoustic jazz, and twilight cocktails overlooking the bay',
    description:
      'Anchored by a monolithic backlit onyx bar and open-air stone terrace, The Velvet Lounge serves rare pre-prohibition spirits, bespoke botanical infusions, and late-night artisanal supper plates.',
    tastingMenu: [
      {
        course: 'Aperture',
        dish: 'Imperial Caviar & Warm Brioche Blini',
        description: '30g Royal Osetra caviar served over crushed ice with crème fraîche and chive blossom.',
        pairing: 'Krug Grande Cuvée 171ème Édition',
      },
      {
        course: 'Signature Pour',
        dish: 'The Aurelia Smoked Boulevardier',
        description: 'Small-batch aged bourbon, 1970s reserve vermouth, saffron bitters, cedarwood smoke.',
        pairing: 'Served over hand-carved crystal block',
      },
      {
        course: 'Supper Plate',
        dish: 'Wagyu Katsu Sando & Black Truffle Jus',
        description: 'Milk-bread brioche, crisp A5 tenderloin, aged soy glaze, pickled mustard seed.',
        pairing: 'Hibiki 21 Year Old Japanese Whisky',
      },
      {
        course: 'Digestif',
        dish: 'Artisanal Valrhona & Cognac Truffles',
        description: 'Hand-rolled dark ganache infused with Grande Champagne cognac and sea salt.',
        pairing: 'Hennessy Paradis Imperial',
      },
    ],
  },
];

export interface SpaTreatment {
  id: string;
  title: string;
  duration: string;
  category: string;
  price: number;
  description: string;
  benefits: string;
}

export const SPA_TREATMENTS: SpaTreatment[] = [
  {
    id: 'gold-elixir',
    title: 'The Aurelia 24K Gold Cellular Elixir',
    duration: '110 min',
    category: 'Signature Ritual',
    price: 490,
    description:
      'A restorative full-body polish with fine quartz and botanical oils, followed by a regenerative 24-karat gold leaf facial masque and heated basalt stone alignment.',
    benefits: 'Cellular luminosity, deep muscular release, and restored skin vitality.',
  },
  {
    id: 'thermal-circuit',
    title: 'Celestial Thermal Hydrotherapy Circuit',
    duration: '90 min',
    category: 'Thermal Sanctuary',
    price: 260,
    description:
      'A guided contrast circuit moving between heated saltwater infinity pools, Himalayan salt inhalation chambers, eucalyptus mist caverns, and warm granite loungers.',
    benefits: 'Vascular circulation, lymphatic detoxification, and calm nervous system reset.',
  },
  {
    id: 'magnesium-recovery',
    title: 'Deep Tissue Magnesium Recovery',
    duration: '80 min',
    category: 'Therapeutic Bodywork',
    price: 340,
    description:
      'Targeted neuromuscular therapy utilizing concentrated marine magnesium oil and wild mountain arnica balms to dissolve travel fatigue and deep tension.',
    benefits: 'Accelerated physical recovery, posture alignment, and restorative sleep.',
  },
  {
    id: 'sunset-cabana',
    title: 'Sunset Horizon Cabana Experience',
    duration: '150 min',
    category: 'Private Couples Suite',
    price: 890,
    description:
      'Private after-hours reservation of the heated infinity pool colonnade with synchronized aromatherapy massages, chilled vintage champagne, and seasonal orchard delicacies.',
    benefits: 'Uninterrupted twilight serenity overlooking the open Mediterranean horizon.',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Suites' | 'Casino' | 'Dining' | 'Wellness' | 'Architecture';
  image: string;
  caption: string;
  architecturalNote: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-facade',
    title: 'Aurelia Grand Illuminated Facade',
    category: 'Architecture',
    image: RESORT_IMAGES.hero,
    caption: 'Monolithic travertine arches and champagne brass colonnades mirrored across the twilight lagoon.',
    architecturalNote: 'Main Arrival Court · Mediterranean Coastal Estate',
  },
  {
    id: 'gal-penthouse',
    title: 'Presidential Imperial Living Salon',
    category: 'Suites',
    image: RESORT_IMAGES.suite,
    caption: 'Floor-to-ceiling coastal twilight panoramas framed by Arabescato marble and custom boucle seating.',
    architecturalNote: 'Crown Floor 38 · 3,200 sq ft Duplex',
  },
  {
    id: 'gal-salon-noir',
    title: 'High-Limit Salon Noir',
    category: 'Casino',
    image: RESORT_IMAGES.casino,
    caption: 'Bespoke emerald-baize baccarat and roulette tables beneath contemporary crystal chandeliers.',
    architecturalNote: 'Private Wing · 18+ Invitational Gaming',
  },
  {
    id: 'gal-dining',
    title: "L'Aura Gastronomie Plating",
    category: 'Dining',
    image: RESORT_IMAGES.dining,
    caption: 'Seared Miyazaki A5 Wagyu with shaved Périgord truffle and 24K gold leaf on volcanic stoneware.',
    architecturalNote: 'Chef Henri de Valmont · Tasting Menu',
  },
  {
    id: 'gal-spa',
    title: 'Celestial Thermal Infinity Pool',
    category: 'Wellness',
    image: RESORT_IMAGES.spa,
    caption: 'Heated saltwater infinity waters framed by dark basalt colonnades extending into the dusk horizon.',
    architecturalNote: 'Thermal Wing · 35,000 sq ft Sanctuary',
  },
  {
    id: 'gal-portico',
    title: 'Grand Casino Portico at Dusk',
    category: 'Architecture',
    image: RESORT_IMAGES.hero,
    caption: 'Private limousine arrival court surrounded by manicured Mediterranean cypress and reflection basins.',
    architecturalNote: 'Private Valet & Concierge Entrance',
  },
];

export const RESORT_METRICS = [
  { value: '180', label: 'Suites & Penthouses' },
  { value: '14', label: 'Private Gaming Salons' },
  { value: '3', label: 'Signature Restaurants' },
  { value: '35,000 sq ft', label: 'Thermal Hydrotherapy Spa' },
  { value: '24/7', label: 'White-Glove Butler Service' },
  { value: '5-Star', label: 'Coastal Estate Rating' },
];
