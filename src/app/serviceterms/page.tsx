import GreensFooter from "@/components/Layouts/GreensFooter";
import Navbar from "@/components/Layouts/Navbar";
import ServiceTBanner from "@/components/ServiceTerms/ServiceTBanner";
import ServiceTermsContent from "@/components/ServiceTerms/ServiceTermscontent";

export default function ServiceTerms() {
  return (
    <>
      <Navbar />

      <ServiceTBanner
        pageTitle="Service Terms"
        BGImage="/images/ServiceTerms.png"
      />

      <ServiceTermsContent />
      <GreensFooter />
    </>
  );
}
