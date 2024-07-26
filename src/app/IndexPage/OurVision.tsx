"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";

import aboutImg from "../../../public/images/vision.jpg";

const OurVision: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
 
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2 className="fs-5 text-center">Our Vision</h2>
                </div>

                <div className="about-text text-center">
                  {/* <h4>Who We Are</h4> */}
                  <p className="">
                    At Greens Technologies, our vision is to empower individuals
                    globally through accessible, high-quality education. We
                    strive to bridge the gap between industry demands and skill
                    development by providing innovative, flexible, and
                    affordable training solutions. Our goal is to cultivate a
                    community of skilled professionals who can thrive in a
                    rapidly evolving technological landscape.
                  </p>
                  <h6 className="">Join Greens Technologies and elevate your skills today!</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mx-auto">
              <div
                className="about-image  text-center"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10 w-75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default OurVision;
