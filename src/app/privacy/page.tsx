import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Rafa DEV",
};

interface Section {
  id: string;
  num: string;
  title: string;
  body: React.ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: "coleta",
    num: "01",
    title: "Informações que coletamos",
    body: (
      <p>
        Este site pode coletar informações fornecidas diretamente por você, como nome e endereço
        de e-mail quando você entra em contato através dos formulários ou links disponíveis.
      </p>
    ),
  },
  {
    id: "uso",
    num: "02",
    title: "Como usamos suas informações",
    body: (
      <>
        <p>Utilizamos as informações coletadas para:</p>
        <ul>
          <li>Responder às suas solicitações e entrar em contato</li>
          <li>Melhorar nossos serviços e experiência do usuário</li>
          <li>Enviar comunicações relacionadas aos nossos serviços</li>
        </ul>
      </>
    ),
  },
  {
    id: "compartilhamento",
    num: "03",
    title: "Compartilhamento de informações",
    body: (
      <p>
        Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto
        quando necessário para cumprir obrigações legais ou com seu consentimento explícito.
      </p>
    ),
  },
  {
    id: "cookies",
    num: "04",
    title: "Cookies e tecnologias similares",
    body: (
      <p>
        Este site utiliza cookies e tecnologias similares para melhorar sua experiência de
        navegação e coletar informações sobre como você usa o site. Você pode configurar seu
        navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
      </p>
    ),
  },
  {
    id: "seguranca",
    num: "05",
    title: "Segurança dos dados",
    body: (
      <p>
        Implementamos medidas de segurança adequadas para proteger suas informações pessoais
        contra acesso não autorizado, alteração, divulgação ou destruição.
      </p>
    ),
  },
  {
    id: "direitos",
    num: "06",
    title: "Seus direitos",
    body: (
      <>
        <p>Você tem o direito de:</p>
        <ul>
          <li>Acessar suas informações pessoais</li>
          <li>Corrigir informações incorretas</li>
          <li>Solicitar a exclusão de suas informações</li>
          <li>Opor-se ao processamento de suas informações</li>
        </ul>
      </>
    ),
  },
  {
    id: "alteracoes",
    num: "07",
    title: "Alterações nesta política",
    body: (
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. A data da última
        atualização será indicada no topo desta página. Recomendamos que você revise esta
        política regularmente.
      </p>
    ),
  },
  {
    id: "contato",
    num: "08",
    title: "Contato",
    body: (
      <p>
        Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail{" "}
        <Link
          href="mailto:rafadeveloper.contato@gmail.com"
          className="text-green-500 underline-offset-4 hover:underline"
        >
          rafadeveloper.contato@gmail.com
        </Link>
        .
      </p>
    ),
  },
];

const LAST_UPDATED = "2026-05-06";

export default function PrivacyPage() {
  return (
    <section className="relative bg-[#0a0a0a] text-white">
      {/* HERO STRIP */}
      <div className="relative overflow-hidden border-b border-zinc-900">
        <div aria-hidden="true" className="absolute inset-0 neutral-bg pointer-events-none" />
        <div aria-hidden="true" className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="text-xs text-zinc-500 mb-4 font-mono">
            <span className="text-zinc-400">$</span> cat privacy.md
          </div>
          <h1 className="font-hero text-[clamp(36px,5vw,72px)] font-bold leading-[1] tracking-tight">
            Política de
            <br />
            <span className="strike-papel">Privacidade</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
            <span>
              <span className="text-zinc-700">last_updated:</span>{" "}
              <span className="text-zinc-300">{LAST_UPDATED}</span>
            </span>
            <span>
              <span className="text-zinc-700">sections:</span>{" "}
              <span className="text-zinc-300">{SECTIONS.length}</span>
            </span>
            <span>
              <span className="text-zinc-700">lang:</span>{" "}
              <span className="text-zinc-300">pt-br</span>
            </span>
          </div>
        </div>
      </div>

      {/* DOCUMENT */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* INDEX SIDEBAR */}
          <aside className="lg:col-span-3 lg:sticky lg:top-16 lg:self-start">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-4">
              # Índice
            </div>
            <nav aria-label="Seções" className="flex flex-col">
              {SECTIONS.map((s) => (
                <Link
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-3 py-2 text-sm text-zinc-400 hover:text-white border-b border-zinc-900 last:border-b-0"
                >
                  <span className="font-mono text-[11px] text-zinc-600 group-hover:text-green-500">
                    {s.num}
                  </span>
                  <span className="font-medium">{s.title}</span>
                </Link>
              ))}
            </nav>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white"
            >
              <span aria-hidden="true">←</span> cd ~/rafadev
            </Link>
          </aside>

          {/* DOC CARD */}
          <article className="lg:col-span-9">
            <div className="rounded-lg border border-zinc-800 bg-[#070707] overflow-hidden">
              <div className="flex items-center gap-2 px-4 h-9 border-b border-zinc-900">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-[11px] text-zinc-500 font-mono">privacy.md</span>
                <span className="ml-auto text-[11px] text-zinc-700 font-mono hidden sm:inline">
                  {SECTIONS.length} sections · readonly
                </span>
              </div>

              <div className="divide-y divide-zinc-900">
                {SECTIONS.map((s) => (
                  <section
                    key={s.id}
                    id={s.id}
                    className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6 px-5 sm:px-8 py-8 scroll-mt-16"
                  >
                    <div
                      aria-hidden="true"
                      className="font-mono text-zinc-700 text-[11px] pt-1 select-none tabular-nums"
                    >
                      {s.num}
                    </div>
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                        <span className="text-zinc-600 font-mono mr-2">##</span>
                        {s.title}
                      </h2>
                      <div className="prose-privacy mt-4 text-zinc-300 text-[15px] leading-relaxed">
                        {s.body}
                      </div>
                    </div>
                  </section>
                ))}

                <div className="px-5 sm:px-8 py-6 font-mono text-[11px] text-zinc-600 flex items-center gap-2">
                  <span aria-hidden="true">▍</span>
                  <span>EOF</span>
                  <span aria-hidden="true" className="text-zinc-400 blink">_</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-zinc-500 font-mono">
              <span>CNPJ: 59.715.257/0001-72</span>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white"
              >
                <span aria-hidden="true">›</span> cd ~/rafadev
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
