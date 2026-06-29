import CertificationsCommanSection from "@/components/common/Certifications";
import { row1Items, row2Items, row3Items } from "@/data";


export default function CertificationsSection() {

  return (
     <CertificationsCommanSection
      title="Our Certifications"
      certificationName="ISO 9001 & MSME"
      certificationIcon="/zed-gold.png"
      certificationText="ZED Gold"
      row1Items={row1Items}
      row2Items={row2Items}
      row3Items={row3Items}
    />
  );
}