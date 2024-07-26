"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UXProcess from "./UXProcess";
import UserExperience from "./UserExperience";
import UserInterface from "./UserInterface";
import Brand from "./Brand";
import Product from "./Product";
import Link from 'next/link';
import Image from "next/image";

import downLoad from "../../../../public/img/icons/down.png";

const CaseStudies: React.FC = () => {
  return (
    <>
      <section className="case-studies-area pt-5 pb-0 text-start tab_bg mb-5">
        <div className="container">
          {/* <div className="section-title">
            <h2>Our Case Studies</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
        <div className=" row align-items-center">
          <div className="col-lg-8">

          

          <div className="case-studies-tabs text-start">
            <Tabs >
              <TabList >
                <Tab>Reviews</Tab>  {/* ux process */}
                <Tab>Curriculum</Tab> {/* <Tab>User Experience</Tab> */}
                <Tab>Course Details</Tab> {/* <Tab>User Interface</Tab> */}
                <Tab>Instructors</Tab> {/* <Tab>Brand</Tab> */}
                <Tab>Course Fee</Tab> {/* <Tab>Product</Tab> */}
                <Tab>Projects</Tab>
                <Tab>Features</Tab>
              </TabList>

              {/* <TabPanel>
                <UXProcess />
              </TabPanel>

              <TabPanel>
                <UserExperience />
              </TabPanel>

              <TabPanel>
                <UserInterface />
              </TabPanel>

              <TabPanel>
                <Brand />
              </TabPanel>

              <TabPanel>
                <Product />
              </TabPanel> */}

            </Tabs>
          </div>


          </div>
          <div className="col-lg-4">
              <div className="text-center mt-0">
                  <Link href="" className="button-def button-3-white me-3"><span>Apply All</span></Link>
                  <a href="/img/Data Analytics Syllabus.pdf" download className="button-def button-3" target="_blank">
                      <span>Download Syllabus</span> 
                      <span className="ms-2">
                          <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                      </span>
                  </a>
            </div>
          </div>

        </div>

          
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
