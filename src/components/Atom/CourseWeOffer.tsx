"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import downLoad from "../../../public/img/icons/down.png";

interface DescList {
  id: string;
  listName: string;
}

interface CourseList {
  id: string;
  cwoCourseBgImage: StaticImageData;
  cwoCourseName: string;
  descriptionList: DescList[],
}

interface InputProps {
  cwoList: CourseList[],
  cwoCourseSyllabusLink: string;
}

const CourseWeOffer: React.FC<InputProps> = ({
  cwoList = [],
  cwoCourseSyllabusLink = "",
}) => {
  const [toggler, setToggler] = useState(false);

  const svgLogo = (
    <svg
      height="30"
      width="30"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5l2 2 4-4"
        stroke="#0c9587"
        stroke-width="0.8"
        fill="none"
      />
    </svg>
  );
  return (
    <section className="mb-8  py-6">
      <div className="container">
        <div className="mb-5">
          <h2 className="text-center fs-5">
            <span className="d-block text-dark mb-1">Courses We Offer </span>
          </h2>
        </div>

        <div className="row">
          {cwoList?.map((result, index) => {
            return (
              <div className="col-md-6 col-lg-4 mb-4" key={result.id}>
                <div className="box-shadow rounded-4 bg-white pb-3">
                  <div className=" ">
                    <Image
                      src={result.cwoCourseBgImage}
                      alt="add"
                      className="ms-auto"
                      width={800}
                      height={300}
                    />
                  </div>
                  <div className="box-des2">
                    <div className="mt--100 px-3 ">
                      <h2 className="d-block mt-2 fs-3 oswald text-uppercase">
                        {result.cwoCourseName}
                      </h2>
                      <div
                        className="d-block br-20 p-4 bg-white p-1"
                        style={{ backgroundColor: `#fff;` }}
                      >
                        <div className="fs-medium">
                          <div className="top_banner_list">
                            <ul>
                              {result.descriptionList?.map(
                                (result: any, index: any) => {
                                  return (
                                    <li
                                      className="d-block mb-2"
                                      key={result.id}
                                    >
                                      <div className="d-flex position-relative">
                                        <span className="me-1">
                                          {svgLogo}
                                        </span>
                                        <span className="">
                                         {result.listName}
                                        </span>
                                      </div>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-3">
          <Link href="" className="button-def button-3-white me-3">
            <span>View All</span>
          </Link>
          <a
            href={cwoCourseSyllabusLink}
            download
            className="button-def button-3"
            target="_blank"
          >
            <span>Download Syllabus</span>
            <span className="ms-2">
              <Image
                src={downLoad}
                alt="add"
                className="ms-auto"
                width={20}
                height={20}
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseWeOffer;
