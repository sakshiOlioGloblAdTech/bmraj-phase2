import { Header } from "@/components/layouts";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { generateContactBreadcrumbs } from "@/utils/breadcrumbs";
import ContactForm from "@/components/sections/Contact/ContactForm";
import { withSeoMeta } from "@/data/seoMeta";

export const metadata = withSeoMeta("/contact-us", {
  title: "Contact Us | BMRAJ Plastics",
  description:
    "Get in touch with BMRAJ Industries for custom plastic packaging, drums, jerrycans, and contract manufacturing inquiries.",
  openGraph: {
    title: "Contact Us | BMRAJ Plastics",
    description:
      "Get in touch with BMRAJ Industries for custom plastic packaging and contract manufacturing inquiries.",
  },
});

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F6F6EF] mt-20">
        <div className="max pad mx-auto py-12">
          <Breadcrumbs items={generateContactBreadcrumbs()} />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#183F34] mb-8">
            Contact Us
          </h1>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-10">
            <ContactForm />

            <aside className="relative w-full lg:w-[380px] min-h-[400px] rounded-2xl overflow-hidden ">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/contact-us.png')" }}
              />
              <div className="absolute inset-0" />

              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-[32px] lg:text-[36px] font-bold text-white leading-tight mb-2">
                    Have<br />Questions?
                  </h3>
                  <p className="text-white/90 text-[20px] font-medium">Get in Touch</p>
                </div>

                <div className="space-y-4 mt-8">
                  <a
                    href="tel:02602640244"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#139C57] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[15px] font-medium">0260-2640244</span>
                  </a>

                  <a
                    href="tel:+919377115444"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#139C57] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[15px] font-medium">+91-9377115444</span>
                  </a>

                  <a
                    href="mailto:info@bmraj.co.in"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#139C57] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[15px] font-medium">info@bmraj.co.in</span>
                  </a>

                  <div className="flex items-start gap-3 text-white">
                    <div className="w-10 h-10 min-w-10 rounded-xl bg-[#139C57] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#183F34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium leading-tight">
                      Plot No. 4 & 5, Survey No.113/2/4 & 5, Tirupati Ind. Estate, 66 KVA Road, Amli SILVASSA - 396230 Dadra and Nagar Haveli & Daman & Diu, India
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.368010792454!2d72.998961!3d20.285028999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cb7bc0000001%3A0xf52906f69c240cc2!2sBMRAJ%20Industries%20%7C%20Industrial%20Plastic%20Manufacturer%20and%20Supplier!5e0!3m2!1sen!2sin!4v1778587723449!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BMRAJ Industries location"
            />
          </div>
        </div>
      </main>
    </>
  );
}
