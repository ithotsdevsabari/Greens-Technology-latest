import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomePages/DefaultHome/MainBanner";
// import Services from "@/components/HomePages/DefaultHome/Services";
// import About from "@/components/HomePages/DefaultHome/About";
// import OurWorks from "@/components/HomePages/DefaultHome/OurWorks";
// import WorkProcess from "@/components/HomePages/DefaultHome/WorkProcess";
// import Feedback from "@/components/Common/Feedback";
// import Team from "@/components/Common/Team";
// import FunFacts from "@/components/Common/FunFacts";
// import LatestNewsSlider from "@/components/Common/LatestNewsSlider";
// import CtaArea from "@/components/Common/CtaArea";
// import Footer from "@/components/Layouts/Footer";
// import Example  from "@/components/HomePages/DefaultHome/Accordion";
// import ClientFeedback from "@/components/HomePages/AppShowcase/ClientFeedback";
// import FAQ from "@/components/HomePages/AppShowcase/FAQ";
// import Partners from "@/components/HomePages/AppShowcase/Partners";
// import Partner from "@/components/HomePages/DigitalMarketing/Partner";
import CFeedback from "@/components/GoogleCloud/CFeadback";
import Modules from "@/components/GoogleCloud/Modules";
import CourseDetails from "@/components/GoogleCloud/CourseDetails";
import CourseFee from "@/components/GoogleCloud/CourseFee";
import FaqNew from "@/components/GoogleCloud/FaqNew";
import Cta from "@/components/GoogleCloud/Cta";
import ProjectPortfolio from "@/components/GoogleCloud/ProjectPortfolio";
import MeetTheTeam from "@/components/GoogleCloud/MeetTheTeam";
import BookFreeDemo from "@/components/GoogleCloud/BookFreeDemo";
import Features from "@/components/GoogleCloud/Features";
import CareerAsst from "@/components/GoogleCloud/CareerAsst";
import FooterNew from "@/components/Layouts/FooterNew";
import TrainingProgram from "@/components/GoogleCloud/TrainingProgram";

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
