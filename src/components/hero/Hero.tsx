import { useState } from "react";
import { ArrowUpRight, Linkedin, Mail, FileDown, Settings2, X } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/regina";
import { headlines, splitLine, type Headline } from "@/data/headlines";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

type Variant = "A" | "B";

/* ──────────────────────────────────────────────────────────── *
 * Headline renderer                                            *
 * ──────────────────────────────────────────────────────────── */

function HeadlineLines({ headline, size }: { headline: Headline; size: "xl" | "lg" }) {
  const sizeCls =
    size === "xl"
      ? "text-[clamp(54px,9vw,128px)]"
      : "text-[clamp(40px,6.5vw,88px)]";
  return (
    <h1 className={`display ${sizeCls} text-ink leading-[0.96]`}>
      {headline.lines.map((line, i) => (
        <span key={i} className="block">
          {splitLine(line).map((seg, j) =>
            seg.accent ? (
              <em key={j}>{seg.text}</em>
            ) : (
              <span key={j}>{seg.text}</span>
            )
          )}
        </span>
      ))}
    </h1>
  );
}

/* ──────────────────────────────────────────────────────────── *
 * CTAs — 2 buttons (primary + secondary) + inline résumé link  *
 * ──────────────────────────────────────────────────────────── */

function CTAs({
  layout = "row",
  onContact,
}: {
  layout?: "row" | "stack";
  onContact: () => void;
}) {
  const isStack = layout === "stack";

  const primaryCls =
    "group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-sm border text-sm font-medium transition-all duration-200 " +
    "bg-olive text-primary-foreground border-olive shadow-sm " +
    "hover:bg-mustard hover:border-mustard hover:text-primary-foreground hover:shadow-md hover:-translate-y-px " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const secondaryCls =
    "group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-sm border text-sm font-medium transition-all duration-200 " +
    "bg-transparent text-ink border-rule " +
    "hover:bg-olive hover:text-primary-foreground hover:border-olive hover:shadow-md hover:-translate-y-px " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const tertiaryCls =
    "group inline-flex items-center gap-1.5 text-sm font-medium text-olive-soft transition-colors duration-200 " +
    "hover:text-olive focus-visible:outline-none focus-visible:text-olive";

  return (
    <div
      className={
        isStack
          ? "flex flex-col gap-3 w-full"
          : "flex flex-wrap items-center gap-x-3 gap-y-3"
      }
    >
      <button
        type="button"
        onClick={onContact}
        className={primaryCls + (isStack ? " w-full" : "")}
      >
        <Mail className="size-4" />
        Let's talk
        <ArrowUpRight className="size-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener"
        className={secondaryCls + (isStack ? " w-full" : "")}
      >
        <Linkedin className="size-4" />
        LinkedIn
        <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      <a
        href="/regina-yuan-resume.pdf"
        download=""
        className={
          tertiaryCls +
          (isStack
            ? " w-full justify-center pt-1"
            : " ml-1 sm:ml-2 underline-offset-4 hover:underline")
        }
      >
        <FileDown className="size-4" />
        Download résumé
      </a>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── *
 * Meta strip                                                   *
 * ──────────────────────────────────────────────────────────── */

function MetaStrip({ align = "left" }: { align?: "left" | "between" }) {
  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 label-mono text-olive ${
        align === "between" ? "justify-between" : ""
      }`}
    >
      {profile.heroMeta.map((m, i) => (
        <li key={m} className="flex items-center gap-5">
          {i > 0 && <span aria-hidden className="size-1 rounded-full bg-rule" />}
          <span>{m}</span>
        </li>
      ))}
    </ul>
  );
}

/* ──────────────────────────────────────────────────────────── *
 * Variant A — Editorial cover                                  *
 * ──────────────────────────────────────────────────────────── */

function VariantA({
  headline,
  onContact,
}: {
  headline: Headline;
  onContact: () => void;
}) {
  return (
    <section id="top" className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="rule-top pt-6 mb-10 md:mb-14">
        <MetaStrip align="between" />
      </div>

      <motion.div {...fadeUp}>
        <div className="label-mono mb-6 text-olive-soft">{profile.eyebrow}</div>
        <HeadlineLines headline={headline} size="xl" />
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.12 }}
        className="mt-12 md:mt-16 grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end"
      >
        {headline.dek ? (
          <p className="font-display text-2xl md:text-3xl text-ink/80 leading-snug max-w-2xl">
            {headline.dek}
          </p>
        ) : (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            <span className="text-ink">Senior brand and growth leader.</span>{" "}
            Architecting category-defining brands at WP Engine, DocuSign, and GoDaddy —
            translating systems thinking into measurable, compounding brand equity.
          </p>
        )}
        <CTAs onContact={onContact} />
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── *
 * Variant B — Asymmetric manifesto + index card                *
 * ──────────────────────────────────────────────────────────── */

function VariantB({
  headline,
  onContact,
}: {
  headline: Headline;
  onContact: () => void;
}) {
  return (
    <section id="top" className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="rule-top pt-6 mb-10">
        <MetaStrip />
      </div>

      <div className="grid md:grid-cols-[1.7fr_1fr] gap-10 md:gap-16 items-start">
        {/* Left: manifesto headline */}
        <motion.div {...fadeUp}>
          <div className="label-mono mb-6 text-olive-soft">{profile.eyebrow}</div>
          <HeadlineLines headline={headline} size="lg" />
          {headline.dek && (
            <p className="mt-8 font-display text-xl md:text-2xl text-ink/75 leading-snug max-w-xl">
              {headline.dek}
            </p>
          )}
        </motion.div>

        {/* Right: index card */}
        <motion.aside
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="md:sticky md:top-24 border border-rule rounded-sm bg-paper/60 p-6 md:p-7"
        >
          <div className="label-mono mb-5 text-olive">Currently</div>
          <dl className="space-y-3.5 text-sm">
            <div className="flex justify-between gap-4 border-b border-rule/60 pb-2.5">
              <dt className="text-muted-foreground">Role</dt>
              <dd className="text-ink text-right">Head of Brand & Marketing</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-rule/60 pb-2.5">
              <dt className="text-muted-foreground">Company</dt>
              <dd className="text-ink text-right">WP Engine</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-rule/60 pb-2.5">
              <dt className="text-muted-foreground">Based</dt>
              <dd className="text-ink text-right">{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-rule/60 pb-2.5">
              <dt className="text-muted-foreground">Languages</dt>
              <dd className="text-ink text-right">EN · 中文 · 日本語</dd>
            </div>
            <div className="flex justify-between gap-4 pb-1">
              <dt className="text-muted-foreground">Open to</dt>
              <dd className="text-ink text-right">Advisory · Fractional · FT</dd>
            </div>
          </dl>

          <div className="mt-6 pt-5 border-t border-rule">
            <CTAs layout="stack" onContact={onContact} />
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── *
 * Floating dev/preview controls (layout + headline only)       *
 * ──────────────────────────────────────────────────────────── */

function HeroControls({
  variant,
  setVariant,
  headlineId,
  setHeadlineId,
}: {
  variant: Variant;
  setVariant: (v: Variant) => void;
  headlineId: string;
  setHeadlineId: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 print:hidden">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Hero preview controls"
          className="size-11 rounded-full bg-ink text-cream shadow-lg inline-flex items-center justify-center hover:bg-olive transition-colors"
        >
          <Settings2 className="size-4" />
        </button>
      ) : (
        <div className="w-80 max-w-[calc(100vw-2rem)] bg-paper border border-olive/40 rounded-sm shadow-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="label-mono text-olive">Hero preview</div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="size-7 inline-flex items-center justify-center text-muted-foreground hover:text-ink"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Variant */}
          <div className="mb-4">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Layout
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {(["A", "B"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`text-xs py-2 rounded-sm border transition-colors ${
                    variant === v
                      ? "bg-olive text-primary-foreground border-olive"
                      : "border-rule hover:border-olive"
                  }`}
                >
                  {v === "A" ? "A · Editorial cover" : "B · Manifesto + card"}
                </button>
              ))}
            </div>
          </div>

          {/* Headline */}
          <div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5">
              Headline
            </div>
            <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
              {(["declarative", "editorial", "manifesto"] as const).map((voice) => (
                <div key={voice}>
                  <div className="text-[10px] uppercase tracking-wider text-mustard mt-2 mb-1">
                    {voice}
                  </div>
                  {headlines
                    .filter((h) => h.voice === voice)
                    .map((h) => (
                      <button
                        key={h.id}
                        onClick={() => setHeadlineId(h.id)}
                        className={`block w-full text-left text-xs px-2.5 py-2 rounded-sm border transition-colors ${
                          headlineId === h.id
                            ? "bg-olive/10 border-olive text-ink"
                            : "border-rule/60 hover:border-olive text-muted-foreground hover:text-ink"
                        }`}
                      >
                        {h.lines.join(" / ").replace(/\[\[|\]\]/g, "")}
                      </button>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────── *
 * Public Hero export                                           *
 * ──────────────────────────────────────────────────────────── */

export function Hero({ onContact }: { onContact: () => void }) {
  const [variant, setVariant] = useState<Variant>("A");
  const [headlineId, setHeadlineId] = useState<string>("d2");

  const headline = headlines.find((h) => h.id === headlineId) ?? headlines[0];

  return (
    <>
      {variant === "A" ? (
        <VariantA headline={headline} onContact={onContact} />
      ) : (
        <VariantB headline={headline} onContact={onContact} />
      )}
      <HeroControls
        variant={variant}
        setVariant={setVariant}
        headlineId={headlineId}
        setHeadlineId={setHeadlineId}
      />
    </>
  );
}
