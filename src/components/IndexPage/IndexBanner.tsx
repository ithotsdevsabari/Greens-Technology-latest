"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const IndexBanner: React.FC = () => {
  const images = [
    "/img/Greenshomepage_new.jpg",
    "/img/Greenshomepage_new_2.jpg", // Add your second image
    "/img/Greenshomepage_new_3.jpeg", // Add your third image 
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="bg-fcfbfb">
      <div className="hero-banner overly-6" style={{ position: "relative" }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100vh",
                  width: "100%",
                  opacity: 0.8, // Add opacity to the image
                  filter: "brightness(0.7)", // Optionally darken the image a bit
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)", // Add an overlay to further darken
                }}
              />
            </div>
          ))}
        </Slider>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
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
                  <p
                    className="fs-4 res_txt"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Our live, instructor-led courses feature expert tutors,
                    complemented by our open syllabus and transparent pricing,
                    ensuring a personalized learning experience.
                  </p>

                  <Link
                    href="/contact-us/"
                    className="software-btn"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    Explore Courses{" "}
                    <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexBanner;
