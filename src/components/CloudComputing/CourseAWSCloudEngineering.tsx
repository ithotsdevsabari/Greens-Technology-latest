"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";

const CourseAWSCloudEngineering: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 


            <div id="CourseAWSCloudEngineering" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Cloud Computing</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">5. AWS Cloud Engineering Syllabus </span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4"> 
                        <div className="">

                            <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                1.  
                                                <span className="ms-2">Cloud Computing Overview</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction to Cloud Computing </span>
                                                    </div>
                                                </li>       
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Service Models </span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">IaaS (Infrastructure as a Service) </span>
                                                        </div>
                                                    </li>           
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">PaaS (Platform as a Service)</span>
                                                        </div>
                                                    </li>   
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">SaaS (Software as a Service)</span>
                                                        </div>
                                                    </li>                              
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Deployment Models</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Public, Private, Hybrid, Multi Cloud</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                2.  
                                                <span className="ms-2">Amazon Web Service (AWS)</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction to AWS</span>
                                                    </div>
                                                </li>       
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Global Infrastructure</span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Regions, Availability Zones (AZs), Edge Locations, Points of Presence (PoPs), Global Network Backbone</span>
                                                        </div>
                                                    </li>           
                                                                                
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Core Services & Categories</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Service:  Compute, Storage, Database, Networking, Security & Identity</span>
                                                                </div> 
                                                            </li>
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Tools:   Management, Developer</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div> 
                                            
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Creating an AWS Account</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Free Tier</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Understanding the AWS Management Consoler</span>
                                                    </div>
                                                </li>                                  
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Dashboard, Navigation Panel, Services, Regions, Search Bar</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Support & Notification, Account Settings, Help & Documentation, Customization</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction To AWS CLI & SDK’s</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                            
                                    </div>
                                </div>
                            </div> 


                            <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                3.  
                                                <span className="ms-2">AWS Compute Services</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Amazon EC2 (Elastic Compute Cloud)</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Instance Types & Families</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">General Purpose: M5, M6g</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Compute Optimized: C5, C6g</span>
                                                            </div>
                                                        </li>    
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Memory Optimized: R5, R6g</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Storage Optimized: I3, I3en</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">T2, T3</span>
                                                            </div>
                                                        </li>                                     
                                                    </ul> 
                                                    </div> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Amazon Machine Images (AMIs)</span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                            </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Key Feature: Operating Systems & Software,</span>
                                                        </div>
                                                    </li>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Configuration Setting, Application Stack, Public & Private AMI, Security</span>
                                                        </div>
                                                    </li>    
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Use Cases: Application Deployment, Development & Testing, Scaling & Auto Scaling, Migration to Cloud</span>
                                                        </div>
                                                    </li>                           
                                                    </ul> 
                                                    </div> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Security Groups & Key Pairs</span>
                                                        </div> 
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Elastic IP addresses</span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                            </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Key Feature: Static IP Addressing, Remapability, No Charge for In-use EIPs, No Network Configuration Required, Integration with other AWS Services, IPv6 support, EIP Pooling</span>
                                                        </div>
                                                    </li>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Use Cases: Hosting Web Applications, Email Servers, Access Control, High Availability Architectures, Load Balancing, NAT Gateways</span>
                                                        </div>
                                                    </li>                         
                                                    </ul> 
                                                    </div> 
                                            
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Lambda </span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Serverless Execution</span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                            </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Server Management, Event-Driven Execution, Statelessness, Granular Billing, Auto-Scaling</span>
                                                        </div>
                                                    </li>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Event Sources & Triggers, Managed Services, Scalability & Resilience, Vendor Lock-In</span>
                                                        </div>
                                                    </li>                         
                                                    </ul> 
                                                    </div> 
                                            <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating & deploying Lambda Functions</span>
                                                        </div> 
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Integrating Lambda with other AWS services</span>
                                                        </div> 
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Monitoring and logging Lambda functions</span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                            </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">AWS CloudWatch Metrics: Invocation, Concurrency, Custom Metrics</span>
                                                        </div>
                                                    </li>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">AWS CloudWatch Logs: Function & Custom Logs, Log Group Subscription</span>
                                                        </div>
                                                    </li>   
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">AWS X-Ray: Tracing, Performance Analysis, Integration with AWS Services</span>
                                                        </div>
                                                    </li>    
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">AWS CloudTrail: Audit Trails, Security Analysis</span>
                                                        </div>
                                                    </li>     
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">AWS Lambda Insights: Performance Monitoring, Integration with CloudWatch</span>
                                                        </div>
                                                    </li>                
                                                    </ul> 
                                                    </div> 



                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Amazon ECS (Elastic Container Service) and EKS (Elastic Kubernetes Service)</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Containerization Concepts</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Containers, Docker, Container Orchestration, Microservices Architecture, Container Networking & Security</span>
                                                            </div>
                                                        </li>                                   
                                                    </ul> 
                                                    </div> 


                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Managing Docker Containers with ECS</span>
                                                        </div>
                                                    </li>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Kubernetes basics & EKS Setup</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Kubernetes Basic: Container, Pods, Deployments, Services, Namespaces, Nodes, Control Plane Components</span>
                                                            </div>
                                                        </li>     
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">EKS Setup:</span>
                                                            </div>
                                                        </li>                              
                                                    </ul> 
                                                    </div> 
                                                    <div className="ms-5">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Create an IAM Role, Setup AWS CLI, Create a VPC, Install eksctl, Create an EKS Cluster, Configure Kubectl, Deploy Applications, Monitor & Manage</span>
                                                            </div>
                                                        </li>                       
                                                    </ul> 
                                                    </div> 


                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Deploying & Scaling Containerized Applications</span>
                                                        </div>
                                                    </li>  
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Auto Scaling & Elastic Load Balancing </span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Auto Scaling Groups & Politic</span>
                                                        </div>
                                                    </li>  
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Auto Scaling Groups: Scaling Options, Launch Configuration or Template, Integration with ELB & AWS Service, Lifecycle Hooks</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Auto Scaling Policies: Scale Out & Scale In, Dynamic & Scheduled Scaling</span>
                                                            </div>
                                                        </li>                      
                                                    </ul> 
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Elastic Load Balancing</span>
                                                        </div>
                                                    </li>  
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Types: Classic Load Balancer (CLB), Application Load Balancer (ALB), Network Load Balancer (NLB)</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Integration with Auto Scaling, Security Features, Logging & Monitoring</span>
                                                            </div>
                                                        </li>                      
                                                    </ul> 
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Application & Network Load Balancer</span>
                                                        </div>
                                                    </li>  
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Application Load Balancer (ALB): Layer 7 Load Balancer, Target Groups, Support for Microservices, Integration with AWS Services, Advanced Security Feature</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Network Load Balancer (NLB): Layer 4 Load Balancer, Ultra-Low Latency, Static IP Addresses, Integration with AWS Services, Support for TCP & UDP Protocols</span>
                                                            </div>
                                                        </li>                      
                                                    </ul> 
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">High Availability & Fault Tolerance Strategies</span>
                                                        </div>
                                                    </li>  
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Multi-Availability Zone (Multi-AZ) Deployment, Auto Scaling, Redundant Data Storage & Replication</span>
                                                            </div>
                                                        </li>  
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Decoupling & Microservices Architecture, Monitoring & Automated Remediation, Disaster Recovery (DR) planning</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        4. </span>
                                                    <span className="ms-4">AWS Storage Services</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Amazon Simple Storage Service (S3)</span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Bucket Creation & Management</span>
                                                        </div>
                                                    </li>                               
                                                </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Using AWS Management Console, Using AWS CLI</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Object Storage Fundamentals</span>
                                                </div>
                                            </li>  
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">S3 Data Consistency Models</span>
                                                </div>
                                            </li>                                       
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Strong Read-After-Write Consistency (for PUTS of New Objects)</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Eventual Consistency (for Overwrite PUTS and DELETES)</span>
                                                        </div> 
                                                    </li> 
                                                </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">S3 Security Features & Access Control</span>
                                                </div>
                                            </li>  
                                            </ul>

                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Access Control Lists (ACLs)</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Bucket & IAM Policies</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cross-Origin Resource Sharing (CORS)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Bucket & Access Logging</span>
                                                    </div>
                                                </li>   
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Object Lock, Server-side Encryption</span>
                                                    </div>
                                                </li>                                   
                                                </ul> 
                                                </div>
                                            
                                    </div>
                                </div>
                            </div>  

                        </div>

                    </div>

                    <div className="col-lg-4"> 
                        <div className="">

                            <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Amazon EBS (Elastic Block Store)</span>
                                            </div>
                                        </li>
                                        </ul>
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Volume Types</span>
                                                </div>
                                            </li> 
                                            </ul>

                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">General Purpose SSD (gp2)</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Provisional IOPS SSD (io1)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Throughput Optimized HDD (st1) & Cold HDD (sc1)</span>
                                                    </div>
                                                </li>                             
                                                </ul> 
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Snapshotting & Volume Management</span>
                                                </div>
                                            </li> 
                                            </ul>
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Snapshotting: Purpose, Snapshot Lifecycle, Volume Restoration</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Volume Management: Creating, Attaching & Detaching, Resizing, Deleting Volumes, Monitoring & Optimization</span>
                                                    </div>
                                                </li>                             
                                                </ul> 
                                                </div>

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Amazon Glacier & Storage Gateway </span>
                                                </div>
                                            </li>                       
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Archiving data with Glacier</span>
                                                </div>
                                            </li> 
                                            </ul>
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Creating a Vault, Upload Data to the Vault, Setup Vault Access policies, Data & Monitor Retrieval</span>
                                                    </div>
                                                </li>                             
                                                </ul> 
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Hybrid Cloud Storage with Storage Gateway</span>
                                                </div>
                                            </li> 
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">File, Volume, Tape Gateway Configuration</span>
                                                </div>
                                            </li> 
                                            </ul>

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Data Transfer Services</span>
                                                </div>
                                            </li>                       
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">AWS Direct Connect & VPN</span>
                                                </div>
                                            </li> 
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Transfer Acceleration & Snow Family Devices</span>
                                                </div>
                                            </li> 
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Pricing considerations for Data Transfer</span>
                                                </div>
                                            </li> 
                                            </ul>


                                            
                                    </div>
                                </div>
                            </div> 

                            <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                5.  
                                                <span className="ms-2">Networking & Content Delivery</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Amazon VPC (Virtual Private Cloud)</span>
                                                    </div>
                                                </li> 
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Subnets, Route Tables, Internet Gateway</span>
                                                    </div>
                                                </li>                          
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Subnet: Segmentation, Availability Zone, Public & Private Subnets, CIDR Blocks, Network Access Control Lists (NACLs) </span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Route Table: Routing Decisions, Default & Custom Route, Route Prioritization, Network Access Control Lists (NACLs)</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Internet Gateway: Internet Connectivity, Public Subnets, IPv4 & IPv6, Network Address Translation (NAT), Security</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">VPC Peering & Connections</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">VPC Security </span>
                                                    </div>
                                                </li>                         
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Amazon Route 53</span>
                                                </div>
                                            </li> 
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">DNS Fundamentals</span>
                                                    </div>
                                                </li>                          
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Domain Names, DNS Resolutions, Servers, Records, Query Process, Cache</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Route 53 Routing Policies</span>
                                                    </div>
                                                </li>                          
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Simple, Weighted, Latency-Based, Failover, Geolocation, Multi-Value Answer, Geoproximity</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Health checks & Failover Configuration</span>
                                                    </div>
                                                </li>                          
                                                </ul> 


                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">AWS CloudFront</span>
                                                </div>
                                            </li> 
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Content Delivery Network (CDN)-Overview</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">CloudFront Distributions & Cache Behaviour</span>
                                                    </div>
                                                </li>                        
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Types of Distributions, Origin & Cache Behaviour Setting, Default Cache Behaviour, Edge Caching, Invalidation</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Integrating CloudFront with other AWS Services</span>
                                                    </div>
                                                </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Amazon S3, Amazon EC2, AWS Lambda@Edge, AWS Shield, AWS WAF (Web Application Firewall), Amazon Route 53</span>
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
                                        <li className="d-block mb-2 fs-18 fw-bold">
                                            6.  
                                            <span className="ms-2">AWS Database Services</span>
                                        </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Amazon RDS (Relational Database Service)</span>
                                                </div>
                                            </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">RDS Engine Options</span>
                                                    </div>
                                                </li>                             
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">MySQL, PostgreSQL, SQL Server</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Multi-AZ Deployments & Read Replicas</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Multi-AZ Deployment: High Availability, Durability & Data Protection, Automatic Failover</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Read Replicas: Improved Read Scalability, High Availability, Geographic Redundancy, Asynchronous Replication</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Database Migration Strategies</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Homogeneous & Heterogeneous Migration, Full Database Dump & Restore, Incremental Data Migration, Schema Conversion</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Amazon DynamoDB</span>
                                                </div>
                                            </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">NoSQL Database Fundamentals</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Schema-less Design, Flexible & Consistency Data Models, Key-Value Store, Partitioning, Integration with AWS Ecosystem</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">DynamoDB Table Creation & Indexing</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Provisioned Throughput Vs On-Demand Capacity</span>
                                                    </div>
                                                </li>
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Amazon RedShift & ElastiCache </span>
                                                </div>
                                            </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Data Warehousing with RedShift</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Columnar Storage, Massively Parallel Processing (MPP), Scalability, Integration with BI tools, Security & Compliance, Data Loading &ETL</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>



                                            
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">In-Memory Caching with ElastiCache</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Caching Layer, In-Memory Storage, Scalability, Managed Service, Compatibility & Integration</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Use Cases & Performance Considerations</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Use Cases: Improving Application Performance, Database Offloading, Session Management, Content Caching, Real-Time Analytics & Data Processing</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Performance Consideration: Cache Hit Ratio & Eviction Policies, Data Size & Memory Requirements, Network Latency</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                7.  
                                                <span className="ms-2">Monitoring, Management & Security</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Amazon CloudWatch</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Metrics, Alarms & Events</span>
                                                    </div>
                                                </li>                           
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Metrics: Namespace, Dimensions</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Alarm: Threshold, Actions</span>
                                                        </div> 
                                                    </li> 
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Events: Rules, Event Bus</span>
                                                        </div> 
                                                    </li>
                                                    </ul>
                                                    </div>

                                            
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">CloudWatch Logs & Insights</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">CloudWatch Logs: Log Groups, Streams, Events, Retention Policies</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">CloudWatch Logs Insights: Interactive Querying, Visualization, Query History, Integration with Other AWS Services</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>



                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Custom Metrics & Dashboards</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Custom Metrics: Namespace, Dimensions, Timestamps, Publishing Metrics</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Custom Dashboards: Creating Dashboards, Widgets, Real-time Updating, Sharing & Permissions, Alarm Integration</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">AWS Identity & Access Management (IAM)</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">IAM Users, Groups, Roles</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">IAM User: Access Control, Authentication, Multi-Factor Authentication (MFA)</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">IAM Groups: Access Control, Membership Management</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">IAM Roles: Temporary Security Credentials, Cross-Account Access, Service Roles</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Policies & Permissions</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">IAM Best Practices & Security Considerations</span>
                                                    </div>
                                                </li>                           
                                                </ul>  

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">AWS Security Services</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS WAF (Web Application Firewall)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Shield for DDoS Protection</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Inspector & GuardDuty for Threat Detection</span>
                                                    </div>
                                                </li>                           
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">AWS Inspector: Agent Installation, Assessment Template & Runs, Findings, Remediation</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">AWS GuardDuty: Data Collection, Continuous Monitoring, Threat Detection, Finding Generation, Integration with AWS Services, Threat Intelligence Feed</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                            
                                            
                                    </div>
                                </div>
                            </div> 


                            

                            

                        </div>
                    </div>

                    <div className="col-lg-4"> 
                        <div className="">

                        <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">AWS Config & CloudTrail</span>
                                                </div>
                                            </li>   
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Configuration Management with AWS Config</span>
                                                    </div>
                                                </li>                        
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Resource Inventory, Configuration History & Rules, Compliance Monitoring, Change Notification, Integration with AWS Services</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Auditing & Compliance with CloudTrail</span>
                                                    </div>
                                                </li>                        
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Logging AWS API Activity, Event History, Security Analysis & Monitoring, Compliance Reporting, Log File Integrity, Integration with AWS Services</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Log File Analysis & Retention Policies</span>
                                                    </div>
                                                </li>                        
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Log File Analysis: Log Collection, Log Parsing & Enrichment, Anomaly Detection, Alerting & Reporting</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Log Retention Policies: Regulatory Compliance, Security Considerations, Operational Needs, Cost Optimization</span>
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
                                        <li className="d-block mb-2 fs-18 fw-bold">
                                            8.  
                                            <span className="ms-2">DevOps Practices on AWS</span>
                                        </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> AWS Developer Tools </span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Version control with AWS CodeCommit</span>
                                                        </div>
                                                    </li>                         
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Managed Git Repository, Secure & Scalable, Collaboration & Code Reviews, Integration with AWS Services</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Continuous Integration with AWS CodeBuild</span>
                                                    </div>
                                                </li>                         
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Integration with Source Control, Build Project Configuration & Execution, Test Execution & Artifact Generation, Integration with CI/CD Pipelines</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Automated Deployments with AWS CodeDeploy</span>
                                                    </div>
                                                </li>                         
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Application Setup, Integration with Deployment Targets, Deployment Triggers, Revision & Process, Health checks & Rollback, Deployment Monitoring & Reporting</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Infrastructure as Code (IaC) </span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction to AWS CloudFormation</span>
                                                    </div>
                                                </li>                         
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">IaC, Template-based Approach, Declarative Configuration, Resource Provisioning, Stack & Change Management, Integration & Automation</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Template Anatomy & Best Practices</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managing Stacks & Drift Detection</span>
                                                    </div>
                                                </li>                      
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Managing Stacks: Creating & Updating & Deleting Stacks, Stack Events & Rollback</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Drift Detection: Understanding & Detecting Drift, Viewing Drift Results, Resolving Drift</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> CI/CD Pipelines </span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Building CI/CD Pipelines with AWS CodePipeline</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Integration with third-party tools and services</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Deployment strategies and Blue/Green deployments </span>
                                                    </div>
                                                </li>                      
                                                </ul>  
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Deployment Strategies: Linear & Canary Deployment, All at once Deployment</span>
                                                                </div> 
                                                            </li>
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Blue/Green Deployment: Deployment groups, Configuration, Steps, Validation Testing, Traffic Shifting, Rollback</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                9.  
                                                <span className="ms-2">Serverless Computing</span>
                                            </li>
                                        </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction to Serverless Architecture </span>
                                                    </div>
                                                </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Serverless Computing concepts and benefits</span>
                                                        </div>
                                                    </li>                           
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Concepts: Function as a Service (FaaS), Event-Driven Architecture, Managed Services, Pay-per-use-Billing</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Benefits: Scalability, Cost-Effectiveness, Simplicity & Productivity, Reduced Operational Overhead, Elasticity, Innovation & Experimentation</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> FaaS Vs PaaS </span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Use Cases & Design Pattern </span>
                                                    </div>
                                                </li>                           
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">AWS Serverless Services</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Lambda for Event-Driven Computing</span>
                                                    </div>
                                                </li>                           
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Event Sources: AWS Services, Custom Events</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Event-Driven Execution: Stateless Functions, Auto-Scaling</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Serverless Architecture: Pay-per-use-Billing, Managed Infrastructure</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AWS Step Functions for Workflow Orchestration</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">API Gateway for Serverless APIs</span>
                                                    </div>
                                                </li>                          
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Serverless Application Development</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Building Serverless Application with AWS SAM (Serverless Application Model)</span>
                                                    </div>
                                                </li>                           
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Key Features: Template Definition, Lambda Functions, API Gateway Endpoints, Event Sources, Local Development & Testing, Deployment & Packaging, Integration with AWS Services</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Workflow: Project Initialization, Local Development, Deployment, Monitoring & Management</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Benefits: Productivity, Consistency, Scalability & Resilience, Cost-Effectiveness, Flexibility</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Testing & Debugging Serverless Functions</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Serverless Application Deployment Strategies</span>
                                                    </div>
                                                </li>                          
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Deployment: All-at-Once, Canary, Blue/Green, Rolling, Traffic Splitting, Immutable, Serverless Framework</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                10.  
                                                <span className="ms-2">Advanced Topics & Best Practices</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">High-Availability & Fault Tolerance</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Multi-Region Architectures</span>
                                                        </div>
                                                    </li>           
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Designing for Resiliency & Fault Isolation</span>
                                                        </div>
                                                    </li>   
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Disaster Recovery Planning with AWS Services</span>
                                                        </div>
                                                    </li>                              
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cost Optimization Strategies</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">AWS Pricing Models & Cost Factors</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Cost Allocation tags & Budgets</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Right-Sizing Resources & Optimizing Usage</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Performance Optimization</span>
                                                </div>
                                            </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Performance Monitoring & Tuning</span>
                                                        </div> 
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Scaling Strategies for AWS Services</span>
                                                        </div> 
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Best Practices for Optimizing Application Performance</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                11.  
                                                <span className="ms-2">Real-World Projects & Case Studies</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Building Scalable Web Applications </span>
                                                    </div>
                                                </li>               
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Architecture Design Considerations </span>
                                                        </div>
                                                    </li>           
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Deploying Web Applications on AWS</span>
                                                        </div>
                                                    </li>   
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Load Testing & Performance Optimization</span>
                                                        </div>
                                                    </li>                              
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Data Analytics & Big Data Processing</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Data Ingestion & Processing with AWS Services</span>
                                                                </div> 
                                                            </li>
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Building Data Pipelines with AWS Glue & EMR</span>
                                                                </div> 
                                                            </li>
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Data Visualization & Analysis with AWS Quicksight</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div> 


                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Serverless Microservices</span>
                                                </div>
                                            </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Microservices Architecture Patterns</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Implementing Serverless APIs with API Gateway & Lambda</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Managing Distributed Systems & Service Communication</span>
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
            </div>





            </div>
        </section>


        </>
    );
}

export default CourseAWSCloudEngineering;