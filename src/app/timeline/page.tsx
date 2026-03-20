import { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Jornada | Rafa DEV",
};

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  company?: string;
  period?: string;
  isCurrent?: boolean;
}

const timeline: TimelineItem[] = [
  {
    year: "2017",
    title: "Início dos estudos",
    description: "Estudando e programando HTML, CSS e PHP",
    icon: Code2,
    period: "2017",
  },
  {
    year: "2018",
    title: "JavaScript",
    description: "Implementando JavaScript nos projetos",
    icon: Code2,
    period: "2018",
  },
  {
    year: "2020",
    title: "Freelancer & Empresa própria",
    description:
      "Pandemia. Iniciei freelâncias, aprofundei no ecossistema JavaScript e abri minha empresa de desenvolvimento de software",
    icon: Briefcase,
    company: "Rafa DEV Solutions",
    period: "2020",
  },
  {
    year: "Out 2022",
    title: "Backend Jr",
    description: "Entrei como Desenvolvedor Backend Junior",
    icon: Briefcase,
    company: "i_mais",
    period: "Out 2022",
  },
  {
    year: "Mai 2024",
    title: "Backend Pleno",
    description: "Promovido para Desenvolvedor Backend Pleno",
    icon: Briefcase,
    company: "i_mais",
    period: "Mai 2024",
  },
  {
    year: "Set 2025",
    title: "Backend Engineer",
    description:
      "Transição para modelo PJ com foco em arquitetura DDD, otimização de performance, liderança técnica em squads e planejamento de produto",
    icon: Briefcase,
    company: "i_mais",
    period: "Set 2025",
    isCurrent: true,
  },
  {
    year: "2020",
    title: "Rafa DEV Solutions",
    description: "Atuando com minha empresa",
    icon: Sparkles,
    company: "Rafa DEV Solutions",
    period: "2020 - Presente",
    isCurrent: true,
  },
];

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 md:px-8">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Minha <span className="text-green-500">Jornada</span>
        </h1>
        <p className="mx-auto max-w-lg text-zinc-400">
          Da primeira linha de código até hoje, uma trajetória de aprendizado e crescimento contínuo.
        </p>
      </section>

      <section className="relative">
        <div className="absolute left-[21px] top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-green-500 via-green-500/50 to-zinc-800" />

        <div className="space-y-0">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === timeline.length - 1;

            return (
              <div key={item.year} className="relative pl-14">
                {index === timeline.length - 2 && (
                  <Separator className="my-6 border-zinc-500" />
                )}
                <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 bg-zinc-900 shadow-md shadow-green-500/10">
                  <Icon size={18} className="text-green-500" />
                </div>

                <Card className="mb-6 border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900 hover:shadow-lg hover:shadow-green-500/5">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-green-500">
                          {item.year}
                        </span>
                        {item.isCurrent && (
                          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500">
                            Atual
                          </span>
                        )}
                      </div>
                      {item.period && (
                        <span className="text-sm text-zinc-500">
                          {item.period}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-1 text-lg font-semibold text-zinc-100">
                      {item.title}
                    </h3>

                    {item.company && (
                      <p className="mb-2 text-sm text-green-500/80">
                        {item.company}
                      </p>
                    )}

                    <p className="text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>

                {!isLast && (
                  <div className="absolute left-[21px] top-12 -translate-x-1/2">
                    <Separator
                      orientation="vertical"
                      className="h-6 bg-zinc-800"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute left-[21px] top-auto h-8 w-8 -translate-x-1/2 rounded-full border border-green-500 bg-zinc-950">
          <Rocket size={16} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500" />
        </div>
      </section>

      <section className="mt-16 text-center">
        <p className="text-zinc-500">
          E a jornada continua...
        </p>
      </section>
    </main>
  );
}
