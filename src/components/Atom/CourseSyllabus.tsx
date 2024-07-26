"use client";
import React, { useState } from "react";
import useSmoothScroll from "../Atom/SmoothScroll";
import MenuItems from "./ListItems";

interface InputProps{
    courseDetails:[];
}

const CourseDetail: React.FC<InputProps> = ({}) => {

  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70);
//   const menuItemsData = [
//     {
//       title: 'Home',
//       submenu: [
//         {
//           title: 'Digital Marketing',
//           submenu: [
//             { title: 'Search Engine Optimization' },
//             { title: 'Social Media Marketing' },
//             // ... other digital marketing items
//           ],
//         },
//         {
//           title: 'Web Services',
//           submenu: [
//             { title: 'Web Designing' },
//             { title: 'Web Designing Portfolio' },
//             // ... other web services items
//           ],
//         },
//         // ... other service categories
//       ],
//     },
//     {
//       title: 'About Us',
//       submenu: [
//         {
//           title: 'Digital Marketing',
//           submenu: [
//             { title: 'Search Engine Optimization' },
//             { title: 'Social Media Marketing' },
//             // ... other digital marketing items
//           ],
//         },
//         {
//           title: 'Web Services',
//           submenu: [
//             { title: 'Web Designing' },
//             { title: 'Web Designing Portfolio' },
//             // ... other web services items
//           ],
//         },
//         // ... other service categories
//       ],
//     },
//     {
//       title: 'Services',
//       submenu: [
//         {
//           title: 'Digital Marketing',
//           submenu: [
//             { title: 'Search Engine Optimization' },
//             { title: 'Social Media Marketing' },
//             // ... other digital marketing items
//           ],
//         },
//         {
//           title: 'Web Services',
//           submenu: [
//             { title: 'Web Designing' },
//             { title: 'Web Designing Portfolio' },
//             // ... other web services items
//           ],
//         },
//         // ... other service categories
//       ],
//     },
//     {
//         title: 'Home',
//       },
//       {
//         title: 'About Us',
//       },
//       {
//         title: 'Services',
//         submenu: [
//           {
//             title: 'Digital Marketing',
//             submenu: [
//               { title: 'Search Engine Optimization' },
//               { title: 'Social Media Marketing' },
//               // ... other digital marketing items
//             ],
//           },
//           {
//             title: 'Web Services',
//             submenu: [
//               { title: 'Web Designing' },
//               { title: 'Web Designing Portfolio' },
//               // ... other web services items
//             ],
//           },
//           // ... other service categories
//         ],
//       },
//     // ... other top-level menu items
//   ];

const courseDetailsList = [
    {
     courseName:"DATA ANALYTICS",
     subCourseName:"Power Automate Syllabus",
     menuItemsData : [
            {
              title: 'Home',
              submenu: [
                {
                  title: 'Digital Marketing',
                  submenu: [
                    { title: 'Search Engine Optimization' },
                    { title: 'Social Media Marketing' },
                    // ... other digital marketing items
                  ],
                },
                {
                  title: 'Web Services',
                  submenu: [
                    { title: 'Web Designing' },
                    { title: 'Web Designing Portfolio' },
                    // ... other web services items
                  ],
                },
                // ... other service categories
              ],
            },
            {
                title: 'Home',
                submenu: [
                  {
                    title: 'Digital Marketing',
                    submenu: [
                      { title: 'Search Engine Optimization' },
                      { title: 'Social Media Marketing' },
                      // ... other digital marketing items
                    ],
                  },
                  {
                    title: 'Web Services',
                    submenu: [
                      { title: 'Web Designing' },
                      { title: 'Web Designing Portfolio' },
                      // ... other web services items
                    ],
                  },
                  // ... other service categories
                ],
              },
              {
                title: 'Home',
                submenu: [
                  {
                    title: 'Digital Marketing',
                    submenu: [
                      { title: 'Search Engine Optimization' },
                      { title: 'Social Media Marketing' },
                      // ... other digital marketing items
                    ],
                  },
                  {
                    title: 'Web Services',
                    submenu: [
                      { title: 'Web Designing' },
                      { title: 'Web Designing Portfolio' },
                      // ... other web services items
                    ],
                  },
                  // ... other service categories
                ],
              },
     ]
    },
    {
        courseName:"DATA ANALYTICS",
        subCourseName:"Power Automate Syllabus",
        menuItemsData : [
               {
                 title: 'Home',
                 submenu: [
                   {
                     title: 'Digital Marketing',
                     submenu: [
                       { title: 'Search Engine Optimization' },
                       { title: 'Social Media Marketing' },
                       // ... other digital marketing items
                     ],
                   },
                   {
                     title: 'Web Services',
                     submenu: [
                       { title: 'Web Designing' },
                       { title: 'Web Designing Portfolio' },
                       // ... other web services items
                     ],
                   },
                   // ... other service categories
                 ],
               },
        ]
       }
   
]
console.log("hhhhhhhhhhh",courseDetailsList)
  return (
	
        <section className="mb-8 py-4">
          <div className="container"> 
            <div className="mb-5">            
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Course Syllabus </span> 
                    </h2>
            </div>

            {/* Course details */}
            {
                courseDetailsList?.map((result:any,index:number)=>{
                   return(
                    <div id="PowerAutomateSyllabus" className="course-box shadow-box mb-5 py-5" key={""}>
                    <div className="row"> 
                        <h2 className="text-uppercase text-center fs-4 mb-1">{result.courseName}</h2> 
                        <h2 className="text-center fs-5"> 
                            <span className="d-block text-grad mb-2"> {result.subCourseName} </span> 
                        </h2>                    
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="">                    
                                <div className="mt-1 fs-medium">
                                    <div className="top_banner_list">
                                    <MenuItems menuItemsData={result.menuItemsData} />
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>  
                </div>
                   )
                })
            }
          </div>
        </section>
    );
}

export default CourseDetail;