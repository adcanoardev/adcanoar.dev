"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DotsNav from "@/components/navigation/DotsNav";

const AppShell = ({ children }: { children: React.ReactNode }) => {
    const [activeId, setActiveId] = useState<string>("home");
    const [lockedId, setLockedId] = useState<string | null>(null);

    const navigate = (id: string) => {
        setLockedId(id);
        // NO marcamos activeId aquí; dejamos que se marque cuando llegue
    };

    return (
        <>
            <Header activeId={activeId} onNavigate={navigate} />
            <DotsNav activeId={activeId} setActiveId={setActiveId} lockedId={lockedId} setLockedId={setLockedId} />
            {children}
            <Footer />
        </>
    );
};

export default AppShell;
