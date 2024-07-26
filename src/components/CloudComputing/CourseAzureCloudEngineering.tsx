"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";

const CourseAzureCloudEngineering: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 


            <div id="CourseAzureCloudEngineering" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Cloud Computing</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">6. Azure Cloud Engineering Syllabus</span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4"> 

                        <div className=""> 

                            <div className=""> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        1. </span>
                                                    <span className="ms-4">Cloud Computing </span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of Cloud Computing </span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Introduction to Cloud Computing </span>
                                                        </div>
                                                    </li>           
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Service Models </span>
                                                        </div>
                                                    </li>                                
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">IaaS (Infrastructure as a Service) </span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">PaaS (Platform as a Service)</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">SaaS (Software as a Service)</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Deployment Models</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Public Cloud</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Private Cloud</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Hybrid Cloud</span>
                                                                </div> 
                                                            </li>
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Multi-Cloud</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div>


                                            
                                    </div>
                                </div>
                            </div>  

                            <div className="">
                                {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Benefits of Cloud Computing</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Scalability</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Flexibility & Agility</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Reliability & High Availability</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Security</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>
                                    </div>
                                </div>
                            </div>    

                            <div className="">
                                {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2> */}
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of Shared Responsibility</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Security Controls</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Monitoring & Logging</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Incident Response</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>
                                    </div>
                                </div>
                            </div>

                            

                        </div>


                        <div className="mb-4">

                            <div className="">                    
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">

                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                2.  
                                                <span className="ms-2">Azure Platform-Lab Session </span>
                                            </li>
                                        </ul> 
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 fs-18 ">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Introduction to Azure Cloud & Portal </span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure Cloud:</span>
                                                    </div>
                                                </li>                                
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Services & Global presence </span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Security & Compliance</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Pay-As-You-Go Model, Integration with Microsoft Ecosystem</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure Portal:</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Unified Dashboard, Navigation, Search, Responsive Design</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Resource Management, Role-Based Access Control (RBAC)</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Monitoring & Diagnostics, Customization & Extensions</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>


                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure Physical & Management Infrastructure:</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Physical: Data Centers, Networking, Servers, Storage, Security</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Management: </span>
                                                            </div> 
                                                        </li>                                                       
                                                        
                                                    </ul>
                                                            <div className="ms-4">
                                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                                    <li className="d-block mb-2 mt-2"> 
                                                                        <div className="d-flex position-relative">
                                                                            <span className="position-absolute">
                                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                            <span className="ms-4">Azure Resource Manager (ARM)</span>
                                                                        </div> 
                                                                    </li> 
                                                                    <li className="d-block mb-2 mt-2"> 
                                                                        <div className="d-flex position-relative">
                                                                            <span className="position-absolute">
                                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                            <span className="ms-4">Azure Control Plane </span>
                                                                        </div> 
                                                                    </li> 
                                                                    <li className="d-block mb-2 mt-2"> 
                                                                        <div className="d-flex position-relative">
                                                                            <span className="position-absolute">
                                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                            <span className="ms-4">Azure Management Services</span>
                                                                        </div> 
                                                                    </li> 
                                                                    <li className="d-block mb-2 mt-2"> 
                                                                        <div className="d-flex position-relative">
                                                                            <span className="position-absolute">
                                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                            <span className="ms-4">Azure Active Directory (AAD)</span>
                                                                        </div> 
                                                                    </li> 
                                                                    <li className="d-block mb-2 mt-2"> 
                                                                        <div className="d-flex position-relative">
                                                                            <span className="position-absolute">
                                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                            <span className="ms-4">Automation & Orchestration</span>
                                                                        </div> 
                                                                    </li> 
                                                                    
                                                                </ul>
                                                            </div>
                                                </div>


                                            
                                    </div>
                                </div>
                            </div>  

                            <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Azure Services:</span>
                                                </div>
                                            </li>                                        
                                        </ul> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Compute Services: Azure App & Kubernetes Services, Functions, Batch</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Storage Services: Azure Blob, File, Disk, Data Lake Storage</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Networking Services: </span>
                                                        </div> 
                                                    </li>                                                    
                                                </ul>
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Azure Virtual Network (VNet)</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Azure Load Balancer</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Azure VPN Gateway</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Azure Application Gateway</span>
                                                                    </div> 
                                                                </li>                                                                 
                                                            </ul>
                                                        </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Database Services: Azure Database for MYSQL/PostgreSQL, SQL Database, Cosmos DB</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure Active Directory:</span>
                                                        </div> 
                                                    </li>                                                  
                                                </ul>
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Identity & Application Access Management</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Single Sign-On (SSO)</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Security & Developer Features</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Integration with Microsoft Services</span>
                                                                    </div> 
                                                                </li>                                                                 
                                                            </ul>
                                                        </div>
                                            </div>
                                </div>
                            </div>
                            </div>    

                            <div className="">
                            
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                    <ul className="d-block mb-2 ms-5 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Azure Integration Services:</span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure Login Apps, Management, Service Bus, Event Grid, Data Factory & Azure Integration Service Environment (ISE)</span>
                                                    </div> 
                                                </li> 
                                            </ul>
                                        </div>

                                    <ul className="d-block mb-2 ms-5 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Azure Backup & Recovery:</span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure Backup, Site Recovery, Backup Server & Center, Azure Blob Storage Lifecycle Management</span>
                                                        </div> 
                                                    </li> 
                                                </ul>
                                            </div>

                                    <ul className="d-block mb-2 ms-5 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Azure Monitor:</span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Monitoring Capabilities: Metrics, Logs, Application Insights</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Alerting & Notification</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Dashboarding & Visualization, Integration & Extensibility, Cost Management</span>
                                                    </div> 
                                                </li> 
                                            </ul>
                                        </div>

                                    <ul className="d-block mb-2 ms-5 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Overview of Creating Azure Free Account:</span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Duration, Free Services, Usage Limits, Learning Resources, Support & Upgrade options</span>
                                                    </div> 
                                                </li> 
                                            </ul>
                                        </div>

                                </div>
                            </div>
                            </div> 


                           
                            

                        </div>


                        <div className="mb-4">     

                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">

                                    <ul className="d-block mb-2 mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                3. </span>
                                            <span className="ms-4"> Azure Compute Service </span>
                                        </li>  
                                    </ul> 
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 fs-18 ">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                <span className="ms-2">Overview: Azure Virtual Machine </span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">IaaS & Virtual Machines</span>
                                                    </div>
                                                </li>           
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure Virtual Desktop:</span>
                                                    </div>
                                                </li>                                
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Desktop & Application Virtualization</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Windows 10 multi-session</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Integration with Microsoft 365</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Security & Compliance, Management & Monitoring, Scalability & Cost Management</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Virtual Machine Planning & Configuration:</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Define Requirements & Basic Settings</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Virtual Machine Sizing & Storage Configuration</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Operating System Selection</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Networking & Advanced Configuration</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>


                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Virtual Machine Connectivity:</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">RDP (Remote Desktop Protocol)</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">SSH (Secure Shell)</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Azure Bastion</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>

                                            
                                    </div>


                                    
                                </div>

                                


                        </div> 

                    </div>

                    <div className="col-lg-4">

                        <div className="mb-4">

                        <div className="">
                        
                        <div className="mt-1 fs-medium">
                            <div className="top_banner_list">
                                    <ul className="d-block mb-2 mt-2 ms-4">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Azure Virtual machine Configuration & High Availability:</span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managing Images using Azure Compute Gallery</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure Disk Encryption & Adding Data Disks</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managing Virtual Machine Sizes & Moving Virtual Machine between Resources groups</span>
                                                    </div> 
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Planning Maintenance & Downtime</span>
                                                    </div> 
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">High Availability Options, Vertical & Horizontal Scaling</span>
                                                    </div> 
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Availability set: Update & Fault Domains</span>
                                                    </div> 
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Virtual Machine Scale Sets (VMSS): Auto Scaling</span>
                                                    </div> 
                                                </li>
                                            </ul>
                                        </div>

                                
                            </div>
                        </div>
                        
                    </div> 

                             

                            <div className="">
                        
                        <div className="mt-1 fs-medium">
                            <div className="top_banner_list">
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">App Service Plan</span>
                                                </div>
                                            </li>                                        
                                        </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Implement Azure App service plans</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Configure Scaling Settings</span>
                                                            </div> 
                                                        </li> 
                                                        
                                                    </ul>
                                                </div>
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Azure App Service </span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Implement & Secure the Azure App Service</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Creating Custom Domain Names</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Backup & Restore your App Service</span>
                                                    </div> 
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Use Azure Application Insights</span>
                                                    </div> 
                                                </li>
                                            </ul>
                                        </div>

                                <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Azure Container Instance </span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Sizing, Scaling & Container groups for Azure Container Instances</span>
                                                    </div> 
                                                </li> 
                                            </ul>
                                        </div>
                                
                                <ul className="d-block mb-2 ms-4 mt-2">
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                            <span className="ms-4">Azure Kubernetes Services (AKS) </span>
                                        </div>
                                    </li>                                        
                                </ul> 
                                        <div className="ms-4">
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AKS Cluster & Node Architecture</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Storage, Scaling & Network connections configuration for AKS</span>
                                                    </div> 
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Upgrade an AKS Cluster</span>
                                                    </div> 
                                                </li> 
                                            </ul>
                                        </div>



                            </div>
                        </div>
                            </div>

                            <div className="">                    
                                <div className="mt-4 fs-medium">
                                    <div className="top_banner_list">

                                    <ul className="d-block mb-2 mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4"> Azure Resource Manager </span>
                                        </li>  
                                    </ul> 
                                        
                                        <ul className="d-block mb-2 mt-2 ms-4">
                                            <li className="d-block mb-2 fs-18 ">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                <span className="ms-2"> Introduction </span>
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Infrastructure as Code</span>
                                                        </div>
                                                    </li>           
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure CLI, Cloud Shell, Power Shell</span>
                                                        </div>
                                                    </li>                                                  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Environment Set-Up (Azure CLI, VS Code, Shell Script)</span>
                                                        </div>
                                                    </li>   
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">ARM Template overview</span>
                                                        </div>
                                                    </li>     
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Create JSON file & deploy using Azure CLI</span>
                                                        </div>
                                                    </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Deploy Template & Virtual Machine (VM) Extensions</span>
                                                        </div>
                                                    </li>    
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Save a Deployment as ARM template</span>
                                                        </div>
                                                    </li>                       
                                                </ul> 
                                            
                                    </div>
                                </div>
                            </div> 

                            <div className="">                    
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-4 ">
                                            <li className="d-block mb-2 mt-2 fw-bold">
                                                <span className="position-absolute">
                                                    5. </span>
                                                <span className="ms-4"> Azure Storage Services </span>                                                     
                                            
                                            </li>  
                                            </ul> 
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 fs-18 ">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                <span className="ms-2">Azure Storage Account- Overview </span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure: Disk, Files, Blob & Table Storage</span>
                                                    </div>
                                                </li>           
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Storage Queues, Stored Access Policies</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Configuration: Storage Queues & Network Access</span>
                                                    </div>
                                                </li>                             
                                            </ul> 

                                        <ul className="d-block mb-2 mt-2 ms-4">
                                            <li className="d-block mb-2 fs-18">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                <span className="ms-2">Access Configuration </span>
                                            </li>
                                        </ul>     
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Access Keys & Shared Access Signature</span>
                                                    </div>
                                                </li>           
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Azure AD Authentication</span>
                                                    </div>
                                                </li>                         
                                            </ul>    

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Manage data in Azure Storage Accounts</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Create Import & Export Jobs</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Manage Data by using Azure Storage Explorer & AzCopy</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Implement Azure Storage redundancy</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Configure object replication</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>

                                
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Configure Azure Files & Azure Blob Storage </span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Configure Storage tiers & Blob lifecycle management</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mb-4">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                    <ul className="d-block mb-2  mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                6. </span>
                                            <span className="ms-4"> Azure Networking Services </span>  
                                        </li>  
                                    </ul>                                     
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Basic Networking Concepts </span>
                                        </li> 
                                    </ul> 
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">IP Addressing</span>
                                                </div> 
                                            </li> 
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Public & Private IP Address</span>
                                                </div> 
                                            </li> 
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Subnetting, CIDR, Subnet Mask</span>
                                                </div>
                                            </li>                             
                                        </ul> 

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Azure Virtual Networks </span>
                                        </li>
                                    </ul>     
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Virtual Networks & Subnets</span>
                                                </div>
                                            </li>           
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">User-Defined Routers (UDR), Azure DNS, VNet Peering</span>
                                                </div>
                                            </li>                         
                                        </ul>   
                                

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Secure Access to Virtual Networks</span>
                                                </div>
                                            </li>                                        
                                        </ul> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Network & Application Security Groups</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure Bastion</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Network Service & Private Endpoints</span>
                                                        </div> 
                                                    </li> 
                                                </ul>
                                            </div>

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Load Balancing</span>
                                                </div>
                                            </li>                                        
                                        </ul> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure Load Balancing & Application Gateway</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Traffic Manager & Trouble shooting Load Balancing</span>
                                                        </div> 
                                                    </li> 
                                                </ul>
                                            </div>

                               
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Monitor Virtual Networking </span>
                                            </div>
                                        </li>                                        
                                    </ul> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Express Route & Monitor on-premises connectivity</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure Monitor for networks - Configuration</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Azure Network Watcher</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Troubleshoot External Networking & Network Connectivity</span>
                                                        </div> 
                                                    </li> 
                                                </ul>
                                            </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2 mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> Manage Azure Identities & Governance </span> 
                                        </li>  
                                    </ul> 
                                    
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Identity & Access Management (IAM)</span>
                                        </li>
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Azure Active Directory</span>
                                        </li>
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Managing Azure AD Objects</span>
                                        </li>
                                    </ul> 
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">User & Groups</span>
                                                </div>
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Create & Manage User & Groups</span>
                                                            </div>
                                                        </li>           
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Manage Guest Accounts & Perform bulk update</span>
                                                            </div>
                                                        </li>                           
                                                    </ul> 
                                            </li>           
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Manage Licenses in Azure AD & Device Setting and identity</span>
                                                </div>
                                            </li>    
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Administrative Units</span>
                                                </div>
                                            </li>                             
                                        </ul> 

                                    <ul className="d-block mb-2 mt-2 ms-4">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Azure AD Connect & Tenants</span>
                                        </li>
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Manage Identity & Custom Identity</span>
                                        </li>                                        
                                    </ul>  

                                

                                    <ul className="d-block mb-2 mt-2 ms-4">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">SSPR - Self Service Password Reset</span>
                                        </li>
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Manage Access Control</span>
                                        </li>
                                    </ul>     
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Create Custom Role-based access control (RBAC) & Azure AD Roles</span>
                                                </div>
                                            </li>           
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Provide Access to Azure resources by assigning roles at different scopes</span>
                                                </div>
                                            </li>   
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Interpret Access Assignments</span>
                                                </div>
                                            </li>                       
                                        </ul>   

                          


                                        

                                </div>
                            </div>
                        </div>

                        

                    </div>

                    <div className="col-lg-4">

                        <div className="mb-4">

                            <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Manage Azure Subscriptions & Governance </span>
                                                </div>
                                            </li>                                        
                                        </ul> 
                            <div className="ms-4">
                                <ul className="d-block mb-2 mt-2">
                                    <li className="d-block mb-2 mt-2"> 
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute">
                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                            <span className="ms-4">Microsoft Purview & Service Trust Portal</span>
                                        </div> 
                                    </li> 
                                    <li className="d-block mb-2 mt-2"> 
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute">
                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                            <span className="ms-4">Configure Azure policy, Resource locks & Management Groups</span>
                                        </div> 
                                    </li> 
                                    <li className="d-block mb-2 mt-2"> 
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute">
                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                            <span className="ms-4">Apply & Manage tags on resources</span>
                                        </div> 
                                    </li> 
                                    <li className="d-block mb-2 mt-2"> 
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute">
                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                            <span className="ms-4">Manage Resources Groups, Azure Policy & Subscriptions, Cost by using Alerts, Budgets & Recommendations</span>
                                        </div> 
                                    </li> 
                                </ul>
                            </div>  
                            </div>                         

                        <div className="mb-4">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2  mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                8. </span>
                                            <span className="ms-4"> Monitor & Maintain Azure Resources </span> 
                                        </li>
                                    </ul>   
                                    
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Azure Monitor Service</span>
                                        </li>
                                    </ul> 
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Azure Advisor, Monitor, Monitor Logs</span>
                                                </div>
                                            </li>           
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Alerts & Metrics</span>
                                                </div>
                                            </li>    
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Query & Analyze Logs</span>
                                                </div>
                                            </li>  
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Setting up Alerts & Actions</span>
                                                </div>
                                            </li>  
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Configure monitoring of VMs, Storage accounts, Networks by using VM insights</span>
                                                </div>
                                            </li>                           
                                        </ul> 

                                   

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Azure Backup & Recovery</span>
                                        </li>                                     
                                    </ul>     
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Azure Recovery Services & Backup Vault, Site Recovery for Azure Resources</span>
                                                </div>
                                            </li>           
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Backup Policy - Configuration</span>
                                                </div>
                                            </li>   
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Perform backup & resources operations by using Azure Backup & failover to a secondary region by using Azure Site Recovery</span>
                                                </div>
                                            </li>            
                                        
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Azure Site Recovery for Azure resources</span>
                                                </div>
                                            </li>  
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Configure & Review Backup Reports</span>
                                                </div>
                                            </li>                                         
                                        </ul> 


                                </div>
                            </div>
                        </div>                        

                        <div className="mb-4">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2  mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                10. </span>
                                            <span className="ms-4"> Additional Topics - Must Know </span> 
                                        </li> 
                                    </ul> 
                                    
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                            <span className="ms-2">Azure Integration Services</span>
                                        </li>   
                                    </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">                          
                                                <li className="d-block mb-2 fs-18 ">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                    <span className="ms-2">Service Bus</span>
                                                </li>   
                                                <li className="d-block mb-2 fs-18 ">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                    <span className="ms-2">Event Grid & Hub</span>
                                                </li>   
                                                <li className="d-block mb-2 fs-18 ">
                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                    <span className="ms-2">Logic Apps & API Management</span>
                                                </li> 
                                            </ul> 

                                    <ul className="d-block mb-2 ms-4 mt-2"> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} />
                                                </span> 
                                                <span className="ms-4">Azure Functions, Key Vault, SQL, Cosmos DB, Blueprints </span>
                                            </div>
                                        </li>   
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Cloud Migration </span>
                                            </div>                                            
                                        </li>  
                                    </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">                          
                                                <li className="d-block mb-2 fs-18 ">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                        </span> 
                                                        <span className="ms-4">Cloud Migration </span>
                                                    </div> 
                                                </li>   
                                                <li className="d-block mb-2 fs-18 ">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} />
                                                        </span> 
                                                        <span className="ms-4">On-Premises workloads</span>
                                                    </div>                                                     
                                                </li>   
                                                <li className="d-block mb-2 fs-18 ">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                        </span> 
                                                        <span className="ms-4">Migration Process & Strategies </span>
                                                    </div> 
                                                </li> 

                                                <li className="d-block mb-2 fs-18 ">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                        </span> 
                                                        <span className="ms-4">System Assessment </span>
                                                    </div>                                                     
                                                </li>   
                                                <li className="d-block mb-2 fs-18 ">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} />  
                                                        </span> 
                                                        <span className="ms-4">Azure Migrate & Demo overview </span>
                                                    </div>                                                     
                                                </li>   
                                                <li className="d-block mb-2 fs-18 ">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                        </span> 
                                                        <span className="ms-4">AWS to Azure VM Migration using Azure Migrate Service </span>
                                                    </div>                                                     
                                                </li> 

                                            </ul> 



                                </div>
                            </div>
                        </div>


                        <div className="mb-4">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2  mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                11. </span>
                                            <span className="ms-4"> Lab Session </span> 
                                        </li> 
                                    </ul> 
                                    
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Azure Portal Overview</span>
                                            </div>
                                        </li>                                    
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create Windows Virtual Machines in the Azure Portal</span>
                                            </div>                                            
                                        </li>   
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement Virtual Machine Scale sets, Azure Web Apps, Azure Kubernetes Services</span>
                                            </div> 
                                        </li>   
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Manage Azure Resource Azure CLI, PowerShell, Cloud Shell</span>
                                            </div>                                             
                                        </li> 

                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Environment Set-up (Azure CLI, VS Code & Shell Script)</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create a Sample JSON template & Deployment Process</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create Multiple VMs Using ARM Template</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create Storage Account</span>
                                            </div>                                             
                                        </li> 



                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement Azure Disk & Azure Files, Azure Blob Storage & Access methods</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create Virtual Networks & Subnets</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">VNet Peerings</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement Azure DNS, Network Service Endpoint, Implement Load Balancer & NSG and ASG</span>
                                            </div>                                             
                                        </li> 


                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create user accounts in Azure AD & manage Groups</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Grant Access using Azure RBAC & view Activity logs for Azure RBAC Changes</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create AD Tenants</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Configure Azure Monitor & Extract from log data</span>
                                            </div>                                             
                                        </li> 



                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create an Azure Recovery Services Vault</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement an Azure Virtual Machine-level backup & File and Folder backup</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Estimate workload costs by using the Pricing Calculator</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Compare workload costs using TCO Calculator</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Sample Migration Activities</span>
                                            </div>                                             
                                        </li> 

                                    </ul> 

                                </div>
                            </div>
                        </div>


                        <div className="mb-4">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2  mt-2">
                                        <li className="d-block mb-2 mt-2 fw-bold">
                                            <span className="position-absolute">
                                                12. </span>
                                            <span className="ms-4"> Lab Practice  </span> 
                                        </li> 
                                    </ul> 
                                    
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Azure Portal Free Account Creation</span>
                                            </div>
                                        </li>                                    
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create Linux Virtual Machines in the Azure Portal</span>
                                            </div>                                            
                                        </li>   
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement Availability Sets</span>
                                            </div> 
                                        </li>   
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement Azure Container Instances</span>
                                            </div>                                             
                                        </li> 

                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Host a web Applications with Azure App Service</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Use Stored access policies to delegate access to Azure Storage</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Usage of Storage Explorer</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement Table Storage</span>
                                            </div>                                             
                                        </li> 


                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Configure Blob Lifecycle Management</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Azure Bastion</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Implement User Defined Route, Private Endpoint, Application Gateway, Traffic Manager</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Set up Self-Service password Reset</span>
                                            </div>                                             
                                        </li> 




                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">VM Login using Azure AD Account</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Use an activity log alert & action group to notify users about events in your Azure Infrastructure</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Perform File Recovery by using Microsoft Azure Recovery Services (MARS) agent</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Perform file recovery by using Azure Virtual Machine snapshots</span>
                                            </div>                                             
                                        </li> 



                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Review Azure recovery services soft delete functionality</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Set up a long analytics workspace & Azure Monitor VM Insights</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Create Workflow using Logic Apps</span>
                                            </div>                                             
                                        </li> 
                                        <li className="d-block mb-2 fs-18 ">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> 
                                                </span> 
                                                <span className="ms-4">Deployment of Azure Key Vault, SQL, Cosmos DB</span>
                                            </div>                                             
                                        </li> 



                                    </ul> 

                                </div>
                            </div>
                        </div>









                    </div>





                </div>  
            </div>





            </div>
        </section>


        </>
    );
}

export default CourseAzureCloudEngineering;