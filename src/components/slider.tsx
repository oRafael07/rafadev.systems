import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Slider() {
  return (
    <Marquee
      pauseOnHover
      autoFill
      gradient
      gradientColor="#000000"
      gradientWidth={200}
    >
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/postgres.svg"
          alt="Postgresql"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[40%] w-full max-w-[40%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/docker.svg"
          alt="Docker"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[60%] w-full max-w-[60%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/prisma.svg"
          alt="Prisma"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[50%] w-full max-w-[50%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/nodejs.svg"
          alt="NodeJS"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[30%] w-full max-w-[30%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/tailwindcss.svg"
          alt="tailwindcss"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[50%] w-full max-w-[50%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/react.svg"
          alt="React"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[20%] w-full max-w-[20%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/nextjs.svg"
          alt="NextJS"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[40%] w-full max-w-[40%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/jest.svg"
          alt="Jest"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[40%] w-full max-w-[40%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/github.svg"
          alt="GitHub"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[30%] w-full max-w-[30%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/nginx.svg"
          alt="Nginx"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[30%] w-full max-w-[30%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/ubuntu.svg"
          alt="Ubuntu"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[30%] w-full max-w-[30%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/typescript.svg"
          alt="Typescript"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[30%] w-full max-w-[30%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/cloudflare.svg"
          alt="Cloudflare"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[50%] w-full max-w-[50%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/digitalocean.svg"
          alt="Digital Ocean"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[70%] w-full max-w-[70%]"
        />
      </div>
      <div className="w-[50%] md:w-[200px]">
        <Image
          src="/skills/datadog.svg"
          alt="Datadog"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
          className="h-auto max-h-[70%] w-full max-w-[70%]"
        />
      </div>
    </Marquee>
  );
}
