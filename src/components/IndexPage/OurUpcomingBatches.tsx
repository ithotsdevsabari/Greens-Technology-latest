"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import fsd from "/public/images/fsd.jpg";
import { batches } from "../../../utils/common/cardData";

const OurUpcomingBatches = () => {
  return (
    <div className="batches-bg pt-8 pb-4">
      <div className="container">
        <div className="project_sty section-title text-center">
          <h2
            className="mb-2 dark-green-txt h_font_size fw-semibold "
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Our Popular Courses
          </h2>
          <p className="fs-4 font_col res_txt">
            We conduct online classes, and updates for it are regularly posted.
            Keep an eye on this section.
          </p>
        </div>
        <div className="row Upcoming_Batches">
        {
            batches.map((result,index)=>{
                return(
                    <div className="col-lg-4 mb-5" key={result?.id}>
                    <div className="p-4 bg-white rounded-4 shadow-lg height-size">
                      <Image src= {result?.imgUrl} alt="FSD" className="rounded-4" width={500} height={100}/>
                      {/* <div className="d-flex align-items-center gap-2 pt-4">
                        <div className="d-flex align-items-center gap-2 batches-bg py-2 px-3 rounded-pill">
                          <div>
                            <i className="fas fa-hourglass fs-regular dark-green-txt"></i>
                          </div>
                          <div>
                            <p className="fs-regular dark-green-txt fw-bolder">
                              {result?.courseDuration}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-2 batches-bg py-2 px-3 rounded-pill">
                          <div>
                            <i className="fas fa-user fs-regular dark-green-txt"></i>
                          </div>
                          <div>
                            <p className="fs-regular dark-green-txt fw-bolder">
                            {result?.instructorName}
                            </p>
                          </div>
                        </div>
                      </div> */}
                      <h3
                        className=" fs-3 pt-3 green-tx text-center fw-semibold"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                      >
                       {result?.courseTitle}
                      </h3>
                      <p className="fs-regular text-center pt-1">{result?.coursePara}</p>
                      {/* <div className="d-flex align-items-center gap-2 typo-text">
                        <i className="fas fa-calendar"></i>
                        <p className="text-black fw-medium"> {result?.courseStartDate}</p>
                      </div>
                      <div className="d-flex align-items-center gap-2 typo-text">
                        <i className="fas fa-clock"></i>
                        <p className="text-black fw-medium">{result?.courseTiming}</p>
                      </div> */}
                      {/* <div className="text-center mt-3">
                        <Link href="#" className="button-def button-3">
                          <span>Register Now</span>
                        </Link>
                      </div> */}  
                    </div>
                  </div>
                )
            })
        }
       
      </div>
      </div>
    </div>
  );
};
export default OurUpcomingBatches;
