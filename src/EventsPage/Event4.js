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
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
Trade Assemble, well actually in the opposite order, where you first assemble components in fusion 360 and then take it to the next level and assess your product financially. This competition aims to coalesce the idea of basic trading with assembly of 3D structures virtually on a CAD software. This event will test the level of proficiency of the participants in assembling 3D models while checking their understanding of finances as encountered in real life. 
<br/>
<br/>
Teams will be provided with components to assemble. Is that it?! You will have to trade your items with other team members in exchange of other items or tokens to complete your model. 
<br/>
<br/>
The event aims to bring the participants closer to the real-life scenario, you get to assemble a machinery while you also learn to trade for other commodities and assess the value of the items you possess in the outside world.
          </p>
          <br />

  <h1 className="eventsSubheadings">Basic Information</h1>
<br/>


<ul className="descriptionOfEventObjectives">
           

     <li>
  Date of event – 24 -25th February 2022
            </li>
            <li>
            Registration closes 1 hour before commencement of Round 1 
            </li>
            <li>
              Pre-requirements – PC with Fusion 360 installed in it and a Stable internet connection. 
            </li>
            <li>
              Participants have to form a team of 3-4 members. 
            </li>

            <li>
            Participants have to be present in the Zoom/meet throughout the event. 
            </li>
            <li>
             There are two rounds of duration 2 hours each.
            </li>
            <li>
        Prize money – Rs 5000(winner), Rs. 3000(first runner up), Rs. 2000 (second runner up).
            </li>
                        
          </ul>
          <br/>

          <h1 className="eventsSubheadings">Objective and Marking</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
           Initially, teams will be provided with jumbled set of components. The members need to judiciously trade with other team members to collect suitable components for completing any one of the standard models (the models whose parts were jumbled and provided to the teams). 
The teams will be marked on the basis of time taken and number of trade tokens left with them at the end. (50% weightage to both aspects) 
 
<br/>
<br/>
 
The time required and token remaining at the end of the event will be evaluated to find the top 3 teams, who will be declared as the winner. 

<br/>
<br/>

So come join us in celebrating IMPETUS 5.0 at IIEST Shibpur and make sure to be a part of TRADE ASSMEBLE. 
          </p>
          <br />
          <h1 className="eventsSubheadings">Pre-requisites</h1>
          <br/>
          <ol className="descriptionOfEventObjectives">
            <li>
              Atleast one person should have fusion 360 installed on their pc.
            </li>
            <li>
              Good Internet connection
            </li>
            <li>
              One of them should know how to assemble components in fusion 360.
            </li>
          </ol>
          <br />
          <h2 className="eventsSubheadings">Prize Money</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
            Rs 15,000/-
          </p>
          <br />
          <h2 className="eventsSubheadings">Registration fees per Team</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
            Rs 160/-
          </p>
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