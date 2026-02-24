import Image from "next/image";
import Container from "@/components/layout/Container";

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center">
            <Container className="py-24">
                <div
                    className="rounded-2xl border p-8 md:p-10"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                    <div className="grid gap-10 items-center md:grid-cols-[1fr_auto]">
                        <div>
                            <h1 className="text-5xl font-semibold tracking-tight">
                                Full Stack Developer with Systems Background
                            </h1>

                            <p className="mt-5 max-w-2xl text-lg text-[color:var(--muted)]">
                                I build fast, production-minded web apps with clean UX and solid engineering.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                {/* Primary */}
                                <a
                                    href="#projects"
                                    className="rounded-xl px-5 py-3 text-sm font-semibold transition border hover:opacity-95 focus:outline-none focus-visible:ring-2 glow-accent"
                                    style={{
                                        background: "var(--accent)",
                                        color: "#0a0015",
                                        borderColor: "rgba(255,255,255,0.10)",
                                    }}
                                >
                                    View Projects
                                </a>

                                {/* Secondary */}
                                <a
                                    href="#contact"
                                    className="rounded-xl px-5 py-3 text-sm font-semibold transition border focus:outline-none focus-visible:ring-2 glow-accent-soft hover:border-[color:var(--accent)]"
                                    style={{
                                        borderColor: "rgba(34,203,204,0.55)",
                                        color: "var(--foreground)",
                                        background: "transparent",
                                    }}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className="justify-self-center md:justify-self-end">
                            <div className="rounded-full border-5 p-2 glow-accent-soft border-[color:var(--accent)]">
                                <Image
                                    src="https://media.licdn.com/dms/image/v2/D4D03AQESez48T3lw6Q/profile-displayphoto-shrink_200_200/B4DZcEFA08G8AY-/0/1748120112781?e=1773273600&v=beta&t=sKpRr_ucWFSItdRzl0oJ04bgWPhdl210OyqSPd__n_o"
                                    alt="Adrián profile photo"
                                    width={176}
                                    height={176}
                                    className="rounded-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Home;
