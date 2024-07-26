"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quotes from "../../../public/img/quotes.png";

const clientFeedbackData = [
  {
    image: "/images/app/user1.jpg",
    name: "REVATHI",
    designation: "Spotify Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Worked at Cognizant",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/app/user2.jpg",
    name: "MOHAN",
    designation: "PHP Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Works at ABC",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/app/user3.jpg",
    name: "STEFFY",
    designation: "Moodle Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "GPC Architect at Google",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/app/user4.jpg",
    name: "David Warner",
    designation: "Python Developer",
    feedbackText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    category: "Theme Customization",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
];

const CFeedback: React.FC = () => {
  return (
    <>
      <div className="pb-100 pt-100">
        
        <div className="container">

          <div className="mb-5">            
            <h2 className="text-uppercase text-center fs-4 mb-4">Google Cloud Platform Certification Training Program Reviews</h2>
            <h2 className="text-center fs-5">
                <span className="d-block mb-2">Insights from our </span> 
                <span className="d-block text-grad">Empowered Alumni</span></h2>
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
            {clientFeedbackData &&
              clientFeedbackData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="app-feedback-box">
                    
                    <div className="client-info">
                      <div className="align-items-center text-center">
                        <Image
                          src={value.image}
                          alt="user"
                          width={300}
                          height={300}
                          className="mb-0"
                        />
                        <div className="title text-center rating">
                            {/* <h3>{value.name}</h3> */}
                            <div>
                                {value.rating.map((value, i) => (
                                <i className={value.iconName} key={i}></i>
                                ))}
                            </div>
                            {/* <span>{value.designation}</span> */}
                        </div>
                      </div>
                    </div>

                    <p className="fs-medium">
                      <q>{value.feedbackText}</q>
                    </p>

                    <div className="">
                        <Image src={quotes} alt="add" className="ms-auto" width={800} height={400} />            
                    </div>

                    <div className="title text-center rating">

                        <h3 className="fs-4 mb-0">{value.name}</h3>
                    </div>

                    <div className="rating align-items-center justify-content-between text-center">
                      <h5 className="fs-4 text-gray-light">{value.category}</h5>
                      {/* <div>
                        {value.rating.map((value, i) => (
                          <i className={value.iconName} key={i}></i>
                        ))}
                      </div> */}
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

export default CFeedback;
