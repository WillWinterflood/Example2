/**
 * ============================================================
 *  SITE CONFIG — edit ONLY this file for each new client.
 *  Everything else (HTML, CSS, JS) stays the same.
 * ============================================================
 */
const CONFIG = {

  // ── BUSINESS DETAILS ──────────────────────────────────────
  businessName:  "S&B Decorators",
  tagline:       "Professional Painters & Decorators",
  phone:         "0770921076",
  email:         "",                              // leave blank to hide
  location:      "Staines-upon-Thames",
  county:        "Surrey",
  coverage:      "Surrey, Middlesex & surrounding areas",
  hours:         "Mon–Sat: 7:30am – 6:00pm",

  // ── HERO SECTION ──────────────────────────────────────────
  heroBadge:     "Based in Staines-upon-Thames",
  heroTitle:     "Transform Your Space With Expert Decorators",
  heroHighlight: "Space",       // word inside heroTitle to highlight in gold
  heroSub:       "Professional painting & decorating services across Surrey, Middlesex & the surrounding areas. Quality craftsmanship, every time.",

  // ── STATS BAR (inside hero) ───────────────────────────────
  statYears:        "10+",
  statYearsLabel:   "Years Experience",
  statProjects:     "500+",
  statProjectsLabel:"Projects Completed",
  statSatisfaction: "100%",
  statSatisfactionLabel: "Satisfaction",

  // ── THEME COLOURS ─────────────────────────────────────────
  // Primary = dark background/navy  |  Accent = highlight/gold
  colorPrimary:  "#0f2744",   // e.g. navy, dark green, dark red…
  colorAccent:   "#c8963e",   // e.g. gold, orange, sky blue…

  // ── SEO / META ────────────────────────────────────────────
  metaTitle:       "S&B Decorators | Staines-upon-Thames",
  metaDescription: "S&B Decorators – Professional painters and decorators based in Staines-upon-Thames. Quality interior & exterior decorating across Surrey and Middlesex.",

  // ── TRUST BAR ─────────────────────────────────────────────
  trustItems: [
    { icon: "fa-shield-halved",  text: "Fully Insured" },
    { icon: "fa-certificate",    text: "Experienced & Professional" },
    { icon: "fa-star",           text: "5-Star Rated" },
    { icon: "fa-clock",          text: "Reliable & Punctual" },
    { icon: "fa-pound-sign",     text: "Competitive Pricing" },
  ],

  // ── SERVICES ──────────────────────────────────────────────
  // Font Awesome 6 free icon class + title + short description.
  // Keep to 3 or 6 cards for the best grid layout.
  // Icon picker: fontawesome.com/icons (free icons only)
  services: [
    {
      icon:  "fa-house",
      title: "Interior Painting",
      desc:  "Walls, ceilings, woodwork and features painted to a flawless finish. We prepare every surface properly before we begin.",
    },
    {
      icon:  "fa-building",
      title: "Exterior Painting",
      desc:  "Weather-resistant exterior coatings that protect and beautify your property for years to come.",
    },
    {
      icon:  "fa-layer-group",
      title: "Wallpapering",
      desc:  "Hanging all types of wallpaper — feature walls, full rooms, and specialist papers — with precision and care.",
    },
    {
      icon:  "fa-paintroller",
      title: "Commercial Decorating",
      desc:  "Offices, retail spaces, restaurants and more. Minimal disruption, maximum quality on every commercial project.",
    },
    {
      icon:  "fa-fill-drip",
      title: "Spray Finishing",
      desc:  "Ultra-smooth spray finishes for doors, cabinets and furniture. A factory-quality result on site.",
    },
    {
      icon:  "fa-wrench",
      title: "Plastering & Prep",
      desc:  "Crack filling, skim coats, and full surface preparation to ensure every job looks impeccable.",
    },
  ],

  // ── ABOUT SECTION ─────────────────────────────────────────
  aboutParagraphs: [
    "We are a dedicated team of professional painters and decorators proudly based in <strong>Staines-upon-Thames</strong>. With over a decade of experience, we bring skill, reliability and a passion for quality to every project — big or small.",
    "Whether you're refreshing a single room or transforming an entire property, our team delivers a clean, tidy, and thorough service from start to finish. We work across Surrey, Middlesex and the surrounding areas.",
  ],
  aboutChecklist: [
    "Free no-obligation quotes",
    "Fully insured for your peace of mind",
    "Respectful of your home & schedule",
    "Only premium paints & materials used",
    "Transparent pricing — no hidden costs",
  ],
  aboutBadgeNumber: "10+",
  aboutBadgeLabel:  "Years of Excellence",

  // ── GALLERY PLACEHOLDERS ──────────────────────────────────
  // These show until the client sends real photos.
  // To use a real photo, set: photo: "images/kitchen.jpg"
  galleryItems: [
    { icon: "fa-house-chimney", label: "Living Room Interior", size: "tall" },
    { icon: "fa-bed",           label: "Master Bedroom",       size: "" },
    { icon: "fa-building",      label: "Office Exterior",      size: "" },
    { icon: "fa-utensils",      label: "Kitchen Feature Wall", size: "wide" },
    { icon: "fa-layer-group",   label: "Hallway Wallpaper",    size: "" },
  ],

  // ── TESTIMONIALS ──────────────────────────────────────────
  testimonials: [
    {
      initials: "SR",
      name:     "Sarah R.",
      location: "Staines-upon-Thames",
      text:     "Absolutely brilliant work. S&B decorated our entire house and the results are stunning. Incredibly tidy, professional and the finish is perfect. Highly recommend!",
    },
    {
      initials: "JM",
      name:     "James M.",
      location: "Ashford, Surrey",
      text:     "Used S&B for our office repaint. They worked around our hours, were incredibly professional, and the quality is exceptional. We'll definitely use them again.",
    },
    {
      initials: "LP",
      name:     "Linda P.",
      location: "Egham, Surrey",
      text:     "From the quote to the final brush stroke, S&B were fantastic. Fair price, great communication and the bedroom looks amazing. Couldn't be happier.",
    },
  ],

  // ── PROCESS STEPS ─────────────────────────────────────────
  processSteps: [
    {
      icon:  "fa-phone-volume",
      title: "Get in Touch",
      desc:  "Call or message us to discuss your project. We'll ask a few questions to understand your needs.",
    },
    {
      icon:  "fa-clipboard-list",
      title: "Free Quote",
      desc:  "We visit your property and provide a detailed, no-obligation quote with no hidden fees.",
    },
    {
      icon:  "fa-paintbrush",
      title: "We Get to Work",
      desc:  "Our team arrives on time, works cleanly, and keeps you updated throughout the project.",
    },
    {
      icon:  "fa-star",
      title: "Enjoy the Result",
      desc:  "We tidy up completely and walk you through the finished work. Your satisfaction is guaranteed.",
    },
  ],
};

