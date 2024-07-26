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

import faqApp from "../../../public/images/app/faq-app.jpg";

const FaqNew: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
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
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
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
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">

                    <AccordionItemHeading className="text-grad">
                      <AccordionItemButton>
                        <span className="text-grad">
                            What is the Google Cloud Computing platform?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      What is Google Cloud Platform Architect?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What certification will I get after GCP Training?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Will Greens technologies assist me with placement after completion of course?                      
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Is there an online training module which is available for this course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&apos;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="text-center mt-3"> 
              <Link href="" className="button-def button-3"> 
                  <span>View All</span> 
              </Link> 
          </div> 

        </div>
      </div>
    </>
  );
};

export default FaqNew;
