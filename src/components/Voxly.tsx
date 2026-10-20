"use client";

import { useEffect, useState } from "react";
import { Reveal, SectionHead } from "./Motion";

const modes = [
  { from: "Speech", to: "Sign", input: "\"Salom, qalaysiz?\"", output: "👋 🤟 ❓", note: "Speech AI → digital avatar signs it" },
  { from: "Sign", to: "Speech", input: "✋ 👉 🙏", output: "\"Rahmat, yaxshi.\"", note: "Computer vision reads hands → voice" },
];

const facts = [
  ["430M+", "people live with disabling hearing loss (WHO)"],
  ["2-way", "speech → sign and sign → speech"],
  ["Real time", "built for live video and meetings"],
];

export default function Voxly() {
  const [m, setM] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setM((x) => (x + 1) % modes.length), 4200);
    return () => clearInterval(id);
  }, []);

  const mode = modes[m];

  return (
    <section id="voxly" className="relative py-28">
      <div className="section-container">
        <SectionHead
          eyebrow="04 · AI for accessibility"
          title={
            <>
              Voxly AI: <span className="text-gradient">sign language, translated live.</span>
            </>
          }
          sub="Subtitles lose tone and emotion, and interpreters are expensive and rarely available. Voxly AI translates spoken language into expressive sign language through a digital avatar, and reads signing back into speech. It started as a 3-day hackathon build and was also our accessibility entry at the Agrobank AI 500 Hackathon."
        />

        <div className="grid items-stretch gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="glass relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="mb-8 flex gap-2">
                {modes.map((x, i) => (
                  <button
                    key={x.from}
                    onClick={() => setM(i)}
                    className={`rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                      m === i ? "bg-white text-ink" : "border border-white/15 text-slate-400 hover:text-white"
                    }`}
                  >
                    {x.from} → {x.to}
                  </button>
                ))}
              </div>

              <div key={m} className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-2xl border border-white/10 bg-ink/50 p-5" style={{ animation: "rise .6s both" }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{mode.from}</p>
                  <p className="mt-3 text-xl text-white">{mode.input}</p>
                  <div className="mt-4 flex h-8 items-end gap-1">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-blue/70"
                        style={{ height: `${20 + ((i * 37) % 80)}%`, animation: `eq 0.9s ${i * 60}ms ease-in-out infinite alternate` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-[0_0_40px_#2f6bff] sm:rotate-0">
                    <span className="rotate-90 sm:rotate-0">→</span>
                  </span>
                </div>

                <div className="rounded-2xl border border-orange/30 bg-orange/[0.06] p-5" style={{ animation: "rise .6s .35s both" }}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-orange">{mode.to}</p>
                  <p className="mt-3 text-2xl text-white">{mode.output}</p>
                  <p className="mt-4 text-xs text-slate-400">{mode.note}</p>
                </div>
              </div>

              <p className="mt-8 text-sm text-slate-500">Stack: computer vision, speech AI, deep learning, real-time processing, multilingual (Uzbek, English, Russian).</p>
              <style>{`@keyframes eq{from{transform:scaleY(.3)}to{transform:scaleY(1)}}`}</style>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {facts.map(([k, v], i) => (
              <Reveal key={k} delay={i * 90}>
                <div className="spot glass flex h-full items-center gap-5 rounded-3xl p-6">
                  <p className="min-w-[110px] text-3xl font-semibold text-white">{k}</p>
                  <p className="text-sm text-slate-400">{v}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://inteullpo.webflow.io/sign-language-translator"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Live demo ↗
                </a>
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7429211100715409409/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-white/40"
                >
                  Hackathon story ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
