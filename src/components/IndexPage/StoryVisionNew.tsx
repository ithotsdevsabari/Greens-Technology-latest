"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import vision from "../../../public/images/arrow.png";

import aboutImg from "../../../public/images/our story.jpg";

const StoryVisionNew = () => {
  return (
  <>
 
      <section className="about-area strvis py-5 light_g_bg">
      <div className="storybg py-7">
        <div className="container">
          <div className="row Upcoming_Batches text-center">
            <div className="col-lg-12 px-2">
              <div
                className="about-content about-content-two "
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2 className="fs-5 text-center green-tx fw-semibold mt-0">Our Story</h2>
                </div>

                <div className="about-text pt-4">
                  <p className="fs-regular">
                    Welcome to <strong className="green-tx">Greens Technologies</strong> Premier Online Software
                    Training in Perth, Australia!
                  </p>
                  <p className="fs-regular">
                    <strong className="green-tx">Greens Technologies</strong> has proudly expanded to Australia, now
                    offering premier online software training in Perth. With
                    over 17 branches across India, the US, and Australia, we
                    bring 15 years of excellence to more than 50,000 learners.
                  </p>
                  <p className="fs-regular">
                    Our extensive curriculum covers cutting-edge topics from
                    Microsoft 365 to advanced Data Science, including
                    specialized fields like Data Analytics, Scrum Master, Cloud
                    Computing, Testing Automation, Snowflake, Oracle, Java, Full
                    Stack Development, Salesforce, and Machine Learning, among
                    many others. Our expert trainers from around the world
                    ensure top-quality instruction.
                  </p>
                  <p className="fs-regular">
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
               
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      </>
  );
};

export default StoryVisionNew;
