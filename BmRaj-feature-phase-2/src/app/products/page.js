"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { Header } from "@/components/layouts";
import GlobalReachSection from '@/components/common/GlobalReachSection';

const packagingData = [
  {
    id: 1,
    title: "Drums & Barrels",
    slug: 'drums-and-barrels',
    image: "/product-image/barrels-drums-01.png",
    bgColor: "#C8E6F5",
    description:
      "Full Open Top, L-Ring, and Narrow/Wide Mouth drums designed for maximum durability and UN-compliant performance.",
  },
  {
    id: 2,
    title: "Jerrycans & Polycans",
    slug: "jerrycans-polycans",
    image: "/product-image/Jerrycans-polycans-1.png",
    bgColor: "#E8F5E9",
    description:
      "Leak-proof, stackable, and chemical-resistant jerrycans and polycans for diverse industrial applications.",
  },
  {
    id: 3,
    title: "Plastic Buckets & Pails",
    slug: "plastic-buckets-and-pails",
    image: "/product-image/Pail-containers-buckets-1.png",
    bgColor: "#D1EEAE",
    description:
      "Wide range of pail containers and buckets, ideal for lubricants, grease, and chemical packaging, available in multiple capacities.",
  },
  {
    id: 4,
    title: "Small Bottles & Containers",
    slug: "small-bottles-containers",
    image: "/product-image/Small-bottles-containers-01.png",
    bgColor: "#FFE0B2",
    description:
      "HDPE bottles and multi-purpose containers for lubricants, pesticides, cosmetics, and laboratory use.",
  },
  {
    id: 5,
    title: "PET Bottles & Preforms",
    slug: "pet-bottles-preforms",
    image: "/product-image/Pet-bottles-preforms-01.png",
    bgColor: "#F3E5F5",
    description:
      "Food-grade PET bottles and preforms for oils, beverages, and FMCG packaging, designed for clarity and consistency.",
  },
  {
    id: 6,
    title: "Food Packaging",
    slug: "food-packaging",
    image: "/product-image/Food-packaging-001.png",
    bgColor: "#FFF9C4",
    description:
      "Consumer-safe, lightweight, and attractive food packaging, from dairy cups and jars to sweet and dessert boxes.",
  },
  {
    id: 7,
    title: "Crates",
    slug: "crates",
    image: "/product-image/Crates-1.png",
    bgColor: "#FFCCBC",
    description:
      "Durable milk, fruit, and vegetable crates that ensure long-lasting performance in demanding handling environments.",
  },
  {
    id: 8,
    title: "Blow Molding Accessories",
    slug: "blow-molding-accessories",
    image: "/product-image/Blow-moulding-accesories-01.png",
    bgColor: "#E1BEE7",
    description:
      "High-quality caps, plugs, handles, and clamps, engineered to complement our blow-moulded packaging solutions.",
  },
];

export default function ProductsPage() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const { setRef, inViewStates } = useStaggeredAnimation(packagingData.length, { staggerDelay: 80 });

  return (
    <>
      <Header />
      <main className="bg-[#F6F6EF]">
        <section className="relative py-12 mt-20">
          <div className="max pad">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link href="/" className="text-[#687975] hover:text-[#139C57] transition-colors">
                Home
              </Link>
              <span className="text-[#687975]">&gt;</span>
              <span className="text-[#183F34] font-medium">Products</span>
            </nav>

            {/* Header */}
            <div
              ref={headerRef}
              className={`flex justify-between items-start mb-12 scroll-fade-up ${headerInView ? 'in-view' : ''}`}
            >
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#183F34] mb-2">
                Explore Our Packaging Solutions
                </h1>
                <p className="text-[16px] text-[#687975]">
                Drums, Containers, Lorem, Bottles and more packaging solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packagingData.map((item, index) => (
                <Link href={`/${item.slug}`} key={item.id}>
                  <div
                    ref={setRef(index)}
                    className={`group relative bg-white rounded-3xl p-6 transition-all duration-300 cursor-pointer h-[260px] max-h-[300px] overflow-hidden card-hover-lift card-shine shadow-soft scroll-fade-up ${inViewStates[index] ? 'in-view' : ''}`}
                  >
                    <div className="absolute left-0 right-0 top-6 h-48 flex items-center justify-center">
                      <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[0.6] group-hover:-translate-y-12">
                        <div
                          aria-hidden
                          className="absolute rounded-full"
                          style={{
                            backgroundColor: '#E3EAD9',
                            width: 110,
                            height: 110,
                          }}
                        />
                        <div className="relative z-10 w-[150px] h-[170px] flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="object-contain pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-6 right-6 bottom-3 text-center transition-transform duration-500 group-hover:-translate-y-0">
                      <h3 className="text-lg font-bold text-[#183F34] transition-colors duration-300 group-hover:text-[#139C57]">
                        {item.title}
                      </h3>

                      <div className="overflow-hidden max-h-0 transition-all duration-500 group-hover:max-h-32 group-hover:mt-2">
                        <p className="text-[15px] text-[#5D6865] leading-relaxed opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <GlobalReachSection
            title="Engineered for Protection, Designed for Presentation"
             description="Wherever your market is, we provide the reliable, compliant plastic solutions (custom-engineered moulds and packaging) your business needs"/>
    </>
  );
}
