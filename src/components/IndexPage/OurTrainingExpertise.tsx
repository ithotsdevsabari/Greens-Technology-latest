"use client";
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import div_img from "/public/images/Divagar.png";
import sarika_img from "/public/images/Sarika Garg Pardasani.jpeg";
import Bishal_img from "/public/images/Bishal Bashyal.jpg";
import training from "/public/images/training.jpg";
import TrainersSlider from "@/components/IndexPage/TrainersSlider";
import Overlay from "../Atom/Overlay";
import ContactUs from "../Common/Emailjs";

const OurTrainingExpertise = () => {
  const [toggler, setToggler] = useState(false);
  const [isVisibleOverlay,setIsVisibleOverlay] = useState(false);

  const handleOpenOverlay = (()=>{
       setIsVisibleOverlay(true)
  });
  const handleCloseOverlay = (()=>{
      setIsVisibleOverlay(false)
  });

  return (

<>
<div>
      {isVisibleOverlay && (
        <Overlay onClose={handleCloseOverlay}><ContactUs/></Overlay>
      )}
      </div>
    
    <div className="banner-gradient2">
      <div className="container">
      {/* Trainer slider */}
    
          <div className=" GlobalCloud">
          <TrainersSlider/>
      
            <p className="fs-4 res_txt text-center font_col mb-0 py-5">
              Our trainers hold certifications such as AWS Solutions Architect,
              Microsoft Certified Professional, and Scrum Master, ensuring
              top-notch training.
            </p>
            <div className="row border_roun bg-white shadow">
              <div className="col-lg-6 mb-3">
                <div className="designation px-4 pt-4">
                  <h3
                    className="mb-0  green-tx"
                  >
                    Data Science & Analytics:
                  </h3>
                  <p className="fs-regular">
                    Trainers with advanced degrees and industry experience in
                    data analytics, machine learning, and AI.
                  </p>
                  <h3
                    className="mb-0 green-tx"
                  >
            Cloud Computing:
                  </h3>
                  <p className="fs-regular">
                  Certified professionals in AWS, Azure, and Google Cloud Platform.
                  </p>
                  <h3
                    className=" mb-0 green-tx"
                  >
                   Software Development:
                  </h3>
                  <p className="fs-regular">
                  Experts in Java, Full Stack Development, and Salesforce.
                  </p>
                  <h3
                    className="mb-0 green-tx">
                   Project Management:
                  </h3>
                  <p className="fs-regular">
                  Trainers certified in Scrum, Agile, and DevOps methodologies.
                  </p>
                  <h3
                    className="mb-0 green-tx"
                  >
                  Business Applications:
                  </h3>
                  <p className="fs-regular mb-0">
                  Specialists in Microsoft 365, including Word, Excel, and Teams.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div className="">
                  <Image src={training} alt="name" className="tech_teaching" />
                </div>
              </div>
            </div>
            <p className="fs-4 text-center mb-0 font_col py-5 res_txt">
            Ready to take your career to the next level with industry-leading training? Enroll now and experience the exceptional education offered by Greens Technologies.
            </p>
          </div>

          <div className="text-center mt-4">
            <Link href="/#" className="button-def button-3" onClick={handleOpenOverlay }>
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>

      </div>
      </>
  );
};

export default OurTrainingExpertise;
