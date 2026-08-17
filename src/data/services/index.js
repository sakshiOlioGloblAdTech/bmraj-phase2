// Services Data - Single file with all services data

const servicesData = {
  // Plastic Injection Molding
  "plastic-injection-moulding": {
    slug: "plastic-injection-moulding",

    // Hero Section
    hero: {
      title: {
        line1: "Plastic Injection",
        line2: "Molding",
      },
      subtitle: "High-Volume Production of Durable Plastic Components, Done Right",
      heroImage: "/services/injection-moduling.png",
      buttons: [
        { text: "Get a Quote", link: "/quote", type: "primary" },
      ],
    },

    // Partner Section (Your Trusted Partner)
    partnerSection: {
      title: {
        line1: "Your Trusted",
        highlight: "Injection Molding Partner",
      },
      description: `BMRAJ provides reliable plastic injection molding services for industrial containers and packaging solutions. We manufacture caps, closures, containers, appliance parts, and custom components, all built with precision and quality consistency at scale.`,
      image: "/services/injection-moulding-partner.png",
      buttonText: "Get a Quote",
      buttonLink: "/contact-us",
      statCard: {
        value: "25+ Years of Molding Excellence",
        label: "Products with global brands.",
      },
    },

    // Capabilities Section
    capabilities: {
      title: {
        line1: "Capabilities:",
        highlight: "Ensuring Market-Winning Qualities",
      },
      buttonText: "Know More",
      buttonLink: "/about-us",
      items: [
        {
          id: 1,
          title: "Modern Injection Systems",
          description: "Multi-tonnage machines ensure uniform quality and dimensional accuracy across every part.",
        },
        {
          id: 2,
          title: "In-Mould Labeling (IML)",
          description: "Integrated decoration for branded cups, containers, and FMCG packaging.",
        },
        {
          id: 3,
          title: "Material Expertise",
          description: "Compatible with PP, HDPE, LDPE, ABS, HIPS, and other engineering-grade plastics.",
        },
        {
          id: 4,
          title: "Flexible Production",
          description: "Supports both large-volume runs and small custom batches with quick mould changeovers.",
        },
        {
          id: 5,
          title: "Mould Compatibility",
          description: "Works with client-supplied moulds or new moulds developed through trusted tooling partners.",
        },
        {
          id: 6,
          title: "Quality Assurance",
          description: "Every production run undergoes in-house QA testing for strength, finish, and consistency.",
        },
      ],
    },

    // Why Choose Section
    whyChoose: {
      title: {
        line1: "Why Choose BMRAJ",
        line2: "For",
        highlight: "Injection Molding?",
      },
      buttonText: "Get a Quote",
      buttonLink: "/quote",
      checklist: [
        "Consistent part quality is maintained across high-volume orders.",
        "Fast turnaround supported by automated, efficient production lines.",
        "Integrated molding, printing, and assembly under one roof.",
        "Proven reliability through 25+ years of manufacturing expertise.",
      ],
    },

    // Industry Section
    industrySection: {
      title: "Industries Served",
      description: "Deep industry knowledge is the foundation of a great partnership. Our team brings expertise to your specific challenges.",
      industries: [
        {
          id: "fmcg",
          title: "FMCG & Personal Care",
          description: "Caps, closures, jars, and packaging parts.",
          image: "/fmcg.png",
        },
        {
          id: "food-beverage",
          title: "Food & Dairy",
          description: "IML cups, containers, and tubs.",
          image: "/food-beverage.png",
        },
        {
          id: "homecare",
          title: "Home Appliances",
          description: "Injection-moulded parts and components for brands.",
          image: "/homecare.png",
        },
        {
          id: "healthcare",
          title: "Healthcare & Pharma",
          description: "Precision moulded bottles, caps, and lab components.",
          image: "/healthcare.png",
        },
        {
          id: "industrial",
          title: "Industrial Applications",
          description: "Technical parts for heavy-duty and OEM use.",
          image: "/industrial.png",
        },
      ],
    },

    // Blog Section
    blogSection: {
      title: "Blogs & Product Solutions",
      description: "Discover how we solve various packaging challenges.",
      viewAllButtonText: "Read All Articles",
      blogPosts: [
        {
          imageUrl: "/services/blog-1.png",
          altText: "Injection Molding Blog",
          title: "How Injection Molding Helps Brands Scale Faster",
        },
        {
          imageUrl: "/services/blog-2.png",
          altText: "IML Packaging Blog",
          title: "The Role of IML in Modern Packaging",
        },
        {
          imageUrl: "/services/blog-3.png",
          altText: "Quality Control Blog",
          title: "Quality Control in High-Volume Injection Molding",
        },
      ],
    },

    // Global Reach Section
    globalReach: {
      title: "Start Your Project with a Trusted Partner",
      description: "Tell us your requirement. We will provide a clear quote and a reliable production timeline.",
    },

    // FAQ Section
    faq: [
      {
        title: "Can BMRAJ use my existing moulds for production?",
        content: "Yes. We evaluate your moulds for compatibility and align them with our injection systems to ensure smooth production.",
      },
      {
        title: "What materials do you support?",
        content: "We mould a wide range of thermoplastics, including PP, HDPE, PET, LDPE, ABS, HIPS, and more, tailored to your application needs.",
      },
      {
        title: "Do you provide branding or finishing options?",
        content: "Yes, we offer in-mould labeling (IML), screen printing, and HTL decoration to create ready-to-market products.",
      },
    ],
  },

  // Plastic Blow Molding
  "plastic-blow-moulding": {
    slug: "plastic-blow-moulding",

    // Hero Section
    hero: {
      title: {
        line1: "Plastic Blow",
        line2: "Molding",
      },
      subtitle: "High-Performance Packaging & Containers for Industrial Applications",
      heroImage: "/services/blow-moduling.png",
      buttons: [
        { text: "Get a Quote", link: "/quote", type: "primary" },
      ],
    },

    // Partner Section
    partnerSection: {
      title: {
        line1: "Your Trusted",
        highlight: "Blow Molding Partner",
      },
      description: `BMRAJ offers advanced plastic blow molding services for manufacturing industrial drums, jerrycans, bottles, and custom containers. Our blow-moulded products are known for their strength, uniform wall thickness, and long-term durability, ensuring safe storage and transport for liquids, chemicals, and consumer goods.`,
      image: "/services/blow-moulding-partner.png",
      buttonText: "Get a Quote",
      buttonLink: "/contact-us",
      statCard: {
        value: "1M+ Units",
        label: "Monthly production capacity.",
      },
    },

    // Capabilities Section
    capabilities: {
      title: {
        line1: "Capabilities:",
        highlight: "Engineered for Strength, Consistency & Compliance",
      },
      buttonText: "Know More",
      buttonLink: "/about-us",
      items: [
        {
          id: 1,
          title: "Modern Blow Molding Systems",
          description: "20+ blow molding machines capable of producing containers from 1L to 250L.",
        },
        {
          id: 2,
          title: "Double-Layer Drums",
          description: "Contamination-free inner layers for food, pharma, and high-purity applications.",
        },
        {
          id: 3,
          title: "Material Expertise",
          description: "Supports virgin HDPE and PP materials, ensuring superior impact and chemical resistance.",
        },
        {
          id: 4,
          title: "Design Flexibility",
          description: "Wide variety of container shapes and neck types for industrial and FMCG packaging.",
        },
        {
          id: 5,
          title: "High Production Capacity",
          description: "Over one million units monthly, with 24/7 production for large-scale demands.",
        },
        {
          id: 6,
          title: "UN & ISO Compliance",
          description: "All products undergo drop, leak, and stack testing for safety and global compliance.",
        },
      ],
    },

    // Why Choose Section
    whyChoose: {
      title: {
        line1: "Why Choose BMRAJ",
        line2: "For",
        highlight: "Blow Molding?",
      },
      buttonText: "Get a Quote",
      buttonLink: "/quote",
      checklist: [
        "Built-to-spec containers that maintain uniform performance and durability across production batches.",
        "Flexible molding capability to accommodate diverse shapes, capacities, and industry standards.",
        "Integrated blow molding, labeling, and quality control ensure faster, coordinated delivery cycles.",
        "Trusted by leading brands for dependable, high-volume supply and export-ready packaging.",
      ],
    },

    // Industry Section
    industrySection: {
      title: "Industries Served",
      description: "Deep industry knowledge is the foundation of a great partnership. Our team brings expertise to your specific challenges.",
      industries: [
        {
          id: "industrial",
          title: "Lubricants & Oils",
          description: "Jerrycans, bottles, and drums designed for leak-proof storage.",
          image: "/industrial.png",
        },
        {
          id: "chemicals",
          title: "Chemicals & Solvents",
          description: "UN-approved containers ensuring safe material handling.",
          image: "/industry-chemicals.png",
        },
        {
          id: "food-beverage",
          title: "Food & Beverage",
          description: "Food-grade bottles and jars for syrups and edible oils.",
          image: "/food-beverage.png",
        },
        {
          id: "pesticides-fertilizers",
          title: "Agrochemicals",
          description: "Heavy-duty, chemical-resistant packaging for pesticides and fertilizers.",
          image: "/pesticides-fertilizers.png",
        },
        {
          id: "healthcare",
          title: "Pharmaceuticals",
          description: "Sterile-grade bottles and drums for liquid formulations.",
          image: "/healthcare.png",
        },
      ],
    },

    // Blog Section
    blogSection: {
      title: "Blogs & Product Solutions",
      description: "Discover how we solve various packaging challenges.",
      viewAllButtonText: "Read All Articles",
      blogPosts: [
        {
          imageUrl: "/services/blog-1.png",
          altText: "Blow Molding Blog",
          title: "The Advantages of Double-Layer Blow Molding",
        },
        {
          imageUrl: "/services/blog-2.png",
          altText: "Industrial Packaging Blog",
          title: "Choosing the Right Container for Industrial Storage",
        },
        {
          imageUrl: "/services/blog-3.png",
          altText: "Quality Standards Blog",
          title: "Meeting UN/ISO Standards in Plastic Drum Manufacturing",
        },
      ],
    },

    // Global Reach Section
    globalReach: {
      title: "Start Your Project with a Reliable Manufacturing Partner",
      description: "Share your container requirements, and our experts will provide design guidance and a production quote.",
    },

    // FAQ Section
    faq: [
      {
        title: "What capacities can BMRAJ manufacture under blow molding?",
        content: "We produce containers ranging from 1L to 250L, suitable for diverse industrial and commercial applications.",
      },
      {
        title: "Are your blow-moulded products UN-certified?",
        content: "Yes. Many of our drums and containers meet UN standards for hazardous goods transport and export packaging.",
      },
      {
        title: "Can you develop custom container designs?",
        content: "Yes. We offer full customization for shape, capacity, colour, and branding to meet your specific packaging goals.",
      },
    ],
  },

  // End To End Assembly
  "end-to-end-assembly": {
    slug: "end-to-end-assembly",

    // Hero Section
    hero: {
      title: {
        line1: "End To End",
        line2: "Manufacturing",
      },
      subtitle: "Integrated Plastic Manufacturing for Packaging & Storage Products",
      heroImage: "/services/end-to-end.png",
      buttons: [
        { text: "Get a Quote", link: "/quote", type: "primary" },
      ],
    },

    // Partner Section
    partnerSection: {
      title: {
        line1: "Your Trusted",
        highlight: "Assembly",
        line2: "Partner",
      },
      description: `BMRAJ offers complete, end-to-end packaging and storage product manufacturing services that take your product from concept to final delivery. From mould discussions and production alignment to molding, printing, assembly, and packaging, every stage is managed in-house to ensure speed, quality, and cost control.`,
      image: "/services/assembly-partner.png",
      buttonText: "Get a Quote",
      buttonLink: "/contact-us",
      statCard: {
        value: "Complete Integration",
        label: "From components to finished goods.",
      },
    },

    // Capabilities Section
    capabilities: {
      title: {
        line1: "Capabilities:",
        highlight: "Built for Scale, Accuracy & Speed",
      },
      buttonText: "Know More",
      buttonLink: "/about-us",
      items: [
        {
          id: 1,
          title: "Mould Alignment & Setup",
          description: "We work with client-supplied moulds or use available in-house moulds to begin production quickly and efficiently.",
        },
        {
          id: 2,
          title: "Injection & Blow Molding",
          description: "In-house production units equipped with automated machinery for large-volume and custom batch manufacturing.",
        },
        {
          id: 3,
          title: "Printing & Labeling",
          description: "Integrated IML, screen printing, and heat transfer labeling for retail and industrial packaging finishes.",
        },
        {
          id: 4,
          title: "Assembly & Integration",
          description: "Manual and semi-automated lines for component fitting, sealing, and packaging assembly.",
        },
        {
          id: 5,
          title: "Quality Testing & Validation",
          description: "Drop, leak, and stack tests are performed in our QA lab for every production batch.",
        },
        {
          id: 6,
          title: "Packaging & Dispatch",
          description: "Final inspection, labeling, and packaging are handled in-house for ready-to-ship finished goods.",
        },
      ],
    },

    // Why Choose Section
    whyChoose: {
      title: {
        line1: "Why Choose BMRAJ",
        line2: "For",
        highlight: "End-to-End Manufacturing?",
      },
      buttonText: "Get a Quote",
      buttonLink: "/quote",
      checklist: [
        "Single-source production eliminates vendor dependency and coordination delays.",
        "All manufacturing stages, from molding to packaging, are managed within our facility.",
        "Proven track record in maintaining high-volume output with on-time deliveries.",
        "Experienced teams ensure consistency, compliance, and product reliability across every order.",
      ],
    },

    // Industry Section
    industrySection: {
      title: "Industries Served",
      description: "Deep industry knowledge is the foundation of a great partnership. Our team brings expertise to your specific challenges.",
      industries: [
        {
          id: "fmcg",
          title: "FMCG & Personal Care",
          description: "Containers, jars, caps and closures for packaging lines.",
          image: "/fmcg.png",
        },
        {
          id: "food-beverage",
          title: "Food & Dairy",
          description: "Moulded cups, tubs, and packaging components with branding options.",
          image: "/food-beverage.png",
        },
        {
          id: "healthcare",
          title: "Pharma & Healthcare",
          description: "Safe, compliant packaging components for regulated use.",
          image: "/healthcare.png",
        },
        {
          id: "industrial",
          title: "Industrial Applications",
          description: "Heavy-duty components and multi-part assemblies.",
          image: "/industrial.png",
        },
        {
          id: "homecare",
          title: "Consumer Utilities",
          description: "Finished plastic products and packaging components for manufacturing brands.",
          image: "/homecare.png",
        },
      ],
    },

    // Blog Section
    blogSection: {
      title: "Blogs & Product Solutions",
      description: "Discover how we solve various manufacturing challenges.",
      viewAllButtonText: "Read All Articles",
      blogPosts: [
        {
          imageUrl: "/services/blog-1.png",
          altText: "Assembly Services Blog",
          title: "Benefits of End-to-End Assembly Services",
        },
        {
          imageUrl: "/services/blog-2.png",
          altText: "Quality Control Blog",
          title: "Quality Control in Product Assembly",
        },
        {
          imageUrl: "/services/blog-3.png",
          altText: "Supply Chain Blog",
          title: "How Integrated Assembly Improves Supply Chain",
        },
      ],
    },

    // Global Reach Section
    globalReach: {
      title: "Build Smarter Supply Chains with End-to-End Control",
      description: "Partner with BMRAJ for coordinated production that ensures consistency, quality, and delivery, every time.",
    },

    // FAQ Section
    faq: [
      {
        title: "Does BMRAJ design new moulds?",
        content: "BMRAJ does not design or manufacture new moulds. We work with existing client moulds or evaluate available in-house moulds to ensure alignment for production.",
      },
      {
        title: "What processes are covered under end-to-end manufacturing?",
        content: "The process includes mould setup, plastic molding (injection and blow), printing, assembly, testing, and packaging, all under one roof.",
      },
      {
        title: "Can I outsource only a specific stage of production?",
        content: "Yes. BMRAJ provides flexibility, you can opt for complete manufacturing or specific services such as molding, printing, or assembly.",
      },
    ],
  },
};

// Helper functions
export const getAllServiceSlugs = () => {
  return Object.keys(servicesData);
};

export const getServiceData = (slug) => {
  return servicesData[slug] || null;
};

export default servicesData;
