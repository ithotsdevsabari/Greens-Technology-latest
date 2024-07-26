"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewBatches = () => {
  return (
    <div>
      <div className="container py-8">
      <div className="section-title mb-0">
          <h2 className="text-center fs-5">
          New Batches
        </h2>   
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="table_responsive">
        <table className="table table-bordered para_size mt-4 table-striped">
          <thead className="green_head">
            <tr className="text-uppercase">
              <th scope="col">Course</th>
              <th scope="col">Date</th>
              <th scope="col">Timings</th>
              <th scope="col">Duration</th>
              {/* <th scope="col">Trainer</th> */}
              <th scope="col">Register for Demo</th>
            </tr> 
          </thead>
          <tbody>
            <tr>
              <td>Full Stack Development</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Rajesh</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>UI Development</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Karthick</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>SAP</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Rajesh</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>Back End Development</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Sabarinathan</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>Web Development</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Sathish</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>UI UX Designer</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Rajesh</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>IMS</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Sandhosh</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
            <tr>
              <td>Digital Marketing</td>
              <td>13-05-2024</td>
              <td>09.00 AM - 10.00 AM</td>
              <td>5 Months</td>
              {/* <td>Mr.Praveen</td> */}
              <td><Link href="#" className="text-danger">Register Now</Link></td>
            </tr>
          
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default NewBatches;
