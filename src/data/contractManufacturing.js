import { GearNetworkIcon, CertificateCheckIcon, GlobeIcon } from '@/data/stats';

const ContractManufacturingData = {
  // Hero Section
  hero: {
    title: {
      line1: "End-to-End Contract",
      line2: "Manufacturing for Plastic",
      line3: "Packaging & Containers",
    },
    heroImage: "/services/contract-manufacturing-hero.png",
    buttons: [
      { text: "Get a Quote", link: "/quote", type: "primary" },
      { text: "Explore Our Products", link: "/products", type: "secondary" }
    ],
  },

  // Manufacture Plastic Products Section
  manufacturePlasticProducts: {
    title: {
      line1: "We Manufacture Plastic",
      line2: "Products that",
      highlight: "Power Your Brand",
    },
    description: `Partner with <b>BMRAJ</b> for dependable and large-scale plastic manufacturing that meets your brand's quality and delivery expectations – every time.<br/><br/>From mould and material selection to plastic molding (blow and injection), printing, assembly, and packaging, we manage the <b>entire production cycle in-house.</b> Our process begins with a deep understanding of your requirements, design specifications, volume goals, and quality standards, so that once production starts, you can <b>focus on brand growth while we take care of manufacturing.</b>`,
    image: "/services/manufacture-plastic-products.png",
    buttonText: "Get a Quote",
    buttonLink: "/contact-us",
  },

  // Process Steps
  processSteps: {
    title: "Contract Manufacturing Process",
    description: "Our Partnership Journey: Accuracy, Quality & Timely Deliveries at Every Stage",
    steps: [
      {
        id: 1,
        number: "01",
        title: "Mould Evaluation & Alignment",
        description: "Check and align the client's moulds (or our own available moulds) for production compatibility.",
        icon: "/services/process-mould.png",
        hasButton: true,
      },
      {
        id: 2,
        number: "02",
        title: "Material Selection & Sourcing",
        description: "We source HDPE, PP, ABS, and other compliant materials.",
        icon: "/services/process-material.png",
        hasButton: false,
      },
      {
        id: 3,
        number: "03",
        title: "Molding & Fabrication",
        description: "Automated injection and blow molding under strict QC.",
        icon: "/services/process-moulding.png",
        hasButton: false,
      },
      {
        id: 4,
        number: "04",
        title: "Printing & Labeling",
        description: "IML, screen, or heat transfer labeling as per brand need.",
        icon: "/services/process-printing.png",
        hasButton: false,
      },
      {
        id: 5,
        number: "05",
        title: "Assembly & Integration",
        description: "Manual or semi-automated assembly for finished goods.",
        icon: "/services/process-assembly.png",
        hasButton: false,
      },
      {
        id: 6,
        number: "06",
        title: "Quality Testing & Validation",
        description: "Drop, stack, and leakage testing in our QA lab.",
        icon: "/services/process-quality.png",
        hasButton: false,
      },
      {
        id: 7,
        number: "07",
        title: "Packaging & Dispatch",
        description: "Final inspection, packing, and labeling for dispatch.",
        icon: "/services/process-packaging.png",
        hasButton: false,
      },
    ],
  },

  // Manufacturing Infrastructure
  manufacturingInfrastructure: {
    title: "Our Manufacturing Infrastructure",
    description: "At BMRAJ, we've built a production ecosystem designed for scale, speed, and consistency.",
    buttonText: "Know More",
    buttonLink: "/about-us",
    videoUrl: "/about/about-us.mp4",
    thumbnailUrl: "/services/our-manufacturing-infrastructure.png",
    accordionItems: [
      {
        id: 1,
        title: "Blow Molding",
        videoUrl: "https://youtu.be/wGfitrJGasg",
        thumbnailUrl: "/thumnail/Blow-Molding-Thumbnail.png",
        content: [
          { label: "Capacity", text: "20+ machines handling 1L to 250L containers" },
          { label: "Specialty", text: "Double-layer drums for food/pharma with contamination-free interiors" },
          { label: "Precision", text: "Multi-cavity systems ensure uniform wall thickness" },
          { label: "Output", text: "Over 1 million units monthly to meet your largest orders" },
        ],
      },
      {
        id: 2,
        title: "Injection Molding",
        videoUrl: "https://youtu.be/EiUNjwCUT10",
        thumbnailUrl: "/thumnail/Injection-Molding-Thumbnail.png",
        content: [
          { label: "Range", text: "30+ machines (60T to 650T clamping force)" },
          { label: "Branding", text: "IML capability for ready-to-sell cups, tubs, and closures" },
          { label: "Materials", text: "PP, HDPE, LDPE, ABS, HIPS, and engineering-grade plastics" },
          { label: "Integration", text: "Complete assembly lines for appliances and utility products" },
        ],
      },
      {
        id: 3,
        title: "QA & Testing Lab",
        videoUrl: "https://youtu.be/Z7HM4jF2AAk",
        thumbnailUrl: "/thumnail/QC-testing-thumbnail.png",
        content: [
          { label: "Testing", text: "In-house drop, stack, and leakage tests per UN/ISO standards" },
          { label: "Materials", text: "Advanced melt flow index testing for resin quality" },
          { label: "Traceability", text: "Digital inspection logs for every production batch" },
          { label: "Result", text: "Certified compliance and peace of mind" },
        ],
      },
      {
        id: 4,
        title: "Printing & Labeling",
        videoUrl: "https://youtu.be/EiUNjwCUT10",
        thumbnailUrl: "/thumnail/Printing-Thumnail.png",
        content: [
          { label: "Techniques", text: "Screen Printing and Heat Transfer Labeling (HTL)" },
          { label: "Quality", text: "FMCG-grade containers with multi-color, wraparound finishes" },
          { label: "Speed", text: "50,000+ units daily capacity for quick turnaround" },
          { label: "Impact", text: "Products that look as good as they perform" },
        ],
      },
    ],
  },

  // Contract Manufacturing Services
  services: {
    title: {
      part1: "Our",
      highlight1: "Contract",
      highlight2: "Manufacturing",
      part2: "Services",
    },
    items: [
      {
        id: 1,
        title: "Plastic Blow Molding",
        description: "Durable, consistent containers and drums, including double-layer variants for food and pharma.",
        number: "01",
        imageUrl: "/services/blow-moulding.png",
        isHighlighted: true,
        url: "/services/plastic-blow-moulding",
      },
      {
        id: 2,
        title: "Plastic Injection Molding",
        description: "High-precision molding for caps, closures, and components with IML branding options.",
        number: "02",
        imageUrl: "/services/injection-moulding.png",
        isHighlighted: false,
        url: "/services/plastic-injection-moulding",
      },
      {
        id: 3,
        title: "End To End Assembly",
        description: "Full assembly and packaging support for appliances and utility products, including electrical component integration.",
        number: "03",
        imageUrl: "/services/assembly.png",
        isHighlighted: false,
        url: "/services/end-to-end-assembly",
      },
    ],
  },

  // CTA Section
  cta: {
    title: {
      line1: "Looking for a Contract",
      line2: "Manufacturing Partner?",
    },
    description: "We will handle the manufacturing so you can focus on your business.",
    buttonText: "Start Partnership",
    buttonLink: "/contact-us",
  },

  // Why Choose Section
  whyChoose: {
    title: {
      line1: "Why Choose BMRAJ For",
      line2: "Contract Manufacturing?",
    },
    image: "/services/why-choose-contract-manufacturing.png",
    statCards: [
      {
        id: 1,
        value: "100%",
        label: "Trust by Global Brands",
        position: "top-right",
      },
      {
        id: 2,
        value: "25+",
        label: "Years of Trusted Manufacturing",
        position: "bottom-left",
      },
    ],
    accordionItems: [
      {
        title: "Large-Scale Capability",
        content: "End-to-end control of molding, assembly, and finishing helps your brand scale faster.",
      },
      {
        title: "Complete In-House Production",
        content: "From product design to finished packaging, every process is managed within our facility.",
      },
      {
        title: "Faster Time to Market",
        content: "Integrated workflows and experienced teams ensure consistent, timely deliveries.",
      },
      {
        title: "Large Volumes",
        content: "We handle full-scale production runs without compromising quality or delivery deadlines.",
      },
      {
        title: "Proven Expertise",
        content: "Over 25 years of manufacturing experience and trusted partnerships with FMCG, pharma, and industrial brands.",
      },
    ],
  },

  // Industry Section
  industrySection: {
    title: "Trusted Across Industries",
    description: "Deep industry knowledge is the foundation of a great partnership. Our team brings expertise to your specific challenges.",
  },

  // Stats Section
  stats: [
    {
      id: 1,
      icon: <GearNetworkIcon />,
      title: "25+",
      subtitle: "Years of Manufacturing Expertise",
    },
    {
      id: 2,
      icon: <GlobeIcon />,
      title: "1,00,000+",
      subtitle: "sq ft. of Production Area",
    },
    {
      id: 3,
      icon: <GearNetworkIcon />,
      title: "Integrated",
      subtitle: "Printing & Labeling Capabilities",
    },
    {
      id: 4,
      icon: <CertificateCheckIcon />,
      title: "MSME Z Gold",
      subtitle: "Certified Facility",
    },
  ],

  // Blog Section
  blogSection: {
    title: "Blogs & Product Solutions",
    description: "Discover how we solve various packaging challenges.",
    viewAllButtonText: "Read All Articles",
    blogPosts: [
      {
        imageUrl: "/services/blog-1.png",
        altText: "Contract Manufacturing Blog",
        title: "How Contract Manufacturing Helps Brands Scale Faster",
      },
      {
        imageUrl: "/services/blog-2.png",
        altText: "IML Packaging Blog",
        title: "The Role of IML in Modern Packaging",
      },
      {
        imageUrl: "/services/blog-3.png",
        altText: "Supply Chain Efficiency Blog",
        title: "Why End-to-End Manufacturing Improves Supply Chain Efficiency",
      },
    ],
  },

  // Global Reach Section
  globalReach: {
    title: "Need Large-Scale Manufacturing Capabilities?",
    description: "We can manufacture your products at scale for you, without any compromise on quality or deliveries",
  },

  // FAQ Section
  faq: [
    {
      title: "What types of products can BMRAJ manufacture under contract?",
      content: "We produce industrial packaging, containers, appliance parts, and caps or closures using blow and injection molding technologies.",
    },
    {
      title: "Can BMRAJ handle assembly and packaging too?",
      content: "Yes. We provide complete product assembly, fitting, and branding support, including component sourcing where required.",
    },
    {
      title: "How does BMRAJ ensure consistent quality in large orders?",
      content: "Every product batch undergoes in-house QA and testing for dimensional accuracy, strength, and compliance before shipment.",
    },
  ],
};

export default ContractManufacturingData;
