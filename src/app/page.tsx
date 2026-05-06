import Link from "next/link";
import { Skills, SkillsFilters, SkillsList } from "./_components/skills-grid";

interface TimelineEntry {
  year: string;
  title: string;
  company: string | null;
  desc: string;
  current: boolean;
}

const TIMELINE: TimelineEntry[] = [
  { year: "2017", title: "Início dos estudos", company: null, desc: "Estudando e programando HTML, CSS e PHP.", current: false },
  { year: "2018", title: "JavaScript", company: null, desc: "Implementando JavaScript nos projetos.", current: false },
  { year: "2020", title: "Freelancer & Empresa própria", company: "Rafa DEV Solutions", desc: "Pandemia. Iniciei freelâncias, aprofundei no ecossistema JavaScript e abri minha empresa de desenvolvimento de software.", current: false },
  { year: "Out 2022", title: "Backend Jr", company: "i_mais", desc: "Entrei como Desenvolvedor Backend Junior.", current: false },
  { year: "Mai 2024", title: "Backend Pleno", company: "i_mais", desc: "Promovido para Desenvolvedor Backend Pleno.", current: false },
  { year: "Set 2025", title: "Backend Engineer", company: "i_mais", desc: "Transição para modelo PJ com foco em arquitetura DDD, otimização de performance, liderança técnica em squads e planejamento de produto.", current: true },
  { year: "2020 — Presente", title: "Rafa DEV Solutions", company: "Rafa DEV Solutions", desc: "Atuando com minha empresa.", current: true },
];

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0";

