"use client";

import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import Beginners from "./Beginners";

const UpcomingCourses: React.FC = () => {
  return (
    
      <section className="case-studies-area  text-start ">
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

                  </Tabs>
                </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default UpcomingCourses;
