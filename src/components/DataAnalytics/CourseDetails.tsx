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
import MenuItems from "../Atom/ListItems";
import CourseDetail from "../Atom/CourseSyllabus";


const CourseDetails: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70);
  return (
		<>  
         {/* <MenuItems /> */}
         {/* <CourseDetail/> */}
        <section className="mb-8 py-4">
          <div className="container"> 

            <div className="mb-5">            
                {/* <h2 className="text-uppercase text-center fs-20 mb-1">Data Analytics Certification Training Program</h2> */}
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Course Syllabus </span> 
                    </h2>
                    {/* <h2 className="fs-30 mb-4  text-center">
            "Experience interactive online classes with live instructors,<br/> where your questions are answered in real-time!"
          </h2>  */}
            </div>

            {/* Power Automate Course */}
            <div id="PowerAutomateSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Data Analytics</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> Power Automate Syllabus </span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute">
                                                1. </span>
                                            <span className="ms-4">Creating Automatic Email to Gmail Account along with an attachment Stored in OneDrive </span>
                                        </div>
                                    </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                2. </span>
                                            <span className="ms-4">Creating Automatic New Group using Forms </span>
                                        </div>
                                    </li>                                                                        
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
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                3. </span>
                                            <span className="ms-4">Creating Automatic Mails for Birthday and Wedding Wishes </span>
                                        </div>
                                         </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                4. </span>
                                            <span className="ms-4">Creating Power BI Alert Notification to Microsoft Teams, Outlook</span>
                                        </div>                                        
                                    </li>
                                                                       
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
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                5. </span>
                                            <span className="ms-4">Refreshing Dataset</span>
                                        </div> 
                                    </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                6. </span>
                                            <span className="ms-4"> Support Team In case of Some Issues or Errors.</span>
                                        </div> 
                                    </li> 
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>

            {/* Power Apps */}
            <div id="PowerAppsSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Data Analytics</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> Power Apps Syllabus </span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>   
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                1. </span>
                                            <span className="ms-4 "> Introduction</span>
                                        </div> 
                                        </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                2. </span>
                                            <span className="ms-4 "> Installation </span> 
                                        </div> </li> 
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                3. </span>
                                            <span className="ms-4 ">  Get Started with Developer Environment </span> 
                                        </div></li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                4. </span>
                                            <span className="ms-4 ">  Variables </span> 
                                        </div></li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                5. </span>
                                            <span className="ms-4 ">  Collections (Creating, Accessing, Manipulating, Iterating, Clearing) </span> 
                                        </div></li>
                                        

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                6. </span>
                                            <span className="ms-4 ">  Creating Automatic Mails for Birthday and Components  </span> 
                                        </div>
                                        </li>
                                        

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Canvas Apps</span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Model-Driven Apps</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Data Sources</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Controls</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Expressions</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Screens</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Data Integration</span> 
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
                                        <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                                7. </span>
                                            <span className="ms-4 ">Dynamic Assignment</span> 
                                        </div>
                                        </li>  

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Using Formulas, Variables, Collections, Contextual Information, Controls and Properties</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Responding to user Interactions</span> 
                                                </div>
                                            </li>
                                        </ul>    
                                    
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                            <span className="position-absolute ">
                                               8. </span>
                                            <span className="ms-4 ">Functions (Data, Control, Math, Text, Logical, Date and Time, Input and Interaction)</span> 
                                        </div>
                                    </li>  
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                            <span className="position-absolute ">
                                                9. </span>
                                            <span className="ms-4">
                                            Formulas (onselect, onclick, upper, lower, proper, launch, navigation)</span> 
                                        </div>                                        
                                        </li> 

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                            <span className="position-absolute ">
                                                10. </span>
                                            <span className="ms-4">
                                            Creating Canvas App Using SQL & SharePoint</span> 
                                        </div>  
                                         </li> 
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                            <span className="position-absolute ">
                                                11. </span>
                                            <span className="ms-4">
                                            Data Validation Using SQL & SharePoint</span> 
                                        </div>  
                                         </li> 
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                            <span className="position-absolute ">
                                                12. </span>
                                            <span className="ms-4">
                                            Creating App using forms and gallery </span> 
                                        </div>  
                                         </li> 
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                            <span className="position-absolute ">
                                               13. </span>
                                            <span className="ms-4">
                                            Creating CRUD operation (Create, Read, Update, Delete) </span> 
                                        </div>  
                                         </li> 
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                            <span className="position-absolute ">
                                                14. </span>
                                            <span className="ms-4">
                                            Creating Cascading Dropdown  </span> 
                                        </div>  
                                         </li>                                                                    
                                </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2>  */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                    <ul className="mb-1">                                     
                                        <li className="d-block mb-0">
                                            <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    15. </span>
                                                <span className="ms-4">
                                                Integrating Power BI with Power Apps </span> 
                                            </div>  
                                         </li> 
                                         </ul>                                        
                                        
                                        <ul className="d-block mb-2 ms-4 mt-0">
                                            <li className="d-block mb-2 mt-0">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Creating Power BI Report</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Publish the Report to Power BI Service</span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Generate Embed Code </span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Embed Power Bi Report in Power Apps </span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Configure Interactivity </span> 
                                                </div>
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">Test and Publish </span> 
                                                </div>
                                            </li>
                                        </ul>  
                                
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>




             {/* SQL Course */}
             <div id="SQLCourseSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Data Analytics</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> SQL Syllabus</span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    1. </span>
                                                <span className="ms-4">
                                                Introduction </span> 
                                            </div>  
                                         </li>     
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    2. </span>
                                                <span className="ms-4">
                                                Installation </span> 
                                            </div>  
                                         </li>   
                                    
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    3. </span>
                                                <span className="ms-4">
                                                Creating Database and Tables </span> 
                                            </div>  
                                         </li>   
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    4. </span>
                                                <span className="ms-4">
                                                Data Types </span> 
                                            </div>  
                                         </li>                                           

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    5. </span>
                                                <span className="ms-4">
                                                Operators </span> 
                                            </div>  
                                         </li>  
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    6. </span>
                                                <span className="ms-4">
                                                Case Manipulation Functions (Upper (), Lower (),<br/> INITCAP ())  </span> 
                                            </div>  
                                         </li>                                         

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    7. </span>
                                                <span className="ms-4">
                                                Character manipulation functions (Substring (), Concat (), Len(), Trim(), Replace() )  </span> 
                                            </div>  
                                         </li>                                                                         
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
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    8. </span>
                                                <span className="ms-4">
                                                Functions (Date, Null, Number, General) </span> 
                                            </div>  
                                         </li>                                             
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    9. </span>
                                                <span className="ms-4">
                                                Aggregate /Group Functions (Count (), Sum(), AVG(),MIN(),MAX(),Group By, Having)  </span> 
                                            </div>  
                                         </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    10. </span>
                                                <span className="ms-4">
                                                Analytical Functions</span> 
                                            </div>  
                                         </li>

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    11. </span>
                                                <span className="ms-4">
                                                Commands (Date Definition, Data Manipulation, Transaction control, Data Query Language Commands)</span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    12. </span>
                                                <span className="ms-4">
                                                Joins (INNER, LEFT, RIGHT, FULL, CROSS)  </span> 
                                            </div>  
                                         </li>
                                                                        
                                </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>


                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2>             */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    13. </span>
                                                <span className="ms-4">
                                                Constraints (NOT NULL, PRIMARY, UNIQUE, FOREIGN, DEFAULT, INDEX, CHECK) </span> 
                                            </div>  
                                         </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    14. </span>
                                                <span className="ms-4">
                                                Set Operators (Union, Union All, Minus, Intersect)</span> 
                                            </div>  
                                         </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                   15. </span>
                                                <span className="ms-4">
                                                View and Materialized view</span> 
                                            </div>  
                                         </li>
                                         
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    16. </span>
                                                <span className="ms-4">
                                                Sub-Queries </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    17. </span>
                                                <span className="ms-4">
                                                Pseudo Columns (ROWID, ROWNUM, LEVEL, CONNECT_BY_ISLEAF, SYS_GUID ())  </span> 
                                            </div>  
                                         </li>
                                        
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>

            {/* Tableau Course */}
            <div id="TableauCourseSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Data Analytics</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> Tableau Syllabus</span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        
                        <div className=""> 
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Course Name: Tableau </h2>
                            <h2 className=" fs-4 pt-0 mt-0 mb-2"> Tools: Tableau</h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                    <ul className="d-block mb-0">                         
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        1. </span>
                                                    <span className="ms-4">
                                                    Tableau Interface Demo, Products, Desktop </span> 
                                                </div>  
                                            </li>
                                            
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        2. </span>
                                                    <span className="ms-4">
                                                    Data Types in Tableau </span> 
                                                </div>  
                                            </li>                                        
                                        
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        3. </span>
                                                    <span className="ms-4">
                                                    Types of Connections</span> 
                                                </div>  
                                            </li> 
                                            
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        4. </span>
                                                    <span className="ms-4">
                                                    Dimensions & Measures </span> 
                                                </div>  
                                            </li>
                                            
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        5. </span>
                                                    <span className="ms-4">
                                                    Discrete & Continuous</span> 
                                                </div>  
                                            </li>
                                            
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        6. </span>
                                                    <span className="ms-4">
                                                    Tableau File Extensions</span> 
                                                </div>  
                                            </li>
                                            
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative ">
                                                    <span className="position-absolute ">
                                                        7. </span>
                                                    <span className="ms-4">
                                                    Groups, Combine, Set, Parameter, Combined Set, Hierarchy </span> 
                                                </div>  
                                            </li>                                        
                            
                                    </ul>
                                    <ul className="mb-0">
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    8. </span>
                                                <span className="ms-4">
                                                Filters:</span> 
                                            </div>  
                                         </li> 
                                         </ul>
                                        
                                        <ul className="d-block mb-2 ms-4 mt-0 ">                                        
                                            <li className="d-block mb-2 mt-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                <span className="ms-4">
                                                Data Source, Extract, Dimension, Measure, Cascading, Context</span> 
                                            </div> 
                                             </li>                                            
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
                                                                           
                                   
                                    <ul className="mb-1">
                                        <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    9. </span>
                                                <span className="ms-4">
                                                Functions:</span> 
                                            </div>  
                                         </li> 
                                    </ul>
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2 mt-2">                                       
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute ">
                                                    <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                <span className="ms-4">
                                                Number, Aggregate, Logical, String, Table Calculations, Window, Date, Quick Table Calculation, Null, Analytics</span> 
                                            </div> 
                                            </li>
                                            
                                        </ul>    

                                        <ul className="mb-1">
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    10. </span>
                                                <span className="ms-4">
                                                LOD-Level of Details, Bins</span> 
                                            </div>  
                                         </li>        

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    11. </span>
                                                <span className="ms-4">
                                                Types Of Axis, Charts</span> 
                                            </div>  
                                         </li>    

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative " >
                                                <span className="position-absolute ">
                                                    12. </span>
                                                <span className="ms-4">
                                                Maps Filters </span> 
                                            </div>  
                                         </li>     
                                         </ul>   
                                         <ul className="mb-1">
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    13. </span>
                                                <span className="ms-4">
                                                Dashboards </span> 
                                            </div>  
                                         </li>  
                                         </ul>    
                                            <ul className="d-block mb-2 ms-4 mt-2 mt-2">                                       
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                        <span className="ms-4">
                                                        Basic & Advanced Dashboard Preparation
                                                        </span> 
                                                    </div> 
                                                </li>                                            
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
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    14. </span>
                                                <span className="ms-4">
                                                Dashboard Actions </span> 
                                            </div>  
                                         </li> 
                                        
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    15. </span>
                                                <span className="ms-4">
                                                Data Modelling, Relationship, Data Blending </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    16. </span>
                                                <span className="ms-4">
                                                Joining: Cross Data Base Join</span> 
                                            </div>  
                                         </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    17. </span>
                                                <span className="ms-4">
                                                Tableau Server/ Online </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    18. </span>
                                                <span className="ms-4">
                                                Embedded & Published Data Source</span> 
                                            </div>  
                                         </li>

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    19. </span>
                                                <span className="ms-4">
                                                Different Site Roles & User Controls</span> 
                                            </div>  
                                         </li>                          
                                     

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    20. </span>
                                                <span className="ms-4">
                                                RLS (Row Level Security) Alert, Subscription, Metrics Empty Extract </span> 
                                            </div>  
                                         </li>
                                        
                                        
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>



            <div id="PowerBICourseSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Data Analytics</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> Power BI Syllabus</span> 
                    </h2>                    
                </div>
                <div className="row">

                    <div className="col-lg-4">
                        <div className="">                                              
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    1. </span>
                                                <span className="ms-4">
                                                Introduction </span> 
                                            </div>  
                                         </li>
                                         
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    2. </span>
                                                <span className="ms-4">
                                                Installation </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    3. </span>
                                                <span className="ms-4">
                                                Data Types </span> 
                                            </div>  
                                         </li>
                                       
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    4. </span>
                                                <span className="ms-4">
                                                Power Query Editor  </span> 
                                            </div>  
                                         </li>
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2 ">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Data Source Connectivity (Getting or importing data from various source like Files and databases)</span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Data Transformation (Renaming Columns, Changing Data types, Removing Duplicates, Filtering, Sorting and Merging, Pivoting and unpivoting data)</span> 
                                                </div> 
                                                </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Error Handling</span> 
                                                </div> 
                                            
                                            </li>     
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Data Loading</span> 
                                                </div> 
                                            </li>
                                            </ul>
                                    
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    5. </span>
                                                <span className="ms-4">
                                                Data Modeling  </span> 
                                            </div>  
                                         </li>
                                    
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                    <div className="col-lg-4">
                        
                        <div className="">
                           
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>    
                                <li className="d-block mb-2">
                                    <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    6. </span>
                                                <span className="ms-4">
                                                DAX Functions  </span> 
                                            </div>  
                                         </li>
                               
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Aggregation Function: Sum, Average, Count </span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Data and Time Function: Today, Year, DateAdd</span> 
                                                </div> 
                                                </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Logical Function: If, AND, OR, NOT</span> 
                                                </div> 
                                                 </li>   
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Filter Function: Filter, All</span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Statistical Function: Max, Min, Median</span> 
                                                </div> 
                                            </li>

                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Text Function: Concatenate, Left, Right, Mid</span> 
                                                </div> 
                                            </li>       

                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Information Function: ColumnName, Columns, DataTable, ISBLANK, ISCOLUMN, ISERROR, ISEMPTY)</span> 
                                                </div>  </li>

                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Time Intelligence Function</span> 
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
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2>             */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>  
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    7. </span>
                                                <span className="ms-4">
                                                Power BI Visualization  </span> 
                                            </div>  
                                         </li>
                                    
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Dashboards</span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Formatting</span> 
                                                </div> 
                                            </li>
                                        </ul>
                                                       
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    8. </span>
                                                <span className="ms-4">
                                                Power BI Service  </span> 
                                            </div>  
                                         </li>
                                        
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Publishing Reports</span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Dashboard Creation</span> 
                                                </div> 
                                            </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Data Gateway</span> 
                                                </div> 
                                             </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Row-Level Security</span> 
                                                </div> 
                                             </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Formatting</span> 
                                                </div> 
                                             </li>   
                                        </ul>      
                                      
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>  
            </div>


            <div id="PythonCourseSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Data Analytics</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> Python Syllabus</span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                   1. </span>
                                                <span className="ms-4">
                                                Introduction  </span> 
                                            </div>  
                                         </li>

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    2. </span>
                                                <span className="ms-4">
                                                Installation (Python, Anaconda and Jupyter Notebook)   </span> 
                                            </div>  
                                         </li>
                                                                          
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    3. </span>
                                                <span className="ms-4">
                                                Compilation Vs Interpretation </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    4. </span>
                                                <span className="ms-4">
                                                First Basic Program (“Hello World”)  </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    5. </span>
                                                <span className="ms-4">
                                                Variables </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    6. </span>
                                                <span className="ms-4">
                                                Data Types </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                    <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    7. </span>
                                                <span className="ms-4">
                                                Operators </span> 
                                            </div>  
                                         </li>

                                    <li className="d-block mb-2">
                                    <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                   8. </span>
                                                <span className="ms-4">
                                                Function And Methods </span> 
                                            </div>  
                                         </li>
                                        
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
                                    
                                       
                                    <li className="d-block mb-2">
                                    <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    9. </span>
                                                <span className="ms-4">
                                                Conditional Statements (if, if-else, elif) </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                    <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    10. </span>
                                                <span className="ms-4">
                                                Loops (while, For) </span> 
                                            </div>  
                                         </li>
                                        
                                    <li className="d-block mb-2">
                                    <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    11. </span>
                                                <span className="ms-4">
                                                Data Structure (List, Tuple, Set, Dictionary)  </span> 
                                            </div>  
                                         </li>                                        
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    12. </span>
                                                <span className="ms-4">
                                                Iteration Tools (Map, Filter)  </span> 
                                            </div>  
                                         </li> 
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    13. </span>
                                                <span className="ms-4">
                                                Regular Expressions  </span> 
                                            </div>  
                                         </li> 
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    14. </span>
                                                <span className="ms-4">
                                                Packages, Modules and PIP  </span> 
                                            </div>  
                                         </li> 
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    15. </span>
                                                <span className="ms-4">
                                                Exceptions  </span> 
                                            </div>  
                                         </li>
                                    
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                    <div className="col-lg-4">

                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2>             */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                <ul>                        
                                    <li className="d-block mb-2">
                                        </li>
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    16. </span>
                                                <span className="ms-4">
                                                OOPS </span> 
                                            </div>  
                                            </li> 
                                       
                                        <ul className="d-block mb-2 ms-4 mt-2">     
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Classes And Objects</span> 
                                                </div> 
                                                </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Constructor </span> 
                                                </div> 
                                                </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Attributes and Methods</span> 
                                                </div> 
                                                 </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Inheritance</span> 
                                                </div> 
                                                </li>
                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Encapsulation</span> 
                                                </div> 
                                                </li>

                                            <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                    <span className="position-absolute ">
                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                    <span className="ms-4">
                                                    Polymorphism</span> 
                                                </div> 
                                                </li>
                                        </ul>   
    
                                       
                                    
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    17. </span>
                                                <span className="ms-4">
                                                Anonymous Function (Lambda) </span> 
                                            </div>  
                                            </li> 
                                        
                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    18. </span>
                                                <span className="ms-4">
                                                Python Libraries (NumPy, Pandas, Matplotlib) </span> 
                                            </div>  
                                            </li>                                         

                                    <li className="d-block mb-2">
                                        <div className="d-flex position-relative ">
                                                <span className="position-absolute ">
                                                    19. </span>
                                                <span className="ms-4">
                                                Generators And Closures </span> 
                                            </div>  
                                            </li> 
                                            
                                </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>  
            </div>




            <div id="viewschedule" className="course-box shadow-box mb-5 py-5">
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