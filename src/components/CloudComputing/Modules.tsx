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
import Student from "../../../public/img/scrum/scrum_student.webp";
import module from "../../../public/img/microsoft365/microsoft2.webp";


const Modules: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
            <section className="mb-8  py-6">
            <div className="container">

                <div className="mb-5">                     
                    <h2 className="text-center fs-5">
                        <span className="d-block text-dark mb-1">Courses We Offer </span> 
                    </h2>
                </div> 

                <div className="row">


                    <div className="col-md-6 col-lg-4 mb-4 ">
                        <div className="box-shadow rounded-4 bg-white pb-3">                      
                            <div className=" ">   
                                <Image src={learn1} alt="add" className="ms-auto" width={800} height={400} />                                    
                            </div> 
                            <div className="box-des2" >                    
                                <div className="mt--100 px-3 ">
                                    <h2 className="d-block mt-2 oswald fs-3"> Data Engineering - AWS </h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        {/* <h2 className="d-block mt-2 fs-4">Microsoft Teams Course </h2> */}
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                        <ul>  
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 40 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $795</span>
                                                                    </span>
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
                                    <h2 className="d-block mt-2 oswald fs-3">Data Engineering - Azure</h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        {/* <h2 className="d-block mt-2 fs-4">Microsoft Outlook Course </h2> */}
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                        <ul>  
                                                        <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 40 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $795</span></span>
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
                                    <h2 className="d-block mt-2 oswald fs-3">Data Engineering - GCP</h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        {/* <h2 className="d-block mt-2 fs-4">Microsoft PowerPoint Course </h2> */}
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                      <ul>  
                                                        <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 40 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $795</span></span>
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
                                    <h2 className="d-block mt-2 oswald fs-3">DevOps Engineering</h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        {/* <h2 className="d-block mt-2 fs-4">Microsoft OneNote Course </h2> */}
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                      <ul>  
                                                        <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 40 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $795</span></span>
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
                                    <h2 className="d-block mt-2 oswald fs-3">AWS Cloud Engineering</h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                      <ul>  
                                                        <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 20 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $595</span> </span>
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
                            <div className="box-des2" >                    
                                <div className="mt--100 px-3 ">
                                    <h2 className="d-block mt-2 oswald fs-3">Azure Cloud Engineering</h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        {/* <h2 className="d-block mt-2 fs-4">Microsoft OneDrive Course </h2> */}
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                        <ul>
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 20 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $595</span> </span>
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
                                    <h2 className="d-block mt-2 oswald fs-3">GCP Cloud Engineering</h2>
                                    <div className="d-block br-20 p-4 bg-white p-1" 
                                        style={{ backgroundColor: `#fff;` }} >
                                        {/* <h2 className="d-block mt-2 fs-4">Microsoft Access Course </h2> */}
                                        <ul className="ps-0 mt-2">
                                            <li className="d-block"> 
                                                <div className="fs-medium">
                                                    <div className="top_banner_list">
                                                      <ul>  
                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Duration: 20 Hours</span>
                                                                </div>                                                         
                                                            </li>

                                                            <li className="d-block mb-2">
                                                                <div className="d-flex position-relative">
                                                                    <span className="position-absolute ">
                                                                        <Image src={tick} alt="tick" className="ms-auto me-2" width={15} height={5} /> </span>
                                                                    <span className="ms-4">Fees: <span className="text-green-mid ps-2 fw-bold"> $595</span> </span>
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

                <div className="text-center mt-3">
                    <Link href="" className="button-def button-3-white me-3"><span>View All</span></Link>
                    {/* <a href="/img/Data Analytics Syllabus.pdf" download className="button-def button-3" target="_blank"> */}
                    <a href="/img/" download className="button-def button-3" target="_blank">
                        <span>Download Syllabus</span> 
                        <span className="ms-2">
                            <Image src={downLoad} alt="add" className="ms-auto" width={20} height={20} /> 
                        </span>
                    </a>
                </div>

            </div>
            </section>

        </>
    );
}

export default Modules;