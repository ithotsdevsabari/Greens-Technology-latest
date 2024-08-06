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
import GreensFooter from "@/components/Layouts/GreensFooter";
import { title } from "process";

const data = {
  mainBannercourseName: "Data Analytics",
  mainBannerBreadCrumbLink: "",
  mainBannercourseList: [
    {
      id: "1",
      subCourseName: "Power Automate",
      subCoursePrice: "395",
      subCourseLink: "PowerAutomateSyllabus",
    },
    {
      id: "2",
      subCourseName: "Power Automate",
      subCoursePrice: "395",
      subCourseLink: "PowerAutomateSyllabus",
    },
    {
      id: "3",
      subCourseName: "SQL",
      subCoursePrice: "495",
      subCourseLink: "#SQLCourseSyllabus",
    },
    {
      id: "4",
      subCourseName: "Tableau",
      subCoursePrice: "495",
      subCourseLink: "#TableauCourseSyllabus",
    },
    {
      id: "5",
      subCourseName: "Power BI",
      subCoursePrice: "495",
      subCourseLink: "#PowerBICourseSyllabus",
    },
    {
      id: "6",
      subCourseName: "Python",
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
    {
      courseName: "DATA ANALYTICS",
      subCourseName: "Power Automate Syllabus",

      menuItemsData: [
        {
          title:
            "Creating Automatic Email to Gmail Account along with an attachment Stored in OneDrive",
        },
        {
          title: "Creating Automatic New Group using Forms",
        },
        {
          title: "Creating Automatic Mails for Birthday and Wedding Wishes",
        },
        {
          title:
            "Creating Power BI Alert Notification to Microsoft Teams, Outlook",
        },
        {
          title: "Refreshing Dataset",
        },
        {
          title: "Support Team In case of Some Issues or Errors.",
        },
      ],
    },
    {
      courseName: "DATA ANALYTICS",
      subCourseName: "Power Apps Syllabus",

      menuItemsData: [
        {
          title: "Introduction",
        },
        {
          title: "Installation",
        },
        {
          title: "Get Started with Developer Environment",
        },
        {
          title: "Variables",
        },
        {
          title: "Creating Automatic Mails for Birthday and Components",
          submenu: [
            {
              title: "Canvas Apps",
            },
            {
              title: "Model-Driven Apps",
            },
            {
              title: "Data Sources",
            },
            {
              title: "Controls",
            },
            {
              title: "Expressions",
            },
            {
              title: "Screens",
            },
            {
              title: "Data Integration",
            },
          ],
        },
        {
          title: "Dynamic Assignment",
          submenu: [
            {
              title:
                "Using Formulas, Variables, Collections, Contextual Information, Controls and Properties",
            },
            {
              title: "Responding to user Interactions",
            },
          ],
        },
        {
          title:
            "Functions (Data, Control, Math, Text, Logical, Date and Time, Input and Interaction)",
        },
        {
          title:
            "Formulas (onselect, onclick, upper, lower, proper, launch, navigation)",
        },
        {
          title: "Creating Canvas App Using SQL & SharePoint",
        },
        {
          title: "Data Validation Using SQL & SharePoint",
        },
        {
          title: "Creating App using forms and gallery",
        },
        {
          title: "Creating CRUD operation (Create, Read, Update, Delete)",
        },
        {
          title: "Creating Cascading Dropdown",
        },
        {
          title: "Integrating Power BI with Power Apps",
          submenu: [
            {
              title: "Creating Power BI Report",
            },
            {
              title: "Publish the Report to Power BI Service",
            },
            {
              title: "Generate Embed Code",
            },
            {
              title: "Embed Power BI Report in Power Apps",
            },
            {
              title: "Configure Interactivity",
            },
            {
              title: "Test and Publish",
            },
          ],
        },
      ],
    },
    {
      courseName: "DATA ANALYTICS",
      subCourseName: "SQL Syllabus",

      menuItemsData: [
        {
          title: "Introduction",
        },
        {
          title: "Installation",
        },
        {
          title: "Creating Database and Tables",
        },
        {
          title: "Data Types",
        },
        {
          title: "Operators",
        },
        {
          title: "Case Manipulation Functions (Upper (), Lower (), INITCAP ())",
        },
        {
          title:
            "Character manipulation functions (Substring (), Concat (), Len(), Trim(), Replace() )",
        },
        {
          title: "Functions (Date, Null, Number, General)",
        },
        {
          title:
            "Aggregate /Group Functions (Count (), Sum(), AVG(),MIN(),MAX(),Group By, Having)",
        },
        {
          title: "Analytical Functions",
        },
        {
          title:
            "Commands (Date Definition, Data Manipulation, Transaction control, Data Query Language Commands)",
        },
        {
          title: "Joins (INNER, LEFT, RIGHT, FULL, CROSS)",
        },
        {
          title:
            "Constraints (NOT NULL, PRIMARY, UNIQUE, FOREIGN, DEFAULT, INDEX, CHECK)",
        },
        {
          title: "Set Operators (Union, Union All, Minus, Intersect)",
        },
        {
          title: "View and Materialized view",
        },
        {
          title: "Sub-Queries",
        },
        {
          title:
            "Pseudo Columns (ROWID, ROWNUM, LEVEL, CONNECT_BY_ISLEAF, SYS_GUID ())",
        },
      ],
    },
    {
      courseName: "DATA ANALYTICS",
      subCourseName: "Tableau Syllabus",

      menuItemsData: [
        {
          title: "Tableau Interface Demo, Products, Desktop",
        },
        {
          title: "Data Types in Tableau",
        },
        {
          title: "Types of Connections",
        },
        {
          title: "Dimensions & Measures",
        },
        {
          title: "Discrete & Continuous",
        },
        {
          title: "Tableau File Extensions",
        },
        {
          title: "Groups, Combine, Set, Parameter, Combined Set, Hierarchy",
        },
        {
          title: "Filters",
          submenu: [
            {
              title:
                "Data Source, Extract, Dimension, Measure, Cascading, Context",
            },
          ],
        },
        {
          title: "Functions",
          submenu: [
            {
              title:
                "Number, Aggregate, Logical, String, Table Calculations, Window, Date, Quick Table Calculation, Null, Analytics",
            },
          ],
        },
        {
          title: "LOD-Level of Details, Bins",
        },
        {
          title: "Types Of Axis, Charts",
        },
        {
          title: "Maps Filters",
        },
        {
          title: "Dashboards",
          submenu: [
            {
              title: "Basic & Advanced Dashboard Preparation",
            },
          ],
        },
        {
          title: "Dashboard Actions",
        },
        {
          title: "Data Modelling, Relationship, Data Blending",
        },
        {
          title: "Joining: Cross Data Base Join",
        },
        {
          title: "Tableau Server/ Online",
        },
        {
          title: "Embedded & Published Data Source",
        },
        {
          title: "Different Site Roles & User Controls",
        },
        {
          title:
            "RLS (Row Level Security) Alert, Subscription, Metrics Empty Extract",
        },
      ],
    },
    {
      courseName: "DATA ANALYTICS",
      subCourseName: "Power BI Syllabus",

      menuItemsData: [
        {
          title: "Introduction",
        },
        {
          title: "Installation",
        },
        {
          title: "Data Types",
        },
        {
          title: "Power Query Editor",
          submenu: [
            {
              title:
                "Data Source Connectivity (Getting or importing data from various source like Files and databases)",
            },
            {
              title:
                "Data Transformation (Renaming Columns, Changing Data types, Removing Duplicates, Filtering, Sorting and Merging, Pivoting and unpivoting data)",
            },
            {
              title: "Error Handling",
            },
            {
              title: "Data Loading",
            },
          ],
        },
        {
          title: "Data Modeling",
        },
        {
          title: "DAX Functions",
          submenu:[
            {
              title:"Aggregation Function: Sum, Average, Count"
            },
            {
              title:"Data and Time Function: Today, Year, DateAdd"
            },
            {
              title:"Logical Function: If, AND, OR, NOT"
            },
            {
              title:"Filter Function: Filter, All"
            },
            {
              title:"Statistical Function: Max, Min, Median"
            },
            {
              title:"Text Function: Concatenate, Left, Right, Mid"
            },
            {
              title:"Information Function: ColumnName, Columns, DataTable, ISBLANK, ISCOLUMN, ISERROR, ISEMPTY)"
            },
            {
              title:"Time Intelligence Function"
            },

          ]
        },
        {
          title: "Power BI Visualization",
          submenu:[
            {
              title:"Dashboards"
            },
            {
              title:"Formatting"
            },
          ]
        },
        {
          title: "Power BI Service",
          submenu:[
            {
              title:"Publishing Reports"
            },
            {
              title:"Dashboard Creation"
            },
            {
              title:"Data Gateway"
            },
            {
              title:"Row-Level Security"
            },
            {
              title:"Formatting"
            },
          ]
        },
      ],
    },
    {
      courseName: "DATA ANALYTICS",
      subCourseName: "Python Syllabus",

      menuItemsData: [
        {
          title: 'Introduction'
        },
        {
          title: 'Installation (Python, Anaconda and Jupyter Notebook)'
        },
        {
          title: 'Compilation Vs Interpretation'
        },
        {
          title: 'First Basic Program (“Hello World”)'
        },
        {
          title: 'Variables'
        },
        {
          title: 'Data Types'
        },
        {
          title: 'Operators'
        },
        {
          title: 'Function And Methods'
        },
        {
          title: 'Conditional Statements (if, if-else, elif)'
        },
        {
          title: 'Loops (while, For)'
        },
        {
          title: 'Data Structure (List, Tuple, Set, Dictionary)'
        },
        {
          title: 'Iteration Tools (Map, Filter)'
        },
        {
          title: 'Regular Expressions'
        },
        {
          title: 'Packages, Modules and PIP'
        },
        {
          title: 'Exceptions'
        },
        {
          title:"OOPS",
          submenu:[
            {
              title:"Classes And Objects"
            },
            {
              title:"Constructor"
            },
            {
              title:"Attributes and Methods"
            },
            {
              title:"Inheritance"
            },
            {
              title:"Encapsulation"
            },
            {
              title:"Polymorphism"
            }
          ]
        },
        {
          title:"Anonymous Function (Lambda)"
        },
        {
          title:"Python Libraries (NumPy, Pandas, Matplotlib"
        },
        {
          title:"Python Libraries (NumPy, Pandas, Matplotlib"
        }
      ],
    },
  ],
};

const DataAnlyticsPage = () => {
  return (
    <>
      <Navbar />

      {/* <MainBanner
        courseName={data.mainBannercourseName}
        breadCrumbLink={data.mainBannerBreadCrumbLink}
        courseList={data.mainBannercourseList}
        masterCoursePrice={data.mainBannermasterCoursePrice}
      /> */}

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
