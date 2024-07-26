"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import training from "../../../public/img/about/about_banner.webp";

const ContactBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
	<>  

      <div 
        className="" 
        // style={{ 
          //   backgroundImage: `url(/images/main-banner-shape.jpg)` 
          // }}
      >

        <div 
          className="banner-gradient pb-5"   >

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
                                <Link href="/" className="ps-2 text-gray fs-4-0">Home</Link></li>                            
                            <li className="breadcrumb-item active" aria-current="page">
                                <Link href="" className="ps-2 text-black fs-4-0">Contact Us</Link></li>
                        </ol>
                    </nav> 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="pt-1 pb-5">
              <div className="container bg-white rounded-7 overflow-hidden">
                                
                <div className="row">
                  <div className="col-lg-7 bg-white rounded-7 p-5">
                    <div className="main-banner-content">

                      <h1 className=" fs-5 text-grad fw-semibold "
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                           Contact Greens Technology
                      </h1>

                      

                      <h2 className=" fs-2 mb-4"
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                           Get in Touch With Us
                      </h2>
                      <p> Whether you have questions, feedback, or want to learn more about our courses, 
    our team is here to assist you. Feel free to reach out to us using the contact form 
    below or contact information provided.</p>
                      
                      <div className="">
                          
                            <Link href="#" className="button-def button-3 con_btn"><span>Enquire Now</span></Link>
                            <Link href="#" className="button-def button-3-white"><span>View Schedule</span></Link>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-5 pe-0">
                    <div className="text-center  ">
                      <Image src={training} alt="add" className="ms-auto about_banner_img"  />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
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
          </div> */}
        
        </div>


        
      </div>
		</>
  );
}

export default ContactBanner;