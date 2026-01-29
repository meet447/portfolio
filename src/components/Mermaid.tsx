import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

const Mermaid = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const isDark = resolvedTheme === "dark";
        mermaid.initialize({
            startOnLoad: false,
            theme: isDark ? "dark" : "default",
            themeVariables: {
                fontFamily: "JetBrains Mono",
                fontSize: "14px",
                primaryColor: isDark ? "#3b82f6" : "#2563eb",
                primaryTextColor: isDark ? "#f8fafc" : "#1e293b",
                primaryBorderColor: isDark ? "#3b82f6" : "#2563eb",
                lineColor: isDark ? "#94a3b8" : "#475569",
                secondaryColor: isDark ? "#1e293b" : "#f1f5f9",
                tertiaryColor: isDark ? "#0f172a" : "#f8fafc",
            },
            securityLevel: "loose",
        });

        if (ref.current && chart) {
            const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
            ref.current.innerHTML = ""; // Clear existing content
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
    }, [chart, resolvedTheme]);

    return <div ref={ref} className="mermaid-chart flex justify-center my-8 bg-muted/20 p-6 rounded-lg overflow-x-auto" />;
};

export default Mermaid;
