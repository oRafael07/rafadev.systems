import { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
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
}

const timeline: TimelineItem[] = [
  {
    year: "2017",
    title: "Início dos estudos",
    description: "Comecei a aprender HTML e CSS para criar minhas primeiras páginas.",
    icon: Code2,
  },
  {
    year: "2018",
    title: "Primeiro estágio",
    description: "Passei a trabalhar com manutenção de sites e WordPress.",
    icon: Briefcase,
  },
  {
    year: "2019",
    title: "Faculdade",
    description: "Ingressei no curso de Ciência da Computação.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Projetos open-source",
    description: "Contribuí com projetos de código aberto e aprendi novas tecnologias.",
    icon: Github,
  },
  {
    year: "2022",
    title: "Bootcamp Fullstack",
    description: "Participei de um bootcamp intensivo de desenvolvimento web.",
    icon: Laptop2,
  },
  {
    year: "2023",
    title: "Freelancer",
    description: "Atuei em projetos freelance e aprofundei conhecimentos em design.",
    icon: PenTool,
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    description: "Atualmente atuo com desenvolvimento full stack, criando aplicações completas.",
    icon: Laptop2,
  },
  {
    year: "2025",
    title: "Nova startup",
    description: "Lancei minha própria startup focada em soluções digitais.",
    icon: Rocket,
  },
];

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:px-20">
      <section className="relative mb-20 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20">
        <h1 className="text-3xl font-bold md:text-5xl">
          Minha <span className="text-green-500">Jornada</span>
        </h1>
      </section>

      <section className="relative">
        <div className="absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-green-500 to-zinc-700" />

        <div className="space-y-20">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0
                    ? "md:items-start md:pr-[calc(50%+2rem)]"
                    : "md:flex-row-reverse md:pl-[calc(50%+2rem)]"
                }`}
              >
                <span className="absolute left-1/2 top-2 -ml-3 flex h-6 w-6 items-center justify-center rounded-full border border-green-500 bg-zinc-950 text-green-500">
                  <Icon size={16} />
                </span>

                <div className="w-full md:w-1/2">
                  <div className="animate-in fade-in slide-in-from-bottom-4 rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-green-500/50">
                    <h3 className="text-lg font-semibold">
                      {item.year} – {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
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
