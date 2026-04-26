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

import illoCategoryExpansion from "@/assets/illustrations/category-expansion.png";
import illoIdentityTransformation from "@/assets/illustrations/identity-transformation.png";
import illoMaIntegration from "@/assets/illustrations/ma-brand-integration.png";
import illoCustomerSegmentation from "@/assets/illustrations/customer-segmentation.png";

export const profile = {
  name: "Regina Yuan",
  eyebrow: "Brand & Growth Executive",
  location: "Cupertino, CA",
  email: "regina@reginayuan.com",
  phone: "+1 315 484 6882",
  website: "reginayuan.com",
  linkedin: "https://www.linkedin.com/in/reginayuan",
  heroMeta: ["15+ yrs", "B2B · B2C SaaS", "$25M+ budgets", "Cupertino, CA"],
  heroIntro:
    "Senior brand and marketing leader architecting category-defining brands at high-velocity consumer and SaaS companies — from GoDaddy's “utility-to-iconic” transformation to WP Engine's global rebrand and DocuSign's Agreement Cloud expansion.",
};

export const metrics = [
  { value: "150", suffix: "%", label: "Brand awareness lift", sub: "WP Engine rebrand" },
  { value: "60", suffix: "+", label: "M&A brands integrated", sub: "GoDaddy portfolio" },
  { value: "5", suffix: "×", label: "Channel efficiency", sub: "data-driven framework" },
  { value: "10", suffix: "×", label: "Testing velocity", sub: "DocuSign GTM culture" },
];

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
};

export type Pillar = {
  num: string;
  title: string;
  lede: string;
  cases: Case[];
};

