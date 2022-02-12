import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="team_grid_div_img">
      <img alt="hi" src={props.src} className="team_grid_img" />
      <p className="team_grid_div_p">{props.title}</p>
    </div>
  );
}
