import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, getAllBlogs } from '@/lib/blogUtils';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        getAllBlogs().then(data => setBlogs(data.slice(0, 3)));
    }, []);

    if (blogs.length === 0) return null;

    return (
        <section className="container-resume section-spacing">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-section-title"># TECHNICAL NOTES</h2>
                <Link to="/blog">
                    <Button variant="outline" className="text-sm font-mono">
                        View All Notes <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {blogs.map((blog) => (
                    <Link to={`/blog/${blog.slug}`} key={blog.slug} className="group h-full">
                        <article className="border border-border p-6 rounded-lg h-full hover:bg-muted/30 transition-colors flex flex-col">
                            <div className="flex items-center text-xs text-muted-foreground mb-3">
                                <Calendar size={12} className="mr-2" />
                                {blog.date}
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                                {blog.title}
                                `</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                                {blog.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {blog.tags?.slice(0, 2).map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-muted rounded font-mono">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default LatestBlogs;
