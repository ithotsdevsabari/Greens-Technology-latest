"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

import Image from "next/image";
import phoneIcon from "../../../public/img/phone.png";

const Address: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  

        
          

                <div className="course-box shadow-box mb-3 mt-5 address">
                    <h4 className="text-center fs-4">
                        <span className="d-block text-grad mb-2"> Contact Details:</span>                     
                    </h4>
                    <p>
                    <span className="d-block text-center">Unit 94/10 Sleeper Lane,<br/>
                        Suite 103,<br/>
                        Cockburn Central WA 6164,<br/>
                        Australia.</span>
                    </p>
                </div>



            


        </>
    );
}

export default Address;