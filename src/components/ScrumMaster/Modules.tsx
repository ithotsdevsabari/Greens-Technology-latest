"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';


import Image from "next/image";
import learn1 from "../../../public/img/learn1.png";
import downLoad from "../../../public/img/icons/down.png";
import tick from "../../../public/img/icons/tick.webp";
import Student from "../../../public/img/scrum/scrum_module.webp";

const Modules: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  

        <section className="mb-8  py-6">
          <div className="container">

            <div className="mb-5">            
                {/* <h2 className="text-uppercase text-center text-green fs-20 mb-2">DATA ANALYTICS Platform Certification Training Program Reviews</h2> */}
                
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Courses We Offer </span> 
                    {/* <span className="d-block ">from world class industry leaders.</span> */}
                    </h2>
            </div>

            <div className="row">

              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn1} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">Scrum Master</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} > 
                                {/* <h2 className="d-block mt-2 fs-4">Scrum Master Course </h2>  */}
                                <ul className="ps-0 mt-2"> 
                                    <li className="d-block"> 
                                        <div className="fs-medium"> 
                                            <div className="top_banner_list"> 
                                                <ul> 
                                                    <li className="d-block mb-2"> 
                                                        <div className="d-flex position-relative"> 
                                                            <span className="position-absolute "> 
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span> 
                                                            <span className="ms-4">Duration: 20 Hours + Placement Training</span> 
                                                        </div>                                                         
                                                    </li>

                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $595</span></span>
                                                        </div>                                                        
                                                    </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div> 
                                                    </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>

              <div className="col-md-6 col-lg-8 mb-4 ">
                    <Image src={Student} alt="add" className="ms-auto w-full scrum_img" width={1000} /> 
                    {/* <video autoPlay loop muted width="100%">
                        <source src="../img/scrum/scrum-v1.mp4" type="video/mp4" />
                    </video> */}
              </div>

            </div>

            {/* <div className="text-center mt-3">
                <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                <a href="/img/Data Analytics Syllabus.pdf" download className="button-def button-3" target="_blank">
                    <span>Download Syllabus</span> 
                    <span className="ms-2">
                        <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                    </span>
                </a>
            </div> */}

          </div>
        </section>


        </>
    );
}

export default Modules;