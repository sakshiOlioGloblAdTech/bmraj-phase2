'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Let the browser handle #anchor links (e.g. /contact-us#enquiry-form)
    // instead of yanking the page back to the top.
    if (window.location.hash) return;

    // Smooth scroll to top when pathname changes
    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
