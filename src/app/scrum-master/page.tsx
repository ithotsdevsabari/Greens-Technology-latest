import MainBannerCta from "@/components/Atom/MainBannerCta";
import MainBanner from "@/components/Atom/MainBanner";
import FooterNew from "@/components/Layouts/FooterNew";
import Navbar from "@/components/Layouts/Navbar";
import React from "react";
import Chart from "@/components/Atom/JobOppertunityChart";
import BookFreeDemo from "@/components/Atom/BookFreeDmo";
import CourseWeOffer from "@/components/Atom/CourseWeOffer";
import CourseDetail from "@/components/Atom/CourseSyllabus";
import UpcomingCourses from "@/components/Atom/CourseSchedules";
import FaqList from "@/components/Atom/FAQSection";
import AluminiFeedBack from "@/components/Atom/AluminiFeedback";
import Cta from "@/components/Atom/Cta";
import CareerAssistant from "@/components/Atom/CareerAssistant";
import cta_img from "/public/img/dataanalytics/dataanalytics_chart_green.webp";
import cwoBgImg1 from "../../../public/img/learn1.png";
import cwoBgImg2 from "../../../public/img/learn2.png";
import cwoBgImg3 from "../../../public/img/learn3.png";
import cwoBgImg4 from "../../../public/img/learn4.png";
import cwoBgImg5 from "../../../public/img/learn5.png";
import cwoBgImg6 from "../../../public/img/learn6.png";
import CourseSyllabus from "@/components/Atom/CourseSyllabus";
import { title } from "process";
import GreensFooter from "@/components/Layouts/GreensFooter";

