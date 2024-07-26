"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../public/img/about/greenstech.jpg";

const AboutContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">

                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  
                />

                {/* <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="">

                  <h2 className="text-grad mb-4">About Adayar Branch</h2>

                  <p className="mb-4 fs-medium">
                    Our team of professional recruiters and technical consultants engage and deliver a full range of recruitment services, offering recruitment solutions.
                  </p>

                  <p className="mb-4 fs-medium">
                  Apart from providing end to end recruitment solutions to corporate, we are long established in technology based and code-based pre-employment testing. Our hands-on testing on role-based simulations brings out the true software skills matrix and the guess work from recruitment process.
In the world of GT training and consulting, there is a bewildering array of choices.
                  </p>

                  <p className="mb-4 fs-medium">
                  We differentiate ourselves by involving professional technical consultants and trainers in the recruitment process like screening, assessing and interviewing candidates, hence delivering most precise and perfect match to your technical requirements. 
                  </p>

                  <p className="fs-medium">
                  Our technical consultants are Consultants and Developers that have more than eight many years of professional hands on experience in designing and developing applications utilizing Java, .Net and Databases related technologies. This enables them to work with, and advice, both clients and candidates in all areas of the IT place.
                  </p>
                </div>

                {/* <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis..
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the.
                  </p>
                </div> */}

                {/* <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature.
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
