"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import moon from "/public/img/icons/moon.webp";
import arrowBot from "/public/img/icons/arrowbot.png";
import useSmoothScroll from "../Atom/SmoothScroll";


const CourseDetails: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70);
  return (
		<>  

        <section className="mb-8  py-6">
          <div className="container">

            <div className="mb-5">            
                <h2 className="text-uppercase text-center fs-4 mb-4">Project Management professional Training Program</h2>
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
                        <p className="mb-3 fs-medium">                            
                            <span className="fw-semibold">
                            Project Management Professional</span> are high in demand. They are professional who leads the team through a project using agile methodologies. They make it possible by means of communication between the leader and the teams to achieve rewarding results.</p>
                            <p className="mb-3 fs-medium">   
The most important term Agile Infrastructure is mainly used for developing complex projects, and the methodology such as short development cycle is known as sprint. We offer from beginner to advance level in PMP

Project Management Jobs can be found in all kinds of industries across the globe and also plays an integral role for the successful organisation to bring more projects.
</p>
<p className="mb-3 fs-medium">   
Exclusively designed with practical and real time scenarios for meeting the industry standards. Best Course contents with assured placements.

We are the leading Scrum Master training institute in Chennai providing classroom and online training by having training center across Chennai at Adyar, OMR, Navalur, Porur, Annanagar, Velachery and Perumbakkam.
                        </p>
                        {/* <Link href="" className="showmore">
                            <span className=" text-grad">Show More</span>
                            <span className="ms-2">
                                <Image src={arrowBot} alt="add" className="ms-auto" width={20} height={20} /> 
                            </span>
                        </Link> */}
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
                    {/* <p className="mb-2 fs-medium">Project management Course in Chennai: Become a Scrum Master</p>
                    <p className="mb-2 fs-medium">Project Management Classes are delivered by 15+ years of experienced project management Expert</p>
                    <p className="mb-2 fs-medium">Learn various Agile Methodologies Techniques from the experts.</p>

                    <p className="mb-2 fs-medium">Learn PMP from basics to advanced techniques, with real time projects by industry experts.</p>
                    <p className="mb-2 fs-medium">Experience world-class training by an industry leader on the most in-demand Scrum Master skills.</p>
                    <p className="mb-2 fs-medium">Fast Track classes on PMP is available with best course Fees and Best course content designed by Experts.</p>
                    <p className="mb-2 fs-medium">Our PMP Training course in Chennai also includes job placement assurance</p>
                    <p className="mb-2 fs-medium">Greens Technologies unique 1-on-1 methodology, you can Start Training from Any Date for training including 2-3 hours time slots and weekends. PMP Courses are guaranteed with Placement Assistance.</p> */}
                        <div className="top_banner_list">
                          <ul>                        
                            <li className="d-block mb-2">                                
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Project management Course in Chennai: Become a Scrum Master</li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Project Management Classes are delivered by 15+ years of experienced project management Expert</li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Learn various Agile Methodologies Techniques from the experts.
                            </li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Learn PMP from basics to advanced techniques, with real time projects by industry experts.</li>
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Experience world-class training by an industry leader on the most in-demand Scrum Master skills.
                                </li>  
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Fast Track classes on PMP is available with best course Fees and Best course content designed by Experts.
                                </li> 
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Our PMP Training course in Chennai also includes job placement assurance
                                </li> 
                            <li className="d-block mb-2">
                                <Image src={moon} alt="moon" className="ms-auto me-2" width={5} height={5} />
                                Greens Technologies unique 1-on-1 methodology, you can Start Training from Any Date for training including 2-3 hours time slots and weekends. PMP Courses are guaranteed with Placement Assistance.
                                </li> 
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