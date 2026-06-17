import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://meetsonawane.vercel.app";

interface ProjectEntry {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  live: string;
  year: string;
  featured: boolean;
}

function renderProjectsMarkdown(projects: ProjectEntry[]): string {
  const byYear = [...projects].sort((a, b) => b.year.localeCompare(a.year));
  const body = byYear
    .map((p) => {
      const lines = [
        `## ${p.title} (${p.year})`,
        ``,
        p.description,
        ``,
        `- Stack: ${p.tech.join(", ")}`,
        `- GitHub: ${p.github}`,
      ];
      if (p.live && p.live !== p.github) lines.push(`- Live: ${p.live}`);
      return lines.join("\n");
    })
    .join("\n\n");
  return `# Projects\n\n${body}\n`;
}

function llmRoutesPlugin(): Plugin {
  const blogsDir = path.resolve(__dirname, "src/content/blogs");
  const llmDir = path.resolve(__dirname, "src/content/llm");
  const projectsFile = path.resolve(__dirname, "src/content/projects.json");

  const readDirSafe = (dir: string) => {
    try { return readdirSync(dir); } catch { return []; }
  };

  return {
    name: "llm-routes",
    generateBundle() {
      const blogFiles = readDirSafe(blogsDir).filter((f) => f.endsWith(".md"));
      const blogEntries = blogFiles.map((file) => {
        const raw = readFileSync(path.join(blogsDir, file), "utf8");
        const { data } = matter(raw);
        const slug = file.replace(/\.md$/, "");
        return { slug, raw, data: data as Record<string, unknown> };
      });

      for (const { slug, raw } of blogEntries) {
        this.emitFile({ type: "asset", fileName: `blog/${slug}.md`, source: raw });
      }

      const blogIndex =
        "# Blog\n\n" +
        blogEntries
          .sort((a, b) => String(b.data.date ?? "").localeCompare(String(a.data.date ?? "")))
          .map(({ slug, data }) => {
            const title = data.title ?? slug;
            const desc = data.description ? ` — ${data.description}` : "";
            return `- [${title}](/blog/${slug}.md)${desc}`;
          })
          .join("\n") + "\n";
      this.emitFile({ type: "asset", fileName: "blog.md", source: blogIndex });

      const projects: ProjectEntry[] = JSON.parse(readFileSync(projectsFile, "utf8"));
      this.emitFile({
        type: "asset",
        fileName: "projects.md",
        source: renderProjectsMarkdown(projects),
      });

      for (const file of readDirSafe(llmDir).filter((f) => f.endsWith(".md"))) {
        const raw = readFileSync(path.join(llmDir, file), "utf8");
        this.emitFile({ type: "asset", fileName: file, source: raw });
      }

      const llmsTxt =
        `# Meet Sonawane\n\n` +
        `> Full Stack Software Engineer. Portfolio, projects, and notes in markdown for LLMs.\n\n` +
        `## Pages\n\n` +
        `- [About](${SITE_URL}/index.md): Overview, focus areas, links\n` +
        `- [Projects](${SITE_URL}/projects.md): All projects with stack and links\n` +
        `- [Blog index](${SITE_URL}/blog.md): All posts\n\n` +
        `## Posts\n\n` +
        blogEntries
          .map(({ slug, data }) => {
            const title = data.title ?? slug;
            const desc = data.description ? `: ${data.description}` : "";
            return `- [${title}](${SITE_URL}/blog/${slug}.md)${desc}`;
          })
          .join("\n") + "\n";
      this.emitFile({ type: "asset", fileName: "llms.txt", source: llmsTxt });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    llmRoutesPlugin(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("framer-motion")) return "framer";
            if (id.includes("react-router")) return "router";
            if (id.includes("react-syntax-highlighter") || id.includes("refractor")) return "syntax";
          }
        },
      },
    },
  },
}));
