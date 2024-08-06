"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

import Image from "next/image";
import training from "../../../public/img/banner1.jpg";
import MasterIcon from "../../../public/img/icons/master.png";
import Overlay from "../Atom/Overlay";
import ContactUs from "../Common/Emailjs";
import SvgLogos from "./starSvgLogos";

interface SubCourse {
  id: string;
  subCourseName: string;
  subCoursePrice: string;
  subCourseLink: string;
}

interface MenuItem {
  title: string;
  submenu?: MenuItem[];
}

interface CourseDetails {
  courseId: string;
  courseName: string;
  subCourseName: string;
  menuItemsData: MenuItem[];
}

interface PropsInput {
  courseName: string;
  breadCrumbLink: string;
  courseList: SubCourse[];
  masterCoursePrice: string;
  courseDetailsList: CourseDetails[];
}
const MainBanner: React.FC<PropsInput> = ({
  courseName = "",
  breadCrumbLink = "",
  courseList = [
    {
      id: "",
      subCourseName: "",
      subCoursePrice: "",
      subCourseLink: "",
    }
  ],
  masterCoursePrice = "",
  
}) => {
  const [toggler, setToggler] = useState(false);
  const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);

  const handleOpenOverlay = () => {
    setIsVisibleOverlay(true);
  };
  const handleCloseOverlay = () => {
    setIsVisibleOverlay(false);
  };
  return (
    <>
      <div>
        {isVisibleOverlay && (
          <Overlay onClose={handleCloseOverlay}>
            <ContactUs />
          </Overlay>
        )}
      </div>

      <div className="">
        <div className="banner-gradient">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mt-7 mt-lg-9">
                  <div
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                  >
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link href="" className="ps-2 text-gray fs-4-0">
                            Home
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="" className="ps-2 text-gray fs-4-0">
                            {" "}
                            Courses{" "}
                          </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          <Link
                            href={breadCrumbLink}
                            className="ps-2 text-black fs-4-0"
                          >
                            {" "}
                            {courseName} Training
                          </Link>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="pt-1 pb-3">
              <div className="container bg-white rounded-6">
                <div className="row">
                  <div className="col-lg-7 col-xl-8 bg-white rounded-7 ps-3 ps-xl-4  ps-xxl-5">
                    <div className="main-banner-content">
                      <div className="pb-4">
                        <div className="row">
                          <div className="col-lg-4 col-xl-4 col-xxl-3">
                            <Link
                              href=""
                              className="yellow-box px-2 px-xxl-2 w-100 text-center mb-3"
                            >
                              <span className="me-1 d-inline-block">
                                <Image
                                  src={MasterIcon}
                                  alt="add"
                                  className="ms-auto"
                                  width={20}
                                  height={20}
                                />
                              </span>
                              <span className="ms-1 d-inline-block text-white">
                                Live Tutoring
                              </span>{" "}
                              {/* constant */}
                            </Link>
                          </div>

                          <div className="col-lg-4 col-xl-4 col-xxl-4">
                            <Link
                              href=""
                              className="green-box px-2 px-xxl-3 w-100 text-center mb-3 d-flex justify-content-center align-items-center"
                            >
                            <SvgLogos type="green"/>
                              <span className="d-flex justify-content-center align-items-center">
                                4.9 - 4980 Ratings
                              </span>{" "}
                              {/* constant */}
                            </Link>
                          </div>

                          <div className="col-lg-4 col-xl-4 col-xxl-3">
                            <Link
                              href=""
                              className="green-box px-2 px-xxl-2 w-100 text-center mb-3"
                            >
                              10K + Learners
                            </Link>{" "}
                            {/* constant */}
                          </div>
                        </div>
                      </div>

                      <h2 className="fs-30 mb-1">
                        Your Path to Becoming a Certified {courseName}{" "}
                        Professional
                      </h2>

                      <h1 className=" fs-5-0 mb-3 text-grad fw-semibold fs-49 mt-1">
                        {courseName} Course
                      </h1>

                      <div className="main-banner-content fs-medium">
                        <div className="top_banner_list2">
                        <ul>
                          {
                            courseList?.map((result:any,index:number)=>{
                              return(
                                <li className="d-block mb-2 d-flex justify-content-start" key={result.id}>
                                <Link
                                  href={`#${result.subCourseLink}`}
                                  className="text-banner"
                                >
                                  <SvgLogos type="svgGold"/>
                                  {result.subCourseName}{" "}
                                  <span className="text-green-mid ps-2">
                                    {" "}
                                    ${result.subCoursePrice}
                                  </span>
                                </Link>
                              </li>
                              )
                            })
                          }
                          
                          </ul>
                        </div>
                      </div>

                      <div className="">
                        <p>
                          Master Course Price at:{" "}
                          <span className="text-green-mid">
                            ${masterCoursePrice}
                          </span>
                        </p>
                        <Link
                          href=""
                          className="button-def button-3 mx-2 ms-lg-0"
                          onClick={handleOpenOverlay}
                        >
                          <span>Apply Now</span>
                        </Link>
                        <Link
                          href="#viewschedule"
                          className="button-def button-3-white mx-2"
                        >
                          <span>View Schedule</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-xl-4 pe-lg-0">
                    <div className="text-center banner-right mb-3 mb-lg-0">
                      <Image
                        src={training}
                        alt="add"
                        className="ms-auto banner_img"
                        width={800}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
