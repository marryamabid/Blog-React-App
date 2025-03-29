import React from "react";
import logo from "../assets/logo-blog.png";

function Logo({ width = "90px", height = "90px", className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logo}
        alt="Company Logo"
        className="object-contain transition-transform duration-300 hover:scale-110"
        style={{ width, height }}
      />
    </div>
  );
}
export default Logo;