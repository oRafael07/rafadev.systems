import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeIcon, Github, Linkedin, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                asChild
              >
                <Link
                  href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <PhoneIcon size={16} />
                  Fale Comigo
                </Link>
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

        <div className="my-20 flex flex-col justify-center gap-10 md:flex-row md:items-center md:px-40 md:py-20">
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
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/rafael-rocha-b6b745205/"
                  target="_blank"
                >
                  <Linkedin />
                </Link>
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500"
                size="icon"
                asChild
              >
                <Link href="https://github.com/oRafael07" target="_blank">
                  <Github />
                </Link>
              </Button>
              <Separator orientation="vertical" />
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500"
                size="icon"
                asChild
              >
                <Link
                  href="mailto:rafadeveloper.contato@gmail.com"
                  target="_blank"
                >
                  <Mail />
                </Link>
              </Button>
            </div>

            <p className="mx-auto mt-10 px-10 text-center text-sm text-zinc-400 md:max-w-md md:px-0 md:text-left">
              Trabalho com desenvolvimento de Software a 6 anos, construindo
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

      <footer className="flex w-full flex-col items-center justify-between gap-4 p-10 py-5 md:flex-row md:gap-0">
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm text-zinc-400">
            Made by Rafael with 💜
          </p>
          <p className="text-center text-xs text-zinc-400 md:text-left">
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
        <p className="text-xs text-zinc-400">CNPJ: 59.715.257/0001-72</p>
      </footer>
    </>
  );
}
