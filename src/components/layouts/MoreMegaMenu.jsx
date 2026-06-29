"use client";

import Link from "next/link";

export const menuItems = [
  // {
  //   id: 'blogs',
  //   title: 'Blogs',
  //   href: '/blogs'
  // },
  // {
  //   id: 'contact-us',
  //   title: 'Contact Us',
  //   href: '/contact-us'
  // }
];

const MoreMegaMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - only visible on desktop */}
      <div className="hidden lg:block fixed inset-0 bg-black/30 z-40" onClick={onClose} />

      {/* Dropdown Menu - only visible on desktop */}
      <div
        className="hidden lg:block fixed top-[80px] right-1/3 w-[200px] bg-[#F6F6EF] shadow-lg z-50 border border-[#DFDFD3] rounded-[8px] overflow-y-auto"
        style={{
          animation: "slideDown 0.2s ease-out forwards",
          transformOrigin: "top",
          maxHeight: "calc(100vh - 80px)",
        }}
      >
        <div className="p-4">
          <div className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="text-[16px] font-[600] text-[#183F34] hover:text-primary py-2 px-2 transition-colors whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreMegaMenu;
