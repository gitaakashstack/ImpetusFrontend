import React, { useState, useEffect } from "react";
import navlogo from "./impetus-logo-navbar copy.png";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./AdminNavbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

export default function AdminNavbar() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
    // eslint-disable-next-line
    // setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
    // setAnchorEl(null);
  // };

  const [navOn, setNavOn] = useState(false);
  const [style, setStyle] = useState({
    transform: "translateX(-400vh)",
    display: "block",
  });
  const [styleHam1, setStyleHam1] = useState();
  const [styleHam2, setStyleHam2] = useState();
  const [styleHam3, setStyleHam3] = useState();
  const [registrations, setRegistrations] = useState(0);
  const [messages, setMessages] = useState(0);

  async function logoutHandler() {
    const resp = await fetch(`${process.env.REACT_APP_SERVER}/adminlogout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    window.localStorage.clear();
    document.cookie = "adminjwtoken = ";
    setTimeout(() => window.location.reload(), 1500);
    window.location.replace("/");
    const data = await resp.json();
    console.log(data);
  }

  useEffect(() => {
    if (navOn) {
      setStyle({ transform: "translateX(0vh)", display: "block" });
      setStyleHam1({ transform: "rotateZ(45deg)" });
      setStyleHam2({ transform: "rotateZ(-45deg)", marginTop: "-20%" });
      setStyleHam3({ display: "none" });
    } else {
      setStyle({ transform: "translateX(-400vh)", display: "block" });
      setStyleHam1({ transform: "rotateZ(0deg)" });
      setStyleHam2({ transform: "rotateZ(0deg)", marginTop: "0%" });
      setStyleHam3({ display: "block" });
    }
  }, [navOn]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/registrations`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
      }
    })
      .then((resp) => resp.json())
      .then((data) => setRegistrations(data.registrations));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/messages`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
      }
    })
      .then((resp) => resp.json())
      .then((data) => setMessages(data.messages));
  }, []);

  return (
    <div className="navbar">
      <nav>
        <div className="secondNavbar">
          <img alt="hi" src={navlogo} className="adminNavbar" />
          <ul className="secondsecond">
            <NavLink className="navlinks" to="/adminDashboard">
              <li>Events</li>
            </NavLink>
            <NavLink className="navlinks" to="/registrations">
              <li>
                <span className="roundNoti">{registrations}</span> Registrations
              </li>
            </NavLink>
            <NavLink className="navlinks" to="/messages">
              <li>
                <span className="roundNoti">{messages}</span> Messages
              </li>
            </NavLink>
            {/* <div className="navlinks">
              <li
                id="basic-button"
                ariaControls="basic-menu"
                ariaHaspopup="true"
                ariaExpanded={open ? "true" : undefined}
                onClick={handleClick}
              >Reminder<NotificationsActiveIcon
                  style={{
                    fontSize: "1.1rem",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </li>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Roborance</MenuItem>
                <MenuItem onClick={handleClose}>Scrapyard</MenuItem>
                <MenuItem onClick={handleClose}>Line Follower</MenuItem>
                <MenuItem onClick={handleClose}>Yantra Search</MenuItem>
              </Menu>
            </div> */}
            <NavLink className="navlinks" to="/sendmessage">
             <li>
                Send Message
              </li>
            </NavLink>
          </ul>
          <ul>
            {window.localStorage.getItem("admintoken") ? (
              <div className="navlinks" onClick={logoutHandler}>
                <li>
                  <LogoutIcon
                    style={{
                      fontSize: "2.5rem",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </li>
              </div>
            ) : (
              <NavLink className="navlinks" to="/login">
                <li>
                  <AccountCircleIcon
                    style={{
                      fontSize: "2.5rem",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </li>
              </NavLink>
            )}
          </ul>
          <div
            className="hamburger"
            onClick={() => {
              setNavOn(!navOn);
            }}
          >
            <div className="ham1" style={styleHam1}></div>
            <div className="ham2" style={styleHam2}></div>
            <div className="ham3" style={styleHam3}></div>
          </div>
        </div>
      </nav>
      <div>
        <ul className="secondCollapse" style={style}>
          <NavLink className="navlinks" to="/adminDashboard">
            <li>Events</li>
          </NavLink>
          <NavLink className="navlinks" to="/registrations">
            <li>
              <span className="roundNoti">{registrations}</span> Registrations
            </li>
          </NavLink>
          <NavLink className="navlinks" to="/messages">
            <li>
              <span className="roundNoti">{messages}</span> Messages
            </li>
          </NavLink>
          <NavLink className="navlinks" to="/sendmessage">
            <li>
              Send Reminder
            </li>
          </NavLink>
          {window.localStorage.getItem("admintoken") ? (
            <div className="navlinks" onClick={logoutHandler}>
              <li>
                <LogoutIcon
                  style={{
                    fontSize: "2.5rem",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </li>
            </div>
          ) : (
            <NavLink className="navlinks" to="/adminlogin">
              <li>
                <AccountCircleIcon
                  style={{
                    fontSize: "2.5rem",
                    color: "black",
                    cursor: "pointer",
                  }}
                />
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
}
