/**
 * Regina Yuan — Brand & Growth Executive
 * Single source of truth for editorial content.
 */

import wpEngineLogo from "@/assets/logos/wp-engine.png";
import docusignLogo from "@/assets/logos/docusign.png";
import godaddyLogo from "@/assets/logos/godaddy.png";
import natGeoLogo from "@/assets/logos/national-geographic.png";
import googleLogo from "@/assets/logos/google.png";
import cesLogo from "@/assets/logos/ces.png";

import illoMaIntegration from "@/assets/illustrations/ma-brand-integration.png";
import illoCategoryExpansion from "@/assets/illustrations/category-expansion.png";
import smbSegmentation from "@/assets/illustrations/smb-segmentation-system.png";

import wpEngineLogoExpand from "@/assets/media/wp-engine-logo-expand.mp4";

import campaignOpenWeStand from "@/assets/campaigns/open-we-stand.png";
import campaignABetterWay from "@/assets/campaigns/a-better-way.png";
import campaignGoYou from "@/assets/campaigns/go-you.png";
import campaignPeaceOfMind from "@/assets/campaigns/peace-of-mind.png";

// Brand evolution before/after
import gdBefore from "@/assets/brand-evolution/godaddy-before.png";
import gdAfter from "@/assets/brand-evolution/godaddy-after.png";
import dsBefore from "@/assets/brand-evolution/docusign-before.png";
import dsAfter from "@/assets/brand-evolution/docusign-after.png";
import wpBefore from "@/assets/brand-evolution/wpengine-before.png";
import wpAfter from "@/assets/brand-evolution/wpengine-after.png";
import cesBefore from "@/assets/brand-evolution/cesasia-before.png";
import cesAfter from "@/assets/brand-evolution/cesasia-after.png";

