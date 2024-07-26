"use client";
import Link from "next/link";
import React from "react";

interface List {
  id: string;
  courseDate: string;
  courseName: string;
}

interface InputProps {
  courseSchedulelist: List[];
  courseName: string;
}

const UpcomingCourses: React.FC<InputProps> = ({
  courseSchedulelist = [],
  courseName = "",
}) => {
  return (
    <section className="case-studies-area  text-start ">
      <div className="container">
        <div className="">
          <h2 className="fs-2 mb-4  text-center m-auto">
            Tailored schedules: Day, evening, and weekend classes
          </h2>
        </div>
        <div className=" row align-items-center">
          <div className="col-lg-12">
            <div className="case-studies-tabs text-start">
              <div className="">
                <h2 className="text-center text-lg-start mt-0">
                  {" "}
                  {courseName} Batch Details
                </h2>
                <ul className="responsive-table pl-0">
                  <li className="table-header">
                    <div className="col col-01">Date</div>
                    <div className="col col-02">Course</div>
                    <div className="col col-03">AWST</div>
                    <div className="col col-03">EST</div>
                    <div className="col col-04">Status</div>
                    <div className="col col-05">Booking</div>
                  </li>
                  {courseSchedulelist?.map((result, index) => {
                    return (
                      <li className="table-row" key={result.id}>
                        <div className="col col-01" data-label="Date">
                          {result.courseDate}
                        </div>
                        <div className="col col-02" data-label="Course">
                          {result.courseName}
                        </div>
                        <div className="col col-03" data-label="City">
                          AWST
                        </div>
                        <div className="col col-03" data-label="City">
                          EST
                        </div>
                        <div className="col col-04" data-label="Status">
                          Confirmed
                        </div>
                        <div className="col col-05" data-label="Booking">
                          <Link className="fs-regular text-green-mid" href="#">
                            Book Now
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingCourses;
