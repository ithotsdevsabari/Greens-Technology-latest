"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta_img from "../../../public/img/microsoft365/microsoft365-chart.webp";

const Chart = ()=>{
    return(
        <div className="">
            <div className="">
                <div className="container">
                    <div className="rounded-7 bg-white pt-5 pb-8">
                        <h2 className="fs-30 mb-4 text-center text-grad">
                        Unlock over 1000 thrilling job prospects for Microsoft 365 professionals across Australia! 
                        </h2> 
                        <h2 className="fs-24 mb-5 text-center"> 
                        Existing employees can upskill to enhance their career prospects and perform their jobs more efficiently.
                        </h2> 
                        <div className="row"> 
                            <div className="col-lg-12"> 
                                <div className="text-center"> 
                                <Image src={cta_img} alt="people" className="img-fluid mx-auto"/> 
                                </div> 
                            </div> 
                        </div> 
                        <h2 className="fs-30 mt-5  text-center">"Experience interactive online classes with live instructors,<br/> where your questions are answered in real-time!" </h2> 
                    </div> 
                </div> 
            </div> 
        </div>
    )
}
export default Chart;