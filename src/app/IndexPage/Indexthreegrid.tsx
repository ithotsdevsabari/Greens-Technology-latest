"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./indexThreeGrid.css";
const Indexthreegrid = () => {
  return (
    //     <div className="card-section">
    //     <div className="card">
    //       <div className="card-content">
    //         <div className="card-item">
    //           <div className="card-icon">
    //             <i className="fas fa-award"></i>
    //           </div>
    //           <h2 className="card-title text-grad">15 Years of Excellence</h2>
    //           <p className="card-text">Building futures with over a decade of experience</p>
    //         </div>
    //         <div className="vertical-line"></div>
    //         <div className="card-item">
    //           <div className="card-icon">
    //             <i className="fas fa-users"></i>
    //           </div>
    //           <h2 className="card-title text-grad">10,000+ Learners Enrolled</h2>
    //           <p className="card-text">Join a thriving community committed to excellence</p>
    //         </div>
    //         <div className="vertical-line"></div>
    //         <div className="card-item">
    //           <div className="card-icon">
    //             <i className="fas fa-star"></i>
    //           </div>
    //           <h2 className="card-title text-grad">4.9★ from 4,900 Ratings</h2>
    //           <p className="card-text">Trusted by learners worldwide for quality education</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

 
      <div className="banner-gradient">
        <section className="py-6">
          <div className="container">
            <div className="bg-white Upcoming_Batches brd_lines">
              <div className="row">
                <div className="col-lg-4">
                  <div className="text-center py-4">
                    <ul className="ps-0">
                      <li className="d-block">
                        <div className="mb-3">
                            <div className="card-icon">
                              <i className="fas fa-award"></i>
                            </div>
                            <div className="brd-l-r px-4">
                            <h2
                              className="mb-1 gold-grad fw-semibold "
                              data-aos="fade-in"
                              data-aos-duration="1000"
                              data-aos-delay="200"
                            >
                              15 Years of <br /> Excellence
                            </h2>
                          <p className="d-block mt-2 text-black fs-4">
                            Building futures with over a decade of experience
                          </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className=" py-4 text-center">
                    <ul className="ps-0">
                      <li className="d-block">
                        <div className="mb-3">
                            <div className="card-icon">
                              <i className="fas fa-users"></i>
                            </div>
                            <div className="brd-l-r px-4">
                            <h2
                              className=" mb-1 gold-grad fw-semibold "
                              data-aos="fade-in"
                              data-aos-duration="1000"
                              data-aos-delay="200"
                            >
                              10,000+ Learners <br /> Enrolled
                            </h2>
                          <p className="d-block mt-2 text-black fs-4">
                            Join a thriving community committed to excellence
                          </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 ">
                  <div className="py-4 text-center">
                    <ul className="ps-0">
                      <li className="d-block">
                        <div className="mb-3">
                            <div className="card-icon">
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="px-4">
                            <h2
                              className=" mb-1 gold-grad fw-semibold "
                              data-aos="fade-in"
                              data-aos-duration="1000"
                              data-aos-delay="200"
                            >4.9 <span className=""><i className="fas fa-star str-icon"></i></span> from 4,900<br />  Ratings</h2>
                          <p className="d-block mt-2 text-black fs-4">
                            Trusted by learners worldwide for quality education
                          </p>
                        </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};
export default Indexthreegrid;
