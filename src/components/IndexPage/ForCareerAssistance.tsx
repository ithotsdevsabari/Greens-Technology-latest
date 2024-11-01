"use client";
import React, { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import india from "../../../public/images/india.png";
import Australian from "../../../public/images/new-australian-flog.png";
import phoneIcon from "../../../public/img/phone.png";

const ForCareerAssistance = () => {
  return (
    <section className="pb-100">
      <div className="container">
        <div className="section-title mb-0">
          <h2 className="text-center green-tx h_font_size fw-semibold" data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200">
          Need Career Assistance? 
          </h2>
        </div>
        <h3 className="text-center fs-1 " data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200">
        Our Experts Are Available 24/7 !
        </h3>

        <div className="contact-num-box pt-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-4"   data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
                <Image src={india} alt="india" className="" width={60} />
                <h5 className="mb-0 fs-3">Indian Nationals</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <Link
                href="tel:+91 8939 975761" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200"
              >
                <div className="d-flex align-items-center gap-3 border-rds px-4 py-2">
                  <Image src={phoneIcon} alt="india" className="" width={30} />
                  <h5 className="mb-0 fs-3">+91 8939 975761</h5>
                </div>
              </Link>
            </div>
          </div>
          <div className="row d-flex align-items-center pt-4">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-4" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
                <Image src={Australian} alt="india" className="" width={60} />
                <h5 className="mb-0 fs-3">Australian Nationals</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <Link
                href="tel:+91 8939 975761" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200"
              >
                <div className="d-flex align-items-center gap-3 border-rds px-4 py-2">
                  <Image src={phoneIcon} alt="india" className="" width={30} />
                  <h5 className="mb-0 fs-3 pe-4">0423 737 907</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCareerAssistance;
