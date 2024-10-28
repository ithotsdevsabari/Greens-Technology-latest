"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:admin@greenstechnologies.com.au.au">admin@greenstechnologies.com.au.au</a>
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Visit Us</h3>
                <p>
                Unit 4, 10 Tyre Avenue Riverton, WA 6148, Australia  
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:08 6386 9232">08 6386 9232</a>
                </p>
                <p>
                  <a href="tel:+61 423 737 907">+61 423 737 907</a>
                </p>
                <p>
                  <a href="tel:+91 63850 42622">+91 63850 42622</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