export const pillars: Pillar[] = [
  {
    num: "01",
    title: "Brand Strategy",
    lede:
      "Brand evolution, category creation, and M&A portfolio architecture. Translating market insight into positioning that changes how a category is valued — and acquired companies into a coherent house of brands.",
    cases: [
      {
        label: "CATEGORY EXPANSION",
        meta: "WP Engine · 2023–Now",
        title: "Global rebrand & category repositioning",
        illustration: illoCategoryExpansion,
        body:
          "Architected a comprehensive rebrand aligning Product, Sales, Marketing, and CX around a unified GTM narrative — repositioning WP Engine from hosting provider to WordPress platform leader powering 63% of the CMS web.",
        results: [
          { value: "150%", label: "Brand awareness lift" },
          { value: "200%", label: "Search interest surge" },
          { value: "100%", label: "Stakeholder sentiment" },
        ],
      },
      {
        label: "IDENTITY TRANSFORMATION",
        meta: "GoDaddy · 2015–2021",
        title: "“Utility to iconic” brand transformation",
        illustration: illoIdentityTransformation,
        body:
          "Led GoDaddy's first portfolio-wide brand strategy and brand measurement framework on a $25M annual budget — shifting brand perception from functional utility to aspirational platform for 20M+ creators and SMBs.",
        results: [
          { value: "−25 → +25", label: "Brand preference swing" },
          { value: "25%", label: "Revenue growth YoY" },
        ],
      },
      {
        label: "M&A BRAND INTEGRATION",
        meta: "GoDaddy · WP Engine",
        title: "Brand portfolio playbook",
        illustration: illoMaIntegration,
        body:
          "Built the M&A integration methodology for 60+ acquired brands at GoDaddy and portfolio positioning for NitroPack, ACF, and others at WP Engine — establishing sub-brand architecture, GTM playbooks, and integration frameworks that compound revenue.",
        results: [
          { value: "60+", label: "Brands integrated" },
          { value: "10%", label: "Net revenue contribution" },
        ],
      },
      {
        label: "CUSTOMER SEGMENTATION",
        meta: "GoDaddy · Enterprise-wide",
        title: "SMB segmentation & persona system",
        illustration: illoCustomerSegmentation,
        body:
          "Led the research, synthesis, and activation of GoDaddy's enterprise-wide customer segmentation — building a McKinsey-validated six-segment SMB model and a full persona library spanning Independents, Partners, and Domain Investors that became the operating system for product, marketing, and CX strategy across 20M+ customers globally.",
        results: [
          { value: "6", label: "Segments defined" },
          { value: "10+", label: "Personas activated" },
          { value: "8", label: "Strategic workstreams aligned" },
        ],
      },
    ],
  },
  {
    num: "02",
    title: "Brand Intelligence",
    lede:
      "Brand as a measurable, compounding asset. Measurement frameworks that drive business decisions, media optimization that bends the efficiency curve, and testing culture that turns instinct into evidence.",
    cases: [
      {
        meta: "Measurement Framework",
        title: "Brand tracking → business decisions",
        body:
          "Built enterprise brand measurement and insights programs at GoDaddy ($15M budget) and DocuSign — persona development, creative testing, and advertising ROI modeling that elevated brand from cost center to C-suite strategic input.",
        results: [{ value: "15%", label: "DocuSign brand consideration lift" }],
      },
      {
        meta: "Media & Channel Efficiency",
        title: "5× channel efficiency, −25% churn",
        body:
          "Optimized media mix and creative strategy at WP Engine through data-driven performance frameworks spanning digital and channel marketing — lifting efficiency 5× and reducing churn by 25% across mid-market, agency, and pro-sumer segments.",
        results: [
          { value: "5×", label: "Channel efficiency" },
          { value: "−25%", label: "Customer churn" },
        ],
      },
      {
        meta: "Testing Culture",
        title: "10× testing velocity at DocuSign",
        body:
          "Established a systematic A/B testing, PSA optimization, and geo-targeting discipline — turning marketing into a learning engine and increasing testing velocity by an order of magnitude across campaigns, creative, and channels.",
        results: [
          { value: "10×", label: "Experiments per quarter" },
          { value: "2×", label: "Content production volume" },
        ],
      },
      {
        label: "CONTENT & VISIBILITY",
        meta: "WP Engine · GoDaddy · DocuSign",
        title: "SERP to AEO — staying ahead of the visibility curve",
        body:
          "Content strategy as brand visibility. Built thought-leadership programs that dominated search results at GoDaddy and DocuSign, then led WP Engine's early transition to Answer Engine Optimization — partnering with Omniscient Digital to rank across ChatGPT, Perplexity, Claude, and Gemini before competitors treated LLM visibility as a channel.",
        results: [
          { value: "AEO", label: "Early-mover position" },
          { value: "4 LLMs", label: "Measured visibility" },
          { value: "SERP", label: "Sustained authority" },
        ],
      },
    ],
  },
  {
    num: "03",
    title: "Creative Strategy & Visual Identity",
    lede:
      "Design systems as brand equity. Consistency at scale is what separates campaigns from a brand — I build the creative systems that let hundreds of touchpoints speak with one voice.",
    cases: [
      {
        meta: "GoDaddy Design System · godaddy.design",
        title: "Creative identity unifying 60+ brands",
        body:
          "Creative identity and design system unifying 60+ portfolio brands — the foundation beneath the “utility to iconic” brand shift, symbolized by the new “GO” logomark forming a heart.",
      },
      {
        meta: "DocuSign Brand System · brand.docusign.com",
        title: "Agreement Cloud brand platform",
        body:
          "Contributed to the brand & creative platform supporting the “Agreement Cloud” repositioning, with messaging hierarchy and visual guidelines spanning 11 international markets.",
      },
      {
        meta: "WP Engine Design System · launching",
        title: "One visual language across 20+ brands",
        body:
          "Re-envisioned creative identity and component system powering the global rebrand — one scalable visual language across product, marketing, and 20+ acquired brands.",
      },
    ],
  },
  {
    num: "04",
    title: "Campaign Strategy",
    lede:
      "The moments brands become household names. Tentpole campaigns that move culture and the P&L in the same breath — Super Bowl broadcasts, industry awards, and integrated programs that deliver both traffic spikes and brand equity.",
    cases: [
      {
        meta: "GoDaddy · 2020 · Pandemic response",
        title: "#OpenWeStand — coalition rally-cry for SMBs",
        body:
          "Led the creative and cross-brand coalition with Adobe, Cisco, LinkedIn, Mastercard, Microsoft, and Uber to support small businesses during COVID-19. GoDaddy's most effective campaign since rebrand.",
        results: [
          { value: "4.5B", label: "Impressions" },
          { value: "+12%", label: "Brand search queries" },
          { value: "65M+", label: "Anthem views" },
        ],
      },
      {
        meta: "DocuSign · 2022 · Agreement Cloud",
        title: "“A Better Way” — anchor brand campaign",
        body:
          "Anchor creative for DocuSign's transition to the Agreement Cloud category — one of DocuSign's best-performing LinkedIn campaigns.",
        results: [
          { value: "3.7M", label: "Views" },
          { value: "+44%", label: "QoQ web traffic" },
          { value: "21K", label: "New trial accounts" },
          { value: "2.79×", label: "vs LinkedIn benchmark" },
        ],
      },
      {
        meta: "GoDaddy · 2016 · Brand pivot",
        title: "“Go You” — with Shaquille O'Neal",
        body:
          "Replaced the “It's Go Time” slogan with a more personal, encouraging message centered on the entrepreneur. Supported a year of 15% revenue growth and repositioned GoDaddy from infrastructure vendor to champion of the everyday founder.",
        results: [
          { value: "+15%", label: "Full-year revenue" },
          { value: "SMB <5", label: "Core target segment" },
        ],
      },
      {
        meta: "WP Engine · 2024",
        title: "Digiday Award nomination",
        body:
          "Integrated campaign delivering award-nominated creative and measurable pipeline — shortlisted at the Digiday Awards for brand and content excellence.",
        results: [{ value: "105%", label: "Annual pipeline goal, sustained" }],
      },
    ],
  },
];

