import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost, getAllBlogs, getBlogBySlug } from '@/lib/blogUtils';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Mermaid from '@/components/Mermaid';
import NotFound from './NotFound';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [moreBlogs, setMoreBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (slug) {
            getBlogBySlug(slug).then((data) => {
                setBlog(data);
                setLoading(false);
            });

            getAllBlogs().then((all) => {
                const others = all.filter(b => b.slug !== slug);
                const shuffled = others.sort(() => 0.5 - Math.random());
                setMoreBlogs(shuffled.slice(0, 3));
            });
        }
    }, [slug]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!blog) return <NotFound />;

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-background font-mono"
        >
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

                {/* Explore More Section */}
                {moreBlogs.length > 0 && (
                    <div className="container-resume border-t border-border py-12 mt-12">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold font-mono tracking-tight text-foreground"># EXPLORE MORE</h2>
                            <Link to="/blog">
                                <Button variant="ghost" size="sm" className="font-mono text-xs">
                                    View All <ArrowRight size={14} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                        <div className="grid gap-6 md:grid-cols-3">
                            {moreBlogs.map((item) => (
                                <Link to={`/blog/${item.slug}`} key={item.slug} className="group h-full">
                                    <article className="border border-border p-5 rounded-lg h-full hover:bg-muted/30 transition-colors flex flex-col">
                                        <div className="flex items-center text-[10px] text-muted-foreground mb-2 font-mono">
                                            <Calendar size={10} className="mr-1.5" />
                                            {item.date}
                                        </div>
                                        <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] text-muted-foreground line-clamp-2 flex-grow mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-auto">
                                            {item.tags?.slice(0, 2).map((tag) => (
                                                <span key={tag} className="text-[9px] px-1.5 py-0.5 bg-muted rounded font-mono">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
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
