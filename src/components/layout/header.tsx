import { ContactIcon, HomeIcon, MenuIcon, User, Briefcase, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <Link href="/" className="group flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white transition-colors">
            Rafa <span className="text-green-500 transition-colors group-hover:text-green-400">DEV</span>
          </h1>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent className="border-zinc-800 bg-zinc-950">
            <SheetHeader className="mb-8 flex flex-row items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
            </SheetHeader>

            <nav className="flex flex-col gap-2">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Início</span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/sobre"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                  <User className="h-5 w-5" />
                  <span>Sobre</span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/projetos"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                  <Briefcase className="h-5 w-5" />
                  <span>Projetos</span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/servicos"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                  <Wrench className="h-5 w-5" />
                  <span>Serviços</span>
                </Link>
              </SheetClose>

              <div className="my-4 h-px bg-zinc-800" />

              <SheetClose asChild>
                <Link
                  href="/contato"
                  className="flex items-center gap-3 rounded-lg bg-green-500/10 px-4 py-3 text-green-500 transition-colors hover:bg-green-500/20"
                >
                  <ContactIcon className="h-5 w-5" />
                  <span className="font-medium">Contato</span>
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Sobre
          </Link>
          <Link
            href="/projetos"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Projetos
          </Link>
          <Link
            href="/servicos"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Serviços
          </Link>
          <Link
            href="/contato"
            className="ml-2 rounded-lg bg-green-500/10 px-4 py-2 text-sm font-medium text-green-500 transition-colors hover:bg-green-500/20"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
