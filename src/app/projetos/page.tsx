import { Project } from "@/types/projects";
import ProjectCard from "@/components/shared/project-card";
import { projects } from "@/content/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Rafa DEV",
  description:
    "Conheça os projetos que desenvolvi e os resultados alcançados para diferentes tipos de clientes.",
};

export default function ProjetosPage() {
  return (
    <div className="min-h-screen px-10 py-20 md:px-20 lg:px-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Projetos</h1>
          <p className="text-lg text-zinc-400">
            Cases reais de projetos desenvolvidos para diferentes tipos de clientes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
