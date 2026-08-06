import { notFound } from 'next/navigation';
import { Header } from '@/components/layouts';
import BlogDetail from '@/components/sections/Blog/BlogDetail';
import GlobalReachSection from '@/components/common/GlobalReachSection';
import FrequentlyAsked from '@/components/sections/ProductCategory/FrequentlyAsked';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog';
import { withSeoMeta } from '@/data/seoMeta';

// Generate static params for all blog posts (SEO optimization)
export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Blog Not Found' };
  }

  return withSeoMeta(`/blogs/${slug}`, {
    title: `${post.title} | BMRAJ Industries`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: post.heroImage ? [post.heroImage] : undefined,
      type: 'article',
    },
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="mt-20">
        <BlogDetail post={post} />
        {post.cta && (
          <GlobalReachSection title={post.cta.title} description={post.cta.description} />
        )}
        {post.faq && post.faq.length > 0 && <FrequentlyAsked faqData={post.faq} />}
      </main>
    </>
  );
}
