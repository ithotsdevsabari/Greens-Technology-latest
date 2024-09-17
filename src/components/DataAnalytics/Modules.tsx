"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';


import Image from "next/image";
import learn1 from "../../../public/img/learn1.png";
import learn2 from "../../../public/img/learn2.png";
import learn3 from "../../../public/img/learn3.png";
import learn4 from "../../../public/img/learn4.png";
import learn5 from "../../../public/img/learn5.png";
import downLoad from "../../../public/img/icons/down.png";
import tick from "../../../public/img/icons/tick.webp";
import SpecialOffer from "../Microsoft/SpecialOffer";


const Modules: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
	  

        <section className="mb-8  py-6">
          <div className="container">

            <div className="mb-5">            
                {/* <h2 className="text-uppercase text-center text-green fs-20 mb-2">DATA ANALYTICS Platform Certification Training Program Reviews</h2> */}
                
                <h2 className="text-center fs-5">
                    <span className="d-block text-dark mb-1">Courses We Offer </span> 
                    {/* <span className="d-block ">from world class industry leaders.</span> */}
                    </h2>
            </div>

            

            <div className="row">

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn1} alt="add" className="ms-auto" width={800} height={300} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 fs-3 oswald text-uppercase">Power Automate</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                {/* <h2 className="d-block mt-2 fs-4">Power Automate Course </h2> */}
                                <ul className="ps-0 mt-2">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">

                                                <ul>  

                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                            <svg height="30" width="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 8.5l2.5 2.5L10 7.5" stroke="#0c9587" stroke-width="0.8" fill="none"/>
</svg>
 </span>
                                                            <span className="ms-4">Duration: 10 Hours + Placement Training</span>
                                                        </div>                                                         
                                                    </li>

                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                            <svg height="30" width="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 7.5l2 2 4-4" stroke="#0c9587" stroke-width="0.8" fill="none"/>
