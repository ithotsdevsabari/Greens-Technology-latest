
import ImmigrationBanner from "@/components/Immigration/ImmigrationBanner";
import OurServices from "@/components/Immigration/OurServices";
import WhyChooseUs from "@/components/Immigration/WhyChooseUs";
import GreensFooter from "@/components/Layouts/GreensFooter";
import Navbar from "@/components/Layouts/Navbar";

export default function Immigration() {
  return (
    <>
      <Navbar />
      <ImmigrationBanner />
      <WhyChooseUs/>
      <OurServices/>
      <GreensFooter/>
    </>
  );
}
