import { useState } from "react";
import { Moon, Sun, ArrowUpRight, ArrowRight, ArrowLeft, X, Play } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  profile,
  metrics,
  logos,
  pillars,
  
  press,
  awards,
  endorsements,
  internationalWork,
  languages,
  experience,
  education,
  type Case,
} from "@/data/regina";
import { Hero } from "@/components/hero/Hero";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="size-9 inline-flex items-center justify-center rounded-full border border-rule text-olive hover:bg-olive hover:text-primary-foreground transition-colors"
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="size-4 hidden dark:block" />
    </button>
  );
}

function Topbar() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#international", label: "Global" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-rule/60">
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="font-display text-lg tracking-tight text-ink hover:text-olive transition-colors">
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
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-olive scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
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

// Hero is imported from @/components/hero/Hero


function Metrics() {
  return (
    <section className="border-y-2 border-olive/30 bg-cream-deep/40">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-rule/60">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            className="px-4 md:px-8 py-10"
          >
            <div className="font-display text-5xl md:text-6xl text-ink leading-none">
              {m.value}
              <sup className="text-accent text-3xl md:text-4xl ml-0.5 font-light">{m.suffix}</sup>
            </div>
            <div className="mt-4 text-sm text-olive leading-snug">
              {m.label}
              <br />
              <span className="text-muted-foreground">{m.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LogoStrip() {
  // Per-logo optical height tuning (Tailwind h-* classes) so each wordmark
  // reads at the same visual cap-height regardless of intrinsic aspect ratio.
  const sizing: Record<string, string> = {
    "WP Engine": "h-7 md:h-8",
    DocuSign: "h-6 md:h-7",
    GoDaddy: "h-9 md:h-10",
    "National Geographic": "h-9 md:h-10",
    Google: "h-7 md:h-8",
    CES: "h-9 md:h-10",
  };

  return (
    <section className="container-page py-16">
      <div className="label-mono text-center mb-8 text-olive-soft">
        Brands built · brands integrated · brands advised
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-items-center gap-x-8 md:gap-x-12 gap-y-10">
        {logos.map((l) => (
          <div key={l.name} className="flex items-center justify-center h-12">
            <img
              src={l.src}
              alt={l.name}
              loading="lazy"
              className={`${sizing[l.name] ?? "h-8"} w-auto object-contain transition-opacity opacity-90 hover:opacity-100`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ index, title }: { index: string; title: React.ReactNode }) {
  return (
    <div className="mb-16 md:mb-20 grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 items-baseline">
      <div className="label-mono pt-2 border-t border-olive w-fit md:w-auto pr-6">{index}</div>
      <h2 className="display text-[clamp(36px,5vw,64px)] text-ink max-w-3xl">{title}</h2>
    </div>
  );
}

function CreativeShowcase({ cases }: { cases: Case[] }) {
  const [active, setActive] = useState(0);
  const current = cases[active];
  const go = (dir: 1 | -1) =>
    setActive((a) => (a + dir + cases.length) % cases.length);

  return (
    <div className="rounded-md border border-rule bg-paper overflow-hidden">
      {/* Media stage */}
      <div className="relative aspect-[16/10] md:aspect-[16/9] bg-[#0b0b10] overflow-hidden">
        {cases.map((c, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== active}
          >
            {c.media?.type === "video" ? (
              <video
                src={c.media.src}
                poster={c.media.poster}
                autoPlay={i === active}
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : c.media?.type === "image" ? (
              <img
                src={c.media.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-muted-foreground text-sm">
                Visual coming soon
              </div>
            )}
          </div>
        ))}

        {/* Eyebrow pill */}
        <div className="absolute left-4 top-4 z-10">
          <span className="inline-block bg-paper text-ink font-mono text-[11px] tracking-[0.18em] font-semibold px-2.5 py-1 rounded-sm shadow-sm border border-rule">
            {current.label ?? "DESIGN SYSTEM"}
          </span>
        </div>

        {/* Carousel arrows */}
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="size-9 inline-flex items-center justify-center rounded-full bg-paper/90 border border-rule text-ink hover:bg-olive hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="size-9 inline-flex items-center justify-center rounded-full bg-paper/90 border border-rule text-ink hover:bg-olive hover:text-primary-foreground transition-colors"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <div className="text-[11px] label-mono text-olive mb-2">{current.meta}</div>
          <h4 className="font-display text-2xl md:text-3xl text-ink mb-3 leading-tight">
            {current.title}
          </h4>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
            {current.body}
          </p>
          {current.href && (
            <a
              href={current.href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-olive hover:text-ink transition-colors"
            >
              Visit live system <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
        <div className="font-mono text-xs text-muted-foreground tracking-wider whitespace-nowrap">
          {String(active + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
        </div>
      </div>

      {/* Tab strip */}
      <div className="grid grid-cols-3 border-t border-rule">
        {cases.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left px-5 py-4 border-l first:border-l-0 border-rule transition-colors ${
              i === active
                ? "bg-cream-deep/60 text-ink"
                : "text-muted-foreground hover:text-ink hover:bg-cream-deep/30"
            }`}
          >
            <div className="font-mono text-[10px] tracking-[0.18em] mb-1">
              {c.label ?? `0${i + 1}`}
            </div>
            <div className="font-display text-sm leading-tight line-clamp-2">
              {c.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CampaignTabs({ cases }: { cases: Case[] }) {
  const [active, setActive] = useState(0);
  const current = cases[active];
  const topResults = (current.results ?? []).slice(0, 3);

  return (
    <div className="rounded-md border border-rule bg-paper overflow-hidden">
      {/* Tab strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-rule">
        {cases.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative text-left px-5 py-4 border-l first:border-l-0 border-rule transition-colors ${
              i === active
                ? "bg-paper text-ink"
                : "bg-cream-deep/30 text-muted-foreground hover:text-ink hover:bg-cream-deep/50"
            }`}
          >
            {i === active && (
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-olive" />
            )}
            <div className="font-mono text-[10px] tracking-[0.18em] mb-1">
              {c.label ?? `0${i + 1}`}
            </div>
            <div className="font-display text-sm leading-tight line-clamp-2">
              {c.title}
            </div>
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="grid md:grid-cols-[6fr_5fr] gap-0">
        {/* Left — device mockup with thumbnail */}
        <div className="relative bg-cream-deep/40 p-6 md:p-10 flex items-center justify-center min-h-[360px] md:min-h-[460px]">
          <a
            href={current.href}
            target="_blank"
            rel="noopener"
            aria-label={`Watch ${current.title}`}
            className="group relative block w-full max-w-md"
          >
            {/* Browser-style chrome */}
            <div className="rounded-lg overflow-hidden border border-rule bg-[#0b0b10] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a20] border-b border-black/40">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={current.media?.src}
                  alt={current.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Hover tint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
                {/* Play button */}
                <div className="absolute inset-0 grid place-items-center">
                  <span className="size-16 rounded-full bg-paper/95 text-ink grid place-items-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="size-7 translate-x-0.5 fill-current" />
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-center font-mono text-[11px] text-olive tracking-wider">
              Watch on {current.href?.includes("ispot") ? "iSpot.tv" : current.href?.includes("linkedin") ? "LinkedIn" : "video"} ↗
            </div>
          </a>
        </div>

        {/* Right — copy + metrics */}
        <div className="p-6 md:p-10 flex flex-col">
          <div className="text-[11px] label-mono text-olive mb-3">{current.meta}</div>
          <h4 className="font-display text-2xl md:text-3xl text-ink mb-4 leading-tight">
            {current.title}
          </h4>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            {current.body}
          </p>

          {topResults.length > 0 && (
            <div className="mt-auto grid grid-cols-3 gap-4 pt-6 border-t border-rule/60">
              {topResults.map((r) => (
                <div key={r.label}>
                  <div className="font-display text-2xl md:text-3xl text-olive leading-tight">
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
              rel="noopener"
              className="inline-flex items-center gap-1.5 mt-5 text-sm text-olive hover:text-ink transition-colors w-fit"
            >
              Watch full spot <ArrowUpRight className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Pillars() {
  return (
    <section id="work" className="container-page py-24 md:py-32">
      <SectionHead
        index="01 / Work"
        title={
          <>
            Four <em>pillars,</em> one operating system.
          </>
        }
      />
      <p className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed">
        Modern brand leadership lives at the intersection of craft and compounding.
        These are the four pillars I build across — each grounded in measurable
        commercial outcomes, each practiced at scale.
      </p>

      <div className="space-y-24 md:space-y-32">
        {pillars.map((p, idx) => {
          // Pillar 01 (Brand Strategy) gets a full-width header + flagship-style cards
          if (idx === 0) {
            return (
              <motion.div key={p.num} {...fadeUp} className="space-y-10">
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-end">
                  <div>
                    <div className="font-mono text-xs text-accent mb-3 tracking-wider font-semibold">
                      PILLAR {p.num}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-ink mb-4 leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                    {p.lede}
                  </p>
                </div>

                {/* Flagship-style cards: top 2 are featured (with hrefs), rest are compact */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {p.cases.slice(0, 2).map((c) => {
                    const Comp: any = c.href ? "a" : "div";
                    return (
                      <Comp
                        key={c.title}
                        {...(c.href
                          ? { href: c.href, target: "_blank", rel: "noopener" }
                          : {})}
                        className={`group relative bg-paper border border-rule p-8 md:p-10 rounded-sm transition-colors block ${
                          c.href ? "hover:border-olive cursor-pointer" : ""
                        }`}
                      >
                        <div className="label-mono mb-6 text-olive">
                          Case Study · {c.meta}
                        </div>
                        <h4 className="font-display text-2xl md:text-3xl mb-4 leading-tight text-ink">
                          {c.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {c.body}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(c.results ?? []).map((r) => (
                            <span
                              key={r.label}
                              className="text-xs px-3 py-1 rounded-full border border-rule text-ink/80 bg-background"
                            >
                              {r.value} {r.label.toLowerCase()}
                            </span>
                          ))}
                        </div>
                        {c.href && (
                          <ArrowUpRight className="absolute top-8 right-8 size-5 text-olive group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        )}
                      </Comp>
                    );
                  })}
                </div>

                {/* Remaining cases as a 2-up compact row */}
                {p.cases.length > 2 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {p.cases.slice(2).map((c) => (
                      <article
                        key={c.title}
                        className="group bg-cream-deep/40 border border-rule rounded-sm p-7 md:p-8 hover:border-olive transition-colors"
                      >
                        <div className="label-mono mb-3 text-olive">
                          {c.label ?? c.meta}
                        </div>
                        <h4 className="font-display text-xl md:text-2xl text-ink mb-3 leading-tight">
                          {c.title}
                        </h4>
                        <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                          {c.body}
                        </p>
                        {c.results && (
                          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-rule/60">
                            {c.results.map((r) => (
                              <div key={r.label}>
                                <div className="font-display text-lg text-olive leading-tight">
                                  {r.value}
                                </div>
                                <div className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                                  {r.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          }

          // Pillar 04 (Campaign Strategy) — full-width header, full-width tabs below
          if (idx === 3) {
            return (
              <motion.div key={p.num} {...fadeUp} className="space-y-10">
                <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-end">
                  <div>
                    <div className="font-mono text-xs text-accent mb-3 tracking-wider font-semibold">
                      PILLAR {p.num}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-ink mb-4 leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                    {p.lede}
                  </p>
                </div>
                <CampaignTabs cases={p.cases} />
              </motion.div>
            );
          }

          // Pillars 02 (Brand Intelligence) & 03 (Creative) keep their existing 2-col layouts
          return (
            <motion.div key={p.num} {...fadeUp} className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
              <div className="md:sticky md:top-24 md:self-start">
                <div className="font-mono text-xs text-accent mb-3 tracking-wider font-semibold">
                  PILLAR {p.num}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-ink mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.lede}</p>
              </div>

              <div
                className={
                  idx === 1
                    ? "grid grid-cols-1 sm:grid-cols-6 auto-rows-[220px] gap-4"
                    : ""
                }
              >
                {idx === 2 && <CreativeShowcase cases={p.cases} />}
                {idx === 1 && p.cases.map((c, i) => {
                  const spans = [
                    "sm:col-span-3 sm:row-span-2",
                    "sm:col-span-3 sm:row-span-1",
                    "sm:col-span-3 sm:row-span-1",
                    "sm:col-span-6 sm:row-span-1",
                  ];
                  const headline = c.results?.[0]?.value ?? "";
                  return (
                    <div key={i} className={`group [perspective:1200px] ${spans[i] ?? ""}`}>
                      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                        <div
                          tabIndex={0}
                          className="absolute inset-0 [backface-visibility:hidden] rounded-md border border-rule bg-paper hover:border-olive focus:border-olive focus:outline-none transition-colors p-6 flex flex-col justify-between overflow-hidden"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="font-mono text-[11px] tracking-[0.18em] text-accent font-semibold">
                              {c.label ?? c.meta}
                            </div>
                            <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
                              ↻ FLIP
                            </div>
                          </div>
                          <div>
                            {headline && (
                              <div className="font-display text-5xl md:text-6xl text-olive leading-none mb-3">
                                {headline}
                              </div>
                            )}
                            <h4 className="font-display text-xl md:text-2xl text-ink leading-tight">
                              {c.title}
                            </h4>
                          </div>
                        </div>
                        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-md border border-olive bg-cream-deep/70 p-6 flex flex-col overflow-hidden">
                          <div className="font-mono text-[11px] tracking-[0.18em] text-olive font-semibold mb-3">
                            {c.label ?? c.meta}
                          </div>
                          <p className="text-sm text-ink leading-relaxed mb-4 overflow-y-auto">
                            {c.body}
                          </p>
                          {c.results && (
                            <div className="mt-auto grid grid-cols-3 gap-3 pt-3 border-t border-olive/30">
                              {c.results.map((r) => (
                                <div key={r.label}>
                                  <div className="font-display text-lg text-olive leading-tight">
                                    {r.value}
                                  </div>
                                  <div className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                                    {r.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Press() {
  const Item = ({ outlet, title, href }: { outlet: string; title: string; href?: string }) => {
    const Comp: any = href ? "a" : "div";
    return (
      <Comp
        {...(href ? { href, target: "_blank", rel: "noopener" } : {})}
        className={`group flex items-start justify-between gap-6 py-5 border-b border-rule ${
          href ? "hover:border-olive cursor-pointer" : "cursor-default opacity-80"
        } transition-colors`}
      >
        <div>
          <div className="label-mono mb-1.5">{outlet}</div>
          <div className="text-ink leading-snug group-hover:text-olive transition-colors">
            {title}
          </div>
        </div>
        {href ? (
          <ArrowUpRight className="size-4 text-olive shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        ) : (
          <span className="size-4 shrink-0 mt-1 text-rule">·</span>
        )}
      </Comp>
    );
  };

  return (
    <section id="press" className="container-page py-24 md:py-32">
      <SectionHead
        index="03 / Press & recognition"
        title={
          <>
            Press, <em>panels,</em> and recognition.
          </>
        }
      />
      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        <div>
          <h3 className="font-display text-xl text-olive mb-4">Featured interviews & press</h3>
          <div>
            {press.map((p) => <Item key={p.title} {...p} />)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl text-olive mb-4">Awards & recognition</h3>
          <div>
            {awards.map((a) => <Item key={a.title} {...a} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Endorsements() {
  return (
    <section id="endorsements" className="bg-cream-deep/50 border-y border-rule">
      <div className="container-page py-24 md:py-32">
        <SectionHead
          index="04 / Endorsements"
          title={
            <>
              What partners and <em>peers</em> say.
            </>
          }
        />
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          Paraphrased reflections from former leaders and cross-functional partners,
          drawn from public interviews, internal reviews, and shared work — formal
          written quotes available on request.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {endorsements.map((e, i) => (
            <motion.figure
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="bg-paper p-8 rounded-sm border border-rule relative"
            >
              <div
                aria-hidden
                className="absolute -top-4 left-6 font-display text-7xl text-mustard/60 leading-none select-none"
              >
                "
              </div>
              <blockquote className="font-display text-xl text-ink leading-snug mb-8">
                {e.quote}
              </blockquote>
              <figcaption>
                <div className="label-mono mb-1">{e.role}</div>
                <div className="text-sm text-muted-foreground">{e.context}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted-foreground italic text-center">
          References and written endorsements available on request.
        </p>
      </div>
    </section>
  );
}

function Global() {
  const langFlags: Record<string, string> = {
    Mandarin: "🇨🇳",
    Japanese: "🇯🇵",
    Spanish: "🇪🇸",
    English: "🇺🇸",
  };

  return (
    <section id="international" className="bg-cream-deep/60 border-y border-rule">
      <div className="container-page py-24 md:py-32">
        <SectionHead
          index="02 / Global"
          title={
            <>
              A <em>world-shaped</em> view of market expansion.
            </>
          }
        />
        <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
          A career built across four continents and eleven markets — fluent in the
          languages, but more importantly fluent in the segmentation, the channels,
          and the cultural nuance that decide whether expansion compounds or stalls.
        </p>

        {/* Region cards with flag clusters */}
        <div className="grid md:grid-cols-2 gap-5">
          {internationalWork.map((w) => (
            <motion.article
              key={w.co}
              {...fadeUp}
              className="group bg-paper border border-rule hover:border-olive transition-colors rounded-sm p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="font-display text-xl text-olive mb-1">{w.co}</div>
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                    {w.regions}
                  </div>
                </div>
                <div className="font-mono text-xs text-accent font-semibold whitespace-nowrap bg-cream-deep/80 border border-rule px-2.5 py-1 rounded-sm">
                  {w.impact}
                </div>
              </div>

              {/* Flag cluster */}
              <div
                aria-hidden
                className="flex flex-wrap gap-1.5 text-2xl leading-none mb-5"
              >
                {w.flags.map((f, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center justify-center size-9 rounded-full bg-cream-deep/60 border border-rule/60"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {w.detail}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Languages — integrated as a horizontal strip */}
        <div className="mt-12 bg-paper border border-rule rounded-sm p-6 md:p-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10 items-center">
            <div>
              <div className="label-mono mb-2 text-olive">Languages</div>
              <div className="font-display text-lg text-ink leading-tight">
                Four working languages — across selling, hiring, and creative direction.
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {languages.map((l) => (
                <div
                  key={l.name}
                  className="flex items-center gap-3 py-2 border-l-2 border-olive/40 pl-3"
                >
                  <span aria-hidden className="text-2xl leading-none">
                    {langFlags[l.name] ?? "🌐"}
                  </span>
                  <div>
                    <div className="font-display text-base text-ink leading-tight">
                      {l.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {l.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container-page py-24 md:py-32">
      <SectionHead
        index="06 / Experience"
        title={
          <>
            Fifteen years, <em>seven chapters.</em>
          </>
        }
      />
      <div>
        {experience.map((x) => (
          <motion.div
            key={x.role + x.date}
            {...fadeUp}
            className="grid md:grid-cols-[180px_1.2fr_2fr] gap-6 md:gap-10 py-8 border-b border-rule first:border-t items-baseline"
          >
            <div className="font-mono text-sm text-olive">{x.date}</div>
            <div>
              <div className="font-display text-xl text-ink leading-tight">{x.role}</div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                {x.co}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px]">{x.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <div className="label-mono mb-6">Education</div>
        {education.map((e) => (
          <div
            key={e.degree}
            className="grid md:grid-cols-[180px_1.2fr_2fr] gap-6 md:gap-10 py-5 border-b border-rule first:border-t items-baseline"
          >
            <div className="font-mono text-sm text-olive">{e.date}</div>
            <div className="font-display text-lg text-ink">{e.degree}</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {e.school}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="bg-paper border border-olive/40 rounded-sm w-full max-w-lg p-8 relative"
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
            className="w-full bg-transparent border-b border-rule focus:border-olive outline-none py-2 text-ink placeholder:text-muted-foreground"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-olive outline-none py-2 text-ink placeholder:text-muted-foreground"
          />
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-olive outline-none py-2 text-ink placeholder:text-muted-foreground"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full bg-transparent border-b border-rule focus:border-olive outline-none py-2 text-ink placeholder:text-muted-foreground resize-none"
          />
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex items-center gap-2 bg-olive text-primary-foreground px-6 py-3 rounded-sm hover:bg-mustard hover:text-ink transition-colors"
        >
          Open mail draft <ArrowRight className="size-4" />
        </button>
      </form>
    </div>
  );
}

function Contact() {
  const [open, setOpen] = useState(false);

  const ContactLink = ({
    children,
    onClick,
    href,
    external,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    external?: boolean;
  }) => {
    const Comp: any = href ? "a" : "button";
    return (
      <Comp
        {...(href ? { href, ...(external ? { target: "_blank", rel: "noopener" } : {}) } : { type: "button", onClick })}
        className="group flex items-center justify-between py-5 border-b border-cream/30 hover:border-mustard transition-colors w-full text-left"
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

  return (
    <section id="contact" className="bg-olive text-primary-foreground">
      <div className="container-page py-24 md:py-32 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase mb-6 text-mustard">
            07 / Contact
          </div>
          <h2 className="display text-[clamp(36px,5vw,64px)] leading-[0.95] [&_em]:!text-cream-deep">
            Let's build a <em>category-defining</em> brand.
          </h2>
          <p className="mt-6 text-primary-foreground/70 max-w-md leading-relaxed">
            Open to advisory roles, fractional engagements, and full-time leadership
            conversations at category-defining brands.
          </p>
        </div>
        <div className="self-end w-full">
          <ContactLink onClick={() => setOpen(true)}>{profile.email}</ContactLink>
          <ContactLink href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</ContactLink>
          <ContactLink href={`https://${profile.website}`} external>
            {profile.website}
          </ContactLink>
          <ContactLink href={profile.linkedin} external>
            LinkedIn · Regina Yuan
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
      <div className="font-mono">Cream · Olive · Mustard</div>
    </footer>
  );
}

export default function Index() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background paper-grain">
      <Topbar />
      <Hero onContact={() => setContactOpen(true)} />
      <Metrics />
      <LogoStrip />
      <Pillars />
      <Flagship />
      <Press />
      <Endorsements />
      <Global />
      <Experience />
      <Contact />
      <Footer />
      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </div>
  );
}
