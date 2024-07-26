import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/CloudComputing/MainBanner";
import CFeedback from "@/components/CloudComputing/CFeadback";
import Modules from "@/components/CloudComputing/Modules";
import CourseDetails from "@/components/CloudComputing/CourseDetails";
import CourseFee from "@/components/CloudComputing/CourseFee";
import FaqNew from "@/components/CloudComputing/FaqNew"; 
import Cta from "@/components/CloudComputing/Cta";
import ProjectPortfolio from "@/components/CloudComputing/ProjectPortfolio";
import MeetTheTeam from "@/components/CloudComputing/MeetTheTeam";
import BookFreeDemo from "@/components/CloudComputing/BookFreeDemo";
import Features from "@/components/CloudComputing/Features";
// import CareerAsst from "@/components/CloudComputing/CareerAsst";
import CareerAssest from "@/components/Common/CareerAssest";
import FooterNew from "@/components/Layouts/FooterNew";
import TrainingProgram from "@/components/CloudComputing/TrainingProgram";
import CaseStudies from "@/components/CloudComputing/CaseStudies";
import Chart from "@/components/CloudComputing/Chart";
import Disclaimer from "@/components/CloudComputing/Disclaimer";

// import CaseStudies from "../../components/HomePages/StartupAgency/CaseStudies";

export default function Home() {
  return ( 
    <> 
      <Navbar />
 
      <MainBanner /> 

      <Chart /> 

      <BookFreeDemo/>

      <Modules />

      <CourseDetails />

      {/* <CourseDetailsAWS /> */}

      <Disclaimer />

      <FaqNew />

      <div className="">
        <h2 className="text-uppercase text-center fs-20 mb-2 text-green">Cloud Computing Platform Certification Training Program Reviews</h2>
        <CFeedback />
      </div>
      

      <Cta/>

      <CareerAssest />

      <FooterNew />
      
    </>
  );
}
