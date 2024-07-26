import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import ContactForm from "../../components/Contact/ContactForm";
import Newsletter from "../../components/Common/Newsletter";
import Footer from "../../components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import ContactBanner from "@/components/Contact/ContactBanner";
import GreensFooter from "@/components/Layouts/GreensFooter";
import ContactMap from "@/components/Contact/ContactMap";

export default function Page() {
  return (
    <>
      <Navbar/>

      {/* <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" /> */}

      <ContactBanner/>

      <ContactInfo />

      <ContactForm />

      <ContactMap/>

      <GreensFooter/>

      {/* <div className="ptb-100">
        <Newsletter />
      </div> */}

      {/* <Footer /> */}

    </>
  );
}
