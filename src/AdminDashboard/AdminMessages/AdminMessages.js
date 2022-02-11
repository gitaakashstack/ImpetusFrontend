import React, { useEffect, useState } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
// import MessageCard from "./MessageCard/MessageCard";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/messages`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
      }
    })
      .then((resp) => resp.json())
      .then((data) =>
        // setMessages(
        //   data.messagesLegit.reverse().map((regist) => (
        //     <MessageCard  key={regist._id} msg = {regist.msg} title={regist.name} email = {regist.email} phone= {regist.phone} />
        //   ))
        // )
        setMessages(data.messagesLegit.reverse())
      );
      // eslint-disable-next-line
  }, []);
  return (
    <>
      <AdminNavbar />
      <div className="registrationBody">
        <div className="registrationBox">

 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor : "#064663"}}>
          <TableRow>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}}>Name</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Email</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row) => {
            let link = `mailto:${row.email}`;
          return  <TableRow 
             className="registMeRow"
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
              style={{ fontSize : "medium" }}
              component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize : "medium" }} align="center"><a href={link}>{row.email}</a></TableCell>
              <TableCell style={{ fontSize : "medium" }} align="center">{row.msg}</TableCell>
            </TableRow>
})}
        </TableBody>
      </Table>
    </TableContainer>


          {/* <table className="AdminDataTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Messages</th>
              </tr>
              </thead>
              <tbody>
          {messages}
          </tbody>
          </table> */}

          </div>
      </div>
    </>
  );
}
