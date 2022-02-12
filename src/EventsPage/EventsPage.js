import React,{useEffect} from "react";
import EventCard from "./EventsCard/EventCard";
import "./EventsPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



export default function EventsPage() {


  useEffect(()=>{
  window.scrollTo(0, 0)
},[])
  return (
    <div>
      <div className="pageCover3">
      <Navbar/>
      </div>
      <div className="mainContent1">
        <div className="about">
          <p>Events </p>
        </div>
        <div className="navigationGrid2">
       
        <EventCard  data_aos="flip-left"  title="CADegorized" 
        desc="Do you wish to design the future? Or have a profound love for tweaking designs, for visualizing amazing tech? 
Well, here's your chance to shine! 
Impetus 5.0, in association with SAE, IIEST Shibpur, brings you the much awaited CAD event. So unleash your creativity, put pen to paper (sorry, cursor to screen) and bring to life the smartest designs.

" link="/event1" />
       
        <EventCard  data_aos="flip-right"  title="Yantra Search" 
        desc="This event propels the participants to leave their seats and go around observing the machines around them. It is a test of how much one is aware of things present around them , teams have to solve riddles, one at a time, as quickly as possible. The fastest three teams that can solve all the riddles correctly will be declared winners. Prizes will be given to the top 3 teams." link="/event2" />
       
        <EventCard  data_aos="flip-left"  title="Heatovation"
         desc=" Idea presentation is an event organized by IMPETUS 5.0 in association with ISHRAE - IIEST Kolkata chapter. It invites participation from students with entrepreneurial/problem-solving mindsets pan India. It would require its participants to present their ideas to the panel of judges and answer their queries based on the presentation." link="/event3" />
       
        <EventCard  data_aos="flip-right" title="Trade Assemble" 
        desc="Trade Assemble, well actually in the opposite order, where you first assemble components in fusion 360 and then take it to the next level and assess your product financially. This competition aims to coalesce the idea of basic trading with assembly of 3D structures virtually on a CAD software. This event will test the level of proficiency of the participants in assembling 3D models while checking their understanding of finances as encountered in real life. " link="/event4" />
       
        <EventCard  data_aos="flip-left"  title="Quizario" 
        desc="To instill the essence of quizzing, Society of Mechanical Engineers of IIEST, Shibpur brings to you a Grand General Technical Quiz: 'Quizario' under the banner of Impetus 5.0." link="/event5" />
       
        <EventCard  data_aos="flip-right" title="TrustMe" 
        desc="Trust ME is a trust-building event, but instead of a team-mate, the participants have to trust and rely on their skills and logic. This competition aims to test logical, lateral and innovate skills. The participant is asked to complete puzzles given in a form of mobile application game. The participants have to solve puzzles employing their logic and innovation to find out the solution. " link="/event6" />
       
        <EventCard  data_aos="flip-left" title="Chess" 
        desc="Hola people!…Wanna show off your skill, intelligence and presence of mind in an 8x8 square grid? Then yes,this is the right place for you. Come, and participate to show that your strategic mind is best among the best…The Rules and Other information are mentioned below." link="/event7" />
       
        <EventCard  data_aos="flip-right" title="Valorant" 
        desc=" Are you the person who’s made a long journey from Counter strike to Valorant? Is FPS a match made in heaven for you? Then, Voila! You arrived at your paradise. Join and participate in this thrilling gaming Competition and show you are no less than a pro gamer." link="/event8" />
        
        <EventCard  data_aos="flip-left" title="BGMI" 
        desc="Are you a lover of open world gaming? A person who enjoys a game of survival skills and sheer finesse? Then yes you’ve come to the right spot.Participate in this challenging competition of BGMI to show off your shooting and survival skills.Be the one who can show others that what a real BGMI champ looks like. Participate and Join now!" link="/event9" />
       
        <EventCard  data_aos="flip-left" title="Roadmap -  Strategy Design Contest"
         desc="A good strategy and designing build the path from an ordinary concept to an extraordinary success. To identify and promote all such visionary geniuses, the Department of Mechanical Engineering, IIEST Shibpur brings to you, Roadmap- Strategy Design Contest, in its annual tech-fest IMPETUS 5.0." link="/event10" />

        </div>
      </div>
    <Footer/>
    </div>
  );
}