export const flagshipCases = [
  {
    eyebrow: "Case Study · GoDaddy · 2015–2021",
    title: "From utility to iconic.",
    body:
      "Retired the cartoonish mascot, authored a new “GO” monogram (two letters forming a heart), and translated brand empathy into commercial growth. Featured in Fast Company and A Change of Brand podcast.",
    chips: [
      "+20% traffic",
      "+12% brand search",
      "+11.5% revenue '19→'20",
      "+40% e-commerce",
      "60+ M&A brands",
    ],
    href: "https://www.fastcompany.com/90450828/godaddys-new-logo-gets-out-of-the-way-heres-why-thats-good",
  },
  {
    eyebrow: "Case Study · WP Engine · 2023 – present",
    title: "A rebrand for the WordPress era.",
    body:
      "Led a global rebrand aligning product, sales, marketing, and CX around a unified GTM narrative — category repositioning plus an M&A integration playbook for NitroPack, ACF and 20+ brands. Covered in MarTech Series.",
    chips: [
      "+150% awareness",
      "+200% search interest",
      "100% stakeholder sentiment",
      "Digiday shortlist",
      "5× channel efficiency",
    ],
    href: "https://martechseries.com/mts-insights/interviews/martech-interview-with-regina-yuan-head-of-brand-wp-engine/",
  },
];

export const press = [
  {
    outlet: "MarTech Series · Interview",
    title: "MarTech Interview with Regina Yuan, Head of Brand, WP Engine",
    href: "https://martechseries.com/mts-insights/interviews/martech-interview-with-regina-yuan-head-of-brand-wp-engine/",
  },
  {
    outlet: "Fast Company",
    title: "GoDaddy's new logo gets out of the way — here's why that's good",
    href: "https://www.fastcompany.com/90450828/godaddys-new-logo-gets-out-of-the-way-heres-why-thats-good",
  },
  {
    outlet: "A Change of Brand · Podcast",
    title: "GoDaddy, with Chris Rushing — the brand evolution story",
    href: "https://www.achangeofbrand.com/episodes/godaddy-with-chris-rushing",
  },
  {
    outlet: "GoDaddy Newsroom · 2020",
    title: "#OpenWeStand coalition grows — Adobe, Cisco, LinkedIn, Mastercard, Microsoft, Uber",
    href: "https://aboutus.godaddy.net/newsroom/news-releases/press-release-details/2020/GoDaddys-OpenWeStand-Coalition-Grows-with-Adobe-Cisco-LinkedIn-Mastercard-Microsoft-and-Uber-Supporting-Small-Businesses-During-COVID-19/default.aspx",
  },
];

export const awards = [
  {
    outlet: "Digiday Video & TV Awards",
    title: "WP Engine shortlisted alongside Adobe, Salesforce, Bloomberg, Samsung",
    href: "https://digiday.com/media/adobe-barkley-cnbc-news-salesforce-samsung-and-bloomberg-are-among-this-years-digiday-video-and-tv-awards-shortlist-nominees/",
  },
  {
    outlet: "GoDaddy #OpenWeStand · 2020",
    title: "Most effective GoDaddy campaign since rebrand — 4.5B impressions",
  },
  {
    outlet: "CES Asia · Inaugural year",
    title: "Launched CES Asia — exceeded all inaugural KPIs",
  },
  {
    outlet: "National Geographic · First Asia fund",
    title: "Developed NGS's first Global Exploration Fund — Asia program",
  },
];

