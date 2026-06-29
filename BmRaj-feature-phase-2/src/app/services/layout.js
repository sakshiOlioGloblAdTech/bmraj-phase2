import { ServicesHeader } from "@/components/layouts";
import "./services.css";

export default function ServicesLayout({ children }) {
  return (
    <div className="services-layout">
      <ServicesHeader />
      {children}
    </div>
  );
}
