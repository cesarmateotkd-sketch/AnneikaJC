import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Showreel from "@/components/Showreel";
import Coaching from "@/components/Coaching";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Showreel />
        <Coaching />
        <Contact />
      </main>
    </>
  );
}
