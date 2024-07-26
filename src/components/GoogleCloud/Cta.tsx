"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta_img from "../../../public/img/cta_img.png";

const Cta = ()=>{
    return(
        <div className="">
               <div className="cta_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center ps-5">
                              <Image src={cta_img} alt="people" className="img-fluid mx-auto"/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="cta_content">
                                <h2 className="fs-5-0 fw-semibold text-white mt-6" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">Ready to turn your aspirations <br /> into reality?</h2>
                                <div className="mt-4">
                                <Link href="#" className="bg_yellow px-4 py-2 fs-4 fw-semibold">Connect With Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
        </div>
    )
}
export default Cta;