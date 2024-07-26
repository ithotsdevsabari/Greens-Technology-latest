"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/img/about/greenstech.jpg";

const AboutOMR: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>

      <div className="about-area pt-10">
        <div className="container">
          <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
              <div className="about-image">

                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="">
                <h2 className=" fs-5 mb-3">
          About <span className="text-grad">OMR Branch</span>
        </h2>

                  <p className="mb-3 fs-medium">
                    Our team of professional recruiters and technical consultants engage and deliver a full range of recruitment services, offering recruitment solutions.
                  </p>

                  <p className="mb-3 fs-medium">
                  Apart from providing end to end recruitment solutions to corporate, we are long established in technology based and code-based pre-employment testing. Our hands-on testing on role-based simulations brings out the true software skills matrix and the guess work from recruitment process.
In the world of GT training and consulting, there is a bewildering array of choices.
                  </p>

                  <p className="mb-3 fs-medium">
                  We differentiate ourselves by involving professional technical consultants and trainers in the recruitment process like screening, assessing and interviewing candidates, hence delivering most precise and perfect match to your technical requirements. 
                  </p>

                  <p className="fs-medium">
                  Our technical consultants are Consultants and Developers that have more than eight many years of professional hands on experience in designing and developing applications utilizing Java, .Net and Databases related technologies. This enables them to work with, and advice, both clients and candidates in all areas of the IT place.
                  </p>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOMR;
