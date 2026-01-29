import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, getAllBlogs } from '@/lib/blogUtils';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogList = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        getAllBlogs().then(setBlogs);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-background font-mono"
        >
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
        </motion.div>
    );
};

export default BlogList;
