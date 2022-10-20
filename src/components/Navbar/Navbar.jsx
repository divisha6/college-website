import React from "react";
import classes from './Navbar.module.css';
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <!-- Navbar -->
    <div style={{marginBottom:"15px"}}>
      <div className={classes.navbar}>
        <img
          src={logo}
          alt=""
          width="50"
          height="50"
          className="Logo"
          style={{ marginTop: "20px", marginLeft: "10px" }}
        />
        <h3 style={{ marginTop: "27px", marginLeft: "20px", color: "white" }}>
          Holy Cross
        </h3>
        <ul className={classes.Links}>
          <li style={{ fontWeight: "bolder", color: "white" }}>
            <Link
              to="/Home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li
            style={{ marginLeft: "15px", fontWeight: "bolder", color: "white" }}
          >
            <Link
              to="/Faculty"
              style={{ textDecoration: "none", color: "white" }}
            >
              Faculty
            </Link>
          </li>
          <li style={{ marginLeft: "15px", fontWeight: "bolder" }}>
            <Link
              to="/Courses"
              style={{ textDecoration: "none", color: "white" }}
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
