
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../public/images/cyber-security/about.png";
import Team1 from "../../../public/images/Instructors1.jpg";
import Team2 from "../../../public/images/Instructors2.jpg";
import Team3 from "../../../public/images/Instructors3.jpg";

const BestInstructors: React.FC = () => {
  return (
    <>
      <div className="cs-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row align-items-center">
                <div className="col-6">
                  <div
                    className="cs-about-image mb-4"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    
                  >
                    <Image src={Team1} alt="image" className="rounded-10 w-100 " />
                  </div>
                  <div
                    className="cs-about-image"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <Image src={Team2} alt="image" className="rounded-10 w-100" />
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="cs-about-image"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <Image src={Team3} alt="image" className="rounded-10 w-100 h-auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cs-about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <span className="sub-title fw-bolder text-black">Best Instructors</span>
                <h2 className=" fs-5">
                  Our Team of Highly Experienced Trainers
                </h2>
                <p className="pt-2">
                  We hire trainers who are most efficient and having real time experience of more than 10 years. We Provide excellent training at affordable fees. Our trainer's provide real time scenarios in all the courses with their real time experience.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-award"></i>
                      </div>
                      <h4>Our Certification</h4>
                      <p>
                        Lorem ipsum dolor sit amet, is demo consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-book"></i>
                      </div>
                      <h4>Free Course Materials</h4>
                      <p>
                        Lorem ipsum dolor sit amet, is demo consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-start mt-5">
                  <Link href="#" className="button-def button-3"><span>Get Started</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestInstructors;
