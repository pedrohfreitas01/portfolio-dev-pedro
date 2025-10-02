import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import CyberParticles from "./CyberParticles";
import perfilPedro from "@/assets/perfilPedro.jpeg"

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      <CyberParticles />

      <div className="container mx-auto relative z-10 animate-fade-in-up">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500 animate-glow-pulse" />
            <img
              src={perfilPedro}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-primary/50 object-cover relative z-10 shadow-2xl"
            />
          </div>

          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Pedro Café
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Desenvolvedor de Software | FullStack
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              Ver Projetos
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/pedrohfreitas01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:pedrofreitas_ph@hotmail.com"
              className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="/src/assets/Curriculo_Pedro_Cafe.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-primary/30 hover:border-primary hover:scale-110 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
