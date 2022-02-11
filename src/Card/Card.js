import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="cardBox">
      <img alt="hi" src={props.src} className="cardImg" />
      <p className="cardTitle">{props.title}</p>
    </div>
  );
}
