import React from "react";

interface InputProps{
  HandsOnTraining:string;
  HandsonTrainingProject:string;
  PracticalAssignment:string;
}

const MainBannerCta:React.FC <InputProps> = (({HandsOnTraining="",HandsonTrainingProject="",PracticalAssignment=""})=>{
    return(
         <div className="container">
              <section className="mb-8  pt-6 pb-8">
                <div className="">                  
                  <div className="bdr1 overflow-hidden r-20">                
                    <div className="bg-white r-20">
                        <div className="row align-items-center">

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold ">
                                            {HandsOnTraining}+Hrs
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4">Hands On Training</h2>
                                      </div>                                                                
                                    </li>
                                </ul> 
                            </div>
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4  bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold ">
                                          {HandsonTrainingProject} Live
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4">Handson Training Project</h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            >
                                            {PracticalAssignment}Hrs
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4"> Practical Assignment </h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>

                          <div className="col-lg-3 my-2 ">
                            <div className=" px-2 py-2 px-lg-4 py-lg-4 bg-white text-center">                  
                                <ul className="ps-0">
                                    <li className="d-block">
                                      <div className="mb-3">
                                        <span className="d-block me-2 ">
                                          <h2 className=" fs-5-0 mb-3 text-grad fw-semibold "
                                            >
                                            15+
                                          </h2>                                      
                                        </span>                            
                                        <h2 className="d-block mt-2 fs-4"> Years of Experience </h2>
                                      </div>                                                                
                                    </li>
                                </ul>
                            </div>                   
                          </div>
                        

                        </div>
                    </div>
                  </div>
                </div>
              </section>
          </div>
    )
});

export default MainBannerCta;