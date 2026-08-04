// Data for Product Listing Pages (e.g., /drums-and-barrels/full-open-top-drums)

import { generateListingBreadcrumbs } from '@/utils/breadcrumbs';

export const productListingData = {
  'drums-and-barrels': {
    'full-open-top-drums': {
      name: 'Full Open Top Drums',
      slug: 'full-open-top-drums',
      title: 'Full Open Top Drums',
      description: 'BMRAJ Full Open Top Drums are engineered for easy filling, cleaning, and secure storage of solid, semi-solid, and liquid materials. Built from high-strength HDPE, they ensure leak-proof performance and global compliance for industrial packaging and transport.',
      products: [
        {
          id: 1,
          title: '30-35 LTR DRUM',
          slug: '30-35-ltr-drum',
          imageUrl: '/listing/full-open-top-drums/30-35-ltr-drum.png',
          capacity: '30-35 Liters',
          material: 'HDPE',
          features: ['Food Grade', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 2,
          title: '40 LTR DRUM',
          slug: '40-ltr-drum',
          imageUrl: '/listing/full-open-top-drums/40-ltr-drum.png',
          capacity: '40 Liters',
          material: 'HDPE',
          features: ['Food Grade', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 3,
          title: '45-50 LTR DRUM',
          slug: '45-50-ltr-drum',
          imageUrl: '/listing/full-open-top-drums/45-50-ltr-drum.png',
          capacity: '45-50 Liters',
          material: 'HDPE',
          features: ['Food Grade', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 4,
          title: '50-55 LTR DRUM',
          slug: '50-55-ltr-drum',
          imageUrl: '/listing/full-open-top-drums/50-55-ltr-drum.png',
          capacity: '50-55 Liters',
          material: 'HDPE',
          features: ['Food Grade', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 5,
          title: '60-65 LTR DRUM',
          slug: '60-65-ltr-drum',
          imageUrl: '/listing/full-open-top-drums/60-65-ltr-drum.png',
          capacity: '60-65 Liters',
          material: 'HDPE',
          features: ['Food Grade', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 6,
          title: 'Full Open Top Drums',
          slug: 'open-top-drums',
          imageUrl: '/listing/containers-for-lubricants/open-top-drums.png',
          capacity: '30-210 Liters',
          material: 'HDPE',
          features: ['Easy Access', 'Chemical Resistant', 'Heavy Duty']
        }
      ],
      relatedProducts: [
        { name: 'Wide/Narrow Mouth Drum', slug: 'wide-narrow-mouth-drum' },
        { name: 'Rocket Drums', slug: 'rocket-drums' },
        { name: 'Oil & Grease Containers', slug: 'oil-grease-containers' },
        { name: 'Barrels', slug: 'barrels' }
      ],
      otherCategories: [
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-pails', parentSlug: 'plastic-buckets-pails' },
        { name: 'Small Bottles & Containers', slug: 'small-bottles-containers', parentSlug: 'small-bottles-containers' }
      ],
      GlobalReachSection:{
        title: 'Get the Right Drum for Your Needs',
        description: 'Choose from our proven range of Full Open Top Drums, built to meet strict industrial standards and tailored to your application.'
      },
      faq:[
        {
          title: 'What industries use Full Open Top Drums?',
          content: 'Full Open Top Drums are widely used in chemicals, food & beverage, pharmaceuticals, agriculture, and paints & inks sectors. They are used for storing and transporting liquids, powders, and viscous materials that require easy access for filling and cleaning.'
        },
        {
          title: 'Are these drums UN-certified?',
          content: 'Yes, many of our Full Open Top Drums are UN-certified (and ISO 9001:2015 certified) for safe handling and transport of hazardous goods.'
        },
        {
          title: 'Can the drums be customized?',
          content: 'We can customize your order by adjusting the capacity, fittings, printing, and colours, ensuring the final product aligns with your specific operational requirements.'
        }
      ],
      idealRange: {
        title: 'Ideal for a Range of Industrial Applications',
        applications: [
          {
            title: 'Chemical Storage',
            description: 'Safe containment of hazardous or corrosive materials.'
          },
          {
            title: 'Lubricants & Oils',
            description: 'Designed for high-viscosity and bulk fluids.'
          },
          {
            title: 'Food & Beverage',
            description: 'Suitable for pickles, concentrates, and bulk ingredients.'
          },
          {
            title: 'Paints & Coatings',
            description: 'Leak-proof performance for viscous formulations.'
          },
          {
            title: 'Agrochemicals',
            description: 'Rugged solution for fertilizers, emulsions, and pesticides.'
          }
        ]
      }
    },
    'wide-narrow-drum': {
      name: 'Wide/Narrow Mouth Drum',
      slug: 'wide-narrow-drum',
      title: 'Wide/Narrow Mouth Drums',
      description: 'BMRAJ Wide and Narrow Mouth Drums are made from virgin-grade HDPE to provide safe, reliable, and efficient storage of liquids, semi-solids, and powders. With multiple mouth diameters and capacity options, they offer flexibility for diverse industrial uses.',
      products: [
        {
          id: 1,
          title: '50 LTR WIDE MOUTH (6 INCH & 8 INCH)',
          slug: '50-ltr-wide-mouth-6-inch-8-inch',
          imageUrl: '/listing/wide-narrow-drum/50-ltr-wide-mouth-6-inch-8-inch.png',
          capacity: '50 Liters',
          material: '',
          features: ['Chemical Resistant', 'Narrow Opening', 'Easy Pour']
        },
        {
          id: 2,
          title: '50 LTR NARROW MOUTH (2 inch & 1 inch)',
          slug: '50-ltr-narrow-mouth-2-inch-1-inch',
          imageUrl: '/listing/wide-narrow-drum/50-ltr-narrow-mouth-2-and-1.png',
          capacity: '50 Liters',
          material: '',
          features: ['Wide Opening', 'Easy Filling', 'UN Certified']
        },
        {
          id: 3,
          title: '100 LTR WIDE MOUTH',
          slug: '100-ltr-wide-mouth',
          imageUrl: '/listing/wide-narrow-drum/100-ltr-wide-mouth.png',
          capacity: '100 Liters',
          material: '',
          features: ['Wide Opening', 'Easy Filling', 'UN Certified']
        },
        {
          id: 4,
          title: '50 LTR NARROW MOUTH DRUMS',
          slug: '50-ltr-narrow-mouth-drums',
          imageUrl: '/listing/containers-for-lubricants/50-ltr-narrow-mouth-drums.png',
          capacity: '50 Liters',
          material: 'HDPE',
          features: ['Narrow Mouth', 'Chemical Resistant', 'UN Certified']
        }
      ],
      relatedProducts: [
        { name: 'Full Open Top Drums', slug: 'full-open-top-drums' },
        { name: 'Rocket Drums', slug: 'rocket-drums' },
        { name: 'Oil & Grease Containers', slug: 'oil-grease-containers' },
        { name: 'Barrels', slug: 'barrels' }
      ],
      otherCategories: [
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-pails', parentSlug: 'plastic-buckets-pails' }
      ],
      GlobalReachSection:{
        title: "Let's Select the Right Drum for Your Application",
        description: "Choose the perfect balance of strength, safety, and compliance with BMRAJ's range of Wide and Narrow Mouth Drums."
      },
      faq:[
        {
          title: 'What are the main uses of Wide and Narrow Mouth Drums?',
          content: 'They are widely used for packaging lubricants, oils, chemicals, and food-grade materials requiring secure, spill-free storage.'
        },
        {
          title: 'What is the difference between the wide and narrow mouth variants?',
          content: 'Wide-mouth drums (6–8 inches) allow easy filling of viscous or solid materials, while narrow-mouth (1–2 inches) drums are ideal for liquids and precise pouring.'
        },
        {
          title: 'Can these drums be customized?',
          content: 'Yes, we offer customization in mouth size, color, branding, and fittings. All models are made from high-grade HDPE and can be tailored to specific industrial requirements.'
        }
      ],
      idealRange: {
        title: 'Practical Applications in Industries',
        applications: [
          {
            title: 'Lubricants & Oils',
            description: 'Ideal for viscous materials requiring easy filling.'
          },
          {
            title: 'Chemicals',
            description: 'Narrow-mouth variants ensure safe and spill-free handling.'
          },
          {
            title: 'Food Processing',
            description: 'Food-grade versions available for concentrates and sauces.'
          },
          {
            title: 'Agrochemicals',
            description: 'Perfect for storing and transporting liquid fertilizers and pesticides.'
          }
        ]
      }
    },
    'rocket-drums': {
      name: 'Rocket Drums',
      slug: 'rocket-drums',
      title: 'Rocket Drums',
      description: 'Compact, durable, and performance-tested, BMRAJ Rocket Drums are designed for the safe storage and transport of industrial liquids. Their ribbed body structure enhances stacking stability, load strength, and impact resistance, making them ideal for lubricants, chemicals, agrochemicals, and other industrial fluids.  ISO 9001:2015 and UN-Certified options available..',
      products: [
        {
          id: 1,
          title: '50 LTR ROCKET DRUM WITHOUT RIB',
          slug: '50-ltr-rocket-drum-without-rib',
          imageUrl: '/listing/rocket-drums/50-ltr-rocket-drum-without-rib.png',
          capacity: '50 Liters',
          material: 'HDPE',
          features: ['Lightweight', 'Easy Handling', 'Chemical Resistant']
        },
        {
          id: 2,
          title: '50 LTR ROCKET DRUM WITH RIB',
          slug: '50-ltr-rocket-drum-with-rib',
          imageUrl: '/listing/rocket-drums/50-ltr-rocket-drum-with-rib.png',
          capacity: '50 Liters',
          material: 'HDPE',
          features: ['Extra Rigidity', 'Stackable', 'UN Certified']
        },
        // {
        //   id: 3,
        //   title: '100 LTR Wide Mouth',
        //   slug: '100-ltr-rocket-drum',
        //   imageUrl: '/listing/rocket-drums/100-ltr-rocket-drum.png',
        //   capacity: '100 Liters',
        //   material: 'HDPE',
        //   features: ['Wide Opening', 'Heavy Duty', 'Chemical Resistant']
        // }
      ],
      relatedProducts: [
        { name: 'Full Open Top Drums', slug: 'full-open-top-drums' },
        { name: 'Wide/Narrow Mouth Drum', slug: 'wide-narrow-drum' }
      ],
      otherCategories: [
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-pails', parentSlug: 'plastic-buckets-pails' }
      ],
      GlobalReachSection:{
        title: 'Choose the Right Rocket Drum Variant',
        description: 'Whether ribbed or smooth, our 50 L Rocket Drums deliver consistent strength, compliance, and durability.'
      },
      faq:[
        {
          title: 'What materials are used in Rocket Drums?',
          content: 'Rocket Drums are blow-moulded from virgin High-Density Polyethylene (HDPE), ensuring chemical resistance and long service life.'
        },
        {
          title: 'What is the difference between ribbed and non-ribbed variants?',
          content: 'Ribbed Rocket Drums offer extra rigidity for stacking and long-distance transport, while non-ribbed drums are lightweight for general use.'
        },
        {
          title: 'Are Rocket Drums reusable?',
          content: 'Yes, they are fully recyclable and designed for multiple use cycles under proper handling.'
        }
      ],
      idealRange: {
        title: 'Industrial Applications of Rocket Drums',
        applications: [
          {
            title: 'Lubricant Packaging',
            description: 'Secure, leak-proof containers for oils, greases, and automotive fluids.'
          },
          {
            title: 'Chemical Storage',
            description: 'Reliable for acids, solvents, and other industrial formulations.'
          },
          {
            title: 'Agrochemical Transport',
            description: 'Strong and stable for fertilizer and pesticide packaging.'
          },
          {
            title: 'Food & Beverage',
            description: 'Compatible with non-reactive, food-grade materials on request.'
          },
          {
            title: 'Industrial Liquids',
            description: 'Ideal for paints, inks, and process materials requiring safe transport.'
          }
        ]
      }
    },
    'oil-grease-containers': {
      name: 'Oil & Grease Containers',
      slug: 'oil-grease-containers',
      title: 'Oil & Grease Containers',
      description: 'BMRAJ Oil & Grease Containers are engineered for high-performance lubrication packaging. Made from virgin HDPE through precision injection and blow molding, these containers ensure leak-proof, durable, and contamination-free storage for lubricants, greases, and industrial oils.',
      products: [
        {
          id: 1,
          title: '250 ML – 5 LTR Oil Jar / Container',
          slug: '250-ml-5-ltr-oil-jar-container',
          imageUrl: '/listing/oil-grease-containers/250-ml-5-ltr-oil-jar-container.png',
          capacity: '250 ML – 5 Liters',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Easy Pour']
        },
        {
          id: 2,
          title: '50–55 LTR Lubricant Oil Drum',
          slug: '50-55-ltr-lubricant-oil-drum',
          imageUrl: '/listing/oil-grease-containers/50-55-ltr-lubricant-oil-drum.png',
          capacity: '50–55 Liters',
          material: 'HDPE',
          features: ['Heavy Duty', 'UN Certified', 'Leak-Proof']
        }
      ],
      relatedProducts: [
        { name: 'Full Open Top Drums', slug: 'full-open-top-drums' },
        { name: 'Wide/Narrow Mouth Drum', slug: 'wide-narrow-drum' },
        { name: 'Barrels', slug: 'barrels' }
      ],
      otherCategories: [
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-pails', parentSlug: 'plastic-buckets-pails' }
      ],
      GlobalReachSection:{
        title: 'Find the Right Oil or Grease Container for Your Product Line',
        description: 'From small-capacity jars to industrial-grade drums, BMRAJ provides complete lubricant packaging solutions built for performance, precision, and protection.'
      },
      faq:[
        {
          title: 'What materials are used for Oil and Grease Containers?',
          content: 'All containers are manufactured using virgin HDPE for maximum durability, leak resistance, and product integrity.'
        },
        {
          title: 'Do you offer both small and large capacities?',
          content: 'Yes, our range includes compact jars (250 ml to 5 L) and large lubricant drums (up to 55 L).'
        },
        {
          title: 'Can the containers be customized?',
          content: 'Yes, we offer options in colour, branding, label application, and closure design to match client requirements.'
        }
      ],
      idealRange: {
        title: 'Used in a Variety of Industries',
        applications: [
          {
            title: 'Lubricant Packaging',
            description: 'Designed for packing motor oils, hydraulic oils, and gear lubricants in different volumes.'
          },
          {
            title: 'Grease Storage',
            description: 'Tight-sealing containers prevent leakage and contamination for greases and semi-solid lubricants.'
          },
          {
            title: 'Automotive Industry',
            description: 'Used by lubricant and additive manufacturers for retail and industrial-grade packaging.'
          },
          {
            title: 'Machinery Maintenance',
            description: 'Ideal for OEM and aftermarket supply of oils, coolants, and specialty lubricants.'
          }
        ]
      }
    },
    'barrels': {
      name: 'Barrels',
      slug: 'barrels',
      title: 'Industrial Barrels',
      description: 'BMRAJ HDPE Barrels provide reliable storage and transport for liquids and semi-solids. Precision blow-moulded and UN-certified, they ensure strength, chemical resistance, and compliance across industrial uses, available in 210, 235, and 250 LTR capacities for diverse packaging needs.',
      products: [
        {
          id: 1,
          title: '210 LTR FULL OPEN TOP',
          slug: '210-ltr-full-open-top-barrel',
          imageUrl: '/listing/barrels/210-ltr-full-open-top.png',
          capacity: '210 Liters',
          material: 'HDPE',
          features: ['Full Open Top', 'Easy Access', 'UN Certified']
        },
        {
          id: 2,
          title: '210 LTR STRAIGHT BODY - L RING C TYPE',
          slug: '210-ltr-straight-body-l-ring-c-type-barrel',
          imageUrl: '/listing/barrels/210-ltr-straight-body-l-ring-c-type.png',
          capacity: '210 Liters',
          material: 'HDPE',
          features: ['L Ring Design', 'Straight Body', 'UN Certified']
        },
        {
          id: 3,
          title: 'L-Ring Type Drums (210 LTR, 235 LTR, 250 LTR)',
          slug: 'l-ring-type-barrels',
          imageUrl: '/listing/barrels/210-ltr-l-ring-type-drum.png',
          capacity: '210-250 Liters',
          material: 'HDPE',
          features: ['Multiple Capacities', 'L Ring Design', 'UN Certified']
        },
        {
          id: 4,
          title: 'Plastic Barrels & Drums',
          slug: 'plastic-barrels-drums',
          imageUrl: '/listing/containers-for-lubricants/plastic-barrels-drums.png',
          capacity: '60-210 Liters',
          material: 'HDPE',
          features: ['Industrial Grade', 'Chemical Resistant', 'UN Certified']
        }
      ],
      relatedProducts: [
        { name: 'Full Open Top Drums', slug: 'full-open-top-drums' },
        { name: 'Oil & Grease Containers', slug: 'oil-grease-containers' }
      ],
      otherCategories: [],
      GlobalReachSection:{
        title: 'Durability and Compliance in Every Barrel',
        description: 'Engineered for safety, strength, and reusability, BMRAJ HDPE Barrels ensure long-lasting, compliant performance across global supply chains.'
      },
      idealRange: {
        title: 'Industrial Applications of HDPE Barrels',
        applications: [
          {
            title: 'Chemicals & Solvents',
            description: 'Store acids, alkalis, and industrial-grade chemicals safely with leak-proof and corrosion-resistant barrels.'
          },
          {
            title: 'Lubricants & Oils',
            description: 'Ideal for storing motor oils, hydraulic fluids, and industrial lubricants in workshops and warehouses.'
          },
          {
            title: 'Food & Beverage Additives',
            description: 'Suitable for storing flavoring agents, syrups, and food-grade bulk liquids with hygiene assurance.'
          },
          {
            title: 'Agrochemicals',
            description: 'Handle fertilizers, pesticides, and herbicides securely in agricultural and distribution settings.'
          },
          {
            title: 'Paints & Inks',
            description: 'Durable containers for storing water-based or solvent-based paints and printing inks.'
          }
        ]
      },
      faq:[
        {
          title: 'What materials are BMRAJ Barrels made of?',
          content: 'BMRAJ barrels are manufactured using high-quality HDPE (High-Density Polyethylene), known for its excellent strength, durability, and chemical resistance.'
        },
        {
          title: 'What capacities are available?',
          content: 'Our barrels are available in multiple sizes, including 210 LTR, 235 LTR, and 250 LTR variants to suit various industrial storage and transport needs.'
        },
        {
          title: 'Are the barrels UN-certified?',
          content: 'Yes, our barrels are UN-certified and ISO 9001:2015 compliant, ensuring safe handling, storage, and transport of hazardous and non-hazardous goods.'
        },
        {
          title: 'Can BMRAJ barrels be customized?',
          content: 'Yes, we offer customization in terms of capacity, fittings, printing, and color options to meet your specific industrial or branding requirements.'
        }
      ]
    }
  },


  'jerrycans-polycans': {
    'hdpe-jerrycans': {
      name: 'HDPE Jerrycans',
      slug: 'hdpe-jerrycans',
      title: 'HDPE Jerrycans',
      description: 'BMRAJ HDPE Jerrycans are designed for safe, convenient, and efficient handling of industrial liquids. Made from High-Density Polyethylene (HDPE) using blow molding, they offer superior strength, chemical resistance, and leak-proof performance for multiple industrial uses.',
      products: [
        {
          id: 1,
          title: '3 LTR Jerrycan',
          slug: '3-ltr-jerrycan',
          imageUrl: '/listing/hdpe-jerrycans/3-ltr-jerrycan.png',
          capacity: '3 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Compact Size', 'Easy Pour']
        },
        {
          id: 2,
          title: '4 LTR Jerrycan',
          slug: '4-ltr-jerrycan',
          imageUrl: '/listing/hdpe-jerrycans/4-ltr-jerrycan.png',
          capacity: '4 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Ergonomic Handle', 'Leak-Proof']
        },
        {
          id: 3,
          title: '5 LTR Jerrycan (Model I)',
          slug: '5-ltr-jerrycan-model-1',
          imageUrl: '/listing/hdpe-jerrycans/5-ltr-jerrycan-model-1.png',
          capacity: '5 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Easy Handling', 'UN Certified']
        },
        {
          id: 4,
          title: '5 LTR Jerrycan (Model II)',
          slug: '5-ltr-jerrycan-model-2',
          imageUrl: '/listing/hdpe-jerrycans/5-ltr-jerrycan-model-2.png',
          capacity: '5 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Stackable', 'UN Certified']
        },
        {
          id: 5,
          title: '5 LTR Jerrycan (Model III)',
          slug: '5-ltr-jerrycan-model-3',
          imageUrl: '/listing/hdpe-jerrycans/5-ltr-jerrycan-model-3.png',
          capacity: '5 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Stackable', 'UN Certified']
        },
        {
          id: 6,
          title: '5 LTR Jerrycan (Model IV)',
          slug: '5-ltr-jerrycan-model-4',
          imageUrl: '/listing/hdpe-jerrycans/5-ltr-jerrycan-model-4.png',
          capacity: '5 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Stackable', 'UN Certified']
        },
        {
          id: 7,
          title: '30–35 LTR Jerrycan – Straight Neck',
          slug: '30-35-ltr-jerrycan-straight-neck',
          imageUrl: '/listing/hdpe-jerrycans/30-35-ltr-jerrycan-straight-neck.png',
          capacity: '30-35 Liters',
          material: 'HDPE',
          features: ['Straight Neck', 'Easy Filling', 'UN Certified']
        },
        {
          id: 8,
          title: '30–35 LTR Jerrycan – Cross Neck',
          slug: '30-35-ltr-jerrycan-cross-neck',
          imageUrl: '/listing/hdpe-jerrycans/30-35-ltr-jerrycan-cross-neck.png',
          capacity: '30-35 Liters',
          material: 'HDPE',
          features: ['Cross Neck', 'Easy Pour', 'Chemical Resistant']
        },
        {
          id: 9,
          title: '30–35 LTR Jerrycan – SC Neck (Double Layer)',
          slug: '30-35-ltr-jerrycan-sc-neck-double-layer',
          imageUrl: '/listing/hdpe-jerrycans/30-35-ltr-jerry-can-straight-neck.png',
          capacity: '30-35 Liters',
          material: 'HDPE',
          features: ['Double Layer', 'SC Neck', 'Extra Strength']
        }
      ],
      relatedProducts: [
        { name: 'Polycans', slug: 'polycans' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-pails', parentSlug: 'plastic-buckets-pails' }
      ],
      GlobalReachSection:{
        title: 'Engineered for Safe Storage and Global Transport',
        description: "Choose from BMRAJ's range of HDPE Jerrycans designed for leak-proof reliability and heavy-duty industrial use."
      },
      idealRange: {
        title: 'Applications of HDPE Jerrycans in Industries',
        applications: [
          {
            title: 'Lubricants & Oils',
            description: 'Ideal for packaging automotive oils, greases, and industrial fluids.'
          },
          {
            title: 'Chemicals & Solvents',
            description: 'Ensures safe containment and transport of reactive and hazardous materials.'
          },
          {
            title: 'Agrochemicals',
            description: 'Reliable packaging for liquid fertilizers, pesticides, and emulsions.'
          },
          {
            title: 'Food & Beverage Concentrates',
            description: 'Food-grade variants suitable for syrups, edible oils, and bulk ingredients.'
          },
          {
            title: 'Export Packaging',
            description: 'Preferred for international shipments due to durability and compliance.'
          }
        ]
      },
      faq:[
        {
          title: 'What makes BMRAJ HDPE Jerrycans suitable for industrial use?',
          content: 'They are made from virgin HDPE, ensuring high impact strength, chemical resistance, and leak-proof performance.'
        },
        {
          title: 'Are BMRAJ HDPE Jerrycans available in different capacities?',
          content: 'Yes. Our range includes 3 to 35 LTR variants with different neck and layer configurations.'
        },
        {
          title: 'Can I request customized colours or branding?',
          content: 'Yes. BMRAJ offers customization in colour, cap style, and branding to match client specifications.'
        }
      ]
    },
    'polycans': {
      name: 'Polycans',
      slug: 'polycans',
      title: 'Polycans (Mousers)',
      description: 'BMRAJ Polycans are engineered for industrial liquid handling with superior strength, precision, and safety. Made from virgin HDPE using advanced blow molding, they ensure leak-proof sealing, stacking stability, and chemical resistance for demanding packaging operations.',
      products: [
        {
          id: 1,
          title: '5 LTR POLYCAN (MOUSER)',
          slug: '5-ltr-polycan',
          imageUrl: '/listing/polycans/5-ltr-polycan.png',
          capacity: '5 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Stackable', 'Leak-Proof']
        },
        {
          id: 2,
          title: '7.5 LTR POLYCAN (MOUSER)',
          slug: '7-5-ltr-polycan',
          imageUrl: '/listing/polycans/7.5-ltr-polycan.png',
          capacity: '7.5 Liters',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Ergonomic Handle', 'Leak-Proof']
        },
        {
          id: 3,
          title: '10 LTR POLYCAN (MOUSER)',
          slug: '10-ltr-polycan',
          imageUrl: '/listing/polycans/10-ltr-polycan.png',
          capacity: '10 Liters',
          material: 'HDPE',
          features: ['Heavy Duty', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 4,
          title: '10–14 LTR POLYCAN (MOUSER)',
          slug: '10-14-ltr-polycan',
          imageUrl: '/listing/polycans/10-14-ltr-polycan.png',
          capacity: '10-14 Liters',
          material: 'HDPE',
          features: ['Variable Capacity', 'Chemical Resistant', 'Stackable']
        },
        {
          id: 5,
          title: '20 LTR POLYCAN (MOUSER)',
          slug: '20-ltr-polycan',
          imageUrl: '/listing/polycans/20-ltr-polycan.png',
          capacity: '20 Liters',
          material: 'HDPE',
          features: ['Heavy Duty', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 6,
          title: '30 LTR POLYCAN (MOUSER)',
          slug: '30-ltr-polycan',
          imageUrl: '/listing/polycans/30-ltr-polycan.png',
          capacity: '30 Liters',
          material: 'HDPE',
          features: ['Industrial Grade', 'Chemical Resistant', 'Leak-Proof']
        },
        {
          id: 7,
          title: '35 LTR POLYCAN (MOUSER)',
          slug: '35-ltr-polycan',
          imageUrl: '/listing/polycans/35-ltr-polycan.png',
          capacity: '35 Liters',
          material: 'HDPE',
          features: ['Maximum Capacity', 'Chemical Resistant', 'UN Certified']
        }
      ],
      relatedProducts: [
        { name: 'HDPE Jerrycans', slug: 'hdpe-jerrycans' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-pails', parentSlug: 'plastic-buckets-pails' }
      ],
      GlobalReachSection:{
        title: 'Reliable Polycans for Industrial Strength and Safety',
        description: 'Choose BMRAJ Polycans engineered for chemical compatibility, stacking endurance, and long-term industrial performance.'
      },
      idealRange: {
        title: 'Industrial Applications of Polycans',
        applications: [
          {
            title: 'Lubricants & Oils',
            description: 'Ideal for secure packaging and dispensing of lubricants, greases, and hydraulic fluids.'
          },
          {
            title: 'Chemicals & Solvents',
            description: 'Resistant to acids, alkalis, and solvents, ensuring safe chemical transport and storage.'
          },
          {
            title: 'Agrochemicals',
            description: 'Preferred by agro-industrial suppliers for fertilizers, pesticides, and liquid formulations.'
          },
          {
            title: 'Food & Beverage Concentrates',
            description: 'Optional food-grade variants suited for syrups, concentrates, and liquid ingredients.'
          },
          {
            title: 'Industrial Logistics',
            description: 'Trusted by industries for stackable, durable, and space-efficient bulk liquid packaging.'
          }
        ]
      },
      faq:[
        {
          title: 'What are BMRAJ Polycans made of?',
          content: 'Our polycans are manufactured from virgin HDPE, providing excellent impact resistance and chemical compatibility.'
        },
        {
          title: 'What capacities are available in BMRAJ Polycans?',
          content: 'We offer 5 LTR to 35 LTR variants, optimized for both medium-volume and heavy-duty packaging needs.'
        },
        {
          title: 'Can Polycans be customized?',
          content: 'Yes. Customization options include colour, labeling, neck type, and double-layer configurations to meet specific operational requirements.'
        }
      ]
    }
   
  },

  'small-bottles-containers': {
    'small-bottles': {
      name: 'Small Bottles (HDPE / PET)',
      slug: 'small-bottles',
      title: 'Small Bottles (HDPE / PET)',
      description: 'BMRAJ Small Bottles are precision blow-moulded for strength, chemical compatibility, and leak-proof performance. Manufactured using virgin High-Density Polyethylene (HDPE) and Polyethylene Terephthalate (PET), they provide dependable packaging for lubricants, agrochemicals, pharmaceuticals, and personal care formulations.',
      products: [
        {
          id: 1,
          title: 'Narrow Mouth 100-1000 ml',
          slug: 'narrow-mouth-100-1000-ml-bottles',
          imageUrl: '/listing/small-bottles-hdpe/hdpe-bottle-narrow-mouth-100-1000-ml.png',
          capacity: '100-1000 ml',
          material: 'HDPE / PET',
          features: ['Narrow Mouth', 'Chemical Resistant', 'Leak-Proof']
        },
        {
          id: 2,
          title: 'Wide Mouth 100-1000 ml',
          slug: 'wide-mouth-100-1000-ml-bottles',
          imageUrl: '/listing/small-bottles-hdpe/hdpe-bottle-wide-mouth-100-1000-ml.png',
          capacity: '100-1000 ml',
          material: 'HDPE / PET',
          features: ['Wide Mouth', 'Easy Filling', 'Chemical Resistant']
        }
      ],
      relatedProducts: [
        { name: 'Multi-Purpose Containers', slug: 'multi-purpose-containers' },
        { name: 'Containers for Lubricants', slug: 'containers-for-lubricants' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-and-pails', parentSlug: 'plastic-buckets-and-pails' }
      ],
      GlobalReachSection: {
        title: 'Industrial-Grade Bottles You Can Trust',
        description: 'Choose BMRAJ Small Bottles for leak-proof, durable, and compliant packaging trusted across the lubricant, chemical, and healthcare industries.'
      },
      idealRange: {
        title: 'Applications of Small Bottles in Industries',
        applications: [
          {
            title: 'Lubricants & Oils',
            description: 'Ideal for engine oils, additives, and maintenance fluids in compact volumes.'
          },
          {
            title: 'Agrochemicals',
            description: 'Secure packaging for pesticides, plant growth regulators, and liquid fertilizers.'
          },
          {
            title: 'Pharmaceuticals & Healthcare',
            description: 'Used for medicinal liquids and diagnostic solutions requiring contamination-free sealing.'
          },
          {
            title: 'Cosmetics & Personal Care',
            description: 'Suitable for lotions, creams, and hygiene formulations with branding flexibility.'
          },
          {
            title: 'Chemical & Laboratory Use',
            description: 'Ensures safe storage and handling of laboratory reagents and industrial samples.'
          }
        ]
      },
      faq: [
        {
          title: 'What materials are used for BMRAJ Small Bottles?',
          content: 'They are made from virgin HDPE and PET, ensuring chemical resistance, clarity, and long-term durability.'
        },
        {
          title: 'What sizes are available in the Small Bottle range?',
          content: 'We offer bottle capacities ranging from 100 ml to 1000 ml, covering narrow- and wide-mouth variants.'
        },
        {
          title: 'Can bottles be customized for branding or cap design?',
          content: 'Yes. We provide full customization in colour, labeling, and closure options such as tamper-evident caps.'
        }
      ]
    },
    'multipurpose-containers': {
      name: 'Multipurpose Containers',
      slug: 'multipurpose-containers',
      title: 'Multipurpose Containers',
      description: 'BMRAJ Multipurpose Containers are designed to meet diverse industrial storage and packaging needs. Manufactured using virgin High-Density Polyethylene (HDPE) through advanced blow molding, they deliver excellent chemical resistance, dimensional stability, and secure sealing for agrochemical, cosmetic, and laboratory applications.',
      products: [
        {
          id: 1,
          title: 'Pesticides & Insecticides Bottles',
          slug: 'pesticides-insecticides-bottles',
          imageUrl: '/listing/multipurpose-containers/pesticides-insecticides-bottles.png',
          capacity: 'Various',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Leak-Proof', 'Secure Sealing']
        },
        {
          id: 2,
          title: 'Thinner & Cosmetics Bottles',
          slug: 'thinner-cosmetics-bottles',
          imageUrl: '/listing/multipurpose-containers/thinner-cosmetics-bottles.png',
          capacity: 'Various',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Durable', 'Easy Handling']
        },
        {
          id: 3,
          title: 'Chemical & Laboratory Bottles',
          slug: 'chemical-laboratory-bottles',
          imageUrl: '/listing/multipurpose-containers/agro-chemical-bottles.png',
          capacity: 'Various',
          material: 'HDPE',
          features: ['Chemical Resistant', 'Precision Sealing', 'Laboratory Grade']
        }
      ],
      relatedProducts: [
        { name: 'Small Bottles (HDPE / PET)', slug: 'small-bottles' },
        { name: 'Containers for Lubricants', slug: 'containers-for-lubricants' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-and-pails', parentSlug: 'plastic-buckets-and-pails' }
      ],
      GlobalReachSection: {
        title: 'Versatile Containers for Every Industrial Need',
        description: 'Choose BMRAJ Multipurpose Containers for safe, chemical-resistant, and long-lasting packaging across agrochemical, cosmetic, and laboratory sectors.'
      },
      idealRange: {
        title: 'Applications of Multipurpose Containers in Industries',
        applications: [
          {
            title: 'Agrochemicals',
            description: 'Ideal for packaging pesticides, insecticides, and liquid fertilizers safely and efficiently.'
          },
          {
            title: 'Cosmetics & Personal Care',
            description: 'Used for thinner-based formulations, lotions, and care products requiring reliable sealing.'
          },
          {
            title: 'Laboratories & Research',
            description: 'Perfect for storing chemical samples, reagents, and solvents under controlled conditions.'
          },
          {
            title: 'Industrial Chemicals',
            description: 'Compatible with various acids, bases, and formulations used in process industries.'
          },
          {
            title: 'Food & Flavour Additives',
            description: 'Optional food-grade variants available for flavouring compounds and liquid ingredients.'
          }
        ]
      },
      faq: [
        {
          title: 'What material are BMRAJ Multipurpose Containers made of?',
          content: 'They are made from virgin High-Density Polyethylene (HDPE), offering strength, leak-proof sealing, and chemical compatibility.'
        },
        {
          title: 'What industries use these containers?',
          content: 'They are widely used across agrochemical, cosmetics, laboratory, and process industries for liquid and semi-liquid products.'
        },
        {
          title: 'Can these containers be customized?',
          content: 'Yes. We offer customization in shape, colour, labeling, and closure type to align with specific operational and branding requirements.'
        }
      ]
    },
    'containers-for-lubricants': {
      name: 'Containers for Lubricants',
      slug: 'containers-for-lubricants',
      title: 'Containers for Lubricants',
      description: 'BMRAJ Containers for Lubricants are built for endurance, chemical resistance, and consistent performance in demanding industrial environments. Manufactured using virgin High-Density Polyethylene (HDPE) through precision blow molding, these containers ensure leak-proof strength and easy handling for all types of automotive and industrial lubricants.',
      products: [
        {
          id: 1,
          title: 'Lubricating Oil Plastic Bottle',
          slug: 'lubricating-oil-plastic-bottle',
          imageUrl: '/listing/containers-for-lubricants/lubricating-oil-plastic-bottle.png',
          capacity: 'Various',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Easy Pour']
        },
        {
          id: 2,
          title: 'Lube Oil Bottle',
          slug: 'lube-oil-bottle',
          imageUrl: '/listing/containers-for-lubricants/lube-oil-bottle.png',
          capacity: 'Various',
          material: 'HDPE',
          features: ['Durable', 'Chemical Resistant', 'Secure Sealing']
        },
        {
          id: 3,
          title: 'Plastic Jerry Can',
          slug: 'plastic-jerry-can',
          imageUrl: '/listing/containers-for-lubricants/plastic-jerry-can.png',
          capacity: 'Various',
          material: 'HDPE',
          features: ['Stackable', 'Heavy Duty', 'Leak-Proof']
        }
      ],
      relatedProducts: [
        { name: 'Small Bottles (HDPE / PET)', slug: 'small-bottles' },
        { name: 'Multipurpose Containers', slug: 'multipurpose-containers' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' },
        { name: 'Plastic Buckets & Pails', slug: 'plastic-buckets-and-pails', parentSlug: 'plastic-buckets-and-pails' }
      ],
      GlobalReachSection: {
        title: 'Trusted Containers for Lubricant Packaging',
        description: 'Choose BMRAJ Containers for Lubricants for durable, leak-proof, and export-ready packaging across automotive and industrial sectors.'
      },
      idealRange: {
        title: 'Applications of Containers for Lubricants in Industries',
        applications: [
          {
            title: 'Automotive & Machinery',
            description: 'Ideal for packaging lubricating oils, greases, and additives for engines and machinery.'
          },
          {
            title: 'Industrial Oils & Fluids',
            description: 'Ensures safe storage and dispensing of hydraulic, gear, and transformer oils.'
          },
          {
            title: 'Chemical & Process Industries',
            description: 'Resistant to solvents and process fluids requiring long-term containment.'
          },
          {
            title: 'Export & Distribution',
            description: 'Trusted by lubricant manufacturers for heavy-duty, stackable, and transport-compliant packaging.'
          },
          {
            title: 'Aftermarket & OEM Supply',
            description: 'Used by lubricant brands for secure packaging in refills and distribution networks.'
          }
        ]
      },
      faq: [
        {
          title: 'What material are the Containers for Lubricants made of?',
          content: 'They are made from virgin High-Density Polyethylene (HDPE), ensuring chemical resistance, durability, and sealing strength.'
        },
        {
          title: 'What capacities are available in this range?',
          content: 'Our range includes small bottles, jerrycans, and drums from 100 ML to 210 LTR, covering both domestic and export packaging needs.'
        },
        {
          title: 'Can these containers be customized?',
          content: "Yes. BMRAJ offers customized shapes, branding, and closure systems to meet lubricant manufacturers' design and operational requirements."
        }
      ]
    }
  },

  'pet-bottles-preforms': {
    'pet-bottles': {
      name: 'PET Bottles',
      slug: 'pet-bottles',
      title: 'PET Bottles',
      description: 'BMRAJ PET Bottles combine clarity, durability, and precision for diverse packaging applications. Manufactured from virgin Polyethylene Terephthalate (PET) through advanced blow molding, these bottles deliver high transparency, impact resistance, and sealing performance across food, chemical, and agro-industrial sectors.',
      products: [
        {
          id: 1,
          title: 'Pesticides Bottles (100 ML – 250 ML – 500 ML – 1 LTR)',
          slug: 'pesticides-bottles-100ml-250ml-500ml-1ltr',
          imageUrl: '/listing/pet-bottles/pesticides-bottles.png',
          capacity: '100 ML – 1 LTR',
          material: 'PET',
          features: ['High Clarity', 'Chemical Resistant', 'Leak-Proof']
        },
        {
          id: 2,
          title: '1 LTR Oil Jar',
          slug: '1-ltr-oil-jar',
          imageUrl: '/listing/pet-bottles/1-ltr-oil-jar.png',
          capacity: '1 Liter',
          material: 'PET',
          features: ['Food Grade', 'High Transparency', 'Durable']
        }
      ],
      relatedProducts: [
        { name: 'PET Preforms', slug: 'pet-preforms' }
      ],
      otherCategories: [
        { name: 'Small Bottles & Containers', slug: 'small-bottles-containers', parentSlug: 'small-bottles-containers' },
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' }
      ],
      GlobalReachSection: {
        title: 'Industrial-Grade Bottles You Can Trust',
        description: 'Choose BMRAJ PET Bottles for high clarity, strength, and reliability across food, chemical, and agrochemical packaging lines.'
      },
      idealRange: {
        title: 'Applications of PET Bottles in Industries',
        applications: [
          {
            title: 'Edible Oils & Food Packaging',
            description: 'Ideal for packaging cooking oils, ghee, and food-grade liquids.'
          },
          {
            title: 'Agrochemicals & Fertilizers',
            description: 'Provides secure, non-reactive storage for pesticides and liquid nutrients.'
          },
          {
            title: 'Pharmaceutical & Healthcare',
            description: 'Used for nutraceuticals, syrups, and medical formulations.'
          },
          {
            title: 'FMCG & Household Products',
            description: 'Perfect for shampoos, detergents, and personal care formulations.'
          },
          {
            title: 'Industrial Chemicals',
            description: 'Compatible with light solvents and cleaning solutions requiring PET strength.'
          }
        ]
      },
      faq: [
        {
          title: 'What material are BMRAJ PET Bottles made from?',
          content: 'They are made from virgin Polyethylene Terephthalate (PET), ensuring clarity, impact strength, and food-contact compliance.'
        },
        {
          title: 'What capacities are available in this range?',
          content: 'We offer PET bottles in multiple capacities from 100 ML to 1 LTR, including standard and custom designs.'
        },
        {
          title: 'Can PET Bottles be customized?',
          content: 'Yes. We offer customization in colour, shape, labeling to meet specific branding and packaging needs.'
        }
      ]
    },
    'preforms': {
      name: 'Preforms (PET)',
      slug: 'preforms',
      title: 'Preforms (PET)',
      description: 'BMRAJ PET Preforms are designed for clarity, consistency, and strength—forming the foundation for high-quality bottles and jars. Manufactured using virgin Polyethylene Terephthalate (PET) through precision injection molding, they ensure uniform wall thickness, weight accuracy, and compatibility with multiple bottle and jar designs.',
      products: [
        {
          id: 1,
          title: 'Preform for Agro PET Bottles',
          slug: '500-ml-preform-agro-pet-bottles',
          imageUrl: '/listing/pet-preforms/500-ml-preform-for-bottle-jar.png',
          capacity: '500 ML',
          material: 'PET',
          features: ['High Clarity', 'Uniform Wall Thickness', 'Weight Accurate']
        },
        {
          id: 2,
          title: '1 LTR Preform for Oil Bottle',
          slug: '1-ltr-preform-oil-bottle',
          imageUrl: '/listing/pet-preforms/1-ltr-preform-for-bottle-jar.png',
          capacity: '1 Liter',
          material: 'PET',
          features: ['High Clarity', 'Consistent Quality', 'Food Grade']
        },
        {
          id: 3,
          title: 'ROPP Preform 90 ml',
          slug: 'ropp-preform-90-ml',
          imageUrl: '/product-details/preforms/ropp-preform-90-ml/ropp-preform-90-ml-05.jpg',
          capacity: '90 ml',
          material: 'PET',
          features: ['High Clarity', 'ROPP Neck', 'Pharma Grade']
        },
        {
          id: 4,
          title: 'ROPP Preform 180 ml',
          slug: 'ropp-preform-180-ml',
          // Shares the 90 ml ROPP photography until 180 ml shots are available.
          imageUrl: '/product-details/preforms/ropp-preform-90-ml/ropp-preform-90-ml-05.jpg',
          capacity: '180 ml',
          material: 'PET',
          features: ['High Clarity', 'ROPP Neck', 'Pharma Grade']
        }
      ],
      relatedProducts: [
        { name: 'PET Bottles', slug: 'pet-bottles' }
      ],
      otherCategories: [
        { name: 'Small Bottles & Containers', slug: 'small-bottles-containers', parentSlug: 'small-bottles-containers' },
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' }
      ],
      GlobalReachSection: {
        title: 'High-Quality PET Preforms for Every Packaging Application',
        description: 'Choose BMRAJ PET Preforms for clarity, durability, and precision-engineered consistency across industrial and consumer packaging lines.'
      },
      idealRange: {
        title: 'Applications of PET Preforms in Industries',
        applications: [
          {
            title: 'Beverage & Water Bottling',
            description: 'Used in the production of water, juice, and soft drink bottles.'
          },
          {
            title: 'Edible Oils & Food Packaging',
            description: 'Ideal for cooking oil, ghee, and food-grade product packaging.'
          },
          {
            title: 'Pharmaceutical & Healthcare',
            description: 'Ensures contamination-free bottle manufacturing for medicinal and nutraceutical use.'
          },
          {
            title: 'Agrochemical Bottles',
            description: 'Compatible with pesticide and fertilizer formulations requiring PET durability.'
          },
          {
            title: 'FMCG & Personal Care',
            description: 'Used for transparent jars and containers for creams, powders, and liquids.'
          }
        ]
      },
      faq: [
        {
          title: 'What are BMRAJ PET Preforms made of?',
          content: 'They are manufactured from virgin Polyethylene Terephthalate (PET), ensuring strength, clarity, and food-contact safety.'
        },
        {
          title: 'What capacities do the preforms support?',
          content: 'Our preforms are available for 500 ML and 1 LTR bottles and jars, with customization available for other capacities.'
        },
        {
          title: 'Can the preforms be customized?',
          content: "Yes. We offer customization in neck type, colour, and weight based on the client's production and filling requirements."
        }
      ]
    }
  },

  'plastic-buckets-and-pails': {
    'grease-plastic-pail-containers': {
      name: 'Grease Plastic Pail Containers',
      slug: 'grease-plastic-pail-containers',
      title: 'Grease Plastic Pail Containers',
      description: 'Built for industrial durability, BMRAJ Grease Plastic Pail Containers provide reliable and precise packaging for greases, adhesives, and semi-solid materials. Manufactured using virgin Polypropylene Copolymer (PPCP) through precision injection molding, they ensure tamper-proof sealing, leak resistance, and long-term reusability.',
      products: [
        {
          id: 1,
          title: '200 Gms Grease Container',
          slug: '200-gms-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/200-gms-grease-container.png',
          capacity: '200 Grams',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Compact Size']
        },
        {
          id: 2,
          title: '500 Gms Grease Container',
          slug: '500-gms-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/500-gms-grease-container.png',
          capacity: '500 Grams',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Easy Handling']
        },
        {
          id: 3,
          title: '1 KGS Grease Container',
          slug: '1-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/1-kgs-grease-container.png',
          capacity: '1 KG',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Stackable']
        },
        {
          id: 4,
          title: '2 KGS Grease Container',
          slug: '2-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/2-kgs-grease-container.png',
          capacity: '2 KG',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Stackable']
        },
        {
          id: 5,
          title: '3 KGS Grease Container',
          slug: '3-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/3-kgs-grease-container.png',
          capacity: '3 KG',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Heavy Duty']
        },
        {
          id: 6,
          title: '5 KGS Grease Container',
          slug: '5-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/5-kgs-grease-container.png',
          capacity: '5 KG',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Heavy Duty']
        },
        {
          id: 7,
          title: '7 KGS Grease Container',
          slug: '7-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/7-kgs-grease-container.png',
          capacity: '7 KG',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Industrial Grade']
        },
        {
          id: 8,
          title: '10 KGS Grease Container',
          slug: '10-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/10-kgs-grease-container.png',
          capacity: '10 KG',
          material: 'HDPE',
          features: ['Leak-Proof', 'Chemical Resistant', 'Industrial Grade']
        },
        {
          id: 9,
          title: '18 KGS Grease Container',
          slug: '18-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/18-kgs-grease-container.png',
          capacity: '18 KG',
          material: 'HDPE',
          features: ['Heavy Duty', 'Chemical Resistant', 'UN Certified']
        },
        {
          id: 10,
          title: '20 KGS Grease Container',
          slug: '20-kgs-grease-container',
          imageUrl: '/listing/grease-plastic-pail-containers/20-kgs-grease-container.png',
          capacity: '20 KG',
          material: 'HDPE',
          features: ['Heavy Duty', 'Chemical Resistant', 'UN Certified']
        }
      ],
      relatedProducts: [
        { name: 'Lubricant Oil Pail Buckets', slug: 'lubricant-oil-pail-buckets' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' }
      ],
      GlobalReachSection: {
        title: 'Secure, Durable, and Customizable Grease Packaging',
        description: 'Choose BMRAJ Grease Plastic Pail Containers for reliable sealing, impact strength, and efficient industrial performance.'
      },
      idealRange: {
        title: 'Applications of Grease Plastic Pail Containers in Industries',
        applications: [
          {
            title: 'Lubricants & Greases',
            description: 'Perfect for packaging automotive and industrial greases with complete sealing efficiency.'
          },
          {
            title: 'Adhesives & Sealants',
            description: 'Ensures safe containment and easy dispensing of thick or reactive materials.'
          },
          {
            title: 'Chemical Compounds',
            description: 'Compatible with various semi-solid formulations requiring stable storage.'
          },
          {
            title: 'Construction Materials',
            description: 'Ideal for putties, bonding agents, and repair compounds.'
          },
          {
            title: 'Industrial Maintenance Products',
            description: 'Used for storing and distributing multipurpose greases and maintenance pastes.'
          }
        ]
      },
      faq: [
        {
          title: 'What materials are used in BMRAJ Grease Pail Containers?',
          content: 'They are made from virgin Polypropylene Copolymer, offering strength, impact resistance, and tamper-proof sealing.'
        },
        {
          title: 'Are these containers suitable for high-viscosity materials?',
          content: 'Yes, the rigid PPCP construction ensures easy handling and leak-free containment for viscous greases and adhesives.'
        },
        {
          title: 'Can the pails be customized for brand or colour?',
          content: 'Yes. Pails can be customised with brand-specific colours, handle styles, and logo embossing. We also offer durable printing options, including IML (In-Mould Label) printing, which fuses the label into the moulded surface for long-lasting, peel-proof branding.'
        }
      ]
    },
    'lubricant-oil-pail-buckets': {
      name: 'Lubricant Oil Pail Buckets',
      slug: 'lubricant-oil-pail-buckets',
      title: 'Lubricant Oil Pail Buckets',
      description: 'Built for industrial reliability, BMRAJ Lubricant Oil Pail Buckets deliver superior strength, sealing, and reusability for packaging lubricants and oils. Manufactured using virgin Polypropylene Copolymer (PPCP) with injection molding, these buckets ensure leak-proof performance, stacking stability, and long-term durability in demanding industrial use.',
      products: [
        {
          id: 1,
          title: '6 LTR Oil Bucket',
          slug: '6-ltr-oil-bucket',
          imageUrl: '/listing/lubricant-oil-pail-buckets/6-ltr-oil-bucket.png',
          capacity: '6 Liters',
          material: 'PPCP',
          features: ['Leak-Proof', 'Chemical Resistant', 'Stackable']
        },
        {
          id: 2,
          title: '7.5 LTR Oil Bucket',
          slug: '7-5-ltr-oil-bucket',
          imageUrl: '/listing/lubricant-oil-pail-buckets/7.5-ltr-oil-bucket.png',
          capacity: '7.5 Liters',
          material: 'PPCP',
          features: ['Leak-Proof', 'Chemical Resistant', 'Stackable']
        },
        {
          id: 3,
          title: '8.5 LTR Oil Bucket',
          slug: '8-5-ltr-oil-bucket',
          imageUrl: '/listing/lubricant-oil-pail-buckets/8.5-ltr-oil-bucket.png',
          capacity: '8.5 Liters',
          material: 'PPCP',
          features: ['Leak-Proof', 'Chemical Resistant', 'Heavy Duty']
        },
        {
          id: 4,
          title: '10 LTR Oil Bucket',
          slug: '10-ltr-oil-bucket',
          imageUrl: '/listing/lubricant-oil-pail-buckets/10-ltr-oil-bucket.png',
          capacity: '10 Liters',
          material: 'PPCP',
          features: ['Leak-Proof', 'Chemical Resistant', 'Heavy Duty']
        },
        {
          id: 5,
          title: '20 LTR Oil Bucket',
          slug: '20-ltr-oil-bucket',
          imageUrl: '/listing/lubricant-oil-pail-buckets/20-ltr-oil-bucket.png',
          capacity: '20 Liters',
          material: 'PPCP',
          features: ['Heavy Duty', 'Chemical Resistant', 'Industrial Grade']
        },
        {
          id: 6,
          title: '26 LTR Oil Bucket',
          slug: '26-ltr-oil-bucket',
          imageUrl: '/listing/lubricant-oil-pail-buckets/26-ltr-oil-bucket.png',
          capacity: '26 Liters',
          material: 'PPCP',
          features: ['Heavy Duty', 'Chemical Resistant', 'Industrial Grade']
        }
      ],
      relatedProducts: [
        { name: 'Grease Plastic Pail Containers', slug: 'grease-plastic-pail-containers' }
      ],
      otherCategories: [
        { name: 'Drums & Barrels', slug: 'drums-and-barrels', parentSlug: 'drums-and-barrels' },
        { name: 'Jerrycans & Polycans', slug: 'jerrycans-polycans', parentSlug: 'jerrycans-polycans' }
      ],
      GlobalReachSection: {
        title: 'Reliable Packaging for Industrial Oils and Lubricants',
        description: 'Choose BMRAJ Lubricant Oil Pail Buckets for dependable sealing, tamper-proof protection, and efficient handling across supply chains.'
      },
      idealRange: {
        title: 'Applications of Lubricant Oil Pail Buckets in Industries',
        applications: [
          {
            title: 'Lubricants & Oils',
            description: 'Ideal for packaging engine oils, hydraulic fluids, and gear lubricants.'
          },
          {
            title: 'Industrial Fluids',
            description: 'Ensures secure storage and transport of process oils and specialty fluids.'
          },
          {
            title: 'Paints & Coatings',
            description: 'Suitable for solvent-based and viscous materials requiring airtight sealing.'
          },
          {
            title: 'Adhesives & Chemicals',
            description: 'Leak-proof pails designed for sealants and chemical compounds.'
          },
          {
            title: 'Export & Bulk Supply',
            description: 'Preferred by manufacturers for durable, stackable, and compliant bulk packaging.'
          }
        ]
      },
      faq: [
        {
          title: 'What materials are used in BMRAJ Lubricant Oil Pail Buckets?',
          content: 'They are made from virgin Polypropylene Copolymer (PPCP), ensuring strength, chemical resistance, and dimensional stability.'
        },
        {
          title: 'Are these buckets suitable for export or heavy-duty use?',
          content: 'Yes. They are designed for bulk industrial use and export shipments, offering excellent sealing and stacking performance.'
        },
        {
          title: 'Can the pails be customized for branding or colour?',
          content: 'Yes. We provide options for colour variation, labeling, and logo embossing or printing to match your brand requirements.'
        }
      ]
    }
  },


};

// Helper functions
export const getProductListingData = async (categorySlug, productSlug) => {
  await new Promise(resolve => setTimeout(resolve, 50));

  if (!productListingData[categorySlug]) {
    return null;
  }

  const data = productListingData[categorySlug][productSlug];

  if (!data) {
    return null;
  }

  return {
    ...data,
    parentCategory: categorySlug,
    breadcrumbs: generateListingBreadcrumbs(categorySlug, productSlug)
  };
};

export const getAllProductSlugsForCategory = (categorySlug) => {
  if (!productListingData[categorySlug]) {
    return [];
  }

  return Object.keys(productListingData[categorySlug]);
};
