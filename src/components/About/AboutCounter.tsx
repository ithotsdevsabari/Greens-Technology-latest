"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutCounter =() =>{
    return(
        <>
              <section className="ptb-100">
                <div className="container">                  
                  <div className="bdr1 p-1 overflow-hidden">                
                    <div className="bg-white">
                      <div className="row">
                        <div className="col-lg-3 my-2 ">
                            <div className=" px-4 py-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            // data-aos="fade-in"
                                            // data-aos-duration="1000"
                                            // data-aos-delay="200"
                                            >
                                            60+Hrs
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4">Hands On Training</h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-4 py-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            // data-aos="fade-in"
                                            // data-aos-duration="1000"
                                            // data-aos-delay="200"
                                            >
                                          2 Live
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4">Projects of Hands-on Learning</h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-4 py-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            // data-aos="fade-in"
                                            // data-aos-duration="1000"
                                            // data-aos-delay="200"
                                            >
                                            50 Hrs
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4"> Practical Assignment </h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-4 py-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            // data-aos="fade-in"
                                            // data-aos-duration="1000"
                                            // data-aos-delay="200"
                                            >
                                            24/7
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4"> Life Time Access </h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>
                        

                        </div>
                    </div>
                  </div>
                </div>
              </section>
        </>
    )
}
export default AboutCounter;