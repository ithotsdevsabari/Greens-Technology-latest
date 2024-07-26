"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quotes from "../../../public/img/quotes.png";

const clientFeedbackData = [
  {
    image: "/images/app/user1.jpg",
    name: "Shashikala Maurya",
    designation: "Spotify Developer",
    feedbackText:
      "Green's Technology offered an outstanding scrum master course. The instructors were highly knowledgeable, simplifying complex concepts effectively. Engaging in hands-on projects greatly enhanced my confidence. I received exceptional support from the mentor, Godwin. I wholeheartedly recommend it to anyone eager to explore scrum master!.....",
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
    name: "Rggdharan Dharan",
    designation: "PHP Developer",
    feedbackText:
      "Enrolling in Greens technology web development course was a decision I don't regret. The curriculum was comprehensive, covering essential topics like HTML, CSS, JavaScript, and GitHub. Building my own website was a satisfying conclusion to the course. This experience has equipped me with the skills and confidence for a future in web development.",
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
    name: "nandhini 26",
    designation: "Moodle Developer",
    feedbackText:
      "I usually don't write reviews. I chose Greens Technologies through a friend. I Attended DevOps and AWS courses at Greens Technology.The trainer was exceptionally helpful in clarifying concepts, making it the best training center. The emphasis on practical, live projects rather than just theory was commendable. Highly recommended.",
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
    name: "Kym S",
    designation: "Python Developer",
    feedbackText:
      "I took courses in Networking and Azure SQL Database. My instructor, Dhivakar, was really knowledgeable and the best. He kept the class interested and made sure we understood everything in each module. I want to thank Dhivakar for his great support during the learning process.",
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
      <div className="pb-70 pt-0">
        
        <div className="container">

          <div className="mb-5">            
            <h2 className="text-center fs-5">
                <span className="d-block">Insights from our </span> 
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
                        {/* <Image
                          src={value.image}
                          alt="user"
                          width={300}
                          height={300}
                          className="mb-0"
                        /> */}
                        <div className="title text-center rating">
                            {/* <h3>{value.name}</h3> */}
                            {/* <div>
                                {value.rating.map((value, i) => (
                                <i className={value.iconName} key={i}></i>
                                ))}
                            </div> */}
                            {/* <span>{value.designation}</span> */}
                        </div>
                      </div>
                    </div>

                    <p className="fs-medium m-h-200">
                      <q>{value.feedbackText}</q>
                    </p>

                    <div className="text-center">
                        <Image src={quotes} alt="add" className="mx-auto" width={300} height={40} />            
                    </div>

                    <div className="title text-center rating">
                            <div>
                                {value.rating.map((value, i) => (
                                <i className={value.iconName} key={i}></i>
                                ))}
                            </div>
                        <h3 className="fs-4 mb-0">{value.name}</h3>
                    </div>

                    <div className="rating align-items-center justify-content-between text-center">
                      {/* <h5 className="fs-4 text-gray-light">{value.category}</h5> */}
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
