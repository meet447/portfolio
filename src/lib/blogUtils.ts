import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string;
    tags?: string[];
}

export const getAllBlogs = async (): Promise<BlogPost[]> => {
    const modules = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default' });

    const blogs: BlogPost[] = [];

    for (const path in modules) {
        const rawContent = await modules[path]() as string;
        const { data, content } = matter(rawContent);
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        blogs.push({
            slug,
            title: data.title || 'Untitled',
            date: data.date || '',
            description: data.description || '',
            tags: data.tags || [],
            content,
        });
    }

    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
    const blogs = await getAllBlogs();
    return blogs.find((blog) => blog.slug === slug) || null;
};
