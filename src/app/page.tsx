import Container from "@/components/layout/Container";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Container>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
      </Container>
    </main>
  );
};