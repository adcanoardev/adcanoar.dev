import Section from "@/components/ui/Section";

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-6 md:grid-cols-3">
                {/* Card 1 */}
                <article className="rounded-xl border border-zinc-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-zinc-900">Project One</h3>
                    <p className="mt-2 text-sm text-zinc-600">One-liner: problem → solution in a single sentence.</p>

                    <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-700">
                        <li className="rounded-full border border-zinc-200 px-2 py-1">React</li>
                        <li className="rounded-full border border-zinc-200 px-2 py-1">Node.js</li>
                        <li className="rounded-full border border-zinc-200 px-2 py-1">MongoDB</li>
                    </ul>

                    <div className="mt-5 flex gap-4 text-sm">
                        <a className="font-medium text-zinc-900 underline" href="#">
                            Repo
                        </a>
                        <a className="font-medium text-zinc-900 underline" href="#">
                            Live
                        </a>
                    </div>
                </article>

                {/* Card 2 */}
                <article className="rounded-xl border border-zinc-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-zinc-900">Project Two</h3>
                    <p className="mt-2 text-sm text-zinc-600">One-liner: problem → solution in a single sentence.</p>

                    <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-700">
                        <li className="rounded-full border border-zinc-200 px-2 py-1">Next.js</li>
                        <li className="rounded-full border border-zinc-200 px-2 py-1">TypeScript</li>
                        <li className="rounded-full border border-zinc-200 px-2 py-1">Tailwind</li>
                    </ul>

                    <div className="mt-5 flex gap-4 text-sm">
                        <a className="font-medium text-zinc-900 underline" href="#">
                            Repo
                        </a>
                        <a className="font-medium text-zinc-900 underline" href="#">
                            Live
                        </a>
                    </div>
                </article>

                {/* Card 3 */}
                <article className="rounded-xl border border-zinc-200 bg-white p-5">
                    <h3 className="text-base font-semibold text-zinc-900">Project Three</h3>
                    <p className="mt-2 text-sm text-zinc-600">One-liner: problem → solution in a single sentence.</p>

                    <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-700">
                        <li className="rounded-full border border-zinc-200 px-2 py-1">Angular</li>
                        <li className="rounded-full border border-zinc-200 px-2 py-1">MySQL</li>
                        <li className="rounded-full border border-zinc-200 px-2 py-1">Docker</li>
                    </ul>

                    <div className="mt-5 flex gap-4 text-sm">
                        <a className="font-medium text-zinc-900 underline" href="#">
                            Repo
                        </a>
                        <a className="font-medium text-zinc-900 underline" href="#">
                            Live
                        </a>
                    </div>
                </article>
            </div>
        </Section>
    );
};

export default Projects;
