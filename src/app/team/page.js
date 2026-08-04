import { Header } from "@/components/layouts";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { generateTeamBreadcrumbs } from "@/utils/breadcrumbs";
import TeamGrid from "@/components/sections/Team/TeamGrid";
import { teamPageData } from "@/data/team";

export const metadata = {
  title: "Our Team | BMRAJ Industries",
  description:
    "Meet the team behind BMRAJ Industries — decades of combined experience in plastic manufacturing, quality assurance, and global supply chain management.",
  openGraph: {
    title: "Our Team | BMRAJ Industries",
    description:
      "Meet the people behind BMRAJ Industries' plastic manufacturing operations in Silvassa, India.",
  },
};

export default function TeamPage() {
  const { title, subtitle, description, members } = teamPageData;

  return (
    <>
      <Header />
      <main className="bg-[#F6F6EF] mt-20">
        <div className="max pad mx-auto py-8 sm:py-12">
          <Breadcrumbs items={generateTeamBreadcrumbs()} />

          <div className="max-w-3xl mb-8 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#183F34] mb-3 sm:mb-4">
              {title.start} <span className="text-[#139C57]">{title.highlight}</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-[600] text-[#23322E] mb-3 sm:mb-4">
              {subtitle}
            </h2>
            <p className="text-[#66726F] text-[15px] md:text-[16px] font-[400] leading-relaxed">
              {description}
            </p>
          </div>

          <TeamGrid members={members} />
        </div>
      </main>
    </>
  );
}
