// Wording for the MarTech site. Everything here is either something Mahedi
// said about his work or a fact already on his developer portfolio (data.js).
// Nothing is invented: no results, percentages, budgets or client claims.
//
// Positioning comes from what MarTech specialist roles ask for (CMS and web
// maintenance, CRM and automation, integrations, analytics, email, AI, and
// being the bridge between marketing and engineering), matched to his record.

// Link to the developer portfolio (his other site). Change if the address changes.
export const PORTFOLIO_URL = "https://mahedi.pages.dev";

export const NAV = [
  { id: "stack", label: "Expertise" },
  { id: "roles", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "certs", label: "Certified" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  eyebrow: "MarTech specialist: web, CRM, channels and AI",
  // tokens: plain strings, or { t, hl: true } for the gradient words
  title: ["I", "build", "and", "connect", "the", { t: "marketing", hl: true }, { t: "stack.", hl: true }],
  lead: "MarTech specialist with 10+ years in web technology. I build the websites and CMS platforms marketing runs on, connect them to CRM, email and analytics, and run the channels on top. The bridge between marketing and engineering.",
};

export const MARQUEE = [
  "MarTech stack", "HubSpot CMS", "HubSpot CRM", "WordPress", "Webflow", "APIs and integrations", "Analytics", "SEO",
  "Email marketing", "Paid and social media", "AI in marketing", "Technical project management",
];

// The four layers shown in the hero, top to bottom.
export const LAYERS = [
  { name: "Experience", sub: "Websites and CMS", chips: ["HubSpot CMS", "WordPress", "Webflow"] },
  { name: "Engagement", sub: "Email, social and paid", chips: ["Email", "Social", "Paid media"] },
  { name: "Data", sub: "CRM, analytics and integrations", chips: ["HubSpot CRM", "Analytics", "APIs"] },
  { name: "Intelligence", sub: "AI in marketing", chips: ["AI fluency", "Python"] },
];

// "One chain" diagram under the section heading (node labels are in System.jsx).
export const FLOW = {
  title: "One chain, from channel to insight",
  lede: "Channels and email bring people to the website, the website feeds the CRM, integrations move the data, and analytics shows what happened. I work on every link.",
  captionL: "Most teams own one box.",
  captionR: "I work across the whole chain.",
};

// The disciplines grid. `proof` is something he has actually done or earned.
export const BENTO = {
  lede: "What MarTech roles ask for, and where my record backs it: the web, the systems between, and the channels on top.",
  cards: {
    web: {
      title: "Web and CMS engineering",
      text: "The core of my work: websites and themes on HubSpot CMS, WordPress and Webflow, with custom front-end and back-end development where the platform needs it.",
      chips: ["HubSpot CMS", "WordPress", "Webflow", "Drupal", "ReactJS", "Node.js", "PHP", "MySQL"],
      proof: "11 live client sites, and HubSpot CMS for Developers II",
    },
    crm: {
      title: "CRM and marketing automation",
      text: "HubSpot CRM training across sales, service and data, so the website and the CRM work as one system.",
      chips: ["HubSpot Sales Management", "Service Hub", "Data Integrations"],
      proof: "HubSpot Academy certificates, Feb 2026",
    },
    api: {
      title: "Integrations and data",
      text: "APIs, back-end development and data skills for connecting platforms and moving data between them.",
      chips: ["RESTful APIs", "Node.js", "PHP", "MySQL", "Python"],
      proof: "HubSpot Data Integrations, and IBM Python for Data Science",
    },
    channels: {
      title: "Channels and email",
      text: "I run Meta Ads and Google Ads, handle social media marketing, and know email marketing and newsletter building.",
      chips: ["Meta Ads", "Google Ads", "Social media", "Email marketing", "Newsletters"],
      proof: "Digital Marketing Strategist at Bangla Tigers",
    },
    seo: {
      title: "Analytics, SEO and performance",
      text: "SEO, page performance and accessibility on the sites I build, backed by Google Analytics training and data science coursework.",
      chips: ["SEO", "Performance", "Accessibility", "Google Analytics"],
      proof: "Google: Advanced Google Analytics (2022, expired Mar 2025)",
    },
    ai: {
      title: "AI in marketing",
      text: "Certified in AI fluency, and I build sites for AI-led companies. I know where AI helps marketing work and where its limits are.",
      chips: ["AI fluency", "AI capabilities and limits", "Claude", "TensorFlow"],
      proof: "Anthropic certificates, Jun 2026",
    },
    delivery: {
      title: "Delivery, governance and security",
      text: "Technical project management for web and marketing work: sprint planning, stakeholder management, documentation, and security-minded builds.",
      chips: ["Agile / Scrum", "Sprint planning", "Stakeholder management", "Documentation", "Application security"],
      proof: "Technical Project Manager at Get Levrg",
    },
  },
};

// The stack, grouped by layer, with how each is held. Levels:
//   Hands-on = used in his work, Certified = certificate held, Trained = coursework
//   or certificate (some lapsed, see the certificates), Working knowledge = his own words.
export const MATRIX = {
  title: "The stack I work with",
  lede: "A quick scan for recruiters and clients: each layer, the tools, and how I hold them.",
  rows: [
    { layer: "Web and CMS", level: "Hands-on", items: ["HubSpot CMS", "WordPress", "Webflow", "Drupal", "Squarespace", "Kajabi", "Duda", "Elementor", "Divi", "WPBakery"] },
    { layer: "Front-end and back-end", level: "Hands-on", items: ["ReactJS", "Vue.js", "JavaScript (ES6+)", "jQuery", "HTML5", "CSS3", "Node.js", "PHP", "MySQL", "RESTful APIs"] },
    { layer: "CRM", level: "Certified", items: ["HubSpot Sales Management", "Service Hub Software", "Data Integrations"] },
    { layer: "Paid and social", level: "Hands-on", items: ["Meta Ads", "Google Ads", "Social media marketing"] },
    { layer: "Email", level: "Working knowledge", items: ["Email marketing", "Newsletter building"] },
    { layer: "Analytics, SEO and data", level: "Trained", items: ["Google Analytics", "SEO", "Performance optimization", "Accessibility", "Python for Data Science"] },
    { layer: "AI", level: "Certified", items: ["AI Fluency", "AI Capabilities and Limitations", "Claude 101", "TensorFlow (IBM)"] },
    { layer: "Delivery and security", level: "Hands-on", items: ["Agile / Scrum", "Sprint planning", "Stakeholder management", "Technical documentation", "Application security"] },
  ],
};

// Role detail. Only things Mahedi has said: the delivery points come from his
// own About text, the marketing points from what he told me about Bangla Tigers.
export const ROLE_POINTS = {
  "Technical Project Manager": [
    "Sprint planning",
    "Coordinating designers, developers and QA",
    "Turning client requirements into clear technical tasks",
    "Documentation and clean handoffs",
  ],
  "Digital Marketing Strategist": [
    "Social media marketing",
    "Paid advertising",
    "The other day-to-day digital marketing tasks",
  ],
};
// One line of context per company (what the company or the work is).
export const ROLE_CONTEXT = {
  "Get Levrg": "Fractional marketing team platform: website and CRM systems for growing companies.",
  "Upwork": "Freelance web development since 2013, working remotely on WordPress, HubSpot CMS, Webflow and more.",
};

export const SECTION_COPY = {
  stack: { eyebrow: "What I do", title: "Marketing and the site it lands on" },
  roles: { eyebrow: "Experience", title: "Where I have done it" },
  work: { eyebrow: "Selected work", title: "Marketing sites I have built" },
  certs: { eyebrow: "Certified", title: "Training behind the practice" },
  contact: { eyebrow: "Contact", title: "Let\u2019s talk MarTech" },
};

// The sites that matter most for a marketing audience, by project name.
export const WORK_PICKS = ["Get Levrg", "HubSync", "Empellor CRM", "Lucihub", "Precision Content", "Redica Systems"];

export const SHOTS = {
  "Get Levrg": "get-levrg", "GO BILDS": "go-bilds", "Proteomics International": "proteomics",
  "Precision Content": "precision-content", "HubSync": "hubsync", "AirTera": "airtera", "Oleria": "oleria",
  "Redica Systems": "redica", "Empellor CRM": "empellor", "Lucihub": "lucihub", "ChamSys": "chamsys",
};

// Certificates relevant to MarTech, grouped by the capability they back. The
// full list of 24 is on his developer portfolio.
export const CERT_GROUPS = [
  { label: "CRM and marketing platform", titles: ["HubSpot CMS for Developers II: Best Practices", "Service Hub Software", "Sales Management", "Digital Marketing", "Data Integrations Certification"] },
  { label: "Ads, analytics and marketing fundamentals", titles: ["AI-Powered Performance Ads Certification", "Advanced Google Analytics", "The Fundamentals of Digital Marketing"] },
  { label: "AI", titles: ["AI Capabilities and Limitations", "AI Fluency: Framework & Foundations", "Claude 101", "Deep Learning with TensorFlow"] },
  { label: "Web, data and cloud", titles: ["Responsive Web Design", "JavaScript Algorithms and Data Structures (Beta)", "Python for Data Science", "Data Science with Python", "Microsoft Azure Fundamental"] },
  { label: "Security", titles: ["Digital Security Essentials", "Cyber Security (Short Course)"] },
];
