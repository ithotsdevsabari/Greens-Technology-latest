"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/img/logo.png";

const GreensFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (

      <footer className="footer-area pt-6">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
              >
                <div className="logo">
                  <Link href="/">
                    <Image 
                      src={logo}
                      alt="Logo" 
                      width={200}
                      height={40}
                    />
                  </Link>
                </div>

                <p>
                Greens Technologies has proudly expanded to Australia, now offering premier online software training in Perth. With over 17 branches across India, the US, and Australia, we bring 15 years of excellence to more than 50,000 learners.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/share/QUDyJ91U4Egy1vKZ/?mibextid=qi2Omg " target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com/@greenstechnologiesaustralia?si=nHMglnyoDlbZmEFw " target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/greens-technologies-australia/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/greenstechnologiesaustralia?igsh=ZXo4aTNjdTVvaXN1" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
              >
                <h3>Our Courses</h3>

                <ul className="list">
                  <li>
                    <Link href="/dataanalytics">
                    Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/scrummaster">
                    Scrum Master
                    </Link>
                  </li>
                  <li>
                    <Link href="/microsoft">
                    Microsoft 365
                    </Link>
                  </li>
                  <li>
                    <Link href="/cloudcomputing">
                    Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-developement">
                    Web Developement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
        
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
              
                  <li>
                    <Link href="/careers">
                      Careers
                    </Link>
                  </li>

                  <li>
                    <Link href="/immigration">
                      Immigration
                    </Link>
                  </li>
              
                  <li>
                    <Link href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
              >
                <h3>Contact Us</h3>

                <ul className="get-in-touch">
                  <li>
                    <div className="">
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="https://maps.app.goo.gl/GFUQ1iUwSELWvrgf7" target="_blank">Unit 4/10 Tyre Ave, Riverton Western Australia 6148</a>
                    </div>
                  </li>
                  <li>
                  <div>
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:08 6386 9232">08 6386 9232</a> <br />
                    <a href="tel:0423 737 907">0423 737 907</a>
                    </div>
                  </li>
                  <li>
                  <div>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:contact@greenstechnologys.com">contact@greenstechnologys.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Greens Technology. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
 
  );
};

export default GreensFooter;
