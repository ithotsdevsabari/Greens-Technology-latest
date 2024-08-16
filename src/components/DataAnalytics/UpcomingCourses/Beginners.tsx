"use client";
import React, { useState } from "react";
import Link from 'next/link';

const CourseTable: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  const courseData = [
    {
      date: "Sat 15 Jun 24",
      course: "Data Analytics Master 1",
      city: "AWST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "Sun 16 Jun 24",
      course: "Data Analytics Master 2",
      city: "AWST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "Mon 17 Jun 24",
      course: "Power BI",
      city: "AWST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "Tue 18 Jun 24",
      course: "Python",
      city: "AWST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "Fri 19 Jun 24",
      course: "Power Automation",
      city: "AWST",
      status: "Confirmed",
      bookingLink: "#"
    }
  ];

  return (
    <section>
      <div>
        <h2 className="text-center text-lg-start mt-0">Data Analytics Batch Details</h2>
        <ul className="responsive-table pl-0">
          <li className="table-header">
            <div className="col col-02">Course</div>
            <div className="col col-04">Status</div>
            <div className="col col-05">Booking</div>
          </li>
          {courseData.map((course, index) => (
            <li key={index} className="table-row">

              <div className="col col-02" data-label="Course">{course.course}</div>
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

export default CourseTable;
