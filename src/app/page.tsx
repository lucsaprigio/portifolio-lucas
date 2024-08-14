import { Footer } from "@/components/footer";
import { FooterSection } from "@/components/footer-section";
import { ProjectSection } from "@/components/project-section";
import { SectionSkills } from "@/components/section-skills";
import { TopHome } from "@/components/top-home";

export default function Home() {
  return (
    <main>
      <TopHome />
      <div className="border-t-[1px] border-lime-300 opacity-25 px-2" />
      <SectionSkills />
      <div className="border-t-[1px] border-lime-300 opacity-25 px-2" />
      <ProjectSection />
      <FooterSection />
      <Footer />
    </main>
  );
}
