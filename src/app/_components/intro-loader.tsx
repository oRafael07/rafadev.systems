"use client";

import { useEffect, useState } from "react";

const STAGGER_MS = 320;
const CH_DURATION_MS = 180; // keep in sync with .intro-loader__ch animation duration
const HOLD_MS = 80;
const FADE_MS = 200;
const WRITE_END_MS = STAGGER_MS + CH_DURATION_MS;

const NAME = ["R", "a", "f", "a", " ", "D", "E", "V"];
const ACCENT_FROM = 5;

export default function IntroLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("gone");
      return;
    }
    const t1 = setTimeout(() => setPhase("out"), WRITE_END_MS + HOLD_MS);
    const t2 = setTimeout(() => setPhase("gone"), WRITE_END_MS + HOLD_MS + FADE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  const stepDelay = STAGGER_MS / (NAME.length - 1);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Carregando"
      data-phase={phase}
      className="intro-loader"
    >
      <div aria-hidden="true" className="intro-loader__bg" />
      <div className="intro-loader__inner">
        <span aria-hidden="true" className="intro-loader__write">
          {NAME.map((ch, i) => (
            <span
              key={i}
              className="intro-loader__ch"
              data-accent={i >= ACCENT_FROM ? "true" : undefined}
              style={{ animationDelay: `${i * stepDelay}ms` }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="sr-only">Rafa DEV</span>
      </div>
    </div>
  );
}