const data = {
  mainBannercourseName: "Web Developement",
  mainBannerBreadCrumbLink: "",
  mainBannercourseList: [
    {
      id: "1",
      subCourseName: "Front End Fullstack",
      subCoursePrice: "395",
      subCourseLink: "PowerAutomateSyllabus",
    },
    {
      id: "2",
      subCourseName: "React JS",
      subCoursePrice: "395",
      subCourseLink: "PowerAutomateSyllabus",
    },
    {
      id: "3",
      subCourseName: "Node JS",
      subCoursePrice: "495",
      subCourseLink: "#SQLCourseSyllabus",
    },
    {
      id: "4",
      subCourseName: "Java Fullstack",
      subCoursePrice: "495",
      subCourseLink: "#TableauCourseSyllabus",
    },
    {
      id: "5",
      subCourseName: "Python Fullstack",
      subCoursePrice: "495",
      subCourseLink: "#PowerBICourseSyllabus",
    },
    {
      id: "6",
      subCourseName: "SQL FUllstack",
      subCoursePrice: "550",
      subCourseLink: "#PythonCourseSyllabus",
    },
  ],
  mainBannermasterCoursePrice: "1995",
  mainBannerCtaHandsOnTraining: "90",
  mainBannerCtaHandsonTrainingProject: "2",
  mainBannerCtaPracticalAssignment: "50",
  chartgraphCourseName: "Data Analytics",
  chartJobCount: "9000",
  chartImageUrl: cta_img,
  chartImageAlt: "Job Oppertunity Grap",
  chartGraphCourseSkill: "data analysis",
  upComingCourse: [
    {
      id: "1",
      courseDate: "Sat 15 Jun 24",
      courseName: "Data Analytics Master 1",
    },
    {
      id: "2",
      courseDate: "Sun 16 Jun 24",
      courseName: "Data Analytics Master 2",
    },
    {
      id: "3",
      courseDate: "Mon 17 Jun 24",
      courseName: "Power BI",
    },
    {
      id: "4",
      courseDate: "Tue 18 Jun 24",
      courseName: "Python",
    },
    {
      id: "5",
      courseDate: "Fri 19 Jun 24",
      courseName: "Power Automation",
    },
  ],
  aluminiFeedbackData: [
    {
      id: "1",
      name: "Shashikala Maurya",
      designation: "",
      feedbackText:
        "Green's Technology offered an outstanding Data Science course. The instructors were highly knowledgeable, simplifying complex concepts effectively. Engaging in hands-on projects greatly enhanced my confidence. I received exceptional support from the mentor, Godwin. I wholeheartedly recommend it to anyone eager to explore Data Science!.....",
      company: "",
      rating: 5,
    },
    {
      id: "2",
      name: "Rggdharan Dharan",
      designation: "",
      feedbackText:
        "Enrolling in Greens technology web development course was a decision I don't regret. The curriculum was comprehensive, covering essential topics like HTML, CSS, JavaScript, and GitHub. Building my own website was a satisfying conclusion to the course. This experience has equipped me with the skills and confidence for a future in web development.",
      company: "",
      rating: 5,
    },
    {
      id: "3",
      name: "nandhini 26",
      designation: "",
      feedbackText:
        "I usually don't write reviews. I chose Greens Technologies through a friend. I Attended DevOps and AWS courses at Greens Technology.The trainer was exceptionally helpful in clarifying concepts, making it the best training center. The emphasis on practical, live projects rather than just theory was commendable. Highly recommended.",
      company: "",
      rating: 5,
    },
    {
      id: "4",
      name: "Kym S",
      designation: "",
      feedbackText:
        "I took courses in Networking and Azure SQL Database. My instructor, Dhivakar, was really knowledgeable and the best. He kept the class interested and made sure we understood everything in each module. I want to thank Dhivakar for his great support during the learning process.",
      company: "",
      rating: 5,
    },
  ],
  faqList: [
    {
      id: "1",
      uuid: "a",
      question: "What are the basics required to learn DATA ANALYTICS?",
      answer:
        "There are no prerequisites for taking the online Data Analytics course. Basic knowledge of data analysis, statistics, and probability are beneficial to take Data Analytics online courses.",
    },
    {
      id: "2",
      uuid: "b",
      question:
        "Will I be helped by Greens technologies with placement after completion of course?",
      answer:
        "Absolutely, Greens technologies provide you with the 100% placement assistance. We teach our students by conducting group discussions and mock interviews. Apart from it, we also provide soft skill support to boost the confidence level of the students.",
    },
    {
      id: "3",
      uuid: "c",
      question:
        "Is there an online training module that is available for this course?",
      answer:
        "Unquestionably, online training programs are available as well as accessible. You as a candidate have the entire liberty to choose the timings that suit you. Thus, it is highly convenient and flexible.",
    },
    {
      id: "4",
      uuid: "d",
      question: "How effective is the online training program?",
      answer:
        "We have hired experts who use an extensive set of online techniques and tools for making online training experience satisfying. Our instructors will set a time that is convenient for the students. In an online setting, the students can engage, view, analyze queries related to presentations, and engage with learning resources. You have to submit all assignments online within a specified time period.",
    },
    {
      id: "5",
      uuid: "e",
      question: "What is the average salary of a DATA ANALYTICS professional?",
      answer:
        "The DATA ANALYTICS professionals earn an average salary between $60000 to $330000 per annum in the Australia.",
    },
    {
      id: "6",
      uuid: "f",
      question: "Is a career in Data Analytics a good choice?",
      answer:
        "Skilled data analysts are some of the most important professionals in the world. Because the demand is so large, and the supply of people who can truly do this job well is so finite, data analysts get huge salaries and excellent perks, even at beginner-level.",
    },
    {
      id: "7",
      uuid: "g",
      question:
        "Define the roles and responsibilities of a certified DATA ANALYTICS professionals?",
      answer:
        "*Defining data, analyzing results using statistical techniques. Establishing and implementing data analysis, data gathering systems, and other methods that develop analytical efficiency and quality. Getting data from primary or secondary data sources and managing databases.",
    },
    {
      id: "8",
      uuid: "h",
      question:
        "How long does it take to study and become a DATA ANALYTICS certified professional?",
      answer:
        "It entirely depends upon each individual's efforts, preparation strategy, and time invested. However, it will take nearly 1 month if an aspirant has an elementary knowledge and background of SQL. It will take around 2 to 3 months if an aspirant is a fresher.",
    },
  ],
  cwoList: [
    {
      id: "1",
      cwoCourseBgImage: cwoBgImg1,
      cwoCourseName: "POWER AUTOMATE",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 10 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $395",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
    {
      id: "2",
      cwoCourseBgImage: cwoBgImg2,
      cwoCourseName: "POWER APPS",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 15 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $495",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
    {
      id: "3",
      cwoCourseBgImage: cwoBgImg3,
      cwoCourseName: "SQL",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 15 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $495",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
    {
      id: "4",
      cwoCourseBgImage: cwoBgImg4,
      cwoCourseName: "TABLEAU",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 15 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $495",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
    {
      id: "5",
      cwoCourseBgImage: cwoBgImg5,
      cwoCourseName: "POWER BI",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 15 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $495",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
    {
      id: "6",
      cwoCourseBgImage: cwoBgImg6,
      cwoCourseName: "PYTHON",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 20 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $550",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
    {
      id: "7",
      cwoCourseBgImage: cwoBgImg1,
      cwoCourseName: "COMBO 1",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 20 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $550",
        },
        {
          id: "3",
          listName: "Mode: ONLINE, LIVE, INSTRUCTOR-LED.",
        },
      ],
    },
  ],
  courseDetailsList: [
    // Front end fullstack - Course
    {
      courseId:"frontend-fullstack",
      courseName: "WEB DEVELOPEMENT",
      subCourseName: "Front End Full Stack (HTML, CSS, JavaScript)",
      menuItemsData: [
        {
          title: "Introduction to Front-End Development",
          submenu: [
            {
              title: "Overview",
              submenu: [
                {
                  title:
                    "Understanding the Role of Front-End in Web Development",
                },
                {
                  title: "Introduction to HTML, CSS, JavaScript",
                },
              ],
            },
          ],
        },
        {
          title: "HTML Fundamentals",
          submenu: [
            {
              title: "Introduction to HTML (HyperText Markup Language)",
              submenu: [
                {
                  title: "HTML & Its Structure",
                  submenu: [
                    {
                      title:
                        "Key Concepts: Elements, Attributes, Nested Elements",
                    },
                  ],
                },
                {
                  title:
                    "HTML tags (`<html>`, `<head>`, `<body>`, `<div>`, `<p>`)",
                },
                {
                  title: "Creating Well-Structured HTML Documents",
                },
              ],
            },
          ],
        },

        {
          title: " HTML5 & Semantic HTML",
          submenu: [
            {
              title: "Advanced HTML",
              submenu: [
                {
                  title: "Features of HTML5",
                },
                {
                  title: "Understanding Semantic HTML Elements",
                },
                {
                  title: "Importance of Semantic HTML for Accessibility & SEO",
                },
              ],
            },
          ],
        },

        {
          title: "CSS Fundamentals",
          submenu: [
            {
              title: "Introduction to CSS",
              submenu: [
                {
                  title: "CSS Syntax & How it Styles HTML Elements",
                },
                {
                  title: "CSS Selectors",
                  submenu: [
                    {
                      title: "element selectors, class selectors, ID selectors",
                    },
                  ],
                },
                {
                  title:
                    "Applying Styles using Inline, Internal & External CSS",
                },
              ],
            },
          ],
        },

        {
          title: "CSS Layout Techniques",
          submenu: [
            {
              title: "Box Model & Layout",
              submenu: [
                {
                  title: "CSS Box Model",
                  submenu: [
                    {
                      title: "Margin, Padding, Border",
                    },
                  ],
                },
                {
                  title: "CSS Layout Techniques",
                  submenu: [
                    {
                      title: "Floats, Positioning",
                    },
                  ],
                },
                {
                  title:
                    "Introduction to CSS Flexbox & CSS Grid for Modern Layout Designs",
                },
              ],
            },
          ],
        },

        {
          title: "Responsive Web Design",
          submenu: [
            {
              title: "Responsive Design Principles",
              submenu: [
                {
                  title: "Understanding the Concept of Responsive Web Design",
                },
                {
                  title: "Media Queries for Responsive Layouts",
                },
                {
                  title:
                    "Implement Responsive Design Techniques using Flexbox, Grid, Viewport Meta Tag",
                },
              ],
            },
          ],
        },

        {
          title: "Advanced CSS",
          submenu: [
            {
              title: "CSS3 Features",
              submenu: [
                {
                  title: "Advanced CSS Techniques",
                  submenu: [
                    {
                      title: "Animations, Transitions, Transforms",
                    },
                  ],
                },
                {
                  title:
                    "CSS Preprocessors (Sass or Less) for Modular & Efficient CSS code",
                },
                {
                  title: "CSS Frameworks for Rapid Prototyping",
                  submenu: [
                    {
                      title: "Bootstrap, Foundation",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          title: "JavaScript Basics",
          submenu: [
            {
              title: "Introduction to JavaScript",
              submenu: [
                {
                  title: "Basics of JavaScript",
                  submenu: [
                    {
                      title: "Variables, Data Types, Operators",
                    },
                  ],
                },
                {
                  title: "Control Flow & Functions in JavaScript",
                },
                {
                  title:
                    "Manipulating the DOM with JavaScript for Dynamic Web Page Interactions",
                },
              ],
            },
          ],
        },

        {
          title: " JavaScript DOM Manipulation",
          submenu: [
            {
              title: "DOM (Document Object Model)",
              submenu: [
                {
                  title: "Understanding the DOM Structure & Hierarchy",
                },
                {
                  title: "DOM Manipulation Techniques",
                  submenu: [
                    {
                      title:
                        "Creating Elements, Modifying Styles, Handling Events",
                    },
                  ],
                },
                {
                  title: "Building Interactive Web Components using JavaScript",
                },
              ],
            },
          ],
        },

        {
          title: "JavaScript Events & Event Handling",
          submenu: [
            {
              title: "Handling User Interactions",
              submenu: [
                {
                  title: "Understand JavaScript Events",
                  submenu: [
                    {
                      title: "Click, Submit, Keypress",
                    },
                  ],
                },
                {
                  title: "Implement Event Listeners & Handlers",
                },
                {
                  title:
                    "Handling User Interactions to Create Responsive Web Applications",
                },
              ],
            },
          ],
        },

        {
          title: " Version Control with Git",
          submenu: [
            {
              title: "Git Basics",
              submenu: [
                {
                  title: "Overview of Version Control Principles with Git",
                },
                {
                  title: "Understand Git workflow",
                  submenu: [
                    {
                      title: "Branches, Commits, Merges",
                    },
                  ],
                },
                {
                  title: "Collaborate on Projects using Git & GitHub",
                },
              ],
            },
          ],
        },

        {
          title: " Web Accessibility & SEO Basics",
          submenu: [
            {
              title: "Importance of Web Accessibility (WCAG guidelines)",
            },
            {
              title:
                "Implementing accessibility features in HTML, CSS & JavaScript",
            },
            {
              title:
                "Basics of SEO for Web Pages, Optimizing HTML Structure & Content for Search Engines",
            },
          ],
        },

        {
          title: "Testing & Debugging",
          submenu: [
            {
              title:
                "Master Browser Developer Tools for Debugging CSS, JavaScript & Performance",
            },
            {
              title:
                "Practice Testing Web Applications for Cross-Browser Compatibility",
            },
          ],
        },

        {
          title: "Deployment & Performance Optimization",
          submenu: [
            {
              title:
                "Learn Deployment Processes for Web Projects (FTP, hosting platforms, CI/CD pipelines)",
            },
            {
              title:
                "Optimizing Web Page Performance (Minification, Caching, Image Optimization)",
            },
          ],
        },
      ],
    },

  ],
};

const DataAnlyticsPage = () => {
  return (
    <>
      <Navbar />

      <MainBanner
        courseName={data.mainBannercourseName}
        breadCrumbLink={data.mainBannerBreadCrumbLink}
        courseList={data.mainBannercourseList}
        masterCoursePrice={data.mainBannermasterCoursePrice}
        courseDetailsList ={data.courseDetailsList}
      />

      <MainBannerCta
        HandsOnTraining={data.mainBannerCtaHandsOnTraining}
        HandsonTrainingProject={data.mainBannerCtaHandsonTrainingProject}
        PracticalAssignment={data.mainBannerCtaPracticalAssignment}
      />

      <Chart
        graphCourseName={data.chartgraphCourseName}
        jobCount={data.chartJobCount}
        imageUrl={data.chartImageUrl}
        imageAlt={data.chartImageAlt}
        graphCourseSkill={data.chartGraphCourseSkill}
        courseName={data.chartgraphCourseName}
      />

      <BookFreeDemo />

      <CourseWeOffer cwoList={data.cwoList} cwoCourseSyllabusLink={""} />

      <CourseDetail courseDetailsList={data.courseDetailsList} />

      <UpcomingCourses
        courseSchedulelist={data.upComingCourse}
        courseName={data.mainBannercourseName}
      />

      <FaqList faqList={data.faqList} />

      <AluminiFeedBack
        courseName={data.mainBannercourseName}
        aluminiFeedbackData={data.aluminiFeedbackData}
      />

      <Cta />

      <CareerAssistant />

      <GreensFooter />
    </>
  );
};

export default DataAnlyticsPage;
