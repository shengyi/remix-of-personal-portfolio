/**
 * Regina Yuan — Brand & Growth Executive
 * Single source of truth for all editorial content on the site.
 */

import wpEngineLogo from "@/assets/logos/wp-engine.png";
import docusignLogo from "@/assets/logos/docusign.png";
import godaddyLogo from "@/assets/logos/godaddy.png";
import natGeoLogo from "@/assets/logos/national-geographic.png";
import googleLogo from "@/assets/logos/google.png";
import cesLogo from "@/assets/logos/ces.png";

import illoIdentityTransformation from "@/assets/illustrations/identity-transformation.png";
import illoMaIntegration from "@/assets/illustrations/ma-brand-integration.png";
import illoCategoryExpansion from "@/assets/illustrations/category-expansion.png";
import illoCustomerSegmentation from "@/assets/illustrations/customer-segmentation.png";

import wpEngineLogoExpand from "@/assets/media/wp-engine-logo-expand.mp4";

import campaignOpenWeStand from "@/assets/campaigns/open-we-stand.png";
import campaignABetterWay from "@/assets/campaigns/a-better-way.png";
import campaignGoYou from "@/assets/campaigns/go-you.png";
import campaignPeaceOfMind from "@/assets/campaigns/peace-of-mind.png";

export const profile = {
  name: "Regina Yuan",
  eyebrow: "Brand · Growth · GTM",
  location: "Cupertino, CA",
  email: "regina.shengyi@gmail.com",
  phone: "+1 315 484 6882",
  website: "reginayuan.com",
  linkedin: "https://www.linkedin.com/in/reginayuan",
  resume: "/Resume_Regina_Yuan_Brand.pdf",
  // Multi-paragraph hero intro (replaces the old meta tags)
  intro: [
    "Senior brand, growth, and GTM leader across B2B and B2C.",
    "I think in systems, write in stories, and measure in outcomes.",
    "I've spent my career architecting category-defining brands at WP Engine, GoDaddy, and DocuSign — building the strategies, frameworks, and narratives that move markets, not just metrics.",
    "Ninety percent of what I do runs on systems over campaigns, evidence over instinct, and stories tied directly to P&L. The other ten percent is the part most strategists skip: the emotional truth that makes the ninety percent work.",
  ],
};

export const logos = [
  { name: "WP Engine", src: wpEngineLogo },
  { name: "DocuSign", src: docusignLogo },
  { name: "GoDaddy", src: godaddyLogo },
  { name: "National Geographic", src: natGeoLogo },
  { name: "Google", src: googleLogo },
  { name: "CES", src: cesLogo },
];

export type Case = {
  meta: string;
  title: string;
  body: string;
  results?: { value: string; label: string }[];
  /** Optional short eyebrow label, e.g. "CATEGORY EXPANSION" */
  label?: string;
  /** Optional illustration for visual-first treatments */
  illustration?: string;
  /** Optional media: video URL (mp4), YouTube id, or image */
  media?: { type: "video" | "image" | "youtube"; src: string; poster?: string };
  /** Optional external link (e.g., live design system, article, video) */
  href?: string;
};

export type Pillar = {
  num: string;
  title: string;
  lede: string;
  cases: Case[];
};

/* ---------------- 01 BRAND STRATEGY ---------------- */

