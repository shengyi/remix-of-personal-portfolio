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
      {/* Geometric grid background */}
      <div
        aria-hidden
        className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none"
      />
      {/* Soft accent blob */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-[520px] rounded-full bg-mustard/5 blur-3xl pointer-events-none"
      />

      <div className="container-page relative pt-20 pb-24 md:pt-32 md:pb-36">
        <motion.div {...fadeUp} className="max-w-4xl">
          <div className="label-mono mb-8 flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-mustard" />
            {profile.eyebrow}
          </div>

          <h1 className="display text-[clamp(44px,7vw,104px)] text-ink leading-[0.98] mb-12">
            Hello, I'm <em>Regina&nbsp;Yuan</em>.
          </h1>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-end">
            <div className="space-y-5 max-w-2xl">
              <p className="font-display text-2xl md:text-[28px] text-ink leading-snug">
                {profile.intro[0]}
              </p>
              <p className="font-display text-xl md:text-[22px] text-ink/80 leading-snug italic">
                {profile.intro[1]}
              </p>
              <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed pt-2">
                {profile.intro[2]}
              </p>
              <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed">
                {profile.intro[3]}
              </p>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="md:pb-2"
            >
              <CTAs onContact={onContact} />
              <div className="mt-6 pt-5 border-t border-rule/60 text-xs text-muted-foreground space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="label-mono">Based</span>
                  <span className="text-ink">{profile.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="label-mono">Open to</span>
                  <span className="text-ink">Advisory · Fractional · FT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
