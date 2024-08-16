"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Beginners: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  const courseData = [
    {
      date: "29 June 24",
      course: "Microsoft 365",
      city1: "AWST",
      city2: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "29 July 24",
      course: "Microsoft 365",
      city1: "AWST",
      city2: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "12 July 24",
      course: "Microsoft 365",
      city1: "AWST",
      city2: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "13 July 24",
      course: "Microsoft 365",
      city1: "AWST",
      city2: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "19 July 24",
      course: "Microsoft 365",
      city1: "AWST",
      city2: "EST",
      status: "Confirmed",
      bookingLink: "#"
    }
  ];

  return (
    <section>
      <div>
        <h2 className="text-center text-lg-start mt-0">Microsoft 365 Batch Details</h2>
        <ul className="responsive-table pl-0">
          <li className="table-header">
            <div className="col col-02">Course</div>
            <div className="col col-04">Status</div>
            <div className="col col-05">Booking</div>
          </li>
          {courseData.map((course, index) => (
            <li key={index} className="table-row">
              {/* <div className="col col-01" data-label="Date">{course.date}</div> */}
              <div className="col col-02" data-label="Course">{course.course}</div>
              {/* <div className="col col-03" data-label="City">{course.city1}</div> */}
              {/* <div className="col col-03" data-label="City">{course.city2}</div> */}
              <div className="col col-04" data-label="Status">{course.status}</div>
              <div className="col col-05" data-label="Booking">
                <Link className="fs-regular text-green-mid" href={course.bookingLink}>Book Now</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Beginners;
