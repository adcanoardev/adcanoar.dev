import Container from "@/components/layout/Container";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur">
            <Container>
                <nav>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
