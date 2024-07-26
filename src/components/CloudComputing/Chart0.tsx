"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta_img from "../../../public/img/dataanalytics/dataanalytics_chart_green.webp";

const Chart = ()=>{
    return(
        <div className="">
               <div className="">
                <div className="container">
                    <div className="rounded-7 bg-white pt-5 pb-8">
                    <h2 className="fs-30 mb-4 text-center text-grad">
                    Discover over 9000 exciting job opportunities for data analysis skills across Australia! <br/>
                    Join us and unleash your Azure skills in a thriving job market.
                    </h2>
                    {/* <h2 className="fs-24 mb-5 text-center">
                    Employment Opportunities for Data Analytical Skills in Australia
                    </h2> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                              <Image src={cta_img} alt="people" className="img-fluid mx-auto"/>
                            </div>
                        </div>                        
                    </div>
                    <h2 className="fs-30 mt-5  text-center">"Experience interactive online classes with live instructors, where your questions are answered in real-time! Join our Online Azure courses in Australia and transform your skills today!"
          </h2> 
                    </div>
                </div>
                </div> 
        </div>
    )
}
export default Chart;