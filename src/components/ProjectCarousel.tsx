import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  stacks: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCardStyle = (index: number) => {
    const position = (index - currentIndex + projects.length) % projects.length;
    
    if (position === 0) {
      // Center card - main focus
      return {
        transform: "translateX(0%) scale(1.15) translateY(-20px)",
        zIndex: 50,
        opacity: 1,
        filter: "brightness(1.2)",
      };
    } else if (position === 1 || position === projects.length - 1) {
      // Adjacent cards
      const direction = position === 1 ? 1 : -1;
      return {
        transform: `translateX(${direction * 80}%) scale(0.85) translateY(10px) rotateY(${-direction * 15}deg)`,
        zIndex: 30,
        opacity: 0.7,
      };
    } else if (position === 2 || position === projects.length - 2) {
      // Far cards
      const direction = position === 2 ? 1 : -1;
      return {
        transform: `translateX(${direction * 140}%) scale(0.65) translateY(20px) rotateY(${-direction * 25}deg)`,
        zIndex: 10,
        opacity: 0.4,
      };
    } else {
      // Hidden cards
      return {
        transform: "translateX(0%) scale(0.5)",
        zIndex: 0,
        opacity: 0,
      };
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Carousel container */}
      <div className="relative h-[600px] flex items-center justify-center" style={{ perspective: "2000px" }}>
        {projects.map((project, index) => {
          const style = getCardStyle(index);
          
          return (
            <div
              key={index}
              className="absolute w-full max-w-md transition-all duration-700 ease-out"
              style={{
                ...style,
                transformStyle: "preserve-3d",
              }}
            >
              <Card className="overflow-hidden group h-full">
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
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
        <Button
          variant="hero"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto rounded-full w-14 h-14 shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="hero"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto rounded-full w-14 h-14 shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-8"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;