"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from '../../../public/img/about/abt-success.png';

const AboutSuccess: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                // data-aos="fade-in"
                // data-aos-duration="1000"
                // data-aos-delay="100"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                // data-aos="fade-in"
                // data-aos-duration="1000"
                // data-aos-delay="300"
              >
                <div className="section-title">
                <h2 className=" fs-5">
          About <span className="text-grad">Us</span>
        </h2>
                  <p className="">
                  We are the best training institute in Chennai and we hold the pride of placing more than 3000+ students in top MNC’s..
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p className="">
                  We hire trainers who are most efficient and having real time experience of more than 10 years. We Provide excellent training at affordable fees. Our trainer's provide real time scenarios in all the courses with their real time experience.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Success</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Latest tech, best practices covered in our curriculum.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Experienced instructors providing hands-on, real-world expertise.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Job placement support for rewarding IT career opportunities.
                    </li>
                  </ul>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                  To empower individuals with cutting-edge IT skills for a successful career in technology, fostering innovation and excellence in the industry. Empower individuals with cutting-edge IT skills for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSuccess;
