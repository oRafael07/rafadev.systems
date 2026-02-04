import { Code, Plug, Wrench, Lightbulb } from "lucide-react";

import { Service } from "@/types/services";

export const services: Service[] = [
  {
    id: "aplicacoes-web",
    title: "Aplicações Web Sob Medida",
    description:
      "Sistemas web focados em processos específicos do seu negócio, como painéis administrativos, dashboards, portais e plataformas customizadas.",
    features: [
      "Desenvolvimento de sistemas internos",
      "Painéis administrativos e dashboards",
      "Portais corporativos",
      "Plataformas SaaS",
      "Aplicações responsivas e modernas",
    ],
    icon: <Code className="h-5 w-5 text-green-500" />,
  },
  {
    id: "apis-integracoes",
    title: "APIs e Integrações",
    description:
      "Integração entre sistemas, gateways de pagamento, CRMs, ERPs e serviços de terceiros para automatizar processos e conectar suas ferramentas.",
    features: [
      "Desenvolvimento de APIs RESTful",
      "Integração com serviços externos",
      "Gateways de pagamento (Stripe, Mercado Pago, etc.)",
      "Integração com CRMs e ERPs",
      "Automação de processos",
    ],
    icon: <Plug className="h-5 w-5 text-green-500" />,
  },
  {
    id: "melhoria-sistemas",
    title: "Melhoria de Sistemas Existentes",
    description:
      "Refatoração, redução de bugs, otimização de performance, organização de código e melhoria de arquitetura em sistemas legados.",
    features: [
      "Refatoração de código legado",
      "Otimização de performance",
      "Correção de bugs e vulnerabilidades",
      "Melhoria de arquitetura",
      "Implementação de testes automatizados",
    ],
    icon: <Wrench className="h-5 w-5 text-green-500" />,
  },
  {
    id: "consultoria-tecnica",
    title: "Consultoria Técnica",
    description:
      "Análise da sua solução atual e recomendações práticas de evolução, escolha de tecnologias e definição de arquitetura.",
    features: [
      "Análise de arquitetura atual",
      "Recomendações de melhorias",
      "Escolha de tecnologias adequadas",
      "Definição de roadmap técnico",
      "Code review e boas práticas",
    ],
    icon: <Lightbulb className="h-5 w-5 text-green-500" />,
  },
];

export const servicePackages = [
  {
    title: "Desenvolvimento de Produto Completo",
    description:
      "Ideal para quem precisa construir uma solução do zero, desde o planejamento até a entrega final.",
  },
  {
    title: "Desenvolvimento Pontual (Features)",
    description:
      "Perfeito para adicionar novas funcionalidades em sistemas existentes ou desenvolver módulos específicos.",
  },
  {
    title: "Manutenção e Melhorias",
    description:
      "Para quem já tem um sistema e precisa de suporte contínuo, correções e evoluções incrementais.",
  },
  {
    title: "Consultoria por Hora",
    description:
      "Sessões de consultoria para análise técnica, code review, definição de arquitetura ou orientação estratégica.",
  },
];
