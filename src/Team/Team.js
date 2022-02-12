import React,{useEffect} from "react";
import "./Team.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import P1 from "./Photos for website/Aakash Panday- Technical team Head.jpeg"
import P2 from "./Photos for website/Akanksha Kumari- Event Management Executive.jpg"
import P3 from "./Photos for website/Ankit Singh- Main  Coordinator.jpg"
import P4 from "./Photos for website/Arnab Sharma- Sponsorship Executive.jpg"
import P5 from "./Photos for website/Ashwani Kumar- Content _ Graphics Head.jpg"
import P6 from "./Photos for website/Ayush Jaiswaal- Content _ Graphics Executive.jpg"
import P7 from "./Photos for website/Datti Shiva Sujay - Event Management  Head.JPG"
import P8 from "./Photos for website/Garima Dabi- Publicity Executive.jpeg"
import P9 from "./Photos for website/Gaurang Patil- Finance Head_ Alumni-Relations Head.jpeg"
import P10 from "./Photos for website/Karan Raj- Sponsorship Executive.jpeg"
import P11 from "./Photos for website/Kaustabh Biswas- Publicity Head.jpg"
import P12 from "./Photos for website/Kshitij Gupta Content _ Graphics Executive.jpg"
import P13 from "./Photos for website/Maloth Vijay- Event Management Executive.jpg"
import P14 from "./Photos for website/Mohammed Nazrullah- Event Management  Head.jpeg"
import P15 from "./Photos for website/Muskaan Singh- Sponsorship Executive.jpg"
import P16 from "./Photos for website/Nishita Chauduri- Finance Head.jpeg"
import P17 from "./Photos for website/Rishiraj Dhar- Main Coordinator.jpg"
import P18 from "./Photos for website/Rohan Jana- Joint Coordinator.JPG"
import P19 from "./Photos for website/Shreyanka Saha- Content _ Graphics Head.jpeg"
import P20 from "./Photos for website/Shubhankar Sarkar- Event Management Executive.jpg"
import P21 from "./Photos for website/Sushmayan Trivedi- Technical team Executive.png"
import P22 from "./Photos for website/V. Ameya Ashrith-Event Management  head.jpg"
import P23 from "./Photos for website/Yash Prabhakar Singh- Sponsorship head.jpeg"
import P24 from "./Photos for website/Akaash Kundu- Event Management Head.jpeg"
import P25 from "./Photos for website/Arcot Prasanna Abhinay- Sponsorship Head.png"
import P26 from "./Photos for website/Anurag Sahu- Publicity Head.jpeg"
import P27 from "./Photos for website/Datta Vishal- Publicity Executive.jpeg"
import P28 from "./Photos for website/Jagriti Garg- Event Management Executive.jpeg"
import P29 from "./Photos for website/Rajkumar Voleti.jpeg"
import P30 from "./Photos for website/Sumana Dey- Publicity Executive.jpeg"
import P31 from "./Photos for website/Tannishtha Bag- Event Management Executive.jpeg"


import AOS from 'aos';
import 'aos/dist/aos.css'; 



export default function Team() {

 AOS.init({duration:500});

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
return (
  <div>
      <div className="pageCover5">
        <Navbar/>
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Team</p>
    <div className="team_grid_heading">
          <span className="headingOfEventObjective">Co-ordinators</span>
          </div>
    <div className="team_grid">
      {/* Coordinator */}
      
            <div className="team_grid_div_img" data-aos="fade-right">
            <img src={P3} alt="Hi" className="team_grid_img" />
            <p className="team_grid_div_p" style={{textShadow : "none"}}>Ankit Singh<br/>Main Co-ordinator</p>
            </div>
      
            <div className="team_grid_div_img" data-aos="fade-left">
            <img src={P17} alt="Hi" className="team_grid_img" />
            <p className="team_grid_div_p" style={{textShadow : "none"}}>Rishiraj Dhar<br/>Main Co-ordinator</p>
            </div>
      
      
            <div className="team_grid_div_img" data-aos="fade-right">
            <img src={P18} alt="Hi" className="team_grid_img" />
            <p className="team_grid_div_p" style={{textShadow : "none"}}>Rohan Jana<br/>Joint Co-ordinator</p>
            </div>
      
      
      {/* Coordinator */}
      </div>
      <div className="team_grid_heading">
          <span className="headingOfEventObjective">Event Management Team</span>
      </div>
      <div className="team_grid">
{/* Event Management */}
      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P22} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>V. Ameya Ashrith<br/>Event Management Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P14} alt="Hi" className="team_grid_img" />
            <p className="team_grid_div_p" style={{textShadow : "none"}}>Md. Nazrullah<br/>Event Management Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P7} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Datti Shiva Sujay<br/>Event Management Head</p>
      </div>


      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P31} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Tannishtha Bag<br/>Event Management Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P28} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Jagriti Garg<br/>Event Management Executive</p>
      </div>

     <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P2} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Akanksha Kumari<br/>Event Management Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P20} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Shubhankar Sarkar<br/>Event Management Executive</p>
      </div>


      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P13} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Maloth Vijay<br/>Event Management Executive</p>
      </div>
      
      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P24} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Akaash Kundu<br/>Event Management Head</p>
      </div>
