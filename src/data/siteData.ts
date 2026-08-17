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
  swatches: { name: string; hex: string }[];
  image: string;
  gallery?: string[];
  tags: string[];
  sourceUrl?: string;
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
    description: "Custom pergolas, canopies, and blinds installed nationwide.",
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
    features: ["Heavy-duty frames", "Integrated gutter systems", "Custom colors", "Architectural styling"],
  },
  {
    id: "canopies",
    title: "Architectural Canopies",
    description: "Fixed roof structures featuring polycarbonate or glass infills to let light in while keeping the elements out.",
    icon: "CloudRain",
    features: ["99% UV filtering", "Impact resistant roofs", "NZ weather rated", "Seamless wall attaches"],
  },
  {
    id: "carports",
    title: "Designer Carports",
    description: "Modern cantilevered and free-standing protective structures designed to shelter vehicles, boats, and RVs.",
    icon: "Car",
    features: ["Minimalist posts", "Anti-condensation lining", "High wind-zone engineered", "Robust steel anchors"],
  },
  {
    id: "blinds",
    title: "Outdoor Blinds",
    description: "State-of-the-art track-guided Ziptrak systems for instant protection against wind, rain, insects, and sun glare.",
    icon: "Sliders",
    features: ["Zero-gap side tracks", "Manual or motorized", "Marine-grade PVC or Mesh", "Lock-down bottom bars"],
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
    tagline: "Motorised Luxury Opening Roof System with Dual-Tone LED Lighting",
    description: "Discover the Deluxe Louvre Roof with motorised aluminium louvres, integrated internal drainage, dual-tone LED ambience, and custom installation across New Zealand.",
    fullDescription: "The Deluxe Louvre Roof represents the pinnacle of outdoor luxury and climate control. Featuring precision-engineered motorised aluminium blades that rotate up to 120 degrees at the touch of a button, you can effortlessly adjust sunlight, shade, or ventilation. Built with heavy-duty marine grade T6 aluminium extrusion and an integrated internal gutter system, rainwater is efficiently routed inside internal post channels to keep your patio completely dry even during heavy Kiwi downpours.",
    features: [
      "Motorised remote control blade operation",
      "Dual-tone warm & cool integrated LED lighting",
      "Hidden internal post drainage system",
      "Marine-grade 6005 T6 powder-coated aluminium",
      "Automated rain sensor technology auto-closes on downpours",
      "High wind-zone rated for NZ coastal conditions",
    ],
    specifications: {
      "Roof Type": "Motorised Opening Louvre Slat",
      "Frame Material": "Extruded Marine-Grade T6 Aluminium",
      "Wind Rating": "Up to 170 km/h (NZ Extra High Wind Zone)",
      "Drainage": "Hidden Internal Perimeter Gutter System",
      "Lighting": "Dual-Tone (Warm White / Cool Daylight) Blade LEDs",
      "Control System": "RF Remote Control & Tuya Smart App Integration",
      "Warranty": "10-Year Structural Warranty & 2-Year Motor Warranty",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Bronze", hex: "#4D3F37" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    gallery: [
      "/images/product-louvre.png",
      "/images/about-hero.png",
      "/images/about-install.png",
    ],
    tags: ["Motorised", "Deluxe Series", "Dual-Tone LEDs", "Rain Sensor"],
    sourceUrl: "https://bworth.co.nz/product/deluxe-louvre/",
  },
  {
    id: "classic-louvre",
    name: "Classic Louvre",
    category: "louvre",
    tagline: "Timeless All-Weather Motorised Louvre Architecture",
    description: "Experience the Classic Louvre Roof with durable aluminium louvres, adjustable shade, complete weather protection, and custom installation across New Zealand.",
    fullDescription: "The Classic Louvre Roof is engineered for enduring style and practical everyday outdoor living. Designed specifically for New Zealand's variable climate, it combines sleek structural aesthetics with reliable motorised blade adjustment. Whether shielding your deck from harsh summer UV rays or providing shelter from sudden rainfall, the Classic Louvre offers a seamless transition between open sky and solid cover.",
    features: [
      "Smooth motorised remote blade rotation",
      "Warm & cool dimmable LED blade illumination",
      "Integrated perimeter guttering with internal downspouts",
      "Architectural powder-coated finish",
      "Low maintenance corrosion-resistant frame",
      "Custom sized to fit any deck or patio dimension",
    ],
    specifications: {
      "Roof Type": "Motorised Adjustable Aluminium Louvre",
      "Frame Material": "High-Strength Powder-Coated Aluminium",
      "Wind Rating": "Engineered for NZ Standard & High Wind Zones",
      "Drainage": "Perimeter Gutter Channel System",
      "Lighting": "Integrated Warm & Cool LED Strip Accent",
      "Control": "Handheld Remote & Wall Switch Compatible",
      "Warranty": "10-Year Frame Warranty",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    gallery: [
      "/images/product-louvre.png",
      "/images/about-hero.png",
    ],
    tags: ["Classic Series", "Warm/Cool LEDs", "All-Season"],
    sourceUrl: "https://bworth.co.nz/product/classic-louvre/",
  },
  {
    id: "pergo-vue",
    name: "Pergo Vue Pergola",
    category: "pergola",
    tagline: "Panoramic Sky Views with 100% Weather Shield Protection",
    description: "Panoramic glass and open-frame roof system delivering unobstructed natural sky views while maintaining complete weather protection for outdoor entertainment.",
    fullDescription: "Pergo Vue is designed for homeowners who want maximum daylight without compromising on weather protection. Utilizing ultra-clear toughened safety glass or high-clarity polycarbonate panels embedded within ultra-slimline architectural aluminium beams, Pergo Vue lets you stargaze or enjoy full natural light year-round while remaining 100% dry and wind-sheltered.",
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
    tags: ["Pergo Vue", "Panoramic Sky", "High Light", "Glass Roof"],
    sourceUrl: "https://pergolanz.co.nz/pergo-vue/",
  },
  {
    id: "straight-canopy",
    name: "Straight Canopy",
    category: "canopy",
    tagline: "Sleek 7-Degree Sloped Architectural Patio Canopy",
    description: "Contemporary straight sloped canopy extension for patios, backyards, and balconies. Features micro powder-coated frames and 2mm 99.9% UV protected polycarbonate roofing.",
    fullDescription: "The Straight Canopy is a modern architectural shelter featuring a precision 7-degree roof pitch that ensures rapid water runoff and clean visual lines. Constructed with micro powder-coated aluminium frames and heavy-duty 2mm solid polycarbonate sheet roofing, this canopy protects against sun glare, rain, and hail while transforming any outdoor space into a versatile sunroom style retreat when combined with side blinds.",
    features: [
      "Optimized 7-degree slope for efficient water shedding",
      "99.9% UV protection blocks solar heat buildup",
      "2mm impact-resistant polycarbonate roofing",
      "Micro powder-coated corrosion-resistant finish",
      "Supports outdoor blind attachments for full enclosure",
    ],
    specifications: {
      "Roof Pitch": "7-Degree Angle",
      "Sheet Material": "2mm Solid Polycarbonate",
      "UV Protection": "99.9% Solar Filter",
      "Frame Coating": "Micro Powder Coat",
      "Warranty": "10-Year Structural Guarantee",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    gallery: [
      "/images/product-canopy.png",
      "/images/about-hero.png",
    ],
    tags: ["Straight Canopy", "7° Pitch", "99.9% UV Block", "Hail Rated"],
  },
  {
    id: "curved-canopy",
    name: "Curved Canopy",
    category: "canopy",
    tagline: "Elegant Water-Blocking Curved Roof Canopy System",
    description: "Curved roof structure providing maximum headroom, stylish water-blocking curved end returns, and all-weather patio coverage with 2mm solid polycarbonate.",
    fullDescription: "The Curved Canopy is one of New Zealand's most sought-after patio roof designs. The engineered curve at the front edge acts as an integral deflector for wind-driven rain and harsh sunlight, while adding visual softness and extra vertical clearance over doors and windows. Ideal for wall-mounted installations across rear decks or entertaining areas.",
    features: [
      "Curved water & sun deflection end return",
      "Extra head clearance for high patio doors",
      "2mm solid polycarbonate impact-resistant sheet",
      "99.9% UV protective coating",
      "Micro powder-coated architectural finish",
    ],
    specifications: {
      "Roof Design": "Curved Perimeter Edge",
      "Sheet Material": "2mm Solid Polycarbonate",
      "UV Protection": "99.9%",
      "Mounting": "Wall-Mounted or Standalone",
      "Warranty": "10-Year Guarantee",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    gallery: [
      "/images/product-canopy.png",
      "/images/about-install.png",
    ],
    tags: ["Curved Canopy", "Water Blocking", "Sun Guard", "High Clearance"],
  },
  {
    id: "window-canopy",
    name: "Window Canopy",
    category: "canopy",
    tagline: "Protective Door & Window Architectural Awning",
    description: "Durable polycarbonate and aluminium alloy window/door canopy protecting entrances, joinery, and glass from rain, hail, and harsh UV breakdown.",
    fullDescription: "Protect your home's doors, timber frames, and window joinery from weather exposure with our custom Window Canopy. Available in both straight and curved profiles, these canopies prevent rain from intruding through open windows while cutting indoor solar heat glare by up to 80%.",
    features: [
      "Superior protection for entry doors and windows",
      "2mm 99.9% UV blocking solid polycarbonate",
      "Durable non-rusting aluminium support arms",
      "Simple fast-mount modular system",
      "Available in straight or curved styles",
    ],
    specifications: {
      "Application": "Window & Door Joinery Shield",
      "Material": "2mm Polycarbonate & Aluminium Alloy",
      "UV Blocking": "99.9%",
      "Styles": "Curved or Straight Pitch",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    gallery: [
      "/images/product-canopy.png",
    ],
    tags: ["Window Canopy", "Door Shelter", "UV Barrier"],
  },
  {
    id: "ziptrak-blinds",
    name: "Ziptrak Outdoor Blinds",
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
      "Custom manufactured in Auckland, New Zealand",
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
    id: "arch-carport",
    name: "Arch Carport",
    category: "carport",
    tagline: "High-Clearance Engineered Arched Vehicle Protection",
    description: "Stunning arched carport structure providing spacious outdoor vehicle shelter, 2mm poly-carbonate roofing, and wind engineering rated for NZ conditions.",
    fullDescription: "The Arch Carport combines architectural elegance with maximum structural strength. The curved arch roof profile provides extra head clearance for SUVs, utility vehicles, boats, or campervans while naturally shedding water, leaves, and debris. Built with micro powder-coated heavy-duty alloy frames and 2mm UV-blocking polycarbonate roofing, it resists sun damage, heavy hail impact, and intense wind speeds.",
    features: [
      "High clearance arched roof profile for large vehicles & RVs",
      "2mm solid polycarbonate roof protecting against hail & UV",
      "Heavy-duty micro powder-coated structural framing",
      "Engineered specifically for NZ High Wind Zones",
      "Integrated guttering for clean rainwater drainage",
    ],
    specifications: {
      "Structure": "Cantilevered / Post Arch Frame",
      "Roof Material": "2mm Solid Polycarbonate",
      "Wind Rating": "NZ Wind Zone Engineered (Up to 160 km/h)",
      "Coating": "Micro Powder Coat Finish",
      "Warranty": "10-Year Structural Warranty",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-carport.png",
    gallery: [
      "/images/product-carport.png",
      "/images/about-hero.png",
    ],
    tags: ["Arch Carport", "High Clearance", "Hail Protection", "NZ Wind Rated"],
    sourceUrl: "https://bworth.co.nz/product/carport/",
  },
  {
    id: "straight-carport",
    name: "Straight Carport",
    category: "carport",
    tagline: "Modern Minimalist Flat-Pitch Vehicle Shelter",
    description: "Sleek straight roof carport designed for modern driveways. Protects cars, boats, and property from UV degradation, rain, and severe hail damage.",
    fullDescription: "The Straight Carport delivers a clean, modern aesthetic that aligns with contemporary home architecture. Featuring a subtle sloped straight roof, heavy-duty posts, and 2mm polycarbonate roofing, it shelters your vehicle investment from harsh Kiwi weather, leaf staining, and paint-damaging UV solar radiation.",
    features: [
      "Clean straight-line minimalist architectural design",
      "2mm solid polycarbonate roof with 99.9% UV filter",
      "Resists hail, falling debris, and heavy downpours",
      "Micro powder-coated frame available in custom colors",
      "Freestanding or wall-attached driveway mounting",
    ],
    specifications: {
      "Structure": "Straight Roof Cantilever or Post-Mounted",
      "Roof Material": "2mm Solid Polycarbonate",
      "UV Blocking": "99.9%",
      "Wind Rating": "NZ High Wind Zone Tested",
      "Warranty": "10-Year Structural Guarantee",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-carport.png",
    gallery: [
      "/images/product-carport.png",
    ],
    tags: ["Straight Carport", "Minimalist", "99.9% UV Block", "NZ Wind Rated"],
    sourceUrl: "https://bworth.co.nz/product/carport/",
  },
  {
    id: "outdoor-shutter",
    name: "Outdoor Shutter",
    category: "shutter",
    tagline: "Heavy-Duty Aluminium Louvre Privacy & Wind Buffer Shutters",
    description: "Architectural aluminium louvre shutters engineered for deck privacy, wind buffering, airflow control, and security across balconies and patios.",
    fullDescription: "Bworth Outdoor Aluminium Shutters offer superior control over privacy, light, and airflow. Featuring operable or fixed louvre blades mounted within heavy-duty powder-coated frames, these shutters act as an effective wind break on exposed decks and balconies while maintaining a stylish, modern exterior facade.",
    features: [
      "Operable louvre blades with smooth manual control",
      "Marine-grade powder-coated T6 aluminium construction",
      "Wind-lock safety latches for high wind resilience",
      "Provides privacy, shade, and rain deflection",
      "Available in sliding, bifold, or fixed panel configurations",
    ],
    specifications: {
      "Blade Type": "Operable or Fixed Aluminium Louvre",
      "Configurations": "Sliding, Bifold, Hinged, or Fixed",
      "Frame Finish": "Marine-Grade Powder Coat",
      "Wind Rating": "High Wind Resistance with Safety Locks",
      "Warranty": "10-Year Material Guarantee",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    gallery: [
      "/images/product-louvre.png",
      "/images/about-install.png",
    ],
    tags: ["Aluminium Shutter", "Privacy Control", "Wind Barrier", "Bifold/Sliding"],
    sourceUrl: "https://bworth.co.nz/product/outdoor-shutter/",
  },
  {
    id: "sunroom",
    name: "Sunroom",
    category: "sunroom",
    tagline: "Fully Enclosed Double-Glazed Insulated Outdoor Living Extension",
    description: "Fully enclosed 365-day sunroom featuring double-glazed glass sliding doors, thermal insulated roof panels, and complete weather-sealed protection.",
    fullDescription: "Transform your outdoor space into a true year-round living area with the Bworth All-Weather Sunroom. Combining structural aluminium framing, double-glazed sliding glass doors, and insulated thermal roof panels, this fully enclosed extension retains warmth during winter while allowing breezy open-air ventilation during summer.",
    features: [
      "Double-glazed safety glass sliding & bifold doors",
      "Insulated composite roof panels prevent heat transfer",
      "100% weather-sealed enclosure built for all seasons",
      "Integrated LED lighting & concealed electrical channels",
      "Seamless connection to existing home wall joinery",
    ],
    specifications: {
      "Enclosure": "Double-Glazed Sliding Glass & Solid Frame",
      "Roofing": "Thermal Composite Insulated Panels",
      "Weather Sealing": "Complete Perimeter Weather-Strip Gaskets",
      "Glass Rating": "Safety Toughened Double Glazing",
      "Warranty": "10-Year Comprehensive Warranty",
    },
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/about-install.png",
    gallery: [
      "/images/about-install.png",
      "/images/about-hero.png",
    ],
    tags: ["All-Weather Room", "Enclosed Sunroom", "Double Glazed", "Thermal Roof"],
    sourceUrl: "https://bworth.co.nz/product/sunroom/",
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
    location: "Auckland (St Heliers)",
    quote: "Our Apex Louvre Pergola has completely changed our family routine. We can sit outside even when a sudden Auckland downpour rolls in. The rain sensor works like magic, automatically closing the slats. The service from the installation team was exceptional.",
    rating: 5,
    project: "Apex Louvre Pergola",
  },
  {
    id: "test-2",
    name: "Mark Thomson",
    location: "Christchurch (Fendalton)",
    quote: "The Canterbury winds used to blow right through our patio, making it unusable for half the year. The Ziptrak outdoor blinds installed by Cluster have solved this completely. They are incredibly sturdy, easy to roll, and seal the space tightly.",
    rating: 5,
    project: "Ziptrak Blinds",
  },
  {
    id: "test-3",
    name: "Liam O'Connor",
    location: "Queenstown",
    quote: "I was worried about the heavy snow loads here in Central Otago, but Cluster engineered a fixed Horizon Canopy that handles the snow and looks absolutely stunning. The sleek dark charcoal frame perfectly complements our cedar home.",
    rating: 5,
    project: "Horizon Fixed Canopy",
  },
  {
    id: "test-4",
    name: "Aroha & Wiremu",
    location: "Tauranga",
    quote: "Our new deck canopy has become the main room of the house! It filters the intense Bay of Plenty summer UV rays, keeping the kids safe while let's us dine outside every evening. Outstanding workmanship and great communication throughout.",
    rating: 5,
    project: "Horizon Fixed Canopy",
  },
  {
    id: "test-5",
    name: "Eleanor Vance",
    location: "Wellington (Khandallah)",
    quote: "We needed a carport for a very steep and narrow driveway where regular supports would get in the way of opening doors. The Metro Cantilever Carport is engineering at its finest. It stands rock-solid against Wellington winds.",
    rating: 5,
    project: "Metro Cantilever Carport",
  },
];

export const contactDetailsData: ContactDetails = {
  phone: "06 262 1147",
  email: "info@clusteroutdoor.co.nz",
  hours: "Monday - Friday: 8:00 AM - 5:00 PM | Saturday: 9:00 AM - 1:00 PM",
  regions: [
    "Taranaki Region (Local Base)",
    "Whanganui Region (Mobile Consultations)",
    "Manawatu & Palmerston North",
    "Waikato & King Country",
    "Wellington & Lower North Island",
  ],
  locations: [
    {
      name: "Main Office & Showroom",
      address: "Sunley Street, Westown, New Plymouth 4310, New Zealand",
    },
    {
      name: "Whanganui Mobile Service Area",
      address: "Mobile Onsite Consultations, Free Measures, & Local Installers",
    },
  ],
};
