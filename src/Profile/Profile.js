import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import CircularProgress from '@mui/material/CircularProgress';
import "./Profile.css";
import RegisteredEvents from "./RegisteredEvents";
export default function Profile() {
  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  const [user, setUser] = useState({});
  const [loader , setLoader] = useState(true);
  const [registrations, setRegistrations] = useState([]);
  useEffect(() => {
    const auth = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER}/about`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
      }
    });
    if (res.status === 401) {
      window.localStorage.clear();
      window.location.reload("/login");
    }
    const data = await res.json();
    setUser(data);
    setLoader(false)
    setRegistrations(
      data.paidEvents
        .reverse()
        .map((regist) => (
          <RegisteredEvents
            key={regist._id}
            eventName={regist.eventName}
            order={regist.order_id}
            payment={regist.payment_id}
          />
        ))
    );
  };
  setTimeout(()=>{
    auth();
  },2000)
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="pageCover5">
        <Navbar />
      </div>
      <div className="mainContent4">
        {loader ? 
        <div style={{display : "flex" , justifyContent : "center"}}>
        <CircularProgress style={{color : "orangered"}}/>
        </div> :
        <>
        <div className="about4">
          <p>My Profile</p>
        </div>
        <div className="mainFlex" >
        <div className="aboutProfile">
          <div>
            <p className="aboutProfileHeading">Name</p>
            <div className="aboutProfileDetail">
              <p>{user.name}</p>
            </div>
          </div>
          <div>
            <p className="aboutProfileHeading">Institute</p>
            <div className="aboutProfileDetail">
              <p>{user.institute}</p>
            </div>
          </div>
          <div>
            <p className="aboutProfileHeading">Branch</p>
            <div className="aboutProfileDetail">
              <p>{user.branch}</p>
            </div>
          </div>
          <div>
            <p className="aboutProfileHeading">Phone</p>
            <div className="aboutProfileDetail">
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
        <div>
        <h1 className="regEvntHead">Registered Events</h1>
        <div className="eventsRegistered">{registrations}</div>
        </div>
      </div>
        </>
      }
      </div>
      <Footer />
    </div>
  );
}
