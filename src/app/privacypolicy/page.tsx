import GreensFooter from "@/components/Layouts/GreensFooter";
import Navbar from "@/components/Layouts/Navbar";
import PrivacyPBanner from "@/components/PrivacyPolicy/PrivacyPBanner";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <PrivacyPBanner
        pageTitle="Privacy Policy"
        BGImage="/images/PrivacyP.jpg"
      />

      <PrivacyPolicyContent />
      <GreensFooter />
    </>
  );
}
