"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";
import Image from "next/image";

import faqApp from "../../../public/img/faq-app.webp";

const FaqNew: React.FC = () => {
  return (
    <>
      <div className="faq-area pt-5 pb-7">
        <div className="container">
          <div className="section-title">            
            <h2></h2>
            <h2 className="text-center fs-5">
                <span className="d-inline-block mb-2 me-3">Frequently Asked</span> 
                <span className="d-inline-block text-grad">Question</span>
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="faq-img"
              >
                <Image
                  src={faqApp}
                  alt="Image"
                  width={1000}
                  height={857}
                />
                {/* <Link href="/" className="app-default-btn">
                  Have you any question?
                </Link> */}
              </div>
            </div>

            <div className="col-lg-8">
              <div
                className="faq-accordion"
              >
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">

                    <AccordionItemHeading className="text-grad">
                      <AccordionItemButton>
                        <span className="text-grad">
                          What are the basics required to learn DATA ANALYTICS?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      There are no prerequisites for taking the online Data Analytics course. Basic knowledge of data analysis, statistics, and probability are beneficial to take Data Analytics online courses.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Will I be helped by Greens technologies with placement after completion of course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Absolutely, Greens technologies provide you with the 100% placement assistance. We teach our students by conducting group discussions and mock interviews. Apart from it, we also provide soft skill support to boost the confidence level of the students.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Is there an online training module that is available for this course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Unquestionably, online training programs are available as well as accessible. You as a candidate have the entire liberty to choose the timings that suit you. Thus, it is highly convenient and flexible.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      How effective is the online training program?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      We have hired experts who use an extensive set of online techniques and tools for making online training experience satisfying. Our instructors will set a time that is convenient for the students. In an online setting, the students can engage, view, analyze queries related to presentations, and engage with learning resources. You have to submit all assignments online within a specified time period.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      What is the average salary of a DATA ANALYTICS professional?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      The DATA ANALYTICS professionals earn an average salary between $60000 to $330000 per annum in the Australia.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Is a career in Data Analytics a good choice?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Skilled data analysts are some of the most important professionals in the world. Because the demand is so large, and the supply of people who can truly do this job well is so finite, data analysts get huge salaries and excellent perks, even at beginner-level.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Define the roles and responsibilities of a certified DATA ANALYTICS professionals?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      *Defining data, analyzing results using statistical techniques.<br/><br/>
*Establishing and implementing data analysis, data gathering systems, and other methods that develop analytical efficiency and quality.<br/><br/>
*Getting data from primary or secondary data sources and managing databases.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      How long does it take to study and become a DATA ANALYTICS certified professional?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      It entirely depends upon each individual's efforts, preparation strategy, and time invested. However, it will take nearly 1 month if an aspirant has an elementary knowledge and background of SQL. It will take around 2 to 3 months if an aspirant is a fresher.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                </Accordion>

              </div>
            </div>
          </div>

          <div className="text-center mt-3"> 
              {/* <Link href="" className="button-def button-3"> 
                  <span>View All</span> 
              </Link>  */}
              <Link href="" className="button-def button-3 me-3 mt-4 mb-3 fs-4"><span>View All</span></Link>
          </div> 

        </div>
      </div>
    </>
  );
};

export default FaqNew;
