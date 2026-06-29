import StatsSection from '@/components/common/StatsSection';
import React from 'react'

const DurabilityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
    <path d="M15.9903 33.0107C15.5208 32.5411 15.0798 32.0266 14.6816 31.4835C14.0181 30.5729 14.2182 29.2949 15.1308 28.6313C16.0414 27.9678 17.3174 28.1679 17.983 29.0784C18.2464 29.4419 18.5424 29.791 18.8752 30.1217C20.5147 31.7612 22.6931 32.6636 25.0104 32.6636C27.3277 32.6636 29.5082 31.7612 31.1456 30.1217L42.3748 18.8926C45.7578 15.5095 45.7578 10.0031 42.3748 6.6201C38.9917 3.23706 33.4854 3.23706 30.1023 6.6201L27.9423 8.78019C27.144 9.57848 25.8536 9.57848 25.0553 8.78019C24.257 7.9819 24.257 6.69156 25.0553 5.89327L27.2154 3.73319C32.191 -1.2444 40.2862 -1.2444 45.2617 3.73319C50.2373 8.70873 50.2373 16.8039 45.2617 21.7795L34.0325 33.0087C31.6234 35.4199 28.418 36.7469 25.0104 36.7469C21.6029 36.7469 18.3975 35.4199 15.9903 33.0107ZM12.7604 48.9969C16.17 48.9969 19.3734 47.6699 21.7825 45.2587L23.9426 43.0986C24.7409 42.3023 24.7409 41.0099 23.9426 40.2117C23.1464 39.4134 21.854 39.4154 21.0557 40.2117L18.8936 42.3717C17.2541 44.0112 15.0757 44.9136 12.7584 44.9136C10.4411 44.9136 8.26262 44.0112 6.62317 42.3717C4.98371 40.7323 4.08129 38.5538 4.08129 36.2365C4.08129 33.9192 4.98371 31.7387 6.62317 30.1013L17.8523 18.8721C19.4918 17.2327 21.6702 16.3303 23.9875 16.3303C26.3048 16.3303 28.4853 17.2327 30.1228 18.8721C30.4494 19.2009 30.7475 19.55 31.0129 19.9134C31.6744 20.826 32.9505 21.0302 33.8651 20.3646C34.7778 19.7011 34.9799 18.425 34.3163 17.5124C33.9284 16.9775 33.4895 16.465 33.0117 15.9873C30.6005 13.574 27.3951 12.2469 23.9875 12.2469C20.58 12.2469 17.3746 13.574 14.9654 15.9852L3.73829 27.2144C1.32708 29.6236 0 32.829 0 36.2365C0 39.6441 1.32708 42.8495 3.73829 45.2587C6.14746 47.6699 9.35083 48.9969 12.7604 48.9969Z" fill="#63736F"/>
    </svg>
);

const ContainmentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="37" viewBox="0 0 49 37" fill="none">
    <path d="M46.9583 32.6667V4.08333C48.0853 4.08333 49 3.16867 49 2.04167C49 0.914667 48.0853 0 46.9583 0H2.04167C0.914667 0 0 0.914667 0 2.04167C0 3.16867 0.914667 4.08333 2.04167 4.08333V32.6667C0.914667 32.6667 0 33.5813 0 34.7083C0 35.8353 0.914667 36.75 2.04167 36.75H46.9583C48.0853 36.75 49 35.8353 49 34.7083C49 33.5813 48.0853 32.6667 46.9583 32.6667ZM6.125 4.08333H42.875V32.6667H6.125V4.08333ZM36.75 10.2083V26.5417C36.75 27.6687 35.8353 28.5833 34.7083 28.5833C33.5813 28.5833 32.6667 27.6687 32.6667 26.5417V10.2083C32.6667 9.08133 33.5813 8.16667 34.7083 8.16667C35.8353 8.16667 36.75 9.08133 36.75 10.2083ZM26.5417 10.2083V26.5417C26.5417 27.6687 25.627 28.5833 24.5 28.5833C23.373 28.5833 22.4583 27.6687 22.4583 26.5417V10.2083C22.4583 9.08133 23.373 8.16667 24.5 8.16667C25.627 8.16667 26.5417 9.08133 26.5417 10.2083ZM16.3333 10.2083V26.5417C16.3333 27.6687 15.4187 28.5833 14.2917 28.5833C13.1647 28.5833 12.25 27.6687 12.25 26.5417V10.2083C12.25 9.08133 13.1647 8.16667 14.2917 8.16667C15.4187 8.16667 16.3333 9.08133 16.3333 10.2083Z" fill="#63736F"/>
    </svg>
);

const EasyHandlingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
    <path d="M46.9583 36.75H16.3333C12.9564 36.75 10.2083 34.0019 10.2083 30.625V8.16667C10.2083 3.66275 6.54558 0 2.04167 0C0.912625 0 0 0.914667 0 2.04167C0 3.16867 0.912625 4.08333 2.04167 4.08333C4.29363 4.08333 6.125 5.91471 6.125 8.16667V30.625C6.125 34.8022 8.6485 38.4017 12.25 39.9799V41.8542C12.25 45.7946 15.4554 49 19.3958 49C23.3363 49 26.5417 45.7946 26.5417 41.8542V40.8333H32.6667V41.8542C32.6667 45.7946 35.8721 49 39.8125 49C43.7529 49 46.9583 45.7946 46.9583 41.8542V40.8333C48.0874 40.8333 49 39.9207 49 38.7917C49 37.6626 48.0874 36.75 46.9583 36.75ZM22.4583 41.8542C22.4583 43.5426 21.0843 44.9167 19.3958 44.9167C17.7074 44.9167 16.3333 43.5426 16.3333 41.8542V40.8333H22.4583V41.8542ZM42.875 41.8542C42.875 43.5426 41.501 44.9167 39.8125 44.9167C38.124 44.9167 36.75 43.5426 36.75 41.8542V40.8333H42.875V41.8542ZM22.4583 32.6667H38.7917C43.2956 32.6667 46.9583 29.0039 46.9583 24.5V14.2917C46.9583 9.78775 43.2956 6.125 38.7917 6.125H22.4583C17.9544 6.125 14.2917 9.78775 14.2917 14.2917V24.5C14.2917 29.0039 17.9544 32.6667 22.4583 32.6667ZM28.5833 10.2083H32.6667V16.3333H28.5833V10.2083ZM18.375 14.2917C18.375 12.0397 20.2064 10.2083 22.4583 10.2083H24.5V16.3333C24.5 18.5853 26.3314 20.4167 28.5833 20.4167H32.6667C34.9186 20.4167 36.75 18.5853 36.75 16.3333V10.2083H38.7917C41.0436 10.2083 42.875 12.0397 42.875 14.2917V24.5C42.875 26.752 41.0436 28.5833 38.7917 28.5833H22.4583C20.2064 28.5833 18.375 26.752 18.375 24.5V14.2917Z" fill="#63736F"/>
    </svg>
);

const VersatileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
    <path d="M42.868 30.625H38.7846C35.4159 30.625 32.6596 33.3813 32.6596 36.75V40.8334C32.6596 44.2021 35.4159 46.9584 38.7846 46.9584H42.868C46.2367 46.9584 48.993 44.2021 48.993 40.8334V36.75C48.993 33.3813 46.2367 30.625 42.868 30.625ZM44.9096 40.8334C44.9096 41.9563 43.9909 42.875 42.868 42.875H38.7846C37.6617 42.875 36.743 41.9563 36.743 40.8334V36.75C36.743 35.6271 37.6617 34.7084 38.7846 34.7084H42.868C43.9909 34.7084 44.9096 35.6271 44.9096 36.75V40.8334ZM42.868 2.0417H34.7013C31.3325 2.0417 28.5763 4.79795 28.5763 8.1667V16.3334C28.5763 19.7021 31.3325 22.4584 34.7013 22.4584H42.868C46.2367 22.4584 48.993 19.7021 48.993 16.3334V8.1667C48.993 4.79795 46.2367 2.0417 42.868 2.0417ZM44.9096 16.3334C44.9096 17.4563 43.9909 18.375 42.868 18.375H34.7013C33.5784 18.375 32.6596 17.4563 32.6596 16.3334V8.1667C32.6596 7.04378 33.5784 6.12503 34.7013 6.12503H42.868C43.9909 6.12503 44.9096 7.04378 44.9096 8.1667V16.3334ZM23.86 8.73837C24.6767 9.5142 24.7175 10.8005 23.9417 11.6171C23.5334 12.0459 23.0025 12.25 22.4717 12.25C21.9613 12.25 21.4509 12.0663 21.063 11.6784L14.305 5.24712V46.9584C14.305 48.0813 13.3863 49 12.2634 49C11.1405 49 10.2217 48.0813 10.2217 46.9584V5.24712L3.44337 11.6784C2.6267 12.4542 1.34045 12.4338 0.564616 11.6171C-0.211217 10.8005 -0.1908 9.5142 0.646283 8.73837L7.95545 1.75587C10.3034 -0.59205 14.1825 -0.59205 16.5713 1.7967L23.86 8.73837Z" fill="#63736F"/>
    </svg>
)

