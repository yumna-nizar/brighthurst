import React from "react";
import brighthurstLogo from "/src/assets/brighthurst-logo.svg";


const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center container">
      <img src={brighthurstLogo} alt="" className="logo" />
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex align-items-center h-full gap-4 menu">
          <p className="nav-item font-satoshi">HOME</p>
          <p className="nav-item font-satoshi">HOME</p>
          <p className="nav-item font-satoshi">HOME</p>
          <p className="nav-item font-satoshi">HOME</p>
        </div>
        <button className="btn btn-seconcary rounded-pill px-4 font-satoshi blue-button">
          CONTACT US
        </button>
      </div>
    </div>
  )
}

export default Header

