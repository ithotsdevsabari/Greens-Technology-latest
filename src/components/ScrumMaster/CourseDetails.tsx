"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import moon from "../../../public/img/icons/moon.webp";
import arrowBot from "../../../public/img/icons/arrowbot.png";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import useSmoothScroll from "../Atom/SmoothScroll";


const CourseDetails: React.FC = () => {
  const [toggler, setToggler] = useState(false);
//   useSmoothScroll(70);
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 

            <div className="mb-5">            
                {/* <h2 className="text-uppercase text-center fs-20 mb-1">Scrum Master Certification Training Program</h2> */}
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Course Syllabus </span> 
                    </h2>
                    {/* <h2 className="fs-30 mb-4  text-center">
                            "Experience interactive online classes with live instructors,<br/> where your questions are answered in real-time!"
                        </h2>  */}
            </div>

            {/* Power Automate Course */}
            <div id="ScrumMasterSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Scrum Master</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> Scrum Master Syllabus </span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                <li className="d-block mb-2 fs-18 fw-bold">
                                        1. Introduction to Agile & Scrum
                                    </li>
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Understanding Agile Manifesto & its principles </span>
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Scrum Framework: Roles, Artifacts, Ceremonies, Values.</span>
                                                </div>
                                               
                                            </li>
                                        </ul> 

                                        <li className="d-block mb-2 fs-18 fw-bold">
                                        2. Scrum Master Framework:  ROLE
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Responsibilities: </span>                                              
                                                
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Scrum Master</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Product Owner</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Development Team</span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 

                                    
                                    
                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        3. Scrum Master Framework: VALUE
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Scrum is Guided by Five core Values </span>                                                                                                
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Commitment</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Courage</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Focus</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Openness</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Respect</span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 



                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        4. Scrum Master Framework: ARTIFACT
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Three Primary Artifacts in Scrum:  </span>                                               
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Product Backlog</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Sprint Backlog</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Increment</span>
                                                    </div>                                                    
                                                </li>
                                                
                                            </ul> 

                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        5. Scrum Master Framework: EVENTS(CEREMONIES):
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Four Main Events:  </span>                                               
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Sprint and its Planning</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Daily Scrum</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Sprint Review</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Sprint Retrospective</span>
                                                    </div>                                                    
                                                </li>
                                                
                                            </ul> 

                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        6. Facilitation And Coaching:
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Techniques for Facilitating Scrum Events:   </span>                                              
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Create a Structured Agenda</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Set Time-Boxes</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Encourage Participation</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Use Visual Aids</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Facilitate Decision Making</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Manage Conflicts</span>
                                                    </div>                                                    
                                                </li>                                                
                                            </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">    
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Coaching the Scrum Team for Self-Organization & Improvement:   </span>                                              
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Encourage Ownership</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Promote Continuous Improvement</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Provide Feedback</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Foster a Learning Culture</span>
                                                    </div>                                                    
                                                </li>                                                                                              
                                            </ul> 
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Handling Conflict within the Scrum Team:   </span>                                              
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Address Issues Promptly</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Listen Actively</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Facilitate Dialogue</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Mediate if Necessary</span>
                                                    </div>                                                    
                                                </li>   
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Follow Up</span>
                                                    </div>                                                    
                                                </li>                                                                                             
                                            </ul> 


                                </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">                        
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>    
                                    


                                <li className="d-block mb-2 fs-18 fw-bold">
                                        7. Agile Estimation & Planning
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> User Stories    </span>                                                
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">Product Backlog Items   </span>                                                
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Creating & Managing the Sprint backlogs:  </span>                                              
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Sprint Planning</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Task Decomposition</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Estimating Tasks</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Updating the Sprint Backlogs</span>
                                                    </div>                                                    
                                                </li>
                                                                                           
                                            </ul> 


                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        8. Agile Metrics & Reporting
                                    </li>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Agile Metrics: </span>                                                
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Velocity</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Burndown & Burnup Chart</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Lead Time & Cycle Time</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Cumulative Flow Diagram</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Escaped Defects </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Customer Satisfaction </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Work in Progress </span>
                                                    </div>                                                    
                                                </li>                                                                                           
                                            </ul> 
                                   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Agile Reporting: </span>                                               
                                                
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Transparency & Visibility</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Frequency & Cadence</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Focus on Values & Outcomes</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Visualization & Dashboards</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Key Metrics & Trends</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Impediments & Risks</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Continuous Improvement</span>
                                                    </div>                                                    
                                                </li>    
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Actionable Insights</span>
                                                    </div>                                                    
                                                </li>  
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Adaptability & Flexibility</span>
                                                    </div>                                                    
                                                </li>                                                                                         
                                            </ul> 


                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        9. Agile and Scrum Software
                                    </li>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Jira</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Trello</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Confluence</span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> How to use the tools efficiently in Scrum Projects: </span>  
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Backlog Management</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Task Tracking & Process Monitoring</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Daily Stand-ups</span>
                                                    </div>                                                    
                                                </li>                                                                                       
                                            </ul> 


                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        10. Scaling Scrum
                                    </li> 
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Introduction to Scaling Framework: </span>                                                                                               
                                            
                                            </li>
                                        </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">SAFe (Scaled Agile Framework)</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">LeSS (Large-Scale Scrum)</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Scrum@Scale</span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Consideration For Scaling Scrum in Larger Organizations: </span>                                               
                                            
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Organizational Structure</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Culture & Mindset</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Training & Coaching</span>
                                                    </div>                                                    
                                                </li>  
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Communication & Collaboration</span>
                                                    </div>                                                    
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Incremental Adoption</span>
                                                    </div>                                                    
                                                </li> 
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Feedback &Adaptation</span>
                                                    </div>                                                    
                                                </li>  
                                                                                                                                    
                                            </ul> 






                                                                       
                                </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        11. Agile Transformation & Culture
                                    </li> 
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">  Strategies For Introducing Scrum & Agile Principles: </span>                                                
                                           
                                            </li>
                                        </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Education & Training</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Pilot Projects</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Executive Support</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Cross- Functional Collaboration</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Adaptive Planning & Iterative Delivery</span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">  Strategies for Building an Agile Culture & Mindset: </span>                                               
                                            
                                            </li>
                                        </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Lead by Example</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Empowerment & Autonomy</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Customer Focus</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Embrace Failure & Learn from Mistakes</span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 





                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        12. Continuous Learning & Improvement
                                    </li> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">    
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">  Encouraging a Culture of Continuous Improvement: </span>                                              
                                                
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Promote Psychological Safety</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Empower Teams</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Celebrate Successes & Failures</span>
                                                    </div>                                                    
                                                </li>  
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Implement Feedback Mechanisms</span>
                                                    </div>                                                    
                                                </li> 
                                            </ul> 
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">    
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">  Staying Updated on the Latest Trends & Best Practices for Agile & Scrum</span>                                            
                                                
                                            </li>
                                        </ul>




                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        13. Scrum Master Ethics & Professionalism
                                    </li> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Ethical Consideration in the Scrum Master Role: </span>                                               
                                                
                                            </li>
                                        </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Confidentiality, Impartiality, Transparency</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Conflict of Interest, Respect for Autonomy</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Honesty & Integrity</span>
                                                    </div>                                                    
                                                </li>  
                                            </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Maintaining Professionalism & Integrity: </span>                                                 
                                            
                                            </li>
                                        </ul>
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Leading by Example</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Effective Communication, Conflict Resolution, Accountability</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Ethical Decision-Making</span>
                                                    </div>                                                    
                                                </li>  
                                            </ul> 



                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        14. Case Studies, Real-World Scenarios, Practice Exercises
                                    </li> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Analyzing Real-World scrum implementation challenges & Solutions </span>                                                 
                                               
                                            </li>
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Learning from Success & Failure Stories   </span>   
                                                                  
                                            </li>  
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Hands-on practice projects   </span>   
                                                                           
                                            </li>
                                        </ul>   


                                    <li className="d-block mb-2 fs-18 fw-bold">
                                        15. Scrum Master Certification (Optional)
                                    </li> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Certified Scrum Master (CSM)    </span>     
                                                
                                            </li>
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4">  Professional Scrum Master (PSM)     </span>  
                                                             
                                            </li>  
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> SAFe Scrum Master (SSM)  </span>  
                                                                           
                                            </li>
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Certified Agile Coach (CAC)         </span>  
                                                              
                                            </li>
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Agile Certified Practitioner (PMI-ACP)       </span>  
                                                                   
                                            </li>
                                        </ul> 


                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>

            


            <div className="course-box shadow-box mb-5 py-5" id="scrumMasterBatchDetails">
                <div className="row">
                    <UpcomingCourses/>                    
                </div>
            </div>

            

          </div>
        </section>


        </>
    );
}

export default CourseDetails;