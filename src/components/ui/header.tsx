"use client"

import { ContactIcon, HomeIcon, MenuIcon, User, Clock } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Separator } from "./separator";
import Link from "next/link";

export default function Header() {
  return (
    <Card className="flex items-center justify-between bg-transparent p-4 md:border-none md:p-10">
      <h1 className="text-xl font-bold text-white md:text-2xl">
        Rafa <span className="text-green-500">DEV</span>
      </h1>

      <div className="flex items-center gap-4 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-zinc-900 border-zinc-800">
            <SheetHeader className="mb-4 text-left text-lg font-semibold text-white">
              Menu
            </SheetHeader>

            <div className="mt-4 flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2 text-zinc-300 hover:text-green-500">
                <HomeIcon size={16} />
                Início
              </Link>
              <Separator className="bg-zinc-800" />

              <Link href="#about-me" className="flex items-center gap-2 text-zinc-300 hover:text-green-500">
                <User size={16} />
                Sobre mim
              </Link>
              <Separator className="bg-zinc-800" />

              <Link href="/timeline" className="flex items-center gap-2 text-zinc-300 hover:text-green-500">
                <Clock size={16} />
                Jornada
              </Link>
              <Separator className="bg-zinc-800" />

              <Link href="/contact" className="flex items-center gap-2 text-zinc-300 hover:text-green-500">
                <ContactIcon size={16} />
                Contato
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden items-center gap-2 text-sm md:flex">
        <Link href="/" className="text-white hover:text-green-500">Início</Link>
        <Separator orientation="vertical" className="h-4 bg-zinc-700" />
        <Link href="#about-me" className="text-white hover:text-green-500">Sobre mim</Link>
        <Separator orientation="vertical" className="h-4 bg-zinc-700" />
        <Link href="/timeline" className="text-white hover:text-green-500">Jornada</Link>
        <Separator orientation="vertical" className="h-4 bg-zinc-700" />
        <Link href="/contact" className="text-white hover:text-green-500">Contato</Link>
      </nav>
    </Card>
  );
}
