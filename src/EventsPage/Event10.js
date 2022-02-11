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
export default function Event10() {

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
          setButtonText("Pay Rs.30");
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
        name: "Roadmap - Strategy Design Contest",
        description: "Thank you for registering .",
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
          eventName : "Roadmap - Strategy Design Contest"  ,
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
          <p>Roadmap - Strategy Design Contest </p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
           A good strategy and designing build the path from an ordinary concept to an extraordinary success. To identify and promote all such visionary geniuses, the Department of Mechanical Engineering, IIEST Shibpur brings to you, Roadmap- Strategy Design Contest, in its annual tech-fest IMPETUS 5.0.
           <br/>
           Roadmap is a team event. Each team will be given a problem statement related to a real-life business case. They have to evaluate, rationali
          </p>
          <br />
          <h2 className="eventsSubheadings">Perks:</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>The winners will get cash prize worth ₹10,000.</li>
            <li>Strategy Internships at Namekart.</li>
          </ul>
          <br />
           <h2 className="eventsSubheadings">Competition Rules:</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>Each team can comprise of 2-4 members.</li>
            <li>The Panel’s decision will be final. However, in case of any factual discrepancies (if present), it will be dealt separately.</li>
            <li>Keeping the video on throughout the final round.</li>
            <li>s (per team): ₹30/- .</li>
          </ul>
          <br />
        <h2 className="eventsSubheadings">Flow of the Event:</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>Round 1 (dates to be announced) – Problem statement will be provided to teams 2 days prior to the event through forms. Each team will have 24 hours to plan a strategy of approach and present their findings.</li>

            <li>Final Round (25th February 2022, Time 4:15pm to 7:15pm) – Here the esteemed judges will then evaluate the work and findings of top 6 teams. Here, teams have to present their solutions in front of the panel.</li>
          </ul>
          <br/>
          <h2 className="eventsSubheadings">Platform</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
          The event meets will take place on Zoom/Google Meet. Participants are advised ensure a stable internet connection in your smartphones or computers prior to the competition.
          <br/>
RoadMap is your chance to practice case-solving and be challenged by a panel of industry-leading professionals, which is an experience rarely gained while studying.
<br/>
                             <br/>
            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Akanksha Kumari : 6204290557.
            </li>      
          </ul>
          <br/>
Society of Mechanical Engineers of IIEST, Shibpur invites everyone to participate and be a part of this Roadmap under Impetus 5.0.
          </p>
         <br/>
        </div>
        <div className="registerDiv">
{loader ? 
          <div style={{marginTop : "50px"}}>
          <CircularProgress style={{color: "orangered"}}/>
          </div>
          :
          <button className="registerBtn" onClick={() => displayRazorpay(9)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
