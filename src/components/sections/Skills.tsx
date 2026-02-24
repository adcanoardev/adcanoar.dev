import Section from "@/components/ui/Section";

const Skills = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="grid gap-10 md:grid-cols-3">
                <div>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-900">Frontend</h3>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                        <li>React</li>
                        <li>Angular</li>
                        <li>TypeScript</li>
                        <li>JavaScript (ES6+)</li>
                        <li>HTML5 / CSS3</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-900">Backend</h3>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-semibold tracking-wide text-zinc-900">Data & Ops</h3>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Linux (Admin)</li>
                        <li>vSphere</li>
                        <li>CI/CD</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
