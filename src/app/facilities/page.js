import { Header } from '@/components/layouts';
import FacilitiesHero from '@/components/sections/Facilities/FacilitiesHero';
import ServicePartnerSection from '@/components/sections/Services/ServicePartnerSection';
import { ManufacturingInfrastructure } from '@/components/sections/Services';
import FacilityQualityTesting from '@/components/sections/Facilities/FacilityQualityTesting';
import TrustedCertifications from '@/components/sections/Facilities/TrustedCertifications';
import FacilityHighlights from '@/components/sections/Facilities/FacilityHighlights';
import GlobalReachSection from '@/components/common/GlobalReachSection';

export const metadata = {
  title: 'Facilities & Capabilities | BMRAJ Industries',
  description: 'Engineering Excellence for Scalable Plastic Manufacturing. Explore BMRAJ\'s manufacturing facilities and capabilities.',
};

const heroData = {
  title: 'Facilities & Capabilities',
  subtitle: 'Engineering Excellence for Scalable Plastic Manufacturing',
  heroImage: '/facilities-hero.jpg',
  buttons: [
    { text: 'Get a Quote', type: 'primary' },
    { text: 'Schedule a Plant Visit', type: 'secondary', link: '/contact-us#enquiry-form' },
  ],
};

const partnerData = {
  title: {
    line1: 'Leading-Edge Plastic Manufacturing',
    highlight: 'Capabilities for Industries',
  },
  description:
    'At BMRAJ Industries, every product begins in a facility built to deliver reliability.<br/><br/>From blow and injection moulding to printing, testing, and assembly, all our processes are housed under one ISO 9001:2015-certified roof in Silvassa, ensuring consistent quality, traceability, and on-time delivery.<br/><br/>From plastic blow moulding and injection moulding technologies to end-to-end manufacturing assemblies, our infrastructure combines advanced machinery, skilled teams, and scalable systems to meet the world’s most demanding packaging and storage standards.',
  image: '/leading-manufacturing.png',
  buttonText: 'Get a Quote',
  buttonLink: '/contact-us',
  statCard: {
    value: 'ISO 9001:2015 Certified Facility',
    label: 'All processes under one roof in Silvassa.',
  },
};

// Plain-paragraph accordion items (no labels) to match the screenshot.
const coreCapabilitiesData = {
  title: 'Core Manufacturing Capabilities',
  description: 'Every process under one ISO 9001:2015-certified roof in Silvassa.',
  buttonText: 'Know More',
  buttonLink: '/about-us',
  accordionItems: [
    {
      id: 1,
      title: 'Blow Moulding Plant',
      videoUrl: 'https://youtu.be/wGfitrJGasg',
      thumbnailUrl: '/thumnail/Blow-Molding-Thumbnail.png',
      content: [
        { text: 'Multi-station extrusion blow moulding machines ensure uniform wall thickness and leak-proof seams.' },
        { text: 'Materials handled: HDPE, PP, and LLDPE.' },
        { text: 'Ideal for drums, jerrycans, bottles, and industrial containers.' },
        { text: 'UN-certified variants available for export packaging.' },
      ],
    },
    {
      id: 2,
      title: 'Injection Moulding Plant',
      videoUrl: 'https://youtu.be/EiUNjwCUT10',
      thumbnailUrl: '/thumnail/Injection-Molding-Thumbnail.png',
      content: [
        { text: 'High-tonnage machines with multi-cavity tooling.' },
        { text: 'IML (In-Mould Label) is compatible with branded packaging.' },
        { text: 'Ideal for thin-wall containers, buckets, milk crates, oil buckets, caps, closures, and industrial plastic components.' },
        { text: 'Materials handled: PP, PPCP, HDPE, PET, PET-G, and ABS.' },
        { text: 'Real-time production monitoring and cycle optimization for repeatable precision.' },
      ],
    },
    {
      id: 3,
      title: 'Printing & Labeling Unit',
      videoUrl: 'https://youtu.be/EiUNjwCUT10',
      thumbnailUrl: '/thumnail/Printing-Thumnail.png',
      content: [
        { text: 'Screen Printing, Heat Transfer Label (HTL), and In-Mould Label (IML) facilities.' },
        { text: 'Supports food-grade and personal-care packaging lines.' },
        { text: 'Colour matching and multi-surface adhesion for long-lasting graphics.' },
      ],
    },
    {
      id: 4,
      title: 'Assembly & Integration Lines',
      videoUrl: 'https://youtu.be/Z7HM4jF2AAk',
      thumbnailUrl: '/services/assembly-partner.png',
      content: [
        { text: 'Integrated fitting lines for caps, plugs, handles, clamps, and accessories.' },
        { text: 'Final assembly and QC integration for OEM and bulk export clients.' },
        { text: 'Streamlined finishing ensures reduced lead times and consistent fitment.' },
      ],
    },
  ],
};

const qualityTestingData = {
  title: {
    line1: 'Engineered for ',
    highlight1: 'Compliance,',
    line2: 'Tested for ',
    highlight2: 'Confidence',
  },
  checklistTitle: 'World-Class Quality Testing',
  checklist: [
    'Drop Test, Stack Load Test, and Hydraulic Pressure Test',
    'Closure & Torque Testing',
    'Wall Thickness and Weight Verification',
    'Chemical Compatibility & Leakage Test',
    'Dimensional and Colour Consistency Checks',
  ],
  // TODO: swap for the real quality-testing video/image when available.
  videoUrl: 'https://youtu.be/Z7HM4jF2AAk',
  image: '/thumnail/QC-testing-thumbnail.png',
};

const certificationsData = {
  title: 'Trusted Certifications',
  certifications: [
    'ISO 9001:2015 Quality Management System',
    'MSME ZED Gold Certified Manufacturer',
    'UN Packaging Approval for Export Drums',
    'BIS & International Packaging Compliance',
  ],
  note: 'Note: All production batches are traceable through unique codes and QA documentation, ensuring complete visibility from moulding to dispatch.',
};

const facilityHighlightsData = {
  title: 'A Facility Designed for Industrial-Grade Performance',
  description:
    'Our integrated manufacturing plant in Silvassa, Dadra & Nagar Haveli, is equipped for precision, scale, and compliance. We’ve engineered our infrastructure to meet the needs of both high-volume production and custom prototyping.',
  highlights: [
    'Location: Silvassa, Dadra & Nagar Haveli',
    'Production Area: 35,000+ sq. ft. dedicated manufacturing space',
    'Installed Capacity: Over 1 million plastic units produced per month',
    'Processes: Blow Moulding, Injection Moulding, Printing & Finishing, QA Testing, Assembly',
    'Certifications: ISO 9001:2015, MSME ZED Gold Certified, UN-Approved Packaging',
    'Client Base: Supplying to Indian and international OEMs, exporters, and manufacturing units',
  ],
};

export default function FacilitiesPage() {
  return (
    <>
      <Header transparent />
      <main>
        <FacilitiesHero data={heroData} />
        <ServicePartnerSection data={partnerData} />
        <ManufacturingInfrastructure data={coreCapabilitiesData} />
        <FacilityQualityTesting {...qualityTestingData} />
        <TrustedCertifications {...certificationsData} />
        <FacilityHighlights {...facilityHighlightsData} />
        <GlobalReachSection
          title="Quality You Can Measure, Manufacturing You Can Trust"
          description="High-performance plastic packaging, tested and certified for real-world use, delivered on time, at scale."
        />
      </main>
    </>
  );
}
