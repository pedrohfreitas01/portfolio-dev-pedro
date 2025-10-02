import reactIcon from "@/assets/icons/react.svg";
import nodejsIcon from "@/assets/icons/nodejs.svg";
import postgresqlIcon from "@/assets/icons/postgresql.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import restApiIcon from "@/assets/icons/rest-api.png";
// import jsIcon from "@/assets/icons/JavaScript-logo.png";
import cypressIcon from "@/assets/icons/cypress-svgrepo-com.svg";
import tailwindIcon from "@/assets/icons/tailwind_CSS_Logo.svg";
import css3Icon from "@/assets/icons/css3_logo_and_wordmark.svg";
import htmlIcon from "@/assets/icons/html5_logo_and_wordmark.svg";
import gitIcon from "@/assets/icons/git_icon.svg";
import pythonIcon from "@/assets/icons/python-logo-notext.svg";



const stacks = [
  // { name: "Js", icon: jsIcon },
  { name: "Html", icon: htmlIcon },
  { name: "Css", icon: css3Icon },
  { name: "Git", icon: gitIcon },

  { name: "React", icon: reactIcon },

  { name: "Node.js", icon: nodejsIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "python", icon: pythonIcon },

  { name: "TypeScript", icon: typescriptIcon },
  { name: "APIs Rest", icon: restApiIcon },
  { name: "Cypress", icon: cypressIcon },
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
              <div className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12">
                <img src={stack.icon} alt={stack.name} className="w-full h-full object-contain" />
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
