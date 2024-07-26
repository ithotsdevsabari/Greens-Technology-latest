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
                <span className="d-inline-block ">Questions</span>
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
                        Why is Cloud Computing important?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      Cloud Computing allows you to store, manage, and process data over the internet, providing flexibility, efficiency, and scalability for businesses and individuals.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      What will I learn in these Cloud Computing courses?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      You'll learn to design, implement, and manage cloud solutions on AWS, Azure, and Google Cloud Platform (GCP). We cover everything from data engineering to cloud architecture.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Can beginners join these courses?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Yes! Our courses are suitable for both beginners and those with some IT background. We start with the basics and build up to more advanced topics.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Do I need any prior experience before taking these courses?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      No prior experience is required. Just bring your eagerness to learn. Basic IT knowledge is helpful but not necessary.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      What kind of support will I receive during the course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      You'll have access to live instructors, comprehensive learning materials, and a community forum for peer support. Our team is here to help you every step of the way.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      How can I enroll, and what is the course format?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Our courses are offered through online instructor-led sessions and interactive workshops. Enrollment is easy and can be done through our website.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Will I get a certificate after completing the course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Yes, you'll receive a Course Completion Certificate after successfully finishing the course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      How will this course help my career?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      You'll gain valuable cloud computing skills, making you a strong candidate for various IT roles and opening up new career opportunities.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      Can I interact with instructors during the course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Yes, you'll have the chance to engage with experienced cloud professionals who will guide you and answer your questions throughout the course.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      How do I sign up?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Visit our website, choose your course, and click the enroll button to start your cloud computing journey!
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
