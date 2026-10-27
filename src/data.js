/**
 * ==========================================================================
 * PORTFOLIO CONTENT
 * --------------------------------------------------------------------------
 * Everything you're likely to want to change lives in this one file:
 * your name, bio, skills, jobs, projects, certifications and contact info.
 * Edit the values below — you don't need to touch index.html or script.js
 * for normal content updates.
 * ==========================================================================
 */

export const PORTFOLIO_DATA = {

  meta: {
    name: "S.M. Mahedi Hasan",
    role: "Full-Stack Developer & Technical Project Manager",
    location: "Dhaka, Bangladesh",
    email: "mahedi.pro@gmail.com",
    phone: "+880 1839-503782",
    linkedin: "https://linkedin.com/in/iammahedi",
    resumeFile: "assets/resume.pdf"
  },

  // Lines typed into the hero "code editor". Each line is a list of
  // segments: { text, type }. type controls the syntax-highlight weight/
  // shade — see the .tok-* classes in css/style.css (the theme is strict
  // black & white, so tokens are distinguished by weight and grey value,
  // not color).
  heroCode: [
    [{ text: "const", type: "kw" }, { text: " ", type: "plain" }, { text: "mahedi", type: "var" }, { text: " = {", type: "punct" }],
    [{ text: "  name", type: "prop" }, { text: ": ", type: "punct" }, { text: '"S.M. Mahedi Hasan"', type: "str" }, { text: ",", type: "punct" }],
    [{ text: "  role", type: "prop" }, { text: ": ", type: "punct" }, { text: '"Full-Stack Developer & Technical PM"', type: "str" }, { text: ",", type: "punct" }],
    [{ text: "  based", type: "prop" }, { text: ": ", type: "punct" }, { text: '"Dhaka, Bangladesh"', type: "str" }, { text: ",", type: "punct" }],
    [{ text: "  experience", type: "prop" }, { text: ": ", type: "punct" }, { text: "10", type: "num" }, { text: ", ", type: "punct" }, { text: "// years", type: "comment" }],
    [
      { text: "  expertise", type: "prop" },
      { text: ": [", type: "punct" },
      { text: '"WordPress"', type: "str" },
      { text: ", ", type: "punct" },
      { text: '"Webflow"', type: "str" },
      { text: ", ", type: "punct" },
      { text: '"HubSpot CMS"', type: "str" },
      { text: ", ", type: "punct" },
      { text: '"Web Technologies"', type: "str" },
      { text: ", ", type: "punct" },
      { text: '"JS Libraries & Frameworks"', type: "str" },
      { text: ", ", type: "punct" },
      { text: '"AI & Emerging Tech"', type: "str" },
      { text: "],", type: "punct" }
    ],
    [{ text: "  delivers", type: "prop" }, { text: ": ", type: "punct" }, { text: '"code and the project it ships in"', type: "str" }, { text: ",", type: "punct" }],
    [{ text: "  available", type: "prop" }, { text: ": ", type: "punct" }, { text: "true", type: "kw" }],
    [{ text: "};", type: "punct" }]
  ],

  hero: {
    kicker: "// full-stack developer & technical pm",
    title: "Build With Purpose.",
    titleAccent: "",
    lead: "10+ years in technology, digital products, and project delivery — combining hands-on web expertise, deep CMS experience across WordPress, HubSpot, Webflow and Drupal, and technical leadership from concept to launch.",
    primaryCta: { label: "View my work", href: "#projects" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    stats: [
      { value: "10+", label: "years building for the web" },
      { value: "100+", label: "projects shipped" },
      { value: "11+", label: "CMS platforms & frameworks" }
    ]
  },

  about: {
    kicker: "// about.md",
    title: "About",
    paragraphs: [

      "I'm a full-stack developer and technical project manager based in Dhaka, Bangladesh, with over ten years of experience building and delivering web products. My technical foundation spans HTML, CSS, and JavaScript, including modern libraries and frameworks such as ReactJS, Vue, Node.js and more, with deep expertise across CMS platforms including WordPress, HubSpot, Webflow, Drupal, and other leading content management systems.",

      "On the delivery side, I lead sprint planning, coordinate with designers, developers and QA, and translate client requirements into clear technical tasks. I combine hands-on development with technical project management to deliver scalable, secure and high-performing digital experiences, with a strong focus on clean, reusable solutions, documentation, and seamless handoffs."

    ]
  },

  skills: [
    {
      category: "Front-end",
      items: ["ReactJS", "Vue.js", "JavaScript (ES6+)", "jQuery", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      category: "Back-end",
      items: ["Node.js", "PHP", "MySQL Design & Optimization", "RESTful APIs"]
    },
    {
      category: "CMS & platforms",
      items: ["WordPress", "HubSpot CMS", "Webflow", "Drupal", "Squarespace", "Kajabi", "Duda", "Elementor", "Divi", "WPBakery", "Kirki"]
    },
    {
      category: "Delivery & leadership",
      items: ["Sprint Planning", "Agile / Scrum", "Stakeholder Management", "Client Delivery", "Technical Documentation"]
    },
    {
      category: "Security & performance",
      items: ["App Security", "Caching", "Image Compression", "Code Minification", "SEO & Accessibility"]
    }
  ],

  // Kept minimal on purpose — designation, company, time. Full detail lives
  // on the résumé. startDate/endDate (YYYY-MM, endDate null = present)
  // drive the auto-computed duration shown next to each period.
  experience: [
    { role: "Technical Project Manager", company: "Get Levrg", location: "Dhaka, Bangladesh · Hybrid", period: "Mar 2026 — Present", startDate: "2026-03", endDate: null, current: true },
    { role: "Full Stack Developer", company: "Get Levrg", location: "Dhaka, Bangladesh · On-site", period: "Apr 2025 — Mar 2026", startDate: "2025-04", endDate: "2026-03", current: false },
    { role: "Digital Marketing Strategist", company: "Bangla Tigers", location: "", period: "", startDate: null, endDate: null, current: false, tag: "[MARKETING]" },
    { role: "Web Developer (Freelance)", company: "Upwork", location: "Remote", period: "Jun 2013 — Present", startDate: "2013-06", endDate: null, current: true },
    { role: "Executive, Information Technology", company: "FMC Group of Companies", location: "Chittagong, Bangladesh", period: "Jan 2019 — Jan 2023", startDate: "2019-01", endDate: "2023-01", current: false },
    { role: "Web Developer", company: "Whiz Communications", location: "Chittagong, Bangladesh", period: "2017 — 2019", startDate: "2017-01", endDate: "2019-12", current: false },
    { role: "Software Developer (Part-time)", company: "FMC Group Ltd", location: "Chittagong, Bangladesh", period: "Jun 2016 — Dec 2019", startDate: "2016-06", endDate: "2019-12", current: false }
  ],

  // Selected client work. Swap in a screenshot per project by adding an
  // "image" field ("assets/projects/yourfile.jpg") once you have one.
  // Volunteering, as listed on LinkedIn. Only dates that LinkedIn shows are filled in.
  volunteering: [
    { role: "Editor", org: "Wikipedia, the Free Encyclopedia", cause: "", period: "", startDate: null, endDate: null },
    { role: "Web Maker", org: "Mozilla", cause: "Science and Technology", period: "", startDate: null, endDate: null },
    { role: "Campus Ambassador", org: "Mozilla", cause: "", period: "Jan 2014 — Jan 2015", startDate: "2014-01", endDate: "2015-01" },
    { role: "Contributor", org: "WordPress", cause: "", period: "", startDate: null, endDate: null }
  ],

  projects: [
    { name: "Get Levrg", url: "https://getlevrg.com/", description: "Fractional marketing team platform — website and CRM systems for growing companies.", tags: ["WordPress"] },
    { name: "GO BILDS", url: "https://gobilds.ca/", description: "Construction & restoration contractor site for a Toronto-based builder.", tags: ["WordPress"] },
    { name: "Proteomics International", url: "https://www.proteomics.com.au/", description: "Site for a biotech diagnostics company behind protein-based blood tests.", tags: ["HubSpot CMS"] },
    { name: "Precision Content", url: "https://www.precisioncontent.com/home-2/", description: "Enterprise content-engineering consultancy serving regulated industries.", tags: ["WordPress"] },
    { name: "HubSync", url: "https://hubsync.com/", description: "AI-powered workflow automation platform built for CPA and accounting firms.", tags: ["HubSpot CMS"] },
    { name: "AirTera", url: "https://airtera.com/", description: "Safety, security and compliance software platform for aviation operators.", tags: ["HubSpot CMS"] },
    { name: "Oleria", url: "https://www.oleria.com/", description: "Identity security and governance platform for human, non-human & AI identities.", tags: ["Webflow"] },
    { name: "Redica Systems", url: "https://www.redica.com/", description: "Quality and regulatory intelligence platform for life sciences teams.", tags: ["Webflow"] },
    { name: "Empellor CRM", url: "https://empellor.com/", description: "CRM consulting site for a Dynamics 365 & Salesforce implementation partner.", tags: ["WordPress"] },
    { name: "Lucihub", url: "https://lucihub.com/", description: "AI + human video production platform for brand and marketing teams.", tags: ["WordPress"] },
    { name: "ChamSys", url: "https://chamsyslighting.com/", description: "Product site for a professional stage and event lighting-control brand.", tags: ["WordPress"] }
  ],

  certifications: [
    { title: "AI Capabilities and Limitations", issuer: "Anthropic", issued: "2026-06", expires: null, id: null, url: "https://verify.skilljar.com/c/pfnotgkimdn3" },
    { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", issued: "2026-06", expires: null, id: null, url: "https://verify.skilljar.com/c/cy36x9fmswky" },
    { title: "Claude 101", issuer: "Anthropic", issued: "2026-06", expires: null, id: null, url: "https://verify.skilljar.com/c/9xzik9wmkans" },
    { title: "HubSpot CMS for Developers II: Best Practices", issuer: "HubSpot Academy", issued: "2026-04", expires: null, id: "35900b5d537049d0ba2d63f81ef15823", url: "https://app-na2.hubspot.com/academy/achievements/jhxbwlvt/en/1/s-m-mahedi-hasan/hubspot-cms-for-developers-ii-best-practices" },
    { title: "Service Hub Software", issuer: "HubSpot Academy", issued: "2026-02", expires: "2027-03", id: "77cd254cb044432aa37f939ab804a73f", url: "https://app-na2.hubspot.com/academy/achievements/g9j35hzc/en/1/s-m-mahedi-hasan/service-hub-software" },
    { title: "Sales Management", issuer: "HubSpot Academy", issued: "2026-02", expires: "2027-03", id: "a71885ae7bb24f239a093ab1f5d81cb9", url: "https://app-na2.hubspot.com/academy/achievements/pvppksby/en/1/s-m-mahedi-hasan/sales-management" },
    { title: "Digital Marketing", issuer: "HubSpot Academy", issued: "2026-02", expires: "2027-03", id: "e5d91e41b4c34e84b529756463449475", url: "https://app-na2.hubspot.com/academy/achievements/5hcj1hwg/en/1/s-m-mahedi-hasan/digital-marketing" },
    { title: "Data Integrations Certification", issuer: "HubSpot Academy", issued: "2026-02", expires: "2027-03", id: "76f93c8eac3a4c5fa793bd29c324e98b", url: "https://app-na2.hubspot.com/academy/achievements/9jfb64kc/en/1/mahedi-hasan/data-integrations-certification" },
    { title: "AI-Powered Performance Ads Certification", issuer: "Google", issued: "2024-05", expires: "2025-05", id: "104212227", url: "https://skillshop.credential.net/c1dc4f54-d1e4-4ee5-bac9-17b7dd8ba1fe" },
    { title: "JavaScript Algorithms and Data Structures (Beta)", issuer: "freeCodeCamp", issued: "2024-05", expires: null, id: "fcc11d6f950-f703-4dfb-96c7-32169d12dfed-jaads", url: "https://freecodecamp.org/certification/mahedipro/javascript-algorithms-and-data-structures-v8" },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", issued: "2024-05", expires: null, id: "fcc11d6f950-f703-4dfb-96c7-32169d12dfed-rwd", url: "https://freecodecamp.org/certification/mahedipro/responsive-web-design" },
    { title: "Deep Learning with TensorFlow", issuer: "IBM", issued: "2022-04", expires: null, id: "b009869223d848f680959ce0c122e125", url: "https://courses.cognitiveclass.ai/certificates/b009869223d848f680959ce0c122e125" },
    { title: "Python for Data Science", issuer: "IBM", issued: "2022-04", expires: null, id: null, url: "https://www.credly.com/badges/e6aad309-04f3-4bd1-bc92-4806d4137bf1/public_url" },
    { title: "Microsoft Azure Fundamental", issuer: "ICT Division", issued: "2022-03", expires: null, id: "MC-Z491545L3281709K733A", url: "https://drive.google.com/file/d/15MM-tZ3kZK2W_Pwvj2HnxvwOCBumiPpj/view?usp=sharing" },
    { title: "Advanced Google Analytics", issuer: "Google", issued: "2022-03", expires: "2025-03", id: null, url: "https://analytics.google.com/analytics/academy/certificate/9iuASCKBS9yN3vaWIbXNJA" },
    { title: "Data Science with Python", issuer: "Simplilearn", issued: "2022-03", expires: null, id: "3333296", url: "https://drive.google.com/file/d/1h_8GgMvaI8WqxxlRtACiUuXkBK_ySIM3/view?usp=sharing" },
    { title: "Blockchain Developer Training", issuer: "Simplilearn", issued: "2022-03", expires: null, id: "3330450", url: "https://drive.google.com/file/d/1KqkNwBQSW2s5sDyOE8ouL0GhDAKUmknO/view?usp=sharing" },
    { title: "Cyber Security (Short Course)", issuer: "eLearning College", issued: null, expires: null, id: null, url: "https://drive.google.com/open?id=1xwB2Oka3ugeencaEc2wL-1h1AIAaTRT6" },
    { title: "Robo Sprint 2014", issuer: "Premier University, Chittagong", issued: null, expires: null, id: null, url: "https://drive.google.com/open?id=1SUnGihI0zguQYoAUzZud8q9KGGOvGgt9" },
    { title: "Microsoft Excel Basic", issuer: "10 Minute School", issued: null, expires: null, id: "MC-C491545P755453A152R", url: "https://drive.google.com/open?id=1h26wd57rWrTv1NbHLOOaG8SpRlmKqGVu" },
    { title: "Digital Security Essentials", issuer: "Government of Bangladesh", issued: null, expires: null, id: "MC-W491545H756715B106K", url: "https://drive.google.com/open?id=1Y7_YTP_jYSgd7yWTB4pKiH0Z-eptI5Of" },
    { title: "The Fundamentals of Digital Marketing", issuer: "Google", issued: "2020-05", expires: null, id: "89K BE2 374", url: "https://drive.google.com/file/d/1Sq6_CdE_VnM1ASOzFyE8MuFz07EUY5qo/view?usp=sharing" },
    { title: "Cisco Certified Network Associate Routing and Switching (CCNA)", issuer: "New Horizons", issued: null, expires: null, id: null, url: null },
    { title: "Full Stack Web Development", issuer: "Skillup Online", issued: null, expires: null, id: null, url: null }
  ],

  education: [
    { degree: "B.Sc. in Electrical and Electronic Engineering", school: "Premier University, Chattogram, Bangladesh" }
  ],

  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" }
  ],

  contact: {
    kicker: "// contact.sh",
    title: "Let's build something",
    lead: "Open to freelance projects and full-stack / technical PM roles. The fastest way to reach me is email.",
    status: "currently available for freelance & full-time work"
  },

  // Companies I've built for or worked with. "logo" is a path under
  // assets/logos/ — leave it null to show a clean text wordmark instead
  // (handy for a client before you have their logo file handy). "w"/"h"
  // are the logo file's actual pixel dimensions — set so the browser
  // reserves the right space before the image loads, which keeps the
  // marquee from jumping/stuttering once images finish loading in.
  // Grouped into 4 rows on purpose — each row scrolls independently.
  clientLogos: {
    kicker: "// trusted-by.log",
    title: "Companies I've worked with",
    rows: [
      [
        { name: "Get Levrg", logo: "assets/logos/getlevrg.webp", w: 562, h: 220 },
        { name: "Proteomics International", logo: "assets/logos/proteomics.png", w: 1540, h: 220 },
        { name: "HubSync", logo: "assets/logos/hubsync.png", w: 697, h: 220 },
        { name: "Guideline", logo: "assets/logos/guideline.png", w: 207, h: 30 },
        { name: "Phoenix Group", logo: "assets/logos/phoenixgroup.png", w: 270, h: 270 }
      ],
      [
        { name: "GO BILDS", logo: "assets/logos/gobilds.png", w: 159, h: 68 },
        { name: "Precision Content", logo: "assets/logos/precisioncontent.png", w: 586, h: 220 },
        { name: "Empellor CRM", logo: "assets/logos/empellor.png", w: 1099, h: 220 },
        { name: "Growth Elevated", logo: "assets/logos/growthelevated.png", w: 192, h: 192 }
      ],
      [
        { name: "AirTera", logo: "assets/logos/airtera.png", w: 1360, h: 220 },
        { name: "Redica Systems", logo: "assets/logos/redica.png", w: 917, h: 142 },
        { name: "HBPS", logo: null },
        { name: "ChamSys", logo: "assets/logos/chamsys.png", w: 669, h: 240 }
      ],
      [
        { name: "Oleria", logo: "assets/logos/oleria.png", w: 1008, h: 240 },
        { name: "Lucihub", logo: "assets/logos/lucihub.png", w: 600, h: 147 },
        { name: "Confidence Group", logo: null },
        { name: "Cosmetics Lab", logo: "assets/logos/cosmeticslab.png", w: 276, h: 276 }
      ]
    ]
  }

};

export default PORTFOLIO_DATA;
