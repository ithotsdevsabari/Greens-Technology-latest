import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/ScrumMaster/MainBanner";
import CFeedback from "@/components/ScrumMaster/CFeadback";
import Modules from "@/components/ScrumMaster/Modules";
import CourseDetails from "@/components/ScrumMaster/CourseDetails";
import CourseFee from "@/components/DataAnalytics/CourseFee";
import FaqNew from "@/components/ScrumMaster/FaqNew"; 
import ProjectPortfolio from "@/components/DataAnalytics/ProjectPortfolio";
import MeetTheTeam from "@/components/DataAnalytics/MeetTheTeam";
import Features from "@/components/DataAnalytics/Features";
import CareerAsst from "@/components/ScrumMaster/CareerAsst";
import FooterNew from "@/components/Layouts/FooterNew";
import TrainingProgram from "@/components/DataAnalytics/TrainingProgram";
import CaseStudies from "@/components/DataAnalytics/CaseStudies";
import Chart from "@/components/ScrumMaster/Chart";
import Disclaimer from "@/components/ScrumMaster/Disclaimer";
import CareerAssest from "@/components/Common/CareerAssest";
import Cta from "@/components/Atom/Cta";
import BookFreeDemo from "@/components/Atom/BookFreeDmo";
import GreensFooter from "@/components/Layouts/GreensFooter";
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

      <Disclaimer />      

      <FaqNew />

      <div className="">
        <h2 className="text-uppercase text-center fs-20 mb-2 text-green">Scrum Master Certification Training Program Reviews</h2>
        <CFeedback />
      </div>

      <Cta/>

      {/* <CareerAsst /> */}
      <CareerAssest />

      <GreensFooter />
   
    </>
  );
}
