import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Gostou do meu trabalho?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Entre em contato ou acompanhe as minhas redes sociais!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 card-glow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 card-glow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium">GitHub</span>
              </div>
            </a>

            <a
              href="mailto:seuemail@exemplo.com"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 card-glow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium">E-mail</span>
              </div>
            </a>

            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110 card-glow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <span className="font-medium">Currículo</span>
              </div>
            </a>
          </div>

          <div className="mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:seuemail@exemplo.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
