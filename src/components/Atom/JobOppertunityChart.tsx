"use client"
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import cta_img from "../../../public/img/dataanalytics/dataanalytics_chart_green.webp";

interface InputProps{
    graphCourseName:string;
    jobCount:string;
    imageUrl:StaticImageData;
    imageAlt:string;
    graphCourseSkill:string;
    courseName:string;
};


const Chart:React.FC<InputProps> = ({graphCourseName="",jobCount="",imageUrl="",imageAlt="",graphCourseSkill="",courseName=""})=>{
    return(
        <div className="">
               <div className="">
                <div className="container">
                    <div className="rounded-7 bg-white pt-5 pb-8">
                    <h2 className="fs-30 mb-4 text-center text-grad">
                    Explore over 4900 job openings in Web Development across Australia!
Join our program and sharpen your Web Development skills to succeed in a competitive job market.
                    </h2>
                    {/* <h2 className="fs-24 mb-5 text-center">
                    Employment Opportunities for Data Analytical Skills in Australia
                    </h2> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                            <Image src={imageUrl} alt={imageAlt} layout="responsive" width={100} height={100} />
                            </div>
                        </div>                        
                    </div>
                    <h2 className="fs-30 mt-5  text-center">"Experience interactive online classes with live instructors, 
                        where your questions are answered in real-time! <br/>Join our Online Web Development courses in 
                        Australia and transform your skills today!"
          </h2> 
                    </div>
                </div>
                </div> 
        </div>
    )
}
export default Chart;