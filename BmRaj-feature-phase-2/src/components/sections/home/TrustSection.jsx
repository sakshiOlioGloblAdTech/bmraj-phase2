'use client'

import StatsSection from '@/components/common/StatsSection'
import IndustrySection from '@/components/common/IndustrySection'
import { getTrustStats } from '@/data/stats'
import { getIndustries } from '@/data/industries'

// Main Component
export default function StatatsTrustSection() {
  return (
    <>
      <StatsSection stats={getTrustStats()} />
      <IndustrySection
        title="Trusted Across Industries"
        description="Deep industry knowledge is the foundation of a great partnership. Our team brings expertise to your specific challenges."
        industries={getIndustries()}
        autoScroll={true}
      />
    </>
  );
}
