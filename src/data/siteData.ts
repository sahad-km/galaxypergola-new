export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Phosphor icon key name
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline?: string;
  description: string;
  fullDescription?: string;
  overviewTitle?: string;
  overviewDescription?: string;
  features: string[];
  specifications?: Record<string, string>;
  swatches: { name: string; hex: string; ral?: string }[];
  image: string;
  gallery?: string[];
  tags: string[];
  sourceUrl?: string;
  // Extended fields for rich product detail view
  priceRange?: string;
  trustBadges?: string[];
  typeOptions?: string[];
  sizeOptions?: string[];
  colorOptions?: { name: string; hex: string; ral?: string }[];
  contentSections?: {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image?: string;
    highlightBadges?: string[];
  }[];
  optionalAddons?: string[];
  installationSteps?: {
    step: string;
    title: string;
    description: string;
  }[];
  performanceCards?: {
    title: string;
    description: string;
    icon: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const categoryLabels: Record<string, string> = {
  louvre: 'Louvre',
  pergola: 'Pergola',
  canopy: 'Canopy',
  blinds: 'Outdoor Blinds',
  carport: 'Carport',
  shutter: 'Outdoor Shutter',
  sunroom: 'Sunroom',
};

export const activeRegions = [
  "Taranaki Region",
  "Whanganui Region",
];

export function getCategoryLabel(category: string): string {
  if (!category) return '';
  return categoryLabels[category.toLowerCase()] || (category.charAt(0).toUpperCase() + category.slice(1));
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
  icon: string; // Phosphor icon key name
}

export interface PerformanceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  project: string;
}

export interface ContactDetails {
  phone: string;
  mobile: string;
  email: string;
  hours: string;
  regions: string[];
  locations: { name: string; address: string }[];
}

export const statsData: StatItem[] = [
  {
    id: "years",
    value: 10,
    suffix: "+",
    label: "Years of Craftsmanship",
    description: "Designing weather-resistant structures for NZ environments.",
  },
  {
    id: "projects",
    value: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Custom pergolas, canopies, and blinds installed across Taranaki & Whanganui.",
  },
  {
    id: "satisfaction",
    value: 100,
    suffix: "%",
    label: "Kiwi Owned & Operated",
    description: "Engineered locally for local wind zones and climate demands.",
  },
  {
    id: "warranty",
    value: 10,
    suffix: "-Year",
    label: "Structural Warranty",
    description: "Backed by premium marine-grade aluminium and master building standards.",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "pergolas",
    title: "Luxury Pergolas",
    description: "Premium aluminium framing systems designed for open-air flexibility or full structural shelter.",
    icon: "Sun",
    features: ["Motorised louvres", "Integrated LED lighting", "Hidden drainage", "Wind-rated up to 170 km/h"],
  },
  {
    id: "canopies",
    title: "Architectural Canopies",
    description: "Fixed curved or straight poly-carbonate & glass roofing for continuous UV protection.",
    icon: "ShieldCheck",
    features: ["99.9% UV filter", "Hail-proof 2mm sheet", "Heavy-duty alloy posts", "Custom pitch angles"],
  },
  {
    id: "carports",
    title: "Engineered Carports",
    description: "High-clearance arched or straight-roof shelters protecting vehicles from hail and UV damage.",
    icon: "Car",
    features: ["High clearance arches", "Heavy snow capacity", "Rust-free alloy frame", "NZ wind zone certified"],
  },
  {
    id: "blinds",
    title: "Ziptrak® Outdoor Blinds",
    description: "Track-guided zero-gap side channel blind systems for total wind & insect protection.",
    icon: "Sliders",
    features: ["Zero side gap lock", "No zips or ropes", "Sunscreen mesh / PVC", "Manual or motorised"],
  },
  {
    id: "design",
    title: "Custom Design & Build",
    description: "Comprehensive 3D site modeling, wind-zone engineering, and custom dimensions tailored to your architecture.",
    icon: "Compass",
    features: ["3D rendering previews", "Council approval support", "Custom span engineering", "Precision site measures"],
  },
  {
    id: "sunrooms",
    title: "All-Weather Sunrooms",
    description: "Fully enclosed glass & insulated outdoor rooms for 365-day seamless indoor-outdoor living.",
    icon: "House",
    features: ["Double-glazed doors", "Thermal roof panels", "100% weather-sealed", "Integrated lighting & power"],
  },
];

