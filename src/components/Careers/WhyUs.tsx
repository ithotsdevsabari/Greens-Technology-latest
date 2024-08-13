"use client";

import React from "react";
import Link from "next/link";

interface ServiceData {
  iconName: string;
  title: string;
  shortText: string;
  aosDelay: string;
}

const servicesData: ServiceData[] = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Flexible Opportunities",
    shortText:
      "Teach on a variety of platforms, including online, hybrid, and in-person settings, allowing you to work in a way that suits your lifestyle.",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-global bg-6610f2",
    title: "Global Reach",
    shortText:
      "Help shape the futures of students worldwide, delivering content that is accessible and impactful across different cultures and regions.",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-users bg-ffb700",
    title: "Supportive Environment",
    shortText:
      "Join a team that values collaboration, continuous learning, and professional growth. We provide the resources you need to succeed as an educator.",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-cash bg-fc3549",
    title: "Competitive Compensation",
    shortText:
      " We offer competitive pay and benefits, recognizing the critical role our trainers play in the success of our students.",
    aosDelay: "400",
  },
];

const WhyUs: React.FC = () => {
  return (
    <>
      <div className="strvis pt-100 pb-70">
        <div className="container">
          <div className="section-title GlobalCloud">
            <h2 className="green-tx h_font_size fw-semibold">Join Our Team of Industry-Leading Educators</h2>
            <p>
            At Greens Technologies, we believe in empowering learners through high-quality education, and we are always on the lookout for passionate trainers to join our dynamic team. If you have expertise in any of our training areas and a desire to make a difference, we want to hear from you!
            </p>
            <h2 className="green-tx  pt-md-5">Why Work with Us?</h2>
          </div>

          <div className="row justify-content-center pt-md-5">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="service-card-one"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.title}
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

export default WhyUs;
