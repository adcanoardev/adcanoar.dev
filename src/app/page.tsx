import Container from "@/components/layout/Container";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Container>
          <About />
          <Skills />
          <Projects />
      </Container>
    </main>
  );
};