import React, { useEffect, useState } from "react";
import { Link , useHistory} from "react-router-dom";
import Footer from "../Footer/Footer";
// import Spinner from "../Spinner/Spinner";
import CircularProgress from '@mui/material/CircularProgress';

import "./CampusAmbas.css";
import CaNavbar from "./CampusNavbar";
export default function CampusAmbas() {

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])

    const history = useHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [errMsg, setErrMsg] = useState("");
  
    var passwordClass = "inputTag";
    var emailClass = "inputTag";
  
    const [passwordErr, setPasswordErr] = useState();
    const [emailErr , setEmailErr] = useState();
  
    const [passwordError, setPasswordError] = useState({ display: "none" });
    const [emailError, setEmailError] = useState({ display: "none" });
  
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    async function formHandler(e) {
      e.preventDefault();
      if (!password) {
        setPasswordErr({ borderBottom: "1px solid red" });
        setPasswordError({ display: "block", marginLeft: "5%", color: "red" });
      }
      if (re.test(String(email).toLowerCase()) === false) {
        setEmailErr({ borderBottom: "1px solid red" });
        setEmailError({ display: "block", marginLeft: "5%", color: "red" });
      }
      if (password && email) {
        setSpinner(true);
        const postData = { password, email };
        setPassword("");
        setEmail("");
  
        setEmailErr({});
  
        setPasswordErr({});
        setPasswordError({ display: "none", color: "red" });
  
        setEmailError({ display: "none", color: "red" });
  
        const response = await fetch(`${process.env.REACT_APP_SERVER}/calogin`, {
          method: "POST",
          headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(postData),
        });
        setSpinner(false);
        const data = await response.json();
        if (response.status === 400) {
          setErrMsg("Wrong Credentials");
        }
        if(response.status === 404){
          setErrMsg("Account does not exists !");
        }
        if(response.status === 401){
          setErrMsg("Credentials wrong !");
        }
        if(response.status === 404){
          setErrMsg("Account not registered !");
        }
        if (response.status === 201){
        window.localStorage.setItem("catoken" , data.token);
        window.localStorage.setItem("referralCode" , (data.userData.referralCode));
        setTimeout(()=>window.location.reload(),1000);
        history.replace('/caDashboard');
        }
      }
    }
    useEffect(() => {
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          String(email).toLowerCase()
        ) === true
      ) {
        setEmailErr({});
        setEmailError({ display: "none", color: "red" });
      }
  
      if (password.length > 6) {
        setPasswordErr({});
        setPasswordError({ display: "none", color: "red" });
      }
    }, [email, password]);
  return (
   <div>
      <div className="pageCover6">
        <CaNavbar />
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>C A Login</p>
        </div>
        <div className="mainContactContent">
          <div className="loginForm">
            <p className="errorMessage">{errMsg}</p>
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
              <div className="inputDiv" data-error={passwordErr}>
                <p style={passwordError}>*Password is required</p>
                <input
                  className={passwordClass}
                  type="password"
                  placeholder="Password"
                  style={passwordErr}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="on"
                />
                <p className="forgotPassword">
                  <Link to="/caforgotpass" style={{ color: "#00f0b4" }}>
                    Forgot Password ?{" "}
                  </Link>
                </p>
              </div>
              <div className="loginBtnDiv">
                {spinner ? (
                  <CircularProgress style={{color: "orangered"}} />
                ) : (
                  <button type="submit" className="loginBtn">
                    Login
                  </button>
                )}
              </div>
            </form>
            <p className="newRegister">
              Don't have an account ?
              <Link to="/casignup" style={{ color: "#00f0b4" }}>
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
