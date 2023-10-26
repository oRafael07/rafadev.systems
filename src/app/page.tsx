import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";
import { CodeIcon, PhoneIcon } from "lucide-react";
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
        <div className="mt-20">
          <h1 className="text-center text-xl font-bold">Sobre mim</h1>

          <div className="mt-4 flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between md:gap-10 md:px-40">
            <Image
              src="/me.jpg"
              alt="Eu"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
              className="mx-auto h-auto max-h-[40%] w-full max-w-[40%] rounded-full md:max-h-[20%] md:max-w-[20%]"
            />
            <div className="px-10 md:px-0">
              <h1 className="text-center text-2xl font-light md:text-left">
                Olá, eu sou{" "}
                <span className="font-bold text-green-500">Rafael</span>
              </h1>
              <p className="mt-4 text-sm text-zinc-400">
                Trabalho com desenvolvimento de Software a 4 anos, construindo
                soluções escaláveis e facilidade para negócio usando o melhor da
                tecnologia.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  variant="outline"
                  className="mt-4 justify-start gap-2 hover:bg-green-500"
                >
                  <CodeIcon size={16} />
                  Soft skills
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soft-skills">
        <div className="mt-6">
          <h1 className="text-center text-xl font-bold">Soft skills</h1>
          <p className="mt-2 text-center text-sm text-zinc-400">
            Veja um pouco das minhas experiências
          </p>

          <div className="my-20">
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
