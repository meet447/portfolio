import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost, getBlogBySlug } from '@/lib/blogUtils';
import Markdown from 'react-markdown';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import NotFound from './NotFound';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            getBlogBySlug(slug).then((data) => {
                setBlog(data);
                setLoading(false);
            });
        }
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!blog) return <NotFound />;

    return (
        <>
            <ThemeToggle />
            <div className="min-h-screen bg-background font-mono">
                <article className="container-resume py-12">
                    {/* Header */}
                    <div className="mb-8 border-b border-border pb-8">
                        <Link to="/blog">
                            <Button variant="outline" size="sm" className="font-mono mb-6">
                                <ArrowLeft size={16} className="mr-2" />
                                Back to Notes
                            </Button>
                        </Link>

                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-mono text-sm">
                            <div className="flex items-center">
                                <Calendar size={16} className="mr-2" />
                                {blog.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag size={16} />
                                {blog.tags?.join(', ')}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-foreground/90 prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border
          ">
                        <Markdown>{blog.content}</Markdown>
                    </div>
                </article>
            </div>
        </>
    );
};

export default BlogPostPage;
