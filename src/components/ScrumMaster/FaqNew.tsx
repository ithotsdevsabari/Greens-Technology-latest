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
            <h2 className="text-center fs-5">
                <span className="d-inline-block mb-2 me-3">Frequently Asked</span> 
                <span className="d-inline-block">Questions</span>
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="faq-img "
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
                {/* <video autoPlay loop muted width="100%">
                        <source src="../img/scrum/scrum-v1.mp4" type="video/mp4" />
                    </video> */}
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
                          1. What's the buzz about Scrum?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      Scrum isn't just another project management framework—it's like the secret sauce that transforms chaotic projects into well-oiled machines. Think of it as your ticket to smoother workflows, happier teams, and impressive results!
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        2. So, what exactly does a Scrum Master do? Are they like project management superheroes?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      You bet they are! Scrum Masters are the unsung heroes of Agile teams. They swoop in, break down barriers, and keep the project train chugging along. Plus, they're the ultimate team cheerleaders, making sure everyone feels heard, valued, and ready to tackle any challenge.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      3. What cool stuff will I learn in this Scrum Master course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Get ready for a rollercoaster ride of Agile awesomeness! We'll dive deep into Agile and Scrum fundamentals, teach you the Jedi ways of Scrum Masters, and equip you with supercharged collaboration and problem-solving skills.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      4. Can a total newbie like me join this course, or do I need some training first?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Whether you're a fresh-faced newbie or a seasoned pro looking to level up, this course has something for everyone. We'll start from square one and guide you through the magical world of Agile and Scrum at your own pace.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      5. Are there any prerequisites for unleashing my inner Scrum Master?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Nope, zero prerequisites required—just bring your enthusiasm and a thirst for knowledge! If you've dabbled in project management or have a knack for teamwork, you're already ahead of the game.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      6. What is the duration and format of the course, and how can participants enrol?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Our course offerings are online instructor-led sessions and interactive workshops. Participants can choose the option that best suits their schedule and learning preferences. Enrolment is simple and can be completed online through our website.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      7. Upon completion of the course, will participants receive a certification?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Yes, participants who successfully complete the course requirements will receive a Course Completion Certificate.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      8. How will this course turbocharge my career?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      You will be leading teams with confidence, navigating complex projects like a pro, and earning the admiration of colleagues and bosses alike. With a Scrum Master certification under your belt, the sky's the limit for your career!
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="i">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      9. Will I have the opportunity to engage with Agile experts during the course?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Certainly! Our seasoned team of Agile professionals is here to provide guidance, share insights, and address any inquiries you may have. Think of them as your dedicated mentors throughout this learning journey.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>


                  <AccordionItem uuid="j">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      10. Sounds awesome! Where do I sign up for this magical journey?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Ready to embark on the adventure of a lifetime? Head over to our website, grab your cape (figuratively speaking), and hit that enrol button! Your Scrum Master destiny awaits!
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
