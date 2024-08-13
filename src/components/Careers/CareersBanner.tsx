"use client";

import React, { useState } from "react";
import Link from "next/link";

const CareersBanner: React.FC = () => {
  return (
    <>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/img/Greenshomepage_new_2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center content-max-w pt-5">
                    <h1   data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Join Our Team of Expert Trainers</h1>
                    <p  data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                  We’re looking for passionate educators! Explore opportunities to lead courses on our diverse training platforms and help shape the future of learners worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default CareersBanner;
