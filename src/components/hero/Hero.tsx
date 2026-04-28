import { ArrowUpRight, Linkedin, Mail, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/regina";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

function CTAs({ onContact }: { onContact: () => void }) {
  const primaryCls =
    "group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-sm border text-sm font-medium transition-all duration-200 " +
    "bg-mustard text-primary-foreground border-mustard shadow-sm " +
    "hover:bg-ink hover:border-ink hover:text-primary-foreground hover:shadow-md hover:-translate-y-px " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mustard focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const secondaryCls =
    "group inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-sm border text-sm font-medium transition-all duration-200 " +
    "bg-transparent text-ink border-ink/30 " +
    "hover:bg-ink hover:text-primary-foreground hover:border-ink hover:shadow-md hover:-translate-y-px " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const tertiaryCls =
    "group inline-flex items-center gap-1.5 text-sm font-medium text-olive-soft transition-colors duration-200 " +
    "hover:text-mustard underline-offset-4 hover:underline focus-visible:outline-none focus-visible:text-mustard";

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
      <button type="button" onClick={onContact} className={primaryCls}>
        <Mail className="size-4" />
        Let's talk
        <ArrowUpRight className="size-4 opacity-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={secondaryCls}
      >
        <Linkedin className="size-4" />
        LinkedIn
        <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      <a
        href={profile.resume}
        download=""
        className={tertiaryCls + " ml-1 sm:ml-2"}
      >
        <FileDown className="size-4" />
        Download résumé
      </a>
    </div>
  );
}

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-[520px] rounded-full bg-mustard/5 blur-3xl pointer-events-none"
      />

      <div className="container-page relative pt-20 pb-24 md:pt-32 md:pb-36">
        <motion.div {...fadeUp} className="max-w-5xl">
          <div className="label-mono mb-8 flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-mustard" />
            {profile.eyebrow}
          </div>

          <h1 className="display text-[clamp(44px,7vw,104px)] text-ink leading-[0.98] mb-12">
            Hello, I'm <em>Regina&nbsp;Yuan</em>.
          </h1>

          <div className="space-y-6 max-w-3xl mb-12">
            {/* Smaller now */}
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              {profile.intro[0]}
            </p>
            {/* Larger, hero-style headline statement */}
            <p className="font-display text-3xl md:text-[44px] text-ink leading-[1.1]">
              I think in <em>systems</em>, write in <em>stories</em>, and measure in <em>outcomes</em>.
            </p>
            {/* Shortened description */}
            <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-2xl">
              {profile.intro[2]}
            </p>
          </div>

          <CTAs onContact={onContact} />
        </motion.div>
      </div>
    </section>
  );
}
