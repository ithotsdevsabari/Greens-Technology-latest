"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import training from "../../../public/img/banner1.jpg";
import MasterIcon from "../../../public/img/icons/master.png";
import Overlay from "../Atom/Overlay";
import ContactUs from "../Common/Emailjs";


const MainBanner: React.FC = () => {

  const [toggler, setToggler] = useState(false);
  const [isVisibleOverlay,setIsVisibleOverlay] = useState(false);

  const handleOpenOverlay = (()=>{
       setIsVisibleOverlay(true)
  });
  const handleCloseOverlay = (()=>{
      setIsVisibleOverlay(false)
  });
  
  return (
		<>  

      <div>
      {isVisibleOverlay && (
        <Overlay onClose={handleCloseOverlay}><ContactUs/></Overlay>
      )}
      </div>

      <div className="">
        <div className="banner-gradient">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mt-7 mt-lg-9">
                  <div
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay="100">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/" className="ps-2 text-gray fs-4-0">Home</Link></li>
                            <li className="breadcrumb-item">
                                <Link href="" className="ps-2 text-gray fs-4-0"> Courses </Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                <Link href="" className="ps-2 text-black fs-4-0"> Data Analytics Training</Link></li>
                        </ol>
                    </nav> 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="pt-1 pb-3">
              <div className="container bg-white rounded-6">                

                <div className="row">

                  <div className="col-lg-7 col-xl-8 bg-white rounded-7 ps-3 ps-xl-4  ps-xxl-5"> 
                    <div className="main-banner-content">

                      <div className="pb-4">

                        <div className="row">

                          <div className="col-lg-4 col-xl-4 col-xxl-3">
                            <p className="yellow-box px-2 px-xxl-2 w-100 text-center mb-3"> 
                              <span className="me-1 d-inline-block"> 
                              <Image src={MasterIcon} alt="add" className="ms-auto" width={20} height={20} /> 
                              </span> 
                              <span className="ms-1 d-inline-block text-white">Live Tutoring</span> 
                            </p> 
                          </div>

                          <div className="col-lg-4 col-xl-4 col-xxl-4">
                            <p className="green-box px-2 px-xxl-3 w-100 text-center mb-3 d-flex justify-content-center align-items-center"> 
                              {/* <i className="fa-solid fa-star fs-4-0 me-2"></i>    */}
<svg
    height="24px"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
            c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
            c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
            c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
            s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
            s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
          fill="#063732"
        />
      </g>
    </g>
  </svg>
                             <span className="d-flex justify-content-center align-items-center">4.9 - 4980 Ratings</span> 
                            </p>
                          </div>

                          <div className="col-lg-4 col-xl-4 col-xxl-3">
                            <p className="green-box px-2 px-xxl-2 w-100 text-center mb-3">
                              10K + Learners</p>
                          </div>

                        </div>

                      </div>
                      
                      <h2 className="fs-30 mb-1">
                      Your Path to Becoming a Certified Data Analytics Professional
                      </h2>

                      <h1 className=" fs-5-0 mb-3 text-grad fw-semibold fs-49 mt-1" >
                        Data Analytics Course
                      </h1>
                      
                      <div className="main-banner-content fs-medium">
                        <div className="top_banner_list2">
                          <ul>                            
                            <li className="d-block mb-2 d-flex justify-content-start">
                            <Link href="#PowerAutomateSyllabus" className="text-banner" >
                              <svg
    height="24px"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  className="me-2"
  >
    <g>
      <g>
        <path
          d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
            c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
            c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
            c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
            s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
            s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
          fill="#E7B40E"
          
        />
      </g>
    </g>
            </svg>
                              Power Automate <span className="text-green-mid ps-2"> $395</span>
                              </Link>
                              </li>
                            
                            <li className="d-block mb-2 d-flex justify-content-start">
                            <Link href="#PowerAppsSyllabus" className="text-banner" >
                              <svg
    height="24px"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  className="me-2"
  >
    <g>
      <g>
        <path
          d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
            c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
            c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
            c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
            s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
            s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
          fill="#E7B40E"
          
        />
      </g>
    </g>
  </svg>
                              Power Apps  <span className="text-green-mid ps-2"> $495</span>
                              </Link></li>
                            
                            <li id="" className="d-block mb-2 d-flex justify-content-start">
                            <Link href="#SQLCourseSyllabus" className="text-banner" >
                              <svg
    height="24px"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  className="me-2"
  >
    <g>
      <g>
        <path
          d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
            c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
            c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
            c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
            s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
            s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
          fill="#E7B40E"
          
        />
      </g>
    </g>
  </svg>
                              SQL <span className="text-green-mid ps-2"> $495</span>
                              </Link></li>

                            <li id="" className="d-block mb-2 d-flex justify-content-start"> 
                            <Link href="#TableauCourseSyllabus" className="text-banner" >                           
  <svg
    height="24px"
    id="Layer_1"
    viewBox="0 0 24 24"
    width="24px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  className="me-2"
  >
    <g>
      <g>
        <path
          d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
            c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
            c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
            c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
            s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
            s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
          fill="#E7B40E"          
        />
      </g>
    </g>
  </svg>
                                Tableau <span className="text-green-mid ps-2"> $495</span>
                                </Link>  </li>

                            <li id="" className="d-block mb-2 d-flex justify-content-start">
                            <Link href="#PowerBICourseSyllabus" className="text-banner" >
                              <svg
                                  height="24px"
                                  id="Layer_1"
                                  viewBox="0 0 24 24"
                                  width="24px"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="me-2"
                                >
                                  <g>
                                    <g>
                                      <path
                                        d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
                                          c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
                                          c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
                                          c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
                                          s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
                                          s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
                                        fill="#E7B40E"
                                        
                                      />
                                    </g>
                                  </g>
                              </svg>
                              Power BI <span className="text-green-mid ps-2"> $495</span>
                              </Link> </li>

                            <li id="" className="d-block mb-2 d-flex justify-content-start">
                            <Link href="#PythonCourseSyllabus" className="text-banner" >
                              <svg
                                height="24px"
                                id="Layer_1"
                                viewBox="0 0 24 24"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              className="me-2"
                              >
                                <g>
                                  <g>
                                    <path
                                      d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521
                                        c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506
                                        c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625
                                        c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191
                                        s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586
                                        s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"
                                      fill="#E7B40E"
                                      
                                    />
                                  </g>
                                </g>
                              </svg>
                              Python <span className="text-green-mid ps-2"> $550</span>
                              </Link></li>
                          </ul>
                        </div>
                      </div>

                      <div className="">
                          <p>Master Course Price at: <span className="text-green-mid">$1995</span></p>
                          <Link href="#" className="button-def button-3 mx-2 ms-lg-0" onClick={handleOpenOverlay }>
                            <span>Apply Now</span></Link>
                          <Link href="#viewschedule" className="button-def button-3-white mx-2"><span>View Schedule</span></Link>
                      </div>

                    </div>
                  </div>

                  <div className="col-lg-5 col-xl-4 pe-lg-0">
                    <div className="text-center banner-right mb-3 mb-lg-0">
                      <Image src={training} alt="add" className="ms-auto banner_img" width={800} height={400} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="container">
              <section className="mb-8  pt-6 pb-8">
                <div className="">                  
                  <div className="bdr1 overflow-hidden r-20">                
                    <div className="bg-white r-20">
                        <div className="row align-items-center">

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold ">
                                            90+Hrs
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4">Hands On Training</h2>
                                      </div>                                                                
                                    </li>
                                </ul> 
                                {/* <span className="bdr-left d-inline-block" ></span> */}
                            </div>
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4  bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold ">
                                          2 Live
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4">Projects for Hands-on Learning</h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            >
                                            50Hrs
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4"> Practical Assignment </h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            >
                                            15+
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4"> Years of Experience </h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>
                        

                        </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        
        </div>


        


        


        


    <div className="container">
     

    </div>

    


      </div>
		</>
  );
}

export default MainBanner;