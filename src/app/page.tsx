import { EntryScreen } from "@/components/home/EntryScreen";
import { Marquee } from "@/components/home/Marquee";
import { Statement } from "@/components/home/Statement";
import { FAQ } from "@/components/home/FAQ";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <EntryScreen />
      <Marquee />
      <Statement />
      <ProjectsCarousel />
      <FAQ />
    </main>
  );
}
