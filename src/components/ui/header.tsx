import { ContactIcon, HomeIcon, MenuIcon, User } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Separator } from "./separator";
import Link from "next/link";

export default function Header() {
  return (
    <Card className="flex items-center justify-between bg-transparent p-[1.875rem] md:border-none md:p-10">
      <h1 className="text-2xl font-bold text-white">
        Rafa <span className="text-green-500">DEV</span>
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="md:hidden">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader className="mb-4 text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href="/">
                <HomeIcon size={16} />
                Início
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href="#about-me">
                <User size={16} />
                Sobre mim
              </Link>
            </Button>

            <Separator />

            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href="#about-me">
                <ContactIcon size={16} />
                Contato
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden h-5 items-center text-sm md:flex">
        <Button
          variant="link"
          className="w-full justify-start gap-2 text-white"
          asChild
        >
          <Link href="/">Início</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="link"
          className="w-full justify-start gap-2 text-white"
          asChild
        >
          <Link href="#about-me">Sobre mim</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="link"
          className="w-full justify-start gap-2 text-white"
        >
          <Link href="#about-me">Contato</Link>
        </Button>
      </div>
    </Card>
  );
}
