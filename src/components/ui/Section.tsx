type SectionProps = {
    id?: string;
    title: string;
    children: React.ReactNode;
};

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <section id={id} className="scroll-mt-24 min-h-screen">
            <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
                <div className="lg:col-span-8">{children}</div>
            </div>
        </section>
    );
};

export default Section;
