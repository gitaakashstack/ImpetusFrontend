import React from "react";
export default function MessageCard(props) {
    let link = `mailto:${props.email}`;
  return (
    <tr className="registrationCard">
    <td>{props.title} </td>
    <td><a href={link}>{props.email}</a></td>
    <td>{props.msg}</td>
  </tr>
  );
}