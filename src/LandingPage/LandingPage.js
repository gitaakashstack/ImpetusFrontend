import React,{useEffect} from "react";
import gear from "./gear.png";
import impetusLogo from "./impetus-logo-navbar copy.png";
import "./LandingPage.css";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";


import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function LandingPage() {

   AOS.init({duration:500});
  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  return (
    <div>
      <div className="pageCover">
        <img src={impetusLogo} id="logo" alt="hi" />
      </div>
      <div className="mainContent">
        <div className="impetus">
          <p>
            Impetus 5.0{" "}
            <NavLink to="/adminlogin">
              <img src={gear} alt="hi" className="gear2" />
            </NavLink>
          </p>
          <p className="bodyHeading">THE SOCIETY OF MECHANICAL ENGINEERS</p>
        </div>
        <div className="navigationGrid">
          <Link to="/aboutUs" className="cardLink">
            <div className="card" data-aos="fade-right">
              <p>About Us</p>
            </div>
          </Link>
          <Link to="/events" className="cardLink">
            <div className="card" data-aos="fade-left">
              <p>Events</p>
            </div>
          </Link>
          <Link to="/industry" className="cardLink">
            <div className="card" data-aos="fade-right">
              <p>Industry Academia Meet</p>
            </div>
          </Link>
          <Link to="/team" className="cardLink">
            <div className="card" data-aos="fade-left">
              <p>Team</p>
            </div>
          </Link>
          <Link to="/contactUs" className="cardLink">
            <div className="card" data-aos="fade-right">
              <p>Contact Us</p>
            </div>
          </Link>
          {window.localStorage.getItem("token") ? (
            <Link to="/about" className="cardLink">
              <div className="card" data-aos="fade-left">
                <p>My Profile</p>
              </div>
            </Link>
          ) : (
            <Link to="/login" className="cardLink">
              <div className="card" data-aos="fade-right">
                <p>Login</p>
              </div>
            </Link>
          )}
          <Link to="/leaderboard" className="cardLink">
            <div className="card" data-aos="fade-left">
              <p>Leader Board</p>
            </div>
          </Link>
          {window.localStorage.getItem("catoken") ? (
            <Link to="/caDashboard" className="cardLink">
              <div className="card" data-aos="fade-right">
                <p>CA Dashboard</p>
              </div>
            </Link>
          ) : (
            <Link to="/calogin" className="cardLink">
              <div className="card" data-aos="fade-left">
                <p>CA Login</p>
              </div>
            </Link>
          )}
          {window.localStorage.getItem("admintoken") ? (
            <Link to="/adminDashBoard" className="cardLink">
              <div className="card" data-aos="fade-right">
                <p>Admin's Dashboard</p>
              </div>
            </Link>
          ) : (
            <Link to="/adminlogin" className="cardLink">
              <div className="card" data-aos="fade-left">
                <p>Admin Login</p>
              </div>
            </Link>
          )}
        </div>
        {/* <div className="camambas"> 
        <LeaderShipCard/>
        <CampusAmbas/>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
