"use client";
import React, { useState } from "react";

const SpecialOffer: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
            <section className="mb-8 py-2">

                <div className="container">
                    
                    <div className="row">

                        <div className="col-md-12 col-lg-12 mb-4 ">
                            <div className="box-shadow rounded-4 special-grad pb-1">                                   
                                <div className="" >                    
                                    <div className=" px-4 py-3">
                                        <h2 className="d-block mt-2 fs-2 text-center">
                                            Special Offer 
                                            </h2>
                                        <h2 className="d-block mt-2 fs-4  text-center">
                                            Enroll in any three Microsoft 365 courses and receive a 20% discount on the total price. 
                                            </h2>
                                    </div>
                                </div>
                            </div>                   
                        </div>   

                    </div>

                </div>
                
            </section>

        </>
    );
}

export default SpecialOffer;