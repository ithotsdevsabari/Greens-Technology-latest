"use client"
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

// import React from "react";
import Link from "next/link";
import Image from "next/image";
import cta_img from "../../../public/img/bookfreedemo.png";
import greenBg from '../../../public/img/greenbg.jpg'

import Overlay from "../Atom/Overlay";
import ContactUs from "../Common/Emailjs";

const BookFreeDemo = ()=>{

    const [toggler, setToggler] = useState(false);
    const [isVisibleOverlay,setIsVisibleOverlay] = useState(false);
    const handleOpenOverlay = (()=>{
        setIsVisibleOverlay(true)
    });
    const handleCloseOverlay = (()=>{
        setIsVisibleOverlay(false)
    })

    return(

        <div className="">

{isVisibleOverlay && (
<Overlay onClose={handleCloseOverlay}><ContactUs/></Overlay>
)}
      
               <div className="cta_bg py-4 position-relative"
                // style={{ backgroundImage: `url(cta_img)` }}
                >
                    <div className="ctaimg position-absolute">
                        <Image src={greenBg} alt="people" className="img-fluid mx-auto"/>
                    </div>
                    <div className="container z-1">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="text-center ps-4">
                                <Image src={cta_img} alt="people" className="img-fluid mx-auto"/>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="cta_content text-center text-lg-start">
                                    <h2 className="fs-5-0 fw-semibold text-white mt-5 mt-lg-0" >Book your free demo class now and experience our transformative software training courses firsthand in Australia!</h2>
                                    <div className="mt-4">
                                    <Link href="#" className="bg_yellow px-4 py-2 fs-4 fw-semibold" onClick={handleOpenOverlay }>Book Free Demo</Link>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    )
}
export default BookFreeDemo;