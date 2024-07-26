"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "../../../public/images/services/it-service1.png";

const IndexAbout: React.FC = () => {
  return (
    <>
      <div className="service-style-two bg-fcfbfb abt_space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-info pr-50">
                <div className="info-head">
                <h2 className=" fs-5">
          About Us
        </h2>
                  <p className="pt-3">
                  Greens Technology is the best IT Training Institutes in Chennai Adyar, OMR, Velachery, Tambaram with placements, offering 200 and more software courses with 100% Placement Assistance. We are offering Classroom, Online, Corporate training for Oracle, Java, Selenium, AWS, Hadoop, Salesforce, Data Science and more trainings in chennai.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      100% Practical Training
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Step By Step Guidance
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Your Flexible Timing
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Hands on training
                    </div>
                  </div>
                </div>
                <div className="text-start mt-2">
            <Link href="#" className="button-def button-3"><span>Read More</span></Link>
            </div>
               
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="service-right-img"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  src={serviceImg1}
                  alt="Service Image"
                  width={770}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexAbout;
