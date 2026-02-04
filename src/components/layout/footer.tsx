import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/50 px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Rafa <span className="text-green-500">DEV</span>
            </h3>
            <p className="mb-6 text-sm text-zinc-400">
              Desenvolvedor Full Stack especializado em criar soluções web escaláveis e de alta performance.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/rafaelrocha"
                target="_blank"
                className="text-zinc-400 transition-colors hover:text-green-500"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/rafaelrocha"
                target="_blank"
                className="text-zinc-400 transition-colors hover:text-green-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contato@rafadev.systems"
                className="text-zinc-400 transition-colors hover:text-green-500"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+de+discutir+um+projeto.&type=phone_number&app_absent=0"
                target="_blank"
                className="text-zinc-400 transition-colors hover:text-green-500"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/projetos"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-zinc-400">Aplicações Web</span>
              </li>
              <li>
                <span className="text-sm text-zinc-400">APIs e Integrações</span>
              </li>
              <li>
                <span className="text-sm text-zinc-400">Melhoria de Sistemas</span>
              </li>
              <li>
                <span className="text-sm text-zinc-400">Consultoria Técnica</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  Enviar mensagem
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=5592993647866&text=Ol%C3%A1%2C+gostaria+de+discutir+um+projeto.&type=phone_number&app_absent=0"
                  target="_blank"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contato@rafadev.systems"
                  className="text-sm text-zinc-400 transition-colors hover:text-green-500"
                >
                  contato@rafadev.systems
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-zinc-400">
                © {new Date().getFullYear()} Rafael Rocha. Todos os direitos reservados.
              </p>
              <p className="text-xs text-zinc-500">CNPJ: 59.715.257/0001-72</p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-xs text-zinc-500 transition-colors hover:text-green-500"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
