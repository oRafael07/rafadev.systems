import { ContactIcon, HomeIcon, MenuIcon, User } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { Separator } from "./separator";

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
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <User size={16} />
              Sobre mim
            </Button>

            <Separator />

            <Button variant="outline" className="w-full justify-start gap-2">
              <ContactIcon size={16} />
              Contato
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden h-5 items-center text-sm md:flex">
        <Button
          variant="link"
          className="w-full justify-start gap-2 text-white"
        >
          Início
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="link"
          className="w-full justify-start gap-2 text-white"
        >
          Sobre mim
        </Button>
        <Separator orientation="vertical" />
        <Button
          variant="link"
          className="w-full justify-start gap-2 text-white"
        >
          Contato
        </Button>
      </div>
    </Card>
  );
}
