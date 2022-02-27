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

export default function Event2() {
  const history = useHistory();

  useEffect(()=>{
  window.scrollTo(0, 0)
},[])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [loader , setLoader] = useState(false);

  const [buttonText, setButtonText] = useState("Register");
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
          setLoader(false)
          setButtonText("Pay Rs.60");
        });
      }
    }
    else{
      swal("Not Authorized", "You must login first !", "error");
           history.replace("/login");

    }
    if (name) {
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
        name: "Yantra Search",
        description: "Thank you for registering.",
        image: `${process.env.REACT_APP_SERVER}/logo.svg`,
        handler: function (response) {
          if(response.razorpay_payment_id){
        swal(`Registration successful`, "Check your email for the payment details !", "success");
           history.replace("/about");
            setLoader(false);
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
        notes: {
          eventName : "Yantra Search",
          name: name,
          email: email,
          phone: phone,
        },
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
          <p>Yantra Search</p>
        </div>
       <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
Do you have a keen eye for the world around you? Are you a fan of riddles and wordplays? <br/><br/>
Calling all the sleuths and budding detectives, Impetus 5.0 brings you Yantra Search. 
<br/>
<br/>
Yantra Search propels the participants to leave their seats and go around observing the machines around them. It is a test of your awareness, ability to think on your feet and your powers of deduction. Teams have to solve riddles, one at a time, as quickly as possible. The fastest three teams that can solve all the riddles correctly will be declared winners. 
<br/><br/>
So, get your teams in order and get ready to search your way out.
</p>
          <br />
          <br/>
<h1 className="eventsSubheadings">Flow of the Event</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
         The main idea of the event is that the participating teams will be provided with riddles which need to be solved one after the other. The participants need to click a picture of the task done and send it to the corresponding volunteer in order to get the next task. The team completing the whole task in the least time wins.
          </p>
<br/>
<br/>
  <h1 className="eventsSubheadings">Guidelines</h1>

<br/>

<ul className="descriptionOfEventObjectives">
     <li>
Registration ends 1 hour before the commencement of the event.
            </li>
            <li>
No. of Rounds – 2.
            </li>
            <li>
Duration of the event –1.5 hours approximately.
            </li>         
          </ul>
          <br/>
          <br />
          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
              Smartphone.
            </li>
            <li>
              Good Internet connection.
            </li>
            <li>
              Platform – Zoom/G-meet, WhatsApp.
            </li>
          </ul>
          <br />
          <br/>
          <h1 className="eventsSubheadings">Team Size : 1-2 Members</h1>
<br/>
<br/>
           <h2 className="eventsSubheadings">Registration fees per Team</h2>
          <br/>
          <p className="descriptionOfEventObjectives"><strong>For Non-IIESTians</strong></p>
          <br/>
          <ul className="descriptionOfEventObjectives">
      <li>
Rs. 60/-
      </li>      
     <li>
       <strong>
Attention:- Only Team Leader should register for the event
       </strong>
            </li>  
            <li>
              <strong>
Details of other team members should be shared by Team Leader through a G-form which will be sent to them after registration.
              </strong>
            </li>
            </ul>
          <br/>
            <p className="descriptionOfEventObjectives"><strong>For IIESTians</strong></p>
          <br/>
            <ul  className="descriptionOfEventObjectives">
            <li>
             Free for Students of IIESTS. 
            </li>
            <li>Registrations are to be done through g-form which will be shared later.
</li>
<li>
  Every team member has to fill out the form <a href="https://forms.gle/uHauDmay1cuULTeu7" style={{color: 'orangered', fontWeight : 'bold'}}>Click Here</a>

</li>
          </ul>
          <br/>
          <br/>
  <h1 className="eventsSubheadings">Rewards</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
      <li>
Prize will be given to the top 3 teams.
      </li>      
     <li>
Prize money – Rs 5000, Rs. 3000, Rs. 2000.
            </li>  
          </ul>
          <br/>
          <br/>
           <h1 className="eventsSubheadings">Date of the Event : 16th (3:15 to 4:45 pm) & 17th March 2022 (2 to 3:30 pm).</h1>
<br/>
<br/>
           <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">     
     <li>
Jagriti Garg: 7424991682

            </li>
            <li>
Shubhankar Sarkar- 7985400976
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
          <button className="registerBtn" onClick={() => displayRazorpay(1)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
