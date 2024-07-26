"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Beginners: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
                <section>
                    <div className="">
                        <h2 className="text-center text-lg-start mt-0"> Microsoft 365 Batch Details</h2>
                        <ul className="responsive-table pl-0">
                            <li className="table-header">
                                <div className="col col-01">Date</div>
                                <div className="col col-02">Course</div>
                                <div className="col col-03">AWST</div>
                                <div className="col col-03">EST</div>
                                <div className="col col-04">Status</div>
                                <div className="col col-05">Booking</div>
                            </li>
                            <li className="table-row">
                                <div className="col col-01" data-label="Date">29 June 24</div>
                                <div className="col col-02" data-label="Course">Microsoft 365</div>
                                <div className="col col-03" data-label="City">AWST</div>
                                <div className="col col-03" data-label="City">EST</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>    
                            <li className="table-row">
                                <div className="col col-01" data-label="Date">29 July 24</div>
                                <div className="col col-02" data-label="Course">Microsoft 365</div>
                                <div className="col col-03" data-label="City">AWST</div>
                                <div className="col col-03" data-label="City">EST</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>  
                            <li className="table-row">
                                <div className="col col-01" data-label="Date">12 July 24</div>
                                <div className="col col-02" data-label="Course">Microsoft 365</div>
                                <div className="col col-03" data-label="City">AWST</div>
                                <div className="col col-03" data-label="City">EST</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>   

                            <li className="table-row">
                                <div className="col col-01" data-label="Date">13 July 24</div>
                                <div className="col col-02" data-label="Course">Microsoft 365</div>
                                <div className="col col-03" data-label="City">AWST</div>
                                <div className="col col-03" data-label="City">EST</div>
                                <div className="col col-04" data-label="Status">Confirmed</div>
                                <div className="col col-05" data-label="Booking">
                                    <Link className="fs-regular text-green-mid" href="#">Book Now</Link>
                                </div>
                            </li>  

                            <li className="table-row">
                                <div className="col col-01" data-label="Date">19 July 24</div>
                                <div className="col col-02" data-label="Course">Microsoft 365</div>
                                <div className="col col-03" data-label="City">AWST</div>
                                <div className="col col-03" data-label="City">EST</div>
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

export default Beginners;