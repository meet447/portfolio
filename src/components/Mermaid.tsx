import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const Mermaid = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid.initialize({
            startOnLoad: false,
            theme: "base",
            themeVariables: {
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
            },
            securityLevel: "loose",
        });
    }, []);

    useEffect(() => {
        if (ref.current && chart) {
            const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
            mermaid.render(id, chart)
                .then(({ svg }) => {
                    if (ref.current) {
                        ref.current.innerHTML = svg;
                    }
                })
                .catch((error) => {
                    console.error("Mermaid error:", error);
                    if (ref.current) {
                        ref.current.innerHTML = `<p class="text-red-500 text-sm">Failed to render diagram.</p>`;
                    }
                });
        }
    }, [chart]);

    return <div ref={ref} className="mermaid-chart flex justify-center my-8 bg-muted/20 p-6 rounded-lg overflow-x-auto" />;
};

export default Mermaid;
