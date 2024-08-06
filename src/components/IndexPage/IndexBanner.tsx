"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import LearnCourses from "./LearnCourses";

const IndexBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (

    <div className="bg-fcfbfb">
      <div 
        className="hero-banner overly-6"
        style={{ 
          backgroundImage: `url(/img/Greenshomepage_new.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content content-max-w pt-5">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                   Achieve Your Dreams <br /> with Affordable Learning
                </h1>
                <p className="fs-4 res_txt"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >Our live, instructor-led courses feature expert tutors, complemented by our open syllabus
                and transparent pricing, ensuring a personalized learning experience.
                </p>

                <Link
                  href="/contact-us/"
                  className="software-btn"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Explore Courses <i className="fa-solid fa-angles-right"></i>
                </Link>
              </div>  
            </div>
          </div>
        </div>
        </div>
  </div> 

  )
}

export default IndexBanner;
