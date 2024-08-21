import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/CloudComputing/MainBanner";
import CFeedback from "@/components/CloudComputing/CFeadback";
import Modules from "@/components/CloudComputing/Modules";
import CourseDetails from "@/components/CloudComputing/CourseDetails";
import FaqNew from "@/components/CloudComputing/FaqNew"; 
import Chart from "@/components/CloudComputing/Chart";
import Disclaimer from "@/components/CloudComputing/Disclaimer";
import Cta from "@/components/Atom/Cta";
import BookFreeDemo from "@/components/Atom/BookFreeDmo";
import GreensFooter from "@/components/Layouts/GreensFooter";
import CareerAssistant from "@/components/Atom/CareerAssistant";

export default function Home() {
  return ( 
    <> 
      <Navbar />
 
      <MainBanner /> 

      <Chart /> 

      <BookFreeDemo/>

      <Modules />

      <CourseDetails />

      <Disclaimer />

      <FaqNew />

      <div className="">
        <h2 className="text-uppercase text-center fs-20 mb-2 text-green">Cloud Computing Platform Certification Training Program Reviews</h2>
        <CFeedback />
      </div>
      

      <Cta/>

      <CareerAssistant/>

      <GreensFooter/>
      
    </>
  );
}
