import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, getAllBlogs } from "@/lib/blogUtils";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllBlogs().then(setBlogs);
  }, []);

  const filteredBlogs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return blogs;

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(q) ||
        blog.description.toLowerCase().includes(q) ||
        blog.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [blogs, query]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
    >
      <main className="container-site pt-28 pb-16">
        <div className="content-column">
          <SectionTitle title="Notes" subtitle="Latest articles and write-ups" />

          <div className="relative mb-10">
            <input
              type="search"
              placeholder="Search notes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-border/60 bg-secondary/50 py-3 pl-4 pr-10 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-border transition-colors"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
          </div>

          <div className="space-y-8 text-left">
            {filteredBlogs.length === 0 ? (
              <p className="text-sm font-mono text-muted-foreground text-center py-8">
                {query ? `No notes found for "${query}"` : "No notes yet."}
              </p>
            ) : (
              filteredBlogs.map((blog) => (
                <Link to={`/blog/${blog.slug}`} key={blog.slug} className="block group">
                  <article className="border-b border-border/40 pb-8 transition-colors hover:border-border">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                      <h2 className="text-pixel text-xl sm:text-2xl text-foreground group-hover:text-foreground/80 transition-colors">
                        {blog.title}
                      </h2>
                      <span className="text-[11px] font-mono text-muted-foreground">{blog.date}</span>
                    </div>
                    <p className="text-body-prose line-clamp-2 mb-4">{blog.description}</p>
                    {blog.tags && (
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-muted-foreground border border-border/40 rounded px-1.5 py-0.5"
                          >
                            [{tag}]
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              ))
            )}
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default BlogList;
