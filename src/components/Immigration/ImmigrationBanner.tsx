"use client";

import React, { useState } from "react";
import Link from "next/link";

const ImmigrationBanner: React.FC = () => {
  return (
    <>
          <div
            className="hero-banner overly"
            style={{
              backgroundImage: `url(/img/Greenshomepage_new_3.jpeg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content text-center content-max-w pt-5">
                    <h1   data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Your Pathway to Sucess Abroad</h1>
                    <p  data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                 Let us guide you through every step of your immigration process, turning your dreams of living abroad into reality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default ImmigrationBanner;
