/* ============================================
   START: Plots Data
   ============================================ */
const PLOTS = [
  { id: 1, title: "The Emerald Ridge", location: "Beverly Hills, California", size: "2.5 Acres", sizeValue: 2.5, price: 4500000, priceLabel: "$4,500,000", facing: "South-East", road: "40 ft", badge: "Premium",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80"],
    description: "A rare hillside estate plot offering panoramic ocean views, complete privacy, and approved plans for a luxury residence.",
    features: ["Panoramic Ocean Views", "Private Road Access", "Approved for Luxury Estate", "Utilities Available", "Gated Community"] },
  { id: 2, title: "The Golden Valley", location: "Napa Valley, California", size: "5.0 Acres", sizeValue: 5.0, price: 2800000, priceLabel: "$2,800,000", facing: "West", road: "30 ft", badge: "Featured",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"],
    description: "Vineyard-ready land with stunning sunset views and full water rights. Ideal for a private winery estate.",
    features: ["Vineyard Ready", "Water Rights Included", "Sunset Views", "Fertile Soil", "Easy Highway Access"] },
  { id: 3, title: "The Whispering Pines", location: "Aspen, Colorado", size: "1.8 Acres", sizeValue: 1.8, price: 3200000, priceLabel: "$3,200,000", facing: "North", road: "25 ft", badge: "New",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"],
    description: "Secluded forest plot with mountain views and potential for ski-in/ski-out access. Perfect for a private retreat.",
    features: ["Mountain Views", "Secluded Forest", "Ski Access Potential", "Year-Round Access", "Wildlife Surroundings"] },
  { id: 4, title: "The Coastal Bluff", location: "Malibu, California", size: "1.2 Acres", sizeValue: 1.2, price: 7500000, priceLabel: "$7,500,000", facing: "South", road: "20 ft", badge: "Luxury",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80"],
    description: "Direct beach access from a cliff-top location with breathtaking ocean views. Architectural plans included.",
    features: ["Direct Beach Access", "Cliff-Top Views", "Architectural Plans", "Private Path", "Coastal Permit Approved"] },
  { id: 5, title: "The Serene Meadow", location: "Hudson Valley, New York", size: "10.0 Acres", sizeValue: 10.0, price: 1950000, priceLabel: "$1,950,000", facing: "East", road: "50 ft", badge: "Featured",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80"],
    description: "Expansive open pasture with rolling hills, ideal for a private equestrian estate or family compound.",
    features: ["Open Pasture", "Rolling Hills", "Equestrian Ready", "Pond on Property", "Mountain Backdrop"] },
  { id: 6, title: "The Desert Oasis", location: "Scottsdale, Arizona", size: "3.0 Acres", sizeValue: 3.0, price: 2100000, priceLabel: "$2,100,000", facing: "West", road: "35 ft", badge: "Premium",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=80"],
    description: "Sonoran Desert views with exceptional privacy, ready for a sprawling modern home with desert landscaping.",
    features: ["Desert Views", "Complete Privacy", "Modern Home Ready", "Canyon Backdrop", "Star Gazing"] },
  { id: 7, title: "The Lakeside Haven", location: "Lake Tahoe, Nevada", size: "0.9 Acres", sizeValue: 0.9, price: 5200000, priceLabel: "$5,200,000", facing: "South-West", road: "30 ft", badge: "Luxury",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80"],
    description: "Private lake frontage with pier rights, surrounded by towering pines. A true four-season retreat.",
    features: ["Lake Frontage", "Pier Rights", "Pine Forest", "Four-Season Access", "Boat Dock Ready"] },
  { id: 8, title: "The Urban Edge", location: "Austin, Texas", size: "0.5 Acres", sizeValue: 0.5, price: 1500000, priceLabel: "$1,500,000", facing: "East", road: "40 ft", badge: "Investment",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1200&q=80"],
    description: "Prime development opportunity with city skyline views and walkable access to downtown Austin.",
    features: ["City Views", "Walkable Location", "High Appreciation", "Utilities Ready", "Zoned Mixed-Use"] },
  { id: 9, title: "The Green Sanctuary", location: "Portland, Oregon", size: "4.2 Acres", sizeValue: 4.2, price: 1800000, priceLabel: "$1,800,000", facing: "North-East", road: "35 ft", badge: "Eco",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80"],
    description: "Lush forested plot with creek frontage, ideal for an eco-friendly development or private nature retreat.",
    features: ["Creek Frontage", "Lush Forest", "Eco-Friendly", "Hiking Trails", "Wildlife Habitat"] },
  { id: 10, title: "The Skyline Terrace", location: "Bel Air, California", size: "1.5 Acres", sizeValue: 1.5, price: 6800000, priceLabel: "$6,800,000", facing: "South", road: "30 ft", badge: "Luxury",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80"],
    description: "Ultra-private plot with jetliner city views, ready for a modern architectural masterpiece.",
    features: ["Jetliner City Views", "Ultra-Private", "Modern Design Ready", "Gated Access", "Celebrity Neighborhood"] }
];
/* ============================================
   END: Plots Data
   ============================================ */

/* ============================================
   START: Testimonials Data
   ============================================ */
const TESTIMONIALS = [
  { name: "James Mitchell", role: "Real Estate Investor", text: "PlotSell made the entire process seamless. Their attention to legal details and property quality is unmatched.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
  { name: "Sarah Chen", role: "Homeowner", text: "We found our dream plot through PlotSell. The team was professional, transparent, and incredibly helpful.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
  { name: "Robert Anderson", role: "Developer", text: "Their curated plots are top-tier. Every property we've viewed exceeded expectations.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
];
/* ============================================
   END: Testimonials Data
   ============================================ */

/* ============================================
   START: Blog Posts Data
   ============================================ */
const BLOG_POSTS = [
  { slug: "why-location-matters", title: "Why Location is Everything in Land Investment", excerpt: "Understanding the factors that make a plot truly valuable in the long run.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", date: "March 15, 2026", author: "PlotSell Team" },
  { slug: "legal-checklist", title: "The Complete Legal Checklist Before Buying Land", excerpt: "Protect your investment by verifying these essential documents.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80", date: "March 8, 2026", author: "PlotSell Legal" },
  { slug: "future-of-real-estate", title: "The Future of Premium Land Ownership", excerpt: "Emerging trends shaping the luxury real estate market in 2026 and beyond.", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80", date: "February 28, 2026", author: "PlotSell Team" }
];
/* ============================================
   END: Blog Posts Data
   ============================================ */
