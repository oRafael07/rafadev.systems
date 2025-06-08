import { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Laptop2,
  PenTool,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Timeline | Rafa DEV",
};

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  company?: string;
  start?: string;
  end?: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Backend Developer PL",
    description:
      "Upgrade de carreira para Pleno, com foco em Arquitetura de software, System Design e melhoria de sistemas.",
    company: "Clickip Tecnologia",
    icon: Rocket,
    start: "2024",
    end: "Atual",
  },
  {
    year: "2022",
    title: "Ignite",
    description:
      "Participei de um bootcamp intensivo de desenvolvimento Backend e Frontend.",
    icon: Laptop2,
    company: "Rocketseat",
    start: "2022",
    end: "2023",
  },
  {
    year: "2022",
    title: "Backend Developer JR",
    description:
      "Iniciei como desenvolvedor backend jr, responsável por criar APIs e integrar sistemas.",
    icon: Briefcase,
    company: "Clickip Tecnologia",
    start: "2022",
    end: "2024",
  },
  {
    year: "2022",
    title: "Faculdade",
    description: "Iniciei a faculdade de Engenharia de Software.",
    icon: GraduationCap,
    company: "Universidade",
    start: "2022",
    end: "Atual",
  },
  {
    year: "2020",
    title: "Freelancer",
    description: "Comecei a construir os primeiros projetos.",
    icon: Atom,
    company: "Rafa DEV Solutions",
    start: "2020",
    end: "Atual",
  },
];

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:px-20">
      {/* <section className="relative mb-20 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20">
        <h1 className="text-3xl font-bold md:text-5xl">
          Minha <span className="text-green-500">Jornada</span>
        </h1>
      </section> */}

      <section className="relative">
        <div className="absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-green-500 to-zinc-700" />

        <div className="space-y-10">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:items-start md:pr-[calc(50%+1rem)]"
                    : "md:flex-row-reverse md:pl-[calc(50%+1rem)]"
                }`}
              >
                <span className="absolute left-1/2 top-0 -ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-zinc-950 text-green-500">
                  <Icon size={16} />
                </span>

                <div className="mt-6 w-full md:mt-0 md:w-80">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-1 hover:border-green-500/50">
                    <h3 className="text-lg font-semibold">
                      {item.year} – {item.title}
                    </h3>
                    {item.company && (
                      <p className="text-sm text-green-500">{item.company}</p>
                    )}
                    <p className="mt-2 text-sm text-zinc-400">
                      {item.description}
                    </p>
                    {item.start && item.end && (
                      <p className="mt-2 text-xs text-zinc-500">
                        {item.start} – {item.end}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