</svg>
 </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold">$395</span></span>
                                                        </div>                                                        
                                                    </li>

                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div> 
                                                    </li> 

                                                </ul>

                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>

              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn4} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3 text-uppercase">Power Apps</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                {/* <h2 className="d-block mt-2 fs-4">Power Apps Course </h2> */}
                                <ul className="ps-0 mt-2">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 15 Hours + Placement Training</span>
                                                        </div> 
                                                        
                                                          </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold">$495</span></span>
                                                        </div>                                                         
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div>                                                         
                                                          </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>


              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn5} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">SQL</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }}  >
                                {/* <h2 className="d-block mt-2  fs-4">SQL Course</h2> */}
                                <ul className="ps-0 mt-2">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 15 Hours + Placement Training</span>
                                                        </div> 
                                                          </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $495</span></span>
                                                        </div> 
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div> 
                                                          </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>



              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn2} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">TABLEAU</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }}  >
                                {/* <h2 className="d-block mt-2 fs-4">Tableau Course</h2> */}
                                <ul className="ps-0 mt-2">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 15 Hours + Placement Training</span>
                                                        </div> 
                                                          </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $495</span></span>
                                                        </div> 
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div> 
                                                          </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>

              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn3} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">POWER BI</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }}  >
                                {/* <h2 className="d-block mt-2 fs-4">Power BI Course</h2> */}
                                <ul className="ps-0 mt-2">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 15 Hours + Placement Training </span>
                                                        </div> 
                                                         </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $495</span> </span>
                                                        </div> 
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div>
                                                        </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>

              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn4} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des2" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">PYTHON</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }}  >
                                {/* <h2 className="d-block mt-2 fs-4">Python Course</h2> */}
                                <ul className="ps-0 mt-2">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 20 Hours + Placement Training  </span>
                                                        </div>
                                                         </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $550</span>  </span>
                                                        </div>
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div>
                                                          </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>


            <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3"> 
                    <div className=" ">   
                        <Image src={learn1} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des3" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">COMBO 1</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                <h2 className="d-block mt-2 fs-4">Tableau + </h2>
                                <ul className="ps-0 mt-4">
                                    <li className="d-block">
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>                        
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">TABLEAU + TABLEAU SERVER + SQL + PYTHON </span>
                                                        </div>
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 50 Hours + Placement Training </span>
                                                        </div>
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $1295</span></span>
                                                        </div>
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div>
                                                         </li>                                                    
                                                </ul>
                                            </div>                        
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>

              

              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn2} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des3" >                    
                    <div className="mt--100 px-3 ">
                        <h2 className="d-block mt-2 oswald fs-3">COMBO 2</h2>
                        <div className="d-block br-20 p-4 bg-white p-1" 
                           style={{ backgroundColor: `#fff;` }} >
                            <h2 className="d-block mt-2 fs-4">Power BI + </h2>
                            <ul className="ps-0  mt-4">
                                <li className="d-block">
                                    <div className="fs-medium">
                                        <div className="top_banner_list list-disc">
                                            <ul className="list-disc">                        
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">POWER BI + POWER BI SERVICE + SQL + PYTHON</span>
                                                        </div>                                                    
                                                    </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 50 Hours + Placement Training</span>
                                                        </div>
                                                     </li>          
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $1295</span></span>
                                                        </div>
                                                     </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div>
                                                        </li> 
                                            </ul>
                                        </div>    
                                    </div>                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>                   
              </div>


              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn3} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des3" >                    
                    <div className="mt--100 px-3 ">
                        <h2 className="d-block mt-2 oswald fs-3">COMBO 3 - 
                        <span className="yellow-grad fw-bold">Recommended</span>
                        </h2>
                        <div className="d-block br-20 p-4 bg-white p-1" 
                            style={{ backgroundColor: `#fff;` }} >
                            <h2 className="d-block mt-2 fs-4">Tableau + Power BI</h2>                    
                            <ul className="ps-0  mt-4">
                                <li className="d-block">
                                    <div className="fs-medium">
                                        <div className="top_banner_list">
                                            <ul>                        
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">TABLEAU + TABLEAU SERVER + POWER BI + POWER BI SERVICE +SQL</span>
                                                        </div>
                                                    </li>
                                                
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 55 Hours + Placement Training </span>
                                                        </div>                                                    
                                                     </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees:  <span className="text-green-mid ps-2 fw-bold"> $1295</span> </span>
                                                        </div>
                                                     </li>
                                                <li className="d-block mb-2">
                                                    <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div>
                                                     </li>
                                            </ul>
                                        </div>                        
                                    </div>                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>                   
              </div>


              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn4} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">COMBO 4 - <span className="yellow-grad fw-bold">Recommended</span></h2>  
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }} >
                                <h2 className="d-block mt-2 fs-4">Data Analytics Master Course 1</h2>                    
                                <ul className="ps-0 mt-4">
                                    <li className="d-block">
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>             
                                                    <li className="d-block mb-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">POWER BI + POWER BI SERVICE + POWER APPS + POWER AUTOMATE + SQL</span>
                                                        </div>
                                                         </li>
                                                    
                                                    <li className="d-block mb-2"> 
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Duration: 55 Hours + Placement Training</span>
                                                        </div>
                                                         </li>  
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $1695</span></span>
                                                        </div>
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div> 
                                                         </li>  
                                                                                                        
                                                </ul>
                                            </div>                        
                                        </div>                                    
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
              </div>


              <div className="col-md-6 col-lg-4 mb-4 ">
                <div className="box-shadow rounded-4 bg-white pb-3">                      
                    <div className=" ">   
                        <Image src={learn5} alt="add" className="ms-auto" width={800} height={400} />                                    
                    </div> 
                    <div className="box-des" >                    
                        <div className="mt--100 px-3 ">
                            <h2 className="d-block mt-2 oswald fs-3">COMBO 5</h2>
                            <div className="d-block br-20 p-4 bg-white p-1" 
                                style={{ backgroundColor: `#fff;` }}  >
                                <h2 className="d-block mt-2 fs-4">Data Analytics Master Course 2</h2>
                                <ul className="ps-0 mt-4">
                                    <li className="d-block"> 
                                        <div className="fs-medium">
                                            <div className="top_banner_list">
                                                <ul>                        
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">POWER BI + POWER BI SERVICE + POWER APPS + POWER AUTOMATE + SQL + TABLEAU + TABLEAU SERVER + PYTHON</span>
                                                        </div> 
                                                          </li> 
                                                    
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4"> Duration: 90 Hours + Placement Training</span>
                                                        </div> 
                                                         </li> 
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $1995</span></span>
                                                        </div> 
                                                         </li>
                                                    <li className="d-block mb-2">
                                                        <div className="d-flex position-relative">
                                                            <span className="position-absolute ">
                                                                <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                            <span className="ms-4">Mode: ONLINE, LIVE, INSTRUCTOR-LED.</span>
                                                        </div> 
                                                         </li> 
                                                </ul>
                                            </div>                        
                                        </div>                                     
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>                   
            </div>
              
              

            </div>

            {/* <div className="text-center mt-3">
                <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                <a href="/img/Data Analytics Syllabus.pdf" download className="button-def button-3" target="_blank">
                    <span>Download Syllabus</span> 
                    <span className="ms-2">
                        <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                    </span>
                </a>
            </div> */}

          </div>
        </section>
    );
}

export default Modules;