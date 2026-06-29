"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { allCategoryData, productListingData } from "@/data/products";

// Build searchable product list from category data
const buildSearchableProducts = () => {
  const products = [];

  Object.entries(allCategoryData).forEach(([categorySlug, category]) => {
    // Add main category
    products.push({
      id: categorySlug,
      name: category.name,
      type: 'category',
      href: `/${categorySlug}`,
      image: category.productLine?.categories?.[0]?.image || '/product-placeholder.png',
      description: category.IndustrialHero?.subtitle?.slice(0, 100) + '...' || ''
    });

    // Add subcategories/products from productLine
    if (category.productLine?.categories) {
      category.productLine.categories.forEach((subCategory) => {
        products.push({
          id: `${categorySlug}-${subCategory.slug}`,
          name: subCategory.name,
          type: 'subcategory',
          href: `/${categorySlug}/${subCategory.slug}`,
          image: subCategory.image || '/product-placeholder.png',
          description: subCategory.description || '',
          parentCategory: category.name
        });
      });
    }
  });

  // Add individual products from productListingData
  Object.entries(productListingData).forEach(([categorySlug, categoryProducts]) => {
    Object.entries(categoryProducts).forEach(([subCategorySlug, subCategory]) => {
      if (subCategory.products && Array.isArray(subCategory.products)) {
        subCategory.products.forEach((product) => {
          products.push({
            id: `${categorySlug}-${subCategorySlug}-${product.slug}`,
            name: product.title,
            type: 'product',
            href: `/${categorySlug}/${subCategorySlug}/${product.slug}`,
            image: product.imageUrl || '/product-placeholder.png',
            description: `${product.capacity || ''} ${product.material || ''}`.trim(),
            parentCategory: subCategory.name,
            features: product.features || []
          });
        });
      }
    });
  });

  return products;
};

const SearchPopup = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const popupRef = useRef(null);

  // Build products list once
  const allProducts = useRef(buildSearchableProducts());

  // Focus input when popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Search function
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate small delay for better UX
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim();

      const results = allProducts.current.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
        const descMatch = product.description?.toLowerCase().includes(normalizedQuery);
        const parentMatch = product.parentCategory?.toLowerCase().includes(normalizedQuery);
        const featuresMatch = product.features?.some(f => f.toLowerCase().includes(normalizedQuery));
        return nameMatch || descMatch || parentMatch || featuresMatch;
      });

      // Sort results - exact matches first, then by type priority (category > subcategory > product)
      results.sort((a, b) => {
        const aExact = a.name.toLowerCase().startsWith(normalizedQuery);
        const bExact = b.name.toLowerCase().startsWith(normalizedQuery);
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;

        // Type priority: category > subcategory > product
        const typePriority = { category: 0, subcategory: 1, product: 2 };
        return (typePriority[a.type] || 2) - (typePriority[b.type] || 2);
      });

      setSearchResults(results.slice(0, 8)); // Limit to 8 results
      setIsLoading(false);
    }, 150);
  }, []);

  // Clear search on close
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-start justify-center pt-[10vh]"
      onClick={onClose}
      style={{
        animation: "fadeIn 0.2s ease-out forwards",
      }}
    >
      {/* Search Popup */}
      <div
        ref={popupRef}
        className="w-[90%] max-w-[600px] bg-[#F6F6EF] rounded-2xl shadow-2xl overflow-hidden border border-[#DFDFD3]"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: "searchPopupScale 0.3s ease-out forwards",
        }}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h3 className="text-[16px] font-semibold text-[#183F34]">Search Products</h3>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 bg-gray-200 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <div className="px-4 pb-4 border-b border-[#DFDFD3]">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-12 py-4 bg-white rounded-xl text-[16px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 border border-[#DFDFD3]"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* Clear button - only shows when there's text */}
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSearchResults([]);
                  inputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-2 text-gray-500 text-sm">Searching...</p>
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-[15px]">No products found for &quot;{searchQuery}&quot;</p>
              <p className="text-gray-400 text-sm mt-1">Try a different search term</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((result) => (
                <Link
                  key={result.id}
                  href={result.href}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#E6E6D1] transition-all group"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <Image
                      src={result.image}
                      alt={result.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[15px] font-semibold text-[#183F34] group-hover:text-primary truncate">
                      {result.name}
                    </h4>
                    {result.parentCategory && (
                      <p className="text-[12px] text-gray-500">{result.parentCategory}</p>
                    )}
                    {result.description && result.type === 'product' && (
                      <p className="text-[11px] text-gray-400 truncate">{result.description}</p>
                    )}
                    <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded-full mt-1 ${
                      result.type === 'category'
                        ? 'bg-primary/10 text-primary'
                        : result.type === 'subcategory'
                        ? 'bg-[#D1EEAE] text-primary'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {result.type === 'category' ? 'Category' : result.type === 'subcategory' ? 'Subcategory' : 'Product'}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-4">Popular Categories</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(allCategoryData).slice(0, 6).map(([slug, category]) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    onClick={onClose}
                    className="p-3 rounded-lg bg-[#E6E6D1]/50 hover:bg-[#E6E6D1] transition-all text-[14px] font-medium text-[#183F34] hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
