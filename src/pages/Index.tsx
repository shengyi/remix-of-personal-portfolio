import { useState } from "react";
import { Moon, Sun, ArrowUpRight, ArrowRight, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  profile,
  metrics,
  logos,
  pillars,
  flagshipCases,
  press,
  awards,
  endorsements,
  internationalWork,
  languages,
  experience,
  education,
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

function Hero() {
  return (
    <section id="top" className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-center">
        <motion.div {...fadeUp}>
          <div className="label-mono mb-8">{profile.eyebrow}</div>
          <h1 className="display text-[clamp(48px,8vw,104px)] text-ink">
            Brand as <em>art,</em>
            <br />
            science, and the <em>growth&nbsp;engine.</em>
          </h1>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-olive font-mono">
            {profile.heroMeta.map((m, i) => (
              <span key={m} className="flex items-center gap-6">
                {i > 0 && <span className="text-rule">·</span>}
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
          <div className="relative">
            <div className="absolute -inset-3 bg-olive/10 rounded-sm" aria-hidden />
            <img
              src={portrait}
              alt="Editorial portrait of Regina Yuan"
              width={896}
              height={1152}
              className="relative w-full h-auto rounded-sm shadow-[0_30px_80px_-30px_hsl(var(--olive)/0.4)]"
            />
          </div>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            <span className="text-ink font-medium">Senior brand and marketing leader</span>{" "}
            architecting category-defining brands at high-velocity consumer and SaaS
            companies — from <span className="text-ink font-medium">GoDaddy's</span>{" "}
            "utility-to-iconic" transformation to{" "}
            <span className="text-ink font-medium">WP Engine's</span> global rebrand and{" "}
            <span className="text-ink font-medium">DocuSign's</span> Agreement Cloud
            expansion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
              <sup className="text-mustard text-3xl md:text-4xl ml-0.5 font-light">{m.suffix}</sup>
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
  return (
    <section className="container-page py-16">
      <div className="label-mono text-center mb-8 text-olive-soft">
        Brands built · brands integrated · brands advised
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-20 gap-y-8 opacity-80">
        {logos.map((l) => (
          <img
            key={l.name}
            src={l.src}
            alt={l.name}
            loading="lazy"
            className="h-7 md:h-8 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all dark:invert dark:opacity-90"
          />
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
        {pillars.map((p, idx) => (
          <motion.div key={p.num} {...fadeUp} className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
            <div className="md:sticky md:top-24 md:self-start">
              <div className="font-mono text-xs text-mustard mb-3 tracking-wider">
                PILLAR {p.num}
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-ink mb-4 leading-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.lede}</p>
            </div>

            <div className={idx === 3 ? "grid sm:grid-cols-2 gap-6" : "space-y-px"}>
              {p.cases.map((c, i) =>
                idx === 3 ? (
                  <div key={i} className="border border-rule rounded-sm p-6 hover:border-olive transition-colors">
                    <div className="flex items-center gap-2 text-xs label-mono mb-3">
                      <span className="size-1.5 rounded-full bg-mustard" />
                      <span className="text-olive">{c.meta}</span>
                    </div>
                    <h4 className="font-display text-xl text-ink mb-2">{c.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.body}</p>
                    {c.results && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-rule/60">
                        {c.results.map((r) => (
                          <div key={r.label}>
                            <div className="font-display text-xl text-olive">{r.value}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={i} className="border-b border-rule py-6 first:border-t">
                    <div className="flex items-center gap-2 text-xs label-mono mb-3">
                      <span className="size-1.5 rounded-full bg-olive" />
                      <span className="text-olive">{c.meta}</span>
                    </div>
                    <h4 className="font-display text-2xl text-ink mb-2 leading-tight">{c.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{c.body}</p>
                    {c.results && (
                      <div className="flex flex-wrap gap-x-10 gap-y-3 pt-2">
                        {c.results.map((r) => (
                          <div key={r.label}>
                            <div className="font-display text-2xl text-olive">{r.value}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Flagship() {
  return (
    <section id="flagship" className="bg-olive text-primary-foreground">
      <div className="container-page py-24 md:py-32">
        <div className="mb-16 grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 items-baseline">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase pt-2 border-t border-mustard w-fit pr-6 text-mustard">
            02 / Flagship work
          </div>
          <h2 className="display text-[clamp(36px,5vw,64px)] max-w-3xl">
            Two <em>transformations,</em> documented.
          </h2>
        </div>
        <p className="text-lg max-w-2xl mb-16 text-primary-foreground/75 leading-relaxed">
          The brand moves senior hiring committees actually dig into — each with the
          strategic thesis, the craft, and the numbers.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {flagshipCases.map((c) => (
            <motion.a
              key={c.title}
              {...fadeUp}
              href={c.href}
              target="_blank"
              rel="noopener"
              className="group relative bg-cream/5 border border-cream/20 hover:border-mustard p-8 md:p-10 rounded-sm transition-colors"
            >
              <div className="font-mono text-[11px] uppercase tracking-wider text-mustard mb-6">
                {c.eyebrow}
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4 leading-tight">
                {c.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">{c.body}</p>
              <div className="flex flex-wrap gap-2">
                {c.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs px-3 py-1 rounded-full border border-cream/25 text-primary-foreground/90"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <ArrowUpRight className="absolute top-8 right-8 size-5 text-mustard group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          ))}
        </div>
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
  return (
    <section id="international" className="container-page py-24 md:py-32">
      <SectionHead
        index="05 / Global"
        title={
          <>
            A <em>world-shaped</em> view of market expansion.
          </>
        }
      />
      <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-20">
        <div>
          {internationalWork.map((w) => (
            <div
              key={w.co}
              className="grid grid-cols-[120px_1fr_auto] gap-6 py-6 border-b border-rule first:border-t items-baseline"
            >
              <div className="font-display text-xl text-olive">{w.co}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.detail}</p>
              <div className="font-mono text-xs text-mustard whitespace-nowrap">{w.impact}</div>
            </div>
          ))}
        </div>
        <aside className="bg-olive/8 border border-olive/30 rounded-sm p-6 self-start">
          <div className="label-mono mb-4 text-olive">Languages · native-level fluency</div>
          {languages.map((l) => (
            <div key={l.name} className="flex justify-between py-2.5 border-b border-rule/60 last:border-0">
              <span className="font-display text-lg text-ink">{l.name}</span>
              <span className="text-sm text-muted-foreground">{l.level}</span>
            </div>
          ))}
        </aside>
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
          <h2 className="display text-[clamp(36px,5vw,64px)] leading-[0.95]">
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
  return (
    <div className="min-h-screen bg-background paper-grain">
      <Topbar />
      <Hero />
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
    </div>
  );
}
