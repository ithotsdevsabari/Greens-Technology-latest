"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import rating from "../../../public/img/Ratings.png";
import excellence from "../../../public/img/excellence.png";
import learns from "../../../public/img/learners.png";
import arrow from "../../../public/img/right_arrow.png";

const LearnCourses = ()=>{
    return(

        <div className="learn_course ">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-4 col-md-12 p-0">
                         <div className="box_col0">
                            <div className="mb-3">
                            <Image src={excellence} alt="excellence" width={"60"}/>
                            </div>
                            <div className="">
                                <h3 className="text-white">15 Years of Excellence</h3>
                                <p className="text-white pt-2 para_size">"Building futures with over a <br /> decade of experience."</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 p-0">
                    <div className="box_col1">
                    <div className="mb-3">
                            <Image src={learns} alt="excellence" width={"60"}/>
                            </div>
                            <div className="">
                                <h3 className="text-white">10,000+Learners Enrolled</h3>
                                <p className="text-white pt-2 para_size">"Join a thriving community <br /> committed to excellence."</p>
                            </div>
                        </div>
                   </div>

                   <div className="col-lg-4 col-md-12 p-0">
                   <div className="box_col2">
                   <div className="mb-3">
                            <Image src={rating} alt="excellence" width={"60"}/>
                            </div>
                            <div className="">
                                <h3 className="text-white">4.9 - 4,900 Ratings</h3>
                                <p className="text-white pt-2 para_size">"Trusted by learners worldwide <br /> for quality education."</p>
                            </div>
                        </div>
                   </div>

                </div>

            </div>
              
        </div>
    )
}
export default LearnCourses;