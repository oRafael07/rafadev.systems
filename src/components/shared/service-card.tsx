import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Plug, Wrench } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const iconMap = {
  Code: Code,
  Plug: Plug,
  Wrench: Wrench,
  Lightbulb: Lightbulb,
};

export default function ServiceCard({
  title,
  description,
  features,
  icon,
}: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Code;

  return (
    <Card className="p-6 transition-all hover:border-green-500">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
        <Icon className="h-6 w-6 text-green-500" />
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-sm text-zinc-400">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}
