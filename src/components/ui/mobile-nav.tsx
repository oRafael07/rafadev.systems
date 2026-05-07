"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        aria-label="Abrir menu"
        className="ml-auto md:hidden inline-flex items-center gap-1.5 px-2 py-1 rounded border border-zinc-800 text-zinc-300 hover:border-zinc-600 font-mono text-xs"
      >
        <span aria-hidden="true">≡</span>
        <span>menu</span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle className="sr-only">Navegação</DrawerTitle>
        <nav
          aria-label="Navegação principal"
          className="flex flex-col px-3 pb-6 pt-4 font-mono text-sm"
        >
          {links.map((l) => (
            <DrawerClose key={l.href} asChild>
              <Link
                href={l.href}
                className="px-3 py-3 text-zinc-300 hover:bg-zinc-900 hover:text-white rounded border-b border-zinc-900 last:border-b-0"
              >
                {l.label}
              </Link>
            </DrawerClose>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
