import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost, getBlogBySlug } from '@/lib/blogUtils';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import Mermaid from '@/components/Mermaid';
import NotFound from './NotFound';
import { useTheme } from 'next-themes';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const { resolvedTheme } = useTheme();

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
                    <div className="prose dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-transparent prose-pre:p-0 prose-pre:border-none
          ">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code(props) {
                                    const { children, className, node, ...rest } = props;
                                    const match = /language-(\w+)/.exec(className || '');
                                    
                                    if (match && match[1] === 'mermaid') {
                                        return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                                    }

                                    return match ? (
                                        <div className="not-prose">
                                            <SyntaxHighlighter
                                                PreTag="div"
                                                children={String(children).replace(/\n$/, '')}
                                                language={match[1]}
                                                style={resolvedTheme === 'dark' ? vscDarkPlus : vs}
                                                customStyle={{
                                                    margin: '1.5rem 0',
                                                    borderRadius: '0.5rem',
                                                    fontSize: '0.875rem',
                                                    backgroundColor: resolvedTheme === 'dark' ? '#1e1e1e' : '#f8f8f8',
                                                    padding: '1.5rem',
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <code {...rest} className={className}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {blog.content}
                        </Markdown>
                    </div>
                </article>
            </div>
        </>
    );
};

export default BlogPostPage;
