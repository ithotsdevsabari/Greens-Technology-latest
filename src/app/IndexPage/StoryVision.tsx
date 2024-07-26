"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";

import aboutImg from "../../../public/images/our story.jpg";

const StoryVision = () => {
  return (
  
      <section className="about-area strvis ptb-100">
        <div className="content">
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
                  <h2 className="fs-5 text-left gold-grad">Our Story</h2>
                </div>

                <div className="about-text text-left">
                  <p className="text-white fs-regular">
                    Welcome to Greens Technologies Premier Online Software
                    Training in Perth, Australia!
                  </p>
                  <p className="text-white fs-regular">
                    Greens Technologies has proudly expanded to Australia, now
                    offering premier online software training in Perth. With
                    over 17 branches across India, the US, and Australia, we
                    bring 15 years of excellence to more than 50,000 learners.
                  </p>
                  <p className="text-white fs-regular">
                    Our extensive curriculum covers cutting-edge topics from
                    Microsoft 365 to advanced Data Science, including
                    specialized fields like Data Analytics, Scrum Master, Cloud
                    Computing, Testing Automation, Snowflake, Oracle, Java, Full
                    Stack Development, Salesforce, and Machine Learning, among
                    many others. Our expert trainers from around the world
                    ensure top-quality instruction.
                  </p>
                  <p className="text-white fs-regular">
                    We pride ourselves on flexible timings and affordability,
                    offering competitive prices that match those in countries
                    like India while maintaining Australian standards. Our
                    courses are delivered through live, instructor-led,
                    interactive online sessions. With transparent fees and an
                    open syllabus that is constantly updated, we guarantee a
                    comprehensive learning experience. Plus, we offer free demos
                    before you commit to any course.
                  </p>
                </div>
                <div className="section-title">
                  <h2 className="fs-5 text-left gold-grad">Our Vision</h2>
                </div>

                <div className="about-text text-left">
                  <p className="text-white fs-regular">
                    At Greens Technologies, our vision is to empower individuals
                    globally through accessible, highquality education. We
                    strive to bridge the gap between industry demands and skill
                    development by providing innovative, flexible, and
                    affordable training solutions. Our goal is to cultivate a
                    community of skilled professionals who can thrive in a
                    rapidly evolving technological landscape.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mx-auto">
            </div>
          </div>
        </div>
        </div>
      </section>

  );
};

export default StoryVision;
