'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ProductsMegaMenu from './ProductsMegaMenu';
import IndustriesMegaMenu from './IndustriesMegaMenu';
import ServicesMegaMenu from './ServicesMegaMenu';
import MoreMegaMenu, { menuItems as moreMenuItems } from './MoreMegaMenu';
import SearchPopup from './SearchPopup';

const allNavigationItems = [
  { name: 'Home', href: '/', active: true },
  { name: 'Products', href: '/products', hasMegaMenu: true },
  { name: 'Industries', href: '/industries', hasIndustriesMenu: true },
  { name: 'Services', href: '/services/contract-manufacturing', hasServicesMenu: true },
  { name: 'About Us', href: '/about-us' },
  { name: 'More', href: '/more', hasMoreMenu: true },
];

// Hide "More" when its dropdown has no items.
const navigationItems = allNavigationItems.filter(
  (item) => !item.hasMoreMenu || moreMenuItems.length > 0
);

export default function Header({ transparent = false }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-[5%] pt-2 ${transparent ? 'bg-transparent' : 'bg-[#F6F6EF]'}`}>
      <div className="bg-[#F6F6EF] border rounded-[8px] border-[#DFDFD3]">
      <div className="py-2 px-2">
        <div className="flex items-center justify-between h-[50px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <div className='relative w-35 h-10'>
            <Image
              src="/bmraj-logo.png"
              alt="BMRAJ Industries Logo"
              fill
              className="object-contain"
              sizes='100%'
            />
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navigationItems.map((item) => (
              item.hasMegaMenu ? (
                <button
                  key={item.name}
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  className={`text-[15px] font-medium transition-colors relative ${
                    item.active
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.active && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                  {item.name}
                </button>
              ) : item.hasIndustriesMenu ? (
                <button
                  key={item.name}
                  onClick={() => setIsIndustriesMenuOpen(!isIndustriesMenuOpen)}
                  className={`text-[15px] font-medium transition-colors relative ${
                    item.active
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.active && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                  {item.name}
                </button>
              ) : item.hasServicesMenu ? (
                <button
                  key={item.name}
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                  className={`text-[15px] font-medium transition-colors relative ${
                    item.active
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.active && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                  {item.name}
                </button>
              ) : item.hasMoreMenu ? (
                <button
                  key={item.name}
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  className={`text-[15px] font-medium transition-colors relative ${
                    item.active
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.active && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors relative ${
                    item.active
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.active && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Section: Search & CTA */}
          <div className="flex items-center gap-3">
            {/* Search Bar - Desktop (clickable to open popup) */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center w-[220px] pl-10 pr-4 py-2.5 bg-[#E6E6D18F] rounded-xl text-sm text-gray-500 hover:bg-[#DCDCC1] transition-all relative cursor-pointer"
            >
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400"
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
              Search products
            </button>

            {/* Mobile Search Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
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
            </button>

            {/* Get a Quote Button */}
            <Link
              href="/contact-us"
              className="hidden sm:block bg-[#183F34] hover:bg-[#0f2a24] text-white px-6 py-2.5 rounded-xl font-semibold text-[14px] transition-all hover:shadow-md whitespace-nowrap"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
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
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[280px] bg-[#F6F6EF] shadow-2xl z-50 lg:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-[#DFDFD3]">
            <h3 className="text-[18px] font-[600] text-[#183F34]">Menu</h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              aria-label="Close Menu"
            >
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
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-4">
            {navigationItems.map((item) => (
              item.hasMegaMenu ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMegaMenuOpen(!isMegaMenuOpen);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-[16px] font-medium py-3 px-4 rounded-lg transition-all ${
                    item.active
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ) : item.hasIndustriesMenu ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsIndustriesMenuOpen(!isIndustriesMenuOpen);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-[16px] font-medium py-3 px-4 rounded-lg transition-all ${
                    item.active
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ) : item.hasServicesMenu ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsServicesMenuOpen(!isServicesMenuOpen);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-[16px] font-medium py-3 px-4 rounded-lg transition-all ${
                    item.active
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ) : item.hasMoreMenu ? (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                    className={`text-left text-[16px] font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-between ${
                      item.active
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-800 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${isMoreMenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Collapsible More Menu Items */}
                  <div className={`overflow-hidden transition-all duration-300 ${isMoreMenuOpen ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="pl-4 flex flex-col gap-1 py-2">
                      <Link
                        href="/about-us"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[15px] font-medium text-gray-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-gray-100 transition-all"
                      >
                        About Us
                      </Link>
                      {/* <Link
                        href="/blogs"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[15px] font-medium text-gray-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-gray-100 transition-all"
                      >
                        Blogs
                      </Link> */}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[16px] font-medium py-3 px-4 rounded-lg transition-all ${
                    item.active
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Mobile CTA Button */}
            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#183F34] text-white px-6 py-3 rounded-xl font-semibold text-[14px] text-center transition-all hover:shadow-md mt-4"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </>

      {/* Products Mega Menu */}
      <ProductsMegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />

      {/* Industries Mega Menu */}
      <IndustriesMegaMenu
        isOpen={isIndustriesMenuOpen}
        onClose={() => setIsIndustriesMenuOpen(false)}
      />

      {/* Services Mega Menu */}
      <ServicesMegaMenu
        isOpen={isServicesMenuOpen}
        onClose={() => setIsServicesMenuOpen(false)}
      />

      {/* More Mega Menu */}
      <MoreMegaMenu
        isOpen={isMoreMenuOpen}
        onClose={() => setIsMoreMenuOpen(false)}
      />

      {/* Search Popup */}
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}
