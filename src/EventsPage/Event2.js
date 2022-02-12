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
This event propels the participants to leave their seats and go around observing the machines around them. It is a test of how much one is aware of things present around them , teams have to solve riddles, one at a time, as quickly as possible. The fastest three teams that can solve all the riddles correctly will be declared winners. Prizes will be given to the top 3 teams.
</p>
          <br />
          <br/>
<h1 className="eventsSubheadings">Idea of the Event</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
          The main idea of the event being that the participating teams will be provided with 10 riddles which needs to be solved one after the other. The participants need to click picture of the task done and sent it to the corresponding volunteer in order to get the next task. The team completing the whole task in least time wins.
          </p>
<br/>
<br/>
  <h1 className="eventsSubheadings">Basic Information</h1>

<br/>

<ul className="descriptionOfEventObjectives">
           

     <li>
 Registration – Till 1 hour before commencement of event.
            </li>
            <li>
Pre-requirements – WhatsApp, moderate internet connection.
            </li>
            <li>
Participation – team of 2 members.
            </li>
            <li>
           Volunteers required – 11.
            </li>
            <li>
            Platform – Gmeet/Zoom.
            </li>
            <li>
        No. of Rounds – 2.
            </li>

            <li>
            Duration of event –1.5 hours approximately.
            </li>
            <li>
        Date Of the Event – 26 -27th February 2022.
            </li>         
          </ul>
          <br/>
          <br />


  <h1 className="eventsSubheadings">What Do We Have To Offer/What Makes Us Different/ Why Should You Participate</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Prize money – Rs 5000, Rs. 3000, Rs. 2000.
            </li>
            <li>
Interactive way to do tasks and challenge others as well as yourself .
            </li>
            <li>
Fun way to do riddles and task.
            </li>         
          </ul>
          <br/>
          <br />


<h1 className="eventsSubheadings">Flow Of The Event</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
10 riddles will be numbered 1 to 10. There will be 10 volunteers, one of them corresponding to each of these riddle.
            </li>
            <li>
All the teams need to join the Zoom meeting where they will be given a number between 1 to 10 in the beginning.
            </li>
            <li>
The riddle corresponding to that number and contact no. of the Volunteer associated with that riddle will be provided to the team.
            </li>  

            <li>
Team needs to solve the given riddle (answer will be some simple machine or mechanism), find the machine/mechanism around them, click a picture of it, one of the members should send it to the associated volunteer over WhatsApp while mentioning their team’s name too.
            </li>  


                        <li>
The riddle corresponding to that number and contact no. of the Volunteer associated with that riddle will be provided to the team.
            </li>  

                        <li>
If the answer is correct the volunteer will give you the next riddle and contact no. of the corresponding volunteer for the next riddle.
            </li>  


                        <li>
The riddle corresponding to that number and contact no. of the Volunteer associated with that riddle will be provided to the team.
            </li>  

                        <li>
Once the team completes all 10 riddles, they need to report to the prime volunteer (present in the zoom meet allotted for the event) who will note the time for completion of whole task by the team.
            </li>  

                        <li>
The fastest teams win. Top 3 will be awarded.
            </li>  

          </ul>
          <br/>
          <br />



          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ol className="descriptionOfEventObjectives">
            <li>
              Smartphone.
            </li>
            <li>
              Good Internet connection.
            </li>
          </ol>
          <br />
          <h2 className="eventsSubheadings">Prize Money</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
            Rs 10,000/-
          </p>
          <br />
          <h2 className="eventsSubheadings">Registration fees per Team</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
            Rs 60/-
          </p>
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

          <h1 className="eventsSubheadings">Registration is free for IIEST students.</h1>
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
