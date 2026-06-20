import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { ProjectSection } from "@/components/project-section";
import { SectionSkills } from "@/components/section-skills";
import { TopHome } from "@/components/top-home";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <TopHome />
      <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-lime-300/30 to-transparent" />
      <SectionSkills />
      <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-lime-300/30 to-transparent" />
      <ProjectSection />
      <Footer />
    </main>
  );
}
