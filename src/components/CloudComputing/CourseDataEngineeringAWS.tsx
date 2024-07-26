"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";
import useSmoothScroll from "../Atom/SmoothScroll";

const CourseDataEngineeringAWS: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70)
  const svgLogo = (
    <svg
      height="30"
      width="30"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5l2 2 4-4"
        stroke="#0c9587"
        stroke-width="0.8"
        fill="none"
      />
    </svg>
  );



  return (
		 
        <section id="CourseDataEngineeringAWS" className="mb-8 py-4">
          <div className="container"> 


            <div id="CourseDataEngineeringAWS" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Cloud Computing</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">1. Data Engineering - AWS Syllabus</span> 
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
                                                <span className="ms-2">Introduction to Data Engineering</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">What is Data Engineering & Key Concepts </span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Key Concepts </span>
                                                        </div>
                                                    </li>                                   
                                                </ul> 
                                                    <div className="d-block mb-2 ms-4 mt-2">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Data Collection, Data Storage, Data Processing, Data Quality & Governance, Scalability & Performance, Data Integration, Data Security, Data Architecture, Monitoring & Optimization, Collaboration & Communication</span>
                                                            </div>
                                                        </li>  
                                                    </ul>
                                                    </div>
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                         {svgLogo} </span>
                                                        <span className="ms-4">Data engineering vs Data science</span>
                                                    </div>
                                                </li> 
                                            </ul> 
                                                    <div className="ms-4">
                                                        <ul className="d-block mb-2 ms-5 mt-2">
                                                            <li className="d-block mb-2 mt-2"> 
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute">
                                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Overview of Data Engineering Tools & Workflows</span>
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
                                                <span className="ms-2">Linux & Python Programming</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Linux Basics for File System Navigation & Management</span>
                                                    </div>
                                                </li>       
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">File System Navigation, File Management, File Viewing & Editing, File Compression & Archiving</span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Python Programming Fundamentals & Control Structures</span>
                                                        </div>
                                                    </li>           
                                                                                
                                                </ul> 
                                               
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Variables, Data Types, Basic Input & Output, Control Structure, Functions, Error Handling</span>
                                                    </div>
                                                </li>                                        
                                            </ul>
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Foundation in Linux & Python for Data Engineering</span>
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
                                                <span className="ms-2">Data Storage</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Relational Databases</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Key Concepts</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Tables, Primary & Foreign Key, Normalization, SQL (Structured Query Language), ACID (Atomicity, Consistency, Isolation, Durability) Properties </span>
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
                                                            <span className="ms-4"> Common Relational Database Management Systems (RDBMS)</span>
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
                                                            <span className="ms-4"> MySQL, PostgreSQL, Oracle Database, SQL Server</span>
                                                        </div>
                                                    </li>                           
                                                    </ul> 
                                                    </div> 
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> MongoDB: NoSQL with MongoDB</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Key Concepts</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Documents, Collections, Fields, Indexes, Query Language, Aggregation Framework  </span>
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
                                                            <span className="ms-4"> Advantages of MongoDB for Data Engineering</span>
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
                                                            <span className="ms-4"> Flexibility, Scalability, Performance, Developer Productivity</span>
                                                        </div>
                                                    </li>                           
                                                    </ul> 
                                                    </div> 
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Cassandra: Distributed NoSQL with Cassandra</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Key Concepts</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Distributed Architecture, Data Model, Scalability, Partitioning, Replication, Consistency Levels, CQL (Cassandra Query Language)  </span>
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
                                                            <span className="ms-4"> Advantages of Cassandra for Data Engineering</span>
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
                                                            <span className="ms-4"> Scalability, High Availability, Performance, Flexibility</span>
                                                        </div>
                                                    </li>                           
                                                    </ul> 
                                                    </div>
                                                    <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> ClickHouse: Columnar analytics with ClickHouse</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Key Concepts</span>
                                                        </div>
                                                    </li>                      
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2">
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Columnar Storage, Distributed Architecture, Data Types, SQL Interface, High Performance, Materialized Views </span>
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
                                                            <span className="ms-4"> Advantages of ClickHouse for Data Engineering</span>
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
                                                            <span className="ms-4"> High Performance, Scalability, Efficient Storage </span>
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
                                                    <span className="ms-4">Data Integration & Orchestration</span>
                                                </div>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Introduction to Data Integration & Orchestration</span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Key Concepts of Data Integration</span>
                                                        </div>
                                                    </li>                               
                                                </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4">Extract, Transform, Load (ETL), Data Quality & Governance, Batch & Real-time Integration</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Key Concepts of Data Orchestration</span>
                                                </div>
                                            </li>                                                                            
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Workflow & Dependency Management, Scheduling & Monitoring </span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                                </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Tools & Technologies for Data Integration & Orchestration</span>
                                                </div>
                                            </li>                                                                            
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> ETL (Extract, Transform, Load) Tools, Workflow Orchestration Tools, Streaming Platforms, Cloud Data Integration Services </span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                                </div>
                                                <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Introduction to Apache Airflow</span>
                                                    </div>
                                                </li>                       
                                                </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Key Concepts </span>
                                                        </div>
                                                    </li>                               
                                                </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Directed Acyclic Graphs (DAGs), Operators, Schedulers, Executors, Web UI, Plugins</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Use Cases</span>
                                                </div>
                                            </li>                                                                            
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> ETL (Extract, Transform, Load) processes, Data Pipeline Orchestration & Automation, Data Warehousing & Analytics, Real-time Data Processing & Streaming Analytics </span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                                </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Advantages of Apache Airflow</span>
                                                </div>
                                            </li>                                                                            
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Workflow Orchestration, Scalability, Flexibility, Monitoring & Logging  </span>
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
                                                        <span className="ms-4"> Introduction to Apache Nifi for Data Integration</span>
                                                    </div>
                                                </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Key Concepts </span>
                                                        </div>
                                                    </li>                               
                                                </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> FlowFile, Processor, Connection, Flow Controller, Data Provenance, Templates</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                </div>

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Use Cases </span>
                                                </div>
                                            </li>                                                                            
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Real-time Data Ingestion & Processing, Data Routing & Transformation, Log & Event Data Collection & Analysis, Data Replication & Synchronization, IoT (Internet of Things) Data Processing, Data Migration & ETL (Extract, Transform, Load) processes </span>
                                                        </div> 
                                                    </li>
                                                </ul>
                                                </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Advantages of Apache NiFi </span>
                                                </div>
                                            </li>                                                                            
                                            </ul> 
                                                <div className="ms-4">
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Ease of Use, Scalability, Reliability </span>
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
                                                <span className="ms-2">Batch Data Processing</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Introduction to Hadoop</span>
                                                    </div>
                                                </li> 
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Key Components </span>
                                                    </div>
                                                </li>                          
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Hadoop Distributed File System (HDFS), MapReduce, YARN (Yet Another Resource Negotiator), Hadoop Common & Ecosystem </span>
                                                            </div> 
                                                        </li> 
                                                        
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Advantages of Hadoop</span>
                                                    </div>
                                                </li> 
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Scalability, Fault Tolerance, Cost-Effectiveness, Flexibility </span>
                                                    </div>
                                                </li>                         
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Spark for Batch Data Processing</span>
                                                </div>
                                            </li> 
                                            </ul> 

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Key Concepts</span>
                                                    </div>
                                                </li>                          
                                                </ul> 

                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Resilient Distributed Dataset (RDD), Transformations & Actions, Spark SQL & Streaming, MLlib, GraphX </span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Use Cases </span>
                                                    </div>
                                                </li>                          
                                                </ul> 

                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> ETL (Extract, Transform, Load) processes, Batch processing of Large-Scale Data Sets, Data Warehousing & Analytics, Machine Learning Model Training & Evaluation, Stream processing & Real-Time Analytics, Graph processing & Network Analysis </span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Advantages of Spark for Batch Data Processing</span>
                                                    </div>
                                                </li>                          
                                                </ul> 

                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Speed, Scalability, Ease of Use, Versatility</span>
                                                            </div> 
                                                        </li>
                                                    </ul>
                                                    </div>


                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Advanced Spark for Batch Processing</span>
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
                                            6.  
                                            <span className="ms-2">Streaming Data Processing</span>
                                        </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Introduction to Streaming Data Processing</span>
                                                </div>
                                            </li>                       
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Key Concepts </span>
                                                    </div>
                                                </li>                             
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Event Stream, Stream Processing, Event Time vs. Processing Time, Fault Tolerance, Windowing, Exactly-once Semantics </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Streaming Data Processing Architectures</span>
                                                    </div>
                                                </li>
                                                </ul> 
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Stream-First Architecture, Lambda Architecture, Kappa Architecture </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Real-time Data Processing with Kafka Streams</span>
                                                </div>
                                            </li>                       
                                            </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Real-time Processing with Apache Flink </span>
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
                                                7.  
                                                <span className="ms-2">Production Data Engineering</span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Production Deployment of Data Pipelines</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Infrastructure Setup</span>
                                                    </div>
                                                </li>                           
                                                </ul>                                                
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Environment Configuration, Cluster Management, Storage </span>
                                                        </div> 
                                                    </li> 
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Dependency Management</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Dependency Isolation & Management Tools </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Pipeline Deployment</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Orchestration, CI/CD Pipelines</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Monitoring & Alerting</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Logging, Metrics Monitoring, Alerting</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Scalability & Performance Optimization</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Horizontal Scaling & Optimization Techniques </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Security & Compliance</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Data Encryption, Access Control, Compliance Requirements</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Disaster Recovery & Backup, Documentation & Knowledge Sharing</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Monitoring, Logging, Alerting</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Data Testing & Test-Driven Development</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Data Testing</span>
                                                    </div>
                                                </li>                           
                                                </ul>    
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Data Quality Assurance, Data Integrity, Data Validation, Performance Testing</span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>

                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Test-Driven Development (TDD)</span>
                                                    </div>
                                                </li>  
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Defining Test Cases, Writing & Running Tests, Refactoring & Iteration </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                               
                                                </ul>  

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> CI/CD for Data Projects</span>
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

                        <div className="mb-4"> 
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                        <ul className="d-block mb-2 mt-2">
                                        <li className="d-block mb-2 fs-18 fw-bold">
                                            8.  
                                            <span className="ms-2">Data Engineering Advanced Topics</span>
                                        </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Data Modeling & Database Design </span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Data Modeling </span>
                                                    </div>
                                                </li>  
                                                </ul> 
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Conceptual Data Model, Logical Data Model, Physical Data Model </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Database Design </span>
                                                    </div>
                                                </li> 
                                                </ul>  
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Normalization, Denormalization, Indexing, Partitioning, Data Types & Constraints, Scaling Strategies </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Data Governance & Metadata </span>
                                                </div>
                                            </li>                      
                                            </ul> 

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Data Governance </span>
                                                    </div>
                                                </li>  
                                                </ul>
                                                <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Policy & Standards, Data Stewardship, Data Quality & Lifecycle Management, Data Security & Privacy, Regulatory Compliance, Data Catalog </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Metadata Management </span>
                                                    </div>
                                                </li>  
                                                </ul>
                                                    <div className="ms-4">
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2"> 
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute">
                                                                    <Image src={arrow} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                                <span className="ms-4"> Metadata Definition & Repository, Data Lineage & Profiling, Business Glossary, Metadata Integration, Data Lineage & Impact Analysis </span>
                                                            </div> 
                                                        </li> 
                                                    </ul>
                                                    </div>       
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Data Catalogs</span>
                                                </div>
                                            </li>                      
                                            </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Centralized Metadata Repository, Data Discovery & Exploration, Data Lineage & Impact Analysis, Data Governance & Compliance, Collaboration & Knowledge Sharing, Integration with Data Ecosystem, Metadata Automation & Enrichment</span>
                                                    </div>
                                                </li>  
                                                </ul> 
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2">
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                <span className="ms-4"> Security & Compliance </span>
                                            </div>
                                        </li>                      
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Data Encryption, Access Controls, Data Masking & Anonymization, Audit Logging & Monitoring, Data Governance & Compliance Frameworks, Data Residency & Sovereignty, Secure Development Practices, Third-Party Risk Management </span>
                                                    </div>
                                                </li>  
                                                </ul> 
                                            
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Data Quality & Validation </span>
                                                </div>
                                            </li>                      
                                            </ul> 

                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={doubleTick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Data Profiling, Data Cleansing, Data Standardization, Data Quality Metrics, Data Validation Rules, Automated Testing, Data Quality Monitoring, Data Governance & Stewardship, Feedback Loops & Continuous Improvement </span>
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
                                                <span className="ms-2">Capstone Project </span>
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Design & Implement End-to-End Data Pipeline</span>
                                                    </div>
                                                </li>                     
                                            </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Document Architecture, Data Maps </span>
                                                    </div>
                                                </li>                                        
                                            </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="doubleTick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Present to Instructor & Classmates</span>
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
    );
}

export default CourseDataEngineeringAWS;