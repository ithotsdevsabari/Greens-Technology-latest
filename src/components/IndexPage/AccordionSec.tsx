"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../public/images/accordion_img.jpg";

const AccordionSec: React.FC = () => {
  return (
    <>
      <div className=" pt-7 pb-5">
        <div className="container">
          <div className="section-title pb-3">
            <h2
              className="green-tx h_font_size fw-semibold "
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Frequently Ask & Question
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion software-faq">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What types of courses does Greens Technologies offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We offer a wide range of online, live instructor-led
                        courses in fields such as Data Analytics, Scrum Master,
                        Microsoft 365, Cloud Computing, Web Development, and
                        more. Each course is designed to equip you with the
                        skills needed for today's job market.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How are the courses delivered?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        All our courses are delivered online in real-time by
                        experienced industry professionals. This allows you to
                        interact with the instructor, ask questions, and
                        participate in discussions just like in a traditional
                        classroom setting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you offer flexible scheduling?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we understand the importance of flexibility, so we
                        offer multiple class timings to accommodate your busy
                        schedule. You can choose the time that works best for
                        you.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What is the process for enrolling in a course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Enrolling in a course is simple. Fill out our online
                        inquiry form, and we will send you a quote along with
                        our bank details. Once you transfer the full fee, we
                        will send you a confirmation email with all the course
                        details.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you provide any certification upon course completion?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, upon successful completion of your course, you will
                        receive a certificate from Greens Technologies, which
                        can help boost your career prospects.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can I get a refund if I need to cancel my enrollment?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, you can request a refund up to 7 days before the
                        course starts. Please refer to our Refund Policy for
                        more detailed information on cancellations and refunds.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Are there any prerequisites for joining a course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Most of our courses are designed for beginners, so no
                        prior experience is required. However, some advanced
                        courses may have prerequisites, which will be indicated
                        before enrollment.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I contact customer support?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can contact us via email at
                        admin@greenstechnologies.com.au or by phone at 08 6386
                        9232. Our support team is available 24/7 to assist you
                        with any inquiries or issues.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6 ">
              <div
                className="faq-img pl-30 pl-xxl-0 text-xxl-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image src={faqImg} alt="Image" width={500} className="rounded-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionSec;
