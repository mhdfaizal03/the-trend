/**
 * The Trends - Complete Product & Category Catalog
 * Exactly matching user specification table with comprehensive products and high-resolution assets
 */

const CATEGORIES_DATA = {
  iphone: {
    id: 'iphone',
    name: 'iPhone',
    collectionName: 'Mobile Phone',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'MOBILE PHONE',
    bannerImage: 'assets/img6.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'phone-cases', name: 'Phone Cases', filterKey: 'Case', image: 'assets/case1.png' },
      { id: 'screen-protectors', name: 'Screen Protectors', filterKey: 'Screen', image: 'assets/screen_protector.jpg' },
      { id: 'lens-guard', name: 'Lens Guard', filterKey: 'Lens', image: 'assets/lens_guard.jpg' }
    ]
  },
  ipad: {
    id: 'ipad',
    name: 'iPad',
    collectionName: 'Tablet Case',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'IPAD & TABLETS',
    bannerImage: 'assets/ipad_origami_case.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'ipad-cases', name: 'iPad Cases', filterKey: 'iPad', image: 'assets/ipad_origami_case.jpg' },
      { id: 'screen-protectors', name: 'Screen Protectors', filterKey: 'Screen', image: 'assets/screen_protector.jpg' },
      { id: 'pencil-holders', name: 'Pencil & Stands', filterKey: 'Holder', image: 'assets/cat4.jpg' }
    ]
  },
  watch: {
    id: 'watch',
    name: 'Apple Watch',
    collectionName: 'Apple Watch',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'APPLE WATCH',
    bannerImage: 'assets/hero4.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'watch-ultra', name: 'Watch Ultra', filterKey: 'Ultra', image: 'assets/watch_ultra.jpg' },
      { id: 'watch-bands', name: 'Watch Bands', filterKey: 'Band', image: 'assets/watch_chroma_band.jpg' },
      { id: 'watch-armor', name: 'Watch Armor', filterKey: 'Armor', image: 'assets/watch_ultra.jpg' }
    ]
  },
  macbook: {
    id: 'macbook',
    name: 'Macbook',
    collectionName: 'Mac Book',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'MACBOOK',
    bannerImage: 'assets/img1.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'macbook-cases', name: 'Hard Shells', filterKey: 'MacBook', image: 'assets/mb_carbon.jpg' },
      { id: 'leather-sleeves', name: 'Leather Sleeves', filterKey: 'Leather', image: 'assets/mb_leather.jpg' },
      { id: 'clear-cases', name: 'Clear Covers', filterKey: 'Clear', image: 'assets/mb_clear.jpg' }
    ]
  },
  strap: {
    id: 'strap',
    name: 'Phone Straps',
    collectionName: 'Phone Straps',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'PHONE STRAPS',
    bannerImage: 'assets/img4.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'utility-strap', name: 'Utility Straps', filterKey: 'Utility', image: 'assets/utility_strap.jpg' },
      { id: 'wrist-strap', name: 'Wrist Straps', filterKey: 'Wrist', image: 'assets/phone_wrist_strap.jpg' },
      { id: 'sacoche-bag', name: 'Sacoche Bags', filterKey: 'Sacoche', image: 'assets/sacoche_bag.jpg' }
    ]
  },
  airpods: {
    id: 'airpods',
    name: 'AirPods',
    collectionName: 'AirPods Cases',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'AIRPODS',
    bannerImage: 'assets/airpods_pro3_pitaka.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'airpods-pro-3', name: 'AirPods Pro 3', filterKey: 'pro 3', image: 'assets/airpods_pro3_pitaka.jpg' },
      { id: 'airpods-pro-2', name: 'AirPods Pro 1/2', filterKey: 'pro 1', image: 'assets/airpods_pro_leather.jpg' },
      { id: 'airpods-4', name: 'AirPods 4', filterKey: '4', image: 'assets/airpods4_clear.jpg' }
    ]
  },
  powerbank: {
    id: 'powerbank',
    name: 'Power Bank',
    collectionName: 'Power Bank & Charging',
    heroPreTitle: 'CATEGORY',
    heroMainTitle: 'POWER BANK',
    bannerImage: 'assets/powerbank_5k_slim.jpg',
    models: [
      { id: 'all', name: 'All' },
      { id: 'magnetic-powerbank', name: 'Power Banks', filterKey: 'Powerbank', image: 'assets/powerbank_5k_slim.jpg' },
      { id: 'wireless-charging', name: 'Wireless Chargers', filterKey: 'Wireless', image: 'assets/wireless_charger.jpg' },
      { id: 'fast-cables', name: 'Fast Cables', filterKey: 'Cable', image: 'assets/cable_100w_silicone.jpg' }
    ]
  }
};

