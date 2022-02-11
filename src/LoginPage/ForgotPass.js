import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LoginPage.css";
import { Link } from "react-router-dom";
// import Spinner from "../Spinner/Spinner";
import CircularProgress from '@mui/material/CircularProgress';

import Footer from "../Footer/Footer";
import swal from "sweetalert";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function ForgotPass() {
   AOS.init({duration:500});

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  // const [errMsg, setErrMsg] = useState("");
  // const [sucMsg, setSucMsg] = useState("");


  var emailClass = "inputTag";
  const [emailErr, setEmailErr] = useState();

  const [emailError, setEmailError] = useState({ display: "none" });

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  async function formHandler(e) {
    e.preventDefault();
    if (re.test(String(email).toLowerCase()) === false) {
      setEmailErr({ borderBottom: "1px solid red" });
      setEmailError({ display: "block", marginLeft: "5%", color: "red" });
    }
    if (email) {
      setSpinner(true);
      const postData = {email };
      setEmail("");
      setEmailErr({});      
      setEmailError({ display: "none", color: "red" });

      const response = await fetch(`${process.env.REACT_APP_SERVER}/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData),
      });
      setSpinner(false);
      if (response.status === 400) {
        swal ( "Invalid Email" ,  "Something went wrong!" ,  "error" );
        // setErrMsg("Invalid Email ID");
      }
      if(response.status === 404){
        swal ( "Account does not exists" ,  "Try again !" ,  "error" );
        // setErrMsg("Account does not exists ! ");
        // setSucMsg("");
      }
      else if (response.status === 200){
        // setErrMsg("");
        swal("Password sent Successfully!", "Check your email", "success");
        // setSucMsg("Password Sent Successfully to your Email ID !");
      }
    }
  }
  useEffect(() => {
    if ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase()) === true) {
      setEmailErr({});
      setEmailError({ display: "none", color: "red" });
    }
  }, [email]);

  return (
    <div>
      <div className="pageCover6">
        <Navbar />
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Recover your Account</p>
        </div>
        <div className="mainContactContent">
          <div className="loginForm" data-aos="flip-right">
          {/* <p className="errorMessage">{errMsg}</p> */}
          {/* <p className="successMessage">{sucMsg}</p> */}
            <form onSubmit={formHandler}>
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
                />
              </div>
              <div className="loginBtnDiv" data-aos="fade-right">
              {spinner ? (
                <CircularProgress style={{color : "orangered"}} />
              ) : (
                <button type="submit" className="loginBtn">
                  Get Access
                </button>
              )}
              </div>
            </form>
            <p className="newRegister">
              Don't have an account ?{" "}
              <Link to="/signup" style={{ color: "#00f0b4" }}>
                {" "}
                Create an account here
              </Link>
            </p>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
