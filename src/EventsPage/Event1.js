import React, { useState , useEffect } from "react";
import {useHistory} from 'react-router-dom';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CircularProgress from '@mui/material/CircularProgress';

import swal from "sweetalert";
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

export default function Event1() {
  const history = useHistory();
  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  const [name, setName] = useState("");
  const [loader , setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
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
        setLoader(false);
        setButtonText("Pay Rs.50");
      });
    }
  }
  else{
    swal("Not Authorized", "You must login first !", "error");
    history.replace("/login");
  }
    if(name){
      setLoader(true);
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
      const options = {
        key: process.env.REACT_APP_RZRPAYKEY,
        currency: "INR",
        amount: data.amount.toString(),
        order_id: data.id,
        name: "CAD Competition",
        description: "Thank you for registering . Please give us some money",
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
          eventName : "CAD Competition",
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
      <div className="pageCover">
        <Navbar />
      </div>
      <div className="mainContent">
        <div className="impetus">
          <p>CAD Competition</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
           Do you wish to design the future? Or have a profound love for tweaking designs, for visualizing amazing tech? 
           Well, here's your chance to shine! <br/><br/>Impetus 5.0, in association with SAE, IIEST Shibpur, brings you the much awaited CAD event. So unleash your creativity, put pen to paper (sorry, cursor to screen) and bring to life the smartest designs. 
          </p>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Rules and Flow</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
             The CAD competition is going to be held in 3 levels. 
            </li>
            <li>
              Every participant should pass through level 1 to enter level 2 and so on. 
            </li>
            <li>
             In level 1&2, participants should replicate the provided parts and joints within 30mins each.
            </li>
            <li>
             Level 3 will be based upon an optimization problem. The problem statement for the 3rd level will be given before 12 hours of submission. 
            </li>
          </ul>
<br/>
<br/>
          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
          Good internet connection. Relevant design and analysis software to be pre installed in the computer. Good internet connection. 
            </li>
          </ul>

          <br/>
<br/>
          <h1 className="eventsSubheadings">Rewards</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
         3 winners will be selected from each level. Provided
In level 1, winners would be chosen from 1st year
In level 2, winners would be chosen from 1st and 2nd year
            </li>
            <li>
              In level 3, winners would be chosen from all four years. 
            </li>
          </ul>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Date : 25th to 26th Feb 2022</h1>
          <br/>
          <h1 className="eventsSubheadings">Contact</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
Abhinay : 6303893611
            </li>
            <li>
Sushmayan : 9903689877
            </li>
          </ul>


        </div>
        <div className="registerDiv">
          {loader ? 
          <div style={{marginTop : "50px"}}>
          <CircularProgress style={{color: "orangered"}}/>
          </div>
          :
          <button className="registerBtn" onClick={() => displayRazorpay(0)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
