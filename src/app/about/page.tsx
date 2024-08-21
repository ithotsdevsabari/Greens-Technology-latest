import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import TeamStyleThree from "../../components/Common/TeamStyleThree";
import Feedback from "../../components/Common/Feedback";
import Partner from "../../components/Common/Partner";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/About/MainBanner";
import FooterNew from "@/components/Layouts/FooterNew";
import GreensFooter from "@/components/Layouts/GreensFooter";
import AboutGreentech from "@/components/About/AboutGreentech";
import AboutOMR from "@/components/About/AboutOMR";
import AboutTambaram from "@/components/About/AboutTambaram";
import AboutVelachery from "@/components/About/AboutVelachery";
import AboutSuccess from "@/components/About/AboutSuccess";
import AboutWhyChoose from "@/components/About/AboutWhyChoose";
import AboutCounter from "@/components/About/AboutCounter";
import Cta from "@/components/HomePages/DefaultHome/Cta";


export default function Page() {
  return (
    <>
      <Navbar /> 

      <MainBanner />

      <AboutSuccess/>

      <AboutWhyChoose/>

      <AboutCounter/> 

      <AboutGreentech />
      
      <Cta/>

      <GreensFooter/>

    </>
  );
}
