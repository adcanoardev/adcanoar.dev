import Container from "@/components/layout/Container";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import HomeSection from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
        <main>
            <HomeSection />
            <Container>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </Container>
        </main>
    );
}
