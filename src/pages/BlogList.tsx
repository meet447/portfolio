import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, getAllBlogs } from '@/lib/blogUtils';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

const BlogList = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        getAllBlogs().then(setBlogs);
    }, []);

    return (
        <>
            <ThemeToggle />
            <div className="min-h-screen bg-background font-mono">
                <header className="container-resume py-8 border-b border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <Link to="/">
                            <Button variant="outline" size="sm" className="font-mono">
                                <ArrowLeft size={16} className="mr-2" />
                                Back to Resume
                            </Button>
                        </Link>
                    </div>
                    <h1 className="text-4xl font-bold tracking-wider mb-2">TECHNICAL NOTES</h1>
                    <p className="text-muted-foreground">Thoughts on LLMs, GPU orchestration, and software engineering.</p>
                </header>

                <main className="container-resume py-12">
                    <div className="space-y-8">
                        {blogs.map((blog) => (
                            <Link to={`/blog/${blog.slug}`} key={blog.slug} className="block group">
                                <article className="border border-border p-6 rounded-lg hover:bg-muted/30 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                                        <h2 className="text-xl font-bold group-hover:text-accent transition-colors">
                                            {blog.title}
                                        </h2>
                                        <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                                            <Calendar size={14} className="mr-2" />
                                            {blog.date}
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">
                                        {blog.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {blog.tags?.map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-muted rounded font-mono">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
};

export default BlogList;
