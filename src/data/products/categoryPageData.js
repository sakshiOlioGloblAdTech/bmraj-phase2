// Data for Product Category Pages

import { generateCategoryBreadcrumbs } from "@/utils/breadcrumbs";
import {
  ChemicalsIcon,
  PesticidesIcon,
  FoodBeverageIcon,
  FMCGIcon,
  IndustrialIcon,
  AutomotiveIcon,
  HomecareIcon,
  PersonalCareIcon,
  CapsClosuresIcon,
  HealthcareIcon
} from "@/data/industries";

export const allCategoryData = {
  'drums-and-barrels': {
    name: 'Drums & Barrels',
    slug: 'drums-and-barrels',
    IndustrialHero: {
      title: 'Industrial Drums & Barrels',
      subtitle: "BMRAJ's HDPE drums and barrels are engineered for strength, safety, and compliance. From chemicals to food-grade goods, our containers ensure secure storage and reliable transport across industries worldwide.",
      image: '/category/industrial-drums-hero.png',
      durableSection: {
        titleHighlight: "Durable & Secure Containers",
        titleNormal: "for Industrial Applications",
        description: "Our comprehensive range of drums and barrels provides secure and efficient solutions for storing and transporting a wide variety of materials, including hazardous chemicals, lubricants, agro-products, and food-grade goods."
      }
    },
    categoryStats: [
      {
        id: 'durability',
        title: 'Durability',
        subtitle: 'High-grade HDPE construction resists impact, corrosion, and chemical exposure.'
      },
      {
        id: 'containment',
        title: 'Containment',
        subtitle: 'Leak-proof designs with UN certification safeguard hazardous and sensitive products.'
      },
      {
        id: 'easy-handling',
        title: 'Easy Handling',
        subtitle: 'Stackable shapes and standard sizes simplify storage and logistics operations.'
      },
      {
        id: 'versatile',
        title: 'Versatile',
        subtitle: 'Available in open-top, narrow-mouth, and customized options for varied applications.'
      }
    ],
    productLine: {
      title: 'Our Range of Drums & Barrels',
      description: 'Precision-engineered industrial containers, from 30L to 250L capacity, are designed for safe transport and efficient material handling.',
      categories: [
        {
          name: 'Full Open Top Drums',
          slug: 'full-open-top-drums',
          image: '/category/full-open-top-drums.png',
          description: 'Wide opening for easy filling and cleaning'
        },
        {
          name: 'Wide/Narrow Mouth Drum',
          slug: 'wide-narrow-drum',
          image: '/category/wide-narrow drums.png',
          description: 'Versatile drums for different applications'
        },
        {
          name: 'Rocket Drums',
          slug: 'rocket-drums',
          image: '/category/rocket-drum.png',
          description: 'Specialized design for secure storage'
        },
        {
          name: 'Oil & Grease Containers',
          slug: 'oil-grease-containers',
          image: '/category/mouth-drum.png',
          description: 'Designed for petroleum products'
        },
        {
          name: 'Barrels',
          slug: 'barrels',
          image: '/listing/barrels/210-ltr-l-ring-type-drum.png',
          description: 'Heavy-duty storage solutions'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'UN-Certified Safety',
          content: 'Tested and certified containers ensure global compliance for hazardous goods transport.'
        },
        {
          title: 'Advanced HDPE Materials',
          content: 'Virgin-grade resins deliver superior chemical resistance and long-lasting performance.'
        },
        {
          title: 'Precision Blow Molding',
          content: 'Uniform wall thickness guarantees consistent durability across all drum sizes.'
        },
        {
          title: 'Tailored Configurations',
          content: 'Flexible options in design, capacity, and fittings to suit unique business needs.'
        },
        {
          title: 'Proven Export Reliability',
          content: 'Trusted record of supplying secure packaging solutions for domestic and international logistics.'
        }
      ]
    },
    faq: [
      {
        title: 'What capacities do BMRAJ drums come in?',
        content: 'Our range spans from 30L to 250L, suitable for multiple industries and applications.'
      },
      {
        title: 'Are your drums UN-certified for hazardous goods?',
        content: 'Yes, many of our drums meet UN standards for safe international transport of chemicals.'
      },
      {
        title: 'Can I order customized drums?',
        content: 'Yes, we offer customization in colours, fittings, and branding to meet operational and marketing needs'
      }
    ],
    industrySection: {
      title: 'Trusted Across Heavy-Duty Industrial Sectors',
      description: 'Our drums and barrels serve industries that demand secure, compliant, and durable storage for hazardous and bulk materials.',
      industries: [
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'UN-certified drums for safe storage and transport of hazardous chemicals and industrial solvents.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Chemical-resistant containers for pesticides, herbicides, and agricultural formulations.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        },
        {
          id: 'food-beverage',
          title: 'Food & Beverage',
          description: 'Food-grade drums for bulk storage of edible oils, syrups, and food-safe liquids.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable packaging solutions for fast-moving consumer goods and retail products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'industrial',
          title: 'Industrial',
          description: 'Heavy-duty drums for industrial applications and manufacturing processes.',
          image: '/industrial.png',
          icon: <IndustrialIcon />
        },
        {
          id: 'automotive',
          title: 'Automotive',
          description: 'Leak-proof barrels designed for motor oils, industrial lubricants, and automotive fluids.',
          image: '/automotive.png',
          icon: <AutomotiveIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable containers for household cleaning products and home care solutions.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Safe packaging for personal care products and cosmetic formulations.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        }
      ]
    },
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Browse our complete range of industrial storage and packaging solutions.",
      products: [
        {
          id: 1,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 2,
          title: "Blow Molding Accessories",
          slug: "blow-molding-accessories",
          image: "/product-image/Blow-moulding-accesories-01.png",
          bgColor: "#E1BEE7",
          description: "High-quality caps, plugs, handles, and clamps engineered to complement our blow-moulded packaging solutions.",
        },
        {
          id: 3,
          title: "Jerrycans & Polycans",
          slug: "jerrycans-polycans",
          image: "/product-image/Jerrycans-polycans-1.png",
          bgColor: "#E8F5E9",
          description: "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
        },
        {
          id: 4,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#FFE0B2",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },

      ]
    }
  },

  'jerrycans-polycans': {
    name: 'Jerrycans & Polycans',
    slug: 'jerrycans-polycans',
    IndustrialHero: {
      title: 'HDPE Jerrycans & Polycans',
      subtitle: "BMRAJ's HDPE jerrycans and polycans are designed for strength, leak resistance, and compliance with global packaging standards. Built for safe handling and transportation of liquids, semi-liquids, and chemicals, these containers deliver unmatched reliability and long service life in industrial use.",
      image: '/category/jerrycans-polycans-hero.png',
      floatingItems: [
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Small Bottles",
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Small Bottles"
      ],
      durableSection: {
        titleHighlight: "Durable, Portable &",
        titleNormal: "Industry-Ready Packaging",
        description: "BMRAJ’s jerrycans and polycans are engineered for superior performance in liquid packaging and storage. Using virgin-grade High-Density Polyethylene (HDPE) and precision blow molding technology, we ensure containers that meet the toughest demands of chemical, lubricant, and agro-industrial applications."
      }
    },
    categoryStats: [
      {
        id: 'durability',
        title: 'Durability',
        subtitle: 'Virgin HDPE construction provides impact resistance and long-term strength.'
      },
      {
        id: 'leak-proof',
        title: 'Leak-Proof Design',
        subtitle: 'Uniform wall thickness and secure capping ensure zero leakage during filling, storage, or transport.'
      },
      {
        id: 'easy-handling',
        title: 'Ease of Handling',
        subtitle: 'Compact, ergonomic shapes with integrated handles allow effortless pouring, stacking, and carrying.'
      },
      {
        id: 'versatile',
        title: 'Versatile',
        subtitle: 'Available in multiple capacities, neck designs, and mouth diameters for specific industrial needs.'
      }
    ],
    productLine: {
      title: 'Our Range of Jerrycans & Polycans',
      description: 'BMRAJ offers a comprehensive range of high-performance jerrycans and polycans designed to meet diverse industrial liquid packaging requirements.',
      categories: [
        {
          name: 'HDPE Jerrycans',
          slug: 'hdpe-jerrycans',
          image: '/category/jerrycans-polycans/hdpe-Jerrycans.png',
          description: 'Safe, convenient, and efficient handling of industrial liquids'
        },
        {
          name: 'Polycans',
          slug: 'polycans',
          image: '/category/jerrycans-polycans/polycan-mouser.png',
          description: 'Versatile containers for various industrial applications'
        }
      ]
    },
    industrySection: {
      title: 'Trusted Across Diverse Industrial Applications',
      description: 'Our HDPE jerrycans and polycans are used by industries that require safe, compliant, and cost-effective liquid storage solutions.',
      industries: [
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'Chemical-resistant polycans for safe storage and transport of industrial chemicals and solvents.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Durable containers for pesticides, herbicides, and liquid fertilizer formulations.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        },
        {
          id: 'food-beverage',
          title: 'Food & Beverage',
          description: 'Food-grade jerrycans for beverage concentrates, edible oils, and food-safe liquids.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable packaging solutions for fast-moving consumer goods and retail products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable containers for household cleaning products and home care solutions.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Safe packaging for personal care products and cosmetic formulations.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'industrial',
          title: 'Industrial',
          description: 'Heavy-duty jerrycans for industrial applications and manufacturing processes.',
          image: '/industrial.png',
          icon: <IndustrialIcon />
        },
        {
          id: 'automotive',
          title: 'Automotive',
          description: 'Leak-proof jerrycans designed for motor oils, industrial lubricants, and automotive fluids.',
          image: '/automotive.png',
          icon: <AutomotiveIcon />
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Leak-Proof Assurance',
          content: 'Each container is blow-moulded with precision for uniform wall thickness and zero leakage.'
        },
        {
          title: 'Chemical Compatibility',
          content: 'Tested against a wide range of oils, solvents, and agro formulations for chemical stability.'
        },
        {
          title: 'Custom Configurations',
          content: 'Available in single- or double-layer HDPE, with various mouth diameters and neck styles.'
        },
        {
          title: 'Global Compliance',
          content: 'Manufactured under ISO 9001:2015 with UN-certified options for export packaging.'
        },
        {
          title: 'Proven Reliability',
          content: 'Preferred by lubricant, agrochemical, and industrial brands for quality and timely delivery.'
        }
      ]
    },
    certifications: {
      title: 'Our Certifications',
      certificationName: 'ISO 9001 & MSME',
      certificationIcon: '/zed-gold.png',
      certificationText: 'ZED Gold',
      row1Items: [
        'Quality Management',
        'Swachh Workplace',
        'Workplace Safety',
        'Process Control',
        'Measurement of Timely Delivery',
        'Human Resource Management'
      ],
      row2Items: [
        'Daily Works Management',
        'Product Quality & Safety',
        'Material Management',
        'Energy Management',
        'Environment Management'
      ],
      row3Items: [
        'Risk Management',
        'Waste Management',
        'Technology Selection & Upgradation',
        'Natural Resource Conservation',
        'Corporate Social Responsibility'
      ]
    },
    blogSection: {
      title: 'Expert Knowledge for Your Industry',
      description: 'Stay informed about packaging innovations, safety standards, and material advancements from our in-house experts.'
    },
    GlobalReachSection: {
      title: 'Get the Right Jerrycan or Polycan for Your Application',
      description: 'From chemicals and lubricants to food-grade formulations, BMRAJ offers HDPE containers that deliver performance, safety, and consistency at scale.'
    },
    faq: [
      {
        title: 'What are the available capacities for BMRAJ jerrycans and polycans?',
        content: 'Our range covers 3 LTR to 35 LTR, meeting both small and industrial-scale storage needs.'
      },
      {
        title: 'Are these suitable for chemicals and lubricants?',
        content: 'Yes. Made from virgin HDPE, all models are tested for compatibility with oils, solvents, agrochemicals, and industrial liquids.'
      },
      {
        title: 'Can jerrycans and polycans be customized?',
        content: 'Absolutely. We offer complete customization in colour, design, and branding as per client requirements.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Discover our complete range of industrial packaging and storage solutions.",
      products: [
        {
          id: 1,
          title: "Industrial Crates",
          slug: "crates",
          image: "/product-image/Crates-1.png",
          bgColor: "#FFCCBC",
          description: "Durable milk, fruit, and vegetable crates that ensure long-lasting performance in demanding handling environments.",
        },
        {
          id: 2,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#FFE0B2",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },
        {
          id: 3,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 4,
          title: "Blow Molding Accessories",
          slug: "blow-molding-accessories",
          image: "/product-image/Blow-moulding-accesories-01.png",
          bgColor: "#E1BEE7",
          description: "High-quality caps, plugs, handles, and clamps engineered to complement our blow-moulded packaging solutions.",
        },
      ]
    }
  },

  'plastic-buckets-and-pails': {
    name: 'Plastic Buckets & Pails',
    slug: 'plastic-buckets-pails',
    IndustrialHero: {
      title: 'Plastic Buckets & Pails',
      subtitle: "BMRAJ's range of industrial plastic buckets and pails is built for strength, dimensional stability, and long-term performance. Made using virgin Polypropylene Copolymer (PPCP) through advanced injection molding, these containers ensure secure, tamper-proof packaging for lubricants, greases, paints, and food-grade products.",
      image: '/category/plastic-buckets-hero.png',
      floatingItems: [
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Small Bottles",
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Small Bottles"
      ],
      durableSection: {
        titleHighlight: "Convenient Containers",
        titleNormal: "for Industrial Packaging",
        description: "Our range of buckets and pails is designed to meet the diverse storage and transportation needs of various industries. Made using precision injection molding with virgin Polypropylene Copolymer (PPCP), these containers offer excellent impact strength, chemical resistance, and leak-proof performance."
      }
    },
    categoryStats: [
      {
        id: 'durability',
        title: 'Durability',
        subtitle: 'Heavy-duty construction and impact-resistant design ensure performance under industrial handling conditions.'
      },
      {
        id: 'containment',
        title: 'Tamper-Proof Protection',
        subtitle: 'Secure locking lids and sealing mechanisms prevent leakage, contamination, and unauthorized access.'
      },
      {
        id: 'versatile',
        title: 'Versatility',
        subtitle: 'Available in round and square shapes with handle and lid options, suitable for lubricants, paints, adhesives, and food products.'
      },
      {
        id: 'easy-handling',
        title: 'Ease of Handling',
        subtitle: 'Ergonomic grips and nesting-friendly shapes make these pails easy to store, stack, and transport.'
      }
    ],
    productLine: {
      title: 'Our Range of Plastic Buckets & Pails',
      description: 'BMRAJ offers precision-engineered buckets and pails built for durability, leak resistance, and easy handling under rigorous industrial packaging conditions.',
      categories: [
        {
          name: 'Grease Plastic Pail Containers (PPCP)',
          slug: 'grease-plastic-pail-containers',
          image: '/category/plastic-buckets-pails/grease-plastic-pail.png',
          description: 'Heavy-duty pails for grease and lubricant storage'
        },
        {
          name: 'Lubricant Oil Pail Buckets (PPCP)',
          slug: 'lubricant-oil-pail-buckets',
          image: '/category/plastic-buckets-pails/lubricant-oil-pail.png',
          description: 'Secure containers for lubricant and oil packaging'
        }
      ]
    },
    industrySection: {
      title: 'Trusted by Top Industries for Secure & Compliant Packaging',
      description: 'We manufacture buckets and pails engineered to perform reliably across multiple industrial applications.',
      industries: [
        {
          id: 'food-beverage',
          title: 'Food & Beverages',
          description: 'Food-grade pails for edible oils, syrups, and food-safe bulk ingredients.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable packaging solutions for fast-moving consumer goods and retail products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable containers for household cleaning products and home care solutions.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Durable containers for cosmetic ingredients, lotions, and personal care products.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'Heavy-duty pails for safe storage and transport of industrial chemicals and solvents.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Chemical-resistant buckets for pesticides, herbicides, and liquid fertilizer storage.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Precision Injection Molding',
          content: 'Every bucket and pail is produced with dimensional accuracy, ensuring a uniform finish and secure sealing.'
        },
        {
          title: 'Material Superiority (PPCP)',
          content: 'PPCP enhances superior strength and sealing performance; select models also use virgin HDPE as required.'
        },
        {
          title: 'Tamper-Proof & Leak-Proof Design',
          content: 'Designed with secure lids and locking systems to prevent spillage or contamination.'
        },
        {
          title: 'Customizable Options',
          content: 'Available in multiple colours, handle types, and branding options (printing or embossed logos).'
        },
        {
          title: 'Certified Quality Standards',
          content: 'Manufactured under ISO 9001:2015 with proven performance in leak tests, load-bearing, and drop impact evaluations.'
        }
      ]
    },
    certifications: {
      title: 'Our Certifications',
      certificationName: 'ISO 9001 & MSME',
      certificationIcon: '/zed-gold.png',
      certificationText: 'ZED Gold',
      row1Items: [
        'Quality Management',
        'Swachh Workplace',
        'Workplace Safety',
        'Process Control',
        'Measurement of Timely Delivery',
        'Human Resource Management'
      ],
      row2Items: [
        'Daily Works Management',
        'Product Quality & Safety',
        'Material Management',
        'Energy Management',
        'Environment Management'
      ],
      row3Items: [
        'Risk Management',
        'Waste Management',
        'Technology Selection & Upgradation',
        'Natural Resource Conservation',
        'Corporate Social Responsibility'
      ]
    },
    blogSection: {
      title: 'Expert Knowledge for Your Industry',
      description: 'Stay updated with our insights on chemical-safe packaging, material innovations, and container compliance trends.'
    },
    
    GlobalReachSection: {
      title: 'Quality Bottles & Containers to Make Your Product Stand Out',
      description: "Whether for lubricants, paints, or food products, BMRAJ's buckets and pails deliver industrial-grade strength, quality, and reliability at scale."
    },
    faq: [
      {
        title: 'What materials are used in BMRAJ buckets and pails?',
        content: 'We primarily use virgin Polypropylene Copolymer (PPCP) for its strength, sealing, and heat resistance. Some models are also offered in virgin High-Density Polyethylene (HDPE) for specific use cases.'
      },
      {
        title: 'What applications are these used for?',
        content: 'Our product range includes models suited for grease, lubricant, paint, and bulk material packaging, with specific capacities detailed on product pages.'
      },
      {
        title: 'Can buckets be customized for branding or design?',
        content: 'Yes. We offer custom options in colour, handle type, labeling, and logo printing to align with client brand requirements.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Browse our complete range of industrial storage and packaging solutions.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: 'drums-and-barrels',
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Jerrycans & Polycans",
          slug: "jerrycans-polycans",
          image: "/product-image/Jerrycans-polycans-1.png",
          bgColor: "#E8F5E9",
          description: "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
        },
        {
          id: 3,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 4,
          title: "Food Packaging",
          slug: "food-packaging",
          image: "/product-image/Food-packaging-001.png",
          bgColor: "#FFF9C4",
          description: "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
        },
      ]
    }
  },

  'small-bottles-containers': {
    name: 'Small Bottles & Containers',
    slug: 'small-bottles-containers',
    IndustrialHero: {
      title: 'Small Bottles & Containers',
      subtitle: "BMRAJ's range of small bottles and containers is designed for strength, precision, and reliability. Manufactured using virgin High-Density Polyethylene (HDPE) and Polyethylene Terephthalate (PET) through advanced blow molding, these containers provide durable and compliant packaging for lubricants, agrochemicals, pharmaceuticals, and personal care products.",
      image: '/category/small-bottles-hero.png',
      floatingItems: [
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums  & Barrels",
        "Small Bottles",
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums  & Barrels",
        "Small Bottles",
      ],
      durableSection: {
        titleHighlight: "Compact, Reliable, and",
        titleNormal: "Application-Ready Packaging",
        description: "Our small bottles and containers are engineered for industries that demand safe storage, chemical compatibility, and professional presentation. Using precision blow molding and high-grade raw materials, BMRAJ delivers bottles that combine toughness, clarity, and functional design."
      }
    },
    categoryStats: [
      {
        id: 'durability',
        title: 'Durability',
        subtitle: 'Impact-resistant construction ensures protection against drops, pressure, and reactive contents.'
      },
      {
        id: 'compatibility',
        title: 'Compatibility',
        subtitle: 'Tested for resistance against oils, solvents, and industrial chemicals.'
      },
      {
        id: 'versatility',
        title: 'Versatility',
        subtitle: 'Available in narrow- and wide-mouth variants with multiple closure options for various filling needs.'
      },
      {
        id: 'quality-production',
        title: 'Quality Production',
        subtitle: 'Manufactured under strict quality control for uniform wall thickness and leak-proof sealing.'
      }
    ],
    productLine: {
      title: 'Our Range of Small Bottles & Containers',
      description: 'BMRAJ offers compact, durable packaging solutions suitable for liquid, viscous, and powdered contents used across industrial sectors.',
      categories: [
        {
          name: 'Small Bottles (HDPE / PET)',
          slug: 'small-bottles',
          image: '/category/small-bottles-containers/small-bottles.png',
          description: 'Durable bottles for lubricants, chemicals, and pharmaceuticals'
        },
        {
          name: 'Multi-Purpose Containers',
          slug: 'multipurpose-containers',
          image: '/category/small-bottles-containers/multipurpose-containers.png',
          description: 'Versatile containers for diverse industrial applications'
        },
        {
          name: 'Containers for Lubricants',
          slug: 'containers-for-lubricants',
          image: '/category/small-bottles-containers/containers-for-lubricants.png',
          description: 'Specialized containers designed for lubricant storage'
        }
      ]
    },
    industrySection: {
      title: 'Trusted by Leading Industrial Manufacturers',
      description: "BMRAJ's small bottles and containers serve diverse industrial sectors requiring quality packaging for both liquid and viscous materials.",
      industries: [
        {
          id: 'caps-closures',
          title: 'Caps and Closures',
          description: 'High-quality caps and closures for secure sealing and tamper-evident packaging.',
          image: '/caps-closures.png',
          icon: <CapsClosuresIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Chemical-resistant containers for pesticides, herbicides, and agricultural solutions.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Attractive and durable containers for cosmetics, lotions, and personal care products.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'Precision ingredients and compounds that drive innovation across chemical manufacturing.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable packaging solutions for fast-moving consumer goods and retail products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'automotive',
          title: 'Automotive',
          description: 'High-quality packaging solutions for lubricants, motor oils, and automotive fluids.',
          image: '/automotive.png',
          icon: <AutomotiveIcon />
        },
        {
          id: 'food-beverage',
          title: 'Food & Beverages',
          description: 'Food-grade containers for beverage concentrates and food-safe applications.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable containers for household cleaning products and home care solutions.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'industrial',
          title: 'Industrial',
          description: 'Heavy-duty containers for industrial applications and manufacturing processes.',
          image: '/industrial.png',
          icon: <IndustrialIcon />
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Precision Blow Molding',
          content: 'Our bottles and containers ensure perfect wall consistency and leak-proof sealing.'
        },
        {
          title: 'Advanced Material Selection (HDPE / PET)',
          content: 'Virgin HDPE offers chemical strength, while PET provides superior strength against oxygen and moisture.'
        },
        {
          title: 'Leak-Proof & Tamper-Resistant',
          content: 'Secure closures ensure spill-free transport and contamination protection.'
        },
        {
          title: 'Custom Design & Branding',
          content: 'Available in varied colours, cap styles, and printing options for brand alignment.'
        },
        {
          title: 'Certified Manufacturing Standards',
          content: 'Produced under ISO 9001:2015 with rigorous testing for compliance and durability.'
        }
      ]
    },
    certifications: {
      title: 'Our Certifications',
      certificationName: 'ISO 9001 & MSME',
      certificationIcon: '/zed-gold.png',
      certificationText: 'ZED Gold',
      row1Items: [
        'Quality Management',
        'Swachh Workplace',
        'Workplace Safety',
        'Process Control',
        'Measurement of Timely Delivery',
        'Human Resource Management'
      ],
      row2Items: [
        'Daily Works Management',
        'Product Quality & Safety',
        'Material Management',
        'Energy Management',
        'Environment Management'
      ],
      row3Items: [
        'Risk Management',
        'Waste Management',
        'Technology Selection & Upgradation',
        'Natural Resource Conservation',
        'Corporate Social Responsibility'
      ]
    },
    blogSection: {
      title: 'Expert Knowledge for Your Industry',
      description: 'Stay updated with insights on packaging innovation, compliance standards, and storage best practices from our in-house experts.'
    },
    GlobalReachSection: {
      title: 'Custom Bottles & Containers for Every Industry',
      description: "From lubricants to pharmaceuticals, BMRAJ builds packaging solutions that balance reliability, strength, and visual appeal."
    },
    faq: [
      {
        title: 'What materials are used to manufacture BMRAJ bottles and containers?',
        content: 'We use virgin High-Density Polyethene (HDPE) and Polyethene Terephthalate (PET) for exceptional strength, safety, and to act as a barrier against oxygen and moisture. HDPE for products requiring chemical resistance against acids, bases, and aggressive solvents. While PET is used for products requiring transparency and superior oxygen/moisture barrier properties.'
      },
      {
        title: 'What capacity range do you offer?',
        content: 'Our bottles and containers typically range from 100 ml to 1000 ml, depending on the application and design.'
      },
      {
        title: 'Can bottles and containers be customized?',
        content: 'Yes. We offer complete customization in colour, closure type, labeling, and printing for brand-specific packaging.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Browse our complete range of industrial packaging and storage solutions.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: 'drums-and-barrels',
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Jerrycans & Polycans",
          slug: "jerrycans-polycans",
          image: "/product-image/Jerrycans-polycans-1.png",
          bgColor: "#E8F5E9",
          description: "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
        },
        {
          id: 3,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 4,
          title: "Food Packaging",
          slug: "food-packaging",
          image: "/product-image/Food-packaging-001.png",
          bgColor: "#FFF9C4",
          description: "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
        },
      ]
    }
  },

  'pet-bottles-preforms': {
    name: 'PET Bottles & Preforms',
    slug: 'pet-bottles-preforms',
    IndustrialHero: {
      title: 'PET Bottles & Preforms',
      subtitle: "BMRAJ's range of small bottles and pre-forms is designed for transparency, strength, and global-grade performance. Manufactured using virgin Polyethylene Terephthalate (PET) through precision blow and injection molding, these containers support applications from lubricants and agrochemicals to personal care and food-grade products.",
      image: '/category/pet-bottles-hero.png',
      floatingItems: [
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums  & Barrels",
        "Small Bottles",
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums  & Barrels",
        "Small Bottles",
      ],
      durableSection: {
        titleHighlight: "Transparent, Durable &",
        titleNormal: "Industry-Compliant Packaging Solutions",
        description: "Our PET bottles and preforms are designed for applications demanding lightweight strength, visual clarity, and contamination-free storage. Using high-quality virgin PET, every unit meets international standards for consistency, barrier performance, and recyclability."
      }
    },
    categoryStats: [
      {
        id: 'clarity',
        title: 'Clarity & Aesthetics',
        subtitle: 'High transparency for excellent product visibility and shelf appeal.'
      },
      {
        id: 'lightweight',
        title: 'Lightweight Strength',
        subtitle: 'Superior rigidity at reduced material weight for cost-efficient transport.'
      },
      {
        id: 'leak-proof',
        title: 'Leak-Proof Integrity',
        subtitle: 'Precision-threaded necks and uniform walls ensure reliable sealing.'
      },
      {
        id: 'flexibility',
        title: 'Design Flexibility',
        subtitle: 'Available in multiple neck sizes, capacities, and preform weights for custom bottle conversion.'
      }
    ],
    productLine: {
      title: 'Our Range of PET Bottles & Preforms',
      description: 'BMRAJ manufactures standard and custom PET bottles and preforms for industrial and commercial applications, ensuring compliance and visual appeal.',
      categories: [
        {
          name: 'PET Bottles',
          slug: 'pet-bottles',
          image: '/category/pet-bottles-preforms/pet-bottles.png',
          description: 'High-clarity bottles for beverages, cosmetics, and industrial applications'
        },
        {
          name: 'PET Preforms',
          slug: 'preforms',
          image: '/category/pet-bottles-preforms/preforms.png',
          description: 'Precision-moulded preforms for custom bottle conversion'
        }
      ]
    },
    industrySection: {
      title: 'Trusted in High-Demand Manufacturing & Packaging Sectors',
      description: 'Our PET bottles and preforms are widely used by leading manufacturers for safe and durable packaging.',
      industries: [
        {
          id: 'food-beverage',
          title: 'Food & Beverages',
          description: 'Crystal-clear PET bottles for beverages, mineral water, and soft drinks.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Attractive and durable containers for cosmetics, lotions, and personal care products.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable packaging solutions for fast-moving consumer goods and retail products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Chemical-resistant containers for pesticides, herbicides, and agricultural solutions.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        },
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'Safe and compliant packaging for chemical products and industrial applications.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Versatile PET bottles for household cleaners, detergents, and consumer products.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'automotive',
          title: 'Automotive',
          description: 'High-quality packaging solutions for lubricants, motor oils, and automotive fluids.',
          image: '/automotive.png',
          icon: <AutomotiveIcon />
        },
        {
          id: 'industrial',
          title: 'Industrial',
          description: 'Heavy-duty PET containers for industrial applications and manufacturing processes.',
          image: '/industrial.png',
          icon: <IndustrialIcon />
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Material Excellence (PET)',
          content: 'Made from 100% virgin Polyethylene Terephthalate for superior clarity and tensile strength.'
        },
        {
          title: 'Dimensional Precision',
          content: 'Produced using high-accuracy injection molding for consistent weight and neck finish.'
        },
        {
          title: 'Barrier Protection',
          content: 'PET offers excellent moisture and gas barrier properties, maintaining product freshness and quality.'
        },
        {
          title: 'Custom Design Capability',
          content: 'Tailor-made shapes, neck types, and colours available to meet branding and functional requirements.'
        },
        {
          title: 'Certified Quality Standards',
          content: 'Manufactured under ISO 9001:2015 compliance with rigorous quality inspection at each stage.'
        }
      ]
    },
    certifications: {
      title: 'Our Certifications',
      certificationName: 'ISO 9001 & MSME',
      certificationIcon: '/zed-gold.png',
      certificationText: 'ZED Gold',
      row1Items: [
        'Quality Management',
        'Swachh Workplace',
        'Workplace Safety',
        'Process Control',
        'Measurement of Timely Delivery',
        'Human Resource Management'
      ],
      row2Items: [
        'Daily Works Management',
        'Product Quality & Safety',
        'Material Management',
        'Energy Management',
        'Environment Management'
      ],
      row3Items: [
        'Risk Management',
        'Waste Management',
        'Technology Selection & Upgradation',
        'Natural Resource Conservation',
        'Corporate Social Responsibility'
      ]
    },
    blogSection: {
      title: 'Expert Knowledge for Your Industry',
      description: 'Discover insights on PET packaging innovation, sustainability trends, and international compliance standards.'
    },
    GlobalReachSection: {
      title: 'Reliable PET Packaging Solutions for Every Industry',
      description: "From beverages and cosmetics to agrochemicals, BMRAJ's PET bottles and preforms deliver clarity, compliance, and consistency at scale."
    },
    faq: [
      {
        title: 'What materials are used to manufacture PET bottles and preforms?',
        content: 'All our bottles and preforms are made from virgin Polyethylene Terephthalate (PET), ensuring clarity, strength, and recyclability.'
      },
      {
        title: 'What capacities and preform weights are available?',
        content: 'Our PET bottles range from 100 ML to 2 LTR, and preforms are offered in custom neck diameters and weights based on client requirements.'
      },
      {
        title: 'Are these suitable for food or chemical use?',
        content: 'Yes. BMRAJ PET bottles and preforms are safe for both food-grade and industrial applications, meeting international quality and safety norms.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Explore our comprehensive portfolio of industrial and commercial packaging solutions.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: 'drums-and-barrels',
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Jerrycans & Polycans",
          slug: "jerrycans-polycans",
          image: "/product-image/Jerrycans-polycans-1.png",
          bgColor: "#E8F5E9",
          description: "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
        },
        {
          id: 3,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#D1EEAE",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },
        {
          id: 4,
          title: "Food Packaging",
          slug: "food-packaging",
          image: "/product-image/Food-packaging-001.png",
          bgColor: "#FFF9C4",
          description: "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
        },
      ]
    }
  },

  'food-packaging': {
    name: 'Food Packaging',
    slug: 'food-packaging',
    IndustrialHero: {
      title: 'Food Packaging',
      subtitle: "BMRAJ's food-packaging containers are engineered for hygiene, safety, and shelf performance. Manufactured through precision molding, these containers meet the exacting needs of bulk food processors, dessert lines, and dairy packaging.",
      image: '/category/food-packaging-hero.png',
      floatingItems: [
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Food Packaging",
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Food Packaging",
      ],
      durableSection: {
        titleHighlight: "Safe, Compliant &",
        titleNormal: "High-Performance Packaging",
        description: "Our food-grade packaging range is designed to protect product integrity, maintain freshness, and handle demanding manufacturing conditions. Built with food-safe resin and high-precision tooling, these containers ensure leak resistance, stack stability, and transport durability."
      }
    },
    categoryStats: [
      {
        id: 'food-safe',
        title: 'Food-Safe Materials',
        subtitle: 'Virgin-grade HDPE and PP resins ensure compliance with food-contact regulations.'
      },
      {
        id: 'barrier-seal',
        title: 'Barrier & Seal Performance',
        subtitle: 'Containers resist moisture ingress and maintain airtight sealing through multiple handling cycles.'
      },
      {
        id: 'shape-flexibility',
        title: 'Shape & Lid Flexibility',
        subtitle: 'Available in jars, tubs, and boxes with screw-top or snap-on lids tailored for food use.'
      },
      {
        id: 'production-ready',
        title: 'Production-Ready Design',
        subtitle: 'Tooling and molding engineered for high-speed filling, labelling, and automated packaging lines.'
      }
    ],
    productLine: {
      title: 'Our Range of Food Packaging',
      description: 'BMRAJ offers robust, food-grade containers designed for dairy, sweets, desserts, and bakery products in bulk and retail-supply format.',
      categories: [
        {
          name: '200 gms Cheese Spread Container with Lid (HDPE/PP)',
          slug: '200-gms-cheese-spread-container-with-lid',
          image: '/category/food-packaging/200_gms_cheese_cup.png',
          description: 'Food-grade containers for cheese spread and dairy products'
        },
        {
          name: '400 gms Dahi Masti Cup',
          slug: '400-gms-dahi-masti-cup',
          image: '/category/food-packaging/dahi-masti-cup.png',
          description: 'Durable cups for yogurt and dairy packaging'
        },
        {
          name: '500 gms Sweet Box',
          slug: '500-gms-sweet-box',
          image: '/category/food-packaging/sweet-box-500.png',
          description: 'Compact sweet boxes for confectionery packaging'
        },
        {
          name: '1 kg Sweet Box',
          slug: '1-kg-sweet-box',
          image: '/category/food-packaging/sweet-box-1kg.png',
          description: 'Large sweet boxes for bulk confectionery'
        },
        {
          name: '1.5 LTR Cake Magic Box',
          slug: '1-5-ltr-cake-magic-box',
          image: '/category/food-packaging/cake-magic-box.png',
          description: 'Premium cake boxes for bakery and dessert packaging'
        },
        {
          name: '500 Gram & 1 Kilo Shrikhand Container',
          slug: 'shrikhand-container',
          image: '/product-details/shrikhand-container/shrikhand-container-card.png',
          description: ''
        }
      ]
    },
    industrySection: {
      title: 'Trusted Across Food & Packaging Operations',
      description: "BMRAJ's food-packaging containers serve manufacturers who demand high standards of hygiene, durability, and supply-chain readiness.",
      industries: [
        {
          id: 'food-beverage',
          title: 'Food & Beverages',
          description: 'Hygienic containers for dairy products, yogurt, cheese spreads, and food-safe applications.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable packaging solutions for fast-moving consumer goods and retail food products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Safe and attractive containers for personal care and cosmetic products.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable containers for household products and home care solutions.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Food-Grade Material Choice',
          content: 'All products are manufactured with food-contact certification.'
        },
        {
          title: 'Precision Moulded Tooling',
          content: 'Ensures consistent container walls, flat lids, and tight seals for leak-free packaging.'
        },
        {
          title: 'Customizable Formats',
          content: 'Options for shape, lid type, barrier enhancement, and labelling suited to dessert, dairy, or B2B food use.'
        },
        {
          title: 'Compliance & Quality Assurance',
          content: 'Produced under ISO 9001:2015 and in line with HACCP/food-safety workflow.'
        },
        {
          title: 'Reliable Supply Chain',
          content: 'Established capacity, global sourcing, and export-ready packaging make BMRAJ a trusted partner.'
        }
      ]
    },
    certifications: {
      title: 'Our Certifications',
      certificationName: 'ISO 9001 & MSME',
      certificationIcon: '/zed-gold.png',
      certificationText: 'ZED Gold',
      row1Items: [
        'Quality Management',
        'Swachh Workplace',
        'Workplace Safety',
        'Process Control',
        'Measurement of Timely Delivery',
        'Human Resource Management'
      ],
      row2Items: [
        'Daily Works Management',
        'Product Quality & Safety',
        'Material Management',
        'Energy Management',
        'Environment Management'
      ],
      row3Items: [
        'Risk Management',
        'Waste Management',
        'Technology Selection & Upgradation',
        'Natural Resource Conservation',
        'Corporate Social Responsibility'
      ]
    },
    blogSection: {
      title: 'Expert Knowledge for Your Industry',
      description: 'Stay updated on food-packaging trends, material innovation, shelf-life engineering, and regulatory compliance.'
    },
    GlobalReachSection: {
      title: 'Food-Grade Packaging Customised for Your Production',
      description: "Whether dairy, confectionery, or bakery, BMRAJ's containers deliver strength, hygiene, and supply-chain readiness at scale."
    },
    faq: [
      {
        title: 'What materials are used in BMRAJ food-packaging containers?',
        content: 'We use PPCP certified for food contact and engineered for durability.'
      },
      {
        title: 'What container formats are available?',
        content: 'Our food-packaging range includes 200 g to 1.5-LTR formats such as spread tubs, yogurt cups, sweet boxes, and cake boxes (see range above).'
      },
      {
        title: 'Can containers be customized for my product?',
        content: 'Yes. We offer custom container design, lid format, barrier options, colour/labelling, and branding aligned to food-industry needs.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Discover more of our industrial plastic-packaging solutions.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: 'drums-and-barrels',
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Jerrycans & Polycans",
          slug: "jerrycans-polycans",
          image: "/product-image/Jerrycans-polycans-1.png",
          bgColor: "#E8F5E9",
          description: "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
        },
        {
          id: 3,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 4,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#FFE0B2",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },
      ]
    }
  },

  'crates': {
    name: 'Industrial Crates',
    slug: 'crates',
    IndustrialHero: {
      title: 'Industrial Crates',
      subtitle: "BMRAJ's range of industrial plastic crates is engineered for efficiency, durability, and safe handling. Made from high-grade materials through advanced molding, our crates support bulk logistics, handling of goods, and export-ready supply chain operations.",
      image: '/category/crates-hero.png',
      floatingItems: [
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Small Bottles",
        "Injection Molding",
        "Blow Molding",
        "Jerrycans & Polycans",
        "Drums & Barrels",
        "Small Bottles",
      ],
      durableSection: {
        titleHighlight: "Rugged, Stackable &",
        titleNormal: "Logistics-Ready Packaging",
        description: "Our crates are designed to withstand heavy loads, repeated handling, and harsh transit conditions. With ergonomic design, consistent wall strength, and modular stacking, BMRAJ crates deliver reliable performance for manufacturing, warehousing, and distribution networks."
      }
    },
    categoryStats: [
      {
        id: 'durable-production',
        title: 'Durable Production',
        subtitle: 'High-strength construction built for heavy use and repeated cycles.'
      },
      {
        id: 'stack-optimisation',
        title: 'Stack & Flow Optimisation',
        subtitle: 'Interlocking, nestable, and stackable designs for efficient transport and storage.'
      },
      {
        id: 'material-versatility',
        title: 'Material Versatility',
        subtitle: 'Options tailored to food-grade handling, export logistics, and industrial goods.'
      },
      {
        id: 'ease-handling',
        title: 'Ease of Handling',
        subtitle: 'Integrated handles, side-vent designs, and standard footprints compatible with pallets.'
      }
    ],
    productLine: {
      title: 'Our Range of Industrial Crates',
      description: 'BMRAJ offers a full spectrum of crate solutions designed for specific logistics and storage applications.',
      categories: [
        {
          name: 'Milk Crate',
          slug: 'milk-crate',
          image: '/category/crates/milk-crates.png',
          description: 'Durable crates designed for dairy logistics and cold storage'
        },
        {
          name: 'Vegetable & Fruit Crate',
          slug: 'vegetable-fruit-crate',
          image: '/category/crates/vegetable-fruit-crate.png',
          description: 'Ventilated crates for fresh produce handling and transport'
        }
      ]
    },
    industrySection: {
      title: 'Trusted by Logistics, Manufacturing & Export Operations',
      description: 'Our industrial crates cater to sectors demanding robust material handling, safe transit, and reuse cycles.',
      industries: [
        {
          id: 'food-beverage',
          title: 'Food & Beverages',
          description: 'Temperature-resistant crates for dairy products, produce, and cold chain operations.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable crates for fast-moving consumer goods and export logistics.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'industrial',
          title: 'Industrial (Storage)',
          description: 'Heavy-duty crates for industrial parts, components, and manufacturing storage.',
          image: '/industrial.png',
          icon: <IndustrialIcon />
        },
        {
          id: 'automotive',
          title: 'Automotive',
          description: 'Stackable crates for automotive components and spare parts storage.',
          image: '/automotive.png',
          icon: <AutomotiveIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable crates for household products and home care distribution.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Safe and sturdy crates for personal care product logistics.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'Chemical-resistant crates for safe storage and transport of chemical products.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Rugged crates for agricultural products and pesticide bulk handling.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Heavy-Duty Molding & Structure',
          content: 'Built to withstand high loads, stacking pressure, and rugged usage.'
        },
        {
          title: 'Material Expertise',
          content: 'Manufactured using high-performance plastics to suit food-grade, industrial, and export environments.'
        },
        {
          title: 'Stack-Optimised Designs',
          content: 'Precision moulded for easy nesting, stacking, and transport efficiency.'
        },
        {
          title: 'Custom Configurations',
          content: 'Custom sizing, venting, branding, and colour options available to suit logistics or export needs.'
        },
        {
          title: 'Trusted Supply Chain Partner',
          content: 'Reliable delivery, compliance-tested materials, and global export readiness.'
        }
      ]
    },
    certifications: {
      title: 'Our Certifications',
      certificationName: 'ISO 9001 & MSME',
      certificationIcon: '/zed-gold.png',
      certificationText: 'ZED Gold',
      row1Items: [
        'Quality Management',
        'Swachh Workplace',
        'Workplace Safety',
        'Process Control',
        'Measurement of Timely Delivery',
        'Human Resource Management'
      ],
      row2Items: [
        'Daily Works Management',
        'Product Quality & Safety',
        'Material Management',
        'Energy Management',
        'Environment Management'
      ],
      row3Items: [
        'Risk Management',
        'Waste Management',
        'Technology Selection & Upgradation',
        'Natural Resource Conservation',
        'Corporate Social Responsibility'
      ]
    },
    blogSection: {
      title: 'Expert Knowledge for Your Industry',
      description: 'Discover insights on supply chain packaging, crate design trends, export-packing best practices and reuse strategies.'
    },
    GlobalReachSection: {
      title: 'Find the Right Crate Solution for Your Supply Chain',
      description: "From milk crates to industrial spools, BMRAJ delivers high-performance packaging that meets logistics, handling and export challenges."
    },
    faq: [
      {
        title: 'What types of crates does BMRAJ manufacture?',
        content: 'We manufacture milk crates, vegetable & fruit crates, and spool-side support crates tailored for industrial and export usage.'
      },
      {
        title: 'Are these crates suitable for food-grade applications?',
        content: 'Yes. Our designs incorporate food-safe materials and are suitable for use in dairy, produce, and export packaging environments.'
      },
      {
        title: 'Can I customise a crate for my specific supply chain requirement?',
        content: 'While crate dimensions remain standard, we provide customisation in colour, branding, venting, and stacking configurations to align with your material handling and logistics requirements.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Explore BMRAJ's broader packaging and storage solutions across industrial sectors.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: 'drums-and-barrels',
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Jerrycans & Polycans",
          slug: "jerrycans-polycans",
          image: "/product-image/Jerrycans-polycans-1.png",
          bgColor: "#E8F5E9",
          description: "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
        },
        {
          id: 3,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 4,
          title: "Food Packaging",
          slug: "food-packaging",
          image: "/product-image/Food-packaging-001.png",
          bgColor: "#FFF9C4",
          description: "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
        },
      ]
    }
  },

  // TODO: awaiting content from the client. The hero image, copy, stats and
  // FAQs below are placeholders so the category renders; replace before go-live.
  'cosmetic-caps': {
    name: 'Cosmetic Caps',
    slug: 'cosmetic-caps',
    IndustrialHero: {
      title: 'Cosmetic Caps',
      subtitle: "BMRAJ's cosmetic caps are injection moulded from polypropylene for smooth, repeatable opening and controlled dispensing. Our flip top closures are available in 35, 40 and 50 DIA profiles, with 3 mm and 5 mm orifice options and a choice of matt or gloss finish to suit personal care, cosmetic, healthcare and FMCG packaging.",
      image: '/leading-manufacturing.png',
      floatingItems: [
        "Flip Top Caps",
        "Injection Molding",
        "Personal Care",
        "Cosmetics",
        "Healthcare",
        "Flip Top Caps",
        "Injection Molding",
        "Personal Care",
        "Cosmetics",
        "Healthcare",
      ],
      durableSection: {
        titleHighlight: "Precision-Moulded Closures for",
        titleNormal: "Everyday Dispensing",
        description: "A flip top cap is opened and closed hundreds of times over a product's life, so the hinge has to keep working long after the first use. We injection mould ours in polypropylene, the material of choice for living hinges because it flexes repeatedly without cracking. Tight dimensional control on the cap bore, sleeve ring and bung keeps the closure sealing correctly on the bottle neck through the whole pack."
      }
    },
    categoryStats: [
      {
        id: 'three-cap-profiles',
        title: 'Three Cap Profiles',
        subtitle: '35, 40 and 50 DIA flip top caps to suit different bottle necks and pack sizes.'
      },
      {
        id: 'controlled-dispensing',
        title: 'Controlled Dispensing',
        subtitle: '3 mm and 5 mm orifice options to match the flow your formulation needs.'
      },
      {
        id: 'finish-options',
        title: 'Matt & Gloss Finishes',
        subtitle: 'Both surface finishes available so the closure matches your bottle and branding.'
      },
      {
        id: 'quality-assured',
        title: 'Quality Assured',
        subtitle: 'Moulded under the same ISO 9001:2015 certified processes as our wider range.'
      }
    ],
    productLine: {
      title: 'Our Range of Cosmetic Caps',
      description: 'BMRAJ manufactures polypropylene flip top caps in three diameters, each available with a 3 mm or 5 mm orifice and in matt or gloss finish.',
      categories: [
        {
          name: '35 DIA Flip Top Cap',
          slug: '35-dia-flip-top-cap',
          image: '/product-details/cosmetic-caps/35-dia-flip-top-cap-card.png',
          description: 'Compact 33 mm OD closure for controlled, convenient dispensing'
        },
        {
          name: '40 DIA Flip Top Cap',
          slug: '40-dia-flip-top-cap',
          image: '/product-details/cosmetic-caps/40-dia-flip-top-cap-card.png',
          description: 'Mid-size 38.30 mm OD closure with 3 mm and 5 mm dispensing options'
        },
        {
          name: '50 DIA Flip Top Cap',
          slug: '50-dia-flip-top-cap',
          image: '/product-details/cosmetic-caps/50-dia-flip-top-cap-card.png',
          description: 'Large-format 47.60 mm OD closure for bigger packs'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Two Decades of Moulding Experience',
          content: 'BMRAJ has manufactured plastic packaging components for global brands for over twenty years.'
        },
        {
          title: 'ISO 9001:2015 Certified Facility',
          content: 'All processes run under one certified roof in Silvassa, ensuring consistent quality and traceability.'
        },
        {
          title: 'Custom Configurations',
          content: 'Orifice size, surface finish, colour and branding options available to suit your product line.'
        },
        {
          title: 'Dimensional Consistency',
          content: 'Cap weight, height, outer diameter, sleeve ring and bung are held to stated tolerances so closures fit and seal the same way across every batch.'
        },
        {
          title: 'Single-Source Packaging',
          content: 'Closures can be supplied alongside our bottles, jars and containers, keeping cap and neck compatibility with one manufacturer.'
        }
      ]
    },
    GlobalReachSection: {
      title: 'Find the Right Closure for Your Pack',
      description: "Tell us your bottle neck, fill volume and dispensing requirement, and our team will help you select between the 35, 40 and 50 DIA flip top caps."
    },
    faq: [
      {
        title: 'What are cosmetic caps?',
        content: 'Cosmetic caps are the closures fitted to bottles and tubes for personal care and cosmetic products such as shampoos, conditioners, lotions, gels and sanitisers. They do more than seal the pack: the closure controls how much product comes out, how easily the pack opens with one hand, and how the product presents on shelf. BMRAJ manufactures flip top caps for this segment in three diameters.'
      },
      {
        title: 'What is a flip top cap and how does it work?',
        content: 'A flip top cap has a hinged lid that flips open and snaps shut against a sealing bung, so the pack can be opened and closed one-handed without removing the closure. Product is dispensed through an orifice in the cap, and the size of that orifice sets how fast the product flows.'
      },
      {
        title: 'Why are flip top caps made from polypropylene?',
        content: 'Polypropylene is used because of its living hinge. PP can be flexed repeatedly at a thin moulded section without cracking or fatiguing, which is what allows the lid to be opened and closed hundreds of times over the life of a pack. All three BMRAJ flip top caps are moulded in PP.'
      },
      {
        title: 'What orifice sizes are available?',
        content: 'All three caps — 35 DIA, 40 DIA and 50 DIA — are available with either a 3 mm or 5 mm orifice. A smaller orifice suits thinner, free-flowing liquids where you want to restrict flow, and a larger orifice suits thicker or higher-volume dispensing. The right choice depends on the viscosity of your formulation.'
      },
      {
        title: 'Which cap size should I choose?',
        content: 'The three sizes differ mainly in cap outer diameter and weight: 33.00 mm and 4.40 g for the 35 DIA, 38.30 mm and 5.75 g for the 40 DIA, and 47.60 mm and 8.30 g for the 50 DIA. Selection is normally driven by the bottle neck the closure has to fit and the size of the pack. Share your bottle specification and we can advise.'
      },
      {
        title: 'What is the difference between matt and gloss finish?',
        content: 'This is a surface finish on the moulded cap and it is purely a presentation choice — matt gives a softer, non-reflective surface while gloss gives a shiny one. Both are available across all three sizes, so the closure can be matched to the look of your bottle and branding.'
      },
      {
        title: 'Which industries use these closures?',
        content: 'Flip top caps of this type are used across personal care, cosmetics, healthcare and FMCG packaging wherever convenient opening and controlled dispensing are needed. Suitability for a specific formulation should be confirmed before selection.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Explore BMRAJ's broader packaging and storage solutions across industrial sectors.",
      products: [
        {
          id: 1,
          title: "Blow Molding Accessories",
          slug: "blow-molding-accessories",
          image: "/product-image/Blow-moulding-accesories-01.png",
          bgColor: "#E1BEE7",
          description: "High-quality caps, plugs, handles, and clamps engineered to complement our blow-moulded packaging solutions.",
        },
        {
          id: 2,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#FFE0B2",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },
        {
          id: 3,
          title: "PET Bottles & Preforms",
          slug: "pet-bottles-preforms",
          image: "/product-image/Pet-bottles-preforms-01.png",
          bgColor: "#C8E6F5",
          description: "PET bottles and preforms for beverage and liquid packaging.",
        },
        {
          id: 4,
          title: "Food Packaging",
          slug: "food-packaging",
          image: "/product-image/Food-packaging-001.png",
          bgColor: "#FFF9C4",
          description: "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
        },
      ]
    }
  },

  'pharma': {
    name: 'Pharma',
    slug: 'pharma',
    IndustrialHero: {
      title: 'Pharma Packaging',
      subtitle: "BMRAJ's pharma packaging range is engineered for secure bulk storage and transport of pharmaceutical materials. The Medipack combines virgin HDPE construction, a tamper-evident seal lock, and export-ready pallet sizing to meet the handling and traceability demands of pharma supply chains.",
      image: '/product-details/medipack/medipack-01.png',
      floatingItems: [
        "Bulk Storage",
        "Injection Molding",
        "Seal Lock",
        "Export Ready",
        "Pharma Grade",
        "Bulk Storage",
        "Injection Molding",
        "Seal Lock",
        "Export Ready",
        "Pharma Grade",
      ],
      durableSection: {
        titleHighlight: "Secure, Export-Ready",
        titleNormal: "Pharma Storage Container",
        description: "The Medipack is moulded from virgin HDPE for consistent wall strength and long service life. A seal lock closure and 1200 x 800 mm export pallet configuration (8+8) keep bulk pharma shipments tamper-evident and logistics-ready from the plant floor to the final destination."
      }
    },
    categoryStats: [
      {
        id: 'durability',
        title: 'Rugged HDPE Build',
        subtitle: 'Virgin HDPE construction withstands the rigours of bulk pharma handling and repeated transport cycles.'
      },
      {
        id: 'leak-proof',
        title: 'Seal Lock Security',
        subtitle: 'An integrated seal lock keeps contents tamper-evident from filling through to final delivery.'
      },
      {
        id: 'ease-handling',
        title: 'Export-Ready Handling',
        subtitle: 'Sized for an 8+8 loading pattern on a standard 1200 x 800 mm export pallet.'
      },
      {
        id: 'versatile',
        title: 'Custom Print & Colour',
        subtitle: 'Printing and colour can be customized to your product, batch, and branding requirements.'
      }
    ],
    productLine: {
      title: 'Our Range of Pharma Packaging',
      description: "BMRAJ manufactures the Medipack, a 35 kg-capacity virgin HDPE storage container purpose-built for bulk pharmaceutical packaging, with a tamper-evident seal lock and export-ready pallet sizing.",
      categories: [
        {
          name: 'Medipack',
          slug: 'medipack',
          image: '/product-details/medipack/medipack3-removebg.png',
          description: '35 kg-capacity HDPE container with seal lock and export pallet sizing'
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose BMRAJ',
      points: [
        {
          title: 'Two Decades of Moulding Experience',
          content: 'BMRAJ has manufactured plastic packaging components for global brands for over twenty years.'
        },
        {
          title: 'ISO 9001:2015 Certified Facility',
          content: 'All processes run under one certified roof in Silvassa, ensuring consistent quality and traceability.'
        },
        {
          title: 'Tamper-Evident by Design',
          content: 'The seal lock closure is built into the Medipack, keeping bulk pharma shipments secure in transit.'
        },
        {
          title: 'Export-Ready Logistics',
          content: '1200 x 800 mm pallet sizing and an 8+8 loading pattern are engineered in from the start for efficient container and truck loading.'
        },
        {
          title: 'Custom Configurations',
          content: 'Colour and printing options available to suit your product, batch, and branding requirements.'
        }
      ]
    },
    GlobalReachSection: {
      title: 'Get Your Ideal Pharma Packaging Solution',
      description: "Talk to our team about the Medipack for your bulk pharmaceutical storage and transport needs."
    },
    faq: [
      {
        title: 'What is the Medipack designed for?',
        content: 'The Medipack is a virgin HDPE storage container designed for bulk pharmaceutical storage and transport, with a 35 kg fill capacity.'
      },
      {
        title: 'Is the Medipack tamper-evident?',
        content: 'Yes. It is fitted with a seal lock that secures the container and indicates whether it has been opened in transit.'
      },
      {
        title: 'How is the Medipack loaded for export?',
        content: 'The Medipack is sized for an 8+8 loading configuration on a standard 1200 x 800 mm export pallet, for efficient container and truck loading.'
      },
      {
        title: 'Can the Medipack be printed or customized?',
        content: 'Yes. Printing is available for batch and product information, and colour can be customized as per requirement.'
      },
      {
        title: 'What industries use the Medipack?',
        content: 'The Medipack is built for pharmaceutical packaging and storage applications that require secure, traceable bulk containers.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Explore BMRAJ's broader packaging and storage solutions across industrial sectors.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: "drums-and-barrels",
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#FFE0B2",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },
        {
          id: 3,
          title: "PET Bottles & Preforms",
          slug: "pet-bottles-preforms",
          image: "/product-image/Pet-bottles-preforms-01.png",
          bgColor: "#C8E6F5",
          description: "PET bottles and preforms for beverage and liquid packaging.",
        },
        {
          id: 4,
          title: "Blow Molding Accessories",
          slug: "blow-molding-accessories",
          image: "/product-image/Blow-moulding-accesories-01.png",
          bgColor: "#E1BEE7",
          description: "High-quality caps, plugs, handles, and clamps engineered to complement our blow-moulded packaging solutions.",
        },
      ]
    }
  },

  'blow-molding-accessories': {
    name: "Blow Molding Accessories (HDPE / PP)",
    slug: 'blow-molding-accessories',
    IndustrialHero: {
      title: "Blow Molding Accessories (HDPE / PP)",
      subtitle: "BMRAJ's blow molding accessories ensure perfect sealing, secure handling, and safe containment. From caps and plugs to handles and lugs, each component is engineered for compatibility across drums, jerrycans, polycans, and containers.",
      image: "/category/blow-moduling-hero.png",
      floatingItems: [
        "Mouser & Inner Plugs",
        "Bottle Caps",
        "6-Inch Caps",
        "10-Inch Caps & Clamps",
        "2-Inch Caps",
        "1.4-Inch Caps",
        "Lugs",
        "Handles & Pins"
      ],
      floatingBgColor: "#EDEDDE",
      floatingTextColor: "#5D686599",
      durableSection: {
        titleHighlight: "Finely-Crafted Components for",
        titleNormal: "Secure Packaging Systems",
        description: "Our blow molding accessories include closures, caps, inner plugs, lugs, and handle assemblies that ensure leak-proof sealing, easy transport, and compatibility with a wide range of industrial containers and drums."
      }
    },
    categoryStats: [
      {
        id: 'compatibility',
        title: "Compatibility",
        subtitle: "Designed to fit BMRAJ and industry-standard drums, jerrycans, and containers precisely."
      },
      {
        id: 'seal-integrity',
        title: "Seal Integrity",
        subtitle: "Closures and plugs engineered for leak-proof, tamper-evident sealing of liquids and hazardous materials."
      },
      {
        id: 'material-strength',
        title: "Material Strength",
        subtitle: "Made from high-grade HDPE and PP for impact resistance and long-term durability."
      },
      {
        id: 'functional-design',
        title: "Functional Design",
        subtitle: "Handles, lugs, and pins designed for secure grip, stackability, and efficient logistics."
      }
    ],
    productLine: {
      title: "Our Range of Blow Molding Accessories",
      description: "From caps to clamps, every accessory is engineered for precision fit and secure performance.",
      categories: [
        {
          id: 1,
          name: "Mouser & Inner Plugs",
          slug: "mouser-inner-plugs",
          image: "/category/blow-molding-accessories/mouser-inner-plugs.png",
          description: "Heavy-duty cap and plug system for sealing 35 LTR and 50 LTR containers with tamper-evident protection."
        },
        {
          id: 2,
          name: "Bottle Caps & Inner Plugs",
          slug: "bottle-caps-inner-plugs",
          image: "/category/blow-molding-accessories/bottle-caps-inner-plugs.png",
          description: "Standard caps and inner plugs for bottles and small containers, ensuring leak-proof closure and easy dispensing."
        },
        {
          id: 3,
          name: "6-Inch Caps & Inner Plugs",
          slug: "6-inch-caps-inner-plugs",
          image: "/category/blow-molding-accessories/6-inch-caps-inner-plugs.png",
          description: "Wide-mouth sealing solution for containers requiring larger access openings with secure, reusable closure."
        },
        {
          id: 4,
          name: "10-Inch Caps & Clamps",
          slug: "10-inch-caps-clamps",
          image: "/category/blow-molding-accessories/10-inch-caps-clamps.png",
          description: "Extra-wide closures with clamping mechanisms for full-open drums used in chemicals, paints, and hazardous goods."
        },
        {
          id: 5,
          name: "2-Inch Caps & Inner Plugs",
          slug: "2-inch-caps-inner-plugs",
          image: "/category/blow-molding-accessories/2-inch-caps-inner-plugs.png",
          description: "Standard bung size closures offering tamper-evident sealing and compatibility across a wide range of drums and barrels."
        },
        {
          id: 6,
          name: "14-Inch Caps",
          slug: "14-inch-caps",
          image: "/category/blow-molding-accessories/1-4-inch-caps.png",
          description: "Compact caps for narrow-mouth drums and small-opening containers, ensuring tight closure with minimal product exposure."
        },
        // {
        //   id: 7,
        //   name: "Lugs",
        //   slug: "lugs",
        //   image: "/category/blow-molding-accessories/lugs.png",
        //   description: "Reinforced handling points for drums and containers, designed for safe lifting and movement in industrial environments."
        // },
        {
          id: 8,
          name: "Handles & Pin Assemblies",
          slug: "handles-pin-assemblies",
          image: "/category/blow-molding-accessories/handles-pin-assemblies.png",
          description: "Durable handle systems with secure pin assemblies, enabling efficient transport and handling of jerrycans and pails."
        }
      ]
    },
    industrySection: {
      title: "Trusted Across Industrial Packaging Lines",
      description: "Our accessories support a wide range of industries where container integrity, chemical compatibility, and transport safety are critical.",
      industries: [
        {
          id: 'caps-closures',
          title: 'Caps and Closures',
          description: 'High-quality caps and closures for secure sealing and tamper-evident packaging.',
          image: '/caps-closures.png',
          icon: <CapsClosuresIcon />
        },
        {
          id: 'chemicals',
          title: 'Chemicals',
          description: 'Chemical-resistant caps and plugs ensuring safe containment of hazardous and corrosive substances.',
          image: '/industry-chemicals.png',
          icon: <ChemicalsIcon />
        },
        {
          id: 'pesticides',
          title: 'Pesticides',
          description: 'Durable closures designed to withstand outdoor conditions and agricultural handling environments.',
          image: '/pesticides-fertilizers.png',
          icon: <PesticidesIcon />
        },
        {
          id: 'food-beverage',
          title: 'Food & Beverage',
          description: 'Food-safe accessories meeting hygiene standards for edible oils, syrups, and food-grade liquids.',
          image: '/food-beverage.png',
          icon: <FoodBeverageIcon />
        },
        {
          id: 'fmcg',
          title: 'FMCG',
          description: 'Reliable closure solutions for fast-moving consumer goods and retail products.',
          image: '/fmcg.png',
          icon: <FMCGIcon />
        },
        {
          id: 'homecare',
          title: 'Homecare',
          description: 'Durable caps and closures for household cleaning products and home care solutions.',
          image: '/homecare.png',
          icon: <HomecareIcon />
        },
        {
          id: 'personal-care',
          title: 'Personal Care',
          description: 'Attractive and secure closures for cosmetics, lotions, and personal care products.',
          image: '/personal-care.png',
          icon: <PersonalCareIcon />
        },
        {
          id: 'industrial',
          title: 'Industrial Packaging',
          description: 'Heavy-duty accessories for industrial containers and manufacturing applications.',
          image: '/industrial.png',
          icon: <IndustrialIcon />
        },
        {
          id: 'automotive',
          title: 'Automotive',
          description: 'Secure closures for lubricants, motor oils, and automotive fluid packaging.',
          image: '/automotive.png',
          icon: <AutomotiveIcon />
        }
      ]
    },
    whyChoose: {
      title: "Why Choose BMRAJ",
      points: [
        {
          title: 'High-Precision Molding',
          content: 'Produced through advanced injection molding for perfect fit, consistent finish, and repeatable quality.'
        },
        {
          title: 'Material Expertise (HDPE)',
          content: 'Virgin resins ensure superior sealing strength, reusability, and chemical resistance.'
        },
        {
          title: 'Comprehensive Accessory Range',
          content: 'From inner plugs to heavy-duty clamps and handles, our products cover every container need.'
        },
        {
          title: 'Customization Options',
          content: 'Custom colour, embossing, or cap branding options, available for OEM packaging systems.'
        },
        {
          title: 'Certified Manufacturing Quality',
          content: 'Produced under ISO 9001:2015 for consistent performance and global compliance.'
        }
      ]
    },
    certifications: {
      title: "Our Certifications",
      certificationName: "ISO 9001 & MSME",
      certificationIcon: "/zed-gold.png",
      certificationText: "ZED Gold"
    },
    blogSection: {
      title: "Expert Knowledge for Industrial Packaging Systems",
      description: "Read our insights on container sealing, closure performance, and packaging safety innovations."
    },
    GlobalReachSection: {
      title: "Complete Your Packaging System with BMRAJ Accessories",
      description: "From caps to clamps, plugs, and handles, BMRAJ delivers accessories that complete your packaging with performance and precision."
    },
    faq: [
      {
        title: 'What materials are used for BMRAJ blow molding accessories?',
        content: 'We use virgin High-Density Polyethylene (HDPE), ensuring durability, strength, and chemical resistance.'
      },
      {
        title: 'Are these accessories compatible with standard drums and jerrycans?',
        content: 'Yes, they are designed to fit a wide range of industrial drums, bottles, and cans with precise threading and sealing geometry.'
      },
      {
        title: 'Can accessories be customized for my packaging line?',
        content: 'Absolutely. We offer customization options in size, colour, design, and branding to align with specific industrial packaging requirements.'
      }
    ],
    exploreMoreProducts: {
      title: "Explore More Products",
      subtitle: "Discover more of BMRAJ's industrial packaging and container solutions.",
      products: [
        {
          id: 1,
          title: "Drums & Barrels",
          slug: 'drums-and-barrels',
          image: "/product-image/barrels-drums-01.png",
          bgColor: "#C8E6F5",
          description: "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
        },
        {
          id: 2,
          title: "Small Bottles & Containers",
          slug: "small-bottles-containers",
          image: "/product-image/Small-bottles-containers-01.png",
          bgColor: "#E8F5E9",
          description: "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
        },
        {
          id: 3,
          title: "Plastic Buckets & Pails",
          slug: "plastic-buckets-and-pails",
          image: "/product-image/Pail-containers-buckets-1.png",
          bgColor: "#D1EEAE",
          description: "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging.",
        },
        {
          id: 4,
          title: "Food Packaging",
          slug: "food-packaging",
          image: "/product-image/Food-packaging-001.png",
          bgColor: "#FFF9C4",
          description: "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
        },
      ]
    }
  }
};

// Helper functions
export const getAllCategorySlugs = () => {
  return Object.keys(allCategoryData);
};

export const getProductCategoryData = async (slug) => {
  await new Promise(resolve => setTimeout(resolve, 50));

  const data = allCategoryData[slug];

  if (!data) {
    return null;
  }

  return { 
    ...data,
    breadcrumbs: generateCategoryBreadcrumbs(slug)
  };
};

export const getCategoryIndustries = () => [
  {
    id: 'chemicals',
    title: "Chemicals",
    description: "Precision ingredients and compounds that drive innovation across chemical manufacturing and processing industries.",
    image: "/industry-chemicals.png",
    icon: <ChemicalsIcon />
  },
  {
    id: 'automotive',
    title: "Automotive",
    description: "High-quality packaging solutions for lubricants, motor oils, and automotive fluids.",
    image: "/automotive.png",
    icon: <AutomotiveIcon />
  },
  {
    id: 'food-beverage',
    title: "Food & Beverage",
    description: "Robust materials and components designed for demanding industrial applications and manufacturing processes.",
    image: "/food-beverage.png",
    icon: <FoodBeverageIcon />
  },
  {
    id: 'personal-care',
    title: "Personal Care",
    description: "Premium ingredients for cosmetics and personal care products that meet the highest quality standards.",
    image: "/personal-care.png",
    icon: <PersonalCareIcon />
  },
  {
    id: 'healthcare',
    title: "Healthcare/Pharma",
    description: "Critical components focused on sterility and reliability for pharmaceutical and healthcare applications.",
    image: "/healthcare.png",
    icon: <HealthcareIcon />
  },
  {
    id: 'pesticides',
    title: "Pesticides/Fertilizers",
    description: "Durable, compliant packaging for agricultural chemicals, pesticides, and fertilizers.",
    image: "/pesticides-fertilizers.png",
    icon: <PesticidesIcon />
  },
];
