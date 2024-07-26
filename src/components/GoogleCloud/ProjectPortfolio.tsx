"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const latestNewsData = [
  {
    image: "/img/project1.png",
    title: "Deploy a Multi-tier Website on Google Cloud Platform",
    readMoreLink: "#",
  },
  {
    image: "/img/project2.png",
    title: "Accessibility navigation for the build through Google Cloud API",
    readMoreLink: "#",
  },
  {
    image: "/img/project3.png",
    title: "Application of GCP live patient monitoring system",
    readMoreLink: "#",
  },
  {
    image: "/img/project1.png",
    title: "Deploy a Multi-tier Website on Google Cloud Platform",
    readMoreLink: "#",
  },
];

const ProjectPortfolio: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title project_sty">
            <h5 className="mb-3 fw-bolder">
              Google cloud platform certification training program
            </h5>
            <h2
              className=" fs-5-0 mb-2 text-grad fw-semibold "
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Craft a Project Portfolio
            </h2>
            <h2
              className=" fs-5-0 mb-3 text-black fw-semibold "
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              that Lands Jobs
            </h2>
          </div>

          <Swiper
            autoHeight={true}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="blog-slides"
          >
            {latestNewsData &&
              latestNewsData.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="pro_content">
                    <div className="blog-image">
                      <Link href="#">
                        <Image
                          src={value.image}
                          alt="image"
                          width={510}
                          height={383}
                        />
                      </Link>
                    </div>

                    <div className="px-3 py-4">
                      <h3 className="text-center ">
                        <Link href={value.readMoreLink} className="text-black">
                          {value.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectPortfolio;