export const productsData: ProductItem[] = [
  {
    id: "deluxe-louvre",
    name: "Deluxe Louvre",
    category: "louvre",
    tagline: "Premium Comfort for Outdoor Living. Remote Control, Motorised Blades. Dual-Tone LED Ambience.",
    description: "Outdoor comfort, made effortless. Remote-controlled, motorised blades with dualtone LED lighting built in.",
    fullDescription: "Outdoor comfort, made effortless. Remote-controlled, motorised blades with dualtone LED lighting built in.",
    overviewTitle: "Deluxe Louvre: Built for Real Outdoor Living",
    overviewDescription: "Open the blades, close them, dim the lights, all from the couch. The Deluxe Louvre gives you a shaded, weatherproof outdoor space that adjusts to the moment, whether that's a sunny lunch or a sudden downpour.",
    priceRange: "$9,450.00 – $25,200.00",
    trustBadges: [
      "10 yr Manufacturer Warranty",
      "2 yr Built Warranty",
      "0% Deposit On Finance",
    ],
    typeOptions: ["Wall Mounted", "Freestanding"],
    sizeOptions: ["3x3m", "3x4m", "4x3m", "4x4m", "5x3m", "5x4m", "6x3m", "6x4m"],
    colorOptions: [
      { name: "Matt Black (RAL9005)", hex: "#1A1A1A", ral: "RAL9005" },
      { name: "Matt Grey (RAL7016)", hex: "#383E42", ral: "RAL7016" },
      { name: "Matt White (RAL9016)", hex: "#F5F5F5", ral: "RAL9016" },
    ],
    features: [
      "Motorised remote control blade operation",
      "Dual-tone warm & cool integrated LED lighting",
      "Hidden internal post drainage system",
      "Marine-grade 6063-T6 powder-coated aluminium",
      "Automated rain sensor technology auto-closes on downpours",
      "High wind-zone rated for NZ coastal conditions (140–170 km/h)",
    ],
    specifications: {
      "Control Options": "Motorised (Remote Control)",
      "Transformer": "Inbuilt transformer",
      "Louvre Motor": "IP67 waterproof",
      "Tuya App": "Yes",
      "Rain Sensor": "Yes",
      "Material": "6063-T6 aluminium alloy",
      "Colour Options": "Black, Grey, White",
      "Customised Colour": "Yes",
      "Weight": "40kg/m²",
      "Wind Rate": "140–170 km/hr",
      "Snow Load": "160–170kg/m² (53–56cm)",
      "Tilt Range": "0–120°",
      "Blade Light": "Warm yellow or Cool White",
      "Gutter Beam Light": "RGB, separate remote system",
      "Louvre Blade": "200/30/2.2mm",
      "Gutter Beam": "202/250/3.8mm",
      "Post": "150/150/3mm",
      "Telescopic Range": "No",
      "Manufacturer Warranty": "10 Years",
      "Built Warranty": "2 Years",
    },
    swatches: [
      { name: "Matt Black (RAL9005)", hex: "#1A1A1A" },
      { name: "Matt Grey (RAL7016)", hex: "#383E42" },
      { name: "Matt White (RAL9016)", hex: "#F5F5F5" },
    ],
    image: "/images/Deluxe-Louvre/gallery-1.webp",
    gallery: [
      "/images/Deluxe-Louvre/gallery-1.webp",
      "/images/Deluxe-Louvre/gallery-2.webp",
      "/images/Deluxe-Louvre/gallery-3.webp",
      "/images/Deluxe-Louvre/gallery-4.webp",
      "/images/Deluxe-Louvre/gallery-5.webp",
      "/images/Deluxe-Louvre/gallery-6.webp",
      "/images/Deluxe-Louvre/gallery-7.webp",
      "/images/Deluxe-Louvre/gallery-8.webp",
      "/images/Deluxe-Louvre/gallery-9.webp",

      "/images/Deluxe-Louvre/image-1.webp",
      "/images/Deluxe-Louvre/image-2.webp",
      "/images/Deluxe-Louvre/image-3.webp",
      "/images/Deluxe-Louvre/image-4.webp",
      "/images/Deluxe-Louvre/image-5.webp",
    ],
    tags: ["Motorised", "Deluxe Series", "Dual-Tone LEDs", "Rain Sensor", "IP67 Waterproof"],
    sourceUrl: "https://bworth.co.nz/product/deluxe-louvre/",
    optionalAddons: [
      "Down Light on Gutter",
      "Post Light",
      "Inside Light",
      "Outside Light",
      "2x Bluetooth Speakers",
      "Sockets",
      "RGB Gutter Beam Light",
      "Rain Sensor",
      "Infrared Heater",
      "Fan",
      "Sliding Glass Door",
      "Window Shutter",
      "Outdoor Blinds",
    ],
    contentSections: [
      {
        id: "intro-overview",
        title: "You're in control of the sky",
        // subtitle: "Remote Control, Motorised Blades & Dual-Tone LED Ambience",
        description: `Turn the blades to whatever setting suits the moment. Four positions cover everything from a sun-soaked breakfast to a downpour.
        Closed keeps you dry when the weather turns. Slight tilt softens harsh morning light without shutting out the view. Fully open gives you clear sky and a proper breeze. Angled past vertical blocks the glare while keeping things bright underneath.
Same roof, four completely different days.`,
        image: "/images/Deluxe-Louvre/1.webp",
      },
      {
        id: "ip67-waterproof",
        title: "A motor that shrugs off the weather",
        description: "Every motor sits tucked inside the beam, out of the weather and out of sight. It carries an IP67 rating, so dust, heavy rain, and the odd splash from the pool won't slow it down. Set it, forget it, and let the Deluxe Louvre take care of the rest.",
        image: "/images/Deluxe-Louvre/2.webp",
      },
      {
        id: "rgb-lighting",
        title: "Lighting that sets the mood",
        description: "Warm light for a relaxed dinner, cool light for a sharper look, or one of seven RGB tones for something a bit more festive. Every setting runs off its own remote, so switching the mood takes one touch, no ladders or wiring required.",
        image: "/images/Deluxe-Louvre/3.webp",
      },
      {
        id: "centre-post-flexibility",
        title: "Put the centre post wherever it works best",
        description: "You don't have to build around a post stuck in the middle of the space. On the freestanding Deluxe Louvre, the centre post can shift to make way for outdoor furniture, a walkway, or a garden bed, all without giving up the structure's strength.",
        image: "/images/Deluxe-Louvre/4.webp",
      },
      {
        id: "side-post-adjustment",
        title: "Room to move on the side posts too",
        description: "Wide patios and pool decks don't always fit a standard footprint. With tripod support, side posts can shift up to a metre for bigger layouts. Without it, you've still got up to 40cm of play, enough to line everything up neatly.",
        image: "/images/Deluxe-Louvre/5.webp",
      },
    ],
    installationSteps: [
      { step: "1", title: "Enquire", description: "Begin your journey with a simple enquiry. Whether you're just exploring ideas or ready to build, our team is here to listen, answer your questions, and guide you through the possibilities. Share your needs and preferences, and we’ll help you take the first step toward transforming your outdoor space." },
      { step: "2", title: "Site Visit", description: "We’ll arrange a convenient time to visit your site and assess the location. This step is crucial for understanding the space, sun angles, wind exposure, and other key factors that influence the design and functionality of your louvre system." },
      { step: "3", title: "Design & Feasibility", description: "Our experts will develop a custom design that suits your home and lifestyle. We’ll evaluate structural requirements, spatial compatibility, and council guidelines (if applicable) to ensure your project is both stylish and achievable." },
      { step: "4", title: "Planning & Costing", description: "With your design finalised, we’ll provide a detailed proposal outlining timelines, materials, and pricing. You’ll receive clear and transparent costing, so you know exactly what to expect—no surprises, just smart planning." },
      { step: "5", title: "The Build", description: "Once approved, our experienced installation team gets to work. We pride ourselves on quality craftsmanship and efficient project management. Every component is installed with precision to deliver a durable, functional, and beautiful result." },
      { step: "6", title: "Project Completion", description: "After final checks and walk-throughs, your louvre system is ready to enjoy. We ensure everything is finished to perfection and leave the site clean and tidy. Your dream outdoor living space is now a reality—built to last and ready for all seasons." },
    ],
    performanceCards: [
      {
        title: "All-Weather Design",
        description: "Rated for 140–170 km/hr wind speeds and heavy snow loads. Engineered for New Zealand's variable climate — high UV, wind, and unexpected downpours. Built tough, built to last decades.",
        icon: "CloudRain"
      },
      {
        title: "Architectural Aesthetics",
        description: "Clean extruded aluminium profiles (6005 grade, powder-coated) and architectural-grade design make our louvre systems as beautiful as any interior feature.",
        icon: "Buildings"
      },
      {
        title: "Custom-Fitted to Measure",
        description: "Every outdoor structure is precision-manufactured to your exact site dimensions. No off-the-shelf compromise — ever. Four installation styles to suit any property.",
        icon: "Ruler"
      },
      {
        title: "Smart Technology",
        description: "Remote and Tuya app control as standard. IP67 waterproof motorisation. Auto-close rain sensors. RGB LED gutter lighting with separate remote. Blade lighting in warm yellow or cool white.",
        icon: "DeviceMobile"
      },
      {
        title: "Integrated Drainage",
        description: "Patented gutter-beam system channels rainwater off the louvres, down through hollow columns and away from your patio. No exposed pipes, no leaks — perfectly dry underneath.",
        icon: "Drop"
      },
      {
        title: "Warranty & Support",
        description: "10-year manufacturer warranty and 2-year built warranty. 0% deposit and interest-free finance plans available. Local service teams and genuine replacement parts nationally.",
        icon: "Headset"
      },
    ],
    faqs: [
      {
        question: "What colour options and customisations are available for the Deluxe Louvre?",
        answer: "Standard finishes include Matt Black (RAL9005), Matt Grey (RAL7016), and Matt White (RAL9016). Custom powder coat finishes matching the full Dulux architectural color range are also available upon request.",
      },
      {
        question: "How weather resistant is the Deluxe Louvre system?",
        answer: "The Deluxe Louvre is engineered specifically for New Zealand weather conditions. It features a wind speed rating of 140–170 km/hr (Extra High NZ Wind Zone) and a snow load capacity of 160–170kg/m² (53–56cm snow depth). When closed, 100% weather-sealed louvres keep your outdoor area completely dry.",
      },
      {
        question: "What lighting and entertainment upgrades can be added?",
        answer: "You can configure dual-tone (warm yellow & cool white) blade LEDs, perimeter RGB gutter beam lights with 7 color modes, integrated Bluetooth speakers, outdoor power sockets, infrared heaters, fans, and Ziptrak drop-down side blinds.",
      },
      {
        question: "Is the Deluxe Louvre compatible with smart home control?",
        answer: "Yes! The Deluxe Louvre system features built-in Tuya Smart app integration, allowing control from your smartphone or tablet, in addition to the RF handheld remote control and automatic rain sensors.",
      },
      {
        question: "How does the internal drainage system function?",
        answer: "Rainwater flowing across closed louvres is captured by an internal perimeter gutter beam. The water is routed through internal downspout channels concealed inside the posts, discharging discreetly at ground level.",
      },
      {
        question: "What installation configurations are supported?",
        answer: "We support Freestanding Single Bay, Freestanding Double Bay, Wall-Mounted Single Bay, Wall-Mounted Double Bay, and custom fascia/soffit integrated structures.",
      },
    ],
  },
  {
    id: "classic-louvre",
    name: "Classic Louvre",
    category: "louvre",
    tagline: "Timeless Outdoor Comfort. Motorised Control with Warm & Cool Blade LEDs. Built for Every Season.",
    description: "Reliable shade and shelter for every season. Motorised operation with warm and cool blade LEDs, built to work hard year after year.",
    fullDescription: "Reliable shade and shelter for every season. Motorised operation with warm and cool blade LEDs, built to work hard year after year.",
    overviewTitle: "Classic Louvre: Everyday Comfort, Built to Last",
    overviewDescription: "Smooth motorised operation and simple remote control mean the Classic Louvre fits into daily life without fuss. Dual-tone blade LEDs bring warmth after dark, all wrapped in a clean look that holds up season after season.",
    trustBadges: [
      "10 yr Manufacturer Warranty",
      "2 yr Built Warranty",
      "0% Deposit On Finance",
    ],
    features: [
      "Motorised remote control blade operation",
      "Integrated warm & cool white blade LEDs",
      "Freestanding or wall-mounted installation options",
      "Heavy-duty 6063-T6 marine-grade aluminium alloy",
      "Architectural powder-coated weather-resistant finish",
      "Integrated gutter-beam drainage system",
    ],
    specifications: {
      "Control Options": "Motorised (Remote Control)",
      "Transformer": "External Transformer",
      "Tuya App": "No",
      "Material": "6063-T6 aluminium alloy",
      "Colour Options": "Black, Grey, White",
      "Customised Colour": "Yes",
      "Tilt Range": "0–120°",
      "Blade Light": "Warm yellow or Cool White",
      "Gutter Beam Light": "No",
      "Louvre Blade": "140/30/1.5mm",
      "Gutter Beam": "150/120/3mm",
      "Post": "120/120/3mm",
      "Telescopic Range": "No",
      "Manufacturer Warranty": "10 Years",
      "Built Warranty": "2 Years",
    },
    swatches: [
      { name: "Matt Black", hex: "#1A1A1A" },
      { name: "Matt Grey", hex: "#383E42" },
      { name: "Matt White", hex: "#F5F5F5" },
    ],
    image: "/images/Classic-Louvre/gallery-1.webp",
    gallery: [
      "/images/Classic-Louvre/gallery-1.webp",
      "/images/Classic-Louvre/gallery-2.webp",
      "/images/Classic-Louvre/gallery-3.webp",
      "/images/Classic-Louvre/gallery-4.webp",
      "/images/Classic-Louvre/gallery-5.webp",
      "/images/Classic-Louvre/gallery-6.webp",

      "/images/Classic-Louvre/image-1.webp",
      "/images/Classic-Louvre/image-2.webp",
      "/images/Classic-Louvre/image-3.webp",
      // "/images/Classic-Louvre/image-4.webp",
      "/images/Classic-Louvre/image-5.webp",
    ],
    tags: ["Classic Series", "Motorised", "Warm/Cool LEDs", "6063-T6 Alloy"],
    sourceUrl: "https://bworth.co.nz/product/classic-louvre/",
    optionalAddons: [
      "Infrared Heater",
      "Sliding Glass Door",
      "Window Shutter",
      "Outdoor Blinds",
    ],
    contentSections: [
      {
        id: "freestanding-installation",
        title: "Freestanding Installation",
        subtitle: "Classic Louvre: freestanding installation",
        description: "Set the Classic Louvre up wherever it works, no wall required. It's a solid pick for lawns, gardens, and poolside decks, standing on its own four legs with the strength to hold its shape. Want fewer posts or a wider span, six-leg and cantilever layouts are also on the table.",
        image: "/images/Classic-Louvre/1.webp",
      },
      {
        id: "wall-mounted-installation",
        title: "Wall Mounted Installation",
        subtitle: "Classic Louvre: wall mounted installation",
        description: "Fix the Classic Louvre straight to your house and it feels like part of the build. One wall and two front posts are all it takes, so patios, decks, and courtyards get shelter and shade without extra structure getting in the way. L-shape and fully recessed options are available too.",
        image: "/images/Classic-Louvre/2.webp",
      },
      {
        id: "integrated-ambient-lighting",
        title: "Integrated Ambient Lighting",
        subtitle: "Classic Louvre: integrated ambient lighting",
        description: "The evening doesn't have to cut your time outside short. LEDs built into the blades give you a warm glow for winding down or a cooler white for something sharper, both switched from the same remote. No extra fittings, just light exactly where you need it.",
        image: "/images/Classic-Louvre/3.webp",
      },
      {
        id: "strong-aluminium-construction",
        title: "Strong Aluminium Construction",
        subtitle: "Classic Louvre: strong aluminium construction",
        description: "Built from high-grade 6063-T6 aluminium, the Classic Louvre is made for New Zealand conditions, from strong coastal winds to the odd cold snap. The frame resists corrosion and the blades are precision-cut, so it keeps its shape and finish for years with barely any upkeep. ",
        image: "/images/Classic-Louvre/4.webp",
      },
      {
        id: "all-season-stability",
        title: "All-Season Stability",
        subtitle: "Classic Louvre: standing strong through every season",
        description: "Wind, rain, or a light dusting of snow, the Classic Louvre is built to take it. A thick aluminium frame, reinforced joints, and a solidly anchored base keep it steady on the ground, so you get a shelter that looks good and holds firm no matter the forecast.",
        image: "/images/Classic-Louvre/5.webp",
      },
    ],
    installationSteps: [
      { step: "1", title: "Enquire", description: "Begin your journey with a simple enquiry. Whether you're just exploring ideas or ready to build, our team is here to listen, answer your questions, and guide you through the possibilities. Share your needs and preferences, and we’ll help you take the first step toward transforming your outdoor space." },
      { step: "2", title: "Site Visit", description: "We’ll arrange a convenient time to visit your site and assess the location. This step is crucial for understanding the space, sun angles, wind exposure, and other key factors that influence the design and functionality of your louvre system." },
      { step: "3", title: "Design & Feasibility", description: "Our experts will develop a custom design that suits your home and lifestyle. We’ll evaluate structural requirements, spatial compatibility, and council guidelines (if applicable) to ensure your project is both stylish and achievable." },
      { step: "4", title: "Planning & Costing", description: "With your design finalised, we’ll provide a detailed proposal outlining timelines, materials, and pricing. You’ll receive clear and transparent costing, so you know exactly what to expect—no surprises, just smart planning." },
      { step: "5", title: "The Build", description: "Once approved, our experienced installation team gets to work. We pride ourselves on quality craftsmanship and efficient project management. Every component is installed with precision to deliver a durable, functional, and beautiful result." },
      { step: "6", title: "Project Completion", description: "After final checks and walk-throughs, your louvre system is ready to enjoy. We ensure everything is finished to perfection and leave the site clean and tidy. Your dream outdoor living space is now a reality—built to last and ready for all seasons." },
    ],
    performanceCards: [
      {
        title: "All-Weather Design",
        description: "Rated for 140–170 km/hr wind speeds and heavy snow loads. Engineered for New Zealand's variable climate — high UV, wind, and unexpected downpours. Built tough, built to last decades.",
        icon: "CloudRain"
      },
      {
        title: "Architectural Aesthetics",
        description: "Clean extruded aluminium profiles (6005 grade, powder-coated) and architectural-grade design make our louvre systems as beautiful as any interior feature.",
        icon: "Buildings"
      },
      {
        title: "Custom-Fitted to Measure",
        description: "Every outdoor structure is precision-manufactured to your exact site dimensions. No off-the-shelf compromise — ever. Four installation styles to suit any property.",
        icon: "Ruler"
      },
      {
        title: "Smart Technology",
        description: "Remote and Tuya app control as standard. IP67 waterproof motorisation. Auto-close rain sensors. RGB LED gutter lighting with separate remote. Blade lighting in warm yellow or cool white.",
        icon: "DeviceMobile"
      },
      {
        title: "Integrated Drainage",
        description: "Patented gutter-beam system channels rainwater off the louvres, down through hollow columns and away from your patio. No exposed pipes, no leaks — perfectly dry underneath.",
        icon: "Drop"
      },
      {
        title: "Warranty & Support",
        description: "10-year manufacturer warranty and 2-year built warranty. 0% deposit and interest-free finance plans available. Local service teams and genuine replacement parts nationally.",
        icon: "Headset"
      },
    ],
    faqs: [
      {
        question: "What maintenance is required for the Classic Louvre?",
        answer: "Maintenance is simple and low. We recommend rinsing the aluminium frame and louvre blades with clean water every few months to remove dust or salt residue. The internal drainage channels should be kept clear of leaves.",
      },
      {
        question: "What is the difference between Freestanding and Wall-Mounted installation?",
        answer: "Freestanding units are completely self-supporting with 4 or more posts, allowing placement anywhere in your yard or poolside. Wall-mounted units attach directly to your house fascia on one side, requiring fewer posts and creating a seamless patio extension.",
      },
      {
        question: "Is lighting included with the Classic Louvre?",
        answer: "Yes, integrated blade LED lighting is included as standard. You can select between warm yellow and cool white illumination, controlled conveniently via the wireless remote.",
      },
      {
        question: "Can I customize the color of my Classic Louvre?",
        answer: "Yes! While standard colors include Matt Black, Matt Grey, and Matt White, custom RAL powder-coated colors can be requested to match your home's exterior palette.",
      },
      {
        question: "Is the Classic Louvre roof retractable?",
        answer: "No, the louvre blades rotate up to 120° for sun and airflow control, but they do not retract or slide open completely. For a fully retractable roof system, explore our specialized canopy range.",
      },
      {
        question: "Does the Classic Louvre support Tuya smart app control?",
        answer: "No, the Classic Louvre operates exclusively via handheld RF remote control. If you require Tuya smart app integration, rain sensors, or RGB gutter lighting, we recommend the Deluxe Louvre.",
      },
    ],
  },
  {
    id: "pergo-vue",
    name: "Pergola",
    category: "pergola",
    tagline: "Panoramic Sky Views with 100% Weather Shield Protection",
    description: "Attach it to the house or stand it on its own, either way it opens up a proper outdoor room.",
    fullDescription: "Attach it to the house or stand it on its own, either way it opens up a proper outdoor room. Pergo Vue is designed for homeowners who want maximum daylight without compromising on weather protection. Utilizing ultra-clear toughened safety glass or high-clarity polycarbonate panels embedded within ultra-slimline architectural aluminium beams, Pergo Vue lets you stargaze or enjoy full natural light year-round while remaining 100% dry and wind-sheltered.",
    overviewTitle: "One Pergola, Two Ways to Fit Your Space",
    overviewDescription: "Attach it to the house or stand it on its own, either way it opens up a proper outdoor room.",
    // typeOptions: ["Glass Roof", "Architectural Polycarbonate"],
    sizeOptions: [
      "3.05m Wide (5 Panels)",
      "3.65m Wide (6 Panels)",
      "4.25m Wide (7 Panels)",
      "5.45m Wide (8 Panels)",
      "6.05m Wide (9 Panels)",
      "6.65m Wide (10 Panels)",
    ],
    features: [
      "Aluminium structure",
      "Stainless steel fasteners",
      "Highest quality materials",
      "99.9% UV protection",
      "Hail damage protection",
      "Kitset",
      "High wind area protection",
      "Quality Dulux powder coated finish",
    ],
    specifications: {
      "Roof Type": "Architectural Clear Glass / Polycarbonate Roof",
      "Frame Material": "Powder-Coated Structural Aluminium",
      "UV Block": "99% Harmful UV Protection",
      "Drainage": "Concealed High-Flow Guttering",
      "Warranty": "10-Year Structural Warranty",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Sandstone", hex: "#C8BCA6" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/Pergola/gallery-1.webp",
    gallery: [
      "/images/Pergola/gallery-1.webp",
      "/images/Pergola/gallery-2.webp",
      "/images/Pergola/gallery-3.webp",
      "/images/Pergola/gallery-4.webp",
      "/images/Pergola/gallery-5.webp",
      "/images/Pergola/gallery-6.webp",
      "/images/Pergola/gallery-7.webp",
      "/images/Pergola/gallery-8.webp",
      "/images/Pergola/gallery-9.webp",
      "/images/Pergola/gallery-10.webp",

      "/images/Pergola/image-1.jpg",
      "/images/Pergola/image-2.jpg",
      "/images/Pergola/image-3.jpg",
      "/images/Pergola/image-4.jpg",
      "/images/Pergola/image-5.jpg",
      "/images/Pergola/image-6.jpg",
      "/images/Pergola/image-7.jpg",
    ],
    tags: ["Pergola", "Panoramic Sky", "High Light", "Glass Roof"],
    sourceUrl: "https://pergolanz.co.nz/pergo-vue/",
    contentSections: [
      {
        id: "sun-and-wind-protection",
        title: "Sun & Wind Protection",
        subtitle: "99.9% UV & High Wind Protection",
        description: "Every wall or freestanding pergola blocks 99.9% of NZ's UV. Stainless steel bolts hold it firm against strong wind and hail, so it keeps standing when the weather turns.",
        image: "/images/Pergola/gallery-1.webp",
      },
      {
        id: "outdoor-space-that-fits-you",
        title: "An Outdoor Space That Fits You",
        subtitle: "Wall-Mounted or Freestanding Layouts",
        description: "Wall mounted or freestanding, the Pergo Vue adapts to your section. Got a spa or a spot away from the house you want covered, we can design a freestanding layout to suit it.",
        image: "/images/Pergola/gallery-2.webp",
      },
      {
        id: "built-to-last-backed-for-10-years",
        title: "Built to Last, Backed for 10 Years",
        subtitle: "10-Year Warranty & Low Maintenance",
        description: "Aluminium frames, stainless steel bolts, and quality canopies mean next to no upkeep. Every frame and canopy comes with a 10 year warranty, so you're covered for the long run.",
        image: "/images/Pergola/gallery-3.webp",
      },
    ],
  },
  {
    id: "canopy",
    name: "Canopy",
    category: "canopy",
    tagline: "Architectural Patio, Entry & Window Canopy Systems. 3 Custom Styles Available.",
    description: "Three canopy styles, one purpose: turning an exposed patio, doorway, or window into weatherproof space you actually get to use. Straight, curved, or fitted snug over a window, there's a shape to suit the way your home sits.",
    fullDescription: "Our architectural canopy range offers precision weather protection across patios, entry doors, and windows. Constructed with marine-grade powder-coated aluminium frames and heavy-duty 2mm solid polycarbonate sheet roofing, our canopy systems block 99.9% of harmful UV rays while protecting against heavy rain and hail. Choose from three custom engineered styles: Straight Canopy (optimized 7-degree slope for rapid water shedding), Curved Canopy (curved water & sun deflection end return for maximum clearance), and Window/Door Canopy (protective architectural awning joinery shield).",
    priceRange: "$3,200.00 – $12,800.00",
    overviewTitle: "The Canopy Range",
    overviewDescription: "Three canopy styles, one purpose: turning an exposed patio, doorway, or window into weatherproof space you actually get to use. Straight, curved, or fitted snug over a window, there's a shape to suit the way your home sits.",
    trustBadges: [
      "10 yr Sheet Warranty",
      "5 yr Frame Warranty",
      "2 yr Built Warranty",
    ],
    typeOptions: ["Straight Canopy", "Curved Canopy", "Window Canopy"],
    // sizeOptions: ["3x3m", "3x4m", "4x3m", "4x4m", "5x3m", "6x3m"],
    // colorOptions: [
    //   { name: "Matte Charcoal", hex: "#2D2E30" },
    //   { name: "Arctic White", hex: "#F3F4F6" },
    //   { name: "Matt Grey", hex: "#383E42" },
    // ],
    features: [
      "3 custom styles: Straight Canopy, Curved Canopy, and Window Canopy",
      "99.9% UV protection blocks solar heat buildup",
      "2mm impact-resistant solid polycarbonate roofing",
      "Micro powder-coated corrosion-resistant aluminium frame",
      "Supports Ziptrak & EasyChannel drop-down side blinds",
      "High wind-zone rated for New Zealand conditions",
    ],
    specifications: {
      "Available Styles": "Straight Canopy (7° pitch), Curved Canopy, Window Canopy",
      "Sheet Material": "2mm Solid Polycarbonate",
      "UV Protection": "99.9% Solar UV Barrier",
      "Frame Material": "Powder-Coated Marine-Grade Aluminium",
      "Mounting Options": "Wall-Mounted or Freestanding",
      "Warranty": "10-Year Polycarbonate / 5-Year Frame / 2-Year Built",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/Canopy/gallery-1.webp",
    gallery: [
      "/images/Canopy/gallery-1.webp",
      "/images/Canopy/gallery-2.webp",
      "/images/Canopy/gallery-3.webp",
      "/images/Canopy/gallery-4.webp",
      "/images/Canopy/gallery-5.webp",
      "/images/Canopy/gallery-6.webp",
    ],
    tags: ["Architectural Canopy", "3 Styles Available", "99.9% UV Block", "Hail Rated"],
    contentSections: [
      {
        id: "straight-canopy-style",
        title: "Straight Canopy",
        // subtitle: "Sleek 7-Degree Sloped Patio Canopy",
        description: "The Straight Canopy is a clean, modern way to stretch your outdoor space further. It suits a patio, backyard, front entry, or balcony equally well, sitting at a gentle 7 degree pitch that sheds water without looking bulky. Run it out over the pool or the barbecue area, or close it in with outdoor blinds and turn the patio into a proper sunroom. Frames get a micro powder coat finish in a range of colours to match your home, and the roofing is 2mm polycarbonate sheet with 99% UV protection built in.",
        image: "/images/Canopy/straight-canopy.webp",
      },
      {
        id: "curved-canopy-style",
        title: "Curved Canopy",
        // subtitle: "Elegant Water-Blocking Curved Roof System",
        description: "The Curved Canopy is one of our most popular styles, and it's easy to see why. That sweeping curve isn't just good looks, it does a real job of keeping wind-driven rain and low sun out while giving the whole structure a finished, designer feel. Mounted against the wall of the house with a curved run-off at the front edge, it lets you use the space underneath in pretty much any weather. Frames are micro powder coated in a choice of colours, and the roof is 2mm polycarbonate sheet built for years of outdoor use.",
        image: "/images/Canopy/curved-canopy.webp",
      },
      {
        id: "window-canopy-style",
        title: "Window Canopy",
        // subtitle: "Protective Door & Window Architectural Awning",
        description: "Built from durable polycarbonate sheet and an aluminium alloy frame, the Window Canopy is a simple, functional fit above any door or window. It's got a modern, understated look that sits nicely against most home exteriors, while doing the practical job of keeping sun, rain, and hail off your doors and windows. Choose a curved end or a straight one, whichever suits the house, and pick from a range of colours to match. Roofing is 2mm polycarbonate sheet with 99.9% UV protection.",
        image: "/images/Canopy/window-canopy.webp",
      },
    ],
  },
  {
    id: "ziptrak-blinds",
    name: "Ziptrak Outdoor Blind",
    category: "blinds",
    tagline: "Patented Track-Guided Zero-Gap Weather & Wind Enclosure System",
    description: "At NZ Louvres we're proud to stock the Ziptrak® outdoor blind range, a straightforward way to close in your outdoor space when the weather turns. This track-guided system pairs naturally with an open roof louvre, so courtyards, patios, decks, cafés, and verandas get proper wind and rain protection without losing their good looks. Each blind runs on a spline down both edges, sliding into purpose-built side channels that keep it taut between the pillars. That's what stops it flapping about and keeps the weather out, whatever the season. Beyond the practical side, Ziptrak® blinds add real style to an outdoor area. Pair them with your NZ Louvres roof system and you've got an outdoor room that works in nearly any conditions.",
    fullDescription: "At NZ Louvres we're proud to stock the Ziptrak® outdoor blind range, a straightforward way to close in your outdoor space when the weather turns. This track-guided system pairs naturally with an open roof louvre, so courtyards, patios, decks, cafés, and verandas get proper wind and rain protection without losing their good looks. Each blind runs on a spline down both edges, sliding into purpose-built side channels that keep it taut between the pillars. That's what stops it flapping about and keeps the weather out, whatever the season. Beyond the practical side, Ziptrak® blinds add real style to an outdoor area. Pair them with your NZ Louvres roof system and you've got an outdoor room that works in nearly any conditions.",
    features: [
      "Clean, modern, hard-wearing design",
      "Runs on a track, so there are no gaps",
      "Manual or motorised operation",
      "Made to measure up to 6.0m wide",
      "Locks firmly in place once set",
      "Aluminium parts, powder coated in any colour",
      "Quiet, smooth, quick to open or close",
      "Pairs neatly with a louvre roof",
      "Fits neatly against a louvre wall panel",
      " Choice of mesh fabric or PVC"
    ],
    specifications: {
      "Mechanism": "Track-Guided Spline Channel System",
      "Fabric Options": "Clear Marine PVC or Premium Sunscreen Mesh (90%-99%)",
      "Wind Rating": "Tested to withstand high coastal gusts",
      "Operation": "Manual Spring-Balanced Push-Pull or Motorised",
      "Warranty": "5-Year System & Fabric Warranty",
    },
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Stone Mesh", hex: "#8C8C8C" },
      { name: "Clear PVC", hex: "#FFFFFF" },
    ],
    image: "/images/Ziptrack-Blinds/gallery-2.webp",
    gallery: [
      "/images/Ziptrack-Blinds/gallery-1.webp",
      "/images/Ziptrack-Blinds/gallery-2.webp",
      "/images/Ziptrack-Blinds/gallery-3.webp",
      "/images/Ziptrack-Blinds/gallery-4.webp",
      "/images/Ziptrack-Blinds/gallery-5.webp",
      "/images/Ziptrack-Blinds/gallery-6.webp",
      "/images/Ziptrack-Blinds/gallery-7.webp",
      "/images/Ziptrack-Blinds/gallery-8.webp",
      "/images/Ziptrack-Blinds/gallery-9.webp",
      "/images/Ziptrack-Blinds/gallery-10.webp",
      "/images/Ziptrack-Blinds/gallery-11.webp",
    ],
    tags: ["Ziptrak System", "Zero Gap", "Wind Resistant", "Marine Grade"],
    sourceUrl: "https://www.nzlouvres.co.nz/our-products/ziptrak-premium-weatherproof-outdoor-blinds/",
  },
  {
    id: "easychannel-blinds",
    name: "EasyChannel Outdoor Blind",
    category: "blinds",
    tagline: "Canopy-Tech Precision Crank-Operated Side Channel Blind",
    description: "Meet the EasyChannel Outdoor Blind: a straightforward, good-looking way to get crank-operated shade and shelter without any fuss. This crank-operated blind was designed with ease of use front of mind, so setting the right amount of shade or shelter takes barely a moment, whatever the occasion. A weighted bottom bar and heavy-duty quick pins keep it stable in a stiff breeze or changeable weather. Once tensioned, it sits sleek and taut, adding a tidy finish to the space. Whether you're after shade on a hot day or a bit of privacy in the backyard, the EasyChannel blind is built to deliver both, comfortably and in style.",
    fullDescription: "Meet the EasyChannel Outdoor Blind: a straightforward, good-looking way to get crank-operated shade and shelter without any fuss. This crank-operated blind was designed with ease of use front of mind, so setting the right amount of shade or shelter takes barely a moment, whatever the occasion. A weighted bottom bar and heavy-duty quick pins keep it stable in a stiff breeze or changeable weather. Once tensioned, it sits sleek and taut, adding a tidy finish to the space. Whether you're after shade on a hot day or a bit of privacy in the backyard, the EasyChannel blind is built to deliver both, comfortably and in style.",
    overviewTitle: "Scope of Use",
    overviewDescription: "EasyChannel blinds are a popular pick for good reason: they cover privacy, sun protection, weather resistance, light and shade control, and a tidy finish, all in one product.",
    features: [
      "Versatile & customisable: Tailored to your space",
      "Privacy & security: Genuine privacy and added security",
      "Weather & sun resistance: Handles wind, rain, and dust",
      "Crank-operated: Smooth gear-driven handle mechanism",
      "NZ Made: Custom manufactured in New Zealand"
    ],
    specifications: {
      "Manufacturer": "Canopy Tech New Zealand",
      "Operation": "Detachable Crank Handle Gearbox",
      "Locking": "Quick-Release Heavy Bottom Bar Pins",
      "Material": "Architectural Sunscreen Mesh / PVC",
      "Warranty": "5-Year Manufacturer Warranty",
    },
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Stone Mesh", hex: "#8C8C8C" },
    ],
    image: "/images/EasyChannel-Blinds/gallery-2.webp",
    gallery: [
      "/images/EasyChannel-Blinds/gallery-1.webp",
      "/images/EasyChannel-Blinds/gallery-2.webp",
      "/images/EasyChannel-Blinds/gallery-3.webp",
      "/images/EasyChannel-Blinds/gallery-4.webp",
    ],
    tags: ["EasyChannel", "Canopy-Tech", "Crank Operated", "NZ Made"],
    sourceUrl: "https://archipro.co.nz/product/easychannel-outdoor-blind-canopy-tech",
    contentSections: [
      {
        id: "versatile-and-customisable",
        title: "Versatile & Customisable",
        subtitle: "Tailored Custom Fit",
        description: "Made to fit different sizes and shapes of outdoor area, so you get a solution tailored to your space rather than a generic fit.",
        image: "/images/EasyChannel-Blinds/gallery-1.webp",
      },
      {
        id: "privacy-and-security",
        title: "Privacy & Security",
        subtitle: "Peace of Mind Outdoors",
        description: "Offers genuine privacy for your outdoor space while adding a layer of security, so you can relax without worrying about prying eyes.",
        image: "/images/EasyChannel-Blinds/gallery-2.webp",
      },
      {
        id: "weather-and-sun-resistance",
        title: "Weather & Sun Resistance",
        subtitle: "All-Season Protection",
        description: "Built to handle wind, rain, and dust without losing its shape, giving your outdoor area lasting protection through the seasons.",
        image: "/images/EasyChannel-Blinds/gallery-3.webp",
      },
    ],
  },
  {
    id: "easytrack-blinds",
    name: "EasyTrack Outdoor Blind",
    category: "blinds",
    tagline: "Effortless Glide Friction-Fit Outdoor Shade System",
    description: "The EasyTrack Outdoor Blind turns an exposed deck or patio into a space you can actually use all year, whatever the forecast. Designed and made right here in New Zealand, EasyTrack blinds are built to stand up to our conditions while adding a tidy, finished look to the outside of your home. A simple pull-down mechanism lets you stop the blind at whatever height suits, or run it all the way down and lock it for extra security. Turning your patio into a proper outdoor room has never been this straightforward.",
    fullDescription: "The EasyTrack Outdoor Blind turns an exposed deck or patio into a space you can actually use all year, whatever the forecast. Designed and made right here in New Zealand, EasyTrack blinds are built to stand up to our conditions while adding a tidy, finished look to the outside of your home. A simple pull-down mechanism lets you stop the blind at whatever height suits, or run it all the way down and lock it for extra security. Turning your patio into a proper outdoor room has never been this straightforward.",
    overviewTitle: "Scope of Use",
    overviewDescription: "EasyTrack blinds get chosen again and again for how much they cover off: privacy, shade, weather protection, light control, and a finished look, all from one product.",
    features: [
      "Made to fit: Every blind is sized to the space",
      "Privacy & security: Built-in solid locking system",
      "Handles the weather: Takes on wind, rain, and dust",
      "Motorise it: Optional remote control operation",
      "NZ Made: Built for New Zealand weather conditions"
    ],
    specifications: {
      "Manufacturer": "Canopy Tech New Zealand",
      "Operation": "Manual Push-Pull Friction Fit or Motorised",
      "Tracks": "Powder-Coated Extruded Aluminium",
      "Fabric": "High UV Blocking Sunscreen Mesh / Clear PVC",
      "Warranty": "5-Year Manufacturer Warranty",
    },
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Cream Sunscreen", hex: "#E6E6D8" },
    ],
    image: "/images/EasyTrack-Blinds/gallery-1.webp",
    gallery: [
      "/images/EasyTrack-Blinds/gallery-1.webp",
      "/images/EasyTrack-Blinds/gallery-2.webp",
      "/images/EasyTrack-Blinds/gallery-3.webp",
      "/images/EasyTrack-Blinds/gallery-4.webp",
    ],
    tags: ["EasyTrack", "Smooth Gliding", "Friction Fit", "Motorised Option"],
    sourceUrl: "https://archipro.co.nz/product/easychannel-canopy-tech",
    contentSections: [
      {
        id: "made-to-fit",
        title: "Made to Fit",
        subtitle: "Custom Sizing & Fabric Options",
        description: "Every blind is sized to the space, not the other way around. Choose from a range of mesh screens or clear PVC to get exactly the look and level of protection you're after.",
        image: "/images/EasyTrack-Blinds/gallery-1.webp",
      },
      {
        id: "privacy-and-security",
        title: "Privacy & Security",
        subtitle: "Built-In Solid Locking System",
        description: "A closed EasyTrack blind keeps prying eyes out and, with a solid locking system built in, adds a genuine layer of security to the space behind it.",
        image: "/images/EasyTrack-Blinds/gallery-2.webp",
      },
      {
        id: "handles-the-weather",
        title: "Handles the Weather",
        subtitle: "All-Season Weather Protection",
        description: "Built to take on wind, rain, and dust without losing its shape or its looks, season after season.",
        image: "/images/EasyTrack-Blinds/gallery-3.webp",
      },
      {
        id: "motorise-it",
        title: "Motorise It",
        subtitle: "Remote Control Option",
        description: "Add a motor and control the blind by remote, ideal for hard to reach residential spots or busy commercial settings.",
        image: "/images/EasyTrack-Blinds/gallery-4.webp",
      },
    ],
  },
  {
    id: "carport",
    name: "Carport",
    category: "carport",
    tagline: "Modern Vehicle Protection. 2 Custom Styles Available.",
    description: "Solid, good-looking cover for your vehicles. Built to handle the weather while adding real everyday convenience.",
    fullDescription: "Solid, good-looking cover for your vehicles. Built to handle the weather while adding real everyday convenience.",
    overviewTitle: "Carport: Your Key to Perfect Outdoor Living",
    overviewDescription: "A carport that shields your vehicles while lifting the look of your home. Built from durable materials with a sharp architectural finish, it's a smart outdoor investment made to perform for years.",
    trustBadges: [
      "10 yr Sheet Warranty",
      "5 yr Frame Warranty",
      "2 yr Built Warranty",
    ],
    typeOptions: ["Arch Carport", "Straight Carport"],
    // sizeOptions: ["Single Carport (3x5m)", "Double Carport (6x5m)", "Custom Vehicle Size"],
    // colorOptions: [
    //   { name: "Matte Charcoal", hex: "#2D2E30" },
    //   { name: "Arctic White", hex: "#F3F4F6" },
    //   { name: "Light Grey Tint", hex: "#7D848C" },
    // ],
    features: [
      "2 custom styles: Arch Carport and Straight Carport",
      "2mm solid polycarbonate roof sheets block 99.9% UV rays & hail",
      "High-tensile 6063-T6 marine-grade powder-coated aluminium frame",
      "Engineered for NZ wind zones up to 120 km/hr",
      "Concealed internal guttering and downpipe drainage system",
    ],
    specifications: {
      "Available Styles": "Arch Carport (Curved), Straight Carport (Sloped Pitch)",
      "Roof Sheet": "2mm Solid Polycarbonate (6 Tint Options)",
      "Frame Material": "6063-T6 Marine-Grade Aluminium Alloy",
      "UV Blocking": "99.9% Solar Heat & UV Barrier",
      "Wind Rating": "NZ Wind Zone Tested (Up to 120 km/h)",
      "Warranty": "10-Yr Sheet / 5-Yr Frame / 2-Yr Workmanship",
    },
    swatches: [
      { name: "Light Grey Tint", hex: "#7D848C" },
      { name: "Dark Grey Tint", hex: "#3A3D42" },
      { name: "Light Brown Tint", hex: "#7E6B5A" },
    ],
    image: "/images/Carports/gallery-3.webp",
    gallery: [
      "/images/Carports/gallery-2.webp",
      "/images/Carports/gallery-1.webp",
      "/images/Carports/gallery-3.webp",
      "/images/Carports/gallery-4.webp",

      // "/images/Carports/image-1.webp",
      "/images/Carports/image-2.webp",
      "/images/Carports/image-3.webp",
    ],
    tags: ["Carport System", "2 Styles Available", "99.9% UV Block", "120 km/h Wind Rated"],
    contentSections: [
      {
        id: "arch-carport-style",
        title: "Pick a Panel Colour That Suits Your Home",
        subtitle: "A Shade to Suit Every Home, Built to Last",
        description: "Choose from six roofing colours to match your home and control how much light and heat comes through. Neutrals cut glare, while lighter tones let more natural light in. Every panel is UV-stable and built for years of daily use.",
        image: "/images/Carports/1.webp",
      },
      {
        id: "straight-carport-style",
        title: "Three Shapes to Match Your Property",
        subtitle: "Tough Weather Protection, Virtually No Upkeep",
        description: "Straight, Arch, or Cantilever, our carports come in three builds so you can pick what suits your layout. Straight gives a clean, linear line along the driveway, Arch curves the roof for better runoff, and Cantilever frees up one whole side for easy parking access.",
        image: "/images/Carports/2.webp",
      },
      {
        id: "arch-carport-style-2",
        title: "Arch Carport",
        // subtitle: "A Shade to Suit Every Home, Built to Last",
        description: "The Arch Carport brings a smooth, curved profile that makes the most of the space underneath. It's a strong fit for backyards, entryways, or a dedicated parking spot, and the layout can be adjusted to suit your property. Frames come micro powder coated in five standard colours, with 2mm polycarbonate roofing that stands up to sun, rain, and hail, and is built for New Zealand's wind conditions.",
        image: "/images/Carports/arch-carport.webp",
      },
      {
        id: "straight-carport-style-2",
        title: "Straight Carport",
        // subtitle: "Tough Weather Protection, Virtually No Upkeep",
        description: "The Straight Carport keeps things clean and simple with a straightforward roofline that suits most homes. It works well for a front-of-house extension, backyard cover, or a dedicated car space, and the design flexes to your requirements. Frames are micro powder coated in five standard colours, and the 2mm polycarbonate roofing protects against sun, rain, and hail while handling New Zealand's varying wind speeds.",
        image: "/images/Carports/straight-carport.webp",
      },
    ],
    installationSteps: [
      { step: "1", title: "Enquire", description: "Begin your journey with a simple enquiry. Share your vehicle shelter requirements and site details with our local team." },
      { step: "2", title: "Site Visit", description: "We'll arrange a convenient time to visit your site and assess the location, measuring driveway dimensions, ground surface, and wind exposure." },
      { step: "3", title: "Design & Feasibility", description: "Our experts develop a custom carport design that suits your property layout, structural requirements, and vehicle clearance needs." },
      { step: "4", title: "Planning & Costing", description: "Receive a transparent proposal outlining timelines, materials, and pricing with clear zero-surprise project costing." },
      { step: "5", title: "The Build", description: "Our experienced installation team erects the structural aluminium posts, frames, and precision-fitted polycarbonate roof sheets." },
      { step: "6", title: "Project Completion", description: "After final quality checks and site cleanup, your carport is ready to deliver year-round vehicle protection." },
    ],
    performanceCards: [
      {
        title: "All-Weather Protection",
        description: "Rated for 120 km/hr NZ wind speeds and heavy downpours. Keeps vehicles dry, cool, and shielded from environmental damage.",
        icon: "CloudRain",
      },
      {
        title: "Architectural Aesthetics",
        description: "Clean extruded aluminium profiles (A6063 grade, powder-coated) and sleek minimalist straight rooflines complement modern home architecture.",
        icon: "Buildings",
      },
      {
        title: "Custom-Fitted to Measure",
        description: "Every carport is custom manufactured to your exact driveway dimensions and height clearance requirements. No compromises.",
        icon: "Ruler",
      },
      {
        title: "99.9% UV & Hail Barrier",
        description: "2mm solid impact-resistant polycarbonate roof sheets filter out 99.9% of harmful solar UV radiation while deflecting heavy hail.",
        icon: "Sun",
      },
      {
        title: "Integrated Drainage",
        description: "Concealed perimeter guttering channels rainwater off the canopy and down through posts, preventing driveway flooding.",
        icon: "Drop",
      },
      {
        title: "3-Tier Warranty & Support",
        description: "10-year polycarbonate sheet warranty, 5-year structural frame warranty, and 2-year built/workmanship warranty. Interest-free finance available.",
        icon: "Headset",
      },
    ],
    faqs: [
      {
        question: "Do you offer free onsite measurement and quotes?",
        answer: "Yes! We arrange free onsite consultations and measures across active service regions to assess your driveway layout, sun exposure, and structural mounting requirements.",
      },
      {
        question: "What wind speeds are the carports rated for?",
        answer: "Our carport range is engineered and tested for New Zealand wind conditions up to 120 km/hr.",
      },
      {
        question: "What warranty is provided with the carport?",
        answer: "We offer a comprehensive 3-tier warranty: 10-year warranty on polycarbonate roof sheets, 5-year warranty on the structural aluminium frame, and 2-year built/workmanship warranty.",
      },
      {
        question: "What roof sheet material is used?",
        answer: "We use 2mm high-impact solid polycarbonate sheets with 99.9% UV filtration that blocks solar heat and prevents vehicle paintwork breakdown.",
      },
      {
        question: "What material is used for the frame structure?",
        answer: "Frames are constructed from high-tensile 6063-T6 marine-grade aluminium alloy with architectural powder-coating to ensure long-lasting, rust-free durability.",
      },
    ],
  },
  {
    id: "outdoor-shutter",
    name: "Outdoor Shutter",
    category: "shutter",
    tagline: "Privacy, Protection, and Style Combined. Create a more comfortable outdoor environment.",
    description: "Privacy, weather protection, and a sharp architectural finish, all in one. Shape the light, airflow, and outlook of your outdoor space to suit you.",
    fullDescription: "Privacy, weather protection, and a sharp architectural finish, all in one. Shape the light, airflow, and outlook of your outdoor space to suit you.",
    overviewTitle: "Outdoor Shutter: Your Key to Perfect Outdoor Living",
    overviewDescription: "Bring privacy, weather protection, and a polished finish to your outdoor space. Built to give you control over light and airflow throughout the day, our shutters add a premium touch to any outdoor area.",
    trustBadges: [
      "10 yr Manufacturer Warranty",
      "2 yr Built Warranty",
      "0% Deposit On Finance",
    ],
    features: [
      "Operable louvre blades with smooth manual control",
      "Marine-grade powder-coated T6 aluminium construction",
      "Wind-lock safety latches for high wind resilience",
      "Provides privacy, shade, and rain deflection",
      "Available in sliding, bifold, swing, or fixed panel configurations",
    ],
    specifications: {
      "Blade Type": "Operable or Fixed Aluminium Louvre",
      "Configurations": "Sliding, Bifold, Swing, or Fixed",
      "Frame Finish": "Marine-Grade Powder Coat",
      "Wind Rating": "High Wind Resistance with Safety Locks",
      "Warranty": "10-Year Manufacturer Warranty",
    },
    swatches: [
      { name: "Matt White (RAL9016)", hex: "#F5F5F5", ral: "RAL9016" },
      { name: "Matt Grey (RAL7016)", hex: "#383E42", ral: "RAL7016" },
      { name: "Matt Black (RAL9005)", hex: "#1A1A1A", ral: "RAL9005" },
      { name: "Teak Woodgrain", hex: "#7E5233" },
    ],
    image: "/images/Outdoor-Shutter/gallery-1.webp",
    gallery: [
      "/images/Outdoor-Shutter/gallery-1.webp",
      "/images/Outdoor-Shutter/gallery-2.webp",
      "/images/Outdoor-Shutter/gallery-3.webp",
      "/images/Outdoor-Shutter/gallery-4.webp",
      "/images/Outdoor-Shutter/gallery-5.webp",
    ],
    tags: ["Outdoor Shutter", "Privacy Control", "Wind Barrier", "Bifold/Sliding"],
    sourceUrl: "https://bworth.co.nz/product/outdoor-shutter/",
    contentSections: [
      {
        id: "color-options",
        title: "Four Finishes to Suit Any Home",
        subtitle: "Built to Standard. Precision-Framed. Weather-Sealed.",
        description: "Every shutter is made from durable, weather-resistant slats and finished in one of four premium powder-coated options: Matt White, Matt Grey, Matt Black, or the warmer look of Teak Woodgrain. Whichever you choose, you get long-lasting colour that won't fade or chip, keeping your outdoor area looking sharp for years.",
        image: "/images/Outdoor-Shutter/1.webp",
      },
      {
        id: "installation-formats",
        title: "A Mounting Style for Every Opening",
        subtitle: "Four Ways to Open. One Smooth Operation Every Time.",
        description: "Whatever the window or door, there's a shutter to fit. Fixed shutters give permanent screening and constant shade, while sliding shutters glide open with ease. Bi-fold shutters tuck neatly away to open up wide spaces, and swing shutters bring a timeless, classic look. Each style gives you real control over light, wind, and privacy.",
        image: "/images/Outdoor-Shutter/2.webp",
      },
    ],
    installationSteps: [
      { step: "1", title: "Enquire", description: "Begin your journey with a simple enquiry. Share your privacy and shading requirements with our local team." },
      { step: "2", title: "Site Visit", description: "We'll arrange a convenient time to visit your site and assess the location, measuring patio, balcony, or deck dimensions and wind exposure." },
      { step: "3", title: "Design & Feasibility", description: "Our experts develop a custom shutter design that suits your property aesthetics, mounting points, and panel opening format." },
      { step: "4", title: "Planning & Costing", description: "Receive a transparent proposal outlining timelines, materials, and pricing with clear zero-surprise project costing." },
      { step: "5", title: "The Build", description: "Our experienced installation team mounts the structural tracks, hinges, and precision aluminium shutter panels." },
      { step: "6", title: "Project Completion", description: "After final quality checks and site cleanup, your outdoor shutter system is ready to provide privacy and protection." },
    ],
    performanceCards: [
      {
        title: "All-Weather Design",
        description: "Engineered for New Zealand's variable climate — high UV, coastal wind, and rain. Built tough to last decades.",
        icon: "CloudRain",
      },
      {
        title: "Architectural Aesthetics",
        description: "Clean extruded aluminium profiles and architectural powder coating make our shutter systems a sleek extension of your home.",
        icon: "Buildings",
      },
      {
        title: "Custom-Fitted to Measure",
        description: "Every outdoor shutter panel is precision-manufactured to your exact site dimensions. 4 installation styles available.",
        icon: "Ruler",
      },
      {
        title: "Privacy & Wind Barrier",
        description: "Operable louvre blades and safety wind-locks block unwanted breezes and curious eyes while maintaining gentle airflow.",
        icon: "ShieldCheck",
      },
      {
        title: "Low Maintenance",
        description: "Corrosion-resistant marine-grade aluminium alloy with powder coating requires no repainting, staining, or ongoing rust prevention.",
        icon: "Drop",
      },
      {
        title: "Warranty & Support",
        description: "10-year manufacturer warranty and 2-year built warranty. 0% deposit and interest-free finance plans available.",
        icon: "Headset",
      },
    ],
    faqs: [],
  },
  {
    id: "sunroom",
    name: "Sunroom",
    category: "sunroom",
    tagline: "A Bright Outdoor Escape. Enjoy comfort, warmth, and natural light throughout the year.",
    description: "A light-filled space to add to your home. Enjoy the outlook, the warmth, and the natural light in every season.",
    fullDescription: "A light-filled space to add to your home. Enjoy the outlook, the warmth, and the natural light in every season.",
    overviewTitle: "Sunroom: Your Key to Perfect Outdoor Living",
    overviewDescription: "A sunroom brings the outdoors into easy reach without giving up shelter from the weather. Built with premium finishes and quality glazing, it adds a bright, comfortable space you can use through every season.",
    trustBadges: [
      "10 yr Manufacturer Warranty",
      "2 yr Built Warranty",
      "0% Deposit On Finance",
    ],
    features: [
      "Double-glazed safety glass sliding & bifold doors",
      "Insulated composite roof panels prevent thermal transfer",
      "100% weather-sealed enclosure built for all 4 seasons",
      "Integrated LED lighting & concealed electrical channels",
      "Seamless architectural connection to existing home wall joinery",
    ],
    specifications: {
      "Enclosure": "Double-Glazed Sliding Glass & Solid Frame",
      "Roofing": "Thermal Composite Insulated Panels",
      "Weather Sealing": "Complete Perimeter Weather-Strip Gaskets",
      "Glass Rating": "Safety Toughened Double Glazing",
      "Warranty": "10-Year Comprehensive Warranty",
    },
    swatches: [
      { name: "Matt Black (RAL9005)", hex: "#1A1A1A", ral: "RAL9005" },
      { name: "Matt Grey (RAL7016)", hex: "#383E42", ral: "RAL7016" },
      { name: "Matt White (RAL9016)", hex: "#F5F5F5", ral: "RAL9016" },
    ],
    image: "/images/Sunroom/gallery-1.webp",
    gallery: [
      "/images/Sunroom/gallery-1.webp",
      "/images/Sunroom/gallery-2.webp",
      "/images/Sunroom/gallery-3.webp",
    ],
    tags: ["All-Weather Sunroom", "Enclosed Sunroom", "Double Glazed", "Thermal Roof"],
    sourceUrl: "https://bworth.co.nz/product/sunroom/",
    contentSections: [
      {
        id: "board-division-framing",
        title: "Frame and Beam Layout",
        subtitle: "Engineered to Standard. Precision Framed. Built-In Drainage.",
        description: "For sunrooms wider than 3m, structural support columns keep everything safe and stable. Vertical main beams are spaced at 800-1100mm with horizontal sub-beams keeping each glass panel under 1.5m. Flat pitched designs also get a 5-10cm front-to-rear slope built in, so water always drains away properly.",
        image: "/images/Sunroom/1.webp",
      },
      {
        id: "roof-styles",
        title: "A Roof Style for Every Home",
        subtitle: "Five Shapes to Choose. Built to Match Your Home.",
        description: "Pick from five custom roof styles: Flat & Pitched for a budget-friendly option, Curved for a European look, Triangular for a grand space with strong drainage, Diamond for a fashionable feature, or a Combined roof mixing multiple shapes for large, fully custom layouts.",
        image: "/images/Sunroom/2.webp",
      },
    ],
    installationSteps: [
      { step: "1", title: "Enquire", description: "Begin your journey with a simple enquiry. Share your sunroom extension ideas and site preferences with our local team." },
      { step: "2", title: "Site Visit", description: "We'll arrange a convenient time to visit your site and assess the location, measuring building joinery attachment points, sun angles, and wind exposure." },
      { step: "3", title: "Design & Feasibility", description: "Our experts develop a custom sunroom design that suits your home architecture, roof style, and council guideline requirements." },
      { step: "4", title: "Planning & Costing", description: "Receive a detailed proposal outlining timelines, materials, and pricing with clear transparent project costing." },
      { step: "5", title: "The Build", description: "Our experienced installation team erects the structural aluminium posts, thermal roof panels, and double-glazed glass sliding doors." },
      { step: "6", title: "Project Completion", description: "After final quality checks and site cleanup, your year-round sunroom living space is ready to enjoy." },
    ],
    performanceCards: [
      {
        title: "All-Weather Design",
        description: "Rated for 140–170 km/hr wind speeds and heavy downpours. Keeps your sunroom room temperature comfortable in all seasons.",
        icon: "CloudRain",
      },
      {
        title: "Architectural Aesthetics",
        description: "Clean extruded aluminium profiles (A6063 grade, powder-coated) and double-glazed glass panels make your sunroom a natural extension of your home.",
        icon: "Buildings",
      },
      {
        title: "Custom-Fitted to Measure",
        description: "Every sunroom is custom manufactured to your exact property dimensions and roof style preference. No off-the-shelf compromises.",
        icon: "Ruler",
      },
      {
        title: "Thermal & UV Insulation",
        description: "Double-glazed safety glass and insulated composite roof panels keep warmth inside during winter and block harsh solar heat during summer.",
        icon: "Sun",
      },
      {
        title: "Integrated Drainage",
        description: "Engineered 5–10cm roof slope and concealed perimeter gutters discharge rainwater quickly away from house joinery.",
        icon: "Drop",
      },
      {
        title: "Warranty & Support",
        description: "10-year comprehensive warranty and 2-year built warranty. 0% deposit and interest-free finance plans available.",
        icon: "Headset",
      },
    ],
    faqs: [],
  },
];

