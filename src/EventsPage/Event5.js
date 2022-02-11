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
PRELIMS: Day 1 (26th Feb 2022) - A set of 22 questions carrying 30 marks will be provided to every group and they need to answer and submit within the stipulated time of 1.5 hours. 
<br/>
FINALS: Day 2 (27th Feb 2022) - From the Prelims Six - Eight teams will qualify and they will compete head to head in the Finals for the ultimate glory in a Live Quiz.
          </p>
          <br />
          <h1 className="eventsSubheadings">Platform</h1>
          <br/>
          <p className="descriptionOfEventObjectives">
            For both rounds, Zoom/Google Meet would be the platform. So, all the participants are required to have their personal computers or smartphones along with a steady internet connection. 
          </p>
          <br/>
           <h1 className="eventsSubheadings">Let us look a few additional rules:</h1>
           <br/>
          <ul className="descriptionOfEventObjectives">
            <li>
              The Quiz Master's decision will be final. However, in case of any factual discrepancies (if present), it will be dealt separately.
            </li>
            <li>
              ABSOLUTELY NO GOOGLING: Any kind of cheating will result in disqualification! 
            </li>
            <li>
              Keeping the video on throughout the final round. 
            </li>
            <li>
             Number of people per team: 2. 
            </li>
            <li>
              Entry fees (per team): ₹80/-
            </li>
            <li>
              Prize Money: ₹8000/-
            </li>
          </ul>
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
