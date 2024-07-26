"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import features1 from "/public/img/f1.png";
import features2 from "/public/img/f2.png";
import features3 from "/public/img/f3.png";
import features4 from "/public/img/f4.png";
import features5 from "/public/img/f5.png";
import features6 from "/public/img/f6.png";
import features7 from "/public/img/f7.png";
import features8 from "/public/img/f8.png";

const Features = ()=>{
    return(
        <div className=" py-8">
            <div className="container">
            <div className="project_sty text-center">
            <h5 className="mb-3 fw-bolder">
            PROJECT MANAGEMENT PROFESSIONAL training program
            </h5>
            <h2
                className=" fs-5-0 mb-2 text-grad fw-semibold"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
            Features
            </h2>
        </div>
        <div className="grid_container mt-8">

            <div className="grid_item border_r">
                <Image src={features1} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Instructor-led Sessions</h3>
                <p className="fs-medium pt-5">50 Hours of Instructor-led Classes.</p>
            </div>

            <div className="grid_item border_r">
                <Image src={features2} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Capstone Projects 60 hours of Project</h3>
                <p className="fs-medium pt-3">We ensure that at the end of the training program, each student gets a hands on by working on real time case studies and Projects.</p>
            </div>

            <div className="grid_item">
                <Image src={features3} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Practicals and Hands-on session</h3>
                <p className="fs-medium pt-3">After end of each session, student must undergo a practical session to gain confidence and this sessions would sum upto 40hours in total.</p>
            </div>

            <div className="grid_item border_r">
                <Image src={features4} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Lifetime Free Upgrade</h3>
                <p className="fs-medium pt-5">We Provide Lifetime access to our library(online) which has presentations, questionnaires, installation guide & session recordings.</p>
            </div>

            <div className="grid_item border_r">
                <Image src={features5} alt="img" className=""/>
                <h3 className="fs-3 pt-4">24 x 7 Expert Support & Access</h3>
                <p className="fs-medium pt-3">24x7 online support team(lifetime access) who will resolve all your technical queries. through ticket based tracking system.</p>
            </div>

            <div className="grid_item">
                <Image src={features6} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Certification and Job Assistance</h3>
                <p className="fs-medium pt-3">We ensure that each student gets a Google Cloud Platform Certification based on your internal assignments and practical session.</p>
            </div>

            <div className="grid_item border_r">
                <Image src={features7} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Flexible Schedule</h3>
                <p className="fs-medium pt-3">We provide flexible timings to make our students comfortable while learning the course.</p>
            </div>

            <div className="grid_item">
                <Image src={features8} alt="img" className=""/>
                <h3 className="fs-3 pt-4">Forum</h3>
                <p className="fs-medium pt-3">Resources to guide your Google Cloud Platform journey. Access to global community forum for brain-storming and knowledge sharing.</p>
            </div>
        </div>
        <div className="text-center mt-5">
            <Link href="#" className="button-def button-3"><span>Get Started Now</span></Link>
            </div>

            </div>
        </div>
    )
}

export default Features;