export const brandStrategy: Pillar = {
  num: "01",
  title: "Brand Strategy",
  lede:
    "Brand evolution, category creation, and portfolio management. My work translates market insight into strategic positioning that reshapes perception and builds long-term brand equity across complex, multi-brand environments.",
  cases: [
    {
      label: "CATEGORY EXPANSION",
      meta: "WP Engine · 2023 — Now",
      title: "Global rebrand & category repositioning",
      body:
        "Architected a comprehensive rebrand aligning Product, Sales, Marketing, and CX around a unified GTM narrative — repositioning WP Engine from hosting provider to WordPress platform leader powering 63% of the CMS web. Covered in MarTech Series.",
      href: "https://martechseries.com/mts-insights/interviews/martech-interview-with-regina-yuan-head-of-brand-wp-engine/",
      // WP Engine logo-expand video (was in Creative Strategy, moved here per request)
      media: { type: "video", src: wpEngineLogoExpand },
      results: [
        { value: "150%", label: "Brand awareness lift" },
        { value: "200%", label: "Search interest surge" },
        { value: "100%", label: "Stakeholder sentiment" },
        { value: "5×", label: "Channel efficiency" },
        { value: "Digiday", label: "Shortlist" },
      ],
    },
    {
      label: "IDENTITY TRANSFORMATION",
      meta: "GoDaddy · 2015 — 2021",
      title: "From utility to iconic.",
      body:
        "Retired the cartoonish mascot, authored a new “GO” monogram (two letters forming a heart), and translated brand empathy into commercial growth across a $4B subscription platform serving 20M+ customers. Featured in Fast Company and A Change of Brand podcast.",
      href: "https://www.fastcompany.com/90450828/godaddys-new-logo-gets-out-of-the-way-heres-why-thats-good",
      // GoDaddy "From Utility to Iconic" manifesto on YouTube
      media: {
        type: "youtube",
        src: "QCyl-vImWaY",
        poster: "https://img.youtube.com/vi/QCyl-vImWaY/maxresdefault.jpg",
      },
      results: [
        { value: "+20%", label: "Traffic" },
        { value: "+12%", label: "Brand search" },
        { value: "+11.5%", label: "Revenue '19→'20" },
        { value: "+40%", label: "E-commerce" },
        { value: "−25 → +25", label: "Preference swing" },
      ],
    },
    {
      label: "M&A BRAND INTEGRATION",
      meta: "GoDaddy · WP Engine",
      title: "Brand portfolio playbook",
      body:
        "Built the M&A integration methodology for 60+ acquired brands at GoDaddy and portfolio positioning for NitroPack, ACF, and others at WP Engine — establishing sub-brand architecture, GTM playbooks, and integration frameworks that compound revenue.",
      media: { type: "image", src: illoMaIntegration },
      results: [
        { value: "60+", label: "Brands integrated" },
        { value: "10%", label: "Net revenue contribution" },
      ],
    },
    {
      label: "CUSTOMER SEGMENTATION",
      meta: "GoDaddy · Enterprise-wide",
      title: "SMB segmentation & persona system",
      body:
        "Led the research, synthesis, and activation of GoDaddy's enterprise-wide customer segmentation — building a McKinsey-validated six-segment SMB model and a full persona library spanning Independents, Partners, and Domain Investors that became the operating system for product, marketing, and CX strategy across 20M+ customers globally.",
      media: { type: "image", src: illoCustomerSegmentation },
      results: [
        { value: "6", label: "Segments defined" },
        { value: "10+", label: "Personas activated" },
        { value: "8", label: "Strategic workstreams aligned" },
      ],
    },
  ],
};

/* ---------------- 02 BRAND INTELLIGENCE ---------------- */

export type IntelCard = {
  icon: "gauge" | "target" | "flask" | "search" | "trending";
  label: string;
  title: string;
  body: string;
  metric?: string;
};

export const brandIntelligence = {
  num: "02",
  title: "Brand Intelligence",
  lede:
    "Brand as a measurable, compounding asset. Five disciplines — escalating from foundation to forward edge — that turn instinct into evidence and creative into commercial output.",
  cards: [
    {
      icon: "gauge",
      label: "MEASUREMENT",
      title: "Brand tracking → business decisions",
      body:
        "Built enterprise brand measurement and insights programs at GoDaddy ($15M budget) and DocuSign — persona development, creative testing, and advertising ROI modeling that elevated brand from cost center to C-suite strategic input.",
      metric: "+15% consideration",
    },
    {
      icon: "target",
      label: "MEDIA EFFICIENCY",
      title: "5× channel efficiency, −25% churn",
      body:
        "Optimized media mix and creative strategy at WP Engine through data-driven performance frameworks across mid-market, agency, and pro-sumer segments.",
      metric: "5× efficiency",
    },
    {
      icon: "flask",
      label: "TESTING CULTURE",
      title: "10× testing velocity",
      body:
        "Established a systematic A/B testing, PSA optimization, and geo-targeting discipline at DocuSign — turning marketing into a learning engine across campaigns, creative, and channels.",
      metric: "10× velocity",
    },
    {
      icon: "search",
      label: "SERP AUTHORITY",
      title: "Thought leadership at scale",
      body:
        "Built thought-leadership programs that dominated search results at GoDaddy and DocuSign — content strategy as brand visibility, ranked, measured, and compounded.",
      metric: "SERP",
    },
    {
      icon: "trending",
      label: "AEO · LLM VISIBILITY",
      title: "Staying ahead of the visibility curve",
      body:
        "Led WP Engine's early transition to Answer Engine Optimization with Omniscient Digital — ranking across ChatGPT, Perplexity, Claude, and Gemini before competitors treated LLM visibility as a channel.",
      metric: "4 LLMs",
    },
  ] as IntelCard[],
};

/* ---------------- 03 CREATIVE STRATEGY ---------------- */

