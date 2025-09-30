import { Code2, Database, Container, Cpu, Globe, Server } from "lucide-react";

const stacks = [
  { name: "React", icon: Globe, color: "text-blue-400" },
  { name: "Node.js", icon: Server, color: "text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
  { name: "Docker", icon: Container, color: "text-blue-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-600" },
  { name: "APIs Rest", icon: Cpu, color: "text-cyan-400" },
];

const StacksSection = () => {
  return (
    <section id="stacks" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Tecnologias
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas e tecnologias que domino
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 animate-fade-in-up">
          {stacks.map((stack, index) => (
            <div
              key={stack.name}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${stack.color} transition-transform duration-300 group-hover:rotate-12`}>
                <stack.icon className="w-12 h-12" />
              </div>
              <span className="text-sm font-medium">{stack.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StacksSection;
