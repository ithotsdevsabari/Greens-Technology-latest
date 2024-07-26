"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";

const CourseDevOpsEngineering: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 


            <div id="CourseDevOpsEngineering" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Cloud Computing</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">4. DevOps Engineering Syllabus</span> 
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    1. </span>
                                                    <span className="ms-4">Introduction to DevOps</span>
                                                </div> 
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of DevOps & Its Goals</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Introduction to Continuous Integration</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Continuous Delivery Vs Deployment</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of Continuous Testing</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Continuous Monitoring & Feedback</span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    2.   </span>
                                                    <span className="ms-4">Project Management</span>
                                                </div> 
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Agile & Scrum</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Practice of Follow up Agile & Scrum in a Project</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Tools </span>
                                                    </div>
                                                </li> 
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Azure Boards, Jira </span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    3.   </span>
                                                    <span className="ms-4">CI/CD Pipelines</span>
                                                </div>                                                
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Continuous Integration for Java, .net & Python Applications</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Continuous Delivery vs Deployment for Java, .net and Python Applications </span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Continuous Testing - How to integrate Unittests, SonarQube, VeraCode</span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    4. </span>
                                                    <span className="ms-4">Infrastructure as Code</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Automate Infrastructure for Azure & Google Cloud</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Getting started with Terraform </span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Terraform Basics & Advanced </span>
                                                    </div>
                                                </li> 
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Variables, Outputs, Modules, State Files, Connectivity with AWS, Google Cloud, Azure </span>
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
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    5.   </span>
                                                    <span className="ms-4">Source Repository</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Source Repository (GitHub/Azure Repos)</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Branching Strategy with Source Repository (GitHub/Azure Repos)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">GIT commands with Source Repository</span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    6.   </span>
                                                    <span className="ms-4">Monitoring & Logging</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of Monitoring & Logging</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Monitoring & Logging for Azure (Azure Monitor/App Insights)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Monitoring & Logging for Google Cloud (Cloud Monitor/Cloud Logging)</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Monitoring & Logging for AWS (Cloud Watch)</span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    7.   </span>
                                                    <span className="ms-4">Configuration Management</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of Configuration Management</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Basics of Ansible</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Advanced Ansible topics (Roles, Handlers, etc.,)</span>
                                                    </div>
                                                </li>            
                                            </ul>                                             
                                    </div>
                                </div>
                            </div> 

                            

                    </div> 
                        

                    <div className="col-lg-4"> 

                            <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                            <li className="d-block mb-2 fs-18 fw-bold">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    8. </span>
                                                    <span className="ms-4">Docker & Kubernetes</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Overview of Docker, Images & Containers</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Creating Docker Images & Containers</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Kubernetes – Container Orchestration</span>
                                                    </div>
                                                </li>   
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Working with Deployments, Daemonsets & Pods (add, edit, or remove pods)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Working with Services (add, edit, or remove a service)</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Working with Stateful Applications (persistent volumes, stateful sets)</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managing Horizontal & Vertical Autoscaling Configurations</span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    9. </span>
                                                    <span className="ms-4">Scripting</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Basics of Python & Powershell</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Using Python & Powershell for Scripting</span>
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
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                    10. </span>
                                                    <span className="ms-4">Prepare for Certification & Interviews</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">How to Prepare for Certification</span>
                                                    </div>
                                                </li>  
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">DevOps Project with Kubernetes</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">What are the different roles for a Cloud Engineer</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Resume Preparation</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">How to Prepare for an Interview</span>
                                                    </div>
                                                </li>    
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Interview Questions</span>
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

export default CourseDevOpsEngineering;