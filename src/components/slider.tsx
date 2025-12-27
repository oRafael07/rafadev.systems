"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useAptabase } from '@aptabase/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ImagesSrc {
  url: string;
  alt: string;
  style: string;
  description: string;
  category: "todos" | "frontend" | "backend" | "devops" | "linguagem";
}

interface StateImage {
  initialState: ImagesSrc[];
  filtered: ImagesSrc[];
}

const imagesSrc: ImagesSrc[] = [
  {
    url: "/skills/postgres.svg",
    alt: "Postgresql",
    style: "md:max-h-[40%] md:max-w-[40%] max-h-[10%] max-w-[10%]",
    description: "Banco de dados Postgresql",
    category: "backend",
  },
  {
    url: "/skills/docker.svg",
    alt: "Docker",
    style: "md:max-h-[60%] md:max-w-[60%] max-h-[10%] max-w-[10%]",
    description: "Containização Docker",
    category: "devops",
  },
  {
    url: "/skills/prisma.svg",
    alt: "Prisma",
    style: "md:max-h-[50%] md:max-w-[50%] max-h-[10%] max-w-[10%]",
    description: "Prisma ORM",
    category: "backend",
  },
  {
    url: "/skills/nodejs.svg",
    alt: "Node.js",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Ambiente javascript runtime",
    category: "backend",
  },
  {
    url: "/skills/tailwindcss.svg",
    alt: "tailwindcss",
    style: "md:max-h-[50%] md:max-w-[50%] max-h-[10%] max-w-[10%]",
    description: "Framework CSS",
    category: "frontend",
  },
  {
    url: "/skills/react.svg",
    alt: "React",
    style: "md:max-h-[20%] md:max-w-[20%] max-h-[10%] max-w-[10%]",
    description: "Biblioteca de criação de interfaces",
    category: "frontend",
  },
  {
    url: "/skills/nextjs.svg",
    alt: "NextJS",
    style: "md:max-h-[40%] md:max-w-[40%] max-h-[10%] max-w-[10%]",
    description: "Framework para ReactJS",
    category: "frontend",
  },
  {
    url: "/skills/jest.svg",
    alt: "Jest",
    style: "md:max-h-[40%] md:max-w-[40%] max-h-[10%] max-w-[10%]",
    description: "Biblioteca para testes automatizados",
    category: "frontend",
  },
  {
    url: "/skills/github.svg",
    alt: "Github",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Plataforma de repositorios",
    category: "devops",
  },
  {
    url: "/skills/nginx.svg",
    alt: "Nginx",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Webserver",
    category: "devops",
  },
  {
    url: "/skills/ubuntu.svg",
    alt: "Ubuntu",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Sistema operacional Unix",
    category: "devops",
  },
  {
    url: "/skills/typescript.svg",
    alt: "Typescript",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Superset para javascript",
    category: "linguagem",
  },
  {
    url: "/skills/cloudflare.svg",
    alt: "Cloudflare DNS",
    style: "md:max-h-[50%] md:max-w-[50%] max-h-[10%] max-w-[10%]",
    description: "Plataforma de gerenciamento DNS e Storage",
    category: "devops",
  },
  {
    url: "/skills/digitalocean.svg",
    alt: "Digital Ocean Cloud",
    style: "md:max-h-[70%] md:max-w-[70%] max-h-[10%] max-w-[10%]",
    description: "Hospedagem cloud",
    category: "devops",
  },
  {
    url: "/skills/datadog.svg",
    alt: "Datadog Monitoring",
    style: "md:max-h-[70%] md:max-w-[70%] max-h-[10%] max-w-[10%]",
    description: "Plataforma de monitoramento de aplicações",
    category: "devops",
  },
  {
    url: "/skills/nestjs.svg",
    alt: "NestJS",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Framework para Nodejs",
    category: "backend",
  },
  {
    url: "/skills/javascript.svg",
    alt: "Javascript",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Linguagem de Programação",
    category: "linguagem",
  },
  {
    url: "/skills/python.svg",
    alt: "Python",
    style: "md:max-h-[30%] md:max-w-[30%] max-h-[10%] max-w-[10%]",
    description: "Linguagem de Programação",
    category: "linguagem",
  },
];

export default function Slider() {
  const { trackEvent } = useAptabase();
  const [state, set] = useState<StateImage>({
    initialState: imagesSrc,
    filtered: [],
  });

  function onHandleChangeSelect(
    value: "todos" | "frontend" | "backend" | "devops" | "linguagem",
  ) {
    trackEvent('slider_change', { value });
    if (value === "todos") {
      set((prev) => ({
        filtered: prev.initialState,
        initialState: prev.initialState,
      }));
      return;
    }

    set((prev) => ({
      ...prev,
      filtered: prev.initialState.filter((i) => i.category === value),
    }));
  }

  return (
    <>
      <div className="mb-10 flex justify-center">
        <Select onValueChange={onHandleChangeSelect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Stacks" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="devops">Devops</SelectItem>
            <SelectItem value="linguagem">Linguagem</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Marquee
        pauseOnHover
        autoFill
        gradient
        gradientColor="#000000"
        gradientWidth={200}
      >
        {state.filtered.length > 0
          ? state.filtered.map((image) => (
              <div className="mx-auto flex w-[30%]" key={image.alt}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className={`h-auto w-full max-w-[250px]`}
                />
              </div>
            ))
          : state.initialState.map((image) => (
              <div className="mx-auto flex w-[30%]" key={image.alt}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                  className={`h-auto w-full max-w-[250px]`}
                />
              </div>
            ))}
      </Marquee>
    </>
  );
}
