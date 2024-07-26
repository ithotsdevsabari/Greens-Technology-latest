"use clien";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import div_img from "../../../public/img/divagar.png";
import mar_img from "../../../public/img/marimuthu.png";

const MeetTheTeam = () => {
  return (
    <div className="banner-gradient2">
      <div className="container">
        <div className="project_sty text-center">
          <h5 className="mb-3 fw-bolder">
          DATA ANALYTICS certification training program instructors
          </h5>
          <h2
            className=" fs-5-0 mb-2 text-grad fw-semibold"            
          >
            Meet The Team
          </h2>
          <h2
            className=" fs-5-0 mb-3 text-black fw-semibold"
          >
            That's Invested in Your Success
          </h2>

          <h2 className="fs-30 mb-4  text-center">
            "Experience interactive online classes with live instructors,<br/> where your questions are answered in real-time!"
          </h2>          

        </div>
        
        <div className="team_cont mx-auto mt-5">
            <div className="shadow_col">
          <div className="row border_roun bg-white">
            <div className="col-lg-3 ps-lg-0">
              <div className="">
                <Image src={div_img} alt="name" className="divagar_img"/>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="designation">
                <h3 className=" fs-2 pt-4 text-grad fw-semibold">
                  Mr. Divakar
                </h3>
                <h6 className="fs-medium">Designation, Company</h6>
                <p className="fs-medium pt-2" >I have been working in Azure, Google Cloud Platform (GCP), AWS, and Kubernetes as a Cloud & DevOps architect and instructor for more than 7 years. With a PhD degree and over 21 years of IT experience, I have worked with companies like Apple, Google, Xerox, Cognizant, and others. Currently residing in Atlanta, USA, I have trained and placed more than 1000 IT & non-IT students and working professionals in Cloud technology courses across the world with Greens Technologies.</p>
                <div className="text-start">
                <Link className="fs-medium text-black fw-semibold border-line" href="#">Show More</Link>
                </div>
              </div>
            </div>
            </div>
            </div>

            <div className="row border_roun bg-white mt-5">
            <div className="col-lg-3 ps-lg-0">
              <div>
                <Image src={mar_img} alt="name" className="divagar_img"/>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="designation">
                <h3
                  className=" fs-2 pt-4 text-grad fw-semibold "
                >
                  Mr. Marimuthu
                </h3>
                <h6 className="fs-medium">Designation, Company</h6>
                <p className="fs-medium pt-2">I have been working in Azure, Google Cloud Platform (GCP), AWS, and Kubernetes as a Cloud & DevOps architect and instructor for more than 7 years. With a PhD degree and over 21 years of IT experience, I have worked with companies like Apple, Google, Xerox, Cognizant, and others. Currently residing in Atlanta, USA, I have trained and placed more than 1000 IT & non-IT students and working professionals in Cloud technology courses across the world with Greens Technologies.</p>
                <div className="text-start">
                <Link className="fs-medium text-black fw-semibold border-line" href="#">Show More</Link>
                </div>
              </div>
            </div>
            </div>

            <div className="text-center mt-5">
            <Link href="#" className="button-def button-3"><span>Talk To The Instructor</span></Link>
            </div>

          </div>
        </div>
      </div>
  );
};

export default MeetTheTeam;
