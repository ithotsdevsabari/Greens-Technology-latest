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
import cta_img from "/public/img/dataanalytics/dataanalytics_chart_green.webp"
import cwoBgImg1 from "../../../public/img/learn1.png";
import cwoBgImg2 from "../../../public/img/learn2.png";
import cwoBgImg3 from "../../../public/img/learn3.png";
import cwoBgImg4 from "../../../public/img/learn4.png";
import cwoBgImg5 from "../../../public/img/learn5.png";
import cwoBgImg6 from "../../../public/img/learn6.png";
import CourseSyllabus from "@/components/Atom/CourseSyllabus";
import GreensFooter from "@/components/Layouts/GreensFooter";
import { title } from "process";



const data =  {
    mainBannercourseName:"Data Analytics",
    mainBannerBreadCrumbLink:"",
    mainBannercourseList:[
        {
            id: "1",
            subCourseName: "Power Automate",
            subCoursePrice: "395",
            subCourseLink: "PowerAutomateSyllabus" 
        },
        {
            id: "2",
            subCourseName: "Power Automate",
            subCoursePrice: "395",
            subCourseLink: "PowerAutomateSyllabus" 
        },
        {
            id: "3",
            subCourseName: "SQL",
            subCoursePrice: "495",
            subCourseLink: "#SQLCourseSyllabus" 
        },
        {
            id: "4",
            subCourseName: "Tableau",
            subCoursePrice: "495",
            subCourseLink: "#TableauCourseSyllabus" 
        },
        {
            id: "5",
            subCourseName: "Power BI",
            subCoursePrice: "495",
            subCourseLink: "#PowerBICourseSyllabus" 
        },
        {
            id: "6",
            subCourseName: "Python",
            subCoursePrice: "550",
            subCourseLink: "#PythonCourseSyllabus" 
        }
    ],
    mainBannermasterCoursePrice:"1995",
    mainBannerCtaHandsOnTraining:"90",
    mainBannerCtaHandsonTrainingProject:"2",
    mainBannerCtaPracticalAssignment:"50",
    chartgraphCourseName:"Data Analytics",
    chartJobCount:"9000" ,
    chartImageUrl:cta_img ,
    chartImageAlt:"Job Oppertunity Grap" ,
    chartGraphCourseSkill:"data analysis" ,
    upComingCourse:[
        {
        id: "1",
        courseDate: "Sat 15 Jun 24",
        courseName: "Data Analytics Master 1"
    },
    {
        id: "2",
        courseDate: "Sun 16 Jun 24",
        courseName: "Data Analytics Master 2"
    },
    {
        id: "3",
        courseDate: "Mon 17 Jun 24",
        courseName: "Power BI"
    },
    {
        id: "4",
        courseDate: "Tue 18 Jun 24",
        courseName: "Python"
    },
    {
        id: "5",
        courseDate: "Fri 19 Jun 24",
        courseName: "Power Automation"
    }
],
aluminiFeedbackData:[
    {
        id:"1" ,   
        name: "Shashikala Maurya",
        designation:"" ,
        feedbackText:"Green's Technology offered an outstanding Data Science course. The instructors were highly knowledgeable, simplifying complex concepts effectively. Engaging in hands-on projects greatly enhanced my confidence. I received exceptional support from the mentor, Godwin. I wholeheartedly recommend it to anyone eager to explore Data Science!.....", 
        company:"" ,
        rating: 5
    },
    {
        id:"2" , 
        name: "Rggdharan Dharan",
        designation:"" ,
        feedbackText:"Enrolling in Greens technology web development course was a decision I don't regret. The curriculum was comprehensive, covering essential topics like HTML, CSS, JavaScript, and GitHub. Building my own website was a satisfying conclusion to the course. This experience has equipped me with the skills and confidence for a future in web development.", 
        company:"" ,
        rating: 5
    },
    {
        id:"3"  ,
        name: "nandhini 26",
        designation:"" ,
        feedbackText:"I usually don't write reviews. I chose Greens Technologies through a friend. I Attended DevOps and AWS courses at Greens Technology.The trainer was exceptionally helpful in clarifying concepts, making it the best training center. The emphasis on practical, live projects rather than just theory was commendable. Highly recommended.", 
        company:"" ,
        rating: 5
    },
    {
        id:"4" , 
        name: "Kym S",
        designation:"" ,
        feedbackText:"I took courses in Networking and Azure SQL Database. My instructor, Dhivakar, was really knowledgeable and the best. He kept the class interested and made sure we understood everything in each module. I want to thank Dhivakar for his great support during the learning process.", 
        company:"" ,
        rating: 5
    },

],
faqList:[
    {
        id:"1",
        uuid:"a",
        question:"What are the basics required to learn DATA ANALYTICS?",
        answer:"There are no prerequisites for taking the online Data Analytics course. Basic knowledge of data analysis, statistics, and probability are beneficial to take Data Analytics online courses.",
    },
    {
        id:"2",
        uuid:"b",
        question:"Will I be helped by Greens technologies with placement after completion of course?",
        answer:"Absolutely, Greens technologies provide you with the 100% placement assistance. We teach our students by conducting group discussions and mock interviews. Apart from it, we also provide soft skill support to boost the confidence level of the students.",
    },
    {
        id:"3",
        uuid:"c",
        question:"Is there an online training module that is available for this course?",
        answer:"Unquestionably, online training programs are available as well as accessible. You as a candidate have the entire liberty to choose the timings that suit you. Thus, it is highly convenient and flexible.",
    },
    {
        id:"4",
        uuid:"d",
        question:"How effective is the online training program?",
        answer:"We have hired experts who use an extensive set of online techniques and tools for making online training experience satisfying. Our instructors will set a time that is convenient for the students. In an online setting, the students can engage, view, analyze queries related to presentations, and engage with learning resources. You have to submit all assignments online within a specified time period.",
    },
    {
        id:"5",
        uuid:"e",
        question:"What is the average salary of a DATA ANALYTICS professional?",
        answer:"The DATA ANALYTICS professionals earn an average salary between $60000 to $330000 per annum in the Australia.",
    },
    {
        id:"6",
        uuid:"f",
        question:"Is a career in Data Analytics a good choice?",
        answer:"Skilled data analysts are some of the most important professionals in the world. Because the demand is so large, and the supply of people who can truly do this job well is so finite, data analysts get huge salaries and excellent perks, even at beginner-level.",
    },
    {
        id:"7",
        uuid:"g",
        question:"Define the roles and responsibilities of a certified DATA ANALYTICS professionals?",
        answer:"*Defining data, analyzing results using statistical techniques. Establishing and implementing data analysis, data gathering systems, and other methods that develop analytical efficiency and quality. Getting data from primary or secondary data sources and managing databases.",
    },
    {
        id:"8",
        uuid:"h",
        question:"How long does it take to study and become a DATA ANALYTICS certified professional?",
        answer:"It entirely depends upon each individual's efforts, preparation strategy, and time invested. However, it will take nearly 1 month if an aspirant has an elementary knowledge and background of SQL. It will take around 2 to 3 months if an aspirant is a fresher.",
    },

],
cwoList:[
    {
        id:"1" ,
  cwoCourseBgImage:cwoBgImg1,
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
        id:"2" ,
  cwoCourseBgImage:cwoBgImg2,
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
        id:"3" ,
  cwoCourseBgImage:cwoBgImg3,
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
        id:"4" ,
  cwoCourseBgImage:cwoBgImg4,
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
        id:"5" ,
  cwoCourseBgImage:cwoBgImg5,
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
        id:"6" ,
  cwoCourseBgImage:cwoBgImg6,
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
        id:"7" ,
  cwoCourseBgImage:cwoBgImg1,
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
courseDetailsList :[
  {
   courseName:"DATA ANALYTICS",
   subCourseName:"Power Automate Syllabus",
  //  menuItemsData : [
  //         {
  //           title: 'Creating Automatic Email to Gmail Account along with an attachment Stored in OneDrive',
  //           submenu:[{
  //             title:"Creating Automatic New Group using Forms",
  //             submenu:"sjkbdksbd"
  //           },
  //         {
  //               title:"sadsfgsvsfv"
  //         }
  //         ]
  //         },
  //         {
  //           title:"Creating Automatic New Group using Forms"
  //         },
  //         {
  //           title:"Creating Automatic Mails for Birthday and Wedding Wishes"
  //         },
  //         {
  //           title:'Creating Power BI Alert Notification to Microsoft Teams, Outlook'
  //         },
  //         {
  //           title:"Refreshing Dataset"
  //         },
  //         {
  //           title:"Support Team In case of Some Issues or Errors."
  //         }
       
  //  ]
  menuItemsData: [
    {
      title: 'Introduction to Databases & SQL',
      submenu: [
        {
          title: 'Overview of Databases',
          submenu: [
            {
              title: 'Key Concepts in Databases',
              submenu: [
                {
                  title: 'Data',  },
                  {
                    title: 'Database Management System (DBMS)',
                  },
                  {
                    title: 'Database Models',
                  },
                  {
                    title: 'Data Independence',
                  },
                  {
                    title:'Database Architecture',
                  },
                  {
                    title: 'Database Transactions',
                  },
                  {
                    title:'Data Integrity'
                  }
               
              ]
            },
            {
              title: 'Advantages of Using Databases',
              submenu: [
                {title: 'Data Consistency'},
                {title:'Data Security'},
                {title: 'Data Scalability'},
                {title:'Data Recovery'},
                {title:'Data Accessibility'},
              ]
            },
            {
              title: 'Types of Database Users',
              submenu: [
                {title:  'Database Administrators (DBAs)'},
                {title: 'Database Developers'},
                {title: 'End Users'},
              ]
            }
          ]
        },
        // {
        //   title: 'Introduction to SQL',
        //   submenu: [
        //     {
        //       title: 'Key Components of SQL',
        //       submenu: [
        //         'DDL (Data Definition Language)',
        //         'DML (Data Manipulation Language)',
        //         'DCL (Data Control Language)',
        //         'TCL (Transaction Control Language)'
        //       ]
        //     },
        //     {
        //       title: 'Basic SQL Commands',
        //       submenu: [
        //         'SELECT',
        //         'INSERT',
        //         'UPDATE',
        //         'DELETE',
        //         'CREATE TABLE',
        //         'ALTER TABLE',
        //         'DROP TABLE'
        //       ]
        //     },
        //     {
        //       title: 'Basic SQL Concepts',
        //       submenu: [
        //         'Constraints',
        //         'Joins',
        //         'Indexes',
        //         'Functions',
        //         'Transactions'
        //       ]
        //     },
        //     {
        //       title: 'SQL Implementations',
        //       submenu: [
        //         'SQL Variants',
        //         'SQL Standards'
        //       ]
        //     },
        //     {
        //       title: 'Practical Applications of SQL',
        //       submenu: [
        //         'Data Retrieval & Analysis',
        //         'Data Manipulation',
        //         'Database Management',
        //         'Integration with Applications'
        //       ]
        //     }
        //   ]
        // },
        // {
        //   title: 'SQL Standards & Variants',
        //   submenu: [
        //     {
        //       title: 'SQL Standards',
        //       submenu: [
        //         'ANSI SQL (American National Standards Institute SQL)',
        //         'ISO SQL (International Organization for Standardization SQL)'
        //       ]
        //     },
        //     {
        //       title: 'Popular SQL Variants',
        //       submenu: [
        //         'MySQL',
        //         'PostgreSQL',
        //         'SQLite',
        //         'Oracle SQL',
        //         'SQL Server (Microsoft SQL Server)'
        //       ]
        //     }
        //   ]
        // }
      ]
    }
  ]
  
  }
 
]

   
}

const DataAnlyticsPage = (()=>{
    return(
    <>
     <Navbar />

     <MainBanner 
     courseName={data.mainBannercourseName} 
     breadCrumbLink={data.mainBannerBreadCrumbLink} 
     courseList={data.mainBannercourseList} 
     masterCoursePrice={data.mainBannermasterCoursePrice}/>

     <MainBannerCta 
     HandsOnTraining={data.mainBannerCtaHandsOnTraining} 
     HandsonTrainingProject={data.mainBannerCtaHandsonTrainingProject} 
     PracticalAssignment={data.mainBannerCtaPracticalAssignment}/>

     <Chart 
     graphCourseName={data.chartgraphCourseName} 
     jobCount={data.chartJobCount} 
     imageUrl={data.chartImageUrl} 
     imageAlt={data.chartImageAlt} 
     graphCourseSkill={data.chartGraphCourseSkill} 
     courseName={data.chartgraphCourseName}/>

     <BookFreeDemo/>

     <CourseWeOffer cwoList={data.cwoList} cwoCourseSyllabusLink={""}/>

     <CourseDetail courseDetailsList={data.courseDetailsList}/>

     <UpcomingCourses courseSchedulelist={data.upComingCourse} courseName={data.mainBannercourseName}/>

     <FaqList faqList={data.faqList}/>

     <AluminiFeedBack courseName={data.mainBannercourseName} aluminiFeedbackData={data.aluminiFeedbackData}/>

     <Cta/>

     <CareerAssistant/>

     <GreensFooter />
    </>
    )
});

export default DataAnlyticsPage;