import { Code, Layout, Database, Server, Cloud, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Websites e Aplicativos",
    description: "Desenvolvimento de interfaces modernas e responsivas",
  },
  {
    icon: Layout,
    title: "Desenvolvimento de Interfaces",
    description: "UI/UX design com foco em experiência do usuário",
  },
  {
    icon: Database,
    title: "API e Banco de Dados",
    description: "Arquitetura de dados escalável e segura",
  },
  {
    icon: Server,
    title: "Criação de Serviços",
    description: "Microsserviços e APIs RESTful robustas",
  },
  {
    icon: Cloud,
    title: "Gestão de Infraestrutura",
    description: "Deploy, monitoramento e otimização",
  },
  {
    icon: Settings,
    title: "Configuração e Manutenção",
    description: "Suporte técnico e atualizações contínuas",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            O que eu faço
          </h2>
          <p className="text-muted-foreground text-lg">
            Serviços especializados em desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
