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
        Event Objectives
    </p>
    <p className="descriptionOfEventObjectives">The Meet will cushion the process of campus engagement between the companies and the institute and provide a holistic perspective to their respective needs. It champi- ons innovative practices, insights, scenarios. The interactive nature of the sessions and expert-led discussion panels will transcend the participants to an enhanced learning experience.</p>
    <p className="headingOfEventObjective">Key takeaways for the Corporate</p>
    <ul className="descriptionOfEventObjectives"> 
        <li>
        Resolving technical issues through projects and consultancy
        </li>
        <li>
        Presentation of viable solutions through sound studies and Research publications by the top-notch academicians of the institute
        </li>
        <li>
        Innovative and time-effective strategies to ease the Hiring process
        </li>

        <li>
        Active interaction of the industries with the scholars of the institute and to brainstorm issues and challenges faced by the respective members
        </li>
        <li>
        Understand the insights and rate the institute
        </li>
        <li>
        An opportunity to interact with prominent delegates from other industries and research institutes during IMPETUS 2020
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
