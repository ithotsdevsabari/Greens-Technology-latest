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
import './contact.css'

export default function Page() {
  return (
    <>
      <Navbar/>

      {/* <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" /> */}

      <ContactBanner/>

      <ContactInfo />

      <div className="payment-card">
      <div className="payment-card-header">
        {/* Payment Information Section */}
        <div>
          <h3>
            {/* <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 0v3m0 4h.01"
              />
            </svg> */}
            Payment Information
          </h3>
          <p>
            <strong>Commonwealth Bank</strong>
          </p>
          <p>Account Name: Greens Technologies</p>
          <p>BSB: 066164</p>
          <p>Ac/No: 1064 7224</p>
        </div>

        {/* Company Information Section */}
        <div>
          <h3>
            {/* <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-2 0a2 2 0 110 4H8a2 2 0 010-4z"
              />
            </svg> */}
            Greens Technologies International Pty Ltd
          </h3>
          <p>Unit 4/10 Tyre Avenue, Riverton 6148</p>
          <p>08 6386 9232</p>
          <p>0423 737 907</p>
          <p>
            <a href="mailto:admin@greenstechnologies.com.au">
              admin@greenstechnologies.com.au
            </a>
          </p>
          <p>
            <a href="https://www.greenstechnologies.co.au">
              www.greenstechnologies.co.au
            </a>
          </p>
        </div>
      </div>

      {/* ABN and ACN Section */}
      <div className="payment-card-footer">
        <p>ABN: 677 648 047</p>
        <p>ACN: 39677648047</p>
      </div>
    </div>




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
