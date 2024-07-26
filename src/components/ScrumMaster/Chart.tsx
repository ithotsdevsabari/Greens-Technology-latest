"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta_img from "../../../public/img/scrum/scrum-chart.webp";

const Chart = ()=>{
    return(
        <div className="">
            <div className="">
                <div className="container">
                    <div className="rounded-7 bg-white pt-5 pb-8">
                        <h2 className="fs-30 mb-4 text-center text-grad">
                        Unlock over 4000 thrilling job prospects for Scrum Masters across Australia! Embrace the chance to apply your Scrum expertise in a dynamic job market. Employment opportunities abound for skilled Scrum Masters in Australia.
                        </h2> 
                        {/* <h2 className="fs-24 mb-5 text-center"> 
                        Employment Opportunities for Scrum Master Skills in Australia 
                        </h2>  */}
                        <div className="row"> 
                            <div className="col-lg-12"> 
                                <div className="text-center"> 
                                <Image src={cta_img} alt="people" className="img-fluid mx-auto"/> 
                                </div> 
                            </div> 
                        </div> 
                        <h2 className="fs-30 mt-5  text-center">"Experience interactive online classes with live instructors, where your questions are answered in real-time!<br/> Join our Online Scrum Master courses in Australia and transform your skills today!" </h2> 
                    </div> 
                </div> 
            </div> 
        </div>
    )
}
export default Chart;