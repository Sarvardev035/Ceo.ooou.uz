import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Bahola from "@/components/Bahola";
import Voxly from "@/components/Voxly";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PointerFx } from "@/components/Motion";

export default function Home() {
  return (
    <>
      <PointerFx />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Bahola />
        <Voxly />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