</div>
      {/* Event Management */}
      <div className="team_grid_heading">
          <span className="headingOfEventObjective">Content & Design Team</span>
          </div>
     {/* Content & Design  */}
      <div className="team_grid">

      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P19} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Shreyanka Saha<br/>Content & Design Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P5} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Ashwani Kumar<br/>Content & Design Head</p>
      </div>


      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P12} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Kshitij Gupta<br/>Content & Design Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P6} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Ayush Jaiswaal<br/>Content & Design Executive</p>
      </div>

     {/* Content & Design  */}
</div>
      <div className="team_grid_heading">
          <span className="headingOfEventObjective">Publicity Team</span>
          </div>
{/* Publicity */}
      <div className="team_grid">
 
      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P11} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Kaustabh Biswas<br/>Publicity Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P26} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Anurag Sahu<br/>Publicity Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P30} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Sumana Dey<br/>Publicity Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P8} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Garima Dabi<br/>Publicity Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P27} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Datta Vishal<br/>Publicity Executive</p>
      </div>





{/* Publicity */}

</div>
      <div className="team_grid_heading">
          <span className="headingOfEventObjective">Sponsorship Team</span>
          </div>
{/* Publicity */}
      <div className="team_grid">
{/* Sponsorship */}



      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P23} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Yash Prabhakar<br/>Sponsorship Head</p>
      </div>


      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P25} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Arcot Prasanna Abhinay<br/>Sponsorship Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P15} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Muskaan Singh<br/>Sponsorship Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P10} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Karan Raj<br/>Sponsorship Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P4} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Arnab Sharma<br/>Sponsorship Executive</p>
      </div>


{/* Sponsorship */}

</div>
      <div className="team_grid_heading">
          <span className="headingOfEventObjective">Finance Team</span>
          </div>
{/* Publicity */}
      <div className="team_grid">
{/* Finance  */}

      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P9} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Gaurang Patil<br/>Finance Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P16} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Nishita Chauduri<br/>Finance Executive</p>
      </div>


{/* Finance  */}

</div>
      <div className="team_grid_heading">
          <span className="headingOfEventObjective">Technical Team</span>
          </div>
{/* Publicity */}
      <div className="team_grid">

{/* Technical */}
      <div className="team_grid_div_img" data-aos="fade-left">
      <img src={P1} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Aakash Panday<br/>Technical Head</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P29} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Rajkumar Voleti<br/>Technical Executive</p>
      </div>

      <div className="team_grid_div_img" data-aos="fade-right">
      <img src={P21} alt="Hi" className="team_grid_img" />
      <p className="team_grid_div_p" style={{textShadow : "none"}}>Sushmayan Trivedi<br/>Technical Executive</p>
      </div>



{/* Technical */}
{/* Event Managment */}







{/* Event Managment */}


{/* Content & Graphics */}
  {/* HEAD */}






  {/* HEAD */}
{/* Executive */}




{/* Executive */}



{/* Content & Graphics */}



{/* FINANCE */}

{/* HEAD */}







{/* HEAD */}


{/* Executive */}



     



{/* Executive */}



{/* FINANCE */}



{/* Technical */}


{/* HEAD */}


     


{/* HEAD */}


{/* Executive */}




{/* Executive */}














{/* Technical */}






















        
    </div>
        </div>
       </div>
     <Footer/>
    </div>
  );
}
