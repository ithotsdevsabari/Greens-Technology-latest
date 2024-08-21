import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/ScrumMaster/MainBanner";
import CFeedback from "@/components/ScrumMaster/CFeadback";
import Modules from "@/components/ScrumMaster/Modules";
import CourseDetails from "@/components/ScrumMaster/CourseDetails";
import FaqNew from "@/components/ScrumMaster/FaqNew"; 
import Chart from "@/components/ScrumMaster/Chart";
import Disclaimer from "@/components/ScrumMaster/Disclaimer";
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
        <h2 className="text-uppercase text-center fs-20 mb-2 text-green">Scrum Master Certification Training Program Reviews</h2>
        <CFeedback />
      </div>

      <Cta/>

      <CareerAssistant/>

      <GreensFooter />

   
    </>
  );
}
