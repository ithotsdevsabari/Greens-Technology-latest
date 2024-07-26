"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";
import CourseDataEngineeringAWS from "./CourseDataEngineeringAWS";
import CourseDataEngineeringAzure from "./CourseDataEngineeringAzure";
import CourseDataEngineeringGCP from "./CourseDataEngineeringGCP";
import CourseDevOpsEngineering from "./CourseDevOpsEngineering";
import CourseAWSCloudEngineering from "./CourseAWSCloudEngineering";
import CourseAzureCloudEngineering from "./CourseAzureCloudEngineering";
import CourseGCPCloudEngineering from "./CourseGCPCloudEngineering";
import useSmoothScroll from "../Atom/SmoothScroll";

const CourseDetails: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70)
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 

            <div className="mb-4">            
                {/* <h2 className="text-uppercase text-center fs-20 mb-1">Data Analytics Certification Training Program</h2> */}
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Course Syllabus </span> 
                    </h2>
                    {/* <h2 className="fs-30 mb-4  text-center">
            "Experience interactive online classes with live instructors,<br/> where your questions are answered in real-time!"
          </h2> */}
            </div>

            {/* <CourseDetailsAWS />  */}

            <CourseDataEngineeringAWS />

            <CourseDataEngineeringAzure />

            <CourseDataEngineeringGCP /> 

            <CourseDevOpsEngineering /> 

            <CourseAWSCloudEngineering /> 

            <CourseAzureCloudEngineering /> 

            <CourseGCPCloudEngineering /> 

            <div className="course-box shadow-box mb-5 py-5" id="viewCloudComputingCourse">
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