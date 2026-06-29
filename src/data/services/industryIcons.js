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

// Map industry IDs to their icons
const iconMap = {
  // Injection Molding industries
  "fmcg-personal-care": <FMCGIcon />,
  "food-dairy": <FoodBeverageIcon />,
  "home-appliances": <HomecareIcon />,
  "healthcare-pharma": <HealthcareIcon />,
  "industrial-applications": <IndustrialIcon />,
  // Blow Molding industries
  "lubricants-oils": <IndustrialIcon />,
  "chemicals-solvents": <ChemicalsIcon />,
  "food-beverage": <FoodBeverageIcon />,
  "agrochemicals": <PesticidesIcon />,
  "pharmaceuticals": <HealthcareIcon />,
  // End-to-End Assembly industries
  "pharma-healthcare": <HealthcareIcon />,
  "consumer-utilities": <HomecareIcon />,
};

// Function to add icons to industries array
export const getIndustriesWithIcons = (industries) => {
  return industries.map((industry) => ({
    ...industry,
    icon: iconMap[industry.id] || null,
  }));
};
