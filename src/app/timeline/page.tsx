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
    <main className="mx-auto max-w-5xl p-10 md:p-20">
      <h1 className="mb-16 text-center text-3xl font-bold md:text-4xl">
        Minha Jornada
      </h1>

      <div className="relative">
        <div className="absolute left-1/2 top-0 -ml-px h-full w-px bg-zinc-700" />

        <div className="space-y-16">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:items-start md:pr-[calc(50%+1rem)]"
                  : "md:flex-row-reverse md:pl-[calc(50%+1rem)]"
              }`}
            >
              <span className="absolute left-1/2 top-2 -ml-2 h-4 w-4 rounded-full bg-green-500" />

              <div className="w-full md:w-1/2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all hover:-translate-y-1 hover:border-zinc-600">
                  <h3 className="text-lg font-semibold">
                    {item.year} – {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
