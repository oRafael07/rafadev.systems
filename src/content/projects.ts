import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "gestao-clinica-saude",
    title: "Plataforma de Gestão para Clínica de Saúde",
    clientType: "Pequena Empresa",
    sector: "Saúde",
    challenge:
      "A clínica utilizava planilhas e WhatsApp para marcar consultas, gerando erros frequentes, perda de dados e dificuldade no controle de atendimentos.",
    solution:
      "Desenvolvi um sistema web completo com cadastro de pacientes, agenda integrada, controle de atendimentos e histórico médico centralizado.",
    result:
      "Redução de 70% do tempo gasto com marcações, centralização das informações e eliminação de erros operacionais no agendamento.",
    stacks: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    id: "sistema-logistica",
    title: "Sistema de Rastreamento para Empresa de Logística",
    clientType: "Média Empresa",
    sector: "Logística",
    challenge:
      "Falta de visibilidade em tempo real sobre a localização de entregas e dificuldade na comunicação entre motoristas e central.",
    solution:
      "Implementei uma plataforma web com rastreamento GPS, notificações automáticas e painel de controle para gestores acompanharem todas as entregas.",
    result:
      "Aumento de 45% na eficiência operacional, redução de reclamações de clientes e melhor aproveitamento da frota.",
    stacks: ["NestJS", "Next.js", "MongoDB", "WebSockets"],
  },
  {
    id: "plataforma-educacao",
    title: "Plataforma de Cursos Online para Startup de Educação",
    clientType: "Startup",
    sector: "Educação",
    challenge:
      "Necessidade de criar um MVP rápido para validar o modelo de negócio com funcionalidades de vídeo-aulas, exercícios e certificados.",
    solution:
      "Desenvolvi uma plataforma completa com sistema de autenticação, player de vídeo integrado, sistema de progresso e emissão automática de certificados.",
    result:
      "MVP lançado em 8 semanas, captação de 500+ alunos nos primeiros 3 meses e validação do modelo de negócio.",
    stacks: ["Node.js", "React", "PostgreSQL", "AWS S3"],
  },
];
