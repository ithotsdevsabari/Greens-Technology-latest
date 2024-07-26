"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";
import Image from "next/image";

import faqApp from "../../../public/img/faq-app.webp"; 

interface FaqFormat{
    id:string;
    uuid:string
    question:string;
    answer:string
}

interface InputProps{
    faqList:FaqFormat[];
}

const FaqList: React.FC<InputProps> = ({faqList=[]}) => {
  return (
  
      <div className="faq-area pt-5 pb-7">
        <div className="container">
          <div className="section-title">            
            <h2 className="text-center fs-5">
                <span className="d-inline-block text-dark mb-2 me-3">Frequently Asked Questions</span> 
            </h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div
                className="faq-img"
              >
                <Image
                  src={faqApp}
                  alt="Image"
                  width={1000}
                  height={857}
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div
                className="faq-accordion"
              >
                {
                   faqList &&
                     <Accordion allowZeroExpanded preExpanded={["a"]}>
                    {
                        faqList?.map((result,index)=>{
                            return(
                                <AccordionItem uuid={result.uuid} key={result.id}>

                                <AccordionItemHeading className="text-grad">
                                  <AccordionItemButton>
                                    <span className="text-grad">
                                      {result.question}
                                    </span>
                                  </AccordionItemButton>
                                </AccordionItemHeading>
            
                                <AccordionItemPanel>
                                  <p>
                                  {result.answer}
                                  </p>
                                </AccordionItemPanel>
                              </AccordionItem>
                            )
                        })
                    }
                </Accordion>
                }
              
              </div>
            </div>
          </div>

          <div className="text-center mt-3"> 
              <Link href="" className="button-def button-3 me-3 mt-4 mb-3 fs-4"><span>View All</span></Link>
          </div> 
        </div>
      </div>
  
  );
};

export default FaqList;
