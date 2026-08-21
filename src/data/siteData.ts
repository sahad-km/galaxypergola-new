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
    description: "Discover the Deluxe Louvre Roof with motorised aluminium louvres, integrated internal drainage, dual-tone LED ambience, and custom installation across New Zealand.",
    fullDescription: "The Deluxe Louvre Roof represents the pinnacle of outdoor luxury and climate control. Featuring precision-engineered motorised aluminium blades that rotate up to 120 degrees at the touch of a button, you can effortlessly adjust sunlight, shade, or ventilation. Built with heavy-duty marine grade T6 aluminium extrusion and an integrated internal gutter system, rainwater is efficiently routed inside internal post channels to keep your patio completely dry even during heavy Kiwi downpours.",
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
    image: "/images/product-louvre.png",
    gallery: [
      "/images/product-louvre.png",
      "/images/about-hero.png",
      "/images/about-install.png",
      "/images/hero-bg.png",
      "/images/product-canopy.png",
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
        title: "Deluxe Louvre: Your Key to Perfect Outdoor Living",
        subtitle: "Remote Control, Motorised Blades & Dual-Tone LED Ambience",
        description: `Your outdoor space should follow your lead. With our rotatable louvre roof, you control sun, shade, airflow, or rain protection in seconds. The image shows four precise settings:

0° – Fully Sealed for Rain: Creates a watertight barrier to keep your space dry during unexpected showers.
15°–30° – Soft Sunlight: Slight tilt brings in gentle morning light while cutting glare — ideal for breakfast or reading.
90° – Maximum Airflow: Fully open for clear sky views, natural ventilation, and fresh breezes.
120° – Angled Shade: Past vertical to block harsh rays while keeping the space bright.

Instant comfort, any weather — like a remote control for the sky.`,
        image: "/images/Deluxe-Louvre/1.webp",
      },
      {
        id: "ip67-waterproof",
        title: "Built to Last – IP67 Waterproof",
        description: "Our motors are mounted inside the beam, minimizing the risk of water ingress and enhancing durability. Rated IP67, the Freestanding Deluxe Louvre is fully protected against dust and can withstand heavy rain or even temporary immersion. Whether facing summer downpours or breezy poolside conditions, your structure stays strong, reliable, and low-maintenance.",
        image: "/images/Deluxe-Louvre/2.webp",
      },
      {
        id: "rgb-lighting",
        title: "RGB Gutter Beam Lights – Ambiance on Demand",
        description: "Transform your outdoor evenings with integrated RGB Gutter Beam Lights that blend practicality with a touch of magic. Choose from 7vibrant combinations of colors to set the perfect mood—whether it’s a vibrant party glow, a calming twilight hue, or a warm, inviting dinner ambiance. With lighting at your fingertips, your pergola becomes more than just shade; it becomes an unforgettable experience, beautifully illuminated every night.",
        image: "/images/Deluxe-Louvre/3.webp",
      },
      {
        id: "centre-post-flexibility",
        title: "Freestanding with Flexible Centre Post Placement",
        description: "Design your outdoor space without limits. Combining refined aesthetics with precision engineering, the Freestanding Deluxe Louvre lets you shape layouts that fit your lifestyle and maximize open areas. Its adjustable centre post can be repositioned to work seamlessly around furniture, pathways, or landscaping — all while maintaining strength and stability. This flexibility ensures your louvre structure adapts to you, not the other way around.",
        image: "/images/Deluxe-Louvre/4.webp",
      },
      {
        id: "side-post-adjustment",
        title: "Freestanding with Flexible Side Post Adjustment",
        description: "The Freestanding Deluxe Louvre is designed to adapt beautifully to your layout. For wide patios, pool decks, or entertaining areas, side posts can shift up to 1 metre with tripod support — giving you broader coverage while staying structurally strong. In more compact settings, they can still move up to 40 cm without support, letting you fine-tune alignment for a clean, balanced look.",
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
    description: "Classic Louvre brings timeless outdoor comfort with effortless motorised blade adjustment and remote control operation. Integrated warm and cool white blade LEDs create a refined atmosphere for evening relaxation and entertaining.",
    fullDescription: "The Classic Louvre system delivers superior outdoor living with motorised blade control, integrated warm and cool white blade lighting, and heavy-duty 6063-T6 aluminium construction. Built for long-lasting durability across New Zealand's variable climate.",
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
    image: "/images/product-classic-louvre.png",
    gallery: [
      "/images/product-classic-louvre.png",
      "/images/product-louvre.png",
      "/images/product-canopy.png",
      "/images/hero-bg.png",
      "/images/about-install.png",
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
        description: "Classic Louvre can be installed as a freestanding unit—perfect for open areas like gardens, lawns, or poolside decks. With its robust post system and stylish roof structure, it defines a new space entirely on its own, giving you flexible placement and complete independence from building walls.",
        image: "/images/Classic-Louvre/1.webp",
      },
      {
        id: "wall-mounted-installation",
        title: "Wall Mounted Installation",
        description: "Extend your indoor living space outwards with a seamless wall-mounted setup. Anchored directly to your home's exterior fascia or wall, wall-mounted installation creates a natural, sheltered patio transition perfect for outdoor dining and entertaining.",
        image: "/images/Classic-Louvre/2.webp",
      },
      {
        id: "integrated-ambient-lighting",
        title: "Integrated Ambient Lighting",
        description: "Illuminate your outdoor evenings with precision-integrated LED strips built directly into the louvre blades. Switch effortlessly between warm yellow and cool white lighting modes using the exact same handheld wireless remote control.",
        image: "/images/Classic-Louvre/3.webp",
      },
      {
        id: "strong-aluminium-construction",
        title: "Strong Aluminium Construction",
        description: "Engineered with high-tensile 6063-T6 marine-grade aluminium alloy profiles and architectural powder coating. Corrosion-resistant and salt-air durable, ensuring decades of reliable performance across New Zealand's coastal environments.",
        image: "/images/Classic-Louvre/4.webp",
      },
      {
        id: "all-season-stability",
        title: "All-Season Stability",
        description: "Built with reinforced internal framing and heavy-duty ground anchoring to withstand strong winds and adverse weather conditions. Classic Louvre keeps your outdoor area protected, stable, and comfortable all year round.",
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
    description: "Panoramic glass and open-frame roof system delivering unobstructed natural sky views while maintaining complete weather protection for outdoor entertainment.",
    fullDescription: "Pergo Vue is designed for homeowners who want maximum daylight without compromising on weather protection. Utilizing ultra-clear toughened safety glass or high-clarity polycarbonate panels embedded within ultra-slimline architectural aluminium beams, Pergo Vue lets you stargaze or enjoy full natural light year-round while remaining 100% dry and wind-sheltered.",
    typeOptions: ["Glass Roof", "Architectural Polycarbonate"],
    features: [
      "Unobstructed panoramic sky views",
      "Ultra-slimline architectural posts",
      "High UV filtration with light transparency",
      "Integrated guttering system concealed within posts",
      "Compatible with drop-down Ziptrak outdoor blinds",
      "Custom wall-attached or freestanding configurations",
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
    image: "/images/product-louvre.png",
    gallery: [
      "/images/product-louvre.png",
      "/images/about-install.png",
    ],
    tags: ["Pergola", "Panoramic Sky", "High Light", "Glass Roof"],
    sourceUrl: "https://pergolanz.co.nz/pergo-vue/",
  },
  {
    id: "canopy",
    name: "Canopy",
    category: "canopy",
    tagline: "Architectural Patio, Entry & Window Canopy Systems. 3 Custom Styles Available.",
    description: "Custom architectural canopy solutions engineered for New Zealand weather. Built with micro powder-coated aluminium frames and 2mm 99.9% UV protected solid polycarbonate roofing.",
    fullDescription: "Our architectural canopy range offers precision weather protection across patios, entry doors, and windows. Constructed with marine-grade powder-coated aluminium frames and heavy-duty 2mm solid polycarbonate sheet roofing, our canopy systems block 99.9% of harmful UV rays while protecting against heavy rain and hail. Choose from three custom engineered styles: Straight Canopy (optimized 7-degree slope for rapid water shedding), Curved Canopy (curved water & sun deflection end return for maximum clearance), and Window/Door Canopy (protective architectural awning joinery shield).",
    priceRange: "$3,200.00 – $12,800.00",
    trustBadges: [
      "10 yr Sheet Warranty",
      "5 yr Frame Warranty",
      "2 yr Built Warranty",
    ],
    typeOptions: ["Straight Canopy", "Curved Canopy", "Window Canopy"],
    sizeOptions: ["3x3m", "3x4m", "4x3m", "4x4m", "5x3m", "6x3m"],
    colorOptions: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
      { name: "Matt Grey", hex: "#383E42" },
    ],
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
    image: "/images/product-canopy.png",
    gallery: [
      "/images/product-canopy.png",
      "/images/about-hero.png",
      "/images/about-install.png",
    ],
    tags: ["Architectural Canopy", "3 Styles Available", "99.9% UV Block", "Hail Rated"],
    contentSections: [
      {
        id: "straight-canopy-style",
        title: "Style 1: Straight Canopy",
        subtitle: "Sleek 7-Degree Sloped Patio Canopy",
        description: "Featuring an optimized 7-degree roof pitch that ensures rapid rainwater shedding and clean modern visual lines. Built with micro powder-coated aluminium frames and 2mm solid polycarbonate sheet roofing, transforming patios and backyards into all-weather shelters.",
        image: "/images/product-canopy.png",
      },
      {
        id: "curved-canopy-style",
        title: "Style 2: Curved Canopy",
        subtitle: "Elegant Water-Blocking Curved Roof System",
        description: "The engineered curve at the front edge acts as an integral deflector for wind-driven rain and harsh sunlight, while providing extra vertical head clearance over high patio doors and windows.",
        image: "/images/product-canopy.png",
      },
      {
        id: "window-canopy-style",
        title: "Style 3: Window & Door Canopy",
        subtitle: "Protective Door & Window Architectural Awning",
        description: "Durable polycarbonate and aluminium alloy window/door awning protecting entrances, timber joinery, and glass from rain, hail, and solar heat breakdown.",
        image: "/images/product-canopy.png",
      },
    ],
  },
  {
    id: "ziptrak-blinds",
    name: "Ziptrak Outdoor Blind",
    category: "blinds",
    tagline: "Patented Track-Guided Zero-Gap Weather & Wind Enclosure System",
    description: "Patented track-guided outdoor blind system locking tightly into side channels. Eliminates flapping fabric, gap leaks, and cumbersome ropes.",
    fullDescription: "Ziptrak is Australia & New Zealand's premier track-guided outdoor blind system. Using a specially designed slotted side track, the blind glides smoothly up and down and stops at any height without cords, cranks, or zips. The continuous side channel seal creates a zero-gap lock against wind, rain, insects, and harsh solar heat, allowing you to turn any pergola or deck into a fully sheltered room.",
    features: [
      "Patented track-guided side channel locking system",
      "Zero-gap side seals block wind, rain, and insects",
      "Effortless spring-balanced or motorised operation",
      "Heavy-duty marine PVC or high-density sunscreen mesh",
      "Instant central locking bottom rail mechanism",
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
    image: "/images/product-blinds.png",
    gallery: [
      "/images/product-blinds.png",
      "/images/about-hero.png",
    ],
    tags: ["Ziptrak System", "Zero Gap", "Wind Resistant", "Marine Grade"],
    sourceUrl: "https://www.nzlouvres.co.nz/our-products/ziptrak-premium-weatherproof-outdoor-blinds/",
  },
  {
    id: "easychannel-blinds",
    name: "EasyChannel Outdoor Blind",
    category: "blinds",
    tagline: "Canopy-Tech Precision Crank-Operated Side Channel Blind",
    description: "EasyChannel outdoor blind system engineered by Canopy Tech in NZ. Features smooth vertical crank guidance and heavy-duty bottom bar pins for patio enclosures.",
    fullDescription: "Designed and manufactured in New Zealand by Canopy Tech, the EasyChannel Outdoor Blind provides a sleek, robust enclosure for residential decks and commercial venues. Featuring smooth crank handle operation, weighted bottom bars, and heavy-duty locking pins, EasyChannel delivers a tight, wrinkle-free fabric finish that withstands windy conditions.",
    features: [
      "Smooth gear-driven crank handle mechanism",
      "Heavy-duty bottom bar with quick locking pins",
      "Precision side channels eliminate breeze blow-outs",
      "Custom manufactured in New Zealand",
      "High UV resistance solar shading mesh",
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
    image: "/images/product-blinds.png",
    gallery: [
      "/images/product-blinds.png",
      "/images/about-install.png",
    ],
    tags: ["EasyChannel", "Canopy-Tech", "Crank Operated", "NZ Made"],
    sourceUrl: "https://archipro.co.nz/product/easychannel-outdoor-blind-canopy-tech",
  },
  {
    id: "easytrack-blinds",
    name: "EasyTrack Outdoor Blind",
    category: "blinds",
    tagline: "Effortless Glide Friction-Fit Outdoor Shade System",
    description: "Custom friction-guided outdoor blind providing effortless hand-push height positioning, insect exclusion, and integrated optional motorization.",
    fullDescription: "The EasyTrack Outdoor Blind by Canopy Tech offers an elegant spring-tensioned pull-down mechanism that locks into position at any custom height. Designed to integrate seamlessly with louvres and pergolas, EasyTrack provides quick sun protection, privacy from neighbors, and an effective barrier against pests.",
    features: [
      "Friction-fit pull-down mechanism locks at any height",
      "Optional remote motorization available",
      "Custom powder-coated side tracks to match joinery",
      "Marine-grade components engineered for NZ weather",
      "Subtle low-profile cassette casing",
    ],
    specifications: {
      "Manufacturer": "Canopy Tech New Zealand",
      "Operation": "Manual Push-Pull Friction Fit or Motorised",
      "Tracks": "Powder-Coated Extruded Aluminium",
      "Fabric": "High UV Blocking Sunscreen Mesh",
      "Warranty": "5-Year Manufacturer Warranty",
    },
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Cream Sunscreen", hex: "#E6E6D8" },
    ],
    image: "/images/product-blinds.png",
    gallery: [
      "/images/product-blinds.png",
    ],
    tags: ["EasyTrack", "Smooth Gliding", "Friction Fit", "Motorised Option"],
    sourceUrl: "https://archipro.co.nz/product/easychannel-canopy-tech",
  },
  {
    id: "carport",
    name: "Carport",
    category: "carport",
    tagline: "Modern Vehicle Protection. 2 Custom Styles Available.",
    description: "High-grade aluminium alloy carport structures protecting vehicles, caravans, and boats from UV solar heat, heavy rain, and severe hail damage.",
    fullDescription: "Designed for ultimate vehicle durability, style, and everyday convenience. Built with 6063-T6 marine-grade aluminium alloy framing and 2mm solid polycarbonate roof sheets blocking 99.9% UV rays. Engineered for NZ wind zones up to 120 km/hr with concealed internal drainage. Available in two distinct styles: Arch Carport (curved roof canopy for extra vertical vehicle clearance) and Straight Carport (sleek flat-pitched modern architectural design).",
    trustBadges: [
      "10 yr Sheet Warranty",
      "5 yr Frame Warranty",
      "2 yr Built Warranty",
    ],
    typeOptions: ["Arch Carport", "Straight Carport"],
    sizeOptions: ["Single Carport (3x5m)", "Double Carport (6x5m)", "Custom Vehicle Size"],
    colorOptions: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
      { name: "Light Grey Tint", hex: "#7D848C" },
    ],
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
    image: "/images/product-carport.png",
    gallery: [
      "/images/product-carport.png",
      "/images/product-canopy.png",
      "/images/hero-bg.png",
    ],
    tags: ["Carport System", "2 Styles Available", "99.9% UV Block", "120 km/h Wind Rated"],
    contentSections: [
      {
        id: "arch-carport-style",
        title: "Style 1: Arch Carport",
        subtitle: "Curved Architectural Roof Canopy",
        description: "Curved arched canopy structure providing maximum vertical overhead clearance for SUVs, utility vehicles, caravans, and boats.",
        image: "/images/product-carport.png",
      },
      {
        id: "straight-carport-style",
        title: "Style 2: Straight Carport",
        subtitle: "Clean Minimalist Sloped Roof Pitch",
        description: "Sleek straight flat-pitched canopy offering clean minimalist lines that align with modern residential architecture.",
        image: "/images/product-carport.png",
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
    description: "Architectural aluminium louvre shutters engineered for deck privacy, wind buffering, airflow control, and security across balconies and patios.",
    fullDescription: "Bworth Outdoor Aluminium Shutters offer superior control over privacy, light, and airflow. Featuring operable or fixed louvre blades mounted within heavy-duty powder-coated frames, these shutters act as an effective wind break on exposed decks and balconies while maintaining a stylish, modern exterior facade.",
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
    image: "/images/product-louvre.png",
    gallery: [
      "/images/product-louvre.png",
      "/images/about-install.png",
      "/images/about-hero.png",
      "/images/hero-bg.png",
      "/images/product-canopy.png",
    ],
    tags: ["Outdoor Shutter", "Privacy Control", "Wind Barrier", "Bifold/Sliding"],
    sourceUrl: "https://bworth.co.nz/product/outdoor-shutter/",
    contentSections: [
      {
        id: "color-options",
        title: "Premium Color Options",
        subtitle: "UV & Fade-Resistant Powder Coating",
        description: "Choose from 4 architectural finishes: RAL9016 Matt White, RAL7016 Matt Grey, RAL9005 Matt Black, plus realistic Teak Woodgrain. All finishes feature heavy-duty powder coating that resists UV fading, salt spray, and corrosion.",
        image: "/images/Outdoor-Shutter/1.webp",
      },
      {
        id: "installation-formats",
        title: "Versatile Installation Formats",
        subtitle: "4 Opening Mechanisms for Any Layout",
        description: "Available in 4 versatile configurations to fit your space: Fixed (permanent privacy screening), Sliding (smooth horizontal gliding panels), Bi-folding (stacks away to maximize wide views), and Swing (classic hinged shutter panels).",
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
    description: "Fully enclosed 365-day sunroom featuring double-glazed glass sliding doors, thermal insulated roof panels, and complete weather-sealed protection.",
    fullDescription: "Transform your outdoor space into a true year-round living area with the Bworth All-Weather Sunroom. Combining structural aluminium framing, double-glazed sliding glass doors, and insulated thermal roof panels, this fully enclosed extension retains warmth during winter while allowing breezy open-air ventilation during summer.",
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
    image: "/images/about-install.png",
    gallery: [
      "/images/about-install.png",
      "/images/about-hero.png",
      "/images/hero-bg.png",
      "/images/product-canopy.png",
      "/images/product-louvre.png",
    ],
    tags: ["All-Weather Sunroom", "Enclosed Sunroom", "Double Glazed", "Thermal Roof"],
    sourceUrl: "https://bworth.co.nz/product/sunroom/",
    contentSections: [
      {
        id: "board-division-framing",
        title: "Sunroom Board Division & Framing",
        subtitle: "Technical Structural Engineering Specs",
        description: "Engineered for maximum structural stability and rainwater drainage. Layouts wider than 3m include reinforced support columns; main structural beams are spaced 800–1100mm; sub-beams maintain glass panels under 1.5m²; and a 5–10cm front-to-rear slope is engineered into flat pitched roof designs.",
        image: "/images/Sunroom/1.webp",
      },
      {
        id: "roof-styles",
        title: "Custom Sunroom Roof Styles",
        subtitle: "5 Architectural Roof Options",
        description: "Select from 5 distinct architectural roof styles: Flat & Pitched (budget-friendly design), Curved (European styling with gentle end returns), Triangular (grand ceiling height and optimal rainwater shedding), Diamond (high-end architectural feature), and Combined (mixed shapes for large custom layouts).",
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
    name: "Sarah & David K.",
    location: "New Plymouth (Oakura)",
    quote: "Our Apex Louvre Pergola has completely changed our family routine. We can sit outside even when a sudden Taranaki downpour rolls in. The rain sensor works like magic, automatically closing the slats. The service from the installation team was exceptional.",
    rating: 5,
    project: "Apex Louvre Pergola",
  },
  {
    id: "test-2",
    name: "Mark Thomson",
    location: "Whanganui (Otamatea)",
    quote: "The coastal winds used to blow right through our patio, making it unusable for half the year. The Ziptrak outdoor blinds installed by Cluster have solved this completely. They are incredibly sturdy, easy to roll, and seal the space tightly.",
    rating: 5,
    project: "Ziptrak Blinds",
  },
  {
    id: "test-3",
    name: "Liam O'Connor",
    location: "Hawera (Taranaki)",
    quote: "I was worried about the strong wind loads here in Taranaki, but Cluster engineered a fixed Horizon Canopy that handles the gusts and looks absolutely stunning. The sleek dark charcoal frame perfectly complements our cedar home.",
    rating: 5,
    project: "Horizon Fixed Canopy",
  },
  {
    id: "test-4",
    name: "Aroha & Wiremu",
    location: "New Plymouth (Bell Block)",
    quote: "Our new deck canopy has become the main room of the house! It filters the intense Taranaki summer UV rays, keeping the kids safe while letting us dine outside every evening. Outstanding workmanship and great communication throughout.",
    rating: 5,
    project: "Horizon Fixed Canopy",
  },
  {
    id: "test-5",
    name: "Eleanor Vance",
    location: "Whanganui (Eastbrook)",
    quote: "We needed a carport for a very steep and narrow driveway where regular supports would get in the way of opening doors. The Metro Cantilever Carport is engineering at its finest. It stands rock-solid against Whanganui winds.",
    rating: 5,
    project: "Metro Cantilever Carport",
  },
];

export const contactDetailsData: ContactDetails = {
  phone: "06 262 1147",
  mobile: "022 420 2266",
  email: "info@clusteroutdoor.co.nz",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM",
  regions: [
    "Taranaki Region (Local Base)",
    "Whanganui Region (Mobile Consultations)",
  ],
  locations: [
    {
      name: "Main Office & Showroom",
      address: "Unit 2, 1B Sunley Street, Westown, New Plymouth 4310, New Zealand",
    },
  ],
};
