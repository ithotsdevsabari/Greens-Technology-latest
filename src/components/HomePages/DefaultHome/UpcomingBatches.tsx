"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const partnersData = [
  {
    id: "1",
    image: "/img/icons/date.png",
    link: "#",
  },
  {
    id: "2",
    image: "/img/icons/date.png",
    link: "#",
  },
  {
    id: "3",
    image: "/img/icons/date.png",
    link: "#",
  },
  {
    id: "4",
    image: "/img/icons/date.png",
    link: "#",
  },
//   {
//     id: "5",
//     image: "/images/digital-marketing/partner5.png",
//     link: "#",
//   },
//   {
//     id: "6",
//     image: "/images/digital-marketing/partner6.png",
//     link: "#",
//   },
//   {
//     id: "7",
//     image: "/images/digital-marketing/partner4.png",
//     link: "#",
//   },
//   {
//     id: "8",
//     image: "/images/digital-marketing/partner5.png",
//     link: "#",
//   },
];

const UpcomingBatches: React.FC = () => {
  return (
    <>
      <div className="partner-area my-4">
        <div className="container ">
            <div className="m-w-900">
          {/* <div className="section-title">
            <span className="sub-title">CLIENTS</span>
            <h2>Our Clients</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}

          {partnersData && (

            <Swiper
              autoHeight={true}
              navigation={true}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="partner-slides"
            >
                <div className="row">

                {partnersData &&
                partnersData.map((value, i) => (

                  <SwiperSlide key={i} className="d-flex col-lg-4">
                        <div className="green-light-box shadow-box d-flex text-center">                      
                            <Image
                            src={value.image}
                            alt="image"
                            width={54}
                            height={30}
                            className="img_icon mt-3"
                            />
                            <div className="ms-4 text-center ">
                                <h3 className="text-center green-dark fs-4">may 10</h3>
                                <h3 className="text-center green-dark fs-4">2024</h3>
                            </div>
                        </div>
                  </SwiperSlide>
                ))}
                </div>
            </Swiper>
          )}
          

          </div>
          </div>
        </div>
      
    </>
  );
};

export default UpcomingBatches;
