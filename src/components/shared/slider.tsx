"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useAptabase } from '@aptabase/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ImagesSrc, StateImage } from "@/types/slider";

import { imagesSrc } from "@/content/skills";

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
