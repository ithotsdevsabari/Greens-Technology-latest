"use clien";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import div_img from "/public/img/divagar.png";
import mar_img from "/public/img/marimuthu.png";

const MeetTheTeam = () => {
  return (
    <div className="banner-gradient2">
      <div className="container">
        
        <div className="project_sty text-center">
          <h5 className="mb-3 fw-bolder">
          PROJECT MANAGEMENT PROFESSIONAL training program instructors
          </h5>
          <h2
            className=" fs-5-0 mb-2 text-grad fw-semibold"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Meet The Team
          </h2>
          <h2
            className=" fs-5-0 mb-3 text-black fw-semibold"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            That's Invested in Your Success
          </h2>
        </div>
        
        <div className="team_cont mx-auto mt-5">
            <div className="shadow_col">
          <div className="row border_roun bg-white">
            <div className="col-lg-3 ps-0">
              <div className="">
                <Image src={div_img} alt="name" className="divagar_img"/>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="designation">
                <h3
                  className=" fs-2 pt-4 text-grad fw-semibold "
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Dharvesh 
                </h3>
                <h6 className="fs-medium"> Agile Coach | PMP | CSPO </h6>
                <p className="fs-regular pt-2" >14 + years of  Experienced project manager,product and program management  with a track record of empowering teams to deliver high-quality software products on time and within budget. Passionate about project management life cycle and fostering a culture of continuous improvement. Having trained over 1000 students, I am dedicated to equipping individuals with the skills they need to succeed in project management. Join me on this transformative journey and unlock your full potential in the field. Let's work together to take your project management skills to the next level!</p>
                <div className="text-start">
                <Link className="fs-medium text-black fw-semibold border-line" href="#">Show More</Link>
                </div>
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
