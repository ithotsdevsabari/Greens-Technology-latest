"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import learn1 from "../../../../../public/img/learn1.png";
import learn2 from "../../../../public/img/learn2.png";
import learn3 from "../../../../public/img/learn3.png";
import learn4 from "../../../../public/img/learn4.png";
import learn5 from "../../../../public/img/learn5.png";
import learn6 from "../../../../public/img/learn6.png";
import downLoad from "../../../../public/img/icons/down.png";

const Modules: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  

        <section className="mb-8  py-6">
          <div className="container">

            <div className="mb-5">            
                <h2 className="text-uppercase text-center fs-4 mb-4">Google Cloud Platform Certification Training Program Reviews</h2>
                <h2 className="text-center fs-5">
                    <span className="d-block text-grad mb-2">What you will learn </span> 
                    <span className="d-block ">from world class industry leads.</span></h2>
            </div>

            <div className="row">

              <div className="col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-5"> 
                    <div className=" ">   
                        <Image src={learn1} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 fs-4">MODULE - 01</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                <h2 className="d-block mt-2 fs-2">Introduction to<br/> Google Cloud for Techs</h2>                    
                                <ul className="ps-0 mt-4">
                                    <li className="d-block">
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>                        
                                                    <li className="d-block mb-2">
                                                    GCP Introduction </li>
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

              <div className="col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-5">                      
                    <div className=" ">   
                        <Image src={learn2} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                    <div className="mt--100 px-3 ">
                        <h2 className="d-block mt-2  fs-4">MODULE - 02</h2>
                        <div className="d-block br-20 p-4 bg-white p-1" 
                           style={{ backgroundColor: `#fff;` }} >
                            <h2 className="d-block mt-2 fs-2">Google Cloud Introduction to GCP</h2>
                            <ul className="ps-0  mt-4">
                                <li className="d-block">
                                    <div className="fs-medium">
                                        <div className="top_banner_list list-disc">
                                            <ul className="list-disc">                        
                                                <li className="d-block list-disc mb-2"> Google Cloud - Introduction to GCP </li>
                                                <li className="d-block mb-2"> 
                                                    GCP - Signup process (If you are from Europe then this might clear some doubts) 
                                                </li>    
                                                <li className="d-block mb-2"> Google Cloud - Introduction to GCP </li>
                                                <li className="d-block mb-2"> GCP - Signup process (If you are from Europe then this) </li>                                                                                            
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


              <div className="col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-5">                      
                    <div className=" ">   
                        <Image src={learn3} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                    <div className="mt--100 px-3 ">
                        <h2 className="d-block mt-2  fs-4">MODULE - 03</h2>
                        <div className="d-block br-20 p-4 bg-white p-1" 
                            style={{ backgroundColor: `#fff;` }} >
                            <h2 className="d-block mt-2 fs-2">Google Cloud IAM</h2>                    
                            <ul className="ps-0  mt-4">
                                <li className="d-block">
                                    <div className="fs-medium">
                                        <div className="top_banner_list">
                                            <ul>                        
                                                <li className="d-block mb-2">
                                                50 hours of instructor led online class </li>
                                                <li className="d-block mb-2"> Google Cloud - Introduction to GCP </li>
                                                <li className="d-block mb-2"> GCP - Signup process (If you are from Europe then this) </li>  
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


              <div className="col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-5">                      
                    <div className=" ">   
                        <Image src={learn4} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2  fs-4">MODULE - 04</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                <h2 className="d-block mt-2 fs-2">Google Regions & Zones</h2>                    
                                <ul className="ps-0 mt-4">
                                    <li className="d-block">
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>                        
                                                    <li className="d-block mb-2">
                                                    50 hours of instructor led online class </li>
                                                    <li className="d-block mb-2"> Google Cloud - Introduction to GCP </li>
                                                    <li className="d-block mb-2"> GCP - Signup process (If you are from Europe then this) </li>  
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


              <div className="col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-5">                      
                    <div className=" ">   
                        <Image src={learn5} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2  fs-4">MODULE - 05</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }}  >
                                <h2 className="d-block mt-2 fs-2">Google Cloud - Virtual Machine</h2>
                                <ul className="ps-0 mt-4">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>                        
                                                    <li className="d-block mb-2">
                                                    50 hours of instructor led online class </li>
                                                    <li className="d-block mb-2"> Google Cloud - Introduction to GCP </li>
                                                    <li className="d-block mb-2"> GCP - Signup process (If you are from Europe then this) </li>  
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

              <div className="col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-5 ">                      
                    <div className=" ">   
                        <Image src={learn6} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2  fs-4">MODULE - 06</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                <h2 className="d-block mt-2 fs-2">Networking (VPC)</h2>
                                <ul className="ps-0 mt-4">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>
                                                    <li className="d-block mb-2">50 hours of instructor led online class </li>
                                                    <li className="d-block mb-2">Google Cloud - Introduction to GCP </li>
                                                    <li className="d-block mb-2">GCP - Signup process (If you are from Europe then this) </li>  
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
            </div>

                        <div className="text-center mt-3">
                            <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                            <Link href="" className="button-def button-3">
                                <span>Download Syllabus</span> 
                                <span className="ms-2">
                                    <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                                </span></Link>
                        </div>
          </div>
        </section>


        </>
    );
}

export default Modules;