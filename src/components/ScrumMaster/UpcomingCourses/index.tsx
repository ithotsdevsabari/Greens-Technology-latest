"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Link from 'next/link';
import Image from "next/image";

import downLoad from "../../../../public/img/icons/down.png";
import Beginners from "./Beginners";
import Intermediate from "./Intermediate";
import Advanced from "./Advanced";
import useSmoothScroll from "@/components/Atom/SmoothScroll";

const UpcomingCourses: React.FC = () => {
  useSmoothScroll(70);
  return (
    <>
      <section className="case-studies-area  text-start " >
        <div className="container">
          <div className="">
            <h2 className="fs-2 mb-4  text-center m-auto">
              Tailored schedules: Day, evening, and weekend classes
            </h2>
          </div>
          <div className=" row align-items-center">
            <div className="col-lg-12">
                <div className="case-studies-tabs text-start">
                  <Tabs >
                    {/* <TabList >
                      <Tab>Beginners</Tab>  
                      <Tab>Intermediate</Tab> 
                      <Tab>Advanced</Tab>        
                    </TabList> */}

                    <TabPanel>
                      <Beginners />
                    </TabPanel>

                    {/* <TabPanel>
                      <Intermediate />
                    </TabPanel>

                    <TabPanel>
                      <Advanced />
                    </TabPanel> */}

                  </Tabs>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingCourses;
