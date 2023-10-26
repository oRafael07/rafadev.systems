import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
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

          <div className="mt-10 flex flex-col py-10 md:flex-row md:items-start md:gap-10 md:px-40">
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
            <p className="text-md px-4 py-8 text-center opacity-75 md:px-0 md:text-left">
              Olá, meu nome é{" "}
              <span className=" font-bold text-green-500 opacity-100">
                Rafael!
              </span>{" "}
              tenho {Number(new Date().getFullYear() - 2004)} anos, sou
              Desenvolvedor de Software e construo soluções escaláveis para seu
              negócio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
