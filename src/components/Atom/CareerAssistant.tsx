"use client";
import React, { useState } from "react";
import Image from "next/image";
import phoneIcon from "../../../public/img/phone.png";

const CareerAssistant: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className=" pt-6 pb-3">
      <div className="container">
        <div className="m-w-1400">
          <div className="mb-4">
            <h2 className="text-center fs--2">
              <span className="d-block text-grad mb-2">
                For Career Assistance{" "}
              </span>
              <span className="d-block ">
                Talk to our Experts. We are available 24/7.
              </span>
            </h2>

            <div className="text-center mt-5 mb-10 ">
              <div className="fs-1 fw-semibold text-grad phone_no">
                <span className="me-3">
                  <Image
                    src={phoneIcon}
                    alt="add"
                    className="ms-auto"
                    width={40}
                    height={20}
                  />
                </span>
                <span>0423 737 907</span>
              </div>
            </div>

            <div className="course-box shadow-box mb-3 mt-5 address">
              <h4 className="text-center fs-4">
                <span className="d-block text-grad mb-2">
                  {" "}
                  Contact Details:
                </span>
              </h4>
              <p>
                <span className="d-block text-center">
                  Unit 94/10 Sleeper Lane,
                  <br />
                  Suite 103,
                  <br />
                  Cockburn Central WA 6164,
                  <br />
                  Australia.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssistant;
