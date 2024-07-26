"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import moon from "/public/img/icons/moon.webp";
import tickIcon from "/public/img/icons/tickicon.png";
import yellowRib from "/public/img/icons/yellow-rib.png"
import courseLeft from "/public/img/icons/course_fee_left.png"
import UpcomingBatches from "./UpcomingBatches";




const CourseFee: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  

        <section className="mb-8 py-6">
          <div className="container">

            <div className="m-w-1400">

            <div className="mb-5">            
                <h2 className="text-uppercase text-center fs-4 mb-4">PROJECT MANAGEMENT PROFESSIONAL Training Program</h2>
                <h2 className="text-center fs-5">
                    <span className="d-block text-grad mb-2">Course Fee </span> 
                    <span className="d-block ">and Upcoming Batches</span>
                </h2>
            </div>

            <div className="course-fee box-shadow2 mb-5 p-0">
                <div className="row"> 

                    <div className="col-lg-4">
                        <div className="mt-3 fs-medium">
                            <div className="top_banner_list">
                            <span className=""><Image src={courseLeft} alt="moon" className="ms-auto me-2" width={434} height={251} /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="mt-5 fs-medium">
                            <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2 fw-semibold">  
                                    <span className=""><Image src={yellowRib} alt="moon" className="ms-auto me-2" width={162} height={40} /></span>
                                    <h3 className="text-decoration-line-through fs-1 d-inline-block ms-3 mb-0 text-gray-light-more line-1">INR 15,000</h3>
                                    </li>                                    
                                </ul>
                                <h2 className="fs-5 mb-3">
                                    <span className="d-block text-grad mb-2">INR 10,000/-</span>                                 
                                </h2>
                                <h3 className="fs-medium">
                                * Inclusive of all tax
                                </h3> 
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="mt-5 fs-medium">

                            <div className="top_banner_list">                                
                                <div className="text-center mt-3">
                                    <Link href="" className="button-def button-3 me-3 mt-4 mb-3"><span>Enroll Now Pay Later</span></Link>                            
                                </div>
                                <h3 className="fs-3 text-center text-decoration-underline">
                                    More Details
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
                                

            </div>

            <div className="course-fee box-shadow2 p-7">

                <div className="row">

                    <h2 className=" fs-2"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        This Course Includes
                    </h2>    

                    <div className="col-lg-4">
                        <div className="mt-3 fs-medium">
                            <div className="top_banner_list">
                            <ul>                        
                                <li className="d-block mb-4 fw-semibold">                                
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    50 Hours of Instructor-led Classes 
                                    </li>
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    60 Hours of Capstone Projects 
                                    </li>
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    Practical and Hands-on session
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="mt-3 fs-medium">
                            <div className="top_banner_list">
                            <ul>                        
                                
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    Lifetime Free Upgrade
                                    </li>
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    24 x 7 Expert Support & Access
                                    </li>  
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    Certification and Jobs Assistance
                                    </li> 
                                
                            </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="mt-3 fs-medium">
                            <div className="top_banner_list">
                            <ul>                        
                                
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    Flexible Schedule
                                    </li>  
                                <li className="d-block mb-4 fw-semibold">
                                    <Image src={tickIcon} alt="moon" className="ms-auto me-3" width={24} height={24} />
                                    Placement Support
                                    </li>  
                            </ul>
                            </div>
                        </div>
                    </div>

                    

                </div>

                
                <div className="bdr-btm-black mt-5 mb-4"></div>

                <div className="row mt-4">
                    <h2 className=" fs-2"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        Upcoming Batches
                    </h2>
                                   

                    <div className="col-lg-9">
                        <div className="mt-3 fs-medium">
                            <div className="top_banner_list">

                                <UpcomingBatches />
                           
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-lg-3">
                        <div className="mt-5 fs-medium ">
                            <div className="top_banner_list">
                                
                            <div className="text-center mt-3">
                                <Link href="" className="button-def button-3 me-3 mt-4 mb-3 fs-4"><span>Reserve Now</span></Link>                            
                            </div>

                            <h3 className="fs-3 text-center text-decoration-underline">
                                More Details
                            </h3> 

                            </div>
                        </div>
                    </div>

                </div>

            </div>

                        {/* <div className="text-center mt-3">
                            <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                            <Link href="" className="button-def button-3">
                                <span>Download Syllabus</span> 
                                <span className="ms-2">
                                    <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                                </span></Link>
                        </div> */}
            </div>
          </div>
        </section>


        </>
    );
}

export default CourseFee;