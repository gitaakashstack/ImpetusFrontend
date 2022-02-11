import React, { useEffect, useState } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
// import RegistMessageCard from "../RegistMessageCard/RegistMessageCard";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import "./AdminRegistrations.css";
export default function AdminRegistrations() {

  const [registrations, setRegistrations] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/registrations`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
      }
    })
      .then((resp) => resp.json())
      .then((data) =>
        // setRegistrations(
        //   data.registrationsLegit.reverse().map((regist) => (
        //     <RegistMessageCard key={regist._id} title={regist.name} college = {regist.institute} email = {regist.email} branch = {regist.branch} phone={regist.phone} />
        //   ))
        // )
        setRegistrations(data.registrationsLegit.reverse())
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
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Phone</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Institute</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Branch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registrations.map((row) => {
            let link = `mailto:${row.email}`;
           return <TableRow 
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
              <TableCell style={{ fontSize : "medium" }} align="center">{row.phone}</TableCell>
              <TableCell style={{ fontSize : "medium" }} align="center">{row.institute}</TableCell>
              <TableCell style={{ fontSize : "medium" }} align="center">{row.branch}</TableCell>
            </TableRow>
           })}
        </TableBody>
      </Table>
    </TableContainer>
          {/* <table className="AdminDataTable">
            <thead>
            <tr>
              <th>Name</th>
              <th>College</th>
              <th>Branch</th>
              <th>Email</th>
              <th>Phone No.</th>
              </tr>
              </thead>
              <tbody>
          {registrations}
          </tbody>
          </table> */}
          </div>
      </div>
    </>
  );
}
