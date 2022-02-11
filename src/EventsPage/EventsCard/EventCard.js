import React from 'react'
import {Link} from 'react-router-dom';
import './EventCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export default function EventCard(props) {
         AOS.init({duration:500});
    return (
        <div data-aos={props.data_aos} className="eventCard">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <div className="linkDiv" data-aos="fade-right">
            <Link  className="link" to={props.link}>Learn More</Link>
            </div>
        </div>
    )
}
