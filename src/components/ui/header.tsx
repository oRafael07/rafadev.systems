import Link from "next/link";

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

        <details className="ml-auto md:hidden relative group">
          <summary
            aria-label="Abrir menu"
            className="list-none cursor-pointer flex items-center gap-1.5 px-2 py-1 rounded border border-zinc-800 text-zinc-300 hover:border-zinc-600 [&::-webkit-details-marker]:hidden"
          >
            <span aria-hidden="true">≡</span>
            <span>menu</span>
          </summary>
          <nav
            aria-label="Navegação principal"
            className="absolute right-0 top-full mt-2 min-w-[180px] rounded border border-zinc-800 bg-[#070707] shadow-lg p-2 flex flex-col"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded hover:bg-zinc-900 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