/* ── EXAMPLE CONFIGS FOR OTHER TRADES ────────────────────────
   Copy-paste one of these blocks to replace the CONFIG above
   when building a site for a different trade.

   PLUMBER EXAMPLE:
   businessName:  "A1 Plumbing Services"
   tagline:       "Fast, Reliable Plumbers"
   heroTitle:     "No Leak Too Big, No Job Too Small"
   heroHighlight: "Leak"
   colorPrimary:  "#0a3d62"    (dark blue)
   colorAccent:   "#e67e22"    (orange)
   services icons to try: fa-faucet, fa-toilet, fa-shower,
     fa-wrench, fa-fire, fa-house-flood-water

   ELECTRICIAN EXAMPLE:
   businessName:  "Bright Spark Electrical"
   tagline:       "Certified Electricians You Can Trust"
   heroTitle:     "Expert Electrical Solutions for Your Home"
   heroHighlight: "Electrical"
   colorPrimary:  "#1a1a2e"    (dark navy)
   colorAccent:   "#f9ca24"    (electric yellow)
   services icons: fa-bolt, fa-plug, fa-lightbulb,
     fa-solar-panel, fa-charging-station, fa-house-signal

   BUILDER EXAMPLE:
   businessName:  "JT Building & Renovations"
   tagline:       "Quality Building Work, Every Time"
   heroTitle:     "Build Your Dream Space With Confidence"
   heroHighlight: "Dream"
   colorPrimary:  "#2d3436"    (dark charcoal)
   colorAccent:   "#e17055"    (terracotta)
   services icons: fa-hammer, fa-hard-hat, fa-bricks,
     fa-ruler-combined, fa-house-circle-check, fa-trowel
─────────────────────────────────────────────────────────── */
