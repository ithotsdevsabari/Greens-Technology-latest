"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import training from "../../../public/img/microsoft365/microsoft.webp";

import MasterIcon from "../../../public/img/icons/master.png";

const MainBannerLeftcnt: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
	<>  
      <FsLightbox
        toggler={toggler}  
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />
      <div 
        className="" 
          // style={{ 
          // backgroundImage: `url(/images/main-banner-shape.jpg)` 
          // }}
      >

<h2 className="fs-30 mb-1">
                      Your Path to Becoming a Certified Microsoft 365 Professional
                      </h2>

                      <h1 className=" fs-5-0 mb-3 text-grad fw-semibold fs-49 mt-1" >
                      Microsoft 365 Course
                      </h1>
                      
                      <div className="main-banner-content fs-medium">
                        <div className="top_banner_list2">
                          <div className="row">
                            <div className="col-sm-6 col-lg-6">
                              <ul>                            
                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftTeamsSyllabus" className="text-banner" >
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
                                Microsoft Teams <span className="text-green-mid ps-2"> $195</span></Link></li>                                   

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftOutlookSyllabus" className="text-banner" >
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
                                Microsoft Outlook   <span className="text-green-mid ps-2"> $195</span></Link></li>  

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftPowerPointSyllabus" className="text-banner" >
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
                                Microsoft PowerPoint   <span className="text-green-mid ps-2"> $350</span></Link></li>

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftOneNoteSyllabus" className="text-banner" >
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
                                Microsoft OneNote   <span className="text-green-mid ps-2"> $395 </span></Link></li> 

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftSharePointSyllabus" className="text-banner" >
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
                                Microsoft SharePoint   <span className="text-green-mid ps-2"> $395 </span></Link></li>   

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftOneDriveSyllabus" className="text-banner" >
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
                                Microsoft OneDrive  <span className="text-green-mid ps-2"> $395 </span></Link></li>                                 

                                </ul>

                            </div>

                          <div className="col-sm-6 col-lg-6">

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftAccessSyllabus" className="text-banner" >
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
                                Microsoft Access  <span className="text-green-mid ps-2"> $495 </span></Link></li>  

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftPowerAutomateSyllabus" className="text-banner" >
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
                                Microsoft Power Automate <span className="text-green-mid ps-2"> $495 </span></Link></li>

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftWordBeginnerSyllabus" className="text-banner" >
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
                                Microsoft Word - Beginner  <span className="text-green-mid ps-2"> $195</span></Link></li> 

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftWordAdvancedSyllabus" className="text-banner" >
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
                                Microsoft Word - Advanced  <span className="text-green-mid ps-2"> $495</span></Link></li>

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftExcelBeginnerSyllabus" className="text-banner" >
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
                                Microsoft Excel - Beginner  <span className="text-green-mid ps-2"> $350</span></Link></li>   

                                <li className="d-block mb-2 d-flex justify-content-start">
                                <Link href="#MicrosoftExcelAdvancedSyllabus" className="text-banner" >
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
                                Microsoft Excel - Advanced  <span className="text-green-mid ps-2"> $795</span></Link></li>  




                                    
                              

                              <ul> 

                               

                              

                              </ul>

                            </div>

                          </div>
                          
                        </div>
                      </div>






        </div>
	</>
  );
}

export default MainBannerLeftcnt;