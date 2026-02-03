import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Rafa DEV",
  description:
    "Conheça minha história, valores e forma de trabalhar. Desenvolvedor de Software com 6+ anos de experiência.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <section className="px-10 py-20 md:px-20 lg:px-40">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex flex-col items-center gap-8 md:flex-row">
            <Image
              src="/me.jpg"
              alt="Rafael Rocha"
              width={250}
              height={250}
              className="rounded-full"
            />
            <div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sobre mim</h1>
              <p className="text-lg text-zinc-400">
                Desenvolvedor de Software apaixonado por transformar ideias em soluções reais
              </p>
            </div>
          </div>

          <div className="space-y-6 text-zinc-300">
            <h2 className="text-2xl font-bold">Quem sou eu</h2>
            <p className="leading-relaxed">
              Sou Rafael Rocha, tenho 21 anos e trabalho com desenvolvimento de software há mais de 6 anos.
              Minha jornada começou cedo, movido pela curiosidade de entender como as coisas funcionam
              e pela vontade de criar soluções que realmente fazem diferença.
            </p>
            <p className="leading-relaxed">
              Ao longo desses anos, tive a oportunidade de trabalhar em diferentes contextos: desde
              startups em fase inicial até produtos SaaS consolidados. Essa diversidade me ensinou
              a adaptar soluções técnicas às necessidades reais de cada negócio, sempre priorizando
              simplicidade, escalabilidade e manutenibilidade.
            </p>
            <p className="leading-relaxed">
              Hoje, atuo como desenvolvedor independente, ajudando empresas e empreendedores a
              construírem seus produtos digitais. Meu foco está em entregar software de qualidade,
              com código limpo, bem documentado e fácil de evoluir.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Minha forma de trabalhar</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="mb-3 text-xl font-bold text-green-500">Comunicação clara</h3>
                <p className="text-sm text-zinc-400">
                  Acredito que boa comunicação é fundamental. Mantenho você sempre informado sobre
                  o progresso, desafios e próximos passos do projeto.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 text-xl font-bold text-green-500">Entregas iterativas</h3>
                <p className="text-sm text-zinc-400">
                  Trabalho em ciclos curtos, entregando valor de forma incremental. Isso permite
                  ajustes rápidos e garante que estamos sempre no caminho certo.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 text-xl font-bold text-green-500">Código limpo e testado</h3>
                <p className="text-sm text-zinc-400">
                  Escrevo código pensando em quem vai mantê-lo no futuro. Priorizo legibilidade,
                  organização e testes automatizados sempre que possível.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="mb-3 text-xl font-bold text-green-500">Foco em resultado de negócio</h3>
                <p className="text-sm text-zinc-400">
                  Tecnologia é meio, não fim. Meu objetivo é sempre entregar soluções que resolvam
                  problemas reais e gerem valor para o seu negócio.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Linha do tempo</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-bold text-green-500">2019-2020</span>
                  <span className="h-px flex-1 bg-zinc-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Primeiros passos</h3>
                <p className="text-sm text-zinc-400">
                  Comecei minha jornada profissional com estágios e projetos freelance, aprendendo
                  as bases do desenvolvimento web e trabalhando com tecnologias como HTML, CSS,
                  JavaScript e PHP.
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-bold text-green-500">2021-2022</span>
                  <span className="h-px flex-1 bg-zinc-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Crescimento e especialização</h3>
                <p className="text-sm text-zinc-400">
                  Aprofundei conhecimentos em Node.js e React, trabalhando em projetos mais complexos
                  e começando a entender melhor arquitetura de software, APIs RESTful e bancos de dados.
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-bold text-green-500">2023-2024</span>
                  <span className="h-px flex-1 bg-zinc-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Consolidação e maturidade</h3>
                <p className="text-sm text-zinc-400">
                  Atuei em produtos SaaS, liderando features completas e tomando decisões técnicas
                  importantes. Aprendi sobre escalabilidade, performance e a importância de código
                  bem estruturado.
                </p>
              </Card>

              <Card className="p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-sm font-bold text-green-500">2025-Presente</span>
                  <span className="h-px flex-1 bg-zinc-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold">Desenvolvedor independente</h3>
                <p className="text-sm text-zinc-400">
                  Decidi trabalhar de forma independente, ajudando empresas e empreendedores a
                  construírem seus produtos. Foco em projetos que fazem sentido e onde posso
                  realmente agregar valor.
                </p>
              </Card>
            </div>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Valores</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-bold text-green-500">Transparência</h3>
                <p className="text-sm text-zinc-400">
                  Ser honesto sobre prazos, desafios e limitações. Prefiro dizer &quot;não sei, mas vou
                  descobrir&quot; do que prometer algo que não posso cumprir.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold text-green-500">Responsabilidade</h3>
                <p className="text-sm text-zinc-400">
                  Assumir compromissos e cumpri-los. Quando algo dá errado, assumo e trabalho para
                  resolver da melhor forma possível.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold text-green-500">Autonomia</h3>
                <p className="text-sm text-zinc-400">
                  Buscar soluções de forma independente, mas sem medo de pedir ajuda quando necessário.
                  Acredito em aprendizado contínuo e colaboração.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-bold text-green-500">Melhoria contínua</h3>
                <p className="text-sm text-zinc-400">
                  Sempre há espaço para evoluir. Busco constantemente aprender novas tecnologias,
                  padrões e formas de trabalhar melhor.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Vamos trabalhar juntos?</h2>
            <p className="mb-6 text-zinc-400">
              Se você busca um desenvolvedor comprometido, transparente e focado em resultados,
              vamos conversar.
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
      </section>
    </div>
  );
}
