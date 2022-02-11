import React,{useEffect, useState} from "react";
import "./LeaderShipCard.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { CircularProgress } from "@mui/material";


export default function LandingPage() {
  const [leaders , setLeaders] = useState([]); 
  // const [loader , setLoader] = useState(false);

const auth = async () => {
  // setLoader(true);
    const res = await fetch(`${process.env.REACT_APP_SERVER}/leadersScore`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (res.status === 401) {
      window.localStorage.clear();
      window.location.reload("/");
    }
    const data = await res.json();
    // setRegistrations(
    //   data.registrations.reverse().map((regist) => (
    //     <RegistMessageCard key={regist._id} title={regist.name} college = {regist.institute} email = {regist.email} branch = {regist.branch} phone={regist.phone} />
    //   ))
    // )
  // setLoader(false);
    setLeaders(data.leadersData.reverse())
  };


  useEffect(()=>{
  window.scrollTo(0, 0) ;
  auth();

},[])
  return (
    <div>
      <div className="pageCover">
        <Navbar />
        {/* <img src={impetusLogo} id="logo" alt="hi" /> */}
      </div>
      <div className="mainContent">
        <div className="impetus">
          <p>Leader Board</p>
        </div>
        <div className="LeaderShipCard">
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor : "#fd8c1d"}}>
          <TableRow>
            <TableCell  style={{color : "white" , fontSize : "large" , fontWeight : "bold"}}>Rank</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}}>Name</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">College</TableCell>
            <TableCell style={{color : "white" , fontSize : "large" , fontWeight : "bold"}} align="center">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { leaders.map((row,index) => {
            return <TableRow 
            style={{backgroundColor : index === 0  ? "#FFBC80" : "#FFF"}}
             className="registMeRow"
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ fontSize : "medium" }} align="left">{index+1}</TableCell>
              <TableCell 
              style={{ fontSize : "medium" }}
              component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize : "medium" }} align="center">{row.institute}</TableCell>
              <TableCell style={{ fontSize : "medium" }} align="center">{row.score}</TableCell>
            </TableRow>
})}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
