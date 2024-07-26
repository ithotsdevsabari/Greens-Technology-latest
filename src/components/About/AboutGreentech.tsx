"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/img/about/about_class.webp";

const AboutGreentech: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>

      <div className="about-area pt-4 pb-10">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="">
                  <h2 className=" fs-5 mb-3">
                      About <span className="text-grad">Greens Technologies</span>
                  </h2>
                  <p className="mb-3 fs-medium">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  
                  
                  </p>

                  <p className="mb-3 fs-medium">
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ue software skills matrix and the guess work from recruitment process.
In the world of GT training and consulting, there is a bewildering array of choices.
                  </p>

                  <p className="mb-3 fs-medium">
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                 

                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="about-image">

                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGreentech;
