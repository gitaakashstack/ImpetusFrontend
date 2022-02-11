import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div>
       <strong>Society of Mechanical Engineering, Indian Institute of Engineering
        Science and Technology</strong>, Shibpur, P.O. - Botanic Garden, Howrah - 711
        103, West Bengal, India.
      </div>
      <div className="footerLinks">
            <a href="https://www.facebook.com/smeiiests">
            <FacebookIcon style={{fontSize:"2.5rem" , margin : "5px" , color : "#11468F"}} />
            </a>
            <a href="https://www.instagram.com/sme.iiests/?hl=en">
            <InstagramIcon style={{fontSize:"2.5rem" , margin : "5px" , color : "#11468F"}} />
            </a>
      </div>
      <div>INFO DESK : <br/>Kaustabh Biswas (+91)<a href="https://wa.me/+916296278859">6296278859</a><br/>
           Ankit Singh (+91)<a href="https://wa.me/+918240554489">8240554489</a></div>
    </div>
  );
}
