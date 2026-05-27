import { Bot } from "lucide-react";
import { useLocation } from "react-router-dom";

const markdownPathFor = (pathname: string): string => {
  if (pathname === "/" || pathname === "") return "/index.md";
  if (pathname === "/projects") return "/projects.md";
  if (pathname === "/blog") return "/blog.md";
  if (pathname.startsWith("/blog/")) return `${pathname.replace(/\/$/, "")}.md`;
  return "/llms.txt";
};

const AgentLink = () => {
  const { pathname } = useLocation();
  const href = markdownPathFor(pathname);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title="View this page as Markdown (for LLMs and agents)"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-2 font-mono text-xs text-muted-foreground shadow-md backdrop-blur transition-colors hover:bg-muted hover:text-foreground"
    >
      <Bot className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Are you an agent?</span>
      <span className="sm:hidden">.md</span>
    </a>
  );
};

export default AgentLink;
