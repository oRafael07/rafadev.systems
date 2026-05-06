"use client";

import { createContext, use, useState, type ReactNode } from "react";

type SkillCat = "frontend" | "backend" | "devops" | "lang";
type FilterCat = "all" | SkillCat;

interface Skill {
  name: string;
  cat: SkillCat;
  desc: string;
  color: string;
}

const SKILLS: Skill[] = [
  { name: "PostgreSQL", cat: "backend", desc: "Banco relacional principal — modelagem, índices e tuning.", color: "#336791" },
  { name: "Prisma", cat: "backend", desc: "ORM tipado para schemas claros e migrações seguras.", color: "#5a67d8" },
  { name: "Node.js", cat: "backend", desc: "Runtime principal de APIs e jobs em produção.", color: "#3c873a" },
  { name: "NestJS", cat: "backend", desc: "Framework opinado para arquiteturas DDD escaláveis.", color: "#e0234e" },
  { name: "React", cat: "frontend", desc: "UIs componíveis com foco em estado e composição.", color: "#61dafb" },
  { name: "Next.js", cat: "frontend", desc: "Apps fullstack com SSR/SSG e rotas server.", color: "#ffffff" },
  { name: "TailwindCSS", cat: "frontend", desc: "Design system pragmático via utility classes.", color: "#38bdf8" },
  { name: "Jest", cat: "frontend", desc: "Testes unitários e de integração de confiança.", color: "#c63d14" },
  { name: "Docker", cat: "devops", desc: "Containers para dev, CI e deploy reprodutíveis.", color: "#2496ed" },
  { name: "GitHub", cat: "devops", desc: "Versionamento, code review e CI via Actions.", color: "#ffffff" },
  { name: "Nginx", cat: "devops", desc: "Reverse proxy, TLS e roteamento em produção.", color: "#009639" },
  { name: "Ubuntu", cat: "devops", desc: "Distro padrão dos servidores de aplicação.", color: "#e95420" },
  { name: "Cloudflare", cat: "devops", desc: "CDN, DNS e edge security para apps em produção.", color: "#f48120" },
  { name: "DigitalOcean", cat: "devops", desc: "Droplets, managed DBs e deploys leves.", color: "#0080ff" },
  { name: "Datadog", cat: "devops", desc: "Observabilidade, métricas e tracing distribuído.", color: "#632ca6" },
  { name: "TypeScript", cat: "lang", desc: "Linguagem principal — tipagem forte ponta a ponta.", color: "#3178c6" },
  { name: "JavaScript", cat: "lang", desc: "Base do ecossistema web e runtime Node.", color: "#f7df1e" },
  { name: "Python", cat: "lang", desc: "Scripts, automação e prototipagem rápida.", color: "#3776ab" },
];

const CAT_LABEL: Record<SkillCat, string> = {
  frontend: "Frontend",
  backend: "Backend",
  devops: "DevOps",
  lang: "Linguagem",
};

const FILTERS: { value: FilterCat; label: string }[] = [
  { value: "all", label: "--all" },
  { value: "frontend", label: "--frontend" },
  { value: "backend", label: "--backend" },
  { value: "devops", label: "--devops" },
  { value: "lang", label: "--lang" },
];

interface SkillsContextValue {
  state: { activeCat: FilterCat };
  actions: { setActiveCat: (_cat: FilterCat) => void };
  meta: { skills: Skill[]; filters: typeof FILTERS; labels: typeof CAT_LABEL };
}

const SkillsContext = createContext<SkillsContextValue | null>(null);

function useSkillsContext() {
  const ctx = use(SkillsContext);
  if (!ctx) throw new Error("Skills.* must be rendered inside <Skills>");
  return ctx;
}

export function Skills({ children }: { children: ReactNode }) {
  const [activeCat, setActiveCat] = useState<FilterCat>("all");
  return (
    <SkillsContext
      value={{
        state: { activeCat },
        actions: { setActiveCat },
        meta: { skills: SKILLS, filters: FILTERS, labels: CAT_LABEL },
      }}
    >
      {children}
    </SkillsContext>
  );
}

export function SkillsFilters() {
  const { state, actions, meta } = useSkillsContext();
  return (
    <div className="flex flex-wrap gap-2 font-mono">
      {meta.filters.map((f) => (
        <button
          key={f.value}
          type="button"
          aria-pressed={state.activeCat === f.value}
          data-active={state.activeCat === f.value}
          onClick={() => actions.setActiveCat(f.value)}
          className="filter-btn px-3 py-1.5 text-xs rounded border border-zinc-800 text-zinc-300"
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export function SkillsList() {
  const { state, meta } = useSkillsContext();
  const visible = meta.skills.filter(
    (s) => state.activeCat === "all" || s.cat === state.activeCat,
  );
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {visible.map((s) => (
        <div
          key={s.name}
          className="skill-card group bg-[#070707] border border-zinc-800 rounded p-4"
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px]" style={{ color: s.color }}>
                ▍
              </span>
              <span className="font-display font-semibold text-zinc-100">{s.name}</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              {meta.labels[s.cat]}
            </span>
          </div>
          <div className="font-mono text-[11px] text-zinc-500 leading-relaxed">
            <span className="text-zinc-600">›</span> {s.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

