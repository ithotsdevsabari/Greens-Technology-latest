"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta_img from "../../../public/img/cloudcomputing/ccaws_graph.webp";

const Chart = ()=>{
    return(
        <div className="">
               <div className="">
                <div className="container">
                    <div className="rounded-7 bg-white pt-5 pb-8">
                    <h2 className="fs-30 mb-4 text-center text-grad">
                    Explore over 5000 job openings in cloud computing across Australia! <br/>
                    Join our program and harness your cloud computing skills to thrive in a dynamic job market.
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
                    <h2 className="fs-30 mt-5  text-center"> Experience interactive online classes with live instructors, where your questions are answered in real-time! <br/> Join our Online Cloud Computing courses in Australia and transform your skills today!
          </h2> 
                    </div>
                </div>
                </div> 
        </div>
    )
}
export default Chart;