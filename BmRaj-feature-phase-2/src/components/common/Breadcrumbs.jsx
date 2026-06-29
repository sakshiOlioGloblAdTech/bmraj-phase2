import React from 'react';
import Link from 'next/link';

export default function Breadcrumbs({ items, className = '' }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav className={`text-sm font-medium text-[#5D6865] mb-8 ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-2">&gt;</span>}

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[#183F34] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-gray-700 font-semibold" : ""}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
