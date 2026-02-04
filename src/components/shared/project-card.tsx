import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProjectCardProps {
  id: string;
  title: string;
  clientType: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  stacks: string[];
}

export default function ProjectCard({
  id,
  title,
  clientType,
  sector,
  challenge,
  solution,
  result,
  stacks,
}: ProjectCardProps) {
  return (
    <Card className="p-6 transition-all hover:border-green-500">
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <div className="flex gap-2">
          <span className="text-sm text-zinc-400">{clientType}</span>
          <span className="text-zinc-600">•</span>
          <span className="text-sm text-zinc-400">{sector}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="mb-1 text-sm font-semibold text-green-500">Desafio</h4>
          <p className="text-sm text-zinc-400">{challenge}</p>
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-green-500">Solução</h4>
          <p className="text-sm text-zinc-400">{solution}</p>
        </div>

        <div>
          <h4 className="mb-1 text-sm font-semibold text-green-500">Resultado</h4>
          <p className="text-sm text-zinc-400">{result}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-2 text-xs font-semibold text-zinc-500">Tecnologias</h4>
        <div className="flex flex-wrap gap-2">
          {stacks.map((stack, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {stack}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