export type CreativeCase = {
  label: string;
  brand: string;
  meta: string;
  title: string;
  body: string;
  href?: string;
  /** Before/after compare slider art */
  before?: string;
  after?: string;
  /** Optional fallback single image / video for cases without before-after */
  media?: { type: "video" | "image"; src: string };
};

export const creativeStrategy = {
  num: "03",
  title: "Creative Strategy & Visual Identity",
  lede:
    "Design systems as brand equity. The creative systems that let hundreds of touchpoints — across product, marketing, and acquired brands — speak with one voice.",
  cases: [
    {
      label: "GODADDY",
      brand: "GoDaddy",
      meta: "Identity transformation · 2018",
      title: "From cartoon mascot to a heart-shaped GO.",
      body:
        "Retired the GoDaddy mascot and authored the new “GO” monogram — two letters forming a heart. The foundation beneath the “utility to iconic” brand shift, codified into a design system unifying 60+ portfolio brands.",
      href: "https://godaddy.design",
      before: illoIdentityTransformation,
      after: illoIdentityTransformation,
    },
    {
      label: "WP ENGINE",
      brand: "WP Engine",
      meta: "Design system · 2024",
      title: "One visual language across 20+ brands.",
      body:
        "Re-envisioned creative identity and component system powering the global rebrand — one scalable visual language across product, marketing, and acquired brands including NitroPack and ACF.",
      media: { type: "video", src: wpEngineLogoExpand },
    },
    {
      label: "DOCUSIGN",
      brand: "DocuSign",
      meta: "Brand platform · 2022",
      title: "Agreement Cloud brand platform",
      body:
        "Contributed to the brand & creative platform supporting the “Agreement Cloud” repositioning, with messaging hierarchy and visual guidelines spanning 11 international markets.",
      href: "https://brand.docusign.com",
      media: { type: "image", src: illoMaIntegration },
    },
    {
      label: "CES ASIA",
      brand: "CES Asia",
      meta: "Launch identity · 2014",
      title: "Launching CES on a new continent.",
      body:
        "Built the CES Asia visual identity, GTM platform, and integrated launch campaign — adapting one of the world's largest tech brands for Mandarin and Japanese markets, exceeding all inaugural KPIs.",
      media: { type: "image", src: illoCategoryExpansion },
    },
  ] as CreativeCase[],
};

/* ---------------- 04 CAMPAIGN STRATEGY ---------------- */

export const campaignStrategy: Pillar = {
  num: "04",
  title: "Campaign Strategy",
  lede:
    "The moments brands become household names. Tentpole campaigns that move culture and the P&L in the same breath — Super Bowl broadcasts, industry awards, and integrated programs that deliver both traffic spikes and brand equity.",
  cases: [
    {
      label: "OPEN WE STAND",
      meta: "GoDaddy · 2020 · Pandemic response",
      title: "#OpenWeStand — coalition rally-cry for SMBs",
      body:
        "Led the creative and cross-brand coalition with Adobe, Cisco, LinkedIn, Mastercard, Microsoft, and Uber to support small businesses during COVID-19. GoDaddy's most effective campaign since rebrand.",
      media: { type: "image", src: campaignOpenWeStand },
      href: "https://www.ispot.tv/search/open-we-stand",
      results: [
        { value: "4.5B", label: "Impressions" },
        { value: "+12%", label: "Brand search queries" },
        { value: "65M+", label: "Anthem views" },
      ],
    },
    {
      label: "A BETTER WAY",
      meta: "DocuSign · 2022 · Agreement Cloud",
      title: "“A Better Way” — anchor brand campaign",
      body:
        "Anchor creative for DocuSign's transition to the Agreement Cloud category — one of DocuSign's best-performing LinkedIn campaigns.",
      media: { type: "image", src: campaignABetterWay },
      href: "https://www.ispot.tv/ad/b83b/docusign-a-better-way",
      results: [
        { value: "3.7M", label: "Views" },
        { value: "+44%", label: "QoQ web traffic" },
        { value: "21K", label: "New trial accounts" },
      ],
    },
    {
      label: "GO YOU",
      meta: "GoDaddy · 2016 · Brand pivot",
      title: "“Go You” — with Shaquille O'Neal",
      body:
        "Replaced the “It's Go Time” slogan with a more personal, encouraging message centered on the entrepreneur. Supported a year of 15% revenue growth and repositioned GoDaddy from infrastructure vendor to champion of the everyday founder.",
      media: { type: "image", src: campaignGoYou },
      href: "https://www.ispot.tv/ad/AfcX/godaddy-go-you-heads-of-cheese",
      results: [
        { value: "+15%", label: "Full-year revenue" },
        { value: "SMB <5", label: "Core target segment" },
      ],
    },
    {
      label: "PEACE OF MIND",
      meta: "WP Engine · 2024 · Brand campaign",
      title: "WordPress Peace of Mind",
      body:
        "Integrated brand campaign positioning WP Engine as the source of WordPress peace of mind — pairing customer-led storytelling with a measurable pipeline program that sustained 105% of annual pipeline goal.",
      media: { type: "image", src: campaignPeaceOfMind },
      href: "https://www.linkedin.com/posts/wordpresspeaceofmind-ugcPost-7129930297290194944-BLY8",
      results: [
        { value: "Digiday", label: "Best Ad nomination" },
        { value: "105%", label: "Annual pipeline goal" },
      ],
    },
  ],
};

