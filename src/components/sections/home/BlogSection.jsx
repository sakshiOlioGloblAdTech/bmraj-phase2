import BlogCommanSection from '@/components/common/Blog';
import { blogPosts } from '@/data/blog';

export default function BlogSection() {

  return (
    <div>
      <BlogCommanSection
        title="Knowledge Is Power (Industry Insights)"
        description="Discover how we solve various packaging challenges."
        blogPosts={blogPosts}
        viewAllButtonText="Read More Insights"
        customClass="my-custom-class" 
      />
    </div>
  );
}
