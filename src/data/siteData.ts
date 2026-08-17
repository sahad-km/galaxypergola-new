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
  description: string;
  features: string[];
  swatches: { name: string; hex: string }[];
  image: string;
  tags: string[];
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
  // {
  //   id: "satisfaction",
  //   value: 100,
  //   suffix: "%",
  //   label: "Kiwi Owned & Operated",
  //   description: "Engineered locally for local wind zones and climate demands.",
  // },
  // {
  //   id: "warranty",
  //   value: 10,
  //   suffix: "-Year",
  //   label: "Structural Warranty",
  //   description: "Backed by premium marine-grade aluminium and master building standards.",
  // },
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
    description: "Premium Comfort for Outdoor Living. Remote Control, Motorised Blades. Dual-Tone LED Ambience.",
    features: [
      "Remote control operation",
      "Motorised blades",
      "Dual-tone LED ambience",
      "Hidden internal drainage",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Bronze", hex: "#4D3F37" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    tags: ["Motorised", "Deluxe Series", "Dual-Tone LEDs"],
  },
  {
    id: "classic-louvre",
    name: "Classic Louvre",
    category: "louvre",
    description: "Timeless Outdoor Comfort. Motorised Control with Warm & Cool Blade LEDs. Built for Every Season.",
    features: [
      "Motorised control",
      "Warm & cool blade LEDs",
      "Built for every season",
      "Marine-grade aluminium",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    tags: ["Classic Series", "Warm/Cool LEDs", "All-Season"],
  },
  {
    id: "pergo-vue",
    name: "Pergo Vue Pergola",
    category: "pergola",
    description: "Panoramic glass and open-frame roof system delivering unobstructed natural sky views while maintaining 100% weather protection.",
    features: [
      "Panoramic sky views",
      "Slimline post profiles",
      "Integrated drainage",
      "99% UV filtering",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Sandstone", hex: "#C8BCA6" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    tags: ["Pergo Vue", "Panoramic Sky", "High Light"],
  },
  // {
  //   id: "straight-pergola",
  //   name: "Straight Pergola",
  //   category: "pergola",
  //   description: "Straight Pergola is a contemporary design providing a stunning extension for your patio, backyard, front of house, or balcony. Features a 7-degree slope angle, micro powder coated frames, and 2mm 99% UV protected poly-carbonate roofing.",
  //   features: [
  //     "7-degree slope angle",
  //     "Micro powder coated frame",
  //     "2mm poly-carbonate roofing",
  //     "99% UV protected",
  //   ],
  //   swatches: [
  //     { name: "Matte Charcoal", hex: "#2D2E30" },
  //     { name: "Slate Gray", hex: "#5A5D64" },
  //     { name: "Arctic White", hex: "#F3F4F6" },
  //   ],
  //   image: "/images/product-louvre.png",
  //   tags: ["Straight Pergola", "7° Slope", "UV Protected"],
  // },
  // {
  //   id: "curved-pergola",
  //   name: "Curved Pergola",
  //   category: "pergola",
  //   description: "Curved Pergola provides a multi-functional role with an amazing curved finish. Mounted against the wall of the property with a curved angle at the end that blocks water and sun rays coming through in various weather conditions.",
  //   features: [
  //     "Curved water-blocking end",
  //     "Wall mounted structure",
  //     "Micro powder coated frame",
  //     "2mm poly-carbonate roofing",
  //   ],
  //   swatches: [
  //     { name: "Matte Charcoal", hex: "#2D2E30" },
  //     { name: "Arctic White", hex: "#F3F4F6" },
  //   ],
  //   image: "/images/product-louvre.png",
  //   tags: ["Curved Pergola", "Water Blocking", "Wall Mounted"],
  // },

  {
    id: "straight-canopy",
    name: "Straight Canopy",
    category: "canopy",
    description: "Straight Canopy is a contemporary design which provides a stunning extension for your outdoor space. This model Pergola is a perfect outdoor extension for your Patio, Backyard, Front of the house, Balcony. The perfect 7 degree angle of slope gives the Pergola an amazing finish. Use our beautiful straight pergola as shelter near the pool, barbecue area, and you can convert your patio into a sunroom with outdoor blinds. Frames are micro powder coated, and are available in different colors to match your property. Poly-carbonate sheet is used for roofing which is 2mm in thickness and is 99% UV protected.",
    features: [
      "Door & window protection",
      "99.9% UV protected",
      "2mm poly-carbonate roofing",
      "Straight & curved options",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    tags: ["Window Guard", "99.9% UV Block", "Sun & Hail Protection"],
  },

  {
    id: "curved-canopy",
    name: "Curved Canopy",
    category: "canopy",
    description: "Curved Canopy is one of the most popular product in the market. The curved structure provides a multi functional role, as it provides an amazing finish for the product. The curved end blocks the water and sun rays coming through. It also provides a designer space to allow outdoor areas to be used all year around and can be customized according to the needs and design. Curved Pergola is mounted against the wall of the property with a curved angle at the end, which is stylish and will let you use your outdoor space in various weather conditions. Frames are micro powder coated, and are available in different colours to match your property. Poly-carbonate sheet is used for roofing which is 2mm in thickness.",
    features: [
      "Door & window protection",
      "99.9% UV protected",
      "2mm poly-carbonate roofing",
      "Straight & curved options",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    tags: ["Window Guard", "99.9% UV Block", "Sun & Hail Protection"],
  },
  {
    id: "window-canopy",
    name: "Window Canopy",
    category: "canopy",
    description: "Window and door Canopy made of durable polycarbonate sheet and aluminum alloy material, functionality design is easy to install. Modern and simple appearance makes it perfect to match your home and outdoor decor, protect your doors and windows from the sun, rain and harmful UV rays. Window Pergola is the Perfect extension for your doors and window which gives protection for sun ,hail and wind. We got 2 designs of Window /Door Pergola , the curved at the end design and a straight design. Different varieties of color options are available to match your property. 2mm thickness poly-carbonate for the roofing which is 99.9% UV protected.",
    features: [
      "Door & window protection",
      "99.9% UV protected",
      "2mm poly-carbonate roofing",
      "Straight & curved options",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    tags: ["Window Guard", "99.9% UV Block", "Sun & Hail Protection"],
  },
  {
    id: "ziptrak-blinds",
    name: "Ziptrak Outdoor Blinds",
    category: "blinds",
    description: "Patented track-guided outdoor blind system locking into side channels. Eliminates flapping mesh, gaps, and cumbersome ropes.",
    features: [
      "Track-guided guidance",
      "Zero gap side seal",
      "Marine PVC or mesh",
      "Instant lock bottom bar",
    ],
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Stone Mesh", hex: "#8C8C8C" },
      { name: "Clear PVC", hex: "#FFFFFF" },
    ],
    image: "/images/product-blinds.png",
    tags: ["Ziptrak System", "Zero Gap", "Wind Resistant"],
  },
  {
    id: "easychannel-blinds",
    name: "EasyChannel Outdoor Blind",
    category: "blinds",
    description: "Canopy-Tech EasyChannel system offering smooth vertical guidance for patio and deck weather enclosures.",
    features: [
      "Precision side channels",
      "Smooth spring tension",
      "Heavy sunscreen mesh",
      "Weather stripping seal",
    ],
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Stone Mesh", hex: "#8C8C8C" },
    ],
    image: "/images/product-blinds.png",
    tags: ["EasyChannel", "Canopy-Tech", "Weather Seal"],
  },
  {
    id: "easytrack-blinds",
    name: "EasyTrack Outdoor Blind",
    category: "blinds",
    description: "Friction-guided outdoor blind providing custom height positioning and effortless insect and sun protection.",
    features: [
      "Friction-fit height lock",
      "Marine grade parts",
      "High UV resistance mesh",
      "Custom powder coated",
    ],
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Cream Sunscreen", hex: "#E6E6D8" },
    ],
    image: "/images/product-blinds.png",
    tags: ["EasyTrack", "Smooth Gliding", "Insect Barrier"],
  },
  {
    id: "arch-carport",
    name: "Arch Carport",
    category: "carport",
    description: "Arch carport is a stunning addition to any property. Arched structure provides more outdoor space for backyards, front of house, or car parking. Micro powder coated with 2mm poly-carbonate sheets protecting from sun, rain and hail, engineered for NZ wind speeds.",
    features: [
      "Arched high-clearance design",
      "2mm poly-carbonate roofing",
      "Sun, rain & hail protection",
      "Engineered for NZ wind speeds",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-carport.png",
    tags: ["Arch Carport", "Sun/Rain/Hail", "NZ Wind Speed Rated"],
  },
  {
    id: "straight-carport",
    name: "Straight Carport",
    category: "carport",
    description: "Straight carport is a stunning addition to any property. Arched structure provides more outdoor space for backyards, front of house, or car parking. Micro powder coated with 2mm poly-carbonate sheets protecting from sun, rain and hail, engineered for NZ wind speeds.",
    features: [
      "Clean straight-roof design",
      "2mm poly-carbonate roofing",
      "Sun, rain & hail protection",
      "Engineered for NZ wind speeds",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-carport.png",
    tags: ["Straight Carport", "Sun/Rain/Hail", "NZ Wind Speed Rated"],
  },
  {
    id: "outdoor-shutter",
    name: "Outdoor Shutter",
    category: "shutter",
    description: "Heavy-duty aluminium louvre shutters designed for balcony privacy, wind buffering, and security on decks and patios.",
    features: [
      "Operable or fixed blades",
      "Marine-grade powder coat",
      "Wind lock safety latches",
      "Custom site dimensions",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    tags: ["Aluminium Shutter", "Privacy Control", "Wind Barrier"],
  },
  {
    id: "sunroom",
    name: "Sunroom",
    category: "sunroom",
    description: "Fully enclosed outdoor room featuring double-glazed glass sliding doors and insulated roof panels for year-round indoor-outdoor living.",
    features: [
      "Double-glazed sliding doors",
      "Insulated thermal roof panels",
      "Integrated lighting & power",
      "100% weather-sealed enclosure",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/about-install.png",
    tags: ["All-Weather Room", "Enclosed Sunroom", "Double Glazed"],
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
