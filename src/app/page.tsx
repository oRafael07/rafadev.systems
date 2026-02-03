"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import {
  ArrowRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Star,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-green-500 opacity-10 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div
            className={`transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5 text-sm font-medium text-green-500 backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Disponível para novos projetos
            </div>

            <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Transformo ideias em{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  produtos digitais
                </span>
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-green-500/20 blur-xl" />
              </span>{" "}
              que geram resultados
            </h1>

            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-zinc-400">
              Desenvolvedor Full Stack especializado em criar soluções web escaláveis e de alta performance para empresas que buscam excelência técnica.
            </p>

            <div className="mb-16 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group h-12 gap-2 bg-green-500 px-8 text-base font-semibold hover:bg-green-600"
                asChild
              >
                <Link
                  href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+de+discutir+um+projeto.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <MessageSquare className="h-5 w-5" />
                  Iniciar conversa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 gap-2 border-zinc-700 px-8 text-base font-semibold hover:border-zinc-600 hover:bg-zinc-900"
                asChild
              >
                <Link href="/projetos">
                  Ver portfólio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "6+", label: "Anos de experiência" },
                { value: "50+", label: "Projetos entregues" },
                { value: "100%", label: "Clientes satisfeitos" },
                { value: "24h", label: "Tempo de resposta" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-green-500/30 hover:bg-zinc-900"
                >
                  <div className="mb-2 text-3xl font-bold text-green-500">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950/50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
              <Zap className="h-4 w-4 text-green-500" />
              Serviços
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Como posso ajudar seu negócio
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Soluções técnicas sob medida para cada etapa do seu produto digital
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-green-500/50 hover:bg-zinc-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 transition-all group-hover:scale-110 group-hover:bg-green-500/20">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="group gap-2 border-zinc-700 hover:border-green-500/50 hover:bg-zinc-900"
              asChild
            >
              <Link href="/servicos">
                Ver todos os serviços
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
              <Star className="h-4 w-4 text-green-500" />
              Portfólio
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Projetos que fazem a diferença
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Cases reais de soluções desenvolvidas para empresas e startups
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 transition-all hover:border-green-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <div className="mb-2 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                        {project.clientType}
                      </div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  <p className="mb-6 text-zinc-400">{project.challenge}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stacks.slice(0, 4).map((stack) => (
                      <span
                        key={stack}
                        className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      Resultado
                    </div>
                    <p className="text-sm text-zinc-300">{project.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="outline"
              className="group gap-2 border-zinc-700 hover:border-green-500/50 hover:bg-zinc-900"
              asChild
            >
              <Link href="/projetos">
                Ver todos os projetos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950/50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
              <Users2 className="h-4 w-4 text-green-500" />
              Para quem trabalho
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Parceiro ideal para cada etapa
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-400">
              Do MVP à escala, entrego soluções adaptadas ao seu momento
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Startups",
                description: "MVPs rápidos, features estratégicas e arquitetura escalável para crescimento acelerado.",
                features: ["Desenvolvimento ágil", "Arquitetura escalável", "Integração com APIs"],
              },
              {
                title: "Empresas",
                description: "Modernização de sistemas, otimização de performance e soluções enterprise robustas.",
                features: ["Refatoração de código", "Otimização de performance", "Migração de sistemas"],
              },
              {
                title: "Empreendedores",
                description: "Landing pages de alta conversão, automações e sistemas sob medida para validar ideias.",
                features: ["Landing pages", "Automações", "Sistemas internos"],
              },
            ].map((client, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-green-500/50 hover:bg-zinc-900"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h3 className="mb-3 text-2xl font-bold">{client.title}</h3>
                  <p className="mb-6 text-zinc-400">{client.description}</p>
                  <ul className="space-y-2">
                    {client.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Pronto para começar seu projeto?
          </h2>
          <p className="mb-10 text-xl text-zinc-400">
            Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-14 gap-2 bg-green-500 px-8 text-base font-semibold hover:bg-green-600"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+de+discutir+um+projeto.&type=phone_number&app_absent=0"
                target="_blank"
              >
                <MessageSquare className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 gap-2 border-zinc-700 px-8 text-base font-semibold hover:border-zinc-600 hover:bg-zinc-900"
              asChild
            >
              <Link href="/contato">
                <Mail className="h-5 w-5" />
                Enviar e-mail
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="https://github.com/rafaelrocha"
              target="_blank"
              className="text-zinc-400 transition-colors hover:text-green-500"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/rafaelrocha"
              target="_blank"
              className="text-zinc-400 transition-colors hover:text-green-500"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
