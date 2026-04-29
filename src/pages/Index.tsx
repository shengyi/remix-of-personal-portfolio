import { useState, useRef, useEffect } from "react";
import {
  Moon,
  Sun,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  X,
  Play,
  Gauge,
  Target,
  FlaskConical,
  Search,
  TrendingUp,
  Compass,
  Heart,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  profile,
  logos,
  brandStrategy,
  brandIntelligence,
  creativeStrategy,
  campaignStrategy,
  internationalWork,
  languages,
  experience,
  education,
  type Case,
  type CreativeCase,
  type IntelCard,
} from "@/data/regina";
import { Hero } from "@/components/hero/Hero";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

/* ------------------------- Theme + Topbar ------------------------- */

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="size-9 inline-flex items-center justify-center rounded-full border border-rule text-ink hover:bg-ink hover:text-primary-foreground transition-colors"
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="size-4 hidden dark:block" />
    </button>
  );
}

function Topbar() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#global", label: "Global" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-rule/60">
      <div className="container-page flex items-center justify-between h-16">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-ink hover:text-mustard transition-colors"
        >
          Regina&nbsp;Yuan
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-ink transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-mustard scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

/* ------------------------- Brands strip ------------------------- */

function LogoStrip() {
  const sizing: Record<string, string> = {
    "WP Engine": "h-7 md:h-8",
    DocuSign: "h-6 md:h-7",
    GoDaddy: "h-9 md:h-10",
    "National Geographic": "h-9 md:h-10",
    Google: "h-7 md:h-8",
    CES: "h-9 md:h-10",
  };

  return (
    <section className="border-y border-rule/60 bg-paper/40">
      <div className="container-page py-14">
        <div className="label-mono text-center mb-8">
          Brands built · brands integrated · brands advised
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-items-center gap-x-8 md:gap-x-12 gap-y-10">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center h-12">
              <img
                src={l.src}
                alt={l.name}
                loading="lazy"
                className={`${sizing[l.name] ?? "h-8"} w-auto object-contain transition-opacity opacity-80 hover:opacity-100 dark:hidden`}
              />
              <img
                src={l.srcDark ?? l.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`${sizing[l.name] ?? "h-8"} w-auto object-contain transition-opacity opacity-90 hover:opacity-100 hidden dark:block`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Section header ------------------------- */

function SectionHead({
  index,
  title,
  lede,
  fullWidth,
}: {
  index: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div className={`mb-14 md:mb-16 ${fullWidth ? "" : "max-w-5xl"}`}>
      <div className="label-mono mb-6 flex items-center gap-3">
        <span className="size-1.5 rounded-full bg-mustard" />
        {index}
      </div>
      <h2 className="display text-[clamp(36px,5.5vw,72px)] text-ink leading-[1.02] mb-6">
        {title}
      </h2>
      {lede && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {lede}
        </p>
      )}
    </div>
  );
}

/* ====================================================================
 * 01 BRAND STRATEGY — Full-width accordion-style cases with media
 * ==================================================================== */

function MediaPanel({ media, title }: { media?: Case["media"]; title: string }) {
  if (!media) {
    return (
      <div className="aspect-[16/10] bg-cream-deep grid place-items-center text-muted-foreground text-sm">
        Visual coming soon
      </div>
    );
  }
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        className="aspect-[16/10] w-full object-cover bg-black"
      />
    );
  }
  if (media.type === "youtube") {
    return (
      <div className="relative aspect-[16/10] w-full bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${media.src}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerated-2d-canvas; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }
  return (
    <img
      src={media.src}
      alt={title}
      loading="lazy"
      className="aspect-[16/10] w-full object-cover"
    />
  );
}

function BrandStrategySection() {
  const [open, setOpen] = useState(0);
  const cases = brandStrategy.cases;

  return (
    <section id="work" className="container-page py-24 md:py-32">
      <SectionHead
        index={`${brandStrategy.num} / ${brandStrategy.title}`}
        title={
          <>
            Translating market insight into <em>positioning</em> that compounds.
          </>
        }
        lede={brandStrategy.lede}
      />

      <div className="border-t border-rule">
        {cases.map((c, i) => {
          const isOpen = i === open;
          return (
            <div key={c.title} className="border-b border-rule">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full text-left grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_180px_1fr_auto] gap-4 md:gap-8 items-center py-6 md:py-8 group"
              >
                <div className="font-mono text-xs text-mustard tracking-wider md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="hidden md:block label-mono text-olive-soft">
                  {c.label}
                </div>
                <div className="font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-mustard transition-colors">
                  {c.title}
                </div>
                <div
                  className={`size-9 rounded-full border border-ink/20 grid place-items-center text-ink transition-transform ${
                    isOpen ? "rotate-45 bg-ink text-primary-foreground" : ""
                  }`}
                  aria-hidden
                >
                  <span className="text-lg leading-none">+</span>
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-10 md:pb-14 grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12">
                    {/* Media */}
                    <div className="rounded-sm overflow-hidden border border-rule bg-paper">
                      <MediaPanel media={c.media} title={c.title} />
                    </div>

                    {/* Copy + metrics */}
                    <div className="flex flex-col">
                      <div className="label-mono mb-3">{c.meta}</div>
                      <p className="text-base md:text-[17px] text-ink/80 leading-relaxed mb-6">
                        {c.body}
                      </p>

                      {c.results && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 pt-6 border-t border-rule/60">
                          {c.results.map((r) => (
                            <div key={r.label}>
                              <div className="font-display text-2xl md:text-3xl text-ink leading-tight">
                                {r.value}
                              </div>
                              <div className="text-[11px] text-muted-foreground mt-1 leading-snug">
                                {r.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {c.href && (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-6 text-sm text-mustard hover:text-ink transition-colors w-fit"
                        >
                          {c.ctaLabel ?? "Read the case"} <ArrowUpRight className="size-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ====================================================================
 * 02 BRAND INTELLIGENCE — Foundation-style escalating cards
 * ==================================================================== */

const intelIcons: Record<IntelCard["icon"], React.ComponentType<{ className?: string }>> = {
  gauge: Gauge,
  target: Target,
  flask: FlaskConical,
  search: Search,
  trending: TrendingUp,
  compass: Compass,
  heart: Heart,
};

function BrandIntelligenceSection() {
  const cards = brandIntelligence.cards;
  return (
    <section id="intelligence" className="bg-paper/40 border-y border-rule/60">
      <div className="container-page py-24 md:py-32">
        <SectionHead
          index={`${brandIntelligence.num} / ${brandIntelligence.title}`}
          title={
            <>
              Brand as a <em>measurable, compounding</em> asset.
            </>
          }
          lede={brandIntelligence.lede}
        />

        {/* 7-card responsive bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-fr">
          {cards.map((c, i) => {
            const Icon = intelIcons[c.icon];
            const spans = [
              "md:col-span-2 md:row-span-2",
              "md:col-span-1",
              "md:col-span-1",
              "md:col-span-2",
              "md:col-span-1",
              "md:col-span-1",
              "md:col-span-2",
            ];
            return (
              <motion.article
                key={c.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                tabIndex={0}
                className={`group relative ${spans[i] ?? ""} min-h-[220px] md:min-h-[260px] bg-background border border-rule rounded-sm p-5 md:p-7 flex flex-col cursor-default transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:border-mustard hover:shadow-[0_20px_40px_-20px_hsl(var(--ink)/0.15)] focus:outline-none focus:border-mustard`}
              >
                <div className="flex items-start justify-between mb-auto">
                  <Icon className="size-5 text-mustard" />
                  {c.metric && (
                    <span className="font-mono text-[10px] text-mustard tracking-wider">
                      {c.metric}
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <div className="font-mono text-[10px] tracking-[0.18em] text-olive-soft mb-2">
                    {c.label}
                  </div>
                  <h4 className="font-display text-xl md:text-2xl text-ink leading-tight mb-2 group-hover:text-mustard transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {c.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ====================================================================
 * 03 CREATIVE STRATEGY — Left list + right media (compare slider when both)
 * ==================================================================== */

function CompareSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      updateFromClientX(x);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden bg-white select-none touch-none"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromClientX(e.touches[0].clientX);
      }}
    >
      {/* After (full) */}
      <img
        src={after}
        alt={`${alt} — after`}
        className="absolute inset-0 h-full w-full object-contain p-8 md:p-12"
        draggable={false}
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${alt} — before`}
          className="h-full w-full object-contain p-8 md:p-12"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.18em] bg-paper/90 text-ink px-2 py-1 rounded-sm border border-rule">
        BEFORE
      </span>
      <span className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.18em] bg-mustard text-primary-foreground px-2 py-1 rounded-sm">
        AFTER
      </span>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-mustard pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-mustard text-primary-foreground grid place-items-center shadow-lg">
          <ArrowLeft className="size-3.5 -mr-0.5" />
          <ArrowRight className="size-3.5 -ml-0.5" />
        </div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-ink/50 tracking-wider pointer-events-none">
        ← DRAG →
      </div>
    </div>
  );
}

function CreativeMedia({ c }: { c: CreativeCase }) {
  if (c.before && c.after) {
    return <CompareSlider before={c.before} after={c.after} alt={c.title} />;
  }
  if (c.media?.type === "video") {
    return (
      <video
        src={c.media.src}
        autoPlay
        muted
        loop
        playsInline
        className="aspect-[16/10] w-full object-cover bg-black"
      />
    );
  }
  if (c.media?.type === "image") {
    return (
      <img
        src={c.media.src}
        alt={c.title}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
    );
  }
  return (
    <div className="aspect-[16/10] bg-cream-deep grid place-items-center text-muted-foreground text-sm">
      Visual coming soon
    </div>
  );
}

function CreativeStrategySection() {
  const cases = creativeStrategy.cases;
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section id="creative" className="container-page py-24 md:py-32">
      <SectionHead
        index={`${creativeStrategy.num} / ${creativeStrategy.title}`}
        title={
          <>
            Design systems as <em>brand equity.</em>
          </>
        }
        lede={creativeStrategy.lede}
        fullWidth
      />

      <div className="bg-paper border border-rule rounded-sm overflow-hidden">
        <div className="grid lg:grid-cols-[280px_1fr]">
          {/* Left scroll list */}
          <aside className="border-b lg:border-b-0 lg:border-r border-rule bg-background/40">
            <ul className="flex lg:flex-col overflow-x-auto lg:overflow-visible hide-scrollbar">
              {cases.map((c, i) => {
                const isActive = i === active;
                return (
                  <li key={c.label} className="lg:border-b border-rule/60 shrink-0">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`relative w-full text-left px-5 lg:px-6 py-4 lg:py-5 transition-colors ${
                        isActive
                          ? "bg-paper text-ink"
                          : "text-muted-foreground hover:text-ink hover:bg-paper/60"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-mustard" />
                      )}
                      <div className="font-mono text-[10px] tracking-[0.18em] text-mustard mb-1">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="font-display text-base lg:text-lg leading-tight">
                        {c.brand}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right media + copy */}
          <div className="p-5 md:p-8 lg:p-10">
            <div className="grid md:grid-cols-[1fr_280px] gap-6 md:gap-8 items-start">
              <div className="rounded-sm overflow-hidden border border-rule">
                <CreativeMedia c={current} />
              </div>
              <div>
                <div className="label-mono mb-3 text-mustard">{current.label}</div>
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-3">
                  {current.title}
                </h3>
                <div className="text-[11px] text-olive-soft font-mono uppercase tracking-wider mb-4">
                  {current.meta}
                </div>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  {current.body}
                </p>
                {current.href && (
                  <a
                    href={current.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-mustard hover:text-ink transition-colors"
                  >
                    {current.hrefLabel ?? "Visit live system"} <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================
 * 04 CAMPAIGN STRATEGY — Top tabs, large media on right, hover-zoom
 * ==================================================================== */

function CampaignStrategySection() {
  const [active, setActive] = useState(0);
  const cases = campaignStrategy.cases;
  const current = cases[active];
  const isYouTube = current.media?.type === "youtube";
  const watchOn = current.href?.includes("ispot")
    ? "iSpot.tv"
    : current.href?.includes("linkedin")
      ? "LinkedIn"
      : current.href?.includes("youtube")
        ? "YouTube"
        : "video";

  return (
    <section id="campaigns" className="bg-paper/40 border-y border-rule/60">
      <div className="container-page py-24 md:py-32">
        <SectionHead
          index={`${campaignStrategy.num} / ${campaignStrategy.title}`}
          title={
            <>
              The moments brands become <em>household names.</em>
            </>
          }
          lede={campaignStrategy.lede}
          fullWidth
        />

        {/* Top horizontal tab strip */}
        <div className="border-b border-rule mb-10">
          <div className="flex overflow-x-auto hide-scrollbar gap-1">
            {cases.map((c, i) => {
              const isActive = i === active;
              return (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative shrink-0 px-5 py-4 text-left transition-colors ${
                    isActive ? "text-ink" : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-mustard tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base md:text-lg leading-none whitespace-nowrap">
                      {c.label}
                    </span>
                  </div>
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-mustard" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Body — narrow copy on left, large media on right */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-10 md:gap-14 items-start"
        >
          {/* Copy column (narrower) */}
          <div className="flex flex-col">
            <div className="label-mono mb-3">{current.meta}</div>
            <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-5">
              {current.title}
            </h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-7">
              {current.body}
            </p>

            {current.results && (
              <div className="grid grid-cols-3 gap-4 pt-5 border-t border-rule/60">
                {current.results.slice(0, 3).map((r) => (
                  <div key={r.label}>
                    <div className="font-display text-2xl md:text-3xl text-ink leading-tight">
                      {r.value}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1 leading-snug">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {current.href && (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-7 text-sm text-mustard hover:text-ink transition-colors w-fit"
              >
                Watch on {watchOn} <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>

          {/* Media column — large, hover zoom */}
          <a
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch ${current.title}`}
            className="group block w-full"
          >
            <div className="relative rounded-sm overflow-hidden border border-rule bg-black shadow-[0_30px_80px_-30px_hsl(var(--ink)/0.4)]">
              <div className="relative aspect-video overflow-hidden">
                {isYouTube ? (
                  <img
                    src={current.media!.poster}
                    alt={current.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={current.media?.src}
                    alt={current.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 group-hover:from-black/60 transition-colors" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="size-20 md:size-24 rounded-full bg-paper/95 text-ink grid place-items-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="size-8 md:size-10 translate-x-0.5 fill-current" />
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 font-mono text-[11px] text-paper/80 tracking-wider">
                  {watchOn} ↗
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ====================================================================
 * 05 GLOBAL — clean cards, no flags, refreshed languages strip
 * ==================================================================== */

function GlobalSection() {
  return (
    <section id="global" className="container-page py-24 md:py-32">
      <SectionHead
        index="05 / Global"
        title={
          <>
            A <em>world-shaped</em> view of market expansion.
          </>
        }
        lede="A career built across four continents and eleven markets — fluent in the languages, but more importantly fluent in the segmentation, the channels, and the cultural nuance that decide whether expansion compounds or stalls."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {internationalWork.map((w, i) => (
          <motion.article
            key={w.co}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            className="group bg-paper border border-rule hover:border-mustard transition-colors rounded-sm p-7 md:p-8 flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="font-display text-2xl text-ink leading-tight mb-1">
                  {w.co}
                </div>
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-olive-soft">
                  {w.regions}
                </div>
              </div>
              <div className="font-mono text-xs text-mustard font-semibold whitespace-nowrap bg-mustard-soft border border-mustard/20 px-2.5 py-1 rounded-sm">
                {w.impact}
              </div>
            </div>
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
              {w.detail}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Languages — clean horizontal strip */}
      <div className="mt-10 bg-paper border border-rule rounded-sm p-7 md:p-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-10 items-start">
          <div>
            <div className="label-mono mb-3">Languages</div>
            <div className="font-display text-xl md:text-2xl text-ink leading-snug">
              Four working languages.
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Across selling, hiring, and creative direction.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
            {languages.map((l) => (
              <div
                key={l.name}
                className="border-l-2 border-mustard/50 pl-3 py-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl leading-none" aria-hidden>
                    {l.flag}
                  </span>
                  <div className="font-display text-lg text-ink leading-tight">
                    {l.name}
                  </div>
                </div>
                <div className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
                  {l.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================
 * 06 EXPERIENCE
 * ==================================================================== */

function ExperienceSection() {
  return (
    <section id="experience" className="bg-paper/40 border-y border-rule/60">
      <div className="container-page py-24 md:py-32">
        <SectionHead
          index="06 / Experience"
          title={
            <>
              Fifteen years, <em>many chapters</em> — each one a different lens.
            </>
          }
          lede="Each role taught me a different way to look at brand, market, and craft. Together, they make the operating system."
        />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[7px] md:left-[calc(160px+7px)] top-2 bottom-2 w-px bg-rule" aria-hidden />

          <ol className="space-y-10 md:space-y-12">
            {experience.map((x, i) => (
              <motion.li
                key={x.role + x.date}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="relative grid md:grid-cols-[160px_1fr] gap-4 md:gap-12 items-start"
              >
                {/* Date column */}
                <div className="font-mono text-sm text-mustard md:text-right md:pr-2 pt-0.5">
                  {x.date}
                </div>
                {/* Dot + content */}
                <div className="relative pl-8">
                  <span
                    className="absolute left-0 top-1.5 size-[14px] rounded-full bg-background border-2 border-mustard ring-4 ring-paper/40"
                    aria-hidden
                  />
                  <div className="font-display text-xl md:text-2xl text-ink leading-tight mb-1.5">
                    {x.role}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive-soft mb-3">
                    {x.co}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px] max-w-2xl">
                    {x.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <div className="label-mono mb-6">Education</div>
          <div className="border-t border-rule">
            {education.map((e) => (
              <div
                key={e.degree}
                className="grid md:grid-cols-[160px_1.2fr_2fr] gap-6 md:gap-10 py-5 border-b border-rule items-baseline"
              >
                <div className="font-mono text-sm text-mustard">{e.date}</div>
                <div className="font-display text-lg text-ink">{e.degree}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive-soft">
                  {e.school}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================
 * Contact
 * ==================================================================== */

function ContactForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const composed = `From: ${name} <${from}>\n\n${body}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Hello, Regina"
    )}&body=${encodeURIComponent(composed)}`;
    window.location.href = href;
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="bg-background border border-rule rounded-sm w-full max-w-lg p-8 relative"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 size-8 inline-flex items-center justify-center text-muted-foreground hover:text-ink"
        >
          <X className="size-4" />
        </button>
        <div className="label-mono mb-2">Send a note</div>
        <h3 className="font-display text-2xl text-ink mb-6">
          Opens in your <em>mail client.</em>
        </h3>
        <div className="space-y-4">
          <input
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-mustard outline-none py-2 text-ink placeholder:text-muted-foreground"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-mustard outline-none py-2 text-ink placeholder:text-muted-foreground"
          />
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-mustard outline-none py-2 text-ink placeholder:text-muted-foreground"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-mustard outline-none py-2 text-ink placeholder:text-muted-foreground resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex items-center gap-2 bg-mustard text-primary-foreground px-6 py-3 rounded-sm hover:bg-ink transition-colors"
        >
          Open mail draft <ArrowRight className="size-4" />
        </button>
      </form>
    </div>
  );
}

function Contact() {
  const ContactLink = ({
    children,
    href,
    external,
    onClick,
  }: {
    children: React.ReactNode;
    href?: string;
    external?: boolean;
    onClick?: () => void;
  }) => {
    const Comp: any = href ? "a" : "button";
    return (
      <Comp
        {...(href
          ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
          : { type: "button", onClick })}
        className="group flex items-center justify-between py-5 border-b border-cream/20 hover:border-mustard transition-colors w-full text-left"
      >
        <span className="font-display text-2xl md:text-3xl text-primary-foreground group-hover:text-mustard transition-colors">
          {children}
        </span>
        {external ? (
          <ArrowUpRight className="size-5 text-mustard group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        ) : (
          <ArrowRight className="size-5 text-mustard group-hover:translate-x-1 transition-transform" />
        )}
      </Comp>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="bg-ink text-primary-foreground">
      <div className="container-page py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase mb-6 text-mustard">
            Contact
          </div>
          <h2 className="display text-[clamp(36px,5vw,64px)] leading-[1.02]">
            Let's build a <em className="!text-mustard">category-defining</em> brand.
          </h2>
          <p className="mt-6 text-primary-foreground/70 max-w-md leading-relaxed">
            Open to advisory roles, fractional engagements, and full-time leadership
            conversations at category-defining brands.
          </p>
        </div>
        <div className="self-end w-full">
          <ContactLink onClick={() => setOpen(true)}>Drop me a line</ContactLink>
          <ContactLink href={profile.linkedin} external>
            LinkedIn · Regina Yuan
          </ContactLink>
          <ContactLink href={profile.resume} external>
            Download résumé
          </ContactLink>
        </div>
      </div>
      {open && <ContactForm onClose={() => setOpen(false)} />}
    </section>
  );
}

function Footer() {
  return (
    <footer className="container-page py-10 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-muted-foreground">
      <div>© {new Date().getFullYear()} Regina Yuan</div>
      <div className="font-mono">Built with intent · {profile.location}</div>
    </footer>
  );
}

/* ====================================================================
 * Page
 * ==================================================================== */

export default function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <Hero onContact={() => setContactOpen(true)} />
      <LogoStrip />
      <BrandStrategySection />
      <BrandIntelligenceSection />
      <CreativeStrategySection />
      <CampaignStrategySection />
      <GlobalSection />
      <ExperienceSection />
      <Contact />
      <Footer />
      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </div>
  );
}
