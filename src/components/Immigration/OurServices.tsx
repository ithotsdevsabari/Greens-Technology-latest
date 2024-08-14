"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices: React.FC = () => {
  return (
    <>
      <div className="ptb-100 banner-gradient">
        <div className="container">
        <div className="section-title">
            <h2 className="green-tx">Our Services Include</h2>
          </div>
          <div className="row align-items-center Upcoming_Batches">
            <div className="col-lg-12">
              <div className="service-info">

                <div className="row">
                  <div className="col-lg-4 mb-4">
                    <div className="feature-list">
                      <i className="fa-solid fa-award mt-lg-2"></i>
                      Visa Consultation and Application Assistance
                    </div>
                  </div>

                  <div className="col-lg-4 mb-4">
                    <div className="feature-list">
                      <i className="fa-solid fa-award"></i>
                      Student Visas
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="feature-list">
                      <i className="fa-solid fa-award mt-lg-2"></i>
                      Residency and Citizenship Applications
                    </div>
                  </div>
                </div>
                <div className="row mb-5" >
                  <div className="col-lg-4 mb-4">
                    <div className="feature-list">
                      <i className="fa-solid fa-award"></i>
                      Family Sponsorship
                    </div>
                  </div>

                  <div className="col-lg-4 mb-4">
                    <div className="feature-list">
                      <i className="fa-solid fa-award"></i>
                      Work and Study Permits
                    </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                    <div className="feature-list">
                      <i className="fa-solid fa-award"></i>
                      Settlement Services
                    </div>
                  </div>
                </div>

                <div className="text-center ">
            <h2 className="green-tx">Supporting You Every Step of the Way</h2>
            <p>We understand that many of our clients are new to the immigration process and may be unsure of whom to trust. That’s why we offer one-on-one consultations where we patiently walk you through the entire process. We are committed to being your reliable partner, ensuring that you are never left in the dark. Whether you’re applying for a student visa, seeking residency, or aiming for citizenship, we’re here to help you every step of the way.</p>
            <Link href="/contact-us" className="btn btn-primary mt-3">
                  Get Started Today
                  </Link>
                  <p className="mt-4">Ready to embark on your new journey? Contact us to schedule a consultation. Our team is here to support you every step of the way, from the initial consultation to your successful settlement. Let us help you turn your dreams of living abroad into reality!</p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default OurServices;
