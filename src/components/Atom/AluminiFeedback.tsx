"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quotes from "../../../public/img/quotes.png";
import SvgLogos from "./starSvgLogos";

interface ArrayFromat {
  name: string;
  designation: string;
  feedbackText: string;
  company: string;
  rating: number;
}

interface InpuProps {
  courseName: string;
  aluminiFeedbackData: ArrayFromat[];
}

const AluminiFeedBack: React.FC<InpuProps> = ({
  courseName = "",
  aluminiFeedbackData = [],
}) => {
  return (
    <div className="pb-70 pt-0">
      <div className="container">
        <div className="mb-5">
          <h2 className="text-uppercase text-center fs-20 mb-2 text-green">
            {courseName} Platform Certification Training Program Reviews
          </h2>
          <h2 className="text-center fs-5">
            <span className="d-block">Insights from our </span>
            <span className="d-block text-grad">Empowered Alumni</span>
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
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="app-screenshots-slides"
        >
          {aluminiFeedbackData?.map((value: any, i) => (
            <SwiperSlide key={i}>
              <div className="app-feedback-box">
                <p className="fs-medium m-h-200">
                  <q>{value.feedbackText}</q>
                </p>
                <div className="text-center">
                  <Image
                    src={quotes}
                    alt="add"
                    className="mx-auto"
                    width={300}
                    height={40}
                  />
                </div>
                <div className="title text-center rating">
                  <div className="d-flex justify-content-center align-items-center">
                    <SvgLogos type={"svgGold"} />
                    <SvgLogos type={"svgGold"} />
                    <SvgLogos type={"svgGold"} />
                    <SvgLogos type={"svgGold"} />
                    <SvgLogos type={"svgGold"} />
                  </div>
                  <h3 className="fs-4 mb-0">{value.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AluminiFeedBack;
