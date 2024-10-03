// import { Metadata } from "next";
import PricingComponent from "@/components/Pricing/pricing.index";
// import PricingComponent from "@/components/Pricing/pricing.index";
/** Khai báo meta data cho những trang khác (Ngoài trang home) */
// export const metadata: Metadata = {
//   title: "Pricing",
//   description: "Pricing",
// };
export default function Pricing() {
  return (
    <div>
      <PricingComponent page="page_pricing" />
    </div>
  );
}
