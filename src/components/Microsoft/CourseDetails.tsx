"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import moon from "../../../public/img/icons/moon.webp";
import arrowBot from "../../../public/img/icons/arrowbot.png";
import UpcomingCourses from "./UpcomingCourses";
import tick from "../../../public/img/icons/tick.webp";
import doubleTick from "../../../public/img/icons/double-tick.webp";
import arrow from "../../../public/img/icons/arrow.png";
import useSmoothScroll from "../Atom/SmoothScroll";


const CourseDetails: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  useSmoothScroll(70);
  return (
		<>  
        <section className="mb-8 py-4">
          <div className="container"> 

            <div className="mb-5">            
                
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Course Syllabus </span> 
                    </h2>
                    
            </div>


            {/* Teams */}
            <div id="MicrosoftTeamsSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 1. Microsoft Teams Syllabus </span> 
                    </h2>                    
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                                <span className="position-absolute">
                                                    1. </span>
                                                <span className="ms-4"> Introduction </span>                                                     
                                            
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2"> 
                                                <span className="position-absolute">
                                                    2. </span>
                                                <span className="ms-4"> Key Features: Chat, Meeting, Channels, Files, Apps & Integrations, Collaboration Tools, Security & Compliance </span>                                                    
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    3. </span>
                                                <span className="ms-4"> Accessing Teams: </span>                                                   
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Via Desktop, Web Browser, Mobile
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Syncing Between Desktop & Web
                                                            </span>
                                                        </div>
                                                    </li>                                                    
                                                </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    4. </span>
                                                <span className="ms-4"> Setting up your Teams account </span>    
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    5. </span>
                                                <span className="ms-4"> Navigating the Teams interface: Sidebar, command bar, search bar </span>    
                                            </li>
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    6. </span>
                                                <span className="ms-4">  Understanding the Teams layout: Teams, channels, chats, meetings, files </span> 
                                            </li>
                                            
                                            
                                        </ul>

                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                

                                        <ul className="d-block mb-2 ms-4 mt-2">

                                            <li className="d-block mb-2 mt-2"> 
                                                <span className="position-absolute">
                                                    7. </span>
                                                <span className="ms-4">  Customizing your Teams profile and settings </span>                                                 
                                            
                                            </li>
                                            
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    8. </span>
                                                <span className="ms-4">  
                                                Creating a new team, Adding Members to Team </span> 
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    9. </span>
                                                <span className="ms-4"> Creating & Managing Channels, Channel Settings & Permission </span>                                                 
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    10. </span>
                                                <span className="ms-4"> Initiating One-on-One Chats, Participating in Group Chats </span>  
                                            </li>
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    11. </span>
                                                <span className="ms-4">  Using Emoji, GIF & Stickers </span>                                             
                                           
                                            </li>
                                            <li className="d-block mb-2 mt-2">      
                                                <span className="position-absolute">
                                                    12. </span>
                                                <span className="ms-4"> Sharing Files & Attachments in chats </span> 
                                            </li>
                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    13. </span>
                                                <span className="ms-4"> Managing Chat Notification </span>                                              
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    14. </span>
                                                <span className="ms-4">Scheduling & Joining Meetings, Hosting Video Calls & Conferences</span>                                              
                                            
                                            </li>
                                            
                                        </ul>

                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                               

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            
                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    15. </span>
                                                <span className="ms-4">Sharing your screen during Meetings</span>                             
                                            
                                            </li>

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    16. </span>
                                                <span className="ms-4">Recording & Accessing Meetings</span>                                                     
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    17. </span>
                                                <span className="ms-4">Managing Files & Folders in Teams</span>                                                     
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    18. </span>
                                                <span className="ms-4">Using @ mentions & tagging in teams</span>                                                     
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">      
                                            <span className="position-absolute">
                                                    19. </span>
                                                <span className="ms-4">Creating & managing tasks with Planner integration</span>                                              
                                            </li>
                                            <li className="d-block mb-2 mt-2">      
                                            <span className="position-absolute">
                                                    20 </span>
                                                <span className="ms-4">Applying filters & Search Techniques in Teams</span> 
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                   21. </span>
                                                <span className="ms-4">Keyboard Shortcuts</span>                                                    
                                            
                                            </li>
                                        </ul>

                                   
                                </div>
                            </div>
                        </div>                        
                    </div> 
 


                </div>

            </div>


             {/* Outlook Course */}
            <div id="MicrosoftOutlookSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 2. Microsoft Outlook Syllabus </span> 
                    </h2>                    
                </div>


                <div className="row">

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        1. </span>
                                                    <span className="ms-4">
                                                    Introduction to Microsoft Outlook 
                                                    </span>
                                                </div>                                                                                          
                                            </li>
                                            <li className="d-block mb-2 mt-2">
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        2. </span>
                                                    <span className="ms-4">
                                                    Overview of Outlook Interface: 
                                                    </span>
                                                </div>                                              
                                            </li>
                                        </ul> 
                                        <ul className="d-block mb-2 ms-5 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4">Ribbon, Navigate & Folder Pane, Message List, Reading Pane, Quick Access Toolbar, Status Bar</span>
                                                </div>
                                            </li>
                                        </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                        3. </span>
                                                    <span className="ms-4">
                                                    Backstage View
                                                    </span>
                                                </div> 
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Components: Account Information, Options, Manage Account, Open & Export, Print, Account Settings, Office Account, exit</span>
                                                        </div>
                                                    </li>
                                                </ul> 
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            4. </span>
                                                        <span className="ms-4">Creating a New Email Account</span>
                                                    </div>                                                  
                                            </li>
                                        </ul> 


                                    
                                    
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            5. </span>
                                                        <span className="ms-4">Email Management Basics</span>
                                                    </div> 
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Composing & Formatting Emails</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Adding Attachments</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Using Signature & Templates </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Organizing Emails with Folders & Categories </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Managing Junk & Clutter</span>
                                                        </div>
                                                    </li>
                                                </ul>                                         

                                
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                                        
                                   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            6. </span>
                                                        <span className="ms-4">Calander Management</span>
                                                    </div>                                               
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Overview of Calander Interface</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating & Managing Appointments</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Scheduling Meetings, Sharing Calanders</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Using Calander Views</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Setting Reminders & Alerts</span>
                                                        </div>
                                                    </li>
                                                </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            7. </span>
                                                        <span className="ms-4"> Contacts & People Management</span>
                                                    </div>                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Adding & Organizing Contacts</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating Contact Groups</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Linking Contacts with Emails & Appointments</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Using the People pane</span>
                                                        </div>
                                                    </li>
                                                </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                           8. </span>
                                                        <span className="ms-4"> Tasks & To-Do Lists</span>
                                                    </div>                                               
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Creating & Assigning Taks</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Setting Task Due Dates & Reminders</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Tracking Task process</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Integrating Tasks with Calander</span>
                                                        </div>
                                                    </li>
                                                </ul> 

                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            9. </span>
                                                        <span className="ms-4"> Security & Privacy </span>
                                                    </div>                                                                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Understanding the Email Security Risks</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Protecting your Outlook Accounts</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Encrypting Emails</span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">Recognizing & Handling Phishing Attempts</span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <div className="d-flex position-relative">
                                                    <span className="position-absolute">
                                                       10. </span>
                                                    <span className="ms-4"> Advanced Features </span>
                                                </div> 
                                            </li>
                                        </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Using Rules & Quick Steps for Automation</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Customizing Outlook Settings</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Managing Data files (PST, OST)</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Integrating Outlook with other Microsoft Applications (Excel, Word)</span>
                                                    </div>
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">Collaboration with Microsoft Teams & SharePoint</span>
                                                    </div>
                                                </li>
                                            </ul> 

                                
                                </div>
                            </div>
                        </div>                        
                    </div>

                </div> 

            </div>


            {/* PowerPoint Course */}
            <div id="MicrosoftPowerPointSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 3. Microsoft PowerPoint Presentation Syllabus </span> 
                    </h2>                    
                </div>


                <div className="row">

                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                                     
                                
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                1. </span>
                                            <span className="ms-4"> Introduction to PowerPoint</span>                                             
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Overview of Microsoft PowerPoint</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Key features & Benefits of using PowerPoint</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Installation & Setup Process</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Understanding the PowerPoint Interface</span>
                                                    </div>                                                    
                                                </li>
                                                
                                            </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                2. </span>
                                            <span className="ms-4"> Getting Started with PowerPoint </span>                                              
                                        
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Creating a New Presentation
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Choosing a design theme & layout
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Adding & Formatting Slides
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Slide master for consistent design
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Adding Headers, Footers & Slide Numbers
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 



                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                3. </span>
                                            <span className="ms-4">  Working with Text </span> 
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Adding & Formatting text boxes
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Bullet Points & Numbering
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Applying Text Effects & Styles
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Aligning & Spacing 
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul> 



                                        

                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4"> Inserting & Formatting Objects </span>                                              
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Adding Images, Shapes & Icons
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Formatting Objects (Size, Color, Transparency)
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using SmartArt for Visual Representation
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Inserting & Formatting Charts & Graphs
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Adding & Formatting Tables
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul>



                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                               5. </span>
                                            <span className="ms-4"> Working with Multimedia </span>                                                   
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Inserting Audio & Video Files
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Editing Audio & Video Playback options
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Animations & Transitions
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Adding & Timing Slide Animations
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Slide Show tools for multimedia presentations
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul>


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                               6. </span>
                                            <span className="ms-4"> Organizing & Managing Slides </span>                                            
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Reordering Slides & Sections
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Hiding & Unhiding Slides
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Grouping & Ungrouping Objects
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Slide Sorter view for Slide Management
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul>

                                
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                               
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> Collaboration & Sharing </span>    
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Sharing Presentation with others
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using comments & annotations for collaboration
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Managing Shared Access & Permissions
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul>


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                8. </span>
                                            <span className="ms-4"> Advanced Features & Customization </span>                                                  
                                        
                                        </li>
                                    </ul>                                          
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Customizing PowerPoint Settings & Preferences
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Personalizing the PowerPoint Interface
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Keyboard Shortcuts for Efficiency
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Setting up Slide transitions & timings
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                            </ul>

                               
                                </div>
                            </div>
                        </div>
                    </div>


                </div> 

            </div>

            
            {/* OneNote Course */}
            <div id="MicrosoftOneNoteSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 4. Microsoft OneNote Syllabus </span> 
                    </h2>                    
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                                  
                                
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">       
                                            <span className="position-absolute">
                                                1. </span>
                                            <span className="ms-4"> Introduction to OneNote </span>                                           
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Overview of Microsoft OneNote
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Key Features & Benefits of Using OneNote
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding the different versions of OneDrive (Desktop, Web, Mobile)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Installation & Setup Process
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Introduction to OneNote Interface
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                2. </span>
                                            <span className="ms-4"> Getting Started with OneNote </span> 
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating a New Notebook
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding Notebook Structure (Sections, Pages, Subpages)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Adding & Organizing Content in OneNote
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using different types of Notes (Text, Images, Audio, Video, Links)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Syncing Notebooks across Devices
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                               3. </span>
                                            <span className="ms-4"> Note-Taking Techniques </span>                                               
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Effective Note-taking Techniques
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Templates for Structured Notes
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Formatting Texts & Organizing Notes
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Adding Tags & Labels for Categorization
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Drawing Tools for Sketching & Annotating
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                </div>
                            </div>
                        </div>                        
                    </div> 


                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4">  Organizing & Managing Notebooks </span>                                                 
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Renaming, Moving & Copying Notebooks
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Sharing Notebooks with others
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Setting Permissions & Access Levels
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Merging & Splitting Sections & Pages
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2"> 
                                        <span className="position-absolute">
                                                5. </span>
                                            <span className="ms-4">  Searching & Filtering Notes </span>                                                
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using the Search feature to find Notes Quickly
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Applying Filters to narrow down Search Results
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using the Table of Contents for Navigation
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                6. </span>
                                            <span className="ms-4"> Integration with Microsoft Office </span>                                                
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Integrating OneNote with Other Microsoft Office Applications (Word, Excel, PowerPoint)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating Linked notes from Outlook & other Office Apps
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Importing & Exporting Content to & From OneNote
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">
                                        <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> Collaboration & Sharing </span>
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Collaborating on Notebook with Others
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Managing Shared Access & Permissions
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Comments & Annotation for Collaboration
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 

                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 


                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                 

                                <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                8.</span>
                                            <span className="ms-4"> Mobile Access & Offline Mode </span>   
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Accessing OneNote on Mobile Devices
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Syncing Notebooks for Offline Access
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Editing Notes offline & Syncing Changes
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 
              

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">    
                                        <span className="position-absolute">
                                                9. </span>
                                            <span className="ms-4"> Security & Privacy </span>     
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Protecting OneNote Notebooks with Strong passwords
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Encrypting Sections for Added Security
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Recognizing & Handling Phishing Attempts
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configurating Security Settings in OneNote
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                10. </span>
                                            <span className="ms-4"> Advanced Features & Customization </span>                                               
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Customizing OneNote Settings & Preferences
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Personalizing OneNote Interface
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Keyboard Shortcuts for Efficiency
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Setting up Automatic Backups & Sync
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configuring Storage Options & Quotas
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                </div>
                            </div>
                        </div>                        
                    </div>                     

                </div>

            </div>


            {/* SharePoint Course */}
            <div id="MicrosoftSharePointSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 5. Microsoft SharePoint Syllabus </span> 
                    </h2>                    
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">     
                                            <span className="position-absolute">
                                               1. </span>
                                            <span className="ms-4"> Introduction to SharePoint </span>   
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Overview of Microsoft SharePoint
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Key Features & Benefits of Using SharePoint
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Installation & Setup Process
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding SharePoint site Architecture
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 



                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                2. </span>
                                            <span className="ms-4"> Getting Started with SharePoint </span>                                                 
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Navigate the SharePoint Interface
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Accessing SharePoint Sites
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding site permissions and access levels
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Introduction to SharePoint lists & libraries
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Uploading & managing documents in SharePoint
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2"> 
                                        <span className="position-absolute">
                                                3. </span>
                                            <span className="ms-4">  Working with Lists and Libraries</span>                                                    
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Customizing SharePoint lists
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Adding & Editing list items
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using views & Filters for List management
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Managing document Libraries
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">     
                                            <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4">  Document Collaboration & Version Control </span>                                             
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Collaborating on Documents in SharePoint
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Co-authoring Documents in real-time
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Document Approval Workflows
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                               5. </span>
                                            <span className="ms-4"> Site Customization & Branding </span>                                             
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Customizing SharePoint sites with Themes & Templates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating Custom site Columns & Content types
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Designing & Configuring Site Navigation
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Web parts for site customization
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Applying Branding elements (Logos, Colors, Fonts)
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                6. </span>
                                            <span className="ms-4"> Working with Pages & Web Parts </span>                                               
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Editing SharePoint pages
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Adding & Customizing Web parts
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configuring Page Layouts & Sections
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Modern page features (News, Events, Announcements)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Publishing & Sharing Pages
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> SharePoint Workflows & Automation </span>                                               
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Overview of SharePoint Workflows
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Configuring SharePoint workflows
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Built-in Workflow Templates
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Integrating SharePoint with other Microsoft Office apps
                                                            </span>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                  


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                8. </span>
                                            <span className="ms-4"> SharePoint Search & Navigation </span>                                                
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding SharePoint Search Functionality
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configuring Search Settings & options
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Search Queries & Filters
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Customizing Search Results & Refinement
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Metadata for improved Search Navigation
                                                            </span>
                                                        </div>
                                                    </li>                                                    
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                               9. </span>
                                            <span className="ms-4">SharePoint Security & Permissions </span>                                                
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Managing SharePoint User Permissions & Groups
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configuring Item-Level Permissions
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Monitoring & Auditing SharePoint Security
                                                            </span>
                                                        </div>
                                                    </li>
                                                                                                    
                                                </ul> 

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                10. </span>
                                            <span className="ms-4">SharePoint Integration & Collaboration</span>                                                
                                        
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Integrating SharePoint with Microsoft Teams, Outlook & other Office Apps
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Collaborating on documents and projects in Teams
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Sharing and collaborating on files with external users
                                                            </span>
                                                        </div>
                                                    </li>
                                                                                                    
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">        
                                        <span className="position-absolute">
                                                11. </span>
                                            <span className="ms-4">SharePoint Administration & Maintenance</span>   
                                        </li>
                                    </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Managing SharePoint sites & Site Collections
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configuring Site settings & options
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Monitoring site usage & Performance
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Backing up & Restoring SharePoint data
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Installing Updates & Patches
                                                            </span>
                                                        </div>
                                                    </li>
                                                                                                    
                                                </ul> 


                                       

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                </div>

            </div>


            


            {/* OneDrive Course */}
            <div id="MicrosoftOneDriveSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 6. Microsoft OneDrive Syllabus </span> 
                    </h2>                    
                </div>


                <div className="row">

                    <div className="col-lg-4">                        
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                

                                 
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2"> 
                                            <div className="d-flex position-relative">
                                                <span className="position-absolute">
                                                    1. </span>
                                                <span className="ms-4"> Introduction to OneDrive </span>
                                            </div>                                             
                                        </li>                                            
                                    </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Overview of OneDrive</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Key features & Benefits</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Installation & Setup Process</span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Understanding OneDrive Storage Options</span>
                                                    </div>                                                    
                                                </li>
                                                                                           
                                            </ul>

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    2. </span>
                                                <span className="ms-4"> Getting Started with OneDrive </span>                                              
                                        
                                        </li>                                            
                                    </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Accessing OneDrive: Web, Desktop, Mobile Apps
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Navigating OneDrive Interface</span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Uploading Files & Folders to OneDrive </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Creating New Files & Folders </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">Syncing Files & Folders with Desktop & Mobile Devices </span>
                                                    </div>                                                    
                                                </li>                                                                                           
                                            </ul>  

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    3. </span>
                                                <span className="ms-4"> File Management in OneDrive </span>                                             
                                        </li>                                            
                                    </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Organizing Files & Folders in OneDrive
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Renaming, Moving, Copying, Deleting & Restoring Files
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Searching for Files & Folders in OneDrive
                                                        </span>
                                                    </div>                                                    
                                                </li>                                                                                 
                                            </ul>  

                                                                       
                                
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">                        
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4"> Sharing & Collaboration </span>  
                                        </li>                                            
                                    </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Sharing Files & Folders
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Setting Permissions & Access Levels
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Collaborating on Documents in real time
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Managing Shared Files & Permissions
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                                                                                                      
                                            </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                5. </span>
                                            <span className="ms-4"> Security & Privacy </span>  
                                        
                                        </li>                                            
                                    </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Protecting OneDrive Account with Strong Password
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Securing Files with Encryption & Access Controls
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Recognizing & Handling Phishing attempts
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Configuring Security Settings in OneDrive
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                                                                                                      
                                            </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                               6. </span>
                                            <span className="ms-4"> Backup & Restore </span> 
                                        </li>                                            
                                    </ul>   
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Backing up Files & Folders to OneDrive
                                                        </span>
                                                    </div>                                                    
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Restoring files from OneDrive Backups
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Using Recycle bin & Version History for Recovery
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute ">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                        <span className="ms-4">
                                                        Setting up Automatic Backups & Sync
                                                        </span>
                                                    </div>                                                     
                                                </li>
                                                                                                                                      
                                            </ul>                                         
                                                                       
                                
                                </div>
                            </div>
                        </div>                        
                    </div>


                    <div className="col-lg-4">                        
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                  

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> Integration with Microsoft Office </span> 
                                        </li>                                            
                                    </ul>   
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Editing Documents Directly in OneDrive
                                                            </span>
                                                        </div>                                                    
                                                    </li>
                                                                                                                                        
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                8. </span>
                                            <span className="ms-4"> Advanced Features & Customization </span>                                            
                                        </li>                                            
                                    </ul>   
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Customizing OneDrive Setting & preferences
                                                            </span>
                                                        </div>                                                    
                                                    </li>  
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Personalizing OneDrive Interface
                                                            </span>
                                                        </div>                                                    
                                                    </li>
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Using Keyboard shortcuts for Efficiency
                                                            </span>
                                                        </div>                                                    
                                                    </li>                                                                        
                                                </ul> 


                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                9. </span>
                                            <span className="ms-4"> Mobile Access & Offline Mode </span>        
                                        </li>                                            
                                    </ul>   
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Accessing OneDrive on Mobile Devices
                                                            </span>
                                                        </div>                                                    
                                                    </li>  
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Syncing files for Offline Access
                                                            </span>
                                                        </div>                                                    
                                                    </li>
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4">
                                                            Editing Files offline & Syncing Changes
                                                            </span>
                                                        </div>                                                    
                                                    </li>                                                                        
                                                </ul> 

                                                                       
                                
                                </div>
                            </div>
                        </div>                        
                    </div>




                </div> 

            </div>


            {/* Access */}
            <div id="MicrosoftAccessSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 7. Microsoft Access Syllabus </span> 
                    </h2>                    
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                                 
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    1. </span>
                                                <span className="ms-4">Introduction to Microsoft Access</span>                                                
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Overview of Microsoft Access
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Key Features & Benefits of using Access
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Installation & Setup Process
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding the Access Interface
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                   2. </span>
                                                <span className="ms-4"> Getting Started with Access</span>     
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating a New Database
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding Database Objects (Tables, Queries, Forms, Reports)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Navigating the Access workspace
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Saving Objects
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Importing & linking External Data
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">     
                                                <span className="position-absolute">
                                                    3. </span>
                                                <span className="ms-4"> Database Design Basics </span>     
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding Database Design concepts
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Planning & Designing a Database Schema
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating & Modifying Tables
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Defining Relationships between Tables
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Enforcing Referential Integrity
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    4. </span>
                                                <span className="ms-4"> Data Entry & Validation </span>                                                
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Designing & Creating Forms for Data Entry
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Adding Controls & Fields to Forms
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Form Layouts & Views
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Implementing Data Validation Rules
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating Input Masks & Default Values
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">    
                                                <span className="position-absolute">
                                                    5. </span>
                                                <span className="ms-4"> Querying Data </span>                                                   
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding Access Queries
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating Select Queries
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Criteria & Expressions in Queries
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Working with calculated fields
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Aggregate Functions (Sum, Count, Average) in Queries
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 

                                        
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    6. </span>
                                                <span className="ms-4"> Reporting & Analysis </span>                                              
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Designing & Creating Reports
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Adding Controls & Fields to Reports
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Report Layouts & Views
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Grouping & Sorting Data in Reports
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Formatting & Styling Reports
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    7. </span>
                                                <span className="ms-4"> Integration with Other Applications </span>                                                 
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Importing & Exporting Data to Excel
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Integrating Access with other Microsoft Office applications (Word, Outlook)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Access as a data source for external applications
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Importing & Linking Data from external sources
                                                            </span>
                                                        </div>
                                                    </li>                                                    
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    8. </span>
                                                <span className="ms-4"> Security & Permissions </span>                                               
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Managing Access User Accounts & Permissions
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Configuring User-Level Security
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Encrypting Databases for Added Security
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Setting up Database Password Protection
                                                            </span>
                                                        </div>
                                                    </li>                                                    
                                                </ul> 
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">    
                                                <span className="position-absolute">
                                                    9. </span>
                                                <span className="ms-4"> Performance Optimization </span>                                                
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Optimizing Database performance
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Indexing Tables for Faster Queries
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Compact & Repair Database operations
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Splitting Databases for improved performance
                                                            </span>
                                                        </div>
                                                    </li>     
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Monitoring & Troubleshooting performance issues
                                                            </span>
                                                        </div>
                                                    </li>                                                 
                                                </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                                <span className="position-absolute">
                                                    10. </span>
                                                <span className="ms-4"> Data Maintenance & Backup </span>                                                
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Backing up & Restoring Access Databases
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Setting up Automated Backup Routines
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Compact & Repair Database operations
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Managing Database file size & growth
                                                            </span>
                                                        </div>
                                                    </li>                                                    
                                                </ul> 


                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    11. </span>
                                                <span className="ms-4"> Advanced Query Techniques </span>                                             
                                            
                                            </li>
                                        </ul> 
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating Parameter Queries
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Query joins (Inner, Outer, Self)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Creating Action Queries (Update, Delete, Append)
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Using Query Parameters for Dynamic Filtering
                                                            </span>
                                                        </div>
                                                    </li>    
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Understanding Query Optimization techniques
                                                            </span>
                                                        </div>
                                                    </li>                                                  
                                                </ul> 
                                       

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                </div>

            </div>


             {/* Power Automate Course */}

            <div id="MicrosoftPowerAutomateSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">8. Microsoft Power Automate Syllabus </span> 
                    </h2>                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                  <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                1. </span>
                                            <span className="ms-4"> Introduction to Power Automate </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Overview of Power Automate </span> 
                                                </li>
                                            </ul>   
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4">Key Features</span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                    <div className="ms-5">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2">  
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                    <span className="ms-4">Connectors, Triggers & Actions, Templates, Approval Workflows, UI Flows, Mobile Apps</span>
                                                                </div>                                                    
                                                            </li> 
                                                            <li className="d-block mb-2 mt-2">  
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                    <span className="ms-4">Use Cases: Notification Automation, Data Synchronization, Document Approval, Form Processing, Data Collection</span>
                                                                </div> 
                                                            </li> 
                                                        </ul> 
                                                    </div>   

                                    
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Understanding Automation Concepts </span> 
                                                </li>
                                            </ul>   
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4">Key Automation Concepts</span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                    <div className="ms-5">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2">  
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                    <span className="ms-4">Triggers, Actions, Conditions, Loops, Variables, Expressions, Error Handling</span>
                                                                </div>                                                    
                                                            </li> 
                                                        </ul> 
                                                    </div>   

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Exploring Power Automate Interface </span> 
                                                </li>
                                            </ul>   
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4">Dashboard, My Flows, Templates, Connectors, Data, UI Flows, Business Process Flows, Settings, Help & Support, Search</span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                    </div>

                                  <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                2. </span>
                                            <span className="ms-4"> Basic of Flow Creation </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Creating your First Flow  </span> 
                                                </li>
                                            </ul>  
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Using Templates to Create Flows  </span> 
                                                </li>
                                            </ul> 
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Understanding Triggers & Actions  </span> 
                                                </li>
                                            </ul> 
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4"> Triggers </span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                        <div className="ms-5">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2">  
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                    <span className="ms-4">Event-Based, Initiation, Configuration</span>
                                                                </div>                                                    
                                                            </li> 
                                                            
                                                        </ul> 
                                                        </div>   

                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4"> Actions </span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                        <div className="ms-5">
                                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                                <li className="d-block mb-2 mt-2">  
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute ">
                                                                            <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                        <span className="ms-4">Task Execution, Connectors, Configuration, Sequential Execution</span>
                                                                    </div>                                                    
                                                                </li>                                                         
                                                            </ul> 
                                                        </div>  
                                                    
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4"> Relationship between Triggers & Actions </span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                        <div className="ms-5">
                                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                                <li className="d-block mb-2 mt-2">  
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute ">
                                                                            <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                        <span className="ms-4">Sequential Execution, Data Flow, Conditional Logic</span>
                                                                    </div>                                                    
                                                                </li>                                                         
                                                            </ul> 
                                                        </div>  
                                    </div>

                                  <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                3. </span>
                                            <span className="ms-4"> Advanced Flow Building  </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Conditional Statements & Expressions  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Loops & Parallel Branches  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Error Handling & Retries  </span> 
                                                </li>
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Using Variables & Expressions Effectively  </span> 
                                                </li>
                                            </ul> 
                                                    
                                    </div>
                                                                                                          
                               
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">                        
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2"> Functions: </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4"> Connectors & Integrations </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Introduction to Connectors </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Popular Connectors Overview  </span> 
                                                </li>
                                            </ul>                                             
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4"> Office 365, SharePoint, Dynamic 365 </span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Custom Connectors & API Integrations  </span> 
                                                </li>
                                            </ul> 
                                                     <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4"> Custom Connectors </span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                        <div className="ms-5">
                                                        <ul className="d-block mb-2 ms-4 mt-2">
                                                            <li className="d-block mb-2 mt-2">  
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                    <span className="ms-4">Creation, Authentication, Actions & Triggers, Testing, Sharing</span>
                                                                </div>                                                    
                                                            </li> 
                                                            
                                                        </ul> 
                                                        </div>   

                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                        <li className="d-block mb-2 mt-2">  
                                                            <div className="d-flex position-relative">
                                                                <span className="position-absolute ">
                                                                    <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                <span className="ms-4"> API Integrations </span>
                                                            </div>                                                    
                                                        </li>                                                    
                                                    </ul> 
                                                        <div className="ms-5">
                                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                                <li className="d-block mb-2 mt-2">  
                                                                    <div className="d-flex position-relative">
                                                                        <span className="position-absolute ">
                                                                            <Image src={arrow} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                                        <span className="ms-4">Pre-Build Connectors, Custom HTTP Actions, Authentication, Data Mapping</span>
                                                                    </div>                                                    
                                                                </li>                                                         
                                                            </ul> 
                                                        </div>  

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Best Practices for Connectors Usage  </span> 
                                                </li>
                                            </ul>   
                                    </div>


                                <div className="mb-4">
                                <ul className="d-block mb-2 mt-2"> 
                                    <li className="d-block mb-1 mt-2 fw-bold">  
                                        <span className="position-absolute">
                                            5. </span>
                                        <span className="ms-4"> Data Management & Transformations </span> 
                                    </li>
                                </ul>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Working with Data Operations </span> 
                                            </li>
                                        </ul>                                             
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4"> Get & Transform Data, Filter Data, Loop Through Data, Manipulate Arrays & Objects, Store Data, Error Handling </span>
                                                        </div>                                                    
                                                    </li>                                                    
                                                </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Transforming Data with Expressions  </span> 
                                            </li>
                                        </ul> 
                                                    <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4"> String Manipulation, Mathematical Calculations, Date & Time Formatting, Logical Evaluations, Data Type Conversion, Conditional Expressions, Array & Object Manipulations, Working with Dynamic Content </span>
                                                        </div>                                                    
                                                    </li>                                                    
                                                </ul> 

                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Using Arrays & Objects </span> 
                                            </li>
                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                        <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                    <span className="ms-4"> Data Manipulation Techniques </span> 
                                            </li>
                                        </ul>   
                                </div>

                                <div className="">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                6. </span>
                                            <span className="ms-4"> UI Flows & Desktop Automations  </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Introduction to UI Flows  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Automating Desktop Tasks with UI Flows  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Creating & Managing UI Flows  </span> 
                                                </li>
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Best Practices for UI Automation </span> 
                                                </li>
                                            </ul>                                                     
                                    </div>

                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="">
                            {/* <h2 className=" fs-4 pt-3 mt-0 mb-2" > LOD-Level of Detail  </h2> */}
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                  <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> Approval Workflows  </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Introduction to Approval Workflows  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Creating Approval Flows & Configuring Approval Actions  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Tracking & Managing Approvals  </span> 
                                                </li>
                                            </ul>                                                     
                                    </div>

                                  <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                8. </span>
                                            <span className="ms-4">Governance & Security</span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Understanding Governance in Power Automate </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Security best Practices  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Compliance Considerations </span> 
                                                </li>

                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Role-Based Access Control </span> 
                                                </li>

                                            </ul>                                                     
                                    </div>


                                  <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                9. </span>
                                            <span className="ms-4"> Advanced Techniques & Tips </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Using Advanced Features like Custom Connectors & Expressions </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Handling Complex Scenarios  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Optimization Techniques for Performance </span> 
                                                </li>

                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Troubleshooting Common Issues </span> 
                                                </li>

                                            </ul>                                                     
                                    </div>


                                    <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                10. </span>
                                            <span className="ms-4"> Integration with Power Platform & Beyond</span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Integrating Power Automate with other Power Platforms Services </span> 
                                                </li>
                                            </ul>                                             
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2">  
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={doubleTick} alt="tick" className="ms-auto" width={15} height={5} /></span>
                                                            <span className="ms-4"> Power BI, Power Apps, Power Virtual Agents </span>
                                                        </div>                                                    
                                                    </li>                                                    
                                                </ul> 

                                            <ul className="d-block mb-2 ms-4 mt-2">
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Integration with External Services & Systems  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Extending Automation Capabilities with Azure Services</span> 
                                                </li>

                                            </ul>                                                     
                                    </div>


                                    <div className="mb-4">
                                    <ul className="d-block mb-2 mt-2"> 
                                        <li className="d-block mb-1 mt-2 fw-bold">  
                                            <span className="position-absolute">
                                                11. </span>
                                            <span className="ms-4"> Power Automate in Practice </span> 
                                        </li>
                                    </ul>   
                                            <ul className="d-block mb-2 ms-4 mt-2">
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Real-World Case & Scenarios </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Industry-Specific Applications  </span> 
                                                </li>
                                            
                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Best Practices form Industry Experts </span> 
                                                </li>

                                                <li className="d-block mb-2 mt-2">  
                                                    <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4"> Tips for Maximizing Productivity </span> 
                                                </li>

                                            </ul>                                                     
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            </div>  
                      


            {/* Word Beginner */}
            <div id="MicrosoftWordBeginnerSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 9. Microsoft Word - Beginner Syllabus</span> 
                    </h2>                    
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                               
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    1. </span>
                                                <span className="ms-4">Introduction to Microsoft Word </span>                                                   
                                            
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">       
                                            <span className="position-absolute">
                                                    2. </span>
                                                <span className="ms-4">Overview of Microsoft Word  </span>                                            
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">     
                                            <span className="position-absolute">
                                                    3. </span>
                                                <span className="ms-4">Understanding the Word Interface  </span>                                              
                                            
                                            </li>

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    4. </span>
                                                <span className="ms-4">Navigating Documents  </span>                                                
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    5. </span>
                                                <span className="ms-4">Creating & Opening Documents  </span>   
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    6. </span>
                                                <span className="ms-4">Saving & Printing Documents  </span>                                              
                                            </li> 

                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    7. </span>
                                                <span className="ms-4">Formatting Text: Font, Size, Color
                                                </span>                                                  
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    8. </span>
                                                <span className="ms-4"> Applying Text Effects: Bold, Italic, Underline
                                                </span>                                                
                                           
                                            </li>                                             
                                 
                                        </ul>
                               
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">    

                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    9. </span>
                                                <span className="ms-4">Aligning Text: Left, Center, Right, Justified
                                                </span>                                                 
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">      
                                            <span className="position-absolute">
                                                    10. </span>
                                                <span className="ms-4">Changing Paragraph spacing & indentation
                                                </span>                                             
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    11. </span>
                                                <span className="ms-4">Using Bullets & Numbering
                                                </span>                                                
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    12. </span>
                                                <span className="ms-4">Setting up Page Margins, Orientation, Inserting Special Characters & Symbols
                                                </span>                                                                                           
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    13. </span>
                                                <span className="ms-4">Inserting & Formatting images, shapes, icons, SmartArt</span>                                               
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                   14. </span>
                                                <span className="ms-4">Adding Tables, Sorting & Filtering table data, Finding & Replacing Words, Adding Heading & Footer</span>                                               
                                            
                                            </li>  

                                            
                                                                                  
                                        </ul>

                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                      
                                        <ul className="d-block mb-2 ms-4 mt-2">

                                        <li className="d-block mb-2 mt-2">         
                                            <span className="position-absolute">
                                                    15. </span>
                                                <span className="ms-4">Using Page & Section Breaks, Page Borders & Backgrounds, Working with Columns & Text Boxes
                                                </span>                                          
                                            
                                            </li>                                              

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    16. </span>
                                                <span className="ms-4">Tracking Changes & Comments, Accepting & Rejecting Changes
                                                </span>                                               
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    17. </span>
                                                <span className="ms-4">Comparing & Combining Documents
                                                </span>                                              
                                            </li>  
                                            
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    18. </span>
                                                <span className="ms-4">Sharing Documents with Others
                                                </span>                                              
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    19. </span>
                                                <span className="ms-4">Creating Mail Merge Letters & Envelopes, Using Data Sources for Mail Merge, Creating & Designing Forms
                                                </span>                                              
                                            </li>       



                                        </ul>

                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                </div>

            </div>


             {/* Word Advanced */}
             <div id="MicrosoftWordAdvancedSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2"> 10. Microsoft Word - Advanced Syllabus</span> 
                    </h2>                    
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                               
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2">
                                            <span className="position-absolute">
                                                    1. </span>
                                                <span className="ms-4">Working with Styles, Applying Themes & Templates
                                                </span>                                                   
                                            
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">       
                                            <span className="position-absolute">
                                                    2. </span>
                                                <span className="ms-4">Inserting Equations & Symbols, Using Quick Parts & AutoText    
                                                 </span>                                            
                                            
                                            </li>
                                            <li className="d-block mb-2 mt-2">     
                                            <span className="position-absolute">
                                                    3. </span>
                                                <span className="ms-4">Creating Tables of Contents & Indexes  
                                                 </span>                                              
                                            
                                            </li>

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    4. </span>
                                                <span className="ms-4">Adding Cross-references & Bookmarks  </span>                                                
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    5. </span>
                                                <span className="ms-4">Using Master Documents & Subdocuments </span>   
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    6. </span>
                                                <span className="ms-4">Creating & Editing Tables of Authorities </span>                                              
                                            </li> 

                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    7. </span>
                                                <span className="ms-4">Protecting Documents with Passwords & Permissions
                                                </span>                                                  
                                            
                                            </li>  

                                                                                        
                                 
                                        </ul>
                               
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">   

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    8. </span>
                                                <span className="ms-4"> Using Track Changes for Advanced Editing  
                                                </span>   
                                            </li>  

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    9. </span>
                                                <span className="ms-4">Protecting Documents with Information Rights Management  
                                                </span>     
                                            </li>  

                                            <li className="d-block mb-2 mt-2">      
                                            <span className="position-absolute">
                                                    10. </span>
                                                <span className="ms-4">Using Digital Signatures & Certificates    
                                                </span>                                             
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    11. </span>
                                                <span className="ms-4">Creating & Editing Macros  
                                                </span>                                                
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    12. </span>
                                                <span className="ms-4">Customizing the Ribbon & Quick Access Toolbar 
                                                </span>                                                                                           
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    13. </span>
                                                <span className="ms-4">Using Add-Ins for Extended Functionality  
                                                </span>                                               
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                   14. </span>
                                                <span className="ms-4">Exploring Advanced Options & Settings  
                                                </span>                                               
                                            
                                            </li>  
                                                                                  
                                        </ul>

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                      
                                        <ul className="d-block mb-2 ms-4 mt-2">

                                        <li className="d-block mb-2 mt-2">         
                                            <span className="position-absolute">
                                                    15. </span>
                                                <span className="ms-4">Ensuring Accessibility Compliance  
                                                </span>                                          
                                            
                                            </li>                                              

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    16. </span>
                                                <span className="ms-4">Converting Documents to Different Formats  
                                                </span>                                               
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    17. </span>
                                                <span className="ms-4"> Using Compatibility Mode for Older Versions  
                                                </span>                                              
                                            </li>  
                                            
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    18. </span>
                                                <span className="ms-4"> Time-saving Tips & Shortcuts  
                                                </span>                                              
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    19. </span>
                                                <span className="ms-4">
                                                    Troubleshooting Common Issues  
                                                </span>                                              
                                            </li>  

                                        </ul>

                                        

                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                </div>

            </div>


            {/* Excel Beginner */}
            <div id="MicrosoftExcelBeginnerSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">  11. Microsoft Excel - Beginner Syllabus </span> 
                    </h2>                    
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                  
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                1. </span>
                                            <span className="ms-4">Introduction </span> 
                                        </li>                                       
                                        <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                2. </span>
                                            <span className="ms-4">Understanding the Excel Interface</span>                                                 
                                        
                                        </li>                                                                                 
                                    </ul>  
                                                <ul className="d-block mb-2 ms-5 mt-2">
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Bar: Title, Ribbon, Quick Access Toolbar, Formula, Scroll, Status
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="d-block mb-2 mt-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute">
                                                                <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                            <span className="ms-4">
                                                            Worksheet Tabs, Cell, Name box, Column & Row Headers
                                                            </span>
                                                        </div>
                                                    </li>                                                    
                                                </ul>   
                                        <ul className="d-block mb-2 ms-4 mt-2">
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    3. </span>
                                                <span className="ms-4">Basic Navigation & Shortcuts in Excel </span>                                                
                                            
                                            </li>           

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    4. </span>
                                                <span className="ms-4">Creating, Opening & Saving workbooks </span>                                               
                                            
                                            </li>   

                                            <li className="d-block mb-2 mt-2">    
                                                <span className="position-absolute">
                                                    5. </span>
                                                <span className="ms-4"> Entering & Editing Data </span>                                             
                                            
                                            </li> 
                                            </ul>   

                                        

                                    
                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                6. </span>
                                            <span className="ms-4"> Formatting Cells, Rows, Columns
                                            </span>                                           
                                        </li>  
                                    </ul> 
                                            <ul className="d-block mb-2 ms-5 mt-2">
                                                <li className="d-block mb-2 mt-2"> 
                                                    <div className="d-flex position-relative">
                                                        <span className="position-absolute">
                                                            <Image src={tick} alt="tick" className="ms-auto" width={15} height={5} /> </span>
                                                        <span className="ms-4">
                                                        Font, Alignment, Borders, Fill Color  
                                                        </span>
                                                    </div>
                                                </li>
                                                                                            
                                            </ul>  

                                        <ul className="d-block mb-2 ms-4 mt-2">

                                            <li className="d-block mb-2 mt-2">  
                                                <span className="position-absolute">
                                                    7. </span>
                                                <span className="ms-4">Introduction to Basic Formulas & Functions (SUM, AVERAGE, MAX, MIN)</span> 
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    8. </span>
                                                <span className="ms-4">Using AutoFill & AutoSum, Applying Conditional Formatting</span>                                                 
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    9. </span>
                                                <span className="ms-4">Inserting, Deleting, Renaming Worksheets</span>                                              
                                            
                                            </li>    

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    10. </span>
                                                <span className="ms-4">Moving & Copying Data between Worksheets   </span>                                               
                                            
                                            </li> 

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    11. </span>
                                                <span className="ms-4">Using Cell References: Relative vs. Absolute   </span>                                               
                                            
                                            </li>                                                                                  
                                            
                                       </ul>
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    12. </span>
                                                <span className="ms-4">Creating & Formatting Tables</span>                                              
                                            
                                            </li> 

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    13. </span>
                                                <span className="ms-4">Sorting & Filtering Data </span>   
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    14. </span>
                                                <span className="ms-4">Using Data Validation, Removing Duplicates</span> 
                                            </li> 
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    15. </span>
                                                <span className="ms-4"> Creating Charts: Column, Line, Pie   </span> 
                                            </li>   
                                                                                
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    16. </span>
                                                <span className="ms-4">Formatting & Customizing Charts </span>                                                
                                            
                                            </li> 
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    17. </span>
                                                <span className="ms-4">Adding Trendlines & Data Labels   </span>                                              
                                            
                                            </li> 
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    18. </span>
                                                <span className="ms-4">Creating Combination Charts </span>                                             
                                            
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    19. </span>
                                                <span className="ms-4">Keyboard Shortcuts  </span>                                             
                                            
                                            </li> 
                                        </ul> 
                               
                                </div>
                            </div>
                        </div>                        
                    </div> 
                    
                </div>

            </div>

            {/* Excel Advanced */}
            <div id="MicrosoftExcelAdvancedSyllabus" className="course-box shadow-box mb-5 py-5">
                <div className="row"> 
                    <h2 className="text-uppercase text-center fs-4 mb-1">Microsoft 365</h2> 
                    <h2 className="text-center fs-5"> 
                        <span className="d-block text-grad mb-2">  12. Microsoft Excel - Advanced Syllabus </span> 
                    </h2>                    
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                  
                                    <ul className="d-block mb-2 ms-4 mt-2">
                                        <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                1. </span>
                                            <span className="ms-4">Logical Functions: IF, AND, OR   </span> 
                                        </li>                                       
                                        <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                2. </span>
                                            <span className="ms-4">Lookup & Reference Functions: VLOOKUP, INDEX, MATCH</span>                                                 
                                        
                                        </li>                                                                                 
                                   
                                        <li className="d-block mb-2 mt-2"> 
                                        <span className="position-absolute">
                                                3. </span>
                                            <span className="ms-4">Text Functions: CONCATENATE, LEFT, RIGHT, MID  
                                                </span>                                                
                                        
                                        </li>           

                                        <li className="d-block mb-2 mt-2">  
                                        <span className="position-absolute">
                                                4. </span>
                                            <span className="ms-4">Date & Time Functions: TODAY, NOW, DATE, TIME    
                                                </span>                                               
                                        
                                        </li>   

                                        <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                5. </span>
                                            <span className="ms-4"> PivotTables: Creating & Formatting   </span>                                             
                                        
                                        </li> 
                                        <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                6. </span>
                                            <span className="ms-4"> Pivot Charts: Visualizing PivotTable Data
                                               </span>                                             
                                        
                                        </li> 
                                        <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                7. </span>
                                            <span className="ms-4"> Data Analysis with What-If Analysis Tools   </span>                                             
                                        
                                        </li> 

                                        <li className="d-block mb-2 mt-2">   
                                                <span className="position-absolute">
                                                    8. </span>
                                                <span className="ms-4">Goal Seek and Scenario Manager  
                                                </span>                                                 
                                            
                                            </li>  

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    9. </span>
                                                <span className="ms-4">Consolidating Data from Multiple Sources  </span>                                              
                                            
                                            </li>    

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    10. </span>
                                                <span className="ms-4">Grouping & Outlining Data </span>
                                            </li> 

                                            
                                    </ul>   
                                    
                                
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">

                                        <ul className="d-block mb-2 ms-4 mt-2">

                                                <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    11. </span>
                                                <span className="ms-4">Using Subtotals & Filtering Techniques </span> 
                                            </li> 
                                            

                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    12. </span>
                                                <span className="ms-4">Creating Data Tables & Custom Views</span>                                              
                                            
                                            </li> 

                                            <li className="d-block mb-2 mt-2">  
                                            <span className="position-absolute">
                                                    13. </span>
                                                <span className="ms-4">Sparklines: Miniature Charts within Cells   </span>   
                                            </li>  

                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    14. </span>
                                                <span className="ms-4">Conditional Formatting with Formulas  </span> 
                                            </li> 
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    15. </span>
                                                <span className="ms-4"> Using Slicers for Interactive Filtering   </span> 
                                            </li> 
                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    16. </span>
                                                <span className="ms-4">Advanced Charting Techniques  </span>                                                
                                            
                                            </li> 
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    17. </span>
                                                <span className="ms-4">Introduction to Macros: Recording & Running  </span>                                              
                                            
                                            </li> 
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    18. </span>
                                                <span className="ms-4">Editing & Debugging Macros      </span>                                             
                                            
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    19. </span>
                                                <span className="ms-4">Using Form Controls & Buttons</span>                                             
                                            
                                            </li> 


                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    20. </span>
                                                <span className="ms-4">Automating Repetitive Tasks    </span>                                                
                                            
                                            </li> 
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    21. </span>
                                                <span className="ms-4"> Advanced Data Validation Techniques    </span>                                              
                                            
                                            </li>                                                                                        
                                            
                                       </ul>
                                </div>
                            </div>
                        </div>                        
                    </div> 

                    <div className="col-lg-4">
                        <div className="">                    
                            <div className="mt-1 fs-medium">
                                <div className="top_banner_list">
                                
                                        <ul className="d-block mb-2 ms-4 mt-2">                                             
                                                                                
                                            
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    22. </span>
                                                <span className="ms-4">Protecting Worksheets & Workbooks</span>                                             
                                            
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    23. </span>
                                                <span className="ms-4">Sharing & Collaborating on Workbooks    </span>                                             
                                            
                                            </li> 

                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    24. </span>
                                                <span className="ms-4">Tracking Changes & Comments </span>  
                                            </li> 
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    25. </span>
                                                <span className="ms-4"> Importing & Exporting Data  </span>   
                                            </li> 

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    26. </span>
                                                <span className="ms-4">Linking Data between Excel & Other Applications 
                                                </span>             
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    27. </span>
                                                <span className="ms-4">Using Excel with PowerPoint & Word </span>  
                                            </li> 



                                            <li className="d-block mb-2 mt-2"> 
                                            <span className="position-absolute">
                                                    28. </span>
                                                <span className="ms-4">Collaboration with SharePoint & OneDrive     </span>  
                                            </li> 
                                            <li className="d-block mb-2 mt-2">   
                                            <span className="position-absolute">
                                                    29. </span>
                                                <span className="ms-4"> Keyboard Shortcuts & Time-Saving Tips </span>   
                                            </li> 

                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    30. </span>
                                                <span className="ms-4">Troubleshooting Common Issues  
                                                </span>             
                                            </li>                                       
                                            <li className="d-block mb-2 mt-2">    
                                            <span className="position-absolute">
                                                    31. </span>
                                                <span className="ms-4">Best Practices for Efficient Data Management    </span>  
                                            </li> 

                                        </ul> 
                               
                                </div>
                            </div>
                        </div>                        
                    </div> 
                    
                </div>

            </div>


           


            
            

            


            <div className="course-box shadow-box mb-5 py-5" id="viewmicrosoftCourseDetails">
                <div className="row">
                    <UpcomingCourses/>                    
                </div>
            </div>

            

          </div>
        </section>


        </>
    );
}

export default CourseDetails;