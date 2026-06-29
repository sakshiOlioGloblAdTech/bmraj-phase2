import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';


export default function ProductSidebar({
  relatedProducts,
  otherCategories,
  parentCategory,
  relatedTitle = 'Other Products in Category',
}) {
  return (
    <aside className="w-full lg:w-1/4 lg:min-w-[300px] space-y-8">
      <div className="p-6 rounded-lg border border-[#DFDFD3]">
        {/* Related Products Section */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className='pb-3'>
            <h3 className="font-semibold text-md text-[#183F34] mb-2">
              {relatedTitle}
            </h3>
            <div className="divide-y divide-gray-100">
              {relatedProducts.map(item => (
                <SidebarLink
                  key={item.slug}
                  href={`/${parentCategory}/${item.slug}`}
                >
                  {item.name}
                </SidebarLink>
              ))}
            </div>
          </div>
        )}

        {/* Other Categories Section */}
        {otherCategories && otherCategories.length > 0 && (
          <div className={`${relatedProducts && relatedProducts.length > 0 ? 'border-t border-[#DFDFD3] pt-3' : ''}`}>
            <h3 className="font-semibold text-md text-[#183F34] mb-2">
              Other Categories
            </h3>
            <div className="divide-y divide-gray-100">
              {otherCategories.map(item => (
                <SidebarLink
                  key={item.slug}
                  href={`/${item.parentSlug}/${item.slug}`}
                >
                  {item.name}
                </SidebarLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}


const SidebarLink = ({ children, href = "#" }) => (
  <Link
    href={href}
    className="text-[16px] flex justify-between items-center py-3 text-primary font-[500] hover:text-green-700 hover:font-medium transition-all group"
  >
    <span>{children}</span>
    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-700 group-hover:translate-x-1 transition-transform" />
  </Link>
);
