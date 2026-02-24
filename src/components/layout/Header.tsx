import Container from "@/components/layout/Container";
import { sections } from "@/lib/sections";

type HeaderProps = {
    activeId: string;
    onNavigate: (id: string) => void;
};

const Header = ({ activeId, onNavigate }: HeaderProps) => {
    return (
        <header
            className="sticky top-0 z-50 border-b"
            style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                backdropFilter: "blur(10px)",
            }}
        >
            <Container>
                <nav className="flex items-center justify-between py-4">
                    <a
                        href="#home"
                        onClick={() => onNavigate("home")}
                        className="font-medium text-xl rounded focus:outline-none focus-visible:ring-2"
                        style={{
                            color: "var(--foreground)",
                            outlineColor: "var(--accent)",
                        }}
                    >
                        Adrián
                        <span style={{ color: "var(--accent)" }} className="text-xs">
                            .dev
                        </span>
                    </a>

                    <div className="flex gap-6">
                        {sections
                            .filter((s) => s.id !== "hero")
                            .map((s) => {
                                const isActive = s.id === activeId;

                                return (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        onClick={() => onNavigate(s.id)}
                                        className="text-sm rounded transition-colors pb-1 border-b-2 focus:outline-none focus-visible:ring-2"
                                        style={{
                                            color: isActive ? "var(--accent)" : "var(--muted)",
                                            borderColor: isActive ? "var(--accent)" : "transparent",
                                            outlineColor: "var(--accent)",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) e.currentTarget.style.color = "var(--accent)";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) e.currentTarget.style.color = "var(--muted)";
                                        }}
                                    >
                                        {s.label}
                                    </a>
                                );
                            })}
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;
