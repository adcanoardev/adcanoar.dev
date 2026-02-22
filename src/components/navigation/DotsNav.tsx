"use client";

import { sections } from "@/lib/sections";
import { useEffect, useState } from "react";

const DotsNav = () => {
    const [activeId, setActiveId] = useState<string>("hero");

    useEffect(() => {
        const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Nos quedamos con la entrada más visible
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (!visible?.target) return;

                const id = (visible.target as HTMLElement).id;
                if (!id) return;

                setActiveId(id);

                if (window.location.hash !== `#${id}`) {
                    window.history.replaceState(null, "", `#${id}`);
                }
            },

            {
                root: null,
                // Cuando la sección ocupa ~la mitad de la pantalla, la consideramos "activa"
                threshold: [0.5, 0.6, 0.7],
            },
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
            <nav aria-label="Section navigation">
                <ul className="flex flex-col gap-3">
                    {sections.map((section) => {
                        const isActive = section.id === activeId;

                        return (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    aria-label={section.label}
                                    className={`block rounded-full transition-all ${
                                        isActive ? "h-3 w-3 bg-zinc-900" : "h-2 w-2 bg-zinc-400"
                                    }`}
                                    onClick={() => setActiveId(section.id)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default DotsNav;