const defaultStatsData = [
    {
      id: 'durability',
      icon: <DurabilityIcon />,
      title: "Durability",
      subtitle: "High-grade HDPE construction resists impact, corrosion, and chemical exposure."
    },
    {
      id: 'containment',
      icon: <ContainmentIcon />,
      title: "Containment",
      subtitle: "Leak-proof designs with UN certification safeguard hazardous and sensitive products."
    },
    {
      id: 'easy-handling',
      icon: <EasyHandlingIcon />,
      title: "Easy Handling",
      subtitle: "Stackable shapes and standard sizes simplify storage and logistics operations."
    },
    {
      id: 'versatile',
      icon: <VersatileIcon />,
      title: "Versatile",
      subtitle: "Available in open-top, narrow-mouth, and customized options for varied applications."
    },
    {
      id: 'versatility',
      icon: <VersatileIcon />,
      title: "Versatile",
      subtitle: "Available in open-top, narrow-mouth, and customized options for varied applications."
    },
    {
      id: 'compatibility',
      icon: <VersatileIcon />,
      title: "Versatile",
      subtitle: "Available in open-top, narrow-mouth, and customized options for varied applications."
    } ,
    {
      id: 'quality-production',
      icon: <VersatileIcon />,
      title: "Versatile",
      subtitle: "Available in open-top, narrow-mouth, and customized options for varied applications."
    } 
  ];

// Icon mapping for dynamic stats
const iconMap = {
  durability: <DurabilityIcon />,
  containment: <ContainmentIcon />,
  'easy-handling': <EasyHandlingIcon />,
  'leak-proof': <ContainmentIcon />,
  versatile: <VersatileIcon />,
  versatility: <VersatileIcon />,
  compatibility: <ContainmentIcon />,
  'quality-production': <EasyHandlingIcon />,
  // PET Bottles & Preforms
  clarity: <VersatileIcon />,
  lightweight: <EasyHandlingIcon />,
  flexibility: <VersatileIcon />,
  // Food Packaging
  'food-safe': <ContainmentIcon />,
  'barrier-seal': <ContainmentIcon />,
  'shape-flexibility': <VersatileIcon />,
  'production-ready': <EasyHandlingIcon />,
  // Industrial Crates
  'durable-production': <DurabilityIcon />,
  'stack-optimisation': <VersatileIcon />,
  'material-versatility': <VersatileIcon />,
  'ease-handling': <EasyHandlingIcon />,
  // Blow Molding Accessories
  'seal-integrity': <ContainmentIcon />,
  'material-strength': <DurabilityIcon />,
  'functional-design': <EasyHandlingIcon />,
};


export default function CategoryStats({ statsData }) {
  // If custom statsData is provided as an array, map icons to it
  // Otherwise use default stats
  const stats = (statsData && Array.isArray(statsData)) ? statsData.map(stat => ({
    ...stat,
    icon: iconMap[stat.id] || <DurabilityIcon />
  })) : defaultStatsData;

  return (
    <div>
      <StatsSection stats={stats}
      containerClassName={'pad max py-12'}
      titleClassName={'text-primary text-[24px] font-[700] mb-2'}
      subtitleClassName={'text-16px text-[#66726F]'}
      gridClassName={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-8'}
      borderClassName={'lg:border-r border-gray-300 px-2 '}/>
    </div>
  );
}


