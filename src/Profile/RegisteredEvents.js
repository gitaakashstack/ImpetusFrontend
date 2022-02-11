import React from 'react';
import './RegisteredEvents.css';
export default function RegisteredEvents(props) {
    return (
        <div className="registeredEventsCardBody">
            <p className="EventName">{props.eventName}</p>
            <p className='idsforPayment'>Order Id : {props.order}</p>
            <p className='idsforPayment'>Payment Id : {props.payment}</p>
        </div>
    )
}