export default function Home() {
  return (
    <section data-screen-label="Home" className="relative bg-[#0a0a0a] text-white">
      {/* HERO (Roboto) */}
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 neutral-bg pointer-events-none" />
        <div aria-hidden="true" className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs text-zinc-500 mb-4 font-mono">
              <span className="text-zinc-400">$</span> whoami
            </div>
            <h1 className="font-hero text-[clamp(40px,6.4vw,96px)] font-bold leading-[0.98]">
              Tire sua
              <br />
              ideia do <span className="strike-papel">Papel</span>
              <span aria-hidden="true" className="text-zinc-400 blink">_</span>
            </h1>
            <p className="mt-8 max-w-lg text-zinc-400 font-hero text-lg leading-relaxed">
              <span className="text-zinc-500 font-mono">›</span> Rafael Rocha — backend engineer
              focado em arquitetura DDD, performance e sistemas que escalam de verdade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-green-500 text-green-950 font-semibold px-6 py-3 rounded-md hover:bg-green-400 font-hero"
              >
                <span>›</span> Fale Comigo
              </Link>
              <Link
                href="#skills"
                className="inline-flex items-center gap-2 border border-zinc-800 px-6 py-3 rounded-md hover:border-zinc-600 text-zinc-300 font-mono"
              >
                cat stacks.json
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative" aria-hidden="true">
            <div className="relative aspect-square">
              <div className="absolute inset-8 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute inset-0 rounded-full border border-zinc-800/80" />
              <div className="absolute inset-8 rounded-full border border-zinc-800/80" />
              <div className="absolute inset-16 rounded-full border border-zinc-800/60" />

              <div className="absolute top-6 left-2 glass rounded-2xl px-4 py-3 float-soft" style={{ animationDelay: "-1s" }}>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">stack</div>
                <div className="font-display font-semibold">Node · Nest</div>
              </div>
              <div className="absolute top-1/3 right-0 glass rounded-2xl px-4 py-3 float-soft" style={{ animationDelay: "-3s" }}>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">arch</div>
                <div className="font-display font-semibold text-zinc-100">DDD</div>
              </div>
              <div className="absolute bottom-10 left-6 glass rounded-2xl px-4 py-3 float-soft" style={{ animationDelay: "-5s" }}>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">years</div>
                <div className="font-display font-semibold">06</div>
              </div>
              <div className="absolute bottom-4 right-4 glass rounded-2xl px-4 py-3 float-soft" style={{ animationDelay: "-2s" }}>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">db</div>
                <div className="font-display font-semibold">Postgres</div>
              </div>

              <div className="absolute inset-0 grid place-items-center">
                <div className="w-32 h-32 rounded-full glass grid place-items-center">
                  <div className="font-mono text-5xl font-bold text-zinc-100">{"{ }"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs text-zinc-500 mb-8 font-mono">
            <span className="text-zinc-400">$</span> cat about.md
          </div>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800">
                <div className="w-full h-full avatar-rr flex items-center justify-center font-display font-bold text-8xl tracking-tighter">
                  RR
                </div>
              </div>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
                Encontre-me em
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://www.linkedin.com/in/rafael-rocha-b6b745205/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 border-b border-zinc-900 text-sm text-zinc-400 hover:text-white group"
                >
                  <span className="text-zinc-600 group-hover:text-zinc-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22zM8.5 8h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.58c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.49V23H8.5z" />
                    </svg>
                  </span>
                  <span className="font-medium">LinkedIn</span>
                  <span className="ml-auto font-mono text-xs text-zinc-600 group-hover:text-zinc-400">/in/rafadev</span>
                </Link>
                <Link
                  href="https://github.com/oRafael07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 border-b border-zinc-900 text-sm text-zinc-400 hover:text-white group"
                >
                  <span className="text-zinc-600 group-hover:text-zinc-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                  </span>
                  <span className="font-medium">GitHub</span>
                  <span className="ml-auto font-mono text-xs text-zinc-600 group-hover:text-zinc-400">@oRafael07</span>
                </Link>
                <Link
                  href="mailto:rafadeveloper.contato@gmail.com"
                  className="flex items-center gap-3 py-2.5 border-b border-zinc-900 text-sm text-zinc-400 hover:text-white group"
                >
                  <span className="text-zinc-600 group-hover:text-zinc-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16v16H4z" />
                      <path d="m4 6 8 7 8-7" />
                    </svg>
                  </span>
                  <span className="font-medium">Email</span>
                  <span className="ml-auto font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                    rafadeveloper.contato@gmail.com
                  </span>
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 border-b border-zinc-900 text-sm text-zinc-400 hover:text-white group"
                >
                  <span className="text-zinc-600 group-hover:text-zinc-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="font-medium">WhatsApp</span>
                  <span className="ml-auto font-mono text-xs text-zinc-600 group-hover:text-zinc-400">+55 92 99364-7866</span>
                </Link>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">about</div>
              <h2 className="mt-2 font-display text-5xl md:text-6xl font-bold leading-[0.98]">
                Rafael
                <br />
                <span className="text-zinc-500">Rocha</span>
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Disponível para projetos
              </div>
              <p className="mt-7 text-zinc-300 text-lg leading-relaxed max-w-2xl">
                Trabalho com desenvolvimento de software há{" "}
                <span className="text-white font-semibold">6 anos</span>, construindo soluções
                escaláveis e gerando valor para o negócio. Backend Engineer com foco em arquitetura{" "}
                <span className="text-white font-semibold">DDD</span>, performance e liderança
                técnica.
              </p>
              <div className="mt-10 flex flex-col">
                <div className="flex items-baseline gap-6 py-5 border-t border-zinc-900">
                  <div className="font-display text-3xl font-bold w-20">06+</div>
                  <div className="flex-1">
                    <div className="text-zinc-200 font-medium">Anos construindo software</div>
                    <div className="text-zinc-500 text-sm mt-0.5">Do PHP estático ao DDD em produção.</div>
                  </div>
                  <div className="font-mono text-zinc-700 text-xs">→</div>
                </div>
                <div className="flex items-baseline gap-6 py-5 border-t border-zinc-900">
                  <div className="font-display text-3xl font-bold w-20">PJ</div>
                  <div className="flex-1">
                    <div className="text-zinc-200 font-medium">Modelo desde 2025</div>
                    <div className="text-zinc-500 text-sm mt-0.5">Liderança técnica e planejamento de produto.</div>
                  </div>
                  <div className="font-mono text-zinc-700 text-xs">→</div>
                </div>
                <div className="border-t border-zinc-900" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div id="skills" className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs text-zinc-500 mb-4 font-mono">
            <span className="text-zinc-400">$</span> ls -la stacks/
          </div>
          <Skills>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                stacks<span className="text-zinc-500">.json</span>
              </h2>
              <SkillsFilters />
            </div>
            <SkillsList />
          </Skills>
        </div>
      </div>

      {/* JOURNEY */}
      <div id="journey" className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs text-zinc-500 mb-4 font-mono">
            <span className="text-zinc-400">$</span> tail -f journey.log
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Minha <span className="text-zinc-100">Jornada</span>
          </h2>

          <div className="mt-12 rounded-lg border border-zinc-800 bg-[#070707] overflow-hidden">
            <div className="flex items-center gap-2 px-4 h-9 border-b border-zinc-900">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[11px] text-zinc-500 font-mono">journey.log</span>
            </div>
            <div className="divide-y divide-zinc-900">
              {TIMELINE.map((t, i) => {
                const lvl = t.current ? "INFO" : "LOG ";
                return (
                  <div key={`${t.year}-${t.title}`} className="px-4 py-4 hover:bg-[#0a0a0a] transition">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[12px] font-mono">
                      <span className="text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-zinc-500">[{lvl}]</span>
                      <span className="text-green-500 font-semibold">{t.year}</span>
                      <span className="text-zinc-200 font-display font-semibold text-[13px]">
                        {t.title}
                      </span>
                      {t.company ? <span className="text-zinc-500">@ {t.company}</span> : null}
                      {t.current ? (
                        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-green-500 text-green-950 font-bold">
                          Atual
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-2 pl-7 text-[13px] text-zinc-400 leading-relaxed border-l border-zinc-900">
                      <span className="text-zinc-600 font-mono">›</span> {t.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-zinc-500 font-mono">
          <div>
            # Made by Rafael with <span className="text-zinc-300">☕</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <span>© {new Date().getFullYear()}</span>
            <span>CNPJ: 59.715.257/0001-72</span>
            <Link href="/privacy" className="hover:text-white">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
