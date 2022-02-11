import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Spinner from "../Spinner/Spinner";
import CircularProgress from '@mui/material/CircularProgress';

import Footer from "../Footer/Footer";
import CaNavbar from "./CampusNavbar";
import swal from "sweetalert";

export default function CaForgot() {
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [sucMsg, setSucMsg] = useState("");

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

      const response = await fetch(`${process.env.REACT_APP_SERVER}/caforgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(postData),
      });
      setSpinner(false);
      if (response.status === 400) {
        console.log("Bad input");
      }

      if(response.status === 404){
        swal("Error" , "Account does not exists." , "error");
        setErrMsg("Account does not exists ! ");
        setSucMsg("");
      }
      if(response.status === 200){
        setErrMsg("");
        swal("Check your email" , "Password sent successfully." , "success");
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
        <CaNavbar />
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Recover your CA Account</p>
        </div>
        <div className="mainContactContent">
          <div className="loginForm">
          <p className="errorMessage">{errMsg}</p>
          <p className="successMessage">{sucMsg}</p>
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
              <div className="loginBtnDiv">
              {spinner ? (
                <CircularProgress style={{color:"orangered"}} />
              ) : (
                <button type="submit" className="loginBtn">
                  Get Access
                </button>
              )}
              </div>
            </form>
            <p className="newRegister">
              Don't have an account ?{" "}
              <Link to="/casignup" style={{ color: "#00f0b4" }}>
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

