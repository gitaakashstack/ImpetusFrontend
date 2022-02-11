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


export default function Event3() {
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
          setButtonText("Pay Rs.100");
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
        name: "Heatovation",
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
          eventName : "Heatovation",
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
          <p>Heatovation</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
          Idea presentation is an event organized by IMPETUS 5.0 in association with ISHRAE - IIEST Kolkata chapter. It invites participation from students with entrepreneurial/problem-solving mindsets pan India. It would require its participants to present their ideas to the panel of judges and answer their queries based on the presentation.
          </p>
          <br />
          <h2 className="eventsSubheadings">Brief Idea of the Event</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
            The following events occur in two rounds during which the participants need to upload their presentation on the given link and for the next round they will have to present their idea before the judges
          </p>
          <br />
          <h2 className="eventsSubheadings">Guidelines</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
           You have to upload the presentation on the given link and the top 10 performers will be selected for the second round.
            </li>
            <li>
           Deadline for submission of ideas for the 1st round-22nd February 2022.
            </li>
            <li>
.            In the second round, the participants will be given an opportunity to present the idea in front of the judges after which top performers will be announced.
            </li>
            <li>
         Team size: Individual or group of a maximum of 3 team members.
            </li>
            <li>
              Event duration: 1hour 15 mins.
            </li>
            <li>
              Rules are subjected to change and decisions of the Impetus 5.0 team are absolute and binding.
            </li>
          </ul>
          <br />
          <h2 className="eventsSubheadings">Eligibility Criteria</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
           This competition is open to everyone college students from all over India.
            </li>
            <li>Startup idea presentation is a must for this competition.</li>
          </ul>
          <br/>
          <h2 className="eventsSubheadings">Formation of Teams</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
             A maximum of 3 members is permitted per team.
            </li>
            <li>A candidate can participate individually also.</li>
            <li>One participant cannot be a part of more than one team.</li>
            <li>No change in team structure is permitted after the team is registered.</li>
          </ul>
          <br/>
          <h2 className="eventsSubheadings">Registration</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
           Individuals/teams registered through this form will only be considered valid.
            </li>
            <li>This is not a free event.</li>
            <li>Date of the event – 24th February 2022.</li>
            <li>You need to pay registration fees.</li>
            <li>Form dates will be released soon, keep checking the website.</li>
          </ul>
          <br/>
          {/* <h2 className="eventsSubheadings">Date : 24th February 2022.</h2> */}
{/* <br/> */}
          <h2 className="eventsSubheadings">Progress</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
         The ﬁrst round will be an online pitch deck submission.
            </li>
            <li>Selected teams based on their pitch deck will move forward to round two.</li>
          </ul>
          <br/>
            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Nazrullah : 9748952490.
            </li>
            <li>
Sumana Dey : 8927854615.
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
          <button className="registerBtn" onClick={() => displayRazorpay(2)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
