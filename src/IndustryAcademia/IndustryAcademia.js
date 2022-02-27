import React,{useEffect} from "react";
import "./IndustryAcademia.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function IndustryAcademia() {
  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  return (
    <div>
      <div className="pageCover4">
        <Navbar/>
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Impetus Industry-Academia Meet 2022</p>
        </div>
  <div className="mainObjective">
    <p className="headingOfEventObjective">
        Event Details
    </p>
    <p className="descriptionOfEventObjectives">March 20, 2022 - 2-8 PM</p>

    <p className="headingOfEventObjective">
        About Us
    </p>
    <p className="descriptionOfEventObjectives">Industry-Academia Meet is a platform where we aim to establish a productive dialogue between the Industrial and Academic spheres, provide exposure to students and academicians about the current and future scenario of the Industrial environment, and enable them to upskill themselves and be future-proof and Industry- ready.<br/><br/>IMPETUS aims to create strong interactive communication between leading officials from multiple industries, academicians, and prospective students. The meet will cushion the process of campus engagement between the companies and the institute and provide a holistic perspective to their respective needs.<br/><br/>The interactive nature of the sessions and expert- led discussion panels will help the participants to have an enhanced learning experience.</p>
    <p className="headingOfEventObjective">Benefits</p>
    <ul className="descriptionOfEventObjectives"> 
        <li>
        <strong>Industry-Academia Interaction</strong><br/> Active interaction between the industries and scholars of the institute and brainstorming prevalent issues and challenges - paving the way for future collaboration.<br/><br/>
        </li>
        <li>
        <strong>Strategy Planning</strong><br/> Innovative and time-effective strategies to ease the hiring process.<br/><br/>
        </li>
        <li>
       <strong>Solutions from Academicians</strong><br/> Presentation of viable solutions through sound studies and research publications by the top- notch academicians of the institute.<br/><br/>
        </li>

        <li>
       <strong>Building Industry-to-Industry Connection</strong><br/> An opportunity to interact with prominent delegates from other industries and research institutes during IMPETUS 2022.<br/><br/>
        </li>
        
    </ul>
    <p className="headingOfEventObjective">
        Participating stalwarts from the industry
    </p>
      <p >
       Stay Tuned.
    </p>
  </div>
      </div>
     <Footer/>
    </div>
  );
}
