import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./LoginPage.css";
import { Link , useHistory} from "react-router-dom";
// import Spinner from "../Spinner/Spinner";
import Footer from "../Footer/Footer";
import CircularProgress from '@mui/material/CircularProgress';
import swal from "sweetalert";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function AdminLoginPage() {
   AOS.init({duration:500});

 const history = useHistory();

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])

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

      const response = await fetch(`${process.env.REACT_APP_SERVER}/adminlogin`, {
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
        swal("Error" , "Please check your credentials" , "error");
        // setErrMsg("Wrong Credentials");
      }
      if(response.status === 404){
        swal("Error" , "This email id does not exists." , "error");
        // setErrMsg("Account does not exists !");
      } 
      if(response.status === 401){
        swal("Error" , "Please check your credentials" , "error");
        setErrMsg("");
      }
      if(response.status === 404){
        swal("Error" , "This email id does not exists." , "error");
        // setErrMsg("Account not registered !");
      }
      if (response.status === 201){
      window.localStorage.setItem("admintoken" , data.token);
      setTimeout(()=>window.location.reload(),1000);
      history.replace('/adminDashboard');
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
        <Navbar />
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Admin's Login</p>
        </div>
        <div className="mainContactContent">
          <div className="loginForm" data-aos="flip-right">
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
                  <Link to="/adminforgotpass" style={{ color: "#00f0b4" }}>
                    Forgot Password ?{" "}
                  </Link>
                </p>
              </div>
              <div className="loginBtnDiv" data-aos="fade-left">
                {spinner ? (
                  <CircularProgress style={{color : "orangered"}} />
                ) : (
                  <button type="submit" className="loginBtn">
                    Login
                  </button>
                )}
              </div>
            </form>
            <p className="newRegister">
              Don't have an account ?{" "}
              <Link to="/adminsignup" style={{ color: "#00f0b4" }}>
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