export const endorsements = [
  {
    quote:
      "Regina rebuilt the brand measurement function from the ground up — turning brand from a cost center into an input the C-suite actually argued about in planning.",
    role: "Former CMO · Subscription SaaS",
    context: "On GoDaddy “utility to iconic” work · $15M measurement program",
  },
  {
    quote:
      "She carries a rare combination — executive posture, creative taste, and the quantitative discipline to defend both. The rebrand landed because every team felt heard and every result was measurable.",
    role: "Cross-functional Partner · WP Engine",
    context: "On global rebrand · 100% positive stakeholder sentiment",
  },
  {
    quote:
      "Regina thinks in markets, not campaigns. The maturity model she built changed how we prioritized international investment for the entire company.",
    role: "Former Strategy Lead · DocuSign",
    context: "On 11-market expansion framework · 18% of revenue",
  },
];

export const internationalWork = [
  {
    co: "DocuSign",
    detail:
      "Built a developer market maturity model & tiering system leveraging SAM/TAM, product roadmaps, and efficiency metrics to inform entry strategy across 11 international markets.",
    impact: "+18% revenue",
  },
  {
    co: "GoDaddy",
    detail:
      "Led international markets strategy and entry campaigns across APAC, South America, and Southeast Asia — localized brand platform and GTM across culturally distinct segments.",
    impact: "3 regions",
  },
  {
    co: "CES / CEA",
    detail:
      "Launched CES Asia for the first time, exceeding all inaugural KPIs. Grew international CES attendance 10%+ annually for three consecutive years.",
    impact: "CES Asia launch",
  },
  {
    co: "National Geographic",
    detail:
      "Advised on the launch of the Global Exploration Fund — Asia program, developing grants-making procedure and operations for National Geographic's first Asia-dedicated fund.",
    impact: "First Asia fund",
  },
];

export const languages = [
  { name: "Mandarin", level: "Native" },
  { name: "Japanese", level: "JLPT N1" },
  { name: "Spanish", level: "Conversational · B1" },
  { name: "English", level: "Professional" },
];

export const experience = [
  {
    date: "2023 — Present",
    role: "Head of Corporate Marketing & Global Brand Strategy",
    co: "WP Engine · Remote",
    desc:
      "Lead brand, creative, content, and social across a $1B WordPress platform. Architected the global rebrand, run integrated GTM across mid-market, agency, and pro-sumer, and own portfolio strategy for 20+ brands including NitroPack and ACF.",
  },
  {
    date: "2022 — 2023",
    role: "Director, Brand & Content Strategy",
    co: "DocuSign · San Francisco",
    desc:
      "Led brand strategy for the transition from e-signature to Agreement Cloud / CLM platform. Built the 11-market expansion framework contributing 18% of total revenue, and stood up the testing culture that drove 10× velocity.",
  },
  {
    date: "2015 — 2021",
    role: "Director, Global Brand Strategy & Product Marketing",
    co: "GoDaddy · Sunnyvale",
    desc:
      "Oversaw brand portfolio, product marketing, and GTM for a $4B subscription platform serving 20M+ customers. Architected the M&A framework for 60+ brands, led Super Bowl campaigns, and ran brand measurement on a $25M budget.",
  },
  {
    date: "2013 — 2015",
    role: "International Marketing Specialist",
    co: "Consumer Electronics Association · Arlington, VA",
    desc:
      "Led GTM and integrated campaigns for the inaugural CES Asia launch. Grew international CES attendance 10%+ annually for three consecutive years across EMEA and APAC.",
  },
  {
    date: "2011 — 2012",
    role: "Research Assistant, Global Exploration Fund",
    co: "National Geographic Society · Washington D.C.",
    desc:
      "Developed National Geographic's first Global Exploration Fund — Asia program, advising on grants-making procedure and operations.",
  },
  {
    date: "2009 — 2010",
    role: "Operations Lead, CSR",
    co: "Google (China) · Shanghai",
    desc:
      "Tripled participation in Google (China) Social Innovation Grant Program through marketing initiatives and vendor negotiations.",
  },
  {
    date: "2007 — 2009",
    role: "Broadcast Journalist",
    co: "Shanghai Media Group · Shanghai",
    desc:
      "On-camera reporter and production assistant for International Channel Shanghai — the first bilingual TV channel in the region.",
  },
];

export const education = [
  { date: "2011", degree: "M.S., Public Relations", school: "Syracuse University" },
  { date: "2010", degree: "B.A., Broadcast Journalism", school: "Shanghai International Studies University" },
  { date: "2009", degree: "B.A., Law (Second Major)", school: "Fudan University Law School" },
];
