import Navbar from "./../components/Layouts/Navbar";
import OurStory from "./IndexPage/OurStory";
import OurVision from "./IndexPage/OurVision";
import IndexBanner from "@/components/IndexPage/IndexBanner";
import OurCourses from "@/components/IndexPage/OurCourses";
import NewBatches from "@/components/IndexPage/NewBatches";
import BestInstructors from "@/components/IndexPage/BestInstructors";
import RecentPlacement from "@/components/IndexPage/RecentPlacement";
import GreensFooter from "@/components/Layouts/GreensFooter";
import NewCTA from "./IndexPage/NewCTA";
import Indexthreegrid from "./IndexPage/Indexthreegrid";
import OurTrainingExpertise from "./IndexPage/OurTrainingExpertise";
import OurUpcomingBatches from "./IndexPage/OurUpcomingBatches";
import ForCareerAssistance from "./IndexPage/ForCareerAssistance";
import CFeedback from "./IndexPage/CFeadback";
import StoryVision from "./IndexPage/StoryVision";

export default function Home() {
  return (
    <>
      <Navbar />

      <IndexBanner />

      <Indexthreegrid />

      <OurCourses />

      <OurTrainingExpertise />

      <OurUpcomingBatches />

      <StoryVision/>

      {/* <RecentPlacement /> */}

      {/* <NewCTA /> */}

      <CFeedback />

      <ForCareerAssistance />

      <GreensFooter />
    </>
  );
}
