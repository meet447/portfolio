import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, getAllBlogs } from "@/lib/blogUtils";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data.slice(0, 3)));
  }, []);

  if (blogs.length === 0) return null;

  return (
    <section className="container-site section-spacing">
      <div className="content-column">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <SectionTitle title="Notes" className="mb-0" />
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground transition-colors hover:text-foreground shrink-0 pb-1"
          >
            View All Notes
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog.slug} className="block group">
              <article className="border-b border-border/40 pb-6 transition-colors hover:border-border">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-pixel text-lg sm:text-xl text-foreground group-hover:text-foreground/80 transition-colors normal-case">
                    {blog.title}
                  </h3>
                  <span className="text-[11px] font-mono text-muted-foreground">{blog.date}</span>
                </div>
                <p className="text-body-prose line-clamp-2">{blog.description}</p>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags.slice(0, 3).map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
