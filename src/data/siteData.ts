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
    value: 15,
    suffix: "+",
    label: "Years of Craftsmanship",
    description: "Designing weather-resistant structures for NZ environments.",
  },
  {
    id: "projects",
    value: 2500,
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
    features: ["99% UV filtering", "Impact resistant roofs", "Auckland to Queenstown ratings", "Seamless wall attaches"],
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
    id: "maintenance",
    title: "Care & Maintenance",
    description: "Professional cleaning, powder-coat restoration, electrical diagnostics, and motor tuning for existing installations.",
    icon: "Wrench",
    features: ["Annual safety checks", "Motor synchronization", "Powder-coat cleaning", "Gutter clearing"],
  },
];

export const productsData: ProductItem[] = [
  {
    id: "apex-louvre",
    name: "Apex Louvre Pergola",
    category: "pergolas",
    description: "Our signature motorized louvre roof system. With the press of a button, adjust the double-walled blades for complete sunlight control or full rain shelter. Features smart wind and rain sensors that close the louvres automatically when it starts to drizzle.",
    features: [
      "Double-walled structural louvres",
      "Hidden internal post drainage",
      "Smart rain sensors & motorization",
      "Dimmable built-in LED lighting",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Slate Gray", hex: "#5A5D64" },
      { name: "Bronze Bronze", hex: "#4D3F37" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-louvre.png",
    tags: ["Motorized", "Best Seller", "Smart Home Ready", "AS/NZS Tested"],
  },
  {
    id: "horizon-canopy",
    name: "Horizon Fixed Canopy",
    category: "canopies",
    description: "An elegant, architectural fixed roof shelter that utilizes multi-wall polycarbonate or laminated safety glass. Perfect for commercial venues or homes wanting 24/7 patio usage without sacrificing natural light. Tested to withstand NZ's highest snow loads.",
    features: [
      "99% UV block with heat reduction layers",
      "Corrosion-free T6 grade aluminium",
      "Integrated structural gutters",
      "Supports side blind integrations",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Sandstone", hex: "#C8BCA6" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-canopy.png",
    tags: ["High Light", "Snow Rated", "Zero Maintenance"],
  },
  {
    id: "ziptrak-blinds",
    name: "Ziptrak Comfort Blinds",
    category: "blinds",
    description: "Track-guided blind system that locks into custom side tracks. Eliminates flapping mesh, gaps, and traditional cords or cranks. Glides up and down smoothly and can be left at any height. Offers complete shelter from harsh Canterbury winds or coastal gales.",
    features: [
      "Patented splash-proof track seal",
      "Premium mesh or transparent Japanese PVC",
      "Instant lock bottom bar",
      "Complete insect and UV barrier",
    ],
    swatches: [
      { name: "Charcoal Mesh", hex: "#1A1A1A" },
      { name: "Stone Mesh", hex: "#8C8C8C" },
      { name: "Cream Sunscreen", hex: "#E6E6D8" },
      { name: "Clear PVC", hex: "#FFFFFF" },
    ],
    image: "/images/product-blinds.png",
    tags: ["Wind Resistant", "No Gaps", "Manual/Motorized"],
  },
  {
    id: "metro-carport",
    name: "Metro Cantilever Carport",
    category: "carports",
    description: "A minimalist vehicle cover featuring heavy-duty structural steel pillars on one side, keeping the other side open for effortless parking. Ideal for tight driveways or architectural properties looking for a high-end alternative to a traditional garage.",
    features: [
      "Cantilever design maximizes space",
      "150km/h wind speed certification",
      "Anti-condensation structural ceiling",
      "Polycarbonate panels block hail & UV",
    ],
    swatches: [
      { name: "Matte Charcoal", hex: "#2D2E30" },
      { name: "Arctic White", hex: "#F3F4F6" },
    ],
    image: "/images/product-carport.png",
    tags: ["Space Saver", "Heavy Duty", "Minimalist"],
  },
];

export const processData: ProcessItem[] = [
  {
    step: "01",
    title: "On-Site Consultation",
    description: "We visit your property across New Zealand to measure your space, analyze wind zones, solar angles, and local micro-climates, aligning on a solution that complements your lifestyle.",
    icon: "ChatCircleText",
  },
  {
    step: "02",
    title: "3D Design & Precise Quote",
    description: "Our design engineers create a realistic 3D model of your home with the proposed structure. We supply full structural designs along with a transparent, fixed-price quote.",
    icon: "Desktop",
  },
  {
    step: "03",
    title: "NZ-Based Manufacture",
    description: "Every pergola and blind is custom-crafted to your specific dimensions in our state-of-the-art facility, utilizing local structural engineering standards and premium materials.",
    icon: "Factory",
  },
  {
    step: "04",
    title: "Certified Installation",
    description: "Our professional installation crew fits the components, safely anchors the structure to withstand heavy gales, integrates smart electronics, and leaves the workspace spotless.",
    icon: "ShieldCheck",
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
  phone: "+64 22 420 2266",
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