const PRODUCTS_DATA = [
  // ================= 1. iPhone =================
  {
    id: 'ip17-edge',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'iPhone 17 series',
    name: 'Edge Armor Titanium Case',
    price: 39,
    badge: 'New',
    image: 'assets/case1.png',
    thumbnails: ['assets/case1.png', 'assets/case_plot.jpg', 'assets/case_boarding.jpg'],
    description: 'Experience aerospace-grade titanium framing with ultra-thin aramid backplate. Precision engineered for iPhone 17 series durability, MagSafe charging, and responsive tactile buttons.',
    colors: [
      { name: 'Silver Gray', hex: '#A8A8A8' },
      { name: 'Matte Black', hex: '#000000' },
      { name: 'Crimson Red', hex: '#C92C2C' },
      { name: 'Cobalt Blue', hex: '#1E65B5' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['Ultra-Lightweight Titanium Frame', 'Scratch-Resistant Matte Finish', 'Raised Camera Ring Protection', 'Precision Tactile Button Cutouts', 'Strong MagSafe Magnetic Array', 'Drop Tested up to 12ft']
  },
  {
    id: 'ip17-magez',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'iPhone 17 series',
    name: 'MagEZ Tactile Carbon Weave',
    price: 42,
    badge: 'New',
    image: 'assets/case_plot.jpg',
    thumbnails: ['assets/case_plot.jpg', 'assets/case1.png', 'assets/case_boarding.jpg'],
    description: 'Constructed from 1500D genuine aramid fiber with a 3D textured tactile grip. Slim as a coin, featherlight, and fully MagSafe compatible for wireless charging and magnetic mounts.',
    colors: [
      { name: 'Sunset Weave', hex: '#2A2A2A' },
      { name: 'Raw Carbon', hex: '#111111' },
      { name: 'Ocean Blue', hex: '#1A365D' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['Genuine 1500D Aramid Fiber', '0.95mm Ultra-Thin Profile', '3D Non-Slip Grip Texture', 'Wireless & MagSafe Charging Ready', 'Seamless Chamfered Edges']
  },
  {
    id: 'ip17-titanium',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'iPhone 17 series',
    name: 'Mageasy Titanium Shield Case',
    price: 34,
    badge: 'New',
    image: 'assets/hero2.png',
    thumbnails: ['assets/hero2.png', 'assets/case1.png', 'assets/case_pitaka_sunset.jpg'],
    description: 'Engineered with reinforced aluminum alloy lens corners and dual-layer shock absorbing TPU for rugged everyday adventures without bulk.',
    colors: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Silver Slate', hex: '#D1D5DB' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['Reinforced Metal Lens Guard', 'Military Grade Drop Protection', 'Anti-Yellowing UV Coating', 'Air Cushion Bumper Corners']
  },
  {
    id: 'ip16-frosted',
    category: 'iphone',
    subCategory: 'iPhone 16 series',
    device: 'iPhone 16 series',
    name: 'MagSafe Frosted Matte Hybrid',
    price: 32,
    badge: 'New',
    image: 'assets/hero3.png',
    thumbnails: ['assets/hero3.png', 'assets/case_matcha.jpg', 'assets/case1.png'],
    description: 'Translucent frosted matte polycarbonate backplate resists greasy fingerprints while showcasing your iPhone 16 color with subtle elegance.',
    colors: [
      { name: 'Frosted Clear', hex: '#E2E8F0' },
      { name: 'Smoky Charcoal', hex: '#334155' },
      { name: 'Midnight Navy', hex: '#1E293B' }
    ],
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
    features: ['Anti-Fingerprint Oleophobic Coating', 'Integrated N52 Strong Neodymium Magnets', 'Soft TPU Grip Bumper', 'Screen Lip Overlap']
  },
  {
    id: 'ip17-plot',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'Apple Iphone 17',
    name: 'Edge Design',
    price: 34,
    badge: 'New',
    image: 'assets/case_plot.jpg',
    thumbnails: ['assets/case_plot.jpg', 'assets/case_boarding.jpg', 'assets/case_tarot.jpg'],
    description: 'Viral retro diner receipt aesthetic "DO IT FOR THE PLOT" graphic case. Features raised camera ring defense, high-definition UV scratch-resistant backplate, and textured matte black grip bumper.',
    colors: [
      { name: 'Silver Gray', hex: '#A8A8A8' },
      { name: 'Matte Black', hex: '#000000' },
      { name: 'Crimson Red', hex: '#C92C2C' },
      { name: 'Cobalt Blue', hex: '#1E65B5' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['Viral "Do It For The Plot" Graphic Print', 'Shock-Absorbing Matte Black Bumper Frame', 'Reinforced Raised Camera Bezel Lip', 'MagSafe Compatible Magnetic Array', 'Scratch-Proof Matte Anti-Yellowing UV Layer']
  },
  {
    id: 'ip17-boarding',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'iPhone 17 series',
    name: 'Tokyo Flight Boarding Pass Case',
    price: 34,
    badge: 'New',
    image: 'assets/case_boarding.jpg',
    thumbnails: ['assets/case_boarding.jpg', 'assets/case_plot.jpg', 'assets/case_matcha.jpg'],
    description: 'Minimalist international airline luggage tag and boarding pass graphic design. High-contrast typography printed onto high-grade polycarbonate with shockproof bumper.',
    colors: [
      { name: 'Flight White', hex: '#FFFFFF' },
      { name: 'Dark Terminal', hex: '#111827' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['Custom Airport Boarding Pass Art', 'Dual-Layer Impact Defense Frame', 'Tactile Textured Side Grips', 'MagSafe Wireless Charging Support']
  },
  {
    id: 'ip16-matcha',
    category: 'iphone',
    subCategory: 'iPhone 16 series',
    device: 'iPhone 16 series',
    name: 'Matcha Latte Aesthetic Daily Case',
    price: 32,
    badge: 'New',
    image: 'assets/case_matcha.jpg',
    thumbnails: ['assets/case_matcha.jpg', 'assets/case_tarot.jpg', 'assets/case_plot.jpg'],
    description: 'Cozy cafe vibes with vintage typography and creamy matcha latte art. Designed with protective raised camera bevels and textured non-slip edges.',
    colors: [
      { name: 'Matcha Forest', hex: '#2D4A22' },
      { name: 'Cream Foam', hex: '#F7F4EB' }
    ],
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
    features: ['Retro Cafe Aesthetic Art Print', 'Anti-Fingerprint Oleophobic Coating', 'Corner Cushion Drop Shield', 'Wireless Charging Friendly']
  },
  {
    id: 'ip16-tarot',
    category: 'iphone',
    subCategory: 'iPhone 16 series',
    device: 'iPhone 16 series',
    name: 'The Sun & Moon Celestial Tarot Case',
    price: 34,
    badge: 'New',
    image: 'assets/case_tarot.jpg',
    thumbnails: ['assets/case_tarot.jpg', 'assets/case_plot.jpg', 'assets/case_boarding.jpg'],
    description: 'Mystical vintage celestial tarot card artwork featuring The Sun and The Moon. Embossed detailed illustration on durable shock-resistant hybrid casing.',
    colors: [
      { name: 'Antique Parchment', hex: '#EDE6D6' },
      { name: 'Midnight Mystique', hex: '#18181B' }
    ],
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
    features: ['Celestial Vintage Tarot Illustration', 'High-Definition UV Anti-Fade Colors', 'Reinforced Camera Guard', 'Comfort Ergonomic Side Grip']
  },
  {
    id: 'ip17-lens-sapphire',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'iPhone 17 series',
    name: 'Sapphire Crystal Camera Lens Guard (Set of 3)',
    price: 22,
    badge: 'New',
    image: 'assets/lens_guard.jpg',
    thumbnails: ['assets/lens_guard.jpg', 'assets/hero2.png', 'assets/screen_protector.jpg'],
    description: 'Ultra-clear 9M Mohs hardness synthetic sapphire camera lens protector ring with titanium alloy border. 99.9% optical transparency ensures zero flash flare or image distortion.',
    colors: [
      { name: 'Natural Titanium', hex: '#78716C' },
      { name: 'Space Black', hex: '#000000' },
      { name: 'Silver Starlight', hex: '#E5E5E5' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['9M Mohs Hardness Synthetic Sapphire', 'Anti-Reflective AR Coating (No Flare)', 'CNC Aviation Aluminum Alloy Bezel', 'Oleophobic Oil & Smudge Resistant']
  },
  {
    id: 'ip17-screen-diamond',
    category: 'iphone',
    subCategory: 'iPhone 17 series',
    device: 'iPhone 17 series',
    name: 'DiamondShield 9H Tempered Glass Screen Protector',
    price: 24,
    badge: 'New',
    image: 'assets/screen_protector.jpg',
    thumbnails: ['assets/screen_protector.jpg', 'assets/lens_guard.jpg', 'assets/case1.png'],
    description: 'Double-tempered shatterproof screen protector with 2.5D curved silk-printed edges, auto-align installation tray, and ultra-smooth electroplated oleophobic coating.',
    colors: [
      { name: 'Crystal Clear Edge', hex: '#FFFFFF' },
      { name: 'Black Border Shield', hex: '#000000' }
    ],
    devices: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone 17 Plus', 'iPhone 17'],
    features: ['Double-Tempered 9H Hardness Glass', 'Includes Auto-Alignment Easy-Fit Tray', 'Bubble-Free Static Adhesion Layer', 'Case-Friendly Edge Tolerance']
  },
  {
    id: 'ip16-screen-privacy',
    category: 'iphone',
    subCategory: 'iPhone 16 series',
    device: 'iPhone 16 series',
    name: 'Privacy 28° Anti-Spy Tempered Glass Screen Guard',
    price: 26,
    badge: 'New',
    image: 'assets/screen_protector.jpg',
    thumbnails: ['assets/screen_protector.jpg', 'assets/lens_guard.jpg', 'assets/case_tarot.jpg'],
    description: 'Advanced 28-degree narrow field-of-view micro-louver technology blocks side peeking in public while maintaining crisp HD resolution from straight on.',
    colors: [
      { name: 'Privacy Tint Black', hex: '#111827' }
    ],
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
    features: ['28° Two-Way Narrow Angle Privacy Filter', '9H Military Drop Shatterproof Glass', 'Smooth 3D Touch Sensitivity', 'Anti-Fingerprint Hydrophobic Layer']
  },
  {
    id: 'ip16-pitaka',
    category: 'iphone',
    subCategory: 'iPhone 16 series',
    device: 'iPhone 16 series',
    name: 'PITAKA Sunset Series Case',
    price: 45,
    badge: 'New',
    image: 'assets/case_pitaka_sunset.jpg',
    thumbnails: ['assets/case_pitaka_sunset.jpg', 'assets/case1.png', 'assets/case_plot.jpg'],
    description: 'Woven using PITAKA patented Fusion Weaving technology. Inspired by twilight gradients, it combines exquisite artistry with unbeatable aramid strength.',
    colors: [
      { name: 'Sunset Twilight', hex: '#7C2D12' },
      { name: 'Moonrise Indigo', hex: '#1E1B4B' }
    ],
    devices: ['iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16'],
    features: ['Fusion Weaving Craftsmanship', 'Skin-Friendly Soft Touch Feel', 'Zero Signal Interference', 'Ultra Lightweight 18g']
  },

  // ================= 2. iPad =================
  {
    id: 'ipad-pro13-origami',
    category: 'ipad',
    subCategory: 'iPad Pro 13" (M5,M4)',
    device: 'iPad Pro 13" (M5,M4)',
    name: 'Mageasy Origami Multi-Fold 13"',
    price: 58,
    badge: 'New',
    image: 'assets/ipad_origami_case.jpg',
    thumbnails: ['assets/ipad_origami_case.jpg', 'assets/screen_protector.jpg', 'assets/cat4.jpg'],
    description: 'Versatile 4-angle origami folding cover for portrait reading, typing, drawing, and landscape viewing. Supports Apple Pencil Pro charging slot.',
    colors: [
      { name: 'Charcoal Black', hex: '#18181B' },
      { name: 'Alaskan Blue', hex: '#3B82F6' },
      { name: 'Stone Gray', hex: '#71717A' }
    ],
    devices: ['iPad Pro 13" (M5,M4)'],
    features: ['4-Way Origami Stand Support', 'Apple Pencil Magnetic Charging Flap', 'Auto Sleep/Wake Sensor', 'Shock-Resistant Microfiber Lining']
  },
  {
    id: 'ipad-pro11-origami',
    category: 'ipad',
    subCategory: 'iPad Pro 11" (M5,M4)',
    device: 'iPad Pro 11" (M5,M4)',
    name: 'Mageasy Origami Smart Folio 11"',
    price: 52,
    badge: 'New',
    image: 'assets/ipad_origami_case.jpg',
    thumbnails: ['assets/ipad_origami_case.jpg', 'assets/screen_protector.jpg', 'assets/cat4.jpg'],
    description: 'Slim magnetic snap-on folio case designed for high productivity on iPad Pro 11". Detach instantly when mounting on Magic Keyboard.',
    colors: [
      { name: 'Carbon Black', hex: '#09090B' },
      { name: 'Classic White', hex: '#F4F4F5' }
    ],
    devices: ['iPad Pro 11" (M5,M4)'],
    features: ['Magic Keyboard Compatible', 'Magnetic Fast Snap-On Attachment', 'Ultra-Lightweight 130g', 'Dual Landscape & Portrait Angles']
  },
  {
    id: 'ipad-air13-smart',
    category: 'ipad',
    subCategory: 'iPad Air 13" (M4,M3,M2)',
    device: 'iPad Air 13" (M4,M3,M2)',
    name: 'Smart Magnetic Trifold Cover 13"',
    price: 48,
    badge: 'New',
    image: 'assets/ipad_origami_case.jpg',
    thumbnails: ['assets/ipad_origami_case.jpg', 'assets/screen_protector.jpg', 'assets/cat4.jpg'],
    description: 'Minimalist magnetic tri-fold case with soft polyurethane touch, micro-fiber lining, and reinforced edge bumpers against accidental falls.',
    colors: [
      { name: 'Midnight', hex: '#0F172A' },
      { name: 'Pine Green', hex: '#064E3B' },
      { name: 'Starlight', hex: '#FEF3C7' }
    ],
    devices: ['iPad Air 13" (M4,M3,M2)'],
    features: ['Instant Magnetic Attachment', 'Ergonomic 65° & 30° Dual Viewing Angles', 'Scratch-Proof Soft Microfiber Inner', 'Pencil Clasp Protection']
  },
  {
    id: 'ipad-air11-smart',
    category: 'ipad',
    subCategory: 'iPad Air 11" (M4,M3,M2)',
    device: 'iPad Air 11" (M4,M3,M2)',
    name: 'Ultra-Slim Magnetic Case 11"',
    price: 44,
    badge: 'New',
    image: 'assets/ipad_origami_case.jpg',
    thumbnails: ['assets/ipad_origami_case.jpg', 'assets/screen_protector.jpg', 'assets/cat4.jpg'],
    description: 'Featherlight shockproof protective cover customized for iPad Air 11". Keeps device safe during travel, meetings, and daily creative sessions.',
    colors: [
      { name: 'Space Gray', hex: '#374151' },
      { name: 'Sky Blue', hex: '#60A5FA' }
    ],
    devices: ['iPad Air 11" (M4,M3,M2)'],
    features: ['Auto Sleep/Wake Function', 'Magnetic Pencil Lock', 'Full Edge Protection']
  },
  {
    id: 'ipad-11-folio',
    category: 'ipad',
    subCategory: 'iPad 11" (A16)',
    device: 'iPad 11" (A16)',
    name: 'Clear Back Smart Folio iPad 11"',
    price: 38,
    badge: 'New',
    image: 'assets/ipad_origami_case.jpg',
    thumbnails: ['assets/ipad_origami_case.jpg', 'assets/screen_protector.jpg', 'assets/cat4.jpg'],
    description: 'Combines a crystal clear scratch-resistant backplate with a responsive origami front cover to protect and showcase your iPad 11.',
    colors: [
      { name: 'Charcoal Black', hex: '#18181B' },
      { name: 'Rose Pink', hex: '#F43F5E' }
    ],
    devices: ['iPad 11" (A16)'],
    features: ['Crystal Clear Rigid Back', 'Multi-Angle Viewing', 'Reinforced TPU Corners']
  },
  {
    id: 'ipad-mini-rugged',
    category: 'ipad',
    subCategory: 'iPad mini 6 / 7',
    device: 'iPad mini 6 / 7',
    name: 'Rugged Armor Grip & Stand mini 6/7',
    price: 36,
    badge: 'New',
    image: 'assets/ipad_origami_case.jpg',
    thumbnails: ['assets/ipad_origami_case.jpg', 'assets/screen_protector.jpg', 'assets/cat4.jpg'],
    description: 'Compact rugged armor designed for portable everyday notes, travel, and gaming. Features built-in kickstand and secure Pencil loop.',
    colors: [
      { name: 'Matte Stealth', hex: '#18181B' },
      { name: 'Military Olive', hex: '#365314' }
    ],
    devices: ['iPad mini 6 / 7'],
    features: ['Integrated 360° Rotating Kickstand', 'Corner Air Cushion Drop Tech', 'Apple Pencil Recessed Slot', 'Easy Grip Honeycomb Texture']
  },

  // ================= 3. Apple Watch =================
  {
    id: 'watch-u3-titanium',
    category: 'watch',
    subCategory: 'Watch ultra 3',
    device: 'Watch ultra 3',
    name: 'Titanium Armor Case Watch Ultra 3',
    price: 42,
    badge: 'New',
    image: 'assets/watch_ultra.jpg',
    thumbnails: ['assets/watch_ultra.jpg', 'assets/cat3.png', 'assets/hero4.jpg'],
    description: 'Aerospace-grade titanium shielding custom forged for Apple Watch Ultra 3. Features raised bezel defense against rock scuffs and impact.',
    colors: [
      { name: 'Natural Titanium', hex: '#78716C' },
      { name: 'Stealth Black', hex: '#1C1917' }
    ],
    devices: ['Watch ultra 3 (49mm)'],
    features: ['Aerospace Grade CNC Titanium', 'Screen Edge Defense Lip', 'Tactile Crown & Action Cutout', 'Waterproof Trail Ready']
  },
  {
    id: 'watch-u2-ocean',
    category: 'watch',
    subCategory: 'Watch ultra 2',
    device: 'Watch ultra 2',
    name: 'Titanium Rugged Bumper Ultra 2',
    price: 38,
    badge: 'New',
    image: 'assets/watch_ultra.jpg',
    thumbnails: ['assets/watch_ultra.jpg', 'assets/cat3.png', 'assets/hero4.jpg'],
    description: 'Precision CNC-machined titanium shell shield for Apple Watch Ultra 2. Shields screen and digital crown during extreme outdoor activities.',
    colors: [
      { name: 'Natural Titanium', hex: '#78716C' },
      { name: 'Deep Black', hex: '#111827' }
    ],
    devices: ['Watch ultra 2 (49mm)'],
    features: ['Real Titanium Construction', 'Snap-On Precision Fit', 'Zero Signal Interference']
  },
  {
    id: 'watch-11-chroma',
    category: 'watch',
    subCategory: 'Watch 11',
    device: 'Watch 11',
    name: 'Chroma Sport Breathable Band Watch 11',
    price: 29,
    badge: 'New',
    image: 'assets/watch_chroma_band.jpg',
    thumbnails: ['assets/watch_chroma_band.jpg', 'assets/watch_ultra.jpg', 'assets/hero4.jpg'],
    description: 'Fluoroelastomer high-performance sport band with micro-ventilation ridges. Sweat-proof, waterproof, and ultra-comfortable all day.',
    colors: [
      { name: 'Jet Black', hex: '#000000' },
      { name: 'Starlight Beige', hex: '#E5E5E5' },
      { name: 'Ocean Orange', hex: '#EA580C' }
    ],
    devices: ['Watch 11 (46mm/42mm)'],
    features: ['High-Performance Fluoroelastomer', 'Sweat & Water Resistant Ridges', 'Pin-and-Tuck Secure Closure', 'Skin-Friendly Hypoallergenic']
  },
  {
    id: 'watch-strap-ocean',
    category: 'watch',
    subCategory: 'Watch ultra 3',
    device: 'Watch ultra 3',
    name: 'Rugged Wave Ocean Loop Fluororubber Strap',
    price: 34,
    badge: 'New',
    image: 'assets/watch_chroma_band.jpg',
    thumbnails: ['assets/watch_chroma_band.jpg', 'assets/watch_ultra.jpg', 'assets/hero4.jpg'],
    description: 'Molded from high-performance elastomer with a tubular geometry that stretches for a perfect fit, even over a wetsuit. Titanium buckle secures the strap during high-speed water sports.',
    colors: [
      { name: 'Safety Orange', hex: '#EA580C' },
      { name: 'Midnight Navy', hex: '#1E293B' },
      { name: 'Starlight White', hex: '#F8FAFC' }
    ],
    devices: ['Watch ultra 3 (49mm)', 'Watch ultra 2 (49mm)', 'Series 11/10 (46mm)'],
    features: ['Corrosion-Resistant Titanium Buckle', 'High-Performance Fluororubber Polymer', 'Adjustable Loop Lock Extension', 'Waterproof & Saltwater Resistant']
  },
  {
    id: 'watch-u3-glass',
    category: 'watch',
    subCategory: 'Watch ultra 3',
    device: 'Watch ultra 3',
    name: 'Ultra 3 / 2 Edge-to-Edge 9H Sapphire Screen Guard (2-Pack)',
    price: 18,
    badge: 'New',
    image: 'assets/lens_guard.jpg',
    thumbnails: ['assets/lens_guard.jpg', 'assets/watch_ultra.jpg', 'assets/screen_protector.jpg'],
    description: 'Precision-cut 9H tempered sapphire glass screen protector designed with black titanium edge bumper that fits flush with Apple Watch Ultra flat crystal face.',
    colors: [
      { name: 'Titanium Ring Border', hex: '#78716C' },
      { name: 'Black Stealth Border', hex: '#000000' }
    ],
    devices: ['Watch ultra 3 (49mm)', 'Watch ultra 2 (49mm)'],
    features: ['9H Hardness Shatterproof Tempered Glass', 'Full Edge-to-Edge Bezel Integration', '100% Touch Sensitivity Response', 'Oleophobic Oil-Resistant Coating']
  },
  {
    id: 'watch-11-curved-glass',
    category: 'watch',
    subCategory: 'Watch 11',
    device: 'Watch 11',
    name: 'Series 11/10 3D Curved Edge Tempered Screen Protector',
    price: 16,
    badge: 'New',
    image: 'assets/lens_guard.jpg',
    thumbnails: ['assets/lens_guard.jpg', 'assets/watch_chroma_band.jpg', 'assets/watch_ultra.jpg'],
    description: 'Thermoformed 3D curved full coverage screen shield that hugs the rounded OLED glass of Series 11 & 10 without peeling or bubbles.',
    colors: [
      { name: 'Black Edge Ring', hex: '#000000' }
    ],
    devices: ['Watch 11 (46mm/42mm)', 'Watch 10 (46mm/42mm)'],
    features: ['3D Heat-Bent Curved Edge Coverage', 'Self-Healing PMMA Hybrid Glass', 'Anti-Glare High Clarity Optical Layer', 'Bubble-Free Auto Installation Kit']
  },
  {
    id: 'watch-10-matte',
    category: 'watch',
    subCategory: 'Watch 10',
    device: 'Watch 10',
    name: 'Matte Minimalist Case Series 10',
    price: 26,
    badge: 'New',
    image: 'assets/watch_ultra.jpg',
    thumbnails: ['assets/watch_ultra.jpg', 'assets/watch_chroma_band.jpg', 'assets/hero4.jpg'],
    description: 'Featherlight 100% genuine aramid fiber casing that snaps seamlessly over your Series 10 to shield edges against daily dings and scuffs.',
    colors: [
      { name: 'Carbon Black', hex: '#111111' },
      { name: 'Silver Gray', hex: '#9CA3AF' }
    ],
    devices: ['Watch 10 (46mm/42mm)'],
    features: ['Real Aramid Fiber Material', 'Weighs Less Than 1g', 'Wireless Charging Compatible', 'Precision Edge Protection']
  },

  // ================= 4. Macbook =================
  {
    id: 'mb-pro16-carbon',
    category: 'macbook',
    subCategory: 'MacBook pro 16"',
    device: 'MacBook pro 16"',
    name: 'Forged Carbon Fiber Armor Shell 16"',
    price: 68,
    badge: 'New',
    image: 'assets/mb_carbon.jpg',
    thumbnails: ['assets/mb_carbon.jpg', 'assets/macbook_case.jpg', 'assets/mb_leather.jpg'],
    description: 'Ultra-durable forged carbon fiber weave protective hard shell custom molded for MacBook Pro 16". Provides extreme scratch resistance, low profile thermal vents, and non-slip rubberized feet.',
    colors: [
      { name: 'Matte Carbon', hex: '#111111' },
      { name: 'Raw Weave', hex: '#262626' }
    ],
    devices: ['MacBook pro 16" (M1-M4 Max/Pro)'],
    features: ['Real Carbon Fiber Texture', 'Precision Heat Dissipation Cutouts', 'Snap-On 1.1mm Slim Profile', 'Full Port & MagSafe 3 Access']
  },
  {
    id: 'mb-pro15-leather',
    category: 'macbook',
    subCategory: 'MacBook pro 15"',
    device: 'MacBook pro 15"',
    name: 'Handcrafted Tan Leather Executive Sleeve 15"',
    price: 58,
    badge: 'New',
    image: 'assets/mb_leather.jpg',
    thumbnails: ['assets/mb_leather.jpg', 'assets/cat10.jpg', 'assets/mb_carbon.jpg'],
    description: 'Handcrafted premium saddle tan leather envelope sleeve with perimeter contrast stitching, magnetic hidden auto-seal flap, and soft micro-velvet scratchproof interior.',
    colors: [
      { name: 'Saddle Tan', hex: '#B45309' },
      { name: 'Classic Espresso', hex: '#451A03' }
    ],
    devices: ['MacBook pro 15"', 'MacBook Air 15"'],
    features: ['Genuine Artisan Leather Craft', 'Magnetic Snap Auto-Seal Flap', 'Cushioned Velvet Inner Lining', 'Ultra-Slim Minimalist Profile']
  },
  {
    id: 'mb-pro14-matte',
    category: 'macbook',
    subCategory: 'MacBook pro 14"',
    device: 'MacBook pro 14"',
    name: 'Matte Frosted Snap-On Hard Shell 14"',
    price: 46,
    badge: 'New',
    image: 'assets/macbook_case.jpg',
    thumbnails: ['assets/macbook_case.jpg', 'assets/mb_carbon.jpg', 'assets/mb_clear.jpg'],
    description: 'Engineered from impact-absorbing Bayer polycarbonate with frosted matte oleophobic coating to repel oil, fingerprints, and scratches on MacBook Pro 14".',
    colors: [
      { name: 'Matte Black', hex: '#111827' },
      { name: 'Frosted Smoke', hex: '#374151' }
    ],
    devices: ['MacBook pro 14" (M1-M4)'],
    features: ['Anti-Fingerprint Frosted Coating', 'Snap-On Precision Fasteners', 'Thermal Base Airflow Grills', 'Full 135° Hinge Clearance']
  },
  {
    id: 'mb-pro13-crystal',
    category: 'macbook',
    subCategory: 'MacBook pro 13"',
    device: 'MacBook pro 13"',
    name: 'Crystal Clear Snap-On Protective Shield 13"',
    price: 38,
    badge: 'New',
    image: 'assets/mb_clear.jpg',
    thumbnails: ['assets/mb_clear.jpg', 'assets/macbook_case.jpg', 'assets/cat10.jpg'],
    description: 'Ultra-high transparency optical-grade hard shell case that lets the metallic finish and Apple logo shine through while safeguarding edges and surfaces.',
    colors: [
      { name: 'Crystal Clear', hex: '#FFFFFF' },
      { name: 'Smoky Tint', hex: '#1F2937' }
    ],
    devices: ['MacBook pro 13" (M1/M2/Intel)'],
    features: ['High-Clarity Anti-Yellowing Shield', 'Micro-Clip Snap Installation', 'Non-Slip Silicone Feet Base', 'Scratch-Proof Outer Layer']
  },
  {
    id: 'mb-air136-clear',
    category: 'macbook',
    subCategory: 'Macbook Air 13.6"',
    device: 'Macbook Air 13.6"',
    name: 'Featherlight Ultra-Clear Case Air 13.6"',
    price: 42,
    badge: 'New',
    image: 'assets/mb_clear.jpg',
    thumbnails: ['assets/mb_clear.jpg', 'assets/mb_carbon.jpg', 'assets/mb_leather.jpg'],
    description: 'Custom-tailored for the ultrabook profile of MacBook Air 13.6". Provides 360° armor protection against scuffs and falls without adding noticeable weight.',
    colors: [
      { name: 'Pure Clear', hex: '#FFFFFF' },
      { name: 'Midnight Smoke', hex: '#0F172A' }
    ],
    devices: ['Macbook Air 13.6" (M2/M3)'],
    features: ['Featherlight 0.95mm Wall Thickness', 'Precise MagSafe 3 Port Cutout', 'Reinforced Corner Bumper Latch', 'Fingerprint Resistant']
  },
  {
    id: 'mb-air13-sleeve',
    category: 'macbook',
    subCategory: 'Macbook Air 13"',
    device: 'Macbook Air 13"',
    name: 'Tomtoc Defender 360° Armor Sleeve 13"',
    price: 38,
    badge: 'New',
    image: 'assets/cat10.jpg',
    thumbnails: ['assets/cat10.jpg', 'assets/mb_leather.jpg', 'assets/mb_clear.jpg'],
    description: 'Patented CornerArmor technology with military-grade drop test certification. Thick plush fleece interior and heavy-duty water-repellent zippers.',
    colors: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Deep Black', hex: '#111827' }
    ],
    devices: ['Macbook Air 13" (M1/Intel)'],
    features: ['CornerArmor 360° Drop Shield', 'Spill-Resistant Recycled Fabric', 'Soft Bubble Velvet Interior', 'Accessory Front Organizer Pocket']
  },
  {
    id: 'mb-neo-armor',
    category: 'macbook',
    subCategory: 'Macbook Neo',
    device: 'Macbook Neo',
    name: 'Futureproof Neo Armor Carbon Bumper',
    price: 54,
    badge: 'New',
    image: 'assets/mb_carbon.jpg',
    thumbnails: ['assets/mb_carbon.jpg', 'assets/macbook_case.jpg', 'assets/mb_leather.jpg'],
    description: 'Next-generation rugged armor hybrid case featuring reinforced TPU bumper edges and textured carbon fiber outer shell for MacBook Neo.',
    colors: [
      { name: 'Carbon Black', hex: '#18181B' },
      { name: 'Titanium Gray', hex: '#64748B' }
    ],
    devices: ['Macbook Neo'],
    features: ['Reinforced TPU Impact Corners', 'Active Cooling Airflow Channel', 'Snap-Lock Edge Grip', 'Tactile Textured Exterior']
  },

  // ================= 5. Phone strap/ Lanyards =================
  {
    id: 'strap-utility-83',
    category: 'strap',
    subCategory: 'Utility strap',
    device: 'Universal Phone Compatibility',
    name: 'Mageasy 8.3mm Utility Crossbody Strap',
    price: 26,
    badge: 'New',
    image: 'assets/utility_strap.jpg',
    thumbnails: ['assets/utility_strap.jpg', 'assets/phone_wrist_strap.jpg', 'assets/img4.jpg'],
    description: 'Heavy duty 8.3mm braided paracord crossbody strap with tactical metal carabiner hardware and ultra-slim non-blocking universal phone anchor pad.',
    colors: [
      { name: 'Army Olive', hex: '#3F6212' },
      { name: 'Stealth Black', hex: '#000000' },
      { name: 'Reflective Neon', hex: '#EAB308' }
    ],
    devices: ['Universal (Fits any phone with full-coverage case)'],
    features: ['Adjustable Length 84cm to 150cm', 'Heavy Duty Zinc Alloy Carabiner', 'Ultra-Thin Phone Anchor Included', 'Unobstructed Charging Port']
  },
  {
    id: 'strap-wrist-braided',
    category: 'strap',
    subCategory: 'Phone Wrist strap',
    device: 'Universal Phone Compatibility',
    name: 'Comfort Braided Wrist Lanyard',
    price: 18,
    badge: 'New',
    image: 'assets/phone_wrist_strap.jpg',
    thumbnails: ['assets/phone_wrist_strap.jpg', 'assets/utility_strap.jpg', 'assets/img4.jpg'],
    description: 'Soft ergonomic woven wrist lanyard designed to prevent phone drops while keeping your hands free on busy streets or travel shoots.',
    colors: [
      { name: 'Midnight Weave', hex: '#1E293B' },
      { name: 'Slate Gray', hex: '#64748B' }
    ],
    devices: ['Universal (Fits all smartphones)'],
    features: ['Ergonomic Quick-Slider Adjuster', '350lb Tensile Strength Cord', 'Includes 2 Universal Anchor Cards']
  },
  {
    id: 'strap-sacoche-bag',
    category: 'strap',
    subCategory: 'Sacoche Bag',
    device: 'Universal Tech Crossbody Bag',
    name: 'Waterproof Techwear Urban Sacoche Bag',
    price: 45,
    badge: 'New',
    image: 'assets/sacoche_bag.jpg',
    thumbnails: ['assets/sacoche_bag.jpg', 'assets/utility_strap.jpg', 'assets/img4.jpg'],
    description: 'Weatherproof Cordura tactical sacoche crossbody bag with dedicated padded compartments for iPhone, MagSafe battery, passport, and AirPods.',
    colors: [
      { name: 'Matte Stealth Black', hex: '#000000' },
      { name: 'Urban Slate', hex: '#475569' }
    ],
    devices: ['Universal (Holds iPhone, Powerbank, Keys, AirPods)'],
    features: ['Waterproof YKK Sealed Zippers', 'Heavy-Duty 500D Cordura Fabric', 'Tactical Detachable Paracord Shoulder Strap', 'Multi-Pocket Modular Interior']
  },

  // ================= 6. Airpods =================
  {
    id: 'ap-pro3-pitaka',
    category: 'airpods',
    subCategory: 'Airpods pro 3',
    device: 'AirPods Pro 3',
    name: 'Pitaka MagEZ 600D Aramid Fiber Case',
    price: 38,
    badge: 'New',
    image: 'assets/airpods_pro3_pitaka.jpg',
    thumbnails: ['assets/airpods_pro3_pitaka.jpg', 'assets/airpods_pro_rugged.jpg', 'assets/cat8.jpg'],
    description: 'Precision molded from 600D aerospace aramid fiber. Retains wireless MagSafe charging alignment with a visible front charging LED and 3D tactile grip.',
    brand: 'Pitaka',
    colors: [
      { name: 'Carbon Black', hex: '#111111' },
      { name: 'Sunset Weave', hex: '#7C2D12' },
      { name: 'Moonrise Blue', hex: '#1E3A8A' }
    ],
    devices: ['AirPods Pro 3', 'Airpods pro 3'],
    features: ['100% Genuine 600D Aramid Fiber', 'MagSafe Wireless Charging Ready', 'Precision Two-Piece Design', 'Scratch Resistant Anti-Slip Grip']
  },
  {
    id: 'ap-pro3-mageasy-lock',
    category: 'airpods',
    subCategory: 'Airpods pro 3',
    device: 'AirPods Pro 3',
    name: 'Mageasy Rugged Lock Armor Case',
    price: 29,
    badge: 'New',
    image: 'assets/airpods_pro_rugged.jpg',
    thumbnails: ['assets/airpods_pro_rugged.jpg', 'assets/airpods_pro3_pitaka.jpg', 'assets/cat8.jpg'],
    description: 'Dual-layer shockproof TPU shell with pop-open safety lock latch and anodized zinc-alloy carabiner for backpacks and belt loops.',
    brand: 'Mageasy',
    colors: [
      { name: 'Stealth Black', hex: '#000000' },
      { name: 'Military Green', hex: '#14532D' },
      { name: 'Deep Navy', hex: '#1E3A8A' }
    ],
    devices: ['AirPods Pro 3', 'Airpods pro 3'],
    features: ['Secure Safety Lid Lock Latch', 'Strong MagSafe Wireless Charging Magnet', 'Includes Anodized Aluminum Carabiner', 'Speaker & Lanyard Cutout Ready']
  },
  {
    id: 'ap-pro2-pitaka-sunset',
    category: 'airpods',
    subCategory: 'Airpods pro 1/ 2',
    device: 'AirPods Pro 1/2',
    name: 'Pitaka Classic Weave MagEZ Case',
    price: 36,
    badge: 'New',
    image: 'assets/airpods_pro3_pitaka.jpg',
    thumbnails: ['assets/airpods_pro3_pitaka.jpg', 'assets/airpods_pro_leather.jpg', 'assets/cat8.jpg'],
    description: 'Form-fitted 600D aramid fiber case for AirPods Pro 2 & 1 with precision speaker cutouts and lanyard loop opening.',
    brand: 'Pitaka',
    colors: [
      { name: 'Carbon Black', hex: '#111111' },
      { name: 'Sunset Amber', hex: '#B45309' }
    ],
    devices: ['AirPods Pro 2', 'AirPods Pro 1', 'Airpods pro 1/ 2'],
    features: ['Ultra-Fine 600D Aramid Weave', 'MagSafe Fast Wireless Charging', 'Precision Speaker & Lanyard Holes', 'Zero Bulk Pocket Fit']
  },
  {
    id: 'ap-pro2-tomtoc-leather',
    category: 'airpods',
    subCategory: 'Airpods pro 1/ 2',
    device: 'AirPods Pro 1/2',
    name: 'Tomtoc Vintage Leather Protective Case',
    price: 28,
    badge: 'New',
    image: 'assets/airpods_pro_leather.jpg',
    thumbnails: ['assets/airpods_pro_leather.jpg', 'assets/airpods_pro_rugged.jpg', 'assets/airpods_pro3_pitaka.jpg'],
    description: 'Hand-crafted top grain leather case with microfiber inner lining, brass metal carabiner, and wireless charging pass-through.',
    brand: 'Tomtoc',
    colors: [
      { name: 'Saddle Brown', hex: '#78350F' },
      { name: 'Midnight Onyx', hex: '#09090B' }
    ],
    devices: ['AirPods Pro 2', 'AirPods Pro 1', 'Airpods pro 1/ 2'],
    features: ['Top-Grain Genuine Leather', 'Soft Anti-Scratch Microfiber Interior', 'Brass Keyring Clip Included', 'Wireless Charging Ready']
  },
  {
    id: 'ap4-pitaka-minimal',
    category: 'airpods',
    subCategory: 'Airpods 4',
    device: 'AirPods 4',
    name: 'Pitaka 600D Ultra-Thin Case AirPods 4',
    price: 35,
    badge: 'New',
    image: 'assets/airpods_pro3_pitaka.jpg',
    thumbnails: ['assets/airpods_pro3_pitaka.jpg', 'assets/airpods4_clear.jpg', 'assets/cat8.jpg'],
    description: 'Featherweight 600D aramid fiber cover specifically tailored for the AirPods 4 case with wireless charging and ANC speaker passthrough.',
    brand: 'Pitaka',
    colors: [
      { name: 'Raw Carbon Black', hex: '#111111' },
      { name: 'Sunset Weave', hex: '#7C2D12' }
    ],
    devices: ['AirPods 4 with ANC', 'AirPods 4 Standard', 'Airpods 4'],
    features: ['Ultra-Fine 600D Aramid Fiber', 'Slim Fit Zero Bulk', 'Visible Front LED Hole', 'Wireless Charging Friendly']
  },
  {
    id: 'ap4-mageasy-crystal',
    category: 'airpods',
    subCategory: 'Airpods 4',
    device: 'AirPods 4',
    name: 'Mageasy Shockproof Clear Shield AirPods 4',
    price: 24,
    badge: 'New',
    image: 'assets/airpods4_clear.jpg',
    thumbnails: ['assets/airpods4_clear.jpg', 'assets/airpods_pro3_pitaka.jpg', 'assets/cat8.jpg'],
    description: 'Crystal clear anti-yellowing Bayer polycarbonate shell with 360° air-cushion drop protection and aluminum key-ring carabiner.',
    brand: 'Mageasy',
    colors: [
      { name: 'Crystal Clear', hex: '#F3F4F6' },
      { name: 'Smoked Charcoal', hex: '#374151' }
    ],
    devices: ['AirPods 4 with ANC', 'AirPods 4 Standard', 'Airpods 4'],
    features: ['Anti-Yellowing UV Coating', 'Air-Cushioned Drop Absorption', 'Premium Anodized Carabiner Clip', 'Wireless Charging Pass-Through']
  },

  // ================= 7. Powerbank & charging =================
  {
    id: 'pb-10k-magsafe',
    category: 'powerbank',
    subCategory: 'Powerbanks',
    device: 'Powerbank',
    name: 'Pitaka MagEZ 10,000mAh Magnetic Power Bank',
    price: 49,
    badge: 'New',
    image: 'assets/powerbank_5k_slim.jpg',
    thumbnails: ['assets/powerbank_5k_slim.jpg', 'assets/powerbank_5k_slim.jpg', 'assets/powerbank_20k_laptop.jpg'],
    description: 'High capacity 10,000mAh magnetic wireless battery pack with built-in folding aluminum kickstand and 20W PD Type-C bi-directional fast charging.',
    brand: 'Pitaka',
    colors: [
      { name: 'Space Charcoal', hex: '#374151' },
      { name: 'Titanium Silver', hex: '#E5E7EB' }
    ],
    devices: ['Powerbanks', 'Powerbank', 'iPhone 17/16/15 Series', 'MagSafe Compatible'],
    features: ['10,000mAh Real Capacity', '15W Wireless / 20W PD Wired Fast Charge', 'Strong Magnetic Snap Auto-Align', 'Foldable Aluminum Desktop Kickstand']
  },
  {
    id: 'pb-5k-slim',
    category: 'powerbank',
    subCategory: 'Powerbanks',
    device: 'Powerbank',
    name: 'The Trends Ultra-Slim 5,000mAh MagSafe Battery',
    price: 35,
    badge: 'New',
    image: 'assets/powerbank_5k_slim.jpg',
    thumbnails: ['assets/powerbank_5k_slim.jpg', 'assets/powerbank_5k_slim.jpg', 'assets/powerbank_20k_laptop.jpg'],
    description: 'Ultra-compact 9mm thin aircraft-grade aluminum battery pack with 15W Qi2 wireless charging and strong 1.2kg magnetic snap lock.',
    brand: 'The Trends',
    colors: [
      { name: 'Titanium Gray', hex: '#4B5563' },
      { name: 'Matte Obsidian', hex: '#09090B' }
    ],
    devices: ['Powerbanks', 'Powerbank', 'iPhone 17/16/15/14/13/12'],
    features: ['Ultra-Thin 9mm Aluminum Chassis', '15W Qi2 Fast Wireless MagSafe', '1.2kg Ultra-Strong Magnetic Lock', 'Smart Thermal Guard Sensor']
  },
  {
    id: 'pb-20k-laptop',
    category: 'powerbank',
    subCategory: 'Powerbanks',
    device: 'Powerbank',
    name: 'Tomtoc 20,000mAh 65W Laptop & Phone Power Bank',
    price: 68,
    badge: 'New',
    image: 'assets/powerbank_20k_laptop.jpg',
    thumbnails: ['assets/powerbank_20k_laptop.jpg', 'assets/powerbank_5k_slim.jpg', 'assets/fast_cables.jpg'],
    description: 'High-output 65W Power Delivery battery pack capable of fast-charging MacBook Pro, iPad Pro, and iPhone simultaneously with real-time digital OLED display.',
    brand: 'Tomtoc',
    colors: [
      { name: 'Space Black', hex: '#18181B' },
      { name: 'Graphite Metal', hex: '#3F3F46' }
    ],
    devices: ['Powerbanks', 'Powerbank', 'MacBook Pro / Air', 'iPad Pro', 'iPhone 17/16/15'],
    features: ['65W High-Output USB-C PD 3.0', '20,000mAh Airline-Approved Capacity', 'Real-Time Power & Battery OLED Screen', 'Triple-Port Simultaneous Fast Charging']
  },
  {
    id: 'charger-3in1-foldable',
    category: 'powerbank',
    subCategory: 'Wireless charger',
    device: 'Wireless charger',
    name: 'Mageasy 3-in-1 Foldable MagSafe Charging Station',
    price: 56,
    badge: 'New',
    image: 'assets/wireless_charger.jpg',
    thumbnails: ['assets/wireless_charger.jpg', 'assets/fast_cables.jpg', 'assets/powerbank_5k_slim.jpg'],
    description: 'Space gray CNC aluminum 3-in-1 folding MagSafe desktop charging station. Simultaneously fast-charges your iPhone, Apple Watch, and AirPods on one clean cable.',
    brand: 'Mageasy',
    colors: [
      { name: 'Space Gray', hex: '#374151' },
      { name: 'Silver Matte', hex: '#D1D5DB' }
    ],
    devices: ['Wireless charger', 'iPhone 17/16/15', 'Apple Watch', 'AirPods Pro'],
    features: ['15W MagSafe Fast Wireless Qi2 Charging', 'Simultaneous 3-Device Charging', 'Fold-Flat Portable Travel Design', 'CNC Aviation Aluminum Body']
  },
  {
    id: 'charger-magnetic-pad',
    category: 'powerbank',
    subCategory: 'Wireless charger',
    device: 'Wireless charger',
    name: 'Pitaka MagEZ 15W Qi2 Magnetic Charging Pad',
    price: 32,
    badge: 'New',
    image: 'assets/wireless_charger.jpg',
    thumbnails: ['assets/wireless_charger.jpg', 'assets/powerbank_5k_slim.jpg', 'assets/fast_cables.jpg'],
    description: 'Ultra-thin aramid weave wireless charging pad with integrated braided cable and rapid 15W Qi2 certified magnetic output.',
    brand: 'Pitaka',
    colors: [
      { name: 'Carbon Fiber', hex: '#111111' },
      { name: 'Sunset Weave', hex: '#7C2D12' }
    ],
    devices: ['Wireless charger', 'iPhone 17/16/15 Series', 'AirPods Pro 3/2/4'],
    features: ['15W Qi2 High-Efficiency Output', 'Genuine Aramid Weave Surface', 'Built-In 1.5m Braided Cable', 'Foreign Object & Heat Protection']
  },
  {
    id: 'cable-240w-braided',
    category: 'powerbank',
    subCategory: 'Cables',
    device: 'Cable',
    name: 'The Trends 240W Braided USB-C Fast Charging Cable',
    price: 19,
    badge: 'New',
    image: 'assets/fast_cables.jpg',
    thumbnails: ['assets/fast_cables.jpg', 'assets/cable_100w_silicone.jpg', 'assets/wireless_charger.jpg'],
    description: 'Military-grade braided silicone 240W USB-C PD fast charging cable with anodized aluminum alloy connectors and gold-plated pins.',
    brand: 'The Trends',
    colors: [
      { name: 'Space Charcoal', hex: '#374151' },
      { name: 'Titanium Silver', hex: '#E5E7EB' }
    ],
    devices: ['Cables', 'Cable', 'MacBook Pro/Air', 'iPad Pro/Air', 'iPhone 17/16/15'],
    features: ['240W Ultra-Fast Power Delivery (E-Marker)', 'Heavy Duty 20,000+ Bend Lifespan', 'Soft Tangle-Free Braided Silicone', '480Mbps Fast Data Sync']
  },
  {
    id: 'cable-100w-silicone',
    category: 'powerbank',
    subCategory: 'Cables',
    device: 'Cable',
    name: 'Tomtoc Soft-Touch 100W USB-C Silicone Cable',
    price: 16,
    badge: 'New',
    image: 'assets/cable_100w_silicone.jpg',
    thumbnails: ['assets/cable_100w_silicone.jpg', 'assets/fast_cables.jpg', 'assets/powerbank_5k_slim.jpg'],
    description: 'Silky smooth tangle-resistant liquid silicone 100W PD charging cable with included genuine leather cord organizer clip.',
    brand: 'Tomtoc',
    colors: [
      { name: 'Midnight Blue', hex: '#1E3A8A' },
      { name: 'Slate Gray', hex: '#475569' }
    ],
    devices: ['Cables', 'Cable', 'iPad Pro/Air', 'iPhone 17/16/15 Series'],
    features: ['Liquid Silicone Soft-Touch Feel', '100W Fast Charging Support', 'Genuine Leather Tie Included', 'Reinforced Strain Relief Joints']
  }
];

// Helper Functions
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];
}

function getProductsByCategory(catKey) {
  if (!catKey || catKey === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category.toLowerCase() === catKey.toLowerCase());
}

function getProductsBySubCategory(subCatFilter) {
  if (!subCatFilter || subCatFilter.toLowerCase() === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p =>
    p.subCategory.toLowerCase().includes(subCatFilter.toLowerCase()) ||
    p.device.toLowerCase().includes(subCatFilter.toLowerCase()) ||
    p.name.toLowerCase().includes(subCatFilter.toLowerCase())
  );
}
