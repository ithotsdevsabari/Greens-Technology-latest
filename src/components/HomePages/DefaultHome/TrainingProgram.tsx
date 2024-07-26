"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import science from "../../../../public/img/DS.png";
import internet from "../../../../public/img/IOT.png";
import lap from "../../../../public/img/MetLap.png";
import star from "../../../../public/img/star.png";
import grp from "../../../../public/img/grpimg.png";

const TrainingProgram = () =>{
    return (
        <div>
            <div className="train_bg py-10 banner-gradient2">
                <div className="container">
                    <div className="bg-white round_box">
                    <h2
            className=" fs-5-0 mb-2 text-grad fw-semibold text-center"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200">Related Certification Training Program</h2>
            <div className="row border_b_line py-4">
                <div className="col-lg-6 pl-0">
                    <div className="training_con">
                        <div>
                        <Image src={science} alt="DS" className="w-auto"/>
                        </div>
                        <div className="ds_cont">
                        <h3 className="fs-3">Data Science</h3>
                            <p className=""><span>44,856</span> ENROLLED LEARNERS</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 m-auto">
                    <div className="rating_des">
                    <div className="">
                    <h3 className="fs-3">5.0</h3>
                    </div>
                    <div className="w-30">
                        <Image src={star} alt="star" className="w-100"/>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 m-auto">
                <div className="rating_des">
                <div className="">
                        <Image src={grp} alt="star" className="w-100"/>
                    </div>
                    <div className="">
                    <h3 className="fs-3">48,862</h3>
                    </div>
                    </div>
                </div>

            </div>

            <div className="row border_b_line py-4">
                <div className="col-lg-6 pl-0">
                    <div className="training_con">
                        <div>
                        <Image src={internet} alt="DS" className="w-auto"/>
                        </div>
                        <div className="ds_cont">
                        <h3 className="fs-3">Internet of Things (IoT)</h3>
                            <p className=""><span>44,856</span> ENROLLED LEARNERS</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 m-auto">
                    <div className="rating_des">
                    <div className="">
                    <h3 className="fs-3">5.0</h3>
                    </div>
                    <div className="w-30">
                        <Image src={star} alt="star" className="w-100"/>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 m-auto">
                <div className="rating_des">
                <div className="">
                        <Image src={grp} alt="star" className="w-100"/>
                    </div>
                    <div className="">
                    <h3 className="fs-3">48,862</h3>
                    </div>
                    </div>
                </div>

            </div>

            <div className="row border_b_line py-4">
                <div className="col-lg-6 pl-0">
                    <div className="training_con">
                        <div>
                        <Image src={lap} alt="DS" className="w-auto"/>
                        </div>
                        <div className="ds_cont">
                        <h3 className="fs-3">MatLab</h3>
                            <p className=""><span>44,856</span> ENROLLED LEARNERS</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 m-auto">
                    <div className="rating_des">
                    <div className="">
                    <h3 className="fs-3">5.0</h3>
                    </div>
                    <div className="w-30">
                        <Image src={star} alt="star" className="w-100"/>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 m-auto">
                <div className="rating_des">
                <div className="">
                        <Image src={grp} alt="star" className="w-100"/>
                    </div>
                    <div className="">
                    <h3 className="fs-3">48,862</h3>
                    </div>
                    </div>
                </div>

            </div>

            <div className="text-center mt-5">
            <Link href="#" className="button-def button-3"><span>Show More</span></Link>
            </div>

            </div>
                </div>

            </div>
        </div>
    )
}

export default TrainingProgram;