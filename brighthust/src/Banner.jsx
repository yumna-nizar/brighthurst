import React from 'react'
import industryimage from "/src/assets/industry-img.svg";

const Banner = () => {
  return (
   <div style={{ position: "relative" }}>
        <img
          src={industryimage}
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />

        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h2 className="font-aileron text-white text-center hero-text" style={{marginBottom: "20px"}}>
            Shaping the UAE’s future with precision & passion
          </h2>
          <h6 className=" text-white text-center bt-4" style={{marginBottom: "25px", maxWidth: "590px"}}>
            Bright Hurst Contracting LLC delivers expert interior fit-out, MEP,
            and civil works across the UAE with a focus on quality, innovation,
            and integrity.
          </h6>
          <button className=" rounded-pill px-4 font-satoshi white-button">
          Get A Quote
        </button>
        </div>
        
      </div>
  )
}

export default Banner