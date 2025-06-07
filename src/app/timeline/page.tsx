import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | Rafa DEV",
};

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2017",
    title: "Início dos estudos",
    description: "Comecei a aprender HTML e CSS para criar minhas primeiras páginas.",
  },
  {
    year: "2018",
    title: "Primeiro estágio",
    description: "Passei a trabalhar com manutenção de sites e WordPress.",
  },
  {
    year: "2019",
    title: "Faculdade",
    description: "Ingressei no curso de Ciência da Computação.",
  },
  {
    year: "2021",
    title: "Projetos open-source",
    description: "Contribuí com projetos de código aberto e aprendi novas tecnologias.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    description: "Atualmente atuo com desenvolvimento full stack, criando aplicações completas.",
  },
];

export default function TimelinePage() {
  return (
    <main className="mx-auto max-w-3xl p-10 md:p-20">
      <h1 className="mb-10 text-center text-3xl font-bold">Minha Jornada</h1>
      <div className="relative border-l border-zinc-700 pl-6">
        {timeline.map((item) => (
          <div key={item.year} className="mb-10 ml-4">
            <div className="absolute -left-2.5 h-2 w-2 rounded-full bg-green-500" />
            <h3 className="text-lg font-semibold">
              {item.year} - {item.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