export const profile = {
  name: "Regina Yuan",
  eyebrow: "Brand · Growth · GTM",
  location: "Cupertino, CA",
  email: "regina.shengyi@gmail.com",
  website: "reginayuan.com",
  linkedin: "https://www.linkedin.com/in/reginayuan",
  resume: "/Resume_Regina_Yuan_Brand.pdf",
  intro: [
    "Senior brand, growth, and GTM leader across B2B and B2C.",
    "I think in systems, write in stories, and measure in outcomes.",
    "I build the strategies that reshape how companies define their category — the positioning frameworks, brand systems, and go-to-market programs that move the markets and the metrics.",
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
  label?: string;
  illustration?: string;
  media?: { type: "video" | "image" | "youtube"; src: string; poster?: string };
  href?: string;
  ctaLabel?: string;
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
    "Strategic positioning isn't a tagline — it's the operating system behind how a company grows. I build the frameworks that align teams, sharpen messaging, and turn market insight into sustained commercial advantage.",
  cases: [
    {
      label: "CATEGORY EXPANSION",
      meta: "WP Engine · 2023 — Now",
      title: "Global rebrand & category repositioning",
      body:
        "Architected a comprehensive rebrand aligning Product, Sales, Marketing, and CX around a unified GTM narrative — repositioning WP Engine from hosting provider to WordPress platform leader powering 63% of the CMS web.",
      href: "https://martechseries.com/mts-insights/interviews/martech-interview-with-regina-yuan-head-of-brand-wp-engine/",
      ctaLabel: "Read my interview with MarTech Series",
      media: { type: "video", src: wpEngineLogoExpand },
      results: [
        { value: "150%", label: "Increase in brand awareness" },
        { value: "200%", label: "Surge in search interest" },
        { value: "5×", label: "Channel efficiency" },
      ],
    },
    {
      label: "IDENTITY TRANSFORMATION",
      meta: "GoDaddy · 2015 — 2021",
      title: "From utility to iconic.",
      body:
        "Retired the cartoonish mascot, authored a new “GO” monogram (two letters forming a heart), and translated brand empathy into commercial growth across a $4B subscription platform serving 20M+ customers.",
      href: "https://www.fastcompany.com/90450828/godaddys-new-logo-gets-out-of-the-way-heres-why-thats-good",
      ctaLabel: "Read on Fast Company",
      media: {
        type: "youtube",
        src: "QCyl-vImWaY",
        poster: "https://img.youtube.com/vi/QCyl-vImWaY/maxresdefault.jpg",
      },
      results: [
        { value: "+20%", label: "Traffic" },
        { value: "+12%", label: "Brand search" },
        { value: "−25 → +25", label: "Preference swing" },
      ],
    },
    {
      label: "M&A BRAND INTEGRATION",
      meta: "GoDaddy · WP Engine",
      title: "Brand portfolio playbook",
      body:
        "Built the M&A integration methodology for 60+ acquired brands at GoDaddy and portfolio positioning for 20+ at WP Engine. Established sub-brand architecture, GTM playbooks, and integration frameworks that drive compounding revenue.",
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
      media: { type: "image", src: smbSegmentation },
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
  icon: "gauge" | "target" | "flask" | "search" | "trending" | "compass" | "heart";
  label: string;
  title: string;
  body: string;
  metric?: string;
};

export const brandIntelligence = {
  num: "02",
  title: "Brand Intelligence",
  lede:
    "Brand isn't intangible — it's a balance sheet entry you build deliberately. Every dollar invested in brand should be traceable to awareness, preference, and ultimately revenue. I build the measurement frameworks that make that case, and turn instinct into evidence and creative into commercial output.",
  cards: [
    {
      icon: "gauge",
      label: "BRAND REACH",
      title: "150% awareness lift. Measured, not assumed.",
      body:
        "Built brand tracking infrastructure at GoDaddy and WP Engine that turned awareness from a gut feeling into a board-ready metric — share of voice, aided/unaided recall, and branded search lift tied to every major campaign and spend decision.",
      metric: "150% awareness lift",
    },
    {
      icon: "search",
      label: "SEARCH VISIBILITY",
      title: "Ranking where buyers look — including where they're starting to look.",
      body:
        "Built thought-leadership programs that held top-10 SERP rankings at GoDaddy and DocuSign, then led WP Engine's early move into Answer Engine Optimization — ranking across ChatGPT, Perplexity, Claude, and Gemini before competitors treated LLM visibility as a channel.",
      metric: "Top 10 SERP",
    },
    {
      icon: "target",
      label: "BRAND PERCEPTION",
      title: "From −25 to +25 brand preference. One repositioning.",
      body:
        "Transformed GoDaddy's brand from utility vendor to champion of the everyday founder — measured through a $15M research program spanning persona development, longitudinal brand tracking, and creative concept validation before every major campaign.",
      metric: "−25 → +25",
    },
    {
      icon: "trending",
      label: "AUDIENCE ENGAGEMENT",
      title: "Double the content. Triple the qualified leads.",
      body:
        "Scaled full-funnel content programs at WP Engine and DocuSign that did not just produce volume — they produced signal. Engagement metrics fed directly back into channel mix, creative briefs, and segment prioritization.",
      metric: "3× qualified leads",
    },
    {
      icon: "flask",
      label: "TESTING & CONVERSION",
      title: "10× testing velocity. Every campaign a learning engine.",
      body:
        "Established systematic A/B testing, PSA optimization, and geo-targeting discipline at DocuSign — turning each campaign into structured data that improved MQL-to-SQL conversion, creative effectiveness, and pipeline contribution across every segment and channel.",
      metric: "10× velocity",
    },
    {
      icon: "heart",
      label: "AFFINITY & RETENTION",
      title: "Churn from 1.7% to 1.3%. Brand as a retention lever.",
      body:
        "Built lifecycle and retention programs at WP Engine that treated brand affinity as a commercial outcome — connecting creative consistency, customer storytelling, and upsell messaging into programs that reduced churn and expanded revenue per customer.",
      metric: "−25% churn",
    },
    {
      icon: "compass",
      label: "BRAND ROI",
      title: "Brand tracking that earns its seat at the C-suite table.",
      body:
        "Built enterprise brand measurement frameworks at GoDaddy and DocuSign that connected brand investment to commercial outcomes — advertising break-even modeling, persona ROI analysis, and brand preference tied directly to revenue forecasting. Elevated brand from cost center to strategic input.",
      metric: "+15% consideration",
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
  hrefLabel?: string;
  before?: string;
  after?: string;
  media?: { type: "video" | "image" | "youtube"; src: string; poster?: string };
};

export const creativeStrategy = {
  num: "03",
  title: "Creative Strategy & Visual Identity",
  lede:
    "Every design system I've built started as a brand strategy question. The visual language came second — after the positioning, the portfolio architecture, and the decision about what the brand needed to stand for.",
  cases: [
    {
      label: "WP ENGINE",
      brand: "WP Engine",
      meta: "Design system · 2024",
      title: "One marketecture across 20+ brands.",
      body:
        "Re-envisioned the creative identity and component system powering the global rebrand — one accessible, scalable visual language across product, marketing, and acquired brands including NitroPack and ACF.",
      href: "https://wpengine.com/brand-assets/",
      hrefLabel: "View brand assets",
      before: wpBefore,
      after: wpAfter,
    },
    {
      label: "DOCUSIGN",
      brand: "DocuSign",
      meta: "Brand platform · 2022",
      title: "Agreement Cloud brand platform",
      body:
        "Built the brand and creative platform supporting the Agreement Cloud repositioning — messaging hierarchy and visual guidelines spanning 11 international markets.",
      href: "https://brand.docusign.com",
      hrefLabel: "Visit live system",
      before: dsBefore,
      after: dsAfter,
    },
    {
      label: "GODADDY",
      brand: "GoDaddy",
      meta: "Design system",
      title: "GoDaddy design system",
      body:
        "The visual foundation beneath the “utility to iconic” brand shift, built to scale across 60+ portfolio brands and 20M+ customers globally. Featured in Fast Company.",
      href: "https://web.archive.org/web/2022/https://godaddy.design",
      hrefLabel: "GoDaddy.Design (Wayback)",
      before: gdBefore,
      after: gdAfter,
    },
    {
      label: "CES ASIA",
      brand: "CES Asia",
      meta: "Launch identity · 2014",
      title: "Launching CES on a new continent.",
      body:
        "Built the CES Asia visual identity from scratch — adapting one of the world's largest tech brands for Mandarin and Japanese markets. Exceeded all inaugural KPIs in year one.",
      before: cesBefore,
      after: cesAfter,
    },
  ] as CreativeCase[],
};

/* ---------------- 04 CAMPAIGN STRATEGY ---------------- */

export const campaignStrategy: Pillar = {
  num: "04",
  title: "Campaign Strategy",
  lede:
    "Tentpole campaigns that move culture and the P&L in the same breath — Super Bowl broadcasts, industry awards, and integrated programs that deliver both traffic spikes and brand equity.",
  cases: [
    {
      label: "PEACE OF MIND",
      meta: "WP Engine · 2024 · Brand campaign",
      title: "WordPress Peace of Mind",
      body:
        "Positioned WP Engine around WordPress peace of mind — the category's most resonant pain point and our sharpest differentiator. Customer-led storytelling paired with a measurable pipeline program that sustained 105% of annual goal.",
      media: { type: "image", src: campaignPeaceOfMind },
      href: "https://www.linkedin.com/posts/wordpresspeaceofmind-ugcPost-7129930297290194944-BLY8",
      results: [
        { value: "Digiday", label: "Best Ad nomination" },
        { value: "105%", label: "Annual pipeline goal" },
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
      label: "OPEN WE STAND",
      meta: "GoDaddy · 2020 · Pandemic response",
      title: "“Open We Stand” coalition rally-cry",
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
      label: "GO YOU",
      meta: "GoDaddy · 2016 · Brand pivot",
      title: "“Go You” — with Shaquille O'Neal",
      body:
        "Replaced “It's Go Time” with a brand idea built around the entrepreneur — not the product. Supported a full year of 15% revenue growth and repositioned GoDaddy from infrastructure vendor to champion of the everyday founder.",
      media: { type: "image", src: campaignGoYou },
      href: "https://www.ispot.tv/ad/AfcX/godaddy-go-you-heads-of-cheese",
      results: [
        { value: "+15%", label: "Full-year revenue" },
        { value: "SMB <5", label: "Core target segment" },
      ],
    },
    {
      label: "CES ASIA",
      meta: "CES / CEA · 2014 · Launch",
      title: "Launching CES on a new continent",
      body:
        "Built the CES Asia integrated launch campaign — adapting one of the world's largest tech brands for Mandarin and Japanese markets, exceeding all inaugural KPIs.",
      media: {
        type: "youtube",
        src: "VC5SK36Jej8",
        poster: "https://img.youtube.com/vi/VC5SK36Jej8/maxresdefault.jpg",
      },
      href: "https://www.youtube.com/watch?v=VC5SK36Jej8",
      results: [
        { value: "10%+", label: "Annual attendance growth" },
        { value: "3 yrs", label: "Consecutive growth" },
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
      "Built global market maturity model and investment framework across 11 international markets, contributing 18% of total revenue from international growth.",
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
  { name: "English", level: "Native", flag: "🇺🇸" },
  { name: "Mandarin", level: "Native", flag: "🇨🇳" },
  { name: "Japanese", level: "Working · JLPT N1", flag: "🇯🇵" },
  { name: "Spanish", level: "Conversational · B1", flag: "🇪🇸" },
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
