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
                          1. What is Microsoft 365?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      A: Microsoft 365 is a suite of productivity tools including Word, Excel, PowerPoint, and more. Think of it as your digital Swiss Army knife for work and collaboration.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        2. Do I need prior technical knowledge to take this course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: Not at all! Whether you're a tech novice or a seasoned user, our course is designed to accommodate all skill levels.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      3. What will I learn in this course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: You'll master the core applications of Microsoft 365, from creating polished documents in Word, to building dynamic spreadsheets in Excel, and designing engaging presentations in PowerPoint. Plus, you'll get tips and tricks to boost your productivity.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      4. Is there homework?**
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: Yes, but it's designed to be practical and relevant, ensuring you can apply what you learn immediately. And don’t worry, our assignments are more interesting than your average high school homework!<br/><br/>
                      Certainly! Here's the revised FAQ entry:
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      5. Will I receive a certificate upon completion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: Yes, after completing the course, you'll receive a digital certificate that you can proudly display on your resume, LinkedIn profile, or even your office wall.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      6. What if I miss a class?**
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: No problem! All sessions are recorded, so you can catch up at your convenience—whether that’s in the evening, over the weekend.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      7. Can I access Microsoft 365 on my mobile device?**
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: Absolutely! Microsoft 365 is fully accessible on smartphones and tablets, allowing you to work on-the-go.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      8. Do I need my own Microsoft 365 subscription?**
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: We provide a free trial subscription for the duration of the course, so you can access all the tools without any additional cost.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="i">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      9. Why should I choose Greens Technologies?**
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: Our expert instructors bring real-world experience and practical insights to the classroom. At Greens Technologies, we combine professional training with an engaging learning experience.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem uuid="j">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      10. How do I sign up?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      A: Simply click the “Apply Now” button and take the first step toward becoming a Microsoft 365 expert. We’re excited to have you join us!
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>

              </div>
            </div>
          </div>

          <div className="text-center mt-3"> 
              <Link href="" className="button-def button-3 me-3 mt-4 mb-3 fs-4"><span>View All</span></Link>
          </div> 

        </div>
      </div>
    </>
  );
};

export default FaqNew;
