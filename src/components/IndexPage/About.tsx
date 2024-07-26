"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";

import aboutImg from '../../../public/images/about-img5.jpg';

const About: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>

      <section className="about-area bg-fcfbfb ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mx-auto">
              <div 
                className="about-image  text-center"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10 w-auto"
                />

              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2 className="fs-5">About Us</h2>
                </div>

                <div className="about-text" style={{ textAlign: "justify" }}>
                  {/* <h4>Who We Are</h4> */}
                  <p className="">
                  Greens Technologies has expanded to Australia, now offering premier online software training in Perth. With over 17 branches across India, the US, and Australia, we bring 15 years of excellence to more than 50,000 learners.
                  </p>
                  <p>
                  Our extensive curriculum covers cutting-edge topics from Microsoft 365 to advanced Data Science, including specialized fields like Data Analytics, Scrum Mastery, Cloud Computing, Testing Automation, Snowflake, Oracle, Java, Full Stack Development, Salesforce, and Machine Learning, among many others. Our expert trainers from around the world ensure top-quality instruction.
                  </p>
                  <p>We pride ourselves on flexible timings and affordability, offering competitive prices that match those in countries like India while maintaining Australian standards. Our courses are delivered through live, instructor-led, interactive online sessions. With transparent fees and an open syllabus that is constantly updated, we guarantee a comprehensive learning experience. Plus, we offer free demos before you commit to any course.</p>

                  <h6 className="">Join Greens Technologies and elevate your skills today!</h6>
                </div>

            

                {/* <div className="row">
                  <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Our Success</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="about-text mb-30">
                      <h4>Grow Business</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          It is a long established fact that a reader will be
                          distracted by the readable.
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}

                <div className="text-start mt-2">
            <Link href="#" className="button-def button-3"><span>Read More</span></Link>
            </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