export const processData: ProcessItem[] = [
  {
    step: "1",
    title: "Enquire",
    description: "Begin your journey with a simple enquiry. Whether you're just exploring ideas or ready to build, our team is here to listen, answer your questions, and guide you through the possibilities. Share your needs and preferences, and we'll help you take the first step toward transforming your outdoor space.",
    icon: "ChatCircleText",
  },
  {
    step: "2",
    title: "Site Visit",
    description: "We'll arrange a convenient time to visit your site and assess the location. This step is crucial for understanding the space, sun angles, wind exposure, and other key factors that influence the design and functionality of your louvre system.",
    icon: "MapPin",
  },
  {
    step: "3",
    title: "Design & Feasibility",
    description: "Our experts will develop a custom design that suits your home and lifestyle. We'll evaluate structural requirements, spatial compatibility, and council guidelines (if applicable) to ensure your project is both stylish and achievable.",
    icon: "PencilRuler",
  },
  {
    step: "4",
    title: "Planning & Costing",
    description: "With your design finalised, we'll provide a detailed proposal outlining timelines, materials, and pricing. You'll receive clear and transparent costing, so you know exactly what to expect—no surprises, just smart planning.",
    icon: "Receipt",
  },
  {
    step: "5",
    title: "The Build",
    description: "Once approved, our experienced installation team gets to work. We pride ourselves on quality craftsmanship and efficient project management. Every component is installed with precision to deliver a durable, functional, and beautiful result.",
    icon: "Hammer",
  },
  {
    step: "6",
    title: "Project Completion",
    description: "After final checks and walk-throughs, your louvre system is ready to enjoy. We ensure everything is finished to perfection and leave the site clean and tidy. Your dream outdoor living space is now a reality—built to last and ready for all seasons.",
    icon: "CheckCircle",
  },
];

