/**
 * Headline candidates for the hero.
 * Three voices × three options. Use [[ ]] to mark italic-display words
 * that should render in the serif accent style.
 */

export type Voice = "declarative" | "editorial" | "manifesto";

export type Headline = {
  id: string;
  voice: Voice;
  // Each line renders on its own row. Wrap accent words in [[ ... ]].
  lines: string[];
  // Optional supporting dek (one short sentence under the headline).
  dek?: string;
};

export const headlines: Headline[] = [
  // ── First-person declarative ─────────────────────────────────────
  {
    id: "d1",
    voice: "declarative",
    lines: ["I build brands the way", "engineers build [[systems.]]"],
    dek: "Measured, modular, compounding — and unafraid of the story.",
  },
  {
    id: "d2",
    voice: "declarative",
    lines: ["I think in [[systems.]]", "I write in [[stories.]]", "I measure in outcomes."],
  },
  {
    id: "d3",
    voice: "declarative",
    lines: ["I make brand", "behave like [[infrastructure]]", "— and read like a story."],
  },
  {
    id: "d4",
    voice: "declarative",
    lines: ["Brands behave better", "when built like [[systems.]]"],
    dek: "Fifteen years architecting brand as compounding infrastructure — not campaign output.",
  },
  {
    id: "d5",
    voice: "declarative",
    lines: ["Make the brand", "behave like [[infrastructure.]]", "Make the story land."],
  },

  // ── Third-person editorial ──────────────────────────────────────
  {
    id: "e1",
    voice: "editorial",
    lines: ["A [[systems thinker]]", "who happens to run brand."],
    dek: "Fifteen years turning marketing into measurable, compounding equity.",
  },
  {
    id: "e2",
    voice: "editorial",
    lines: ["Brand built like [[infrastructure.]]", "Measured like revenue."],
    dek: "Senior brand and growth leader — analytical, editorial, executive.",
  },
  {
    id: "e3",
    voice: "editorial",
    lines: ["The [[engineer's mind]]", "behind the storyteller's brand."],
  },

  // ── Manifesto fragments ─────────────────────────────────────────
  {
    id: "m1",
    voice: "manifesto",
    lines: ["Systems over [[campaigns.]]", "Evidence over instinct.", "Stories that move P&Ls."],
  },
  {
    id: "m2",
    voice: "manifesto",
    lines: ["Architect the [[system.]]", "Write the [[story.]]", "Move the market."],
  },
  {
    id: "m3",
    voice: "manifesto",
    lines: ["Half [[engineer.]]", "Half [[editor.]]", "All operator."],
  },
];

/** Render helper: split a line on [[...]] into plain | accent segments. */
export function splitLine(line: string): { text: string; accent: boolean }[] {
  const parts: { text: string; accent: boolean }[] = [];
  const re = /\[\[(.+?)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(line))) {
    if (m.index > last) parts.push({ text: line.slice(last, m.index), accent: false });
    parts.push({ text: m[1], accent: true });
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push({ text: line.slice(last), accent: false });
  return parts;
}
