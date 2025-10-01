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
    const isMobile = window.innerWidth < 768;
    
    if (position === 0) {
      // Center card - main focus
      return {
        transform: isMobile 
          ? "translateX(0%) scale(1) translateY(0px)"
          : "translateX(0%) scale(1.15) translateY(-20px)",
        zIndex: 50,
        opacity: 1,
        filter: "brightness(1.2)",
      };
    } else if (position === 1 || position === projects.length - 1) {
      // Adjacent cards
      const direction = position === 1 ? 1 : -1;
      return {
        transform: isMobile
          ? `translateX(${direction * 100}%) scale(0.75) translateY(5px)`
          : `translateX(${direction * 80}%) scale(0.85) translateY(10px) rotateY(${-direction * 15}deg)`,
        zIndex: 30,
        opacity: isMobile ? 0.5 : 0.7,
      };
    } else if (position === 2 || position === projects.length - 2) {
      // Far cards
      const direction = position === 2 ? 1 : -1;
      return {
        transform: isMobile
          ? `translateX(${direction * 100}%) scale(0.5)`
          : `translateX(${direction * 140}%) scale(0.65) translateY(20px) rotateY(${-direction * 25}deg)`,
        zIndex: 10,
        opacity: isMobile ? 0 : 0.4,
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
    <div className="relative w-full max-w-6xl mx-auto px-2 md:px-4">
      {/* Carousel container */}
      <div className="relative h-[500px] md:h-[600px] flex items-center justify-center" style={{ perspective: window.innerWidth < 768 ? "1000px" : "2000px" }}>
        {projects.map((project, index) => {
          const style = getCardStyle(index);
          
          return (
            <div
              key={index}
              className="absolute w-full max-w-[280px] sm:max-w-sm md:max-w-md transition-all duration-700 ease-out"
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
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-base md:text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-xs md:text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 p-4 md:p-6 pt-0 md:pt-0 flex-col sm:flex-row">
                  <Button variant="default" size="sm" className="flex-1 w-full sm:w-auto text-xs md:text-sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span className="hidden sm:inline">Ver Projeto</span>
                      <span className="sm:hidden">Projeto</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 w-full sm:w-auto text-xs md:text-sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span className="hidden sm:inline">Ver Código</span>
                      <span className="sm:hidden">Código</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 sm:px-4 pointer-events-none">
        <Button
          variant="hero"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto rounded-full w-10 h-10 md:w-14 md:h-14 shadow-xl"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </Button>
        <Button
          variant="hero"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto rounded-full w-10 h-10 md:w-14 md:h-14 shadow-xl"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6 md:w-8"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;