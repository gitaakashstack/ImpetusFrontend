import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./SignUp.css";
import { Link } from "react-router-dom";
// import Spinner from "../Spinner/Spinner";
import CircularProgress from '@mui/material/CircularProgress';

import Footer from "../Footer/Footer";
import swal from 'sweetalert';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function SignUpPage() {

   AOS.init({duration:500});

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [institute, setInstitute] = useState("");
  const [branch, setBranch] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [referralcodeErr, setReferralCodeErr] = useState();
  const [referralcodeError, setReferralCodeError] = useState({
    display: "none",
  });

  const [spinner, setSpinner] = useState(false);

  const [nameErr, setNameErr] = useState();
  const [nameError, setNameError] = useState({ display: "none" });

  const [branchErr, setBranchErr] = useState();
  const [branchError, setBranchError] = useState({ display: "none" });

  const [instituteErr, setInstituteErr] = useState();
  const [instituteError, setInstituteError] = useState({ display: "none" });

  const [cpasswordErr, setCpasswordErr] = useState();
  const [cpasswordError, setCpasswordError] = useState({ display: "none" });

  const [passwordErr, setPasswordErr] = useState();
  const [passwordError, setPasswordError] = useState({ display: "none" });

  const [emailErr, setEmailErr] = useState();
  const [emailError, setEmailError] = useState({ display: "none" });

  const [PhoneErr, setPhoneErr] = useState();
  const [PhoneError, setPhoneError] = useState({ display: "none" });

  const [userExists] = useState("");

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function formHandler(e) {
    e.preventDefault();

    if (!name.trim()) {
      setNameErr({ borderBottom: "1px solid red" });
      setNameError({ display: "block", marginLeft: "5%", color: "red" });
    }

    if (phone.trim().length !== 10) {
      setPhoneErr({ borderBottom: "1px solid red" });
      setPhoneError({ display: "block", marginLeft: "5%", color: "red" });
    }

    if (password.length !== cpassword.length) {
      setCpasswordErr({ borderBottom: "1px solid red" });
      setCpasswordError({ display: "block", marginLeft: "5%", color: "red" });
    }

    if (!institute.trim()) {
      setInstituteErr({ borderBottom: "1px solid red" });
      setInstituteError({ display: "block", marginLeft: "5%", color: "red" });
    }

    if (!branch.trim()) {
      setBranchErr({ borderBottom: "1px solid red" });
      setBranchError({ display: "block", marginLeft: "5%", color: "red" });
    }

    if (password.length < 6) {
      setPasswordErr({ borderBottom: "1px solid red" });
      setPasswordError({ display: "block", marginLeft: "5%", color: "red" });
    }
    if (re.test(String(email).toLowerCase()) === false) {
      setEmailErr({ borderBottom: "1px solid red" });
      setEmailError({ display: "block", marginLeft: "5%", color: "red" });
    }
    if (
      password.length >= 6 &&
      email &&
      name.trim() &&
      phone.trim().length === 10 &&
      password.trim() &&
      cpassword.includes(password) &&
      branch.trim()
    ) {
      setSpinner(true);
      const postData = {
        password,
        email,
        name,
        phone,
        institute,
        branch,
        cpassword,
        referralCode,
      };

      setReferralCode("");
      setReferralCodeError({ display: "none", color: "red" });
      setReferralCodeErr({});

      setName("");
      setNameError({ display: "none", color: "red" });
      setNameErr({});

      setPhone("");
      setPhoneErr({});
      setPhoneError({ display: "none", color: "red" });

      setBranch("");
      setBranchErr({});
      setBranchError({ display: "none", color: "red" });

      setInstitute("");
      setInstituteErr({});
      setInstituteError({ display: "none", color: "red" });

      setCpassword("");
      setCpasswordErr({});
      setCpasswordError({ display: "none", color: "red" });

      setPassword("");
      setPasswordErr({});
      setPasswordError({ display: "none", color: "red" });

      setEmail("");
      setEmailErr({});
      setEmailError({ display: "none", color: "red" });

      const response = await fetch(`${process.env.REACT_APP_SERVER}/verifyemail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      setSpinner(false);
    //   const data = await response.json();
      if (response.status === 400) {
        swal ( "Invalid Email" ,  "Something went wrong!" ,  "error" );
      }
     else if (response.status === 403) {
        swal ( "Email already registered" ,  "Try recovering the password" ,  "error" );
      }
     else if (response.status === 405){
       swal("Invalid Referral Code", "Try again" , "error");
     }
      if(response.status === 200){
        swal({
        title: "Verify your account!",
        text: "Please check your spam !",
        icon: "success",
      });
      window.location.replace('/login');
    }
    }
  }
  useEffect(() => {}, [userExists]);

  return (
    <div>
      <div className="pageCover6">
        <Navbar />
      </div>
      <div className="mainContent4">
        <div className="about4">
          <p>Register Here</p>
        </div>
        <div className="mainContactContent">
          <div className="SignupForm" data-aos="flip-left">
            <form onSubmit={formHandler}>
              <div className="inputDiv" data-error={nameErr}>
                <p style={nameError}>*Name is required</p>
                <input
                  className="inputTag"
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
                  className="inputTag"
                  type="email"
                  style={emailErr}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  value={email}
                  autoComplete="on"
                  data-aos="fade-right"
                />
              </div>

              <div className="inputDiv" data-error={instituteErr}>
                <p style={instituteError}>*Institute Name is required</p>
                <input
                  className="inputTag"
                  type="text"
                  style={instituteErr}
                  onChange={(e) => setInstitute(e.target.value)}
                  placeholder="Institute Name"
                  value={institute}
                  autoComplete="on"
                  data-aos="fade-left"
                />
              </div>

              <div className="inputDiv" data-error={branchErr}>
                <p style={branchError}>*Branch is required</p>
                <input
                  className="inputTag"
                  type="text"
                  style={branchErr}
                  onChange={(e) => setBranch(e.target.value)}
                  placeholder="Branch Name"
                  value={branch}
                  autoComplete="on"
                  data-aos="fade-right"
                />
              </div>
              {/* <div className="inputDiv" data-error={branchErr}>
                <p style={codeError}>*Code is required</p>
                <input
                  className="inputTag"
                  type="text"
                  style={codeErr}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Verification Code sent to your email"
                  value={code}
                  autoComplete="on"
                  data-aos="fade-left"
                />
              </div> */}
              <div className="inputDiv" data-error={passwordErr}>
                <p style={passwordError}>
                  *Password should not be less than 6 characters
                </p>
                <input
                  className="inputTag"
                  type="password"
                  placeholder="Password"
                  style={passwordErr}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="on"
                  data-aos="fade-left"
                />
              </div>

              <div className="inputDiv" data-error={cpasswordErr}>
                <p style={cpasswordError}>*Password not matching</p>
                <input
                  className="inputTag"
                  type="password"
                  placeholder=" Confirm Password"
                  style={cpasswordErr}
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  autoComplete="on"
                  data-aos="fade-right"
                />
              </div>

              <div className="inputDiv" data-error={PhoneErr}>
                <p style={PhoneError}>*Phone is required</p>
                <input
                  className="inputTag"
                  type="number"
                  placeholder="Contact Number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  style={PhoneErr}
                  autoComplete="on"
                  data-aos="fade-left"
                />
              </div>

              <div className="inputDiv" data-error={branchErr}>
                <p style={referralcodeError}>*Referral Code is required</p>
                <input
                  className="inputTag"
                  type="text"
                  style={referralcodeErr}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="Referral Code"
                  value={referralCode}
                  autoComplete="on"
                  data-aos="fade-right"
                />
              </div>
              <div className="loginBtnDiv" data-aos="fade-left">
                {spinner ? (
                  <CircularProgress style={{color : "orangered"}} />
                ) : (
                  <button type="submit" className="loginBtn">
                    Signup
                  </button>
                )}
              </div>
            </form>
            <p className="newRegister">
              Already Registered ?
              <Link to="/login" style={{ color: "#00f0b4" }}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
