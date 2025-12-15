import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rafa DEV",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 md:px-20 md:py-20">
      <Button
        variant="outline"
        className="mb-8 hover:bg-green-500"
        asChild
      >
        <Link href="/">
          <ArrowLeft size={16} className="mr-2" />
          Voltar
        </Link>
      </Button>

      <div className="space-y-8">
        <section>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Política de <span className="text-green-500">Privacidade</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            1. Informações que coletamos
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Este site pode coletar informações fornecidas diretamente por você,
            como nome e endereço de e-mail quando você entra em contato através
            dos formulários ou links disponíveis.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            2. Como usamos suas informações
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Utilizamos as informações coletadas para:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-base text-zinc-300">
            <li>Responder às suas solicitações e entrar em contato</li>
            <li>Melhorar nossos serviços e experiência do usuário</li>
            <li>Enviar comunicações relacionadas aos nossos serviços</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            3. Compartilhamento de informações
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Não vendemos, alugamos ou compartilhamos suas informações pessoais
            com terceiros, exceto quando necessário para cumprir obrigações
            legais ou com seu consentimento explícito.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            4. Cookies e tecnologias similares
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Este site utiliza cookies e tecnologias similares para melhorar sua
            experiência de navegação e coletar informações sobre como você usa
            o site. Você pode configurar seu navegador para recusar cookies,
            mas isso pode afetar algumas funcionalidades do site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            5. Segurança dos dados
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Implementamos medidas de segurança adequadas para proteger suas
            informações pessoais contra acesso não autorizado, alteração,
            divulgação ou destruição.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            6. Seus direitos
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Você tem o direito de:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-base text-zinc-300">
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir informações incorretas</li>
            <li>Solicitar a exclusão de suas informações</li>
            <li>Opor-se ao processamento de suas informações</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            7. Alterações nesta política
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Podemos atualizar esta Política de Privacidade periodicamente. A
            data da última atualização será indicada no topo desta página.
            Recomendamos que você revise esta política regularmente.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-green-500">
            8. Contato
          </h2>
          <p className="text-base leading-relaxed text-zinc-300">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em
            contato conosco através do e-mail:{" "}
            <a
              href="mailto:rafadeveloper.contato@gmail.com"
              className="text-green-500 hover:underline"
            >
              rafadeveloper.contato@gmail.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-16 border-t border-zinc-800 pt-8">
        <p className="text-center text-xs text-zinc-400">
          CNPJ: 59.715.257/0001-72
        </p>
      </div>
    </main>
  );
}

