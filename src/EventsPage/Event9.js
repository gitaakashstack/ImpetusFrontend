import React , {useState , useEffect} from "react";
import Footer from "../Footer/Footer";
import {useHistory} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import "./AllEvents.css";
import Navbar from "../Navbar/Navbar";

import swal from 'sweetalert';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
export default function Event9() {

  const history = useHistory();

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [loader , setLoader] = useState(false);

  const [buttonText , setButtonText] = useState("Register");
  const displayRazorpay = async (id) => {
    if(window.localStorage.getItem("token")){
      setLoader(true)
      const resp = await fetch(`${process.env.REACT_APP_SERVER}/about`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
        }
      });
      if (resp.status === 401) {
        swal("Not Authorized", "You must login first !", "error");
           history.replace("/login");

      } else {
        await resp.json().then((d) => {
          console.log(d);
          setName(d.name);
          setEmail(d.email);
          setPhone(d.phone);
          setButtonText("Pay Rs.160");
          setLoader(false)
        });
      }
    }
    else{
      swal("Not Authorized", "You must login first !", "error");
           history.replace("/login");

    }
    if(name){
      setLoader(true)
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      const data = await fetch(
        `${process.env.REACT_APP_SERVER}/razorpay/${id}`,
        {
          method: "POST",
        }
      ).then((t) => t.json());
      console.log(data);
      const options = {
        key: process.env.REACT_APP_RZRPAYKEY,
        currency: "INR",
        amount: data.amount.toString(),
        order_id: data.id,
        name: "BGMI",
        description: "Thank you for registering.",
        image: `${process.env.REACT_APP_SERVER}/logo.svg`,
        handler: function (response) {
          if(response.razorpay_payment_id){
        swal(`Registration successful`, "Check your email for the payment details !", "success");
           history.replace("/about");
           setLoader(false)

          }
        else{
        swal(`Registration usuccessful`, "Error occurred !", "error");
        }
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name,
          email,
          phone,
        },
        notes : {
          eventName : "BGMI"  ,
          name:name,
          email:email,
          phone:phone
        }
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
          setLoader(false)

  }
  };


  return (
    <div>
      <div className="pageCover9">
        <Navbar />
      </div>
      <div className="mainContent">
        <div className="impetus">
          <p>BGMI</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
           Are you a lover of open world gaming? A person who enjoys a game of survival skills and sheer finesse? Then yes you’ve come to the right spot.Participate in this challenging competition of BGMI to show off your shooting and survival skills.Be the one who can show others that what a real BGMI champ looks like. Participate and Join now!
          </p>
          <br />
          <h2 className="eventsSubheadings">Important information</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li><strong>Pre-requisites:</strong> Required hardware and software setup and proper internet connection</li>
            <li><strong>Number of members per team:</strong> 4 </li>
            <li><strong>Registration Fees per team :</strong> Rs. 160/-</li>
            <li><strong>Date of Event :</strong> 21st February - 22nd February 2022 ( 8:45pm to 1 or 2am)</li>
            <li><strong>Number of Rounds:</strong> Flexible</li>
            <li>
              <li>
                <strong>Re entry allowed once at Rs 80 per team</strong>
              </li>
              <br/>
             <strong>Prize Money:</strong> Rs 10,000
            </li>
          </ul>
                             <br/>
            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Akash Kundu : 7001098174.
            </li>      
            <li>
              Ankit Singh : 8240554489
            </li>
          </ul>
          <br/>
         
        </div>
        <div className="registerDiv">
{loader ? 
          <div style={{marginTop : "50px"}}>
          <CircularProgress style={{color: "orangered"}}/>
          </div>
          :
          <button className="registerBtn" onClick={() => displayRazorpay(8)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
