import { Navbar } from "@/components/navbar"
import { ProjectSection } from "@/components/project-section";
import { SectionSkills } from "@/components/section-skills";
import { TopHome } from "@/components/top-home";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TopHome />
      <div className="border-t-[1px] border-lime-300 opacity-25 px-2" />
      <SectionSkills />
      <div className="border-t-[1px] border-lime-300 opacity-25 px-2" />
      <ProjectSection />
    </main>
  );
}
