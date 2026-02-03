import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | Rafa DEV",
  description:
    "Entre em contato para conversarmos sobre seu projeto. Respondo em até 24 horas.",
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen px-10 py-20 md:px-20 lg:px-40">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contato</h1>
          <p className="text-lg text-zinc-400">
            Vamos conversar sobre seu projeto? Escolha a melhor forma de entrar em contato
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
              <Phone className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="mb-3 text-2xl font-bold">WhatsApp</h2>
            <p className="mb-6 text-sm text-zinc-400">
              A forma mais rápida de entrar em contato. Respondo geralmente em poucas horas.
            </p>
            <Button
              size="lg"
              className="w-full gap-2 bg-green-500 hover:bg-green-600"
              asChild
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                target="_blank"
              >
                Abrir WhatsApp
              </Link>
            </Button>
          </Card>

          <Card className="p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
              <Mail className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="mb-3 text-2xl font-bold">E-mail</h2>
            <p className="mb-6 text-sm text-zinc-400">
              Prefere e-mail? Envie sua mensagem e respondo em até 24 horas.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              asChild
            >
              <Link
                href="mailto:rafadeveloper.contato@gmail.com"
                target="_blank"
              >
                Enviar e-mail
              </Link>
            </Button>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Informações úteis</h2>
            <div className="space-y-4 text-sm text-zinc-400">
              <p>
                <strong className="text-zinc-300">Tipo de projeto:</strong> Conte-me sobre o tipo de negócio,
                problema que quer resolver e prazos desejados.
              </p>
              <p>
                <strong className="text-zinc-300">Orçamento:</strong> Se tiver uma faixa de orçamento em mente,
                compartilhe. Isso ajuda a alinhar expectativas desde o início.
              </p>
              <p>
                <strong className="text-zinc-300">Prazo de resposta:</strong> Respondo todas as mensagens em até
                24 horas úteis.
              </p>
              <p>
                <strong className="text-zinc-300">Disponibilidade:</strong> Atualmente estou disponível para
                novos projetos e consultorias.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-zinc-400">
            Ainda tem dúvidas? Confira meus projetos e serviços
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button variant="outline" asChild>
              <Link href="/projetos">Ver projetos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/servicos">Ver serviços</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
