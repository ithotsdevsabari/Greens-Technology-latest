"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Beginners: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  const batchDetails = [
    { date: "Sat 15 Jun 24", course: "Data Analytics Master 1", awst: "AWST", est: "EST", status: "Confirmed", bookingLink: "#" },
    { date: "Sun 16 Jun 24", course: "Data Analytics Master 2", awst: "AWST", est: "EST", status: "Confirmed", bookingLink: "#" },
    { date: "Mon 17 Jun 24", course: "Power BI", awst: "AWST", est: "EST", status: "Confirmed", bookingLink: "#" },
    { date: "Tue 18 Jun 24", course: "Python", awst: "AWST", est: "EST", status: "Confirmed", bookingLink: "#" },
    { date: "Fri 19 Jun 24", course: "Power Automation", awst: "AWST", est: "EST", status: "Confirmed", bookingLink: "#" },
  ];

  return (
    <section>
      <div>
        <h2 className="text-center text-lg-start mt-0">Data Analytics Batch Details</h2>
        <ul className="responsive-table pl-0">
          <li className="table-header">
            {/* <div className="col col-01">Date</div> */}
            <div className="col col-02">Course</div>
            {/* <div className="col col-03">AWST</div> */}
            {/* <div className="col col-03">EST</div> */}
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
