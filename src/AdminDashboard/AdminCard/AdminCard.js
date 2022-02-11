import React from 'react'
import './AdminCard.css'

export default function AdminCard(props) {
    return (
        <div className="admincard">
            <h1>{props.title}</h1>
            <p>{props.population}</p>
        </div>
    )
}
