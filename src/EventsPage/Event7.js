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
export default function Event7() {

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
        name: "Chess",
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
          eventName : "Chess"  ,
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
          <p>Chess</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
            Hola people!<br/><br/>Wanna show off your skill, intelligence and presence of mind in an 8x8 square grid? Then yes,this is the right place for you. 
            <br/>
            <br/>
            Impetus 5.0 brings you a game of Chess where you will square off against other competitive minds and strive to prove that you’re the best of them all. 
<br/><br/>
So, get ready for the challenge and come, participate to show that your strategic mind is the best among the best…
          </p>
          <br />
          <br/>
          <h2 className="eventsSubheadings">Flow of Events</h2>
          <br/>
          <p className="descriptionOfEventObjectives">
Will be taking place on lichess.org
Further rules will be declared on the spot.
          </p>
                    <br/>
<br/>

<h2 className="eventsSubheadings">Guidelines</h2>
          <br/>
          <ul className="descriptionOfEventObjectives">

<li>
Platform: lichess.org.
</li>
<li>
  Time control: 10+0.
</li>
<li>
  Rounds: 2.
</li>
<li>
Round time: 1 hour.
</li>
<li>
  Open to all.
</li>
          </ul>
          <br/>
          <br/>

            <h1 className="eventsSubheadings">Team Size : Individual Participation</h1>
<br/>
<br/>

            <h1 className="eventsSubheadings">Registration Fee : Rs. 30/-</h1>
<br/>
<br/>
            <h1 className="eventsSubheadings">Rewards</h1>
            <p className="descriptionOfEventObjectives">
          Prizes worth Rs. 7000 to be awarded to the winners.
            </p>
<br/>
<br/>
            <h1 className="eventsSubheadings">Date of the Event : 25th & 26th February 2022.</h1>
<br/>
<br/>

            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Ritam Sarkar : 9836165722.

            </li>
            <li>
Shubhankar Sarkar : 7985400976.
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
          <button className="registerBtn" onClick={() => displayRazorpay(6)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
