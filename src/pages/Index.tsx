import HeroSection from "@/components/HeroSection";
import StacksSection from "@/components/StacksSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StacksSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Portfolio. Desenvolvido com ❤️</p>
      </footer>
    </main>
  );
};

export default Index;
