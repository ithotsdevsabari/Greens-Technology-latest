import Navbar from "./../components/Layouts/Navbar";
import OurCourses from "@/components/IndexPage/OurCourses";
import GreensFooter from "@/components/Layouts/GreensFooter";
import Indexthreegrid from "@/components/IndexPage/Indexthreegrid";
import OurTrainingExpertise from "@/components/IndexPage/OurTrainingExpertise";
import ForCareerAssistance from "@/components/IndexPage/ForCareerAssistance";
import MainBanner from "@/components/IndexPage/MainBanner";
import StoryVisionNew from "@/components/IndexPage/StoryVisionNew";
import OurUpcomingBatches from "@/components/IndexPage/OurUpcomingBatches";
import AccordionSec from "@/components/IndexPage/AccordionSec";
import IndexTestimonials from "@/components/IndexPage/IndexTestimonials";

export default function Home() {
  return (
    <>
      <Navbar />  

      <MainBanner/>

      {/* <IndexBanner /> */}

      <Indexthreegrid/>

      <OurCourses />

      <OurTrainingExpertise />

      <OurUpcomingBatches/>

      {/* <StoryVision/>   */}

      <StoryVisionNew/>

      {/* <RecentPlacement /> */}

      {/* <NewCTA /> */}

      <AccordionSec/>

      <IndexTestimonials/>

      <ForCareerAssistance />

      <GreensFooter />

    </>
  );
}
