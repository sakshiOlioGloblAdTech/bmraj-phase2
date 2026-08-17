import Link from 'next/link';
import Image from 'next/image';

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Our Team', href: '/team' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Facilities', href: '/facilities' },
  // { name: 'Privacy Policy', href: '/privacy-policy' },
  // { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const productLinks = [
  { name: 'Drums & Barrels', href: '/drums-and-barrels' },
  { name: 'Jerrycans & Polycans', href: '/jerrycans-polycans' },
  { name: 'Plastic Buckets & Pails', href: '/plastic-buckets-and-pails' },
  { name: 'Small Bottles & Containers', href: '/small-bottles-containers' },
  { name: 'PET Bottles', href: '/pet-bottles-preforms/pet-bottles' },
  { name: 'Preforms', href: '/pet-bottles-preforms/preforms' },
  { name: 'Food Packaging', href: '/food-packaging' },
  { name: 'Crates', href: '/crates' },
  { name: 'Cosmetic Caps', href: '/cosmetic-caps' },
  { name: 'Blow Molding Accessories', href: '/blow-molding-accessories' },
  { name: 'Pharma', href: '/pharma' },
];

// const industryLinks = [
//   { name: 'Homecare', href: '/industries/homecare' },
//   { name: 'Industrial', href: '/industries/industrial' },
//   { name: 'Personal Care', href: '/industries/personal-care' },
//   { name: 'FMCG', href: '/industries/fmcg' },
//   { name: 'Chemicals', href: '/industries/chemicals' },
//   { name: 'Automotive', href: '/industries/automotive' },
//   { name: 'Caps and Closures', href: '/industries/caps-closures' },
//   { name: 'Food & Beverage', href: '/industries/food-beverage' },
//   // { name: 'Healthcare/Pharma', href: '/industries/healthcare' },
//   // { name: 'Pesticides/Fertilizers', href: '/industries/pesticides-fertilizers' },
// ];

const serviceLinks = [
  { name: 'Injection Molding', href: '/services/plastic-injection-moulding' },
  { name: 'Blow Molding', href: '/services/plastic-blow-moulding' },
  { name: 'End to End Assembly', href: '/services/end-to-end-assembly' },
];

export default function Footer() {
  return (
    <footer className="bg-[#183F34] text-white">
      <div className="pad max px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className='border-b border-white/10 pb-6'>
         {/* Logo and Info */}
         <div className="lg:col-span-1 h-auto w-auto">
            <Image
              src="/footer-logo.png"
              alt="BMRAJ Industries"
              width={150}
              height={60}
              className="brightness-0 invert"
              style={{ width: 'auto', height: 'auto', maxWidth: '150px' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 pt-6">
         
          {/* Company Links */}
          <div>
            <h3 className="text-[17px] font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-[14px] block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-[17px] font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-[14px] block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          {/* <div>
            <h3 className="text-[17px] font-semibold mb-4 text-white">Industries</h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-[14px] block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services & Contact */}
          <div>
            <h3 className="text-[17px] font-semibold mb-4 text-white">Contract Manufacturing Services</h3>
            <ul className="space-y-2.5 mb-6">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-[14px] block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-[17px] font-semibold text-white pb-1">Contact Us</h3>
              <div className="text-[14px]">
                <a href="tel:02602640244" className="text-gray-300 hover:text-white transition-colors pb-1 block">0260-2640244</a>
                <a href="tel:+919377115444" className="text-gray-300 hover:text-white transition-colors pb-1 block">+91-9377115444</a>
                <a href="mailto:info@bmraj.co.in" className="text-gray-300 hover:text-white transition-colors block">info@bmraj.co.in</a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/bmraj-industries-a6654a1b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/bmrajindustries/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/bmrajindustries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              <div className="text-[14px] text-gray-300 pt-2">
              <p className='font-bold pb-2 font-[18px]'>Address:</p>
                <p>Plot No. 4 & 5, Survey No.113/2/4 & 5, Tirupati Ind. Estate, 66 KVA Road, Amli SILVASSA - 396230 Dadra and Nagar Haveli & Daman & Diu, India</p>
              </div>
            </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#F6F6EF]">
          <p>Copyright @ BMRAJ {new Date().getFullYear()}</p>
          <a href='https://olioglobaladtech.com/'>Design & Developed by Olio Global AdTech</a>
        </div>
      </div>
    </footer>
  );
}
