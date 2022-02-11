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
export default function Event8() {

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
          setButtonText("Pay Rs.250");
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
        name: "Valorant",
        description: "Thank you for nothing. Please give us some money",
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
          eventName : "Valorant"  ,
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
      <div className="pageCover8">
        <Navbar />
      </div>
      <div className="mainContent">
        <div className="impetus">
          <p>Valorant (5v5 FPS)</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
          Are you the person who’s made a long journey from Counter strike to Valorant? Is FPS a match made in heaven for you? Then, Voila! You arrived at your paradise. Join and participate in this thrilling gaming Competition and show you are no less than a pro gamer.
          </p>
          <br />
          <br/>
          <h2 className="eventsSubheadings">Rules and Regulations</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
           

     <li>
    B01, B03, B05
            </li>
            <li>
             Fracture is disabled.
            </li>
            <li>
              Toss for map veto.
            </li>
            <li>
              Date: 24th - 25th  February 2022.
            </li>


            <li>
            Number of People Per Team - 5.
            </li>
            <li>
              Flow of events: 3-4 rounds as per participation.
            </li>
            <li>
        Open to all.
            </li>
                        <li>
      Entry Fees (per person) - ₹250/-
            </li>
                        <li>
    Prize Money - Rs. 10,000/-.
            </li>


          </ul>
                              <br/>
            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Ritam Sarkar : 9836165722.
            </li>
            <li>
Kaustabh Biswas : 7098767017.
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
          <button className="registerBtn" onClick={() => displayRazorpay(7)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
