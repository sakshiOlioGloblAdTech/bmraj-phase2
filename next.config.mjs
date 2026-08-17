/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  async redirects() {
    return [
      // --- From the SEO audit: legacy URLs that 404 today ---------------
      // Duplicated category segments (/<category>/<category>) and old slugs.
      {
        source: '/pet-bottles-preforms/pet-preforms',
        destination: '/pet-bottles-preforms',
        permanent: true,
      },
      {
        source: '/small-bottles-containers/small-bottles-containers',
        destination: '/small-bottles-containers',
        permanent: true,
      },
      {
        source: '/jerrycans-polycans/jerrycans-polycans',
        destination: '/jerrycans-polycans',
        permanent: true,
      },
      {
        source: '/drums-and-barrels/drums-and-barrels',
        destination: '/drums-and-barrels',
        permanent: true,
      },
      {
        source: '/plastic-buckets-pails/plastic-buckets-pails',
        destination: '/plastic-buckets-and-pails',
        permanent: true,
      },
      {
        source: '/plastic-buckets-and-pails/plastic-buckets-and-pails',
        destination: '/plastic-buckets-and-pails',
        permanent: true,
      },
      // NOTE: a closer equivalent exists for these two —
      // /drums-and-barrels/wide-narrow-drum and
      // /small-bottles-containers/multipurpose-containers. The audit specified
      // the parent category, so that's what's used here; change the
      // destination if you'd rather keep visitors on the matching listing.
      {
        source: '/drums-and-barrels/wide-narrow-mouth-drum',
        destination: '/drums-and-barrels',
        permanent: true,
      },
      {
        source: '/small-bottles-containers/multi-purpose-containers',
        destination: '/small-bottles-containers',
        permanent: true,
      },

      // --- Products moved or removed during phase 2 ---------------------
      // These URLs were live before this release, so they need to redirect
      // rather than 404.
      {
        source: '/small-bottles-containers/containers-for-lubricants/open-top-drums',
        destination: '/drums-and-barrels/full-open-top-drums/open-top-drums',
        permanent: true,
      },
      {
        source: '/small-bottles-containers/containers-for-lubricants/50-ltr-narrow-mouth-drums',
        destination: '/drums-and-barrels/wide-narrow-drum/50-ltr-narrow-mouth-drums',
        permanent: true,
      },
      {
        source: '/small-bottles-containers/containers-for-lubricants/plastic-barrels-drums',
        destination: '/drums-and-barrels/barrels/plastic-barrels-drums',
        permanent: true,
      },
      // Retired products — sent to the listing they used to sit in.
      {
        source: '/drums-and-barrels/full-open-top-drums/185-kgs-210-ltr-drum',
        destination: '/drums-and-barrels/full-open-top-drums',
        permanent: true,
      },
      // Liner Type Drum has now been restored a second time — no redirect.
      {
        source: '/drums-and-barrels/barrels/210-ltr-full-open-top-barrel',
        destination: '/drums-and-barrels/barrels',
        permanent: true,
      },
      // The placeholder product replaced by the three flip top caps.
      {
        source: '/cosmetic-caps/cosmetic-caps',
        destination: '/cosmetic-caps',
        permanent: true,
      },
      // Renamed once the preform stopped being 500 ml only.
      {
        source: '/pet-bottles-preforms/preforms/500-ml-preform-agro-pet-bottles',
        destination: '/pet-bottles-preforms/preforms/pet-preform-agro-bottles',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
