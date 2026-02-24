import Section from "@/components/ui/Section";

type Project = {
    title: string;
    summary: string;
    stack: string[];
    repoHref?: string;
    liveHref?: string;
};

const PROJECTS: Project[] = [
    {
        title: "e-load",
        summary: "Refactor bootcamp app into a production-minded full stack project.",
        stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
        repoHref: "#",
        liveHref: "#",
    },
    {
        title: "Project Two",
        summary: "One-liner: problem → solution in a single sentence.",
        stack: ["React", "TypeScript", "MySQL"],
        repoHref: "#",
        liveHref: "#",
    },
    {
        title: "Project Three",
        summary: "One-liner: problem → solution in a single sentence.",
        stack: ["Angular", "Node.js", "Docker"],
        repoHref: "#",
        liveHref: "#",
    },
];

const tagClass = "rounded-full border px-2 py-1 text-xs text-[color:var(--muted)]";

const cardClass = "rounded-2xl border p-5 transition-all glow-accent-soft hover:border-[color:var(--accent)]";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <article className={cardClass} style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h3 className="text-base font-semibold text-[color:var(--foreground)]">{project.title}</h3>

            <p className="mt-2 text-sm text-[color:var(--muted)]">{project.summary}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                    <li key={t} className={tagClass} style={{ borderColor: "var(--border)" }}>
                        {t}
                    </li>
                ))}
            </ul>

            <div className="mt-5 flex gap-4 text-sm">
                <a
                    className="font-medium text-[color:var(--foreground)] underline decoration-transparent hover:decoration-[color:var(--accent)] transition"
                    href={project.repoHref ?? "#"}
                >
                    Repo
                </a>
                <a
                    className="font-medium text-[color:var(--foreground)] underline decoration-transparent hover:decoration-[color:var(--accent)] transition"
                    href={project.liveHref ?? "#"}
                >
                    Live
                </a>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-6 md:grid-cols-3">
                {PROJECTS.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
