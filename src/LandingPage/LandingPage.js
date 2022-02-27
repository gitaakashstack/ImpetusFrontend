import React,{useEffect} from "react";
import gear from "./gear.png";
import impetusLogo from "./impetus-logo-navbar copy.png";
import "./LandingPage.css";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
// import  Sp1 from "./Meta Gate.jpg";
import  Sp2 from "./RED FM LOGO2.png";
import  Sp3 from "./namekart logo 2.png";
import  Sp4 from "./Exergic-Logo.png";
import  Sp5 from "./abroad-education-VISA-documentation.png";
import  Sp6 from "./TA 2.jpg";




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
          <p style={{textAlign : 'center', color:'orangered' , fontWeight: 'bold' , position: 'absolute' , zIndex : '9999' , width : '100%'}}>Website sponsored by Namekart</p>
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
        <div style={{width: "80%" , margin : "auto" , marginTop : "60px"}}>
          <h1 style={{color: "white" , fontSize : "24px" , textAlign : "center" , marginBottom : "10px"}}>Our Sponsors</h1>
        <div className="team_grid">
          

      {/* <div className="team_grid_div_img" data-aos="fade-right">
      <img src={Sp1} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>META GATE</p>
      </div> */}


        <div className="team_grid_div_img" data-aos="fade-right">
      <img src={Sp2} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>RED FM 93.5</p>
      </div>


        <div className="team_grid_div_img" data-aos="fade-right">
      <img src={Sp3} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>NAME KART</p>
      </div>


        <div className="team_grid_div_img" data-aos="fade-right">
      <img src={Sp4} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>EXERGIC</p>
      </div>


        <div className="team_grid_div_img" data-aos="fade-right">
      <img src={Sp5} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>ABROAD EDUCATION</p>
      </div>

       <div className="team_grid_div_img" data-aos="fade-right">
      <img src={Sp6} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>TECHANALOGY</p>
      </div>

        </div>


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
