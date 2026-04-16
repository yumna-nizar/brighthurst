import React from 'react'
import worker from "/src/assets/worker.png";


const Mission = () => {
  return (
   <div className="container my-5">
   
         {/* Title */}
         <h2 className="mb-4 aileron-semibold" style={{fontWeight: "700"}}>Building Excellence, Delivering Trust</h2>
   
         <div className="row align-items-center">
   
           {/* LEFT TEXT */}
           <div className="col-md-4">
             <p className="about-text">
               Bright Hurst Contracting LLC is a leading interior fit-out,
               electro-mechanical, and civil contracting company based in the UAE.
               With a strong commitment to quality, innovation, and integrity, we
               bring client visions to life through expert craftsmanship and project
               excellence. Founded with the vision to redefine industry standards,
               we pride ourselves on delivering complex projects on time, on budget,
               and beyond expectations.
             </p>
           </div>
   
           {/* CENTER IMAGE */}
           <div className="col-md-4 text-center">
             <img src={worker} className="img-fluid about-image" style={{height: "250px"}} alt="" />
           </div>
   
           {/* RIGHT CARDS */}
           <div className="col-md-4">
   
             <div className="info-card mb-3">
               <h6>MISSION</h6>
               <p>
                 To deliver premium-quality construction and interior solutions
                 with precision and professionalism.
               </p>
             </div>
   
             <div className="info-card">
               <h6>VISION</h6>
               <p>
                 To be one of the most trusted and respected contracting companies
                 in the UAE.
               </p>
             </div>
   
           </div>
   
         </div>
       </div>
  )
}

export default Mission