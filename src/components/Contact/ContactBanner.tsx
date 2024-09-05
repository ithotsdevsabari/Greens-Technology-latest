"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

import Image from "next/image";
import training from "../../../public/img/about/about_banner.webp";
import trainingMobile from "../../../public/img/about/aboutus.jpg";

const ContactBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="">
        <div className="banner-gradient pb-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mt-9">
                  <div
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="/" className="ps-2 text-gray fs-4-0">
                            Home
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          <Link href="" className="ps-2 text-black fs-4-0">
                            Contact Us
                          </Link>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="pt-1 pb-5">
              <div className="container bg-white rounded-7 overflow-hidden">
                <div className="row align-items-center">
                  <div className="col-lg-7 bg-white rounded-7 p-5">
                    <div className="main-banner-content">
                      <h1
                        className=" fs-5 text-grad fw-semibold "
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        Contact Greens Technologies
                      </h1>

                      <h2
                        className=" fs-2 mb-4"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        We're Here to Help
                      </h2>
                      <p
                        className="fs-lg-4 mb-2"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        Have questions, feedback, or want to learn more about
                        our courses?{" "}
                      </p>
                      <p
                        className="fs-lg-4 mb-2"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        Our team is ready to assist you.
                      </p>
                      <p
                        className="fs-lg-4"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                        Reach out to us via the contact form below or through
                        the provided contact details.
                      </p>
                    </div>
                  </div>


                  {/* Image for desktop */}
                  <div className="col-lg-5 pe-0 d-none d-md-block">
                    <div className="text-center">
                      <Image
                        src={training}
                        alt="contact"
                        className="ms-auto about_banner_img"
                      />
                    </div>
                  </div>

                  {/* Image for mobile */}
                  <div className="col-lg-5 d-md-none">
                    <div className="text-center">
                      <Image
                        src={trainingMobile}
                        alt="contact mobile"
                        className="ms-auto about_banner_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
