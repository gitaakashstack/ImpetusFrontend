import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
// import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";
import swal from 'sweetalert';
import CircularProgress from '@mui/material/CircularProgress';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Contact() {

   AOS.init({duration:500});

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  // const [errMsg , setErrMsg] = useState("");
  var phoneClass = "inputTag";
  var nameClass = "inputTag";
  var emailClass = "inputTag";
  const [nameErr, setNameErr] = useState();
  const [emailErr, setEmailErr] = useState();
  const [PhoneErr, setPhoneErr] = useState();

  const [spinner, setSpinner] = useState(false);

  const [nameError, setNameError] = useState({ display: "none" });
  const [emailError, setEmailError] = useState({ display: "none" });
  const [PhoneError, setPhoneError] = useState({ display: "none" });
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  async function formHandler(e) {
    e.preventDefault();
    if (!name) {
      setNameErr({ borderBottom: "1px solid red" });
      setNameError({ display: "block", marginLeft: "5%", color: "red" });
    }
    if (re.test(String(email).toLowerCase()) === false) {
      setEmailErr({ borderBottom: "1px solid red" });
      setEmailError({ display: "block", marginLeft: "5%", color: "red" });
    }
    if (phone.trim().length !== 10) {
      setPhoneErr({ borderBottom: "1px solid red" });
      setPhoneError({ display: "block", marginLeft: "5%", color: "red" });
    }
    if (name.length >1 && email && phone.trim().length === 10) {
      setSpinner(true);
      const postData = { name, phone, email, msg };
      setName("");
      
      setNameErr({});
      setNameError({ display: "none", color: "red" });
      
      setPhone("");
      
      setPhoneErr({});
      setPhoneError({ display: "none", color: "red" });

      setEmail("");
      setMsg("");
     
      setEmailErr({});
      setEmailError({ display: "none", color: "red" });
      const response = await fetch(`${process.env.REACT_APP_SERVER}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      setSpinner(false);
      if (response.status === 400) {
        swal ( "Oops" ,  "Something went wrong!" ,  "error" )
      }
    //  setErrMsg("Message Sent");
     swal({
      title: "Message sent!",
      text: "We will contact you soon !",
      icon: "success",
    });
    }
  }
  useEffect(() => {
    if (name) {
      setNameErr({});
      setNameError({ display: "none", color: "red" });
    }
    if ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase()) === true) {
      setEmailErr({});
      setEmailError({ display: "none", color: "red" });
    }
    if (phone.trim().length === 10) {
      setPhoneErr({});
      setPhoneError({ display: "none", color: "red" });
    }
  }, [name , email , phone ]);

  return (
    <div>
      <div className="pageCover6">
        <Navbar />
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Contact Us</p>
        </div>
        <div className="mainContactContent">
          <div className="exampleForm" data-aos="fade-left">
            <div className="reachUs" >
              <RoomIcon style={{ fontSize: "2rem" }} />
              <p className="exampleFormSubHeadings">Reach Us</p>
            </div>
            <p className="details" data-aos="fade-right">
              Society of Mechanical Engineering,
              <br />
              Indian Institute of Engineering Science <br />
              and Technology, Shibpur,
              <br /> P.O. - Botanic Garden, <br />
              Howrah - 711 103, <br />
              West Bengal, India.
            </p>
            {/* <h1>Don't be a stranger. Just say, "Hello!"</h1>
            <p>
              Feel free to get in touch with us. We are always ready to help
              you.
            </p> */}
            <div className="reachUs" data-aos="fade-left">
              <EmailIcon style={{ fontSize: "2rem" }} />
              <p className="exampleFormSubHeadings">E-mail</p>
            </div>
            <p className="details" data-aos="fade-right"><a href="mailto:contact.impetus5@gmail.com">contact.impetus5@gmail.com</a></p>
            <div className="reachUs" data-aos="fade-left">
              <CallIcon style={{ fontSize: "2rem" }} />
              <p className="exampleFormSubHeadings">Call</p>
            </div>
            <p className="details" data-aos="fade-right">Kaustabh Biswas</p>
            <p className="details" data-aos="fade-left">(+91)<a href="https://wa.me/+916296278859">6296278859</a></p>
             <p className="details" data-aos="fade-right">Ankit Singh</p>
            <p className="details" data-aos="fade-left">(+91)<a href="https://wa.me/+918240554489">8240554489</a></p>
          </div>
          <div className="realForm" data-aos="flip-right">
            {/* <p className="successMessage">{errMsg}</p> */}
            <form onSubmit={formHandler}>
              <div className="inputDiv" data-error={nameErr}>
                <p style={nameError}>*Name is required</p>
                <input
                  className={nameClass}
                  type="text"
                  placeholder="Full Name"
                  style={nameErr}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="on"
                  data-aos="fade-left"
                />
              </div>
              <div className="inputDiv" data-error={emailErr}>
                <p style={emailError}>*Email is required</p>
                <input
                  className={emailClass}
                  type="email"
                  style={emailErr}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  value={email}
                  autoComplete="on"
                  data-aos="fade-right"
                />
              </div>
              <div className="inputDiv" data-error={PhoneErr}>
                <p style={PhoneError}>*Phone is required</p>
                <input
                  className={phoneClass}
                  type="number"
                  placeholder="Contact Number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  style={PhoneErr}
                  autoComplete="on"
                  data-aos="fade-left"
                />
              </div>
              <div data-aos="fade-right">
                <textarea
                  className="textMessage"
                  placeholder="Message (Optional)"
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                ></textarea>
              </div>
              <div className="loginBtnDiv" data-aos="fade-left">
              {spinner ? (
                <CircularProgress  style={{color : "orangered"}}/>
              ) : (
                <button type="submit" className="loginBtn">
                  Send
                </button>
              )}
              </div>
            </form>
          </div>
        </div>
<iframe title="GOOGLE MAP" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6384363055986!2d88.30497911495928!3d22.55521308519171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c91a8d2d49%3A0xc6ee508c74cf031d!2sIndian%20Institute%20of%20Engineering%20Science%20and%20Technology%2C%20Shibpur!5e0!3m2!1sen!2sin!4v1635739330073!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen={true} loading="lazy"></iframe>
      </div>
<Footer/>
    </div>
  );
}
