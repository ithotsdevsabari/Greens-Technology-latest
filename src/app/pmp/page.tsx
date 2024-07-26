import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/Pmp/MainBanner";
import Services from "@/components/Pmp/Services";
import About from "@/components/Pmp/About";
import OurWorks from "@/components/Pmp/OurWorks";
import WorkProcess from "@/components/Pmp/WorkProcess";
import Feedback from "@/components/Common/Feedback";
import Team from "@/components/Common/Team";
import FunFacts from "@/components/Common/FunFacts";
import LatestNewsSlider from "@/components/Common/LatestNewsSlider";
import CtaArea from "@/components/Common/CtaArea";
import Footer from "@/components/Layouts/Footer";
import Example  from "@/components/Pmp/Accordion";
import ClientFeedback from "@/components/HomePages/AppShowcase/ClientFeedback";
import FAQ from "@/components/HomePages/AppShowcase/FAQ";
import Partners from "@/components/HomePages/AppShowcase/Partners";
import Partner from "@/components/HomePages/DigitalMarketing/Partner";
import CFeedback from "@/components/Pmp/CFeadback";
import Modules from "@/components/Pmp/Modules";
import CourseDetails from "@/components/Pmp/CourseDetails";
import CourseFee from "@/components/Pmp/CourseFee";
import FaqNew from "@/components/Pmp/FaqNew";
import Cta from "@/components/Pmp/Cta";
import ProjectPortfolio from "@/components/Pmp/ProjectPortfolio";
import MeetTheTeam from "@/components/Pmp/MeetTheTeam";
import BookFreeDemo from "@/components/Pmp/BookFreeDemo";
import Features from "@/components/Pmp/Features";
import CareerAsst from "@/components/Pmp/CareerAsst";
import FooterNew from "@/components/Layouts/FooterNew";
import TrainingProgram from "@/components/Pmp/TrainingProgram";


export default function Home() {
  return (
    <> 
      <Navbar /> 
  
      <MainBanner /> 

      <Cta/>

      <CFeedback />

      <Modules />    

      <CourseDetails />

      <MeetTheTeam/>

      <CourseFee /> 

      <ProjectPortfolio/>

      <BookFreeDemo/>

      <Features/>

      <Cta/>

      <FaqNew />

      <TrainingProgram />

      <CareerAsst />

      <FooterNew />

      

      
      

      
      


     

      


      {/* <Example /> */}

      {/* <Partner/> 

      <ClientFeedback />

      <FAQ />

      <Footer /> */}
      
      {/* 
      <Services />
      <About />
      <OurWorks />
      <WorkProcess />
      <Feedback />
      <Team />
      <FunFacts />
      <LatestNewsSlider />
      <CtaArea />
      <Partner />
      <Footer />
      */}
    </>
  );
}
