"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from '../../../public/images/about-img5.jpg';

const Educators: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image text-center"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={100}
                  height={100}
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
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-text mb-30">
                      <h2 className="green-tx h_font_size fw-semibold">Who We’re Looking For</h2>
                      <h4 className="pb-3 green-tx ">We’re interested in educators with:</h4>
                      <ul>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Proven expertise in your subject area.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          A passion for teaching and mentoring.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          Strong communication skills and the ability to engage students in a virtual or in-person setting.
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          A commitment to continuous improvement and staying current in your field.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="about-text">
                  <h4 className="pb-3 green-tx ">How to Apply</h4>
                  <p>
                  If you’re ready to take the next step in your teaching career and have the skills and passion for education, we want to hear from you! Simply submit your application, showcasing your expertise and experience, and we’ll connect with you to explore how you can contribute to our team. We look forward to discovering how you can help us shape the future of education!
                  </p>
                </div>
                <div>
                      <Link href="/contact-us/"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300" className="btn btn-primary">
                      Apply <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Educators;
