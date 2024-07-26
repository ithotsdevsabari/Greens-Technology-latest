"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import phoneIcon from "../../../public/img/phone.png";

const CareerAsst: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  

        <section className=" pt-6 pb-3">
          <div className="container">

            <div className="m-w-1400">

            

            <div className="mb-5">            
                
                <h2 className="text-center fs--2">
                    <span className="d-block text-grad mb-2">For Career Assistance </span> 
                    <span className="d-block ">Talk to our Experts. We are available 24/7.</span>
                </h2>
                
                <div className="text-center mt-5 mb-10 ">
                    <div className="fs-1 fw-semibold text-grad phone_no">
                        <span className="me-3">
                            <Image src={phoneIcon} alt="add" className="ms-auto" width={40} height={20} /> 
                        </span>
                        <span>0423737907</span>
                    </div>                
                </div>

            </div>

             

                        {/* <div className="text-center mt-3">
                            <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                            <Link href="" className="button-def button-3">
                                <span>Download Syllabus</span> 
                                <span className="ms-2">
                                    <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                                </span></Link>
                        </div> */}
            </div>
          </div>
        </section>


        </>
    );
}

export default CareerAsst;