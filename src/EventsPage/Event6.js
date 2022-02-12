import React , {useState , useEffect} from "react";
import Footer from "../Footer/Footer";
import {useHistory} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
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
export default function Event6() {

  const history = useHistory();


  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loader , setLoader] = useState(false);

  const [phone, setPhone] = useState(0);
  const [buttonText , setButtonText] = useState("Register");
  const displayRazorpay = async (id) => {
    if(window.localStorage.getItem("token")){
      setLoader(true);
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
          setButtonText("Pay Rs.40");
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
        name: "TrustMe",
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
          eventName : "TrustMe"  ,
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
          <p>Trust ME</p>
        </div>
       <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
Trust ME is a trust-building event, but instead of a team-mate, the participants have to trust and rely on their skills and logic. This competition aims to test logical, lateral and innovate skills. The participant is asked to complete puzzles given in a form of mobile application game. The participants have to solve puzzles employing their logic and innovation to find out the solution. 
<br/>
There are 2 rounds. Each round has 4 levels. Each level has some points. The participant needs to try to get maximum points to qualify for next round and to win the game.
</p>
          <br />
          <br/>
<h1 className="eventsSubheadings">Event Details And Requirements</h1>
<br/>
<ul className="descriptionOfEventObjectives">
           

     <li>
Date – 24th February - 25th February 2022.
            </li>
            <li>
Registration closes 1 hour before the commencement of Round 1.
            </li>
            <li>
Pre-requirements — Android or ios or PC Emulator
Good Internet Connection and WhatsApp.
            </li>
            <li>
             Min Phone Requirements - 4 GB RAM, IGB Storage,
Good CPU,GPU which can handle games like temple run etc.
            </li>

            <li>
           It will be an individual event.
            </li>
            <li>
           Prize money - Rs 3,500 (Winner), Rs. 2,500 (First Runner up), Rs. 2000 (Second Runner up).
            </li>         
          </ul>

         
<br/>
<br/>

<h1 className="eventsSubheadings">Flow Of The Event</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Registered participants are given the zoom meeting link, which they need to join while the commencement of the event.
            </li>
            <li>
All participants will be given a POC(point of contact) to whom they need to show completed puzzles.
            </li>
            <li>
The rules and regulations of each round will be given before 30min start of each round. 
            </li>  

            <li>
Winner will be selected on basis of performance of all 2 Rounds.
            </li>  

          </ul>
          <br/>
          <br />

         <h1 className="eventsSubheadings">

            Come celebrate IMPETUS 5.0 fest at IIEST Shibpur, become a part of exciting events, win and take prizes back home.
         </h1>
        <br/>
          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ol className="descriptionOfEventObjectives">
            <li>
              Pc having android emulator with enough free storage.
            </li>
            <li>
              Good Internet connection.
            </li>
          </ol>
          <br />
          <br/>
            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Pramod Surya : 8500973356.
            </li>
            <li>
Tannishtha Bag : 8587825869
            </li>       
          </ul>
 <br/>

          <h1 className="eventsSubheadings">Registration is free for IIEST students.</h1>
        </div>
        <div className="registerDiv">
          {loader ? 
          <div style={{marginTop : "50px"}}>
          <CircularProgress style={{color: "orangered"}}/>
          </div>
          :
          <button className="registerBtn" onClick={() => displayRazorpay(5)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
