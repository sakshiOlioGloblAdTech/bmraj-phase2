"use client";

import Link from "next/link";
import { getIndustries } from "@/data/industries";

const IndustryCard = ({ industry, productCount }) => (
  <Link
    href={`/industries/${industry.id}`}
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all group"
  >
    <div className="w-10 h-10 bg-[#139C57] rounded-lg flex items-center justify-center flex-shrink-0">
      {industry.icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-[16px] font-[600] text-[#183F34] group-hover:text-primary truncate">
        {industry.title}
      </h3>
      <p className="text-[14px] font-[400] text-[#5D6865]">
        {productCount} Products
      </p>
    </div>
  </Link>
);

const IndustriesMegaMenu = ({ isOpen, onClose }) => {
  const industries = getIndustries();

  // Product counts for each industry (matching the screenshot)
  const productCounts = {
    'homecare': 23,
    'caps-closures': 28,
    'fmcg': 23,
    'industrial': 12,
    'food-beverage': 12,
    'automotive': 6,
    'personal-care': 4,
    'healthcare': 53,
    'pesticides-fertilizers': 23,
    'chemicals': 15,
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}>
        <div className="absolute top-2 right-3 border border-gray-300 bg-secondary rounded-lg cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        className="fixed top-[70px] md:top-[80px] left-0 right-0 bg-[#F6F6EF] shadow-2xl z-50 max-w-[1200px] mx-2 md:mx-4 lg:mx-auto border border-[#DFDFD3] rounded-[5px] transition-all duration-300 ease-out overflow-y-auto"
        style={{
          animation: isOpen ? "slideDown 0.3s ease-out" : "none",
          transformOrigin: "top",
          maxHeight: "calc(100vh - 80px)",
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Industries Grid */}
          <div className="flex-1 p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {industries.map((industry) => (
                <div key={industry.id} onClick={onClose}>
                  <IndustryCard
                    industry={industry}
                    productCount={productCounts[industry.id] || 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Contact CTA */}
          <div className="p-6 flex flex-col">
            <div className="text-center lg:text-left text-[#5D6865] text-[14px] font-[400]">
              <h3 className="mb-2">
                Can&apos;t find your industry here?
              </h3>
              <p className="mb-4">
                We might still have worked in your industry.
              </p>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-[16px] font-[600] text-primary hover:underline"
              >
                Contact Us to Know More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustriesMegaMenu;
