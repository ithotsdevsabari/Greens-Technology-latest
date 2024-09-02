"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-users bg-13c4a1",
    title: "Expert Guidance",
    shortText:
      "Our team of experienced professionals is well-versed in the latest immigration laws and procedures, providing you with accurate and up-to-date advice.",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: " Personalized Support for All Backgrounds",
    shortText:
      "We recognize that many of our clients come from rural areas in India and may not be familiar with the complexities of immigration processes. That’s why we offer special support tailored to those who might feel overwhelmed or uncertain. We take the time to explain every step in simple, clear terms, ensuring you fully understand your options and feel confident in your decisions.",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Trustworthy and Transparent Services",
    shortText:
      "We know that many people fear being cheated in the immigration process, especially when they are not well-informed. At Greens Technologies, we pride ourselves on honesty and transparency. We provide detailed information about every aspect of your immigration journey, including costs and timelines, so you know exactly what to expect.",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",  
    title: "Pathway to Citizenship",
    shortText:
      "Did you know that Australia offers pathways to citizenship for eligible immigrants? We can guide you through the process, helping you not only secure a visa but also work towards becoming a permanent resident and, eventually, an Australian citizen.",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Comprehensive Services",
    shortText:
      " From student visas to residency and citizenship applications, we cover all aspects of the immigration process. Our goal is to make your move as stress-free as possible.",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-global bg-ff612f",
    title: "Global Reach",
    shortText:
      "We assist clients from around the world, helping them navigate the complexities of immigration to Australia.",
    aosDelay: "600",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="strvis ptb-100 pb-70">
        <div className="container">
        <div className="section-title GlobalCloud">
            <h2 className="green-tx h_font_size fw-semibold">Your Journey to a New Life Starts Here</h2>
            <p>
            At Greens Technologies, we understand that moving to a new country is both an exciting and challenging experience. While we are renowned for our expertise in software training, we also specialize in providing top-notch immigration services. Our goal is to guide you through every step of the process, ensuring a smooth transition to your new home.
            </p>
            <h2 className="green-tx  pt-md-5">Why Choose Us?</h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 
                  col-sm-6 mb-4"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg">
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

export default WhyChooseUs;
