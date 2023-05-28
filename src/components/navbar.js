import React from "react";
import "./navbar.css";
import searchicon from "../icons/search-icon.png";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar_container">
        <span class="left_items">
          <h1 class="edyoda_icon">EDYODA</h1>
          <select class="courses">
            <option defaultValue={"courses"}>Courses</option>
          </select>
          <select class="programs">
            <option defaultValue={"programs"}>Programs</option>
          </select>
        </span>
        <span class="right_items">
          <img src={searchicon} alt="search" class="searchicon" />
          <h1>Log in</h1>
          <button>JOIN NOW</button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
