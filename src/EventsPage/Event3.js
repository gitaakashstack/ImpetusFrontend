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
         Heatovation is an event organized by IMPETUS 5.0 in association with ISHRAE - IIEST Kolkata Chapter. It invites participation from students with entrepreneurial/ problem-solving mindsets pan India. We require participants to present their ideas to the panel of judges and answer their queries based on the presentation.
          </p>
          <br />
          <h2 className="eventsSubheadings">Flow Of The Event</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
           The following events occur in two rounds during which the participants need to upload their presentation on the given link and for the next round they will have to present their idea before the judges.
          <br/>
          The first round will be an online pitch deck submission.
You have to upload the presentation on the given form link and the top 10 performers will be selected for the second round.
<br/>
In the second round, the participants will be given an opportunity to present the idea in front of the judges after which top performers will be announced.
          </p>
          <br />
          <h2 className="eventsSubheadings">Guidelines</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
           No. of rounds - 2.
            </li>
            <li>
          Deadline for submission of ideas through form link for the 1st round-22nd February 2022. Form dates will be released soon, keep checking the website.
            </li>
            <li>Event duration: 1 hour 15 mins.
            </li>
            <li>
        Rules are subjected to change and decisions of the Impetus 5.0 team are absolute and binding.
            </li>
            <li>
              Open to all college students from all over India.
            </li>
            
          </ul>
          <br />
          <h2 className="eventsSubheadings">Pre-requisites</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
          PC / smartphone.
            </li>
            <li>Good internet connectivity.</li>
            <li>
            Relevant knowledge in topics of Thermodynamics, heat transfer, and about HVACs  
            </li>
          </ul>
          <br/>
          <h2 className="eventsSubheadings">Team Size</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
         1 to 3 members.
            </li>
            <li>One participant cannot be a part of more than one team.</li>
            <li>No change in team structure is permitted after the team is registered.</li>
          </ul>
          <br/>
          <h2 className="eventsSubheadings">Registration Fee</h2>
          <br/>
          <p className="descriptionOfEventObjectives"><strong>For Non-IIESTians</strong></p>
          <br/>
          <ul className="descriptionOfEventObjectives">
      <li>
Rs 100 per team
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
            <li>Registrations are to be done through g-form which will be shared later. Keep following our social media pages.
</li>
<li>
  Every team member has to fill out the form <a href="https://forms.gle/uHauDmay1cuULTeu7" style={{color: 'orangered', fontWeight : 'bold'}}>Click Here</a>

</li>
          </ul>
          <br/>
          {/* <h2 className="eventsSubheadings">Date : 24th February 2022.</h2> */}
{/* <br/> */}
          <h2 className="eventsSubheadings">Rewards</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
    Prize money of Rs. 10,000 to be won.
          </p>
          <br/>
            <h1 className="eventsSubheadings">Date of event : 14th March 2022 (Round 2) (Slot 1 : 2 to 3:15 pm, Slot 2 : 3:45 to 5 pm).</h1>
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

          {/* <h1 className="eventsSubheadings">Registration is free for IIEST students.</h1> */}
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
