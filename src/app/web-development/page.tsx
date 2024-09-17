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
import GreensFoter from "@/components/Layouts/GreensFooter";
import webDev from "../../../public/images/webdevgraph.jpeg";
import GreensFooter from "@/components/Layouts/GreensFooter";

const data = {
  mainBannercourseName: "Web Development",
  mainBannerBreadCrumbLink: "",
  mainBannercourseList: [
    {
      id: "1",
      subCourseName: "Front End Full Stack",
      subCoursePrice: "795",
      subCourseLink: "FrontEndFullStackSyllabus",
    },
    {
      id: "2",
      subCourseName: "React JS",
      subCoursePrice: "795",
      subCourseLink: "ReactJSSyllabus",
    },
    {
      id: "3",
      subCourseName: "Node JS",
      subCoursePrice: "795",
      subCourseLink: "NodeJSSyllabus",
    },
    {
      id: "4",
      subCourseName: "Java Full Stack",
      subCoursePrice: "995",
      subCourseLink: "JavaFullStackSyllabus",
    },
    {
      id: "5",
      subCourseName: "Python Full Stack",
      subCoursePrice: "795",
      subCourseLink: "PythonFullStackSyllabus",
    },
    {
      id: "6",
      subCourseName: "SQL Full Stack",
      subCoursePrice: "995",
      subCourseLink: "SQLFullStackSyllabus",
    },
  ],
  
  mainBannermasterCoursePrice: "1995",
  mainBannerCtaHandsOnTraining: "30",
  mainBannerCtaHandsonTrainingProject: "1",
  mainBannerCtaPracticalAssignment: "8",
  chartgraphCourseName: "Data Analytics",
  chartJobCount: "9000",
  chartImageUrl: cta_img,
  chartImageAlt: "Job Oppertunity Grap",
  chartGraphCourseSkill: "data analysis",
  upComingCourse: [
    {
      id: "1",
      courseDate: "Sat 15 Jun 24",
      courseName: "Front End Full Stack",
    },
    {
      id: "2",
      courseDate: "Sun 16 Jun 24",
      courseName: "React JS",
    },
    {
      id: "3",
      courseDate: "Mon 17 Jun 24",
      courseName: "Node JS",
    },
    {
      id: "4",
      courseDate: "Tue 18 Jun 24",
      courseName: "Python Full Stack",
    },
    {
      id: "5",
      courseDate: "Fri 19 Jun 24",
      courseName: "Java Full Stack",
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
      question: "What are the prerequisites for enrolling in the Web Development courses?",
      answer: "Our Web Development courses are designed to cater to learners of all levels. While no prior experience is required for the foundational courses, such as Front End Fullstack, a basic understanding of programming concepts can be helpful. For advanced courses like React JS, Node JS, and Java Fullstack, some prior knowledge of programming languages like JavaScript is recommended.",
    },
    {
      id: "2",
      uuid: "b",
      question: "How long does it take to complete each course?",
      answer: "The duration of each course varies depending on the subject and depth of content. Generally, our Web Development courses range from 8 to 12 weeks. This includes live instructor-led sessions, assignments, and projects.",
    },
    {
      id: "3",
      uuid: "c",
      question: "Are the courses instructor-led, or can I learn at my own pace?",
      answer: "Our Web Development courses are live, instructor-led, ensuring real-time interaction, support, and guidance from industry experts. However, recorded sessions are available for you to review at your own pace, making it convenient for you to balance learning with other commitments.",
    },
    {
      id: "4",
      uuid: "d",
      question: "What kind of learning resources will be provided during the courses?",
      answer: "Throughout our Web Development courses, you will have access to a range of high-quality learning resources, including detailed course materials, interactive tutorials, and hands-on coding exercises. Our courses also provide access to recorded sessions, project templates, and a community forum where you can collaborate with peers and seek help from instructors. These resources are designed to enhance your learning experience and ensure you gain practical skills you can apply in real-world scenarios.",
    },
    {
      id: "5",
      uuid: "e",
      question: "What kind of projects will I work on during the course?",
      answer: "Each course includes hands-on projects designed to reinforce the concepts you’ve learned. For example, in the Fullstack courses, you’ll work on building complete web applications from scratch, while specialized courses like React JS or Node JS will involve projects focused on mastering those specific technologies.",
    },
    {
      id: "6",
      uuid: "f",
      question: "Can I get help if I’m stuck on a particular topic or project?",
      answer: "Absolutely! Our instructors are available to provide assistance during live sessions, and we also offer additional support through forums, one-on-one mentoring, and discussion groups. You won’t be alone in your learning journey.",
    },
    {
      id: "7",
      uuid: "g",
      question: "What career opportunities can I pursue after completing these courses?",
      answer: "After completing any of our Web Development courses, you’ll be well-prepared for a variety of roles such as Front-End Developer, Fullstack Developer, Back-End Developer, Web Developer, and Software Engineer. The demand for skilled web developers is high, and our courses are designed to equip you with the necessary skills to succeed in this field.",
    },
    {
      id: "8",
      uuid: "h",
      question: "How do I enroll in a course?",
      answer: "Enrolling is easy! Simply visit our website, select the course you’re interested in, and follow the enrollment process. We’re here to guide you every step of the way to ensure a smooth start to your learning journey.",
    },
  ],
  
  cwoList: [
    {
      id: "1",
      cwoCourseBgImage: cwoBgImg1,
      cwoCourseName: "Front End Full Stack",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 30 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $795",
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
      cwoCourseName: "React JS",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 30 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $795",
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
      cwoCourseName: "Node JS",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 30 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $795",
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
      cwoCourseName: "Java Full Stack",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 70 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $995",
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
      cwoCourseName: "Python Full Stack",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 30 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $795",
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
      cwoCourseName: "SQL Full Stack",
      descriptionList: [
        {
          id: "1",
          listName: "Duration: 70 Hours + Placement Training",
        },
        {
          id: "2",
          listName: "Fees: $995",
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
      courseId:"FrontEndFullStackSyllabus",
      courseName: "WEB DEVELOPMENT",
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

    // React js - Course
    {
      courseId:"ReactJSSyllabus",
      courseName: "WEB DEVELOPMENT",
      subCourseName: "React JS",
      menuItemsData: [
        {
          title: "Introduction to React JS",
          submenu: [
            {
              title: "Overview of React JS",
            },
            {
              title: "Understanding the Basics of ReactJS",
              submenu: [
                {
                  title:
                    "Components, JSX (JavaScript XML), Props, State, Lifecycle Methods, Handling Events, Conditional Rendering, Lists & Keys, Forms & Controlled Components, Hooks",
                },
              ],
            },
            {
              title: "Basic HTML, CSS, JavaScript for ReactJS",
              submenu: [
                {
                  title: "HTML (HyperText Markup Language)",
                  submenu: [
                    {
                      title:
                        "Elements & Tags :<div>, <span>, <h1> to <h6>, <p>, <a>, <img>, <input>, <button>, <ul>, <ol>, <li>, <form>",
                    },
                    {
                      title:
                        "Attributes: ‘class’ Vs ‘className’, ‘id’, ‘style’, ‘href’, ‘src’, ‘alt’, ‘onClick’, ‘onChange’, ‘onSubmit’,’ disabled, ‘readeonly’, ‘checked’",
                    },
                    {
                      title:
                        "Semantic HTML: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>",
                    },
                  ],
                },
                {
                  title: "CSS (Cascading Style Sheets)",
                  submenu: [
                    {
                      title: "Selectors: Element, Class, ID, Attribute",
                    },
                    {
                      title: "Properties & Values: Color, Size, Font, Layouts",
                    },
                    {
                      title: "Box Model: Content, Padding, Border, Margin",
                    },
                    {
                      title: "Layouts: Flexbox, Grid",
                    },
                    {
                      title: "Responsive Design: Screen Width, Height",
                    },
                    {
                      title:
                        "CSS Styles: Inline, External CSS, CSS-in-JS Libraries",
                    },
                  ],
                },
                {
                  title: "JavaScript",
                  submenu: [
                    {
                      title:
                        "Variables, Data Types, Functions, Control Flow, DOM Manipulation, Events",
                    },
                  ],
                },
              ],
            },
            {
              title:
                "Setting up the Development Environment (Node.js, npm/yarn)",
              submenu: [
                {
                  title:
                    "Install Node.js, Create a React App, Navigate to your Project Directory, Start the Development Server",
                },
              ],
            },
            {
              title: "Creating your first React application",
            },
            {
              title: "Introduction to JSX (JavaScript XML)",
              submenu: [
                {
                  title:
                    "HTML-Like Syntax, Expressions & Attributes in JSX, JSX Represents Objects, Nested JSX Elements, Self-Closing Tags, Using JSX in React Components",
                },
              ],
            },
            {
              title: "Virtual DOM & React’s Rendering Process ReactJS",
              submenu: [
                {
                  title: "Virtual Dom",
                  submenu: [
                    {
                      title: "How it Works, Advantages",
                    },
                  ],
                },
                {
                  title: "React’s Rendering Process",
                  submenu: [
                    {
                      title:
                        "Initial Render, Updating the DOM, Reconciliation, Batching Updates, Keyed Elements",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          title: "Components and Props",
          submenu: [
            {
              title: "Introduction to React components",
              submenu: [
                {
                  title:
                    "Functional & Class Components, Props & its types, State & setState()",
                },
              ],
            },
            {
              title: "Functional Components Vs Class Components",
            },
            {
              title: "Props & its types",
            },
            {
              title: "State & setState()",
            },
            {
              title: "Lifecycle methods in class components",
              submenu: [
                {
                  title: "Mounting Phase",
                  submenu: [
                    {
                      title: "constructor (), render (), componentDidMount ()",
                    },
                  ],
                },
                {
                  title: "Updating Phase",
                  submenu: [
                    {
                      title:
                        "shouldComponentUpdate (nextProps, nextState), componentDidUpdate (preProps, prevState)",
                    },
                  ],
                },
                {
                  title: "Unmounting Phase",
                  submenu: [
                    {
                      title: "componentWillUnmount",
                    },
                  ],
                },
                {
                  title: "Error Handling",
                  submenu: [
                    {
                      title:
                        "Static getDerivedStateFromError (error), componentDidCtach (error, info)",
                    },
                  ],
                },
                {
                  title: "Legacy Methods (Deprecated)",
                  submenu: [
                    {
                      title:
                        "componentWillMount (), componentWillReceiveProps (nextProps), componentWillUpdate (nextProps, nextState)",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          title: "React Router",
          submenu: [
            {
              title: "Introduction to React Router",
              submenu: [
                {
                  title: "Key Concepts",
                  submenu: [
                    {
                      title:
                        "Routing, Components, Single-Page Application (SPA)",
                    },
                  ],
                },
                {
                  title: "Core Components",
                  submenu: [
                    {
                      title: "BrowserRouter, Route, Link, Switch",
                    },
                  ],
                },
                {
                  title: "Basic usage",
                  submenu: [
                    {
                      title:
                        "Installation, Router Setup, Defining Routes, Navigation",
                    },
                  ],
                },
              ],
            },
            {
              title: "Setting up Routes in React Applications",
            },
            {
              title: "Nested Routes & Route Parameters",
            },
            {
              title: "Programmatic Navigation",
              submenu: [
                {
                  title: "Using the useHistory Hook",
                },
                {
                  title: "Using withRouter Higher-Order Component",
                },
                {
                  title: "Using Redirect Component",
                },
                {
                  title: "Using Props in Functional Components",
                },
              ],
            },
            {
              title: "Route Guard & Authentication",
            },
          ],
        },

        {
          title: "Managing State with Hooks",
          submenu: [
            {
              title: "Introduction to React Hooks",
              submenu: [
                {
                  title: "Key Concepts",
                  submenu: [
                    {
                      title:
                        "Functional Components, State, Side Effects, Custom Hooks",
                    },
                  ],
                },
                {
                  title: "Basic Hooks",
                  submenu: [
                    {
                      title:
                        "useState, useEffect, useContext, useReducer, useCallback & useMemo",
                    },
                  ],
                },
              ],
            },
            {
              title: "useState() Hook",
            },
            {
              title:
                "useEffect () & useContext () Hook for Lifecycle management",
            },
            {
              title: "useRef () Hook for accessing DOM elements",
            },
            {
              title: "Custom Hooks & their use cases",
              submenu: [
                {
                  title: "useFetch, useLocalStorage, useDebounce, useForm",
                },
              ],
            },
            {
              title: "Performance optimizations with hooks",
              submenu: [
                {
                  title:
                    "Memoization, Callback Memoization, ShouldComponentUpdate Replacement, Lazy Initialization, Optimizing Context & Effects, Batching Updates",
                },
              ],
            },
            {
              title: "Server-Side Rendering (SSR) with Next.js",
              submenu: [
                {
                  title:
                    "Set Up Next.js Project, Create a Page, Run the Development Server, Production Deployment, Data Fetching, SEO Optimization",
                },
              ],
            },
          ],
        },

        {
          title: "Forms and Form Handling",
          submenu: [
            {
              title: "Handling forms in React",
              submenu: [
                {
                  title:
                    "Controlled & Uncontrolled Components, Form Validation, Handling Multiple Inputs, Conditional Rendering, Form Libraries",
                },
              ],
            },
            {
              title: "Controlled Vs Uncontrolled Components",
            },
            {
              title: "Form Validation Techniques",
              submenu: [
                {
                  title: "Build-in HTML Validation Attributes",
                  submenu: [
                    {
                      title: "‘required’, ‘min’, ‘max’, ‘pattern’",
                    },
                  ],
                },
                {
                  title: "Controlled Component Validation",
                },
                {
                  title: "Third-Party Form Libraries",
                },
              ],
            },
            {
              title: "Form libraries (Formik, React Hook Form)",
            },
            {
              title: "Working with form data",
              submenu: [
                {
                  title:
                    "Initialize Form State, Handle Form Input Changes & Form Submission, Form Validation & Submission, Controlled Vs Uncontrolled Components",
                },
              ],
            },
          ],
        },

        {
          title: "React Context API",
          submenu: [
            {
              title: "Introduction to React Context API",
            },
            {
              title: "Creating and consuming contexts",
            },
            {
              title: "Context provider and consumer pattern",
            },
            {
              title: "Context vs. prop drilling",
            },
            {
              title: "Advanced use cases with Context API",
            },
          ],
        },

        {
          title: "State Management with Redux",
          submenu: [
            {
              title: "Introduction to Redux",
            },
            {
              title: "Setting up Redux in React Applications",
              submenu: [
                {
                  title: "Install Redux & React-Redux",
                },
                {
                  title: "Create Redux Store",
                },
              ],
            },
            {
              title: "Actions, Reducers, Store",
            },
            {
              title: "Connecting Redux to React Components",
              submenu: [
                {
                  title: "Provider & Connect Components",
                },
              ],
            },
            {
              title: "Redux Middleware & Async Actions",
              submenu: [
                {
                  title:
                    "Install Redux Thunk, Apply Middleware, Async Action Creator",
                },
              ],
            },
          ],
        },

        {
          title: "Server-Side Rendering (SSR) with Next.js",
          submenu: [
            {
              title: "Introduction to Next.js",
            },
            {
              title: "Setting up Next.js for server-side rendering",
              submenu: [
                {
                  title: "Create Next.js App, Run Development Server",
                },
              ],
            },
            {
              title:
                "Data fetching with getServerSideProps() & getStaticProps()",
            },
            {
              title: "Routing in Next.js applications",
            },
            {
              title: "Deployment considerations for Next.js",
              submenu: [
                {
                  title:
                    "Vercel, Other Hosting Platforms, Server Configuration",
                },
              ],
            },
          ],
        },

        {
          title: "Testing React Applications",
          submenu: [
            {
              title: "Introduction to testing in React",
            },
            {
              title: "Unit testing with Jest and React Testing Library",
            },
            {
              title: "Integration testing",
            },
            {
              title: "End-to-end testing with tools like Cypress",
            },
            {
              title: "Test-driven development (TDD) approach",
            },
          ],
        },

        {
          title: "Advanced Topics",
          submenu: [
            {
              title: "Higher-Order Components (HOCs)",
            },
            {
              title: "Render props pattern",
            },
            {
              title: "Error handling in React applications",
            },
            {
              title: "Code splitting and lazy loading",
            },
            {
              title: "Performance optimization techniques",
            },
          ],
        },
      ],
    },

    // Node js - Course

    {
      courseId:"NodeJSSyllabus",
      courseName: "WEB DEVELOPMENT",
      subCourseName: "Node JS",
      menuItemsData: [
        {
          title: "Introduction to Node.js",
          submenu: [
            {
              title: "Getting Started with Node.js",
              submenu: [
                {
                  title: "Introduction to Node.js & Its Architecture",
                  submenu: [
                    {
                      title:
                        "Key Features of Node.js: Asynchronous & Event-Driven, Single-Threaded, Non-Blocking, JavaScript Everywhere, Extensive Ecosystem",
                    },
                    {
                      title:
                        "Architecture of Node.js: V8 JavaScript Engine, Event Loop, Libuv Library, Single-Threaded Model, Modules",
                    },
                  ],
                },
                {
                  title: "Advantages & Use Cases of Node.js",
                  submenu: [
                    {
                      title:
                        "Advantages of Node.js: High Performance, Scalability, Rich Ecosystem, Full-Stack JavaScript",
                    },
                    {
                      title:
                        "Use Cases of Node.js: Web Servers & APIs, Real-Time Applications, Microservices",
                    },
                  ],
                },
              ],
            },
            {
              title: "Installing Node.js & npm (Node Package Manager)",
            },
            {
              title:
                "Understanding Asynchronous Programming & Event-Driven Architecture",
              submenu: [
                {
                  title: "Asynchronous Programming in Node.js",
                  submenu: [
                    {
                      title: "Key Concepts: Callbacks, Promises, Async/Await",
                    },
                  ],
                },
                {
                  title: "Event-Driven Architecture in Node.js",
                  submenu: [
                    {
                      title: "Key Components: Event Emitter, Built-in Events",
                    },
                    {
                      title:
                        "Benefits of Event-Driven Architecture: Scalability, Real-Time Applications, Modularity",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          title: "Core JavaScript Concepts",
          submenu: [
            {
              title: "Variables, Data Types, Operators",
            },
            {
              title: "Functions, Arrays, Objects, Classes (ES6+)",
            },
            {
              title: "Promises, Async/Await for Asynchronous Programming",
            },
          ],
        },

        {
          title: "Node.js Basics",
          submenu: [
            {
              title: "Node.js Modules & File System",
              submenu: [
                {
                  title: "Understanding Node.js Modules",
                  submenu: [
                    {
                      title: "`require`, module. exports`",
                    },
                  ],
                },
                {
                  title: "Working with File System",
                  submenu: [
                    {
                      title: "‘fs’ Module",
                    },
                  ],
                },
                {
                  title: "Using Built-in Modules",
                  submenu: [
                    {
                      title: "`http`, `https`, `path`",
                    },
                  ],
                },
              ],
            },
            {
              title: "Debugging & Error Handling",
              submenu: [
                {
                  title: "Debugging Node.js Applications",
                  submenu: [
                    {
                      title: "using VS Code or Chrome DevTools",
                    },
                  ],
                },
                {
                  title: "Error Handling Techniques in Node.js",
                },
              ],
            },
          ],
        },

        {
          title: "Web Development with Express.js",
          submenu: [
            {
              title: "Introduction to Express.js",
              submenu: [
                {
                  title: "Setting up Express.js in Node.js Applications",
                },
                {
                  title: "Routing, Middleware, Request Handling",
                },
                {
                  title: "Templating Engines",
                  submenu: [
                    {
                      title: "Handlebars, Pug",
                    },
                  ],
                },
                {
                  title: "Frontend Frameworks",
                  submenu: [
                    {
                      title: "React, Vue.js",
                    },
                  ],
                },
              ],
            },
            {
              title: "RESTful APIs Development",
              submenu: [
                {
                  title: "Designing RESTful APIs",
                },
                {
                  title: "Implementing CRUD Operations",
                },
                {
                  title: "Authentication & Authorization ",
                  submenu: [
                    {
                      title: "JWT, OAuth",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          title: "Data Storage & Management",
          submenu: [
            {
              title: "Working with Databases",
              submenu: [
                {
                  title: "Introduction to Databases",
                  submenu: [
                    {
                      title: "SQL vs NoSQL",
                    },
                  ],
                },
                {
                  title: "Integrating MongoDB, MySQL, PostgreSQL with Node.js",
                },
                {
                  title: "Using ORMs",
                  submenu: [
                    {
                      title: "Mongoose for MongoDB",
                    },
                    {
                      title: "Sequelize for SQL Databases",
                    },
                  ],
                },
              ],
            },
            {
              title: "Data Validation & Security",
              submenu: [
                {
                  title: "Input Validation & Sanitization",
                },
                {
                  title: "Implementing Security Best Practices",
                  submenu: [
                    {
                      title: "XSS, CSRF prevention",
                    },
                  ],
                },
                {
                  title: "Managing Sensitive Data Securely",
                },
              ],
            },
          ],
        },

        {
          title: "Frontend Integration & APIs",
          submenu: [
            {
              title: "Frontend Basics",
              submenu: [
                {
                  title: "HTML, CSS, JavaScript (DOM Manipulation, Events)",
                },
                {
                  title:
                    "Consuming APIs with Fetch API or libraries like Axios",
                },
              ],
            },
            {
              title: "Real-Time Web Applications",
              submenu: [
                {
                  title: "Using WebSocket’s for Real-Time Communication",
                  submenu: [
                    {
                      title: "Socket.io",
                    },
                  ],
                },
                {
                  title: "Building Chat Applications, Live Updates",
                },
              ],
            },
          ],
        },

        {
          title: "Advanced Topics",
          submenu: [
            {
              title: "Middleware Development",
              submenu: [
                {
                  title: "Custom Middleware Development",
                  submenu: [
                    {
                      title: "Logging, Authentication",
                    },
                  ],
                },
                {
                  title: "Error Handling & Performance Optimization",
                },
              ],
            },
            {
              title: "Deployment & DevOps",
              submenu: [
                {
                  title: "Deploying Node.js Applications on Cloud Platforms",
                  submenu: [
                    {
                      title: "Heroku, AWS, Azure",
                    },
                  ],
                },
                {
                  title:
                    "Containerization with Docker & Orchestration with Kubernetes",
                },
                {
                  title: "Setting up CI/CD Pipelines for Node.js Applications",
                },
              ],
            },
          ],
        },

        {
          title: "Microservices & Scalability",
          submenu: [
            {
              title: "Microservices Architecture",
              submenu: [
                {
                  title: "Introduction to microservices & Its Benefits",
                },
                {
                  title: "Building Microservices with Node.js & Express.js",
                },
                {
                  title:
                    "Service Discovery & Communication between Microservices",
                },
              ],
            },
            {
              title: "Scaling Node.js Applications",
              submenu: [
                {
                  title: "Horizontal & Vertical Scaling Strategies",
                },
                {
                  title: "Load Balancing & Caching",
                },
              ],
            },
          ],
        },

        {
          title: "Testing & Debugging",
          submenu: [
            {
              title: "Unit Testing",
              submenu: [
                {
                  title: "Writing Unit Tests with Frameworks",
                  submenu: [
                    {
                      title: "Jest, Mocha, Chai",
                    },
                  ],
                },
                {
                  title: "Test-driven development (TDD) Approach",
                },
              ],
            },
            {
              title: "Performance Monitoring & Optimization",
              submenu: [
                {
                  title: "Profiling Node.js Applications",
                },
                {
                  title: "Optimizing Code & Database Queries for Performance",
                },
              ],
            },
          ],
        },

        {
          title: "Security & Compliance",
          submenu: [
            {
              title: "Web Security Best Practices",
              submenu: [
                {
                  title: "Secure Authentication & Authorization Mechanisms",
                },
                {
                  title: "Preventing common Vulnerabilities",
                  submenu: [
                    {
                      title: "SQL Injection, XSS",
                    },
                  ],
                },
              ],
            },
            {
              title: "Data Privacy & Compliance",
              submenu: [
                {
                  title: "GDPR, HIPAA Compliance Considerations",
                },
                {
                  title: "Implementing Data Encryption & Privacy Measures",
                },
              ],
            },
          ],
        },

        {
          title: "Project Work & Real-World Applications",
          submenu: [
            {
              title: "Building Full-Stack Applications",
            },
            {
              title: "Version Control & Collaboration",
            },
          ],
        },
      ],
    },

    // Java - Full Stack Course
    {
      courseId:"JavaFullStackSyllabus",
      courseName: "WEB DEVELOPMENT",
      subCourseName: "Java Full Stack",
      menuItemsData: [
        {
          title: "Introduction to Java",
          submenu: [
            {
              title: "Introduction to Java",
              submenu: [
                {
                  title: "History & Evolution of Java",
                },
              ],
            },
            {
              title: "Setting up Java Development Environment (JDK, IDE)",
            },
            {
              title: "Variables, Data Types, Operators",
            },
            {
              title: "Control Flow",
              submenu: [
                {
                  title: "if-else, switch-case",
                },
              ],
            },
            {
              title: "Loops",
              submenu: [
                {
                  title: "for, while, do-while",
                },
              ],
            },
            {
              title: "Arrays & Collections",
            },
          ],
        },
        {
          title: "Object-Oriented Programming (OOP)",
          submenu: [
            {
              title:
                "Classes, Objects, Inheritance, Polymorphism, Encapsulation",
            },
            {
              title: "Exception Handling",
            },
          ],
        },
        {
          title: "Java Advanced Concepts",
          submenu: [
            {
              title: "Generics & Collections Framework",
              submenu: [
                {
                  title: "Generics",
                  submenu: [
                    {
                      title:
                        "Benefits of Generics: Type Safety, Code Reusability, Performance",
                    },
                  ],
                },
              ],
            },
            {
              title: "Collections Framework",
              submenu: [
                {
                  title: "List: ArrayList, LinkedList",
                },
                {
                  title: "Set: HashSet, TreeSet",
                },
                {
                  title: "Queue: PriorityQueue",
                },
                {
                  title: "Map: HashMap, TreeMap",
                },
              ],
            },
            {
              title: "Streams & Lambda Expressions",
              submenu: [
                {
                  title: "Lambda Expressions",
                },
                {
                  title: "Streams",
                  submenu: [
                    {
                      title:
                        "Key Characteristics of Streams: Sequence of Elements, Functional Operations, Laziness & Pipelining",
                    },
                    {
                      title:
                        "Stream Operations: Filtering, Mapping, Sorting, Reducing, Collecting",
                    },
                  ],
                },
              ],
            },
            {
              title: "Date & Time API",
            },
            {
              title: "File Handling & I/O Operations",
            },
            {
              title: "Concurrency & Multithreading",
            },
          ],
        },

        {
          title: "Database Fundamentals with SQL",
          submenu: [
            {
              title: "Introduction to Relational Databases",
              submenu: [
                {
                  title: "MySQL, PostgreSQL",
                },
              ],
            },
            {
              title: "SQL Basics",
              submenu: [
                {
                  title:
                    "Data Definition Language, Data Manipulation Language, Data Query Language, Data Control Language",
                },
              ],
            },
            {
              title: "Normalization & Database Design Principles",
            },
            {
              title: "Joins & Subqueries",
            },
            {
              title: "Transactions & ACID Properties",
            },
          ],
        },

        {
          title: "Frontend Development with HTML, CSS, JavaScript",
          submenu: [
            {
              title: "Introduction to HTML5 & CSS3",
            },
            {
              title: "JavaScript Fundamentals",
              submenu: [
                {
                  title: "Variables, Functions, Events",
                },
              ],
            },
            {
              title: "DOM Manipulation",
            },
            {
              title: "jQuery Framework",
            },
            {
              title: "Responsive Web Design with Bootstrap",
            },
            {
              title: "Single Page Application (SPA) Concepts",
            },
          ],
        },

        {
          title: "Frontend Frameworks (Choose one)",
          submenu: [
            {
              title: "Option A: React.js",
              submenu: [
                {
                  title: "Introduction to React.js",
                },
                {
                  title: "Components & Props, State & Lifecycle",
                },
                {
                  title: "Handling Events, React Router",
                },
                {
                  title: "State Management with Redux",
                },
                {
                  title: "Axios for HTTP Requests",
                },
                {
                  title: "React Hooks",
                },
              ],
            },
            {
              title: "Option B: Angular",
              submenu: [
                {
                  title: "Introduction to Angular",
                },
                {
                  title: "Components, Modules, Services",
                },
                {
                  title: "Data Binding & Directives",
                },
                {
                  title: "Routing & Navigation, HTTP Client & RESTful Services",
                },
                {
                  title: "Forms & Validation",
                },
                {
                  title: "Angular Material Design",
                },
              ],
            },
          ],
        },

        {
          title: "Backend Development with Java",
          submenu: [
            {
              title: "Introduction to Backend Development",
            },
            {
              title: "Introduction to Servlets",
            },
            {
              title: "JavaServer Pages (JSP)",
            },
            {
              title: "Java Persistence API (JPA) with Hibernate",
            },
            {
              title: "RESTful Web Services (JAX-RS)",
            },
            {
              title: "Spring Framework",
              submenu: [
                {
                  title: "Core, MVC, IoC, AOP",
                },
              ],
            },
            {
              title: "Building REST APIs with Spring Boot",
            },
          ],
        },

        {
          title: "Database Integration & ORM",
          submenu: [
            {
              title: "Connecting Java Applications to Databases",
            },
            {
              title: "JDBC (Java Database Connectivity)",
            },
            {
              title: "ORM (Object-Relational Mapping) with Hibernate",
            },
          ],
        },

        {
          title: "DevOps & Deployment",
          submenu: [
            {
              title: "Introduction to DevOps",
            },
            {
              title: "Version Control with Git",
            },
            {
              title:
                "Continuous Integration and Continuous Deployment (CI/CD) with Jenkins",
            },
            {
              title: "Containerization with Docker",
            },
            {
              title: "Deployment on Cloud Platforms (AWS, Azure, Heroku)",
            },
          ],
        },

        {
          title: "Advanced Topics (Choose based on interest)",
          submenu: [
            {
              title: "Microservices Architecture",
            },
            {
              title:
                "Security in Web Applications (Authentication, Authorization)",
            },
            {
              title: "Performance Tuning and Optimization",
            },
            {
              title: "Monitoring & Logging",
            },
            {
              title: "Serverless Computing",
            },
          ],
        },

        {
          title: "Full Stack Development Project",
          submenu: [
            {
              title: "Designing & Implementing a Full Stack Application",
            },
            {
              title: "Integration of Frontend & Backend",
            },
            {
              title: "Testing & Debugging",
            },
            {
              title: "Deployment Strategies (Local, Cloud)",
            },
          ],
        },
      ],
    },

    // Python - Full Stack Course
    {
      courseId:"PythonFullStackSyllabus",
      courseName: "WEB DEVELOPMENT",
      subCourseName: "Python Full Stack",
      menuItemsData: [
        {
          title: "Introduction to Python",
          submenu: [
            {
              title: "History & Importance of Python in Web Development",
              submenu: [
                {
                  title: "History of Python in Web Development",
                  submenu: [
                    {
                      title:
                        "Emergence, CGI Programming, Frameworks Development, Expansion of Ecosystem",
                    },
                  ],
                },
                {
                  title: "Importance of Python in Web Development",
                  submenu: [
                    {
                      title:
                        "Ease of Learning & Use, Versatility, Rich Ecosystem, Scalability, Community & Support, Integration Capabilities",
                    },
                  ],
                },
              ],
            },
            {
              title: "Basis Syntax, Variables, Data Types, Operators",
            },
            {
              title: "Control Flow & Functions",
              submenu: [
                {
                  title: "Conditional Statements",
                  submenu: [
                    {
                      title: "if, else if, else",
                    },
                  ],
                },
                {
                  title: "Loops & Iteration	",
                  submenu: [
                    {
                      title: "Loops: for, while",
                    },
                  ],
                },
                {
                  title: "Functions",
                  submenu: [
                    {
                      title:
                        "Defining Functions, Parameters, return values & Scope",
                    },
                  ],
                },
              ],
            },
            {
              title: "Data Structures",

              submenu: [
                {
                  title: "Lists, Tuples, Dictionaries, Sets",
                },
                {
                  title: "List Comprehensions & Generator Expressions",
                },
              ],
            },
          ],
        },
        {
          title: "Object-Oriented Programming (OOP) in Python",
          submenu: [
            {
              title: "Classes & Objects",
              submenu: [
                {
                  title: "Creating Classes & Instances",
                },
                {
                  title: "Attributes, Methods, Constructors",
                },
                {
                  title: "Class-Level Data & Methods",
                },
              ],
            },
            {
              title: "Inheritance & Polymorphism",
              submenu: [
                {
                  title: "Extending Classes using Inheritance",
                },
                {
                  title: "Method Overriding & super () Function",
                },
                {
                  title: "Polymorphism",
                  submenu: [
                    {
                      title: "Method Overloading & Overriding",
                    },
                  ],
                },
              ],
            },
            {
              title: "Advanced OOP Concepts",
              submenu: [
                {
                  title: "Encapsulation & Abstraction",
                },
                {
                  title: "Class Properties, Decorators, Magic Methods",
                },
              ],
            },
          ],
        },
        {
          title: "Web Fundamentals",
          submenu: [
            {
              title: "HTML & CSS Basics",
              submenu: [
                {
                  title: "HTML5",
                  submenu: [
                    {
                      title: "Structure, Tags, Attributes",
                    },
                  ],
                },
                {
                  title: "CSS3",
                  submenu: [
                    {
                      title:
                        "Selectors, Properties, Box Model, Flexbox, Grid layout",
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
                      title: "Variables, Data Types, Operators",
                    },
                  ],
                },
                {
                  title: "DOM Manipulation",
                  submenu: [
                    {
                      title: "Accessing & Modifying HTML Elements",
                    },
                  ],
                },
                {
                  title: "Events & Event Handling",
                },
              ],
            },
            {
              title: "Responsive Design",
              submenu: [
                {
                  title: "Media Queries & Responsive Layouts",
                },
                {
                  title:
                    "Bootstrap or other CSS Frameworks for Responsive Design",
                },
              ],
            },
          ],
        },
        {
          title: "Front-end Development with JavaScript Framework",
          submenu: [
            {
              title: "Introduction to Front-end Framework",
              submenu: [
                {
                  title: "Setting up a Project with the Chosen Framework",
                },
                {
                  title: "Components, Props, State Management",
                },
                {
                  title: "Routing & Navigation",
                },
              ],
            },
            {
              title: "Advanced Front-end Concepts",
              submenu: [
                {
                  title:
                    "State Management with Redux (React), Vuex  (Vue.js), or Angular Services",
                },
                {
                  title: "HTTP requests & AJAX using Axios or Fetch API",
                },
              ],
            },
          ],
        },
        {
          title: "Back-end Development with Python Framework",
          submenu: [
            {
              title: "Introduction to Flask or Django",
              submenu: [
                {
                  title: "Overview of Flask or Django Framework",
                },
                {
                  title: "Setting up a basic Project Structure",
                },
              ],
            },
            {
              title: "Database Integration",
              submenu: [
                {
                  title: "Working with Databases",
                  submenu: [
                    {
                      title: "SQLite, MySQL, PostgreSQL",
                    },
                  ],
                },
                {
                  title:
                    "ORM (Object-Relational Mapping) with SQLAlchemy (Flask) or Django ORM",
                },
              ],
            },
            {
              title: "RESTful APIs",
              submenu: [
                {
                  title: "Designing & Implementing REST APIs",
                },
                {
                  title:
                    "Authentication & Authorization using JWT or Session-based Authentication",
                },
              ],
            },
          ],
        },
        {
          title: "Advanced Topics in Python",
          submenu: [
            {
              title: "Concurrency & Asynchronous Programming",
              submenu: [
                {
                  title: "Threading & Multiprocessing",
                },
                {
                  title: "AsyncIO & Asynchronous Programming Techniques",
                },
              ],
            },
            {
              title: "Testing & Debugging",
              submenu: [
                {
                  title: "Unit Testing with unittest or pytest",
                },
                {
                  title: "Debugging Tools & Techniques",
                },
              ],
            },
          ],
        },
        {
          title: "Deployment & DevOps",
          submenu: [
            {
              title: "Deployment",
              submenu: [
                {
                  title:
                    "Deploying Applications using Platforms like Heroku, AWS, or Docker Containers",
                },
                {
                  title: "Setting up Production Environments",
                },
              ],
            },
            {
              title: "Version Control with Git",
              submenu: [
                {
                  title: "Git Basics",
                  submenu: [
                    {
                      title: "Version Control, Branching, Merging",
                    },
                  ],
                },
                {
                  title: "Collaborative Development using GitHub/GitLab",
                },
              ],
            },
          ],
        },
        {
          title: "Advanced Topics",
          submenu: [
            {
              title:
                "Introduction to Machine Learning with Python (using libraries like TensorFlow, scikit-learn)",
            },
            {
              title:
                "Big Data processing with Python (using frameworks like Apache Spark)",
            },
          ],
        },
      ],
    },

    // SQL - Full Stack Course

    {
      courseId:"SQLFullStackSyllabus",
      courseName: "WEB DEVELOPMENT",
      subCourseName: "SQL - Full Stack Course",
      menuItemsData: [
        {
          title: "Introduction to Databases & SQL",
          submenu: [
            {
              title: "Overview of Databases",
              submenu: [
                {
                  title: "Key Concepts in Databases",
                  submenu: [
                    {
                      title:
                        "Data, Database Management System (DBMS), Database Models, Data Independence, Database Architecture, Database Transactions, Data Integrity",
                    },
                  ],
                },
                {
                  title: "Advantages of Using Databases",
                  submenu: [
                    {
                      title:
                        "Data Consistency, Data Security, Data Scalability, Data Recovery, Data Accessibility",
                    },
                  ],
                },
                {
                  title: "Types of Database Users",
                  submenu: [
                    {
                      title:
                        "Database Administrators (DBAs), Database Developers, End Users",
                    },
                  ],
                },
              ],
            },
            {
              title: "Introduction to SQL",
              submenu: [
                {
                  title: "Key Components of SQL",
                  submenu: [
                    {
                      title:
                        "DDL (Data Definition Language), DML (Data Manipulation Language), DCL (Data Control Language), TCL (Transaction Control Language)",
                    },
                  ],
                },

                {
                  title: "Basic SQL Commands",
                  submenu: [
                    {
                      title:
                        "SELECT, INSERT, UPDATE, DELETE, CREATE TABLE, ALTER TABLE, DROP TABLE",
                    },
                  ],
                },
                {
                  title: "Basic SQL Concepts",
                  submenu: [
                    {
                      title:
                        "Constraints, Joins, Indexes, Functions, Transactions",
                    },
                  ],
                },
                {
                  title: "SQL Implementations",
                  submenu: [
                    {
                      title: "SQL Variants, SQL Standards",
                    },
                  ],
                },
                {
                  title: "Practical Applications of SQL",
                  submenu: [
                    {
                      title:
                        "Data Retrieval & Analysis, Data Manipulation, Database Management, Integration with Applications",
                    },
                  ],
                },
              ],
            },
            {
              title: "SQL Standards & Variants",
              submenu: [
                {
                  title: "SQL Standards",
                  submenu: [
                    {
                      title:
                        "ANSI SQL (American National Standards Institute SQL)",
                    },
                    {
                      title:
                        "ISO SQL (International Organization for Standardization SQL)",
                    },
                  ],
                },
                {
                  title: "Popular SQL Variants",
                  submenu: [
                    {
                      title:
                        "MySQL, PostgreSQL, SQLite, Oracle SQL, SQL Server (Microsoft SQL Server)",
                    },
                  ],
                },
              ],
            },
            {
              title: "Installation & Setup of Database Servers",
            },
          ],
        },
        {
          title: "SQL Queries",
          submenu: [
            {
              title: "SELECT Statement",
            },
            {
              title: "Filtering Data (WHERE Clause)",
            },
            {
              title: "Sorting Data (ORDER BY Clause)",
            },
            {
              title: "Limiting Results (LIMIT and OFFSET Clauses)",
            },
            {
              title: "Aggregate Functions (SUM, AVG, COUNT, MIN, MAX)",
            },
            {
              title: "Grouping Data (GROUP BY Clause)",
            },
            {
              title:
                "Joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN)",
            },
          ],
        },
        {
          title: "Advanced SQL Queries",
          submenu: [
            {
              title: "Subqueries",
              submenu: [
                {
                  title: "Types of Subqueries",
                  submenu: [
                    {
                      title: "Scalar Subquery, Row Subquery, Table Subquery",
                    },
                  ],
                },
                {
                  title: "Common Use Cases for Subqueries",
                  submenu: [
                    {
                      title:
                        "Filtering, Sorting & Limiting, Aggregation, Correlated Subqueries",
                    },
                  ],
                },
              ],
            },
            {
              title: "Common Table Expressions (CTEs)",
              submenu: [
                {
                  title: "Syntax of CTE",
                },
                {
                  title: "Key Characteristics of CTEs",
                  submenu: [
                    {
                      title:
                        "Named Temporary Result Set, Usage in Main Query, Recursive CTEs",
                    },
                  ],
                },
                {
                  title: "Benefits of Using CTEs",
                  submenu: [
                    {
                      title:
                        "Improves Readability, Promotes Reusability, Facilitates Recursive Queries",
                    },
                  ],
                },
                {
                  title: "Use Cases for CTEs",
                  submenu: [
                    {
                      title:
                        "Recursive Queries, Data Transformation, Complex Aggregations",
                    },
                  ],
                },
              ],
            },
            {
              title: "Window Functions",
              submenu: [
                {
                  title: "Syntax of Window Functions",
                },
                {
                  title: "Commonly Used Window Functions",
                },
                {
                  title: "Benefits of Window Functions",
                },
                {
                  title: "Use Cases for Window Functions",
                },
              ],
            },
            {
              title: "Advanced Filtering Techniques",
              submenu: [
                {
                  title:
                    "Pattern Matching with LIKE, Regular Expressions (Regex), Range Queries, NULL & NOT NULL, Combining Conditions with AND, OR, NOT, IN & NOT IN, Subqueries, Exists & NOT Exists",
                },
              ],
            },
            {
              title: "Derived Tables",
              submenu: [
                {
                  title: "Syntax of Derived Tables",
                },
                {
                  title: "Benefits of Derived Tables",
                },
                {
                  title: "Use Cases for Derived Tables",
                },
              ],
            },
          ],
        },

        {
          title: "Database Design & Normalization",
          submenu: [
            {
              title: "Database Design Principles",
            },
            {
              title: "Entity-Relationship (ER) Diagrams",
            },
            {
              title: "Normalization (1NF, 2NF, 3NF)",
            },
            {
              title: "Denormalization",
            },
            {
              title: "Indexes & Performance Optimization",
            },
          ],
        },
        {
          title: "Transactions & Concurrency Control",
          submenu: [
            { title: "ACID Properties" },
            {
              title:
                "Transaction Management (BEGIN TRANSACTION, COMMIT, ROLLBACK)",
            },
            { title: "Isolation Levels & Locking Mechanisms" },
            { title: "Deadlock Handling" },
          ],
        },
        {
          title: "Stored Procedures & Functions",
          submenu: [
            { title: "Creating & Calling Stored Procedures" },
            { title: "Input & Output Parameters" },
            { title: "Variables & Control Flow" },
            { title: "Error Handling" },
            { title: "Functions vs. Procedures" },
          ],
        },
        {
          title: "Triggers & Views",
          submenu: [
            {
              title: "Creating Triggers",
            },
            {
              title: "Types of Triggers",
              submenu: [
                {
                  title: "BEFORE, AFTER",
                },
              ],
            },
            {
              title: "Views",
              submenu: [
                {
                  title: "Simple Views, Complex Views",
                },
                {
                  title: "Materialized Views",
                },
              ],
            },
          ],
        },
        {
          title: "SQL in Application Development",
          submenu: [
            {
              title: "Integrating SQL with Programming Languages with Python",
            },
            {
              title: "ORM (Object-Relational Mapping) Concepts",
            },
            {
              title: "Executing SQL Statements in Code",
            },
            {
              title: "Security Considerations",
            },
          ],
        },
        {
          title: "NoSQL Databases",
          submenu: [
            {
              title: "Introduction to NoSQL",
            },
            {
              title: "Types of NoSQL Databases",
              submenu: [
                {
                  title: "Document, Key-Value, Columnar, Graph",
                },
              ],
            },
            {
              title: "Comparison with SQL Databases",
            },
            {
              title: "Using NoSQL Databases in Applications",
            },
          ],
        },
        {
          title: "Integration with Frontend & Backend",
          submenu: [
            {
              title: "Using SQL with Backend Frameworks",
              submenu: [
                {
                  title: "Node.js, Django",
                },
              ],
            },
            {
              title: "RESTful API Design",
            },
            {
              title: "Fetching & Displaying Data in Frontend",
              submenu: [
                {
                  title: "React, Angular",
                },
              ],
            },
            {
              title: "Handling Asynchronous Operations",
            },
          ],
        },
        {
          title: "Advanced Database Topics",
          submenu: [
            {
              title: "Full-Text Search",
            },
            {
              title: "JSON & XML Data Handling & Geospatial Data Handling",
            },
            {
              title: "Performance Tuning & Optimization",
            },
            {
              title: "Backup & Recovery Strategies",
            },
          ],
        },
        {
          title: "Project Work",
          submenu: [
            {
              title: "Building a Complete Database-Driven Application",
            },
            {
              title: "Designing Database Schema",
            },
            {
              title: "Implementing SQL Queries & Stored Procedures",
            },
            {
              title: "Integration with Backend & Frontend Components",
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
        imageUrl={webDev}
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

      <CareerAssistant/>

      <GreensFooter />

    </>
  );
};

export default DataAnlyticsPage;
