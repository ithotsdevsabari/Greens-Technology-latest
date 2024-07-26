"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";

const CourseGCPCloudEngineering: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 


            <div id="CourseGCPCloudEngineering" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Cloud Computing</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">7. GCP Cloud Engineering Syllabus </span> 
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
                                                                    <span className="ms-4">Public, Private, Hybrid</span>
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
                                                <span className="ms-2">Google Cloud Platform</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction to Google Cloud Platform</span>
                                                    </div>
                                                </li>       
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">GCP Global Infrastructure</span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Regions & Zones, Global Network Backbone, Edge Locations & Points of Presence (PoPs), Network Performance & Security </span>
                                                        </div>
                                                    </li>           
                                                                            
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Key features:</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">On-demand Services, Broad Network Access, Recourse Polling, Rapid Elasticity, Measured services</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Creating GCP Account</span>
                                                    </div>
                                                </li>      
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">GCP Free Tier</span>
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
                                                <span className="ms-2">GCP Compute Services</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Google Compute Engine (GCE)</span>
                                                    </div>
                                                </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating Virtual Machine Instance</span>
                                                        </div>
                                                    </li>                   
                                                </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Sign in to Google Cloud Console, Navigate to Compute Engine, Create a VM Instance</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Customizing Virtual Machine </span>
                                                        </div>
                                                    </li>                   
                                                </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Machine Types, Boot Disk, Adding GPU</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Managing Virtual Machine</span>
                                                        </div>
                                                    </li>                   
                                                </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Staring, Stopping, Restarting, Deleting, Monitoring Virtual Machines, Automating Management Tasks</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>


                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Google Kubernetes Engine (GKE)</span>
                                                        </div>
                                                    </li>                   
                                                </ul> 
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Container Orchestration Basics</span>
                                                            </div>
                                                        </li>                   
                                                    </ul> 
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Kubernetes Basics, Clusters, Nodes, Pods, Deployments, Services</span>
                                                                    </div> 
                                                                </li> 
                                                            </ul>
                                                        </div>

                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Deploying & Managing Containers</span>
                                                            </div>
                                                        </li>                   
                                                    </ul> 
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Containerization, Deployment Configuration, Kubectl, CI/CD, Scaling, Monitoring & Logging, Networking & Load Balancing, Security</span>
                                                                    </div> 
                                                                </li> 
                                                            </ul>
                                                        </div>

                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">App Engine</span>
                                                        </div>
                                                    </li>                   
                                                </ul> 
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Overview & Deployment</span>
                                                            </div>
                                                        </li>                   
                                                    </ul> 
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Overview: Fully Managed Platform, Scalability, Language Support, Services, Integration</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Deployment: Application setup, Configuration, Testing Locally, using ‘gcloud app deploy’, Monitoring & Management, Scaling, Updates</span>
                                                                    </div> 
                                                                </li> 
                                                            </ul>
                                                        </div>

                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Scaling & Traffic Splitting </span>
                                                            </div>
                                                        </li>                   
                                                    </ul> 
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Scaling: Automatic & Manual Scaling</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Traffic Splitting: Deploy Multiple Versions, Configure Traffic Splitting, Gradual Rollout, Monitor & Adjust</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Tools & Monitoring: Stackdriver Monitoring & Logging, Cloud Console, Deployment Manager</span>
                                                                    </div> 
                                                                </li> 
                                                            </ul>
                                                        </div>

                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Cloud Functions</span>
                                                        </div>
                                                    </li>                   
                                                </ul> 
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Serverless Computing Basics</span>
                                                            </div>
                                                        </li>                   
                                                    </ul>
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Definition</span>
                                                                    </div> 
                                                                </li> 
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Key Feature: Event-Driven, Automatic Scaling, Pay-Per-Use, Stateless, No Server Management</span>
                                                                    </div> 
                                                                </li> 
                                                            </ul>
                                                        </div>
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Creating & Deployment Functions</span>
                                                            </div>
                                                        </li>                   
                                                    </ul>
                                                        <div className="ms-4">
                                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                                <li className="d-block mb-2 mt-2"> 
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute">
                                                                            <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                        <span className="ms-4">Choose a Runtime, develop your Functions, Define Function Configuration, Test Locally, Deploy to Google cloud, Monitor & Debug, manage versions, Set Up Triggers, Security & Permissions, Optimize & Scale</span>
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
                                            4.  
                                            <span className="ms-2">GCP Storage Services</span>
                                        </li>
                                    </ul> 
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Google Cloud Storage (GCS)</span>
                                                </div>
                                            </li>                    
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Object Storage Basics</span>
                                                    </div>
                                                </li>                          
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Buckets, Objects, Global Namespace, Durability & Availability</span>
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
                                                                <span className="ms-4">Creating Buckets & Objects</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Managing Access Control & Permission</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 

                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">IAM Policies, Access Control Lists (ACLs), Signed URLs & Policy Documents, Uniform Bucket-Level Access (UBLA), Object Versioning</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Cloud SQL</span>
                                                </div>
                                            </li>                    
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managed Relational Database Service</span>
                                                    </div>
                                                </li>                          
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Supported Database Engines, Fully Managed Service, High Availability & Durability, Scalability</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Configuring & Managing SQL Database</span>
                                                    </div>
                                                </li>                          
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Creating Instances, Connecting to Database, Database Administration, Backup & Restore, Replication, Security & Compliance, Performance Optimization</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Cloud Bigtable</span>
                                                </div>
                                            </li>                    
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">NoSQL Database Service</span>
                                                    </div>
                                                </li>                          
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Distributed Storage, Scalability, Low Latency, Sparse Tables</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>


                                        
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Setting Up & Managing Bigtable Instance</span>
                                                    </div>
                                                </li>                          
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Creating Instances, Instance & Cluster Configuration, Access Control, Data Modeling, Data Loading & Migration, Monitoring & Optimization</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Cloud Spanner</span>
                                            </div>
                                        </li>                    
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Globally Distributed, Horizontally Scalable, Relational Database Feature</span>
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
                                <div className="mt-1 fs-medium">
                                        <div className="top_banner_list">
                                        
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Globally Distributed: Multi-Region Availability, Global Consistency, Automatic Scaling</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Horizontally Scalable: Scalability, Independent Scaling, Performance</span>
                                                                </div> 
                                                            </li> 
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Relational Database Feature: SQL Support, Schema Design, Transactions & ACID Compliance, Schema Evolution</span>
                                                                </div> 
                                                            </li> 
                                                        </ul>
                                                    </div>
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Use Cases</span>
                                                    </div>
                                                </li>                          
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Financial Services, Gaming, Retail & E-Commerce, IoT & Sensor Data, Content Management, Healthcare</span>
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
                                                5.  
                                                <span className="ms-2">GCP Networking</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Virtual Private Cloud</span>
                                                    </div>
                                                </li>                    
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Networking Fundamentals</span>
                                                        </div>
                                                    </li>                             
                                                </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Isolation & Segmentation, IP Addressing, Subnets, Routing, Firewall Rules </span>
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
                                                                    <span className="ms-4">Creating & Configuring VPC Networks</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Creating a VPC Network & Subnets, Configuring Routes & Firewall Rules, Advanced Networking Features</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>
                                            
                                    </div>
                                </div>

                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cloud Load Balancing</span>
                                                    </div>
                                                </li>                    
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Load Balancing Concepts</span>
                                                        </div>
                                                    </li>                             
                                                </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">High Availability, Scalability, Health Checking, Session Affinity</span>
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
                                                                <span className="ms-4">Setting Up Load Balancers </span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">HTTP(S) Load Balancer: Backend Services, URL Maps, Frontend Configuration, Traffic Distribution</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">TCP/SSL Load Balancer: Backend Services, Proxy & Frontend Configuration, SSL Certificate</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">UDP Load Balancer: Backend Services, Frontend & Backend Configuration, Session Affinity</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>
                                            
                                    </div>
                                </div>


                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cloud DNS (Domain Name System)</span>
                                                    </div>
                                                </li>                    
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Domain Name System Basics</span>
                                                        </div>
                                                    </li>                             
                                                </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Domain Name, IP Addresses, DNS Resolution, DNS Hierarchy </span>
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
                                                                <span className="ms-4">Configuring DNS Records & Zones </span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Create a Managed Zone, Add & Manage DNS Records, Verify & Propagate Changes</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>
                                            
                                    </div>
                                </div>


                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cloud CDN (Content Delivery Network)</span>
                                                    </div>
                                                </li>                    
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Content Delivery Network Basics</span>
                                                        </div>
                                                    </li>                             
                                                </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Caching, Edge Servers, Content Routing, Load Balancing</span>
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
                                                                <span className="ms-4">Configuring CDN for GCP Services</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Enable Cloud CDN Changes</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Configure Backend Services</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Enable Cloud CDN on Load Balancing</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Customize Cache Control</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Testing & Monitoring</span>
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
                                                <span className="ms-2">BigData & Machine Learning Services</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">BigQuery </span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Serverless, Highly Scalable Data Warehouse </span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Serverless Architecture: No Infrastructure Management, Pay-Per-Query Pricing, Automatic Scaling, Managed Services</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">High Scalable Data Warehouse: Scalability, Horizontal Scaling, Incremental Scalability, Multi-Cluster Architecture</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Running Queries & Analyzing Data </span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Data Ingestion, Querying Data, Analytical Functions, Visualization & Reporting, Monitoring & Optimization</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cloud Dataflow </span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fully Managed Services for Stream & Batch Processing</span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Stream & Batch Processing, Automatic Scaling, Fault Tolerance, Unified Programming Model</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Building Data Pipelines with Apache Beam</span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Developing Apache Beam Pipelines, Testing Locally, Deploying to Cloud Dataflow, Monitoring & Debugging, Integration with GCP Services</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cloud Dataproc </span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Managed Apache Hadoop & Spark Services</span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Provisioning & Configuration, Cluster Management, Monitoring & Logging, Security & Access Control, Integration with Ecosystem tools</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating & Managing Dataproc Clusters</span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Access GCP Console, Navigate to Dataproc, Create & Manage Cluster, Submit jobs, Scaling, Monitoring & Logging, Security & Access Control, Backup & Recovery, Update & Maintenance</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>



                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">AI Platform</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Machine Learning Model Development & Deployment</span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Access GCP Console, Navigate to AI Platform, Model Development & Packaging & Deployment, Versioning & Managing Models, Model Deployment Verification, Model Serving, Monitoring & Logging, Security & Access Control</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Training & Serving ML Models</span>
                                                        </div>
                                                    </li>                            
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Access GCP Console, Navigate to AI Platform, Training & Serving ML Models, Versioning & Managing Models, Monitoring & Logging, Security & Access Control</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                               
                                            
                                            
                                    </div>
                                </div>
                            </div> 
                        

                    </div>


                    <div className="col-lg-4">

                         <div className=""> 

                         <div className="">
                            <div className=""> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    7.  </span>
                                                    <span className="ms-4">Identity and Access Management (IAM)</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">IAM Concepts & Best practice </span>
                                                    </div>
                                                </li>                        
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Concepts: Principals, Roles, Permission, Resource Hierarchy</span>
                                                        </div>
                                                    </li>           
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Best Practices:</span>
                                                        </div>
                                                    </li>                           
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Principle of Least Privilege</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Regular Review & Audit</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Use Service Accounts</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Separation of Duties</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Enable Multi-factor Authentication (MFA)</span>
                                                            </div> 
                                                        </li>
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Resource Organization</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>


                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managing IAM Roles & Permission</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">IAM Roles: Predefined & Custom Roles</span>
                                                                </div> 
                                                            </li>
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Permissions: Granting & Revoking Permissions</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Service Accounts & Key Management</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">IAM Policies & Resource Hierarchy</span>
                                                    </div>
                                                </li>                                      
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">IAM Polices</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Components of IAM Policies: Bindings, Roles, Permissions</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Policy Attachments, Granularity</span>
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
                                                                <span className="ms-4">Resource Hierarchy</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div>
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Hierarchy Levels: Organization, Folders, Projects, Resources</span>
                                                            </div> 
                                                        </li> 
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Inheritance</span>
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
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                 <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        8. </span>
                                                    <span className="ms-4">Cloud Computing Overview</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of GCP Security Features</span>
                                                    </div>
                                                </li>                   
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">IAM, Network Security, Data Encryption, Security Key Management, Logging & Monitoring, Compliance & Certification</span>
                                                        </div>
                                                    </li>                         
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Encryption at Rest & in Transit</span>
                                                    </div>
                                                </li>     
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Identity-Aware Proxy (IAP)</span>
                                                    </div>
                                                </li>                                     
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Content-Aware Access Control, Single Sign-On (SSO) Integration, Secure Web Application Access, Secure Remote Access to VMs, Granular Access Control Policies</span>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Security Command Center</span>
                                                    </div>
                                                </li>                                    
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Unified Security Dashboards, Asset Inventory, Security Findings & Health Analysis, Integration with Security Partners, Custom Security Controls, Compliance Dashboards & Reports</span>
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
                                                        9. </span>
                                                    <span className="ms-4">GCP Management Tools</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Stackdriver Monitoring</span>
                                                    </div>
                                                </li>                   
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Monitoring GCP Resources & Applications</span>
                                                        </div>
                                                    </li>                         
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Unified Monitoring Dashboard, Real-Time Metrics Collection, Custom Dashboards & Alerts, Integration with GCP Services, Advanced Monitoring & Analysis</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating & Managing Dashboards & Alerts</span>
                                                        </div>
                                                    </li>                         
                                                </ul>  

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Stackdriver Logging</span>
                                                    </div>
                                                </li>                   
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Collecting, Viewing & Analyzing Log Data</span>
                                                        </div>
                                                    </li>                         
                                                </ul> 
                                            
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Deployment Manager</span>
                                                    </div>
                                                </li>                   
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Infrastructure as Code (IaC) tool for managing GCP Resources</span>
                                                        </div>
                                                    </li>                         
                                                </ul> 


                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cloud Shell</span>
                                                    </div>
                                                </li>                   
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Browser based command line interface for GCP</span>
                                                        </div>
                                                    </li>                         
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Accessibility, Pre-Configured Environment, Persistent Home Directory, Integration with GCP Services, Cost-Effective, Customization</span>
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
                                                <span className="ms-2">DevOps on GCP</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Continuous Integration & Continuous Deployment (CI/CD) with Cloud Build</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Source Repository, Trigger & Build Configuration, Build Execution, Testing & Validation, Artifact Generation, Continuous Deployment, Monitoring & Logging</span>
                                                        </div>
                                                    </li>                           
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Infrastructure Automation with Deployment Manager & Terraform</span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Google Cloud Deployment Manager</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 

                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Declarative Configuration, Managed Service, Native GCP Support, Template-Based Deployments</span>
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
                                                                <span className="ms-4">Terraform</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                </div> 

                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Multi-Cloud Support, Declarative Configuration, Provider-Based Architecture, Resource Graph</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Containerization & Orchestration with Kubernetes Engine</span>
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
                                                11.  
                                                <span className="ms-2">GCP Cost Management & Optimization</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">GCP Pricing Models & Calculator</span>
                                                    </div>
                                                </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">GCP Pricing Models</span>
                                                        </div>
                                                    </li>                               
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Pay-as-you-go, Committed & Sustained use discounts, Preemptible VMs</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">GCP Pricing Calculator</span>
                                                        </div>
                                                    </li>                               
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Service Usage, Region, Resource Configuration, Usage Duration, Discounts</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Billing & Cost Management</span>
                                                    </div>
                                                </li>   
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Cost Optimization Strategies & Best Practices</span>
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
                                                12.  
                                                <span className="ms-2">GCP Case Studies & Best Practices</span>
                                            </li>
                                        </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Real-World Case Studies of GCP Implementations</span>
                                                    </div>
                                                </li>   
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Best Practices for Designing, Deployment, Managing Applications on GCP</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Performance Optimization & Troubleshooting Tips</span>
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
        </section>


        </>
    );
}

export default CourseGCPCloudEngineering;