"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>

      <Swiper
        autoHeight={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="hero-slider"
      >
        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/img/Greenshomepage_new.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-left content-max-w pt-5">
                    <h1   data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Achieve Your Dreams <br /> with Affordable Learning</h1>
                    <p  data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                    Our live, instructor-led courses feature expert tutors,
                    complemented by our open syllabus and transparent pricing,
                    ensuring a personalized learning experience.
                    </p>

                    <div>
                      <Link href="/contact-us/"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300" className="btn btn-primary">
                      Explore Courses  <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/img/Greenshomepage_new_2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-left content-max-w pt-5">
                    <h1   data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Join Our Team of Expert Trainers</h1>
                    <p  data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                  We’re looking for passionate educators! Explore opportunities to lead courses on our diverse training platforms and help shape the future of learners worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/img/Greenshomepage_new_3.jpeg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-left content-max-w pt-5">
                    <h1   data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Your Pathway to Sucess Abroad</h1>
                    <p  data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                 Let us guide you through every step of your immigration process, turning your dreams of living abroad into reality.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default MainBanner;
