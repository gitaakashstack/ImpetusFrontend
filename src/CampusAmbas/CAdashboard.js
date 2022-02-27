import React, { useState, useEffect } from "react";
import CaNavbar from "./CampusNavbar";
import './CADashboard.css';
// import RegistMessageCard from "../AdminDashboard/RegistMessageCard/RegistMessageCard";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function CADashboard() {
  const [user, setUser] = useState();
  const [registrations, setRegistrations] = useState([]);
  const [score , setScore] = useState(0);
  const auth = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER}/cadashboard`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${window.localStorage.getItem("catoken")}`   
      }
    });
    if (res.status === 401) {
      window.localStorage.clear();
      // window.location.reload("/");
    }
    const data = await res.json();
    console.log(data);
    setUser(data.user.name);
    setScore(data.score);
    // setRegistrations(
    //   data.registrations.reverse().map((regist) => (
    //     <RegistMessageCard key={regist._id} title={regist.name} college = {regist.institute} email = {regist.email} branch = {regist.branch} phone={regist.phone} />
    //   ))
    // )
    setRegistrations(data.registrations.reverse())
  };

  useEffect(() => {
    auth();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <CaNavbar name={user} />
      <div className="dashboardBody">
        <div className="campusAmbassFrame">
          <div className="campusBox">
            <p style={{textAlign : 'center' , fontWeight: '700' , color :'red'}}>
            <a href="https://chat.whatsapp.com/D4dIMgw7HKF6TRyiTb29Nd">Please join the Campus Ambassador's Whatsapp group Click Here</a>
            </p>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor : "#064663"}}>
          <TableRow>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}}>Name</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Email</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Phone</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Score : {score}</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Referral Code : {window.localStorage.getItem("referralCode")}</TableCell>

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
            </TableRow>
})}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
