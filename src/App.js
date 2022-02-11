import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EventsPage from "./EventsPage/EventsPage";
import IndustryAcademia from "./IndustryAcademia/IndustryAcademia";
import Team from "./Team/Team";
import Contact from "./ContactUs/ContactUs";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./LoginPage/SignUp";
import ForgotPass from "./LoginPage/ForgotPass";
import Profile from "./Profile/Profile";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminRegistrations from "./AdminDashboard/AdminRegistrations/AdminRegistrations";
import AdminMessages from "./AdminDashboard/AdminMessages/AdminMessages";
import AdminLoginPage from "./AdminLoginPage/AdminLoginPage";
import AdminSignUpPage from "./AdminLoginPage/AdminSignUp";
import AdminForgotPass from "./AdminLoginPage/AdminForgotPass";
import LeaderShipCard from "./LeaderShipCard/LeaderShipCard";
import CampusAmbas from "./CampusAmbas/CampusAmbas";
import CaSignUpPage from "./CampusAmbas/CaSignup";
import CaForgot from "./CampusAmbas/Caforgot";
import CADashboard from "./CampusAmbas/CAdashboard";
import Event1 from "./EventsPage/Event1";
import Event2 from "./EventsPage/Event2";
import Event3 from "./EventsPage/Event3";
import Event4 from "./EventsPage/Event4";
import Event5 from "./EventsPage/Event5";
import Event6 from "./EventsPage/Event6";
import { NotFound } from "./404/NotFound";
import Event7 from "./EventsPage/Event7";
import Event8 from "./EventsPage/Event8";
import Event9 from "./EventsPage/Event9";
import AdminSendMessage from "./AdminDashboard/AdminSendMessage/AdminSendMessage";
import Event10 from "./EventsPage/Event10";
function App() {
  // if (window.localStorage.getItem("token"))
  //   document.cookie = `jwtoken = ${window.localStorage.getItem("token")}`;
  //   if(window.localStorage.getItem("admintoken"))
  //   document.cookie = `adminjwtoken = ${window.localStorage.getItem("admintoken")}`
  
  //   if(window.localStorage.getItem("catoken"))
  //   document.cookie = `catoken = ${window.localStorage.getItem("catoken")}`

    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/aboutUs">
            <AboutUs />
          </Route>
          <Route exact path="/events">
            <EventsPage />
          </Route>
          <Route exact path="/event1">
            <Event1 />
          </Route>
          <Route exact path="/event2">
            <Event2 />
          </Route>
          <Route exact path="/event3">
            <Event3 />
          </Route>
          <Route exact path="/event4">
            <Event4 />
          </Route>
          <Route exact path="/event5">
            <Event5 />
          </Route>
          <Route exact path="/event6">
            <Event6 />
          </Route>
          <Route exact path="/event7">
            <Event7 />
          </Route>
          <Route exact path="/event8">
            <Event8 />
          </Route>
          <Route exact path="/event10">
            <Event10 />
          </Route>
                    <Route exact path="/event9">
            <Event9 />
          </Route>
          <Route exact path="/industry">
            <IndustryAcademia />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/about">
            {window.localStorage.getItem("token") ? (
              <Profile />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route exact path="/contactUs">
            <Contact />
          </Route>
          <Route exact path="/login">
            {window.localStorage.getItem("token") ? (
              <LandingPage />
            ) : (
              <LoginPage />
            )}
          </Route>
          <Route exact path="/adminlogin">
            {window.localStorage.getItem("admintoken") ? (
              <LandingPage />
            ) : (
              <AdminLoginPage />
            )}
          </Route>
          <Route exact path="/signup">
            {window.localStorage.getItem("token") ? (
              <LandingPage />
            ) : (
              <SignUpPage />
            )}
          </Route>
          <Route exact path="/adminsignup">
            {window.localStorage.getItem("admintoken") ? (
              <LandingPage />
            ) : (
              <AdminSignUpPage />
            )}
          </Route>
          <Route exact path="/forgotpass">
            {window.localStorage.getItem("token") ? (
              <LandingPage />
            ) : (
              <ForgotPass />
            )}
          </Route>
          <Route exact path="/adminforgotpass">
            {window.localStorage.getItem("admintoken") ? (
              <LandingPage />
            ) : (
              <AdminForgotPass/>
            )}
          </Route>
          <Route exact path="/adminDashBoard">
            { window.localStorage.getItem("admintoken") ? 
            <AdminDashboard/> : <LandingPage/>}
          </Route>
          <Route exact path="/registrations">
          { window.localStorage.getItem("admintoken") ? 
            <AdminRegistrations/> : <LandingPage/>}
          </Route>
          <Route exact path="/sendmessage">
          { window.localStorage.getItem("admintoken") ? 
            <AdminSendMessage/> : <LandingPage/>}
          </Route>
          <Route exact path="/messages">
          { window.localStorage.getItem("admintoken") ? 
             <AdminMessages/> : <LandingPage/>} 
          </Route>
          <Route exact path="/leaderboard">
            <LeaderShipCard />
          </Route>
          <Route exact path="/calogin">
            {window.localStorage.getItem("catoken") ? (
              <LandingPage />
            ) : (
              <CampusAmbas />
            )}
          </Route>
          <Route exact path="/casignup">
            {window.localStorage.getItem("catoken") ? (
              <LandingPage />
            ) : (
              <CaSignUpPage />
            )}
          </Route>

          <Route exact path="/caforgotpass">
            {window.localStorage.getItem("catoken") ? (
              <LandingPage />
            ) : (
              <CaForgot/>
            )}
          </Route>
          <Route exact path="/caDashboard">
            { window.localStorage.getItem("catoken") ? 
            <CADashboard/> : <LandingPage/>}
          </Route>
          <Route path="*">
            <NotFound/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
