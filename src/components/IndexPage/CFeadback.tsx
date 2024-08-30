"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quotes from "../../../public/img/quotes.png";

const clientFeedbackData = [
  {
    image: "/images/Ganadharan.jpg",
    name: "Rg Ganadharan",
    // designation: "Spotify Developer",
    feedbackText:
      "Green's Technology offered an outstanding Data Science course. The instructors were highly knowledgeable, simplifying complex concepts effectively. Engaging in hands-on projects greatly enhanced my confidence. I received exceptional support from the mentor, Godwin. I wholeheartedly recommend it to anyone eager to explore Data Science!.....",
    // category: "Worked at Cognizant",

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
    image: "/images/Kym.jpg",
    name: "Kym S",
    feedbackText:
      "Enrolling in Greens technology web development course was a decision I don't regret. The curriculum was comprehensive, covering essential topics like HTML, CSS, JavaScript, and GitHub. Building my own website was a satisfying conclusion to the course. This experience has equipped me with the skills and confidence for a future in web development.",
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
    image: "/images/Mohammed.jpg",
    name: "Mohammed Anas",
    feedbackText:
      "I usually don't write reviews. I chose Greens Technologies through a friend. I Attended DevOps and AWS courses at Greens Technology.The trainer was exceptionally helpful in clarifying concepts, making it the best training center. The emphasis on practical, live projects rather than just theory was commendable. Highly recommended.",
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
    image: "/images/Syeda-Naqvi.jpg",
    name: "Syeda Naqvi",
    feedbackText:
      "The support from the coaches was outstanding. They were always available to help with any doubts or questions, making sure I was never stuck.",
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

        <div className="section-title">
          <h2 className="text-center h_font_size fw-semibold "  data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200">
          Testimonials from <br /> <span className="green-tx">Our Empowered Alumni</span>
        </h2>   
            {/* <p className="fs-4 font_col res_txt">
            Feel free to adjust it based on specific testimonials or experiences you want to highlight!
            </p> */}
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
                  <div className="app-feedback-box mt-2">
                    
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
