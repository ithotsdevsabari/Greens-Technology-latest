"use client";
import React, { useState } from "react";
import useSmoothScroll from "../Atom/SmoothScroll";
import MenuItems from "./ListItems";

// Define the TypeScript interfaces
interface MenuItem {
  title: string;
}

interface CourseDetailItem {
  courseId: string;
  courseName: string;
  subCourseName: string;
  menuItemsData: MenuItem[];
}

interface InputProps {
  courseDetailsList: CourseDetailItem[];
}

const CourseDetail: React.FC<InputProps> = ({ courseDetailsList }) => {
  console.log(courseDetailsList);
  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70);

  return (
    <section className="mb-8 py-4">
      <div className="container">
        <div className="mb-5">
          <h2 className="text-center fs-5">
            <span className="d-block text-dark mb-1">Course Syllabus</span>
          </h2>
        </div>

        {/* Course details */}
        {courseDetailsList?.map((result, index) => (
          <div
            id={result.courseId}
            className="course-box shadow-box mb-5 py-5"
            key={index}
          >
            <div className="row">
              <h2 className="text-uppercase text-center fs-4 mb-1">
                {result.courseName}
              </h2>
              <h2 className="text-center fs-5">
                <span className="d-block text-grad mb-2">
                  {result.subCourseName}
                </span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="mt-1 fs-medium">
                    <div className="top_banner_list">
                      <MenuItems menuItemsData={result.menuItemsData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseDetail;
