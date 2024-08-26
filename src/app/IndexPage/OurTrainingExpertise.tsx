"use clien";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import div_img from "/public/images/Divagar.png";
import sarika_img from "/public/images/Sarika Garg Pardasani.jpeg";
import Bishal_img from "/public/images/Bishal Bashyal.jpg";
import training from "/public/images/training.jpg";
import TrainersSlider from "@/components/IndexPage/TrainersSlider";

const OurTrainingExpertise = () => {
  return (
    <div className="banner-gradient2">
      <div className="container">
      {/* Trainer slider */}
    
          <div className=" GlobalCloud">
          <TrainersSlider/>
            {/* <div className="row border_roun bg-white shadow"> 
              <div className="col-lg-3 ps-0">
                <div className="">
                  <Image src={div_img} alt="name" className="divagar_img" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="designation p-4">
                  <h3
                    className=" fs-2 pt-2 green-tx fw-semibold"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Mr. Diwakar Jaganathan
                  </h3>
                  <h6 className="fs-medium mb-0">
                    Global Cloud Computing Expert, Green Technologies
                  </h6>
                  <p className="fs-regular pt-2 text-justify">
                    Diwakar Jaganathan is a distinguished cloud computing
                    trainer at Greens Technologies Software Training Centre,
                    with a robust 14 year tenure of guiding and inspiring tech
                    professionals globally. Currently the Engineering Director
                    of Digital Engineering at Cognizant in Atlanta, Diwakar has
                    led transformative digital and cloud migration initiatives
                    that have significantly impacted media and communication
                    sectors worldwide.
                  </p>
                  <p className="fs-regular text-justify">
                    With a comprehensive background in modernizing and migrating
                    over 200 applications to the AWS cloud, Diwakar demonstrates
                    unparalleled expertise in cloud solutions.
                  </p>
                  <div className="text-start">
                    <Link
                      className="fs-medium text-black fw-semibold border-line"
                      href="#"
                    >
                      Show More
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="row border_roun bg-white shadow mt-6">
              <div className="col-lg-3 ps-0">
                <div className="">
                  <Image src={sarika_img} alt="name" className="divagar_img" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="designation p-4">
                  <h3
                    className=" fs-2 pt-2 green-tx fw-semibold"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Ms. Sarika Garg Pardasani
                  </h3>
                  <h6 className="fs-medium mb-0">
                  Web Development Expert, Green Technologies
                  </h6>
                  <p className="fs-regular pt-2 text-justify">
                  Sarika Garg Pardasani is a distinguished Trainer at Greens Technologies Software Training Centre, bringing over 16 years of invaluable experience in crafting user-centric, responsive web applications and email campaigns for Fortune 500 clients. Sarika's versatile expertise spans roles from developer to team leader, showcasing her ability to manage multiple projects and deliver exceptional results.
                  </p>
                  <p className="fs-regular text-justify">
                  Sarika has spearheaded numerous successful projects, focusing on designing and implementing innovative web solutions. Her strategic use of versioning tools such as Git and Bitbucket enhances collaborative development environments, ensuring high standards in every project.
                  </p>
                  <p className="fs-regular text-justify">
                  Sarika's passion lies in creating seamless user experiences and optimizing performance. Her proficiency with a wide range of technologies, including React JS, Next JS, Node JS, and Docker, enables her to deliver state-of-the-art solutions. She is also well-versed in CSS preprocessors like SASS and LESS and frameworks like Bootstrap and Foundation.
                  </p>
                  <p className="fs-regular text-justify">
                  At Greens Technologies, Sarika is committed to providing top-tier web development education that is accessible globally. She has been a dedicated trainer with us, ensuring that students gain practical, real-world skills essential for thriving in the dynamic tech industry.
                  </p>
                  <p className="fs-regular text-justify">
                  Enroll in Sarika Garg’s web development courses at Greens Technologies to benefit from her global expertise. Whether you are in Perth, across Australia, or anywhere around the globe, join us to elevate your career with leading-edge web development education and training.
                  </p>
                  <div className="text-start">
                    <Link
                      className="fs-medium text-black fw-semibold border-line"
                      href="#"
                    >
                      Show More
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="row border_roun bg-white shadow mt-6">
              <div className="col-lg-3 ps-0">
                <div className="">
                  <Image src={Bishal_img} alt="name" className="divagar_img" />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="designation p-4">
                  <h3
                    className=" fs-2 pt-2 green-tx fw-semibold"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Mr. Bishal Bashyal
                  </h3>
                  <h6 className="fs-medium mb-0">
                  Data Science Expert, Green Technologies
                  </h6>
                  <p className="fs-regular pt-2 text-justify">
                  Bishal Bashyal is a distinguished Data Science trainer at Greens Technologies Software Training Centre, revered for his groundbreaking contributions and extraordinary achievements in the field of Data Science and Machine Learning. With a stellar academic record and numerous prestigious awards, Bishal brings a wealth of knowledge and practical experience to his students.
                  </p>
                  <p className="fs-regular text-justify">
                  Bishal earned his Bachelor's degree in Computer Engineering from the prestigious IOE, Pulchowk Campus, securing a full scholarship by ranking 33rd out of 16,000 applicants. His academic journey is marked by excellence, having topped his batch in high school and achieving remarkable grades throughout. His accolades include being the Champion of the Nepal Physics Olympiad and a recipient of the Mahatma Gandhi Scholarship from the Indian Embassy.
                  </p>
                  <p className="fs-regular text-justify">
                  Currently, Bishal serves as a Full Stack R&D Engineer at G-Force Security Pvt Ltd, where he leads high-impact projects involving IoT and Machine Learning. Notably, he developed RF-based automated asset tracking systems for military-grade assets and advanced data integration architectures. His innovative research on document image understanding has been published in renowned journals such as the LNNS Series by Springer, further establishing his expertise in the field. He is also a **Fuse AI Scholarship recipient and has been recognized by the HultPrize Foundation with multiple awards, including the Central South Asia Program of the Year-2023.
                  </p>
                  <p className="fs-regular text-justify">
                  At Greens Technologies, Bishal is committed to delivering top-tier Data Science education. His courses are designed to provide students with hands-on skills and in-depth knowledge, preparing them for successful careers in the tech industry.
                  </p>
                  <p className="fs-regular text-justify">
                  Join Bishal Bashyal’s Data Science courses at Greens Technologies and learn from a leading expert whose innovative approach and deep understanding of the subject will elevate your learning experience. Whether you are in Perth, across Australia, or anywhere around the globe, Bishal’s expertise will guide you towards mastering Data Science.
                  </p>
                  <div className="text-start">
                    <Link
                      className="fs-medium text-black fw-semibold border-line"
                      href="#">
                      Show More
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}

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
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Data Science & Analytics:
                  </h3>
                  <p className="fs-regular">
                    Trainers with advanced degrees and industry experience in
                    data analytics, machine learning, and AI.
                  </p>
                  <h3
                    className="mb-0 green-tx"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
            Cloud Computing:
                  </h3>
                  <p className="fs-regular">
                  Certified professionals in AWS, Azure, and Google Cloud Platform.
                  </p>
                  <h3
                    className=" mb-0 green-tx"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                   Software Development:
                  </h3>
                  <p className="fs-regular">
                  Experts in Java, Full Stack Development, and Salesforce.
                  </p>
                  <h3
                    className="mb-0 green-tx"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                   Project Management:
                  </h3>
                  <p className="fs-regular">
                  Trainers certified in Scrum, Agile, and DevOps methodologies.
                  </p>
                  <h3
                    className="mb-0 green-tx"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="200"
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
            <Link href="#" className="button-def button-3">
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>

      </div>
  );
};

export default OurTrainingExpertise;
