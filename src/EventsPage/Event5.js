import React , {useState , useEffect} from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {useHistory} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

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
export default function Event5() {

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
          setButtonText("Pay Rs.80");
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
        name: "Quizario",
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
          eventName : "Quizario"  ,
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
          <p>Quizario</p>
        </div>
        <div className="eventDetails">
          <p className="descriptionOfEventObjectives">
      
To instill the essence of quizzing, Society of Mechanical Engineers of IIEST, Shibpur brings to you a Grand General Technical Quiz: "Quizario" under the banner of Impetus 5.0.
<br/>
The quiz will be a long format quiz held in two rounds spanning over two days, the prelims being a set of questions provided to each group to be submitted in the stipulated time and finals being a head-on Live Quiz.
<br/>
The questions will be a general quiz with plenty of hints for working out the answers with intelligent guesses. The quizmaster has promised that there won't be a single answer that you haven't heard before, so anybody with a knack for quizzing can easily participate and win laurels.
<br/>
          </p>
          <br />
          <h1 className="eventsSubheadings">Flow of the Event</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
            PRELIMS: Day 1 (16th March 2022) - A set of 22 questions carrying 30 marks will be provided to every group and they need to answer and submit within the stipulated time of 1.5 hours. 
<br/>
<br/>
FINALS: Day 2 (17th March 2022) - From the Prelims Six - Eight teams will qualify and they will compete head to head in the Finals for the ultimate glory in a Live Quiz.
          </p>
          <br/>
           <h1 className="eventsSubheadings">Guidelines </h1>
           <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
              The Quiz Master's decision will be final. However, in case of any factual discrepancies (if present), it will be dealt with separately.
            </li>
            <li>
              ABSOLUTELY NO GOOGLING: Any kind of cheating will result in disqualification! 
            </li>
            <li>
              Keeping the video on throughout the final round. 
            </li>
          </ul>
          <br/>


<h1 className="eventsSubheadings">Pre-requisites </h1>
           <br/>
          <p className="descriptionOfEventObjectives">
For both rounds, Zoom/Google Meet would be the platform. So, all the participants are required to have their personal computers or smartphones along with a steady internet connection.
          </p>
          <br/>


<h1 className="eventsSubheadings">Team Size </h1>
           <br/>
          <ul className="descriptionOfEventObjectives">
<li>
  Team of 2 members
</li>
<li>
  One participant cannot be a part of more than one team.
</li>
<li>
  No change in team structure is permitted after the team is registered.
</li>
          </ul>
          <br/>


<br/>
          <h2 className="eventsSubheadings">Registration Fee</h2>
                   <br/>
          <p className="descriptionOfEventObjectives"><strong>For Non-IIESTians</strong></p>
          <br/>
          <ul className="descriptionOfEventObjectives">
      <li>
Rs 80/-
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
            <h1 className="eventsSubheadings">Rewards </h1>
            <p className="descriptionOfEventObjectives">
 Prizes worth ₹8000/- up for grabs.
            </p>
<br/>
<br/>

            <h1 className="eventsSubheadings">Date : 16th (5:00 to 6:30 pm) & 17th March, 2022 (3:45 to 5:45 pm).</h1>
<br/>
<br/>

            <h1 className="eventsSubheadings">Contact</h1>
<br/>
<ul className="descriptionOfEventObjectives">
          
     <li>
Anurag Sahu : 7980738779.
            </li>
            <li>
Nazrullah : 9748952490.
            </li>       
            <li>
              Jagriti Garg : . 
            </li>
          </ul>
          <br/>
          <br/>
          <h1 className="eventsSubheadings">
Society of Mechanical Engineers of IIEST, Shibpur invites everyone to participate and be a part of this grand General Technical Quiz under Impetus 5.0.
          </h1>
           <br/>

          {/* <h1 className="eventsSubheadings">Registration is free for IIEST students.</h1> */}
        </div>
        <div className="registerDiv">
          {loader ? 
          <div style={{marginTop : "50px"}}>
          <CircularProgress style={{color: "orangered"}}/>
          </div>
          :
          <button className="registerBtn" onClick={() => displayRazorpay(4)}>
            {buttonText}
          </button>
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
