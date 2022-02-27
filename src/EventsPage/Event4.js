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

export default function Event4() {


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
        name: "Trade Assemble",
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
          eventName : "Trade Assemble"  ,
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
          <p>Trade Assemble</p>
          <p className="bodyHeading" style={{fontSize : "24px "}}>ASME IIESTS </p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">

Impetus 5.0 in association with ASME IIESTS  brings Trade Assemble, well actually in the opposite order, where you first assemble components in fusion 360 and then take it to the next level and assess your product financially. This competition aims to coalesce the idea of basic trading with assembly of 3D structures virtually on a CAD software.
<br/>
<br/>
 This event will test the level of proficiency of the participants in assembling 3D models while checking their understanding of finances as encountered in real life. 
<br/>
<br/>
Teams will be provided with components to assemble. Is that it?! You will have to trade your items with other team members in exchange of other items or tokens to complete your model. 
<br/>
<br/>
The event aims to bring the participants closer to the real-life scenario, you get to assemble a machinery while you also learn to trade for other commodities and assess the value of the items you possess in the outside world.
          </p>
          <br />

  <h1 className="eventsSubheadings">Flow of the Event</h1>
<br/>


<p className="descriptionOfEventObjectives">
           
Initially, teams will be provided with a jumbled set of components. The members need to judiciously trade with other team members to collect suitable components for completing any one of the standard models (the models whose parts were jumbled and provided to the teams). The teams will be marked on the basis of time taken and the number of trade tokens left with them at the end. (50% weightage to both aspects)
<br/>
<br/>
The time required and token remaining at the end of the event will be evaluated to find the top 3 teams, who will be declared as the winner.            
          </p>
          <br/>
          <br />
           <h1 className="eventsSubheadings">Guidelines</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
              Registration closes <strong>1 day</strong> before the commencement of round 1, i.e. on 11:59 pm, 13th March.
            </li>
            <li>
             Participants have to form a team of 2-4 members.
            </li>
            <li>
             Participants have to be present in the Zoom/meet throughout the event.
            </li>
            <li>
              There are two rounds of duration 2 hours each.
            </li>
          </ul>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
            PC with Fusion 360 installed in it and a Stable internet connection.
            </li>
            <li>
            At least one person should have fusion 360 installed on their PC.
            </li>
            <li>
              Good Internet connection.
            </li>
            <li>
              One of them should know how to assemble components in Fusion 360.
            </li>
          </ul>
          <br />
          <br/>
          <h2 className="eventsSubheadings">Registration Fee</h2>
          <br/>
          <p className="descriptionOfEventObjectives"><strong>For Non-IIESTians</strong></p>
          <br/>
          <ul className="descriptionOfEventObjectives">
      <li>
Rs 160 per team
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
          <br/>
           <h2 className="eventsSubheadings">Rewards </h2>
          <br/>
          <p className="descriptionOfEventObjectives">
            Rs 15,000/-
          </p>
          <br />
            <h1 className="eventsSubheadings">Date of the Event : 14th (5:15 to 7:15 pm) & 15th March 2022 (2 to 4 pm).</h1>
<br/>
            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Tannishtha Bag : 8587825869.

            </li>
            <li>
Akanksha Kumari : 6204290557.
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
          <button className="registerBtn" onClick={() => displayRazorpay(3)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
