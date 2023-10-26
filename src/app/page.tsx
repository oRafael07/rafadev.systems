import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section id="heading">
      <div className="flex flex-col items-center justify-between px-10 md:flex-row md:px-20 lg:px-40">
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
      </div>
    </section>
  );
}
