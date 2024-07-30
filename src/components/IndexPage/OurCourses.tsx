// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import cou1 from "../../../public/img/java.webp";
// import cou2 from "../../../public/img/python.png";
// import cou3 from "../../../public/img/mern.png";
// import cou4 from "../../../public/img/FED.png";

// const OurCourses = () => {
//   return (
//     <div className="pt-8">
//       <div className="container">
//       <div className="section-title">
//           <h2 className="text-center fs-5">
//           Our Courses
//         </h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//           </div>
//         <div className="course_grid mt-4">

//           <div className="">
//             <Image src={cou1} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">Java Full Stack</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou2} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">Python Full Stack</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou3} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">MERN Stack</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou4} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">Front End</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou2} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">Python Full Stack</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou4} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">Front End</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou1} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">Java Full Stack</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <Image src={cou3} alt="program" className="img-fluid radius_roun" />
//             <div className="cour_content">
//               <div className="">
//                 <h6 className="mb-0">MERN Stack</h6>
//               </div>
//               <div className="">
//                 <Link href="#" className="text-white btn_des">
//                   Batches
//                 </Link>
//                 <Link href="#" className="text-white btn_des1 ms-2">
//                   Enroll Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-5">
//             <Link href="#" className="button-def button-3"><span>View All Courses</span></Link>
//             </div>

//       </div>
//     </div>
//   );
// };
// export default OurCourses;

"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import cou1 from "../../../public/img/java.webp";
import cou2 from "../../../public/img/python.png";
import cou3 from "../../../public/img/mern.png";
import cou4 from "../../../public/img/FED.png";

const ourWorksData = [
  {
    image: cou1,
    title: "MERN Stack",
    category: "Development",
    viewDetails: "/",
  },
  {
    image: cou2,
    title: "Java Full Stack",
    category: "Web Design",
    viewDetails: "/",
  },
  {
    image: cou3,
    title: "Front End",
    category: "eCommerce",
    viewDetails: "/",
  },
  {
    image: cou4,
    title: "Python Full Stack",
    category: "Email Marketing",
    viewDetails: "/",
  },
  {
    image: cou1,
    title: "Front End",
    category: "Marketing & Reporting",
    viewDetails: "/",
  },
  {
    image: cou2,
    title: "MERN Stack",
    category: "App Development",
    viewDetails: "/",
  },
  {
    image: cou3,
    title: "Python Full Stack",
    category: "Email Marketing",
    viewDetails: "/",
  },
  {
    image: cou4,
    title: "Java Full Stack",
    category: "Web Design",
    viewDetails: "/",
  },
  {
    image: cou1,
    title: "Front End",
    category: "App Development",
    viewDetails: "/",
  },
  {
    image: cou2,
    title: "Python Full Stack",
    category: "Email Marketing",
    viewDetails: "/",
  },
  {
    image: cou3,
    title: "Python Full Stack",
    category: "Email Marketing",
    viewDetails: "/",
  },
  {
    image: cou4,
    title: "Python Full Stack",
    category: "Email Marketing",
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
                slidesPerView: 4,
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
                    <div className="custom-card">
                    <Image
                      src={value.image}
                      alt="image"
                      width={510}
                      height={550}
                    />

                    <div className="content text-center">
                      {/* <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span> */}

                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>
<div className="d-flex justify-content-center gap-2">
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
                  {/* <div className="mb-5">
                    <Link href="#" className="text-white btn_des">
                      Batches
                    </Link>{" "}
                    <Link href="#" className="text-white btn_des1 ms-2">
                      Enroll Now
                    </Link>
                  </div> */}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default OurCourses;
