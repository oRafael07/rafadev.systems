import ServiceCard from "@/components/sections/service-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, servicePackages } from "@/content/services";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Rafa DEV",
  description:
    "Conheça os serviços que ofereço: desenvolvimento web, APIs, integrações e consultoria técnica.",
};

export default function ServicosPage() {
  return (
    <div className="min-h-screen px-10 py-20 md:px-20 lg:px-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Serviços</h1>
          <p className="text-lg text-zinc-400">
            Soluções técnicas focadas em resolver problemas reais e gerar resultados
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">O que eu ofereço</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} title={service.title} description={service.description} features={service.features} icon={service.icon as string} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Modelos de trabalho</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-3 text-xl font-bold">{pkg.title}</h3>
                <p className="text-sm text-zinc-400">{pkg.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Como funciona na prática</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold">
                  1
                </span>
                <h3 className="text-lg font-bold">Conversa inicial</h3>
              </div>
              <p className="ml-11 text-sm text-zinc-400">
                Entendemos o problema que você quer resolver, objetivos e contexto do negócio.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold">
                  2
                </span>
                <h3 className="text-lg font-bold">Proposta técnica + estimativa</h3>
              </div>
              <p className="ml-11 text-sm text-zinc-400">
                Apresento uma proposta com escopo, tecnologias, prazos e valores.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold">
                  3
                </span>
                <h3 className="text-lg font-bold">Execução em sprints curtos</h3>
              </div>
              <p className="ml-11 text-sm text-zinc-400">
                Trabalho em ciclos de 1-2 semanas, com entregas incrementais e feedback constante.
              </p>
            </Card>

            <Card className="p-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold">
                  4
                </span>
                <h3 className="text-lg font-bold">Entrega, documentação e suporte inicial</h3>
              </div>
              <p className="ml-11 text-sm text-zinc-400">
                Entrego o projeto com documentação clara e suporte inicial para garantir uma transição suave.
              </p>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Pronto para começar?</h2>
          <p className="mb-6 text-zinc-400">
            Entre em contato para conversarmos sobre seu projeto
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              size="lg"
              className="gap-2 bg-green-500 hover:bg-green-600"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Falar no WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contato">Enviar mensagem</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
