import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const BlogListCard = ({ post }) => (
  <Link
    href={`/blogs/${post.slug}`}
    className="group block bg-white rounded-2xl p-3 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="overflow-hidden rounded-xl">
      <Image
        src={post.imageUrl}
        alt={post.altText || post.title}
        width={600}
        height={400}
        className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="px-2 pt-4 pb-3">
      <h3 className="text-[18px] md:text-[20px] font-[600] text-[#183F34] leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      {post.excerpt && (
        <p className="text-[14px] text-[#687975] leading-[1.6] line-clamp-3">
          {post.excerpt}
        </p>
      )}
    </div>
  </Link>
);

export default function BlogListing({ posts = [] }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blogs' },
  ];

  return (
    <section className="bg-[#F6F6EF]">
      <div className="pad max mx-auto pt-4 md:pt-8 lg:pt-12 pb-16">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />

        <div className="mb-10 max-w-3xl">
          <span className="text-[16px] font-[500] text-[#139C57] mb-2 block">Resources and Blogs</span>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#183F34] leading-[1.15] mb-3">
            Knowledge is Growth: Explore Our Blog
          </h1>
          <p className="text-[#687975] text-[15px] md:text-[16px] leading-[1.7]">
            Insights on industrial packaging, materials, compliance, and manufacturing best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogListCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
