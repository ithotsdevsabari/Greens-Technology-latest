"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';


import Image from "next/image";
import learn1 from "../../../public/img/learn1.png";
import downLoad from "../../../public/img/icons/down.png";
import tick from "../../../public/img/icons/tick.webp";
import Student from "../../../public/img/scrum/scrum_student.webp";
import module from "../../../public/img/microsoft365/microsoft2.webp";

const SpecialOffer: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
            <section className="mb-8  py-6">
            <div className="container">

                <div className="mb-5">                     
                    <h2 className="text-center fs-5">
                        <span className="d-block text-grad mb-1">Special Offer </span> 
                    </h2>
                </div>

                <div className="row">

                    

                    <div className="col-md-6 col-lg-4 mb-4 ">
                        <div className="box-shadow rounded-4 bg-green2 pb-3">                      
                            
                            <div className="" >                    
                                <div className=" px-4 py-3">
                                    <h2 className="d-block mt-2 fs-2">
                                        Special Offer 
                                        </h2>
                                    <h2 className="d-block mt-2 fs-4">
                                        Enroll in any three Microsoft 365 courses and receive a 20% discount on the total price. <br/>Choose from:
                                        </h2>
                                    <div className="d-block br-20" 
                                        style={{ backgroundColor: `` }} >
                                        
                                        <ul className="ps-0">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                        <ul>  
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft Teams</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft Word</span>
                                                                </div>                                                        
                                                            </li>
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft Excel</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft PowerPoint</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft Outlook</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft OneNote</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft SharePoint</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft OneDrive</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft Access</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Microsoft Power Automate</span>
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

                    <div className="col-md-6 col-lg-4 mb-4 ">
                            <Image src={module} alt="add" className="ms-auto w-full microsoft_img" width={1000} height={1000} /> 
                            {/* <video autoPlay loop muted width="100%">
                                <source src="../img/scrum/scrum-v1.mp4" type="video/mp4" />
                            </video> */}
                            
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4 ">
                            <Image src={module} alt="add" className="ms-auto w-full microsoft_img" width={1000} height={1000} /> 
                            {/* <video autoPlay loop muted width="100%">
                                <source src="../img/scrum/scrum-v1.mp4" type="video/mp4" />
                            </video> */}
                            
                    </div>


                </div>

                <div className="text-center mt-3">
                    <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                    {/* <a href="/img/Data Analytics Syllabus.pdf" download className="button-def button-3" target="_blank"> */}
                    <a href="/img/" download className="button-def button-3" target="_blank">
                        <span>Download Syllabus</span> 
                        <span className="ms-2">
                            <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                        </span>
                    </a>
                </div>

            </div>
            </section>

        </>
    );
}

export default SpecialOffer;