/* ---------------- 05 GLOBAL ---------------- */

export const internationalWork = [
  {
    co: "DocuSign",
    regions: "11 markets · global",
    detail:
      "Built a developer market maturity model & tiering system leveraging SAM/TAM, product roadmaps, and efficiency metrics to inform entry strategy across 11 international markets.",
    impact: "+18% revenue",
  },
  {
    co: "GoDaddy",
    regions: "APAC · LATAM · SEA",
    detail:
      "Led international markets strategy and entry campaigns across APAC, South America, and Southeast Asia — localized brand platform and GTM across culturally distinct segments.",
    impact: "~8% of revenue",
  },
  {
    co: "CES / CEA",
    regions: "Asia · inaugural launch",
    detail:
      "Launched CES Asia for the first time, exceeding all inaugural KPIs. Grew international CES attendance 10%+ annually for three consecutive years.",
    impact: "CES Asia launch",
  },
  {
    co: "National Geographic",
    regions: "Asia program · grants",
    detail:
      "Advised on the launch of the Global Exploration Fund — Asia program, developing grants-making procedure and operations for National Geographic's first Asia-dedicated fund.",
    impact: "First Asia fund",
  },
];

export const languages = [
  { name: "English", level: "Native" },
  { name: "Mandarin", level: "Native" },
  { name: "Japanese", level: "Working proficiency · JLPT N1" },
  { name: "Spanish", level: "Conversational · B1" },
];

/* ---------------- 06 EXPERIENCE ---------------- */

export const experience = [
  {
    date: "2023 — Present",
    role: "Head of Corporate Marketing & Global Brand Strategy",
    co: "WP ENGINE",
    desc:
      "Lead brand, creative, and social across the #1 platform for WordPress. I used to be a thinker. Now I present to rooms of hundreds — and I've learned to deeply respect anyone who can hold a crowd.",
  },
  {
    date: "2022 — 2023",
    role: "Director, Brand & Content Strategy",
    co: "DOCUSIGN",
    desc:
      "Figured out how to make DocuSign matter to the person holding the pen — not just the person signing it. Spent a lot of time thinking about SERP, thought leadership, and how to shift brand value from the user who doesn't pay to the business that does.",
  },
  {
    date: "2015 — 2021",
    role: "Director, Global Brand Strategy & Product Marketing",
    co: "GODADDY",
    desc:
      "We took the head out of the logo and put a heart in. We pulled GoDaddy from the Super Bowl, then brought it back. And we gave Danica Patrick a send-off worthy of everything she'd built.",
  },
  {
    date: "2013 — 2015",
    role: "International Marketing Specialist",
    co: "CONSUMER ELECTRONICS ASSOCIATION",
    desc:
      "Brought everyone to Vegas for the biggest tech show on earth. Then brought Vegas to Shanghai and did it all over again.",
  },
  {
    date: "2011 — 2012",
    role: "Research Assistant, Global Exploration Fund",
    co: "NATIONAL GEOGRAPHIC SOCIETY",
    desc:
      "Funded people doing extraordinary things in the wild — sustainable hunting, the recovery of ancient human remains, the conservation of air and water in places most people will never see.",
  },
  {
    date: "2009 — 2010",
    role: "Operations Lead, CSR",
    co: "GOOGLE (CHINA)",
    desc:
      "Built a CSR program that reached two-thirds of colleges across China. It got so big the government shut it down. We considered that a win.",
  },
  {
    date: "2007 — 2009",
    role: "Broadcast Journalist",
    co: "SHANGHAI MEDIA GROUP",
    desc: "Talked to everyone. Made the clip.",
  },
];

export const education = [
  { date: "2011", degree: "M.S., Public Relations", school: "Syracuse University" },
  { date: "2010", degree: "B.A., Broadcast Journalism", school: "Shanghai International Studies University" },
  { date: "2009", degree: "B.A., Law (Second Major)", school: "Fudan University Law School" },
];
