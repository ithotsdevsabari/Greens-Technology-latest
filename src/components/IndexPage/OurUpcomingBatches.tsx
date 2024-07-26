"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fsd from "/public/images/fsd.jpg";
import BatchesCard from "../Atom/BatchesCard";

const OurUpcomingBatches = () => {
  return (
    <>
      <div className="batches-bg pt-8 pb-4">
        <div className="container">
          <div className="project_sty text-center">
            <h2
              className=" fs-5 mb-2 dark-green-txt fw-semibold"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Our Upcoming Batches
            </h2>
            <p className="fs-4">
              We conduct online classes, and updates for it are regularly
              posted. Keep an eye on this section.
            </p>
          </div>
          {/* <div className="row pt-6 Upcoming_Batches"> */}
<BatchesCard/>
            {/* <div className="col-lg-4">
              <div className="card-box p-4 bg-white rounded-4 shadow-lg">
                <Image src={fsd} alt="FSD" className="rounded-4" />
                <div className="d-flex align-items-center gap-2 pt-4">
                  <div className="d-flex align-items-center gap-2 batches-bg py-2 px-3 rounded-pill">
                    <div>
                      <i className="fas fa-hourglass fs-regular dark-green-txt"></i>
                    </div>
                    <div>
                      <p className="fs-regular dark-green-txt fw-bolder">
                        5 Months
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 batches-bg py-2 px-3 rounded-pill">
                    <div>
                      <i className="fas fa-user fs-regular dark-green-txt"></i>
                    </div>
                    <div>
                      <p className="fs-regular dark-green-txt fw-bolder">
                        Mr. Rajesh
                      </p>
                    </div>
                  </div>
                </div>
                <h3
                  className=" fs-3 pt-3 green-tx fw-semibold"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Full Stack <br /> Development
                </h3>
                <div className="d-flex align-items-center gap-2 typo-text">
                  <i className="fas fa-calendar"></i>
                  <p className="text-black fw-medium">May 13, 2024</p>
                </div>
                <div className="d-flex align-items-center gap-2 typo-text">
                  <i className="fas fa-clock"></i>
                  <p className="text-black fw-medium">9.00AM 10.00AM</p>
                </div>
                <div className="text-center mt-3">
                  <Link href="#" className="button-def button-3">
                    <span>Register Now</span>
                  </Link>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default OurUpcomingBatches;
