import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Ver Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
