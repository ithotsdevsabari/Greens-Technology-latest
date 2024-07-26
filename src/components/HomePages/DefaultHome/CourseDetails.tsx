"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import moon from "../../../../public/img/icons/moon.webp";
import arrowBot from "../../../../public/img/icons/arrowbot.png";


const CourseDetails: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  

        <section className="mb-8  py-6">
          <div className="container">

            <div className="mb-5">            
                <h2 className="text-uppercase text-center fs-4 mb-4">Google Cloud Platform Certification Training Program</h2>
                <h2 className="text-center fs-5">
                    <span className="d-block text-grad mb-2">Course Details </span> 
                    <span className="d-block ">and Requirements</span></h2>
            </div>

            <div className="course-box shadow-box mb-5">

                <div className="row">

                    <h2 className=" fs-2 pt-3"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        Descriptions
                    </h2> 
                      
                    <div className="mt-3 fs-medium pb-3">
                        <p className="fs-medium">
                            Welcome to the <span className="fw-semibold">Google Cloud Platform Certification Training Program. </span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                        </p>
                        <Link href="" className="showmore">
                            <span className=" text-grad">Show More</span>
                            <span className="ms-2">
                                <Image src={arrowBot} alt="add" className="ms-auto" width={20} height={20} /> 
                            </span>
                        </Link>
                    </div>

                </div>

            </div>

            <div className="course-box shadow-box">

                <div className="row">

                    <h2 className=" fs-2 pt-3"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        Requirements
                    </h2>
                      
                    <div className="mt-3 fs-medium">
                        <div className="top_banner_list">
                          <ul>                        
                            <li className="d-block mb-2">                                
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                No Programming experience needed </li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                A Computer with access to the internet</li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                No paid software required
                            </li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                We will walk you through, step-by-step how to get all the software installed and set up</li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Industry-recognized course completion certificate</li>  
                          </ul>
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
        </section>


        </>
    );
}

export default CourseDetails;