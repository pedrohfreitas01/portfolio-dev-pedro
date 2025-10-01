import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ProjectCarousel from "./ProjectCarousel";

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Plataforma de análise de dados em tempo real com visualizações interativas e insights automatizados.",
    image: project1,
    stacks: ["React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/exemplo",
  },
  {
    title: "E-commerce Moderno",
    description: "Loja online completa com carrinho de compras, pagamentos integrados e painel administrativo.",
    image: project2,
    stacks: ["Next.js", "Node.js", "Stripe"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/exemplo",
  },
  {
    title: "App de Comunicação",
    description: "Aplicativo de mensagens em tempo real com suporte a grupos, mídia e notificações push.",
    image: project3,
    stacks: ["React Native", "Socket.io", "MongoDB"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/exemplo",
  },
  {
    title: "Sistema de Gestão",
    description: "Sistema completo de gestão empresarial com controle de estoque, vendas e relatórios.",
    image: project1,
    stacks: ["React", "Node.js", "MySQL"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/exemplo",
  },
  {
    title: "Portfolio Interativo",
    description: "Portfolio moderno com animações 3D, transições suaves e design responsivo.",
    image: project2,
    stacks: ["React", "Three.js", "Tailwind"],
    liveUrl: "https://exemplo.com",
    githubUrl: "https://github.com/exemplo",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Projetos
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns dos meus trabalhos recentes
          </p>
        </div>

        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
