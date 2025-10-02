import project1 from "@/assets/projectBackground/project1.png"
import project2 from "@/assets/projectBackground/project2.png"
import project3 from "@/assets/projectBackground/project3.png"
import project4 from "@/assets/projectBackground/project4.png"


import ProjectCarousel from "./ProjectCarousel";

const projects = [
  {
    title: "Letreco",
    description:
      "Jogo da forca com palavras do mundo Dev, para aprender e se divertir.",
    image: project1,
    stacks: ["React", "TypeScript", "Css Modules", "Hooks"],
    liveUrl: "https://letreco-beta.vercel.app/",
    githubUrl: "https://github.com/pedrohfreitas01/Letreco",
  },
  {
    title: "PomoFocus",
    description:
      "SPA de Timer de Pomodoro com ciclos, formulários validados e estado global.",
    image: project2,
    stacks: ["React", "TypeScript", "Hooks", "StyledComponent"],
    liveUrl: "https://pomo-focus-silk.vercel.app/",
    githubUrl: "https://github.com/pedrohfreitas01/PomoFocus",
  },
  {
    title: "Linkooffe",
    description:
      "Aplicativo de mensagens em tempo real com suporte a grupos, mídia e notificações push.",
    image: project3,
    stacks: ["React", "Tailwind", "Firebase", "JavaScript"],
    liveUrl: "https://link-tree-react-js.vercel.app/",
    githubUrl: "https://github.com/pedrohfreitas01/linkTree-ReactJS",
  },
  {
    title: "Refund - Gestão de Reembolso",
    description:
      "Aplicação fullstack para controle e solicitação de reembolsos..",
    image: project4,
    stacks: ["React", "Node.js", "SQLite", "TypeScript"],
    liveUrl: "https://refund-project-zeta.vercel.app/",
    githubUrl: "https://github.com/pedrohfreitas01/Refund2.0",
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
