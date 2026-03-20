import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="heading">
        <main className="flex flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-20 lg:px-40">
          <div className="order-2 text-center md:order-1 md:text-left">
            <h1 className="text-4xl font-bold leading-tight md:mt-10 md:text-left md:text-6xl md:leading-normal">
              Tire sua ideia do <br />
              <span className="text-green-500 line-through">Papel</span>
            </h1>
            <div className="mt-6 flex justify-center md:justify-start">
              <Button
                variant="outline"
                className="gap-2 bg-green-500 text-white hover:bg-green-600 border-green-500"
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
          <div className="order-1 w-full md:order-2 md:w-auto">
            <Image
              src="/cloud.png"
              alt="Nuvem"
              width={400}
              height={300}
              style={{
                objectFit: "contain",
              }}
              className="mx-auto h-auto w-full max-w-[280px] md:max-w-[400px]"
            />
          </div>
        </main>
      </section>

      <section id="about-me">
        <div className="my-12 flex flex-col items-center gap-8 px-6 md:my-20 md:flex-row md:justify-center md:px-20 lg:px-40">
          <Image
            src="/me.jpg"
            alt="Eu"
            width={200}
            height={200}
            style={{
              objectFit: "cover",
            }}
            className="mx-auto h-32 w-32 rounded-full md:mx-0 md:h-48 md:w-48"
          />
          <div className="flex w-full flex-col md:w-auto">
            <h1 className="text-center text-2xl font-light md:text-left md:text-3xl">
              Olá, eu sou{" "}
              <span className="font-bold text-green-500">Rafael</span>
            </h1>
            <p className="py-3 text-center text-sm text-zinc-400 md:text-left md:text-base">
              Desenvolvedor de Software
            </p>

            <Separator className="hidden md:block" />
            <div className="mt-4 flex justify-center gap-3 md:mx-0 md:justify-start">
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500 hover:text-white border-zinc-700"
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
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500 hover:text-white border-zinc-700"
                size="icon"
                asChild
              >
                <Link href="https://github.com/oRafael07" target="_blank">
                  <Github />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="p-2 text-zinc-400 hover:bg-green-500 hover:text-white border-zinc-700"
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

            <p className="mx-auto mt-6 text-center text-sm text-zinc-400 md:mx-0 md:max-w-md md:text-left">
              Trabalho com desenvolvimento de Software a 6 anos, construindo
              soluções escaláveis e facilidade para negócio usando o melhor da
              tecnologia.
            </p>
          </div>
        </div>
      </section>

      <section id="soft-skills">
        <div className="mt-6">
          <h1 className="text-center text-xl font-bold md:text-2xl">
            Soft skills
          </h1>
          <p className="mt-2 text-center text-base text-zinc-400">
            Veja um pouco das minhas experiências
          </p>

          <div className="mb-20 mt-10">
            <Slider />
          </div>
        </div>
      </section>

      <footer className="flex w-full flex-col items-center justify-between gap-4 p-10 py-5 text-sm md:flex-row md:gap-0">
        <div className="flex flex-col gap-2">
          <p className="text-center text-sm text-zinc-400">
            Made by Rafael with ☕
          </p>
          <p className="text-center text-xs text-zinc-400 md:text-left">
            Copyright © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <p className="text-xs text-zinc-400">CNPJ: 59.715.257/0001-72</p>
          <Link
            href="/privacy"
            className="text-xs text-zinc-400 hover:text-green-500 transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </footer>
    </>
  );
}
