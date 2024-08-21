
import CareersBanner from "@/components/Careers/CareersBanner";
import Educators from "@/components/Careers/Educators";
import WhyUs from "@/components/Careers/WhyUs";
import GreensFooter from "@/components/Layouts/GreensFooter";
import Navbar from "@/components/Layouts/Navbar";

export default function Careers() {
  return (
    <>

    <Navbar/>
      
      <CareersBanner/>

      <WhyUs/>

      <Educators/>

      <GreensFooter/>

    </>
  );
}
