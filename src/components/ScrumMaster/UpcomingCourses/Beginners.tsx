"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Beginners: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  const batchDetails = [
    {
      date: "29 June 24",
      course: "Scrum Master",
      awst: "AWST",
      est: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "29 July 24",
      course: "Scrum Master",
      awst: "AWST",
      est: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "12 July 24",
      course: "Scrum Master",
      awst: "AWST",
      est: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "13 July 24",
      course: "Scrum Master",
      awst: "AWST",
      est: "EST",
      status: "Confirmed",
      bookingLink: "#"
    },
    {
      date: "19 July 24",
      course: "Scrum Master",
      awst: "AWST",
      est: "EST",
      status: "Confirmed",
      bookingLink: "#"
    }
  ];

  return (
    <section>
      <div>
        <h2 className="text-center text-lg-start mt-0">Scrum Master Batch Details</h2>
        <ul className="responsive-table pl-0">
          <li className="table-header">
            {/* <div className="col col-01">Date</div> */}
            <div className="col col-02">Course</div>
            {/* <div className="col col-03">AWST</div>
            <div className="col col-03">EST</div> */}
            <div className="col col-04">Status</div>
            <div className="col col-05">Booking</div>
          </li>
          {batchDetails.map((batch, index) => (
            <li key={index} className="table-row">
              {/* <div className="col col-01" data-label="Date">{batch.date}</div> */}
              <div className="col col-02" data-label="Course">{batch.course}</div>
              {/* <div className="col col-03" data-label="City">{batch.awst}</div> */}
              {/* <div className="col col-03" data-label="City">{batch.est}</div> */}
              <div className="col col-04" data-label="Status">{batch.status}</div>
              <div className="col col-05" data-label="Booking">
                <Link className="fs-regular text-green-mid" href={batch.bookingLink}>Book Now</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Beginners;