export const performanceData: PerformanceItem[] = [
  {
    id: "all-weather",
    title: "All-Weather Design",
    description: "Rated for 140–170 km/hr wind speeds and heavy snow loads. Engineered for New Zealand's variable climate — high UV, wind, and unexpected downpours. Built tough, built to last decades.",
    icon: "CloudRain",
  },
  {
    id: "aesthetics",
    title: "Architectural Aesthetics",
    description: "Clean extruded aluminium profiles (6005 grade, powder-coated) and architectural-grade design make our louvre systems as beautiful as any interior feature.",
    icon: "Buildings",
  },
  {
    id: "custom-fitted",
    title: "Custom-Fitted to Measure",
    description: "Every outdoor structure is precision-manufactured to your exact site dimensions. No off-the-shelf compromise — ever. Four installation styles to suit any property.",
    icon: "Ruler",
  },
  {
    id: "smart-tech",
    title: "Smart Technology",
    description: "Remote and Tuya app control as standard. IP67 waterproof motorisation. Auto-close rain sensors. RGB LED gutter lighting with separate remote. Blade lighting in warm yellow or cool white.",
    icon: "DeviceMobile",
  },
  {
    id: "drainage",
    title: "Integrated Drainage",
    description: "Patented gutter-beam system channels rainwater off the louvres, down through hollow columns and away from your patio. No exposed pipes, no leaks — perfectly dry underneath.",
    icon: "Drop",
  },
  {
    id: "warranty",
    title: "Warranty & Support",
    description: "10-year manufacturer warranty and 2-year built warranty. 0% deposit and interest-free finance plans available. Local service teams and genuine replacement parts nationally.",
    icon: "Headset",
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Gordon Tamihana",
    location: "Taranaki",
    quote: "Binosh and his team did a professional and lovely job on our front pergola. They kindly fitted our job in over their weekend and at a really great price. Communication and standard of work was amazing. We really appreciate having a covered entry now and place to sit to watch the sunsets or have a morning coffee.",
    rating: 5,
    project: "Front Deck Pergola",
  },
  {
    id: "test-2",
    name: "Christine Holland",
    location: "New Plymouth",
    quote: "We would thoroughly recommend Binoj and his team. They did an amazing job for us. Their workmanship is impeccable. They measured everything multiple times to ensure it was all correct. The final product exceeded our expectations. We are looking forward to dealing with them again to install blinds for our new outdoor area.",
    rating: 5,
    project: "Custom Outdoor Pergola",
  },
  {
    id: "test-3",
    name: "Gail Foley",
    location: "Whanganui",
    quote: "Good service, quality product at a reasonable price. There was no pressure to accept the quote as we had with one of the larger companies. We are very happy and would recommend.",
    rating: 5,
    project: "Outdoor Patio Shelter",
  },
  {
    id: "test-4",
    name: "Aby Solaman",
    location: "New Plymouth",
    quote: "We had an excellent experience with this firm. They recently completed a deck for my house, and the results exceeded my expectations. The team was professional, knowledgeable, and respectful of my property from start to finish. The workmanship is top-quality, and the finished deck looks amazing—solid, clean, and built to last.",
    rating: 5,
    project: "Deck & Outdoor Shelter",
  },
  {
    id: "test-5",
    name: "Sreerag R",
    location: "Taranaki",
    quote: "We highly recommend this exceptional group of individuals. They performed outstanding work in covering our pergola, demonstrating remarkable efficiency and completing the task with impressive speed. Our sincere thanks to the team.",
    rating: 5,
    project: "Pergola Roof Cover",
  },
  {
    id: "test-6",
    name: "Ian Hunger",
    location: "Taranaki",
    quote: "Excellent people to deal with. We have had no problems, what they say they do. They are punctual, work hard and quality workmanship. Good prices. I highly recommend them.",
    rating: 5,
    project: "Outdoor Living Structure",
  },
  {
    id: "test-7",
    name: "Cherry Williams",
    location: "New Plymouth",
    quote: "Binoj was awesome to deal with. He explained everything well, pergola looks exactly like the one in the brochure. I was super impressed with the price, also with the installation. Would definitely highly recommend Binoj and his team.",
    rating: 5,
    project: "Aluminium Pergola",
  },
  {
    id: "test-8",
    name: "Vicki Johnson",
    location: "Taranaki",
    quote: "Very Happy with our Pergola, Binoj and his team were very accommodating and prepared to find solutions for our unusual shaped Pergola. We would highly recommend them.",
    rating: 5,
    project: "Custom Pergola",
  },
  {
    id: "test-9",
    name: "Allegator",
    location: "New Plymouth",
    quote: "We’ve used this excellent firm twice and they have made a huge difference to our home. In our opinion, their product is the best investment we have made in home improvement and their customer service is top class. Very highly recommended.",
    rating: 5,
    project: "Patio & Canopy Shelter",
  },
  {
    id: "test-10",
    name: "Ross Duncum",
    location: "Whanganui",
    quote: "We have had the carport for two years and use it all the time, both for car protection and outdoor living. Recently we have had the curtain added and this has improved our area even more. It gives protection from the elements and gives us extra privacy. Binoj and his team were great to work with.",
    rating: 5,
    project: "Carport & Drop Blinds",
  },
];

export const contactDetailsData: ContactDetails = {
  phone: "06 262 1147",
  mobile: "022 420 2266",
  email: "info@clusteroutdoor.co.nz",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM",
  regions: [
    "Taranaki Region",
    "Whanganui Region",
  ],
  locations: [
    {
      name: "Main Office & Showroom",
      address: "Unit 2, 1B Sunley Street, Westown, New Plymouth 4310, New Zealand",
    },
  ],
};
