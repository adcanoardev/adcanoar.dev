"use client";

import { sections } from "@/lib/sections";
import { useEffect } from "react";

type DotsNavProps = {
    activeId: string;
    setActiveId: (id: string) => void;
    lockedId: string | null;
    setLockedId: (id: string | null) => void;
};

const DotsNav = ({ activeId, setActiveId, lockedId, setLockedId }: DotsNavProps) => {
    useEffect(() => {
        const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

        if (elements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (!visible?.target) return;

                const id = (visible.target as HTMLElement).id;
                if (!id) return;

                // ✅ LOCK: si estamos navegando, solo actualiza cuando llegamos al destino
                if (lockedId) {
                    if (id === lockedId) {
                        setActiveId(id);
                        setLockedId(null); // unlock
                    }
                    return;
                }

                // ✅ Scroll normal
                setActiveId(id);

                // ✅ URL: limpia en home, hash en el resto
                if (id === "home") {
                    if (window.location.hash) {
                        window.history.replaceState(null, "", window.location.pathname);
                    }
                } else if (window.location.hash !== `#${id}`) {
                    window.history.replaceState(null, "", `#${id}`);
                }
            },
            { root: null, threshold: [0.5, 0.6, 0.7] },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [lockedId, setActiveId, setLockedId]);

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
                                    onClick={() => setLockedId(section.id)} // ✅ lock navigation
                                    className={`block rounded-full transition-all ${
                                        isActive
                                            ? "h-3 w-3 bg-[color:var(--accent)]"
                                            : "h-2 w-2 bg-[color:var(--muted)]"
                                    }`}
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
