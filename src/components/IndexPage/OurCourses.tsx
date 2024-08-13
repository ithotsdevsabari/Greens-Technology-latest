
"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import awscloud from "../../../public/coursesImages/awscloud.jpg";
import awsdataengineer from "../../../public/coursesImages/awsdataengineer.png";
import azurecloud from "../../../public/coursesImages/azurecloud.webp";
import azuredataengineering from "../../../public/coursesImages/azuredataengineering.jpeg"
import cloudcomputing from "../../../public/coursesImages/cloudcomputing.jpeg"
import dataanalytics  from "../../../public/coursesImages/dataanalytics.jpeg";
import dataengineeringgcp  from "../../../public/coursesImages/dataengineeringgcp.jpeg";
import  datascience from "../../../public/coursesImages/datascience.jpeg";
import devops from "../../../public/coursesImages/devops.jpeg";
import  frontend from "../../../public/coursesImages/frontend.jpeg";
import  gcpcloud from "../../../public/coursesImages/gcpcloud.png";
import javafullstack from "../../../public/coursesImages/javafullstack.webp";
import microsoft365  from "../../../public/coursesImages/microsoft365.jpg";
import  nodejs from "../../../public/coursesImages/nodejs.png";
import oracle  from "../../../public/coursesImages/oracle.png";
import powerapps  from "../../../public/coursesImages/powerapps.jpeg";
import powerautomate  from "../../../public/coursesImages/powerautomate.jpeg";
import  powerbi from "../../../public/coursesImages/powerbi.jpeg";
import python  from "../../../public/coursesImages/python.jpeg";
import pythonfullstack  from "../../../public/coursesImages/pythonfullstack.jpeg";
import  reactjs from "../../../public/coursesImages/react.jpeg";
import scrummaster  from "../../../public/coursesImages/scrummaster.jpg";
import snowflask  from "../../../public/coursesImages/snowflask.webp";
import sql  from "../../../public/coursesImages/sql.jpeg";
import tableau  from "../../../public/coursesImages/tableau.jpeg";
import webdevelopement  from "../../../public/coursesImages/webdevelopement.jpeg";



const ourWorksData = [
  {
    image: awscloud,
    title: "AWS Cloud",
    category: "Cloud Computing",
    viewDetails: "/",
  },
  {
    image: awsdataengineer,
    title: "AWS Data Engineer",
    category: "Data Engineering",
    viewDetails: "/",
  },
  {
    image: azurecloud,
    title: "Azure Cloud",
    category: "Cloud Computing",
    viewDetails: "/",
  },
  {
    image: azuredataengineering,
    title: "Azure Data Engineering",
    category: "Data Engineering",
    viewDetails: "/",
  },
  {
    image: cloudcomputing,
    title: "Cloud Computing",
    category: "Cloud Computing",
    viewDetails: "/",
  },
  {
    image: dataanalytics,
    title: "Data Analytics",
    category: "Data Science",
    viewDetails: "/",
  },
  {
    image: dataengineeringgcp,
    title: "GCP Data Engineering",
    category: "Data Engineering",
    viewDetails: "/",
  },
  {
    image: datascience,
    title: "Data Science",
    category: "Data Science",
    viewDetails: "/",
  },
  {
    image: devops,
    title: "DevOps",
    category: "Development",
    viewDetails: "/",
  },
  {
    image: frontend,
    title: "Front-end Development",
    category: "Web Development",
    viewDetails: "/",
  },
  {
    image: gcpcloud,
    title: "GCP Cloud",
    category: "Cloud Computing",
    viewDetails: "/",
  },
  {
    image: javafullstack,
    title: "Java Full Stack",
    category: "Web Development",
    viewDetails: "/",
  },
  {
    image: microsoft365,
    title: "Microsoft 365",
    category: "Productivity",
    viewDetails: "/",
  },
  {
    image: nodejs,
    title: "Node.js Development",
    category: "Web Development",
    viewDetails: "/",
  },
  {
    image: oracle,
    title: "Oracle Database",
    category: "Database Management",
    viewDetails: "/",
  },
  {
    image: powerapps,
    title: "PowerApps Development",
    category: "Productivity",
    viewDetails: "/",
  },
  {
    image: powerautomate,
    title: "Power Automate",
    category: "Productivity",
    viewDetails: "/",
  },
  {
    image: powerbi,
    title: "Power BI",
    category: "Data Visualization",
    viewDetails: "/",
  },
  {
    image: python,
    title: "Python Programming",
    category: "Development",
    viewDetails: "/",
  },
  {
    image: pythonfullstack,
    title: "Python Full Stack",
    category: "Web Development",
    viewDetails: "/",
  },
  {
    image: reactjs,
    title: "React.js Development",
    category: "Web Development",
    viewDetails: "/",
  },
  {
    image: scrummaster,
    title: "Scrum Master",
    category: "Project Management",
    viewDetails: "/",
  },
  {
    image: snowflask,
    title: "Snowflake Data Warehousing",
    category: "Data Engineering",
    viewDetails: "/",
  },
  {
    image: sql,
    title: "SQL Database",
    category: "Database Management",
    viewDetails: "/",
  },
  {
    image: tableau,
    title: "Tableau Data Visualization",
    category: "Data Visualization",
    viewDetails: "/",
  },
  {
    image: webdevelopement,
    title: "Web Development",
    category: "Web Development",
    viewDetails: "/",
  },
];


const OurCourses: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title pb-2">
            <h2 className="text-center h_font_size fw-semibold">Discover <span className="green-tx">Our Courses</span></h2>
            <p className="fs-4 font_col res_txt">
            Explore 50+ Courses with new course additions every month, available in
            </p>
            <div className="d-flex justify-content-center gap-3 pt-3">
            <strong className="fs-4 gold-grad">English</strong>
            <strong className="fs-4 gold-grad">Tamil</strong>
            <strong className="fs-4 gold-grad">Hindi</strong>
            </div>
          </div>


          <Swiper
  autoHeight={false}
  cssMode={true}
  spaceBetween={20}
  navigation={true}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1800: {
      slidesPerView: 4,
    },
  }}
  modules={[Autoplay, Navigation, Pagination]}
  className="work-slides"
>
  {ourWorksData &&
    ourWorksData.map((value, i) => (
      <SwiperSlide key={i}>
        <div className="work-card">
          <div className="custom-card" style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
              }}
            >
              <Image
                src={value.image}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="content text-center">
              <h3>
                <Link href={value.viewDetails}>{value.title}</Link>
              </h3>
              <div
                className="d-flex justify-content-center gap-2"
                style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
              >
                <Link href={value.viewDetails} className="custom-btn">
                  Batches
                </Link>
                <Link href={value.viewDetails} className="custom-btn">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
</Swiper>


        </div>
      </section>
    </>
  );
};

export default OurCourses;
