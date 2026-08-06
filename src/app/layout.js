import "./globals.css";
import Script from "next/script";
import { Inter_Tight } from "next/font/google";
import { Footer } from "@/components/layouts";
import { QuoteProvider } from "@/context/QuoteContext";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/common/JsonLd";
import { organisationSchema, webSiteSchema } from "@/lib/schema";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const GTM_ID = "GTM-534XZCJG";
const GA_ID = "G-PMQ5SPD3LR";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "BMRAJ Industries - Custom Plastic Solutions",
  description: "For over two decades, BMRAJ has been a leader in plastic manufacturing, partnering with global brands.",
  verification: {
    google: "skzwEeP4y4Dk8LDxmOWoq_MpIqMOGU-gcP9Mv4OGLOU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </head>
      <body className={`${interTight.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Site-wide structured data */}
        <JsonLd data={organisationSchema()} />
        <JsonLd data={webSiteSchema()} />

        <QuoteProvider>
          {children}
          <Footer />
        </QuoteProvider>
      </body>
    </html>
  );
}
