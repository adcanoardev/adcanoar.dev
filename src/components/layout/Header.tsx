import Container from "@/components/layout/Container";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
            <Container>
                <nav className="flex gap-6 py-4 text-sm">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
