import React from "react";
import "./RegistMessageCard.css";
export default function RegistMessageCard(props) {
    let link = `mailto:${props.email}`;
  return (
    <tr className="registrationCard">
    <td>{props.title} </td>
    <td>{props.college}</td>
    <td>{props.branch}</td>
    <td><a href={link}>{props.email}</a></td>
    <td>{props.phone}</td>
  </tr>
  );
}
