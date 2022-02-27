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
        name: "CADegorized",
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
          eventName : "CADegorized",
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
          <p>CADegorized</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
           Do you wish to design the future? Or have a profound love for tweaking designs, for visualizing amazing tech? 
           Well, here's your chance to shine! <br/><br/>Impetus 5.0, in association with SAE, IIEST Shibpur, brings you the much awaited CAD event, CADegorised. CADegorised is an event for all tech enthusiasts to showcase their unique designing skills and their creative ability to solve a problem. It aims to encourage and challenge the participant's design skills.
          </p>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Flow of the events</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
CADegorised is going to be held in 2 rounds. In the first round of the competition, participants are expected to replicate the given parts and submit them in an hour. Candidates qualified from the first round can participate in the second round. In the second round, participants are expected to submit an optimised design for the given problem statement in the stipulated time.

          </p>
          <ul className="descriptionOfEventObjectives">
            <li>
            Participants have to upload their CAD files for both rounds.
            </li>
            <li>
            Participants have to submit the simulation and optimization files for the second round.
            </li>
            <li>
           Any CAD, CAE and computing software can be used for the competition.
            </li>
            <li>
    The required files should be submitted in a google form.
            </li>
            <li>
              Participants can send any no. of entries.
            </li>
            <li>
              Size limit for individual files – 100 MB (You could send zipped files in case size increases)
            </li>
          </ul>
<br/>
<br/>
 <h1 className="eventsSubheadings">Judging Criteria</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
         For the first round:- The participants will be judged on the accuracy of the designed parts and primetime pick. 
            </li>
            <li>
           For the second round:- The participants will be judged on mass minimisation(50%) and factor of safety (50%).   
            </li>
          </ul>
          <br/>
<br/>

          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
          Good internet connection.  
            </li>
            <li>
              Relevant design and analysis software to be pre installed in the computer. Good internet connection.
            </li>
          </ul>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Team Size : Individual Participation</h1>
          <br/>
          <h1 className="eventsSubheadings">Registration Fee</h1>
          <br/>
          <p className="descriptionOfEventObjectives"><strong>For non-IIESTians</strong></p>
          <ul className="descriptionOfEventObjectives">
            <li>
         Rs. 50
            </li>
            </ul>
            <br/>
          <p className="descriptionOfEventObjectives"><strong>For IIESTians</strong></p>
            <ul className="descriptionOfEventObjectives">
            <li>
             Free for Students of IIESTS.
            </li>
            <li>
              Registrations are to be done through g-form which will be shared later. Keep following our social media pages.
            </li>
            <li>
              Please fill this Google form <a href="https://forms.gle/uHauDmay1cuULTeu7" style={{color: 'orangered', fontWeight : 'bold'}}>Click Here</a>
            </li>
          </ul>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Rewards</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
            Prizes worth Rs. 10000 to be awarded to the winners.
          </p>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Date : 15th (7:30 to 8:30 pm) & 17th March 2022 (7:15 to 9:45 pm) </h1>
          <br/>
          <h1 className="eventsSubheadings">Contact</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
Abhinay Arcot : 6303893611
            </li>
            <li>
Sushmayan Trivedi : 9903689877
            </li>
          </ul>
          <br/>

          {/* <h1 className="eventsSubheadings">Registration is free for IIEST students.</h1> */}
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
