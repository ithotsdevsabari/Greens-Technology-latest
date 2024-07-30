"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const latestNewsSliderData = [
  {
    image: "/images/Divagar.png",
    title: "Mr. Diwakar Jaganathan",
    role: "Global Cloud Computing Expert, Green Technologies",
    shortText:
      "Meet Diwakar Jaganathan, our expert cloud computing trainer at Greens Technologies. With 14 years of global experience and currently the Engineering Director of Digital Engineering at Cognizant in Atlanta, Diwakar has led impactful digital and cloud migration initiatives, modernizing over 200 applications to AWS. His work with Comcast and Verizon highlights his expertise in cloud solutions and system integration. At Greens Technologies, Diwakar offers top-tier cloud computing education,  providing practical, real-world skills. Enroll in his courses to benefit from his global expertise and elevate your career, no matter where you are in the world.",
    readMoreLink: "/blog/blog-details/",
  },
  {
    image: "/images/Ms. Sarika Garg Pardasani.png",
    title: "Ms. Sarika Garg Pardasani",
    role: "Web Development Expert, Green Technologies",
    shortText:
      "Sarika Garg Pardasani is a distinguished trainer at Greens Technologies Software Training Centre with over 16 years of experience in web development. Specializing in responsive web applications and email campaigns for Fortune 500 clients, she excels in roles from developer to team leader. Sarika's projects highlight her expertise in React JS, Next JS, Node JS, Docker, and CSS preprocessors like SASS and LESS. At Greens Technologies, she delivers top-tier web development education globally, ensuring students acquire practical skills for the tech industry. Enroll in her courses to advance your career with cutting-edge web development training.",
    readMoreLink: "/blog/blog-details/",
  },
  {
    image: "/images/Mr. Bishal Bashyal.png",
    title: "Mr. Bishal Bashyal",
    role: "Data Science Expert, Green Technologies",
    shortText:
      "Meet Bishal Bashyal, a distinguished Data Science trainer at Greens Technologies. With a Bachelor’s in Computer Engineering from IOE, Pulchowk Campus, and a stellar academic and award-winning background, Bishal excels in Data Science and Machine Learning. As a Full Stack R&D Engineer at G-Force Security Pvt Ltd, he leads innovative projects and has published research in esteemed journals. Bishal’s achievements include the Nepal Physics Olympiad Championship and multiple HultPrize awards. At Greens Technologies, his courses offer hands-on skills and deep knowledge, preparing students for successful tech careers. Join his courses to master Data Science.",
    readMoreLink: "/blog/blog-details/",
  },
];

const TrainersSlider: React.FC = () => {
  return (
    <>
      <div className="blog-area">
        <div className="container">
          <div className="section-title pb-3">
            <h2 className="green-tx h_font_size fw-semibold " data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">Our Training Expertise</h2>
            <p className="fs-4 font_col res_txt">
            Our team comprises over 40 trainers, each with unique
            specializations across various domains. Here s an overview of the expertise we offer:
            </p>
          </div>
          <Swiper
            autoHeight={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="blog-slides"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {latestNewsSliderData &&
              latestNewsSliderData.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  {/* <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={value.readMoreLink}>
                        <Image
                          src={value.image}
                          alt="image"
                          width={510}
                          height={383}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.readMoreLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.date}</span>
                      <h3>
                        <Link href={value.readMoreLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      <Link href={value.readMoreLink} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div> */}
                  <div className="single-blog-item row">
                    <div className="col-lg-3 col-md-12 blog-image trainers_imgs">
                      <Image
                        src={value.image}
                        alt="image"
                        width={200}
                        height={200}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-9 col-md-12 blog-post-content">
                      <h3 className="mb-1 green-tx trainers_imgs">{value.title}</h3>
                      <h6 className="gray_txt pb-3 trainers_imgs">{value.role}</h6>
                      <p className="mb-0 txt_justify">{value.shortText}</p>
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

export default TrainersSlider;
