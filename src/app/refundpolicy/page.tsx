import GreensFooter from "@/components/Layouts/GreensFooter";
import Navbar from "@/components/Layouts/Navbar";
import RefundPBanner from "@/components/RefundPolicy/RefundPBanner";
import RefundPolicyContent from "@/components/RefundPolicy/RefundPolicyContent";

export default function RefundPolicy() {
  return (
    <>
      <Navbar />

      <RefundPBanner
        pageTitle="Refund Policy"
        BGImage="/images/refund.jpg"
      />

      <RefundPolicyContent />
      <GreensFooter />
    </>
  );
}
