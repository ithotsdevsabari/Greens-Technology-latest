"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import training from "../../../public/img/banner1.jpg";


const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
      <FsLightbox
        toggler={toggler} 
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="" 
        // style={{ 
          //   backgroundImage: `url(/images/main-banner-shape.jpg)` 
          // }}
      >

        <div className="banner-gradient">

            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="mt-9">
                    <div
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="100">
                      <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="" className="ps-2 text-gray fs-4-0">Home</Link></li>
                            <li className="breadcrumb-item">
                                <Link href="" className="ps-2 text-gray fs-4-0">Courses</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <Link href="" className="ps-2 text-black fs-4-0">Project Management Professional </Link></li>
                          </ol>
                      </nav> 
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="">
            <div className="py-3">
              <div className="container bg-white rounded-7">                

                <div className="row">

                  <div className="col-lg-7 bg-white rounded-7 ps-5">
                    <div className="main-banner-content">

                      <div className="pb-5">
                        <Link href="" className="yellow-box me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="whiteText" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z" fill="currentColor"/></svg> Master Program</Link>
                        <Link href="" className="green-box me-3">                          
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            height="20"
                            viewBox="0 0 512 512"
                            width="16"
                            className="me-1"
                          >
                            <path
                              d="M480,207H308.6L256,47.9L203.4,207H32l140.2,97.9L117.6,464L256,365.4L394.4,464l-54.7-159.1L480,207z"
                            />
                          </svg>
                        4.9 - 4980 Ratings</Link>
                        <Link href="" className="green-box">10K + Learners</Link>
                      </div>

                      {/* 
                      <h3 className="text-uppercase fs-4-2 green-dark mb-3"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        Google Cloud Platform Certification Training Program
                      </h3> 
                      <h2 className=" fs-2 mb-3"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        The most trusted way to become a Certified
                      </h2> 
                      */}

                      <h1 className=" fs-5-0 mb-3 text-grad fw-semibold "
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        Learn PMP in Chennai with Certification and Placements
                      </h1>
                      
                      <div className="main-banner-content fs-medium">
                        <div className="top_banner_list">
                          <ul>                        
                            <li className="d-block mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="yellowText" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z" fill="currentColor"/></svg>
                                30+ hours of blended learning </li>

                            <li className="d-block mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="yellowText" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z" fill="currentColor"/></svg>
                                Interactive Live Practical Sessions</li>

                            <li className="d-block mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="yellowText" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z" fill="currentColor"/></svg>
                                Comprehensive Hands-on with Agile Methodologies</li>

                            <li className="d-block mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="yellowText" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z" fill="currentColor"/></svg>
                                Covers Advanced Scrum Techniques</li>

                            <li className="d-block mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="yellowText" fill="none" height="24" viewBox="0 0 24 24" width="24"><path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z" fill="currentColor"/></svg>
                                Get introduced to projects handling using expert Techniques</li>                                  
                          </ul>
                        </div>                        
                      </div>

                      <div className="">
                          {/* <p>Course Prise at: $999 including GST</p> */}
                            <Link href="" className="button-def button-3 me-3"><span>Apply Now</span></Link>
                            <Link href="" className="button-def button-3-white"><span>View Schedule</span></Link>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-5 pe-0">
                    <div className="text-center  ">
                      <Image src={training} alt="add" className="ms-auto banner_img" width={800} height={400} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="container">
              <section className="mb-8  py-6">
                <div className="container">                  
                  <div className="bdr1 p-1 overflow-hidden">                
                    <div className="bg-white ">
                        <div className="row">

                        <div className="col-lg-3 my-2 ">
                            <div className=" px-4 py-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="200">
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
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="200">
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
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="200">
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
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="200">
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
          </div>
        
        </div>


        


        


        


    <div className="container">
     

    </div>

    


      </div>
		</>
  );
}

export default MainBanner;