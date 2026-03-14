import { Hero } from "@/components/Hero";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMeSection />
      <ProjectsGrid />
      <TestimonialsSection />
      <ExperienceSection />
    </>
  );
}
