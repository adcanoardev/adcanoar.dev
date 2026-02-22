import Container from "@/components/layout/Container";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center">
            <Container>
                <h1 className="text-4xl font-semibold tracking-tight">Full Stack Developer with Systems Background</h1>

                <p className="mt-4 max-w-2xl text-lg text-zinc-600">
                    I build fast, production-minded web apps with clean UX and solid engineering.
                </p>

                <div className="mt-8 flex gap-4">
                    <a href="#projects" className="rounded-md px-4 py-2 text-sm font-medium">
                        View Projects
                    </a>
                    <a href="#contact" className="rounded-md px-4 py-2 text-sm font-medium">
                        Contact
                    </a>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
