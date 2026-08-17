// Industry Icons for Service Pages
import {
  FMCGIcon,
  FoodBeverageIcon,
  HomecareIcon,
  HealthcareIcon,
  IndustrialIcon,
  ChemicalsIcon,
  PesticidesIcon,
} from "@/data/industries";

// Map industry IDs (real /industries/<slug> values) to their icons
const iconMap = {
  "fmcg": <FMCGIcon />,
  "food-beverage": <FoodBeverageIcon />,
  "homecare": <HomecareIcon />,
  "healthcare": <HealthcareIcon />,
  "industrial": <IndustrialIcon />,
  "chemicals": <ChemicalsIcon />,
  "pesticides-fertilizers": <PesticidesIcon />,
};

// Function to add icons to industries array
export const getIndustriesWithIcons = (industries) => {
  return industries.map((industry) => ({
    ...industry,
    icon: iconMap[industry.id] || null,
  }));
};
