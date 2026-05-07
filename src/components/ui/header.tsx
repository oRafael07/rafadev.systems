import Link from "next/link";
import MobileNav from "./mobile-nav";

const NAV_LINKS = [
  { href: "/#about", label: "about.md" },
  { href: "/#skills", label: "stacks.json" },
  { href: "/#journey", label: "timeline.log" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-900 bg-[#070707] sticky top-0 z-40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-10 flex items-center gap-4 text-xs text-zinc-500 font-mono">
        <div aria-hidden="true" className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-zinc-800" />
          <span className="w-3 h-3 rounded-full bg-zinc-800" />
          <span className="w-3 h-3 rounded-full bg-zinc-800" />
        </div>
        <Link href="/" className="text-zinc-600 hover:text-zinc-300">
          ~/rafadev
        </Link>
        <span aria-hidden="true" className="text-zinc-700">›</span>
        <span className="text-zinc-300">portfolio.tsx</span>

        <nav aria-label="Navegação principal" className="ml-auto hidden md:flex gap-5">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
