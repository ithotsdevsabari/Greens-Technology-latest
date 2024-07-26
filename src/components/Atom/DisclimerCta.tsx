"use client";
import React, { useState } from "react";

interface InputProps{
    disclimerCourse:string
}

const Disclaimer: React.FC<InputProps> = ({disclimerCourse=""}) => {
  const [toggler, setToggler] = useState(false);
  return (
	 
        <section className=" py-2">
          <div className="container"> 

            <div className="">            
                <h2 className="text-uppercase text-center fs--18 my-1">
                Disclaimer: "Please note that this course provides training to prepare for the {disclimerCourse} certification. The certification exam is not included and must be completed separately through an accredited certification body."
                </h2>                
            </div>

          </div>
        </section>
    );
}

export default Disclaimer;