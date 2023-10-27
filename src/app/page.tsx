import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeIcon, Github, Linkedin, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="heading">
        <main className="flex flex-col items-center justify-between px-10 md:flex-row md:px-20 lg:px-40">
          <div>
            <h1 className="text-center text-6xl font-bold leading-tight md:mt-10 md:text-left md:leading-normal">
              Tire sua ideia do <br />
              <span className="text-green-500 line-through">Papel</span>
            </h1>
            <div className="flex justify-center md:justify-start">
              <Button
                variant="outline"
                className="mt-4 justify-start gap-2 hover:bg-green-500"
              >
                <PhoneIcon size={16} />
                Fale Comigo
              </Button>
            </div>
          </div>
          <div className="-order-1 md:order-1">
            <Image
              src="/cloud.png"
              alt="Nuvem"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
              className="h-auto max-h-[100%] w-full max-w-[100%] "
            />
          </div>
        </main>
      </section>

      <section id="about-me">
        {/* <h1 className="mb-10 text-center text-xl font-bold">Sobre mim</h1> */}

        <div className="my-20 flex flex-col justify-center gap-10 md:flex-row md:items-center md:gap-6 md:px-40 md:py-20">
          <Image
            src="/me.jpg"
            alt="Eu"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              objectFit: "contain",
            }}
            className="mx-auto h-auto max-h-[35%] w-full max-w-[35%] rounded-full md:mx-0 md:max-h-[15%] md:max-w-[15%] lg:max-h-[20%] lg:max-w-[20%]"
          />
          <div className="flex w-auto flex-col px-10 md:px-0">
            <h1 className="text-center text-3xl font-light md:text-left">
              Olá, eu sou{" "}
              <span className="font-bold text-green-500">Rafael</span>
            </h1>
            <p className="py-4 text-center text-sm text-zinc-400 md:text-left">
              Desenvolvedor de Software
            </p>

            <Separator className="my-2" />
            <div className="mx-auto mt-3 flex h-5 items-center space-x-2 text-sm md:mx-0">
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500"
                size="icon"
              >
                <Linkedin />
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500"
                size="icon"
              >
                <Github />
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500"
                size="icon"
              >
                <Mail />
              </Button>
            </div>

            <p className="mx-auto mt-10 px-10 text-center text-sm text-zinc-400 md:max-w-md md:px-0 md:text-left">
              Trabalho com desenvolvimento de Software a 4 anos, construindo
              soluções escaláveis e facilidade para negócio usando o melhor da
              tecnologia.
            </p>
          </div>
        </div>
      </section>

      <section id="soft-skills">
        <div className="mt-6">
          <h1 className="text-center text-xl font-bold">Soft skills</h1>
          <p className="mt-2 text-center text-sm text-zinc-400">
            Veja um pouco das minhas experiências
          </p>

          <div className="mb-20 mt-10">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
