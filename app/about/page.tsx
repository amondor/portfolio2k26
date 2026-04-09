import { AboutHero } from "@/components/AboutHero";
import { CareerHistorySection } from "@/components/CareerHistorySection";
import { SkillsSection } from "@/components/SkillsSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutCTASection } from "@/components/AboutCTASection";

export const metadata = {
  title: "About | Portfolio",
  description: "Visual designer qui crée des expériences digitales qui génèrent une vraie croissance.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CareerHistorySection />
      <SkillsSection />
      {/* <TestimonialsSection /> */}
      <AboutCTASection />
    </>
  );
}
