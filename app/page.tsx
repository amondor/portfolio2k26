import { Hero } from "@/components/Hero";
import { AboutMeSection } from "@/components/AboutMeSection";
import { ProjectsGrid } from "@/components/ProjectsGrid";
// import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMeSection />
      <ProjectsGrid />
      {/* <TestimonialsSection /> */}
    </>
  );
}
