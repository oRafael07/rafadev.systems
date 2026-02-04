import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  highlights?: string[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  badge?: string;
}

export default function Hero({
  title,
  subtitle,
  highlights,
  primaryCTA,
  secondaryCTA,
  badge,
}: HeroProps) {
  return (
    <section className="px-10 py-20 md:px-20 lg:px-40">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-zinc-400 md:text-xl">{subtitle}</p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-8 space-y-2 text-zinc-300">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          {primaryCTA && (
            <Button
              size="lg"
              className="gap-2 bg-green-500 hover:bg-green-600"
              asChild
            >
              <Link href={primaryCTA.href} target="_blank">
                <PhoneIcon size={16} />
                {primaryCTA.text}
              </Link>
            </Button>
          )}
          {secondaryCTA && (
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
            </Button>
          )}
        </div>

        {badge && (
          <p className="mt-8 text-sm text-zinc-400">
            {badge}
          </p>
        )}
      </div>
    </section>
  );
}
