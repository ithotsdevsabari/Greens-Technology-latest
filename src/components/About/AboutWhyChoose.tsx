"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-film bg-13c4a1",
    title: "Live Classess",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
   
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-diamond bg-6610f2",
    title: "Flexible Timing",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Assignment and Quizzes",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-users bg-fc3549",
    title: "Limited Class Size",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    aosDelay: "400",
  },
];

const AboutWhyChoose: React.FC = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
          <h2 className=" fs-5 text-center">
          Why Choose Us <br /> <span className="text-grad">Greens Technologys</span>    
        </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 4).map((value, i) => (
                <div
                  className="col-lg-3 
                  col-sm-6"
                  // key={i}
                  // data-aos="fade-in"
                  // data-aos-duration="1000"
                  // data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg border">
                    <i className={value.iconName}></i>
                    <h3>
                      {value.title}
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWhyChoose;
