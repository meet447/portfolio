import { lazy, Suspense, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogPost, getAllBlogs } from "@/lib/blogUtils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus, vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NotFound from "./NotFound";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Mermaid = lazy(() => import("@/components/Mermaid"));

const ReadingProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-0.5 bg-foreground z-[100]"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [moreBlogs, setMoreBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0);

      getAllBlogs().then((all) => {
        const current = all.find((b) => b.slug === slug) || null;
        setBlog(current);
        setLoading(false);

        const others = all.filter((b) => b.slug !== slug);
        const shuffled = others.sort(() => Math.random() - 0.5);
        setMoreBlogs(shuffled.slice(0, 3));
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-sm text-muted-foreground pt-20">
        Loading…
      </div>
    );
  }
  if (!blog) return <NotFound />;

  const readingTime = Math.ceil(blog.content.split(/\s+/).length / 200);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <ReadingProgressBar />

      <article className="container-site pt-28 pb-12 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground mb-8"
        >
          <ArrowLeft size={14} />
          Back to Notes
        </Link>

        <header className="mb-10 pb-8 border-b border-border/40">
          <h1 className="text-pixel text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-muted-foreground">
            <span>{blog.date}</span>
            {blog.tags && <span>{blog.tags.join(" · ")}</span>}
            <span>{readingTime} min read</span>
          </div>
        </header>

        <div
          className="prose dark:prose-invert max-w-none font-mono
            prose-headings:font-pixel prose-headings:tracking-wide
            prose-p:text-sm prose-p:leading-relaxed prose-p:text-muted-foreground
            prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-foreground/70
            prose-code:text-foreground prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-none
            prose-strong:text-foreground prose-li:text-muted-foreground"
        >
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");

                if (match && match[1] === "mermaid") {
                  return (
                    <Suspense
                      fallback={
                        <div className="my-8 p-6 bg-secondary/50 rounded-xl text-sm text-muted-foreground">
                          Loading diagram…
                        </div>
                      }
                    >
                      <Mermaid chart={String(children).replace(/\n$/, "")} />
                    </Suspense>
                  );
                }

                return match ? (
                  <div className="not-prose">
                    <SyntaxHighlighter
                      PreTag="div"
                      language={match[1]}
                      style={resolvedTheme === "dark" ? vscDarkPlus : vs}
                      customStyle={{
                        margin: "1.5rem 0",
                        borderRadius: "0.75rem",
                        fontSize: "0.8125rem",
                        backgroundColor: resolvedTheme === "dark" ? "#0a0a0a" : "#f5efe6",
                        padding: "1.25rem",
                        border: "1px solid hsl(var(--border))",
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {blog.content}
          </Markdown>
        </div>
      </article>

      {moreBlogs.length > 0 && (
        <div className="container-site max-w-3xl border-t border-border/40 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-pixel text-lg">More Notes</h2>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-6">
            {moreBlogs.map((item) => (
              <Link to={`/blog/${item.slug}`} key={item.slug} className="block group">
                <article className="border-b border-border/40 pb-6">
                  <h3 className="text-pixel text-base group-hover:text-foreground/80 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-muted-foreground">{item.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BlogPostPage;
