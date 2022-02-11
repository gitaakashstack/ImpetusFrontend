import React, { useState, useEffect } from "react";
import navlogo from "./impetus-logo-navbar copy.png";
import { NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [navOn, setNavOn] = useState(false);
  const [style, setStyle] = useState({
    transform: "translateX(-400vh)",
    display: "block",
  });
  const [styleHam1, setStyleHam1] = useState();
  const [styleHam2, setStyleHam2] = useState();
  const [styleHam3, setStyleHam3] = useState();

  async function logoutHandler() {
    const resp = await fetch(`${process.env.REACT_APP_SERVER}/logout`, {
      method: "GET",
      credentials: "include",
    });
    window.localStorage.clear();
    document.cookie = "jwtoken = ";
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
  return (
    <div className="navbar">
      <nav>
        <div className="secondNavbar">
          <NavLink to="/">
            <img alt="hi" src={navlogo} className="acerLogo" />
          </NavLink>
          <ul className="secondsecond">
            <NavLink className="navlinks" to="/aboutUs">
              <li>About Us</li>
            </NavLink>
            <NavLink className="navlinks" to="/events">
              <li>Events</li>
            </NavLink>
            <NavLink className="navlinks" to="/industry">
              <li>Industry Academia Meet</li>
            </NavLink>
            <NavLink className="navlinks" to="/team">
              <li>Team</li>
            </NavLink>
            <NavLink className="navlinks" to="/contactUs">
              <li>Contact Us</li>
            </NavLink>
            <NavLink className="navlinks" to="/leaderboard">
              <li>LeaderBoard</li>
            </NavLink>
          </ul>
          <ul>
            {window.localStorage.getItem("token") ? (
              <div>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <AccountCircleIcon
                    style={{
                      fontSize: "2.5rem",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <NavLink className="navlinks" to="/about">
                    <MenuItem>
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      Profile
                    </MenuItem>
                  </NavLink>
                  <MenuItem onClick={logoutHandler}>
                    {" "}
                    <LogoutIcon
                      style={{
                        fontSize: "1 rem",
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <PersonAddIcon
                    style={{
                      fontSize: "2.5rem",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <NavLink className="navlinks" to="/login">
                    <MenuItem >
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      Student's Login
                    </MenuItem>
                  </NavLink>
                  <NavLink className="navlinks" to="/adminlogin">
                    <MenuItem>
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      Admin's Login
                    </MenuItem>
                  </NavLink>
                  <NavLink className="navlinks" to="/calogin">
                    <MenuItem>
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      C A 's Login
                    </MenuItem>
                  </NavLink>
                </Menu>
              </div>
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
          <NavLink className="navlinks" to="/aboutUs">
            <li>About Us</li>
          </NavLink>
          <NavLink className="navlinks" to="/events">
            <li>Events</li>
          </NavLink>
          <NavLink className="navlinks" to="/industry">
            <li>Industry Academia Meet</li>
          </NavLink>
          <NavLink className="navlinks" to="/team">
            <li>Team</li>
          </NavLink>
          <NavLink className="navlinks" to="/contactUs">
            <li>Contact Us</li>
          </NavLink>
          <NavLink className="navlinks" to="/leaderboard">
            <li>LeaderBoard</li>
          </NavLink>
          {window.localStorage.getItem("token") ? (
            <NavLink className="navlinks" to="/about">
              <li>My Profile</li>
            </NavLink>
          ) : null}
          {window.localStorage.getItem("token") ? (
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
           <div>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <PersonAddIcon
                    style={{
                      fontSize: "2.5rem",
                      color: "black",
                      cursor: "pointer",
                    }}
                  />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <NavLink className="navlinks" to="/login">
                    <MenuItem >
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      <p>
                      Student's Login
                      </p>
                    </MenuItem>
                  </NavLink>
                  <NavLink className="navlinks" to="/adminlogin">
                    <MenuItem>
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      <p>
                      Admin's Login
                      </p>
                    </MenuItem>
                  </NavLink>
                  <NavLink className="navlinks" to="/calogin">
                    <MenuItem>
                      <AccountCircleIcon
                        style={{
                          fontSize: "1 rem",
                          color: "black",
                          cursor: "pointer",
                        }}
                      />
                      <p>
                      C A 's Login
                      </p>
                    </MenuItem>
                  </NavLink>
                </Menu>
              </div>
          )}
        </ul>
      </div>
    </div>
  );
}
