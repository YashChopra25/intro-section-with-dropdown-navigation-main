import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "./images/logo.svg";
import icon_menu from "./images/icon-menu.svg";
import icon_close_menu from "./images/icon-close-menu.svg";
import downArrow from "./images/icon-arrow-down.svg";
import calender from "./images/icon-calendar.svg";
import todolist from "./images/icon-todo.svg";
import reminder from "./images/icon-reminders.svg";
import planning from "./images/icon-planning.svg";

const Header = () => {
  const dropdownhide = (id) => {
    document.getElementById(id).classList.toggle("hide");
  };
  const hamburger = () => {
    var icon = document.getElementById("hamburger");
    var navlinks = document.getElementById("navlinks");
    var mobilemenu = document.getElementById("mobilemenu");
    if (icon.alt === "icon_menu") {
      icon.setAttribute("src", icon_close_menu);
      icon.setAttribute("alt", "icon_close_menu");
      navlinks.style.display="block";
      mobilemenu.style.visibility="visible";
    } else {
      icon.setAttribute("src", icon_menu);
      icon.setAttribute("alt", "icon_menu");
      navlinks.style.display="none";
      mobilemenu.style.visibility="hidden";
    }
  };
  return (
    <>
      <div className="nav">
        <div className="mobileheader">
          <img src={logo} alt="logo" />
          <img
            src={icon_menu}
            alt="icon_menu"
            id="hamburger"
            onClick={hamburger}
          />
        </div>
        <div className=" navlinks" id="navlinks">
          <div className="lefticon" >
            <div className="dropdown">
              <Link to="/" onClick={() => dropdownhide("dropL1")}>
                Feature
                <img src={downArrow} alt="downarrow" />
              </Link>
              <div className="droplinks hide" id="dropL1">
                <Link to="Todolist">
                  <img src={todolist} alt="todolist" />
                  Todo List
                </Link>
                <Link to="calender">
                  <img src={calender} alt="calender" />
                  Calender
                </Link>
                <Link to="reminder">
                  <img src={reminder} alt="reminder" />
                  reminder
                </Link>
                <Link to="planning">
                  <img src={planning} alt="planning" />
                  planning
                </Link>
              </div>
            </div>
            <div className="dropdown ">
              <Link to="/" onClick={() => dropdownhide("dropL2")}>
                Company
                <img src={downArrow} alt="downarrow" />
              </Link>
              <div id="dropL2" className="droplinks droplink2 hide">
                <Link to="history">History</Link>
                <Link to="Out_Team">Out Team</Link>
                <Link to="Blog">Blog</Link>
              </div>
            </div>
            <Link to="/">Carrers</Link>
            <Link to="/">About</Link>
          </div>
          <div className="rigthicon">
            <Link to="/">Login</Link>
            <Link to="/">Register</Link>
          </div>
        </div>
        <div className="mobilemenu" id="mobilemenu">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};
export default Header;
