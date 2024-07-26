"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import moon from "../../../public/img/icons/moon.webp";
import arrowBot from "../../../public/img/icons/arrowbot.png";



const Advanced: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
<section>
<div className="">
          <h2> Data Analytics Advanced Course Batch Details</h2>
                        <ul className="responsive-table pl-0">
                            <li className="table-header">
                                <div className="col col-01">Date</div>
                                <div className="col col-02">Course</div>
                                <div className="col col-03">City</div>
                                <div className="col col-04">Status</div>
                                <div className="col col-05">Booking</div>
                            </li>

                            <li className="table-row">
                                <div className="col col-01" data-label="Date">Wed 29 May 24</div>
                                <div className="col col-02" data-label="Course">Data Analytics Advanced</div>
                                <div className="col col-03" data-label="City">Sydney</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>  
                            <li className="table-row">
                                <div className="col col-01" data-label="Date">Wed 12 Jun 24</div>
                                <div className="col col-02" data-label="Course">Data Analytics Advanced</div>
                                <div className="col col-03" data-label="City">Sydney</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>   

                            <li className="table-row">
                                <div className="col col-01" data-label="Date">Thu 13 Jun 24</div>
                                <div className="col col-02" data-label="Course">Data Analytics Advanced</div>
                                <div className="col col-03" data-label="City">Sydney</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>  

                            <li className="table-row">
                                <div className="col col-01" data-label="Date">Wed 19 Jun 24</div>
                                <div className="col col-02" data-label="Course">Data Analytics Advanced</div>
                                <div className="col col-03" data-label="City">Sydney</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li> 

                        </ul>
                    </div>
</section>


</>
    );
}

export default Advanced;