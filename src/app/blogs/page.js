import { Header } from '@/components/layouts';
import BlogListing from '@/components/sections/Blog/BlogListing';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Blogs | BMRAJ Industries',
  description:
    'Insights on industrial packaging, HDPE materials, compliance, and plastic manufacturing best practices from BMRAJ Industries.',
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="mt-20">
        <BlogListing posts={blogPosts} />
      </main>
    </>
  );
}
