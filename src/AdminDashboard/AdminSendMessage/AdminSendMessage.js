import React, {  useState } from "react";
import AdminNavbar from "../Navbar/AdminNavbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./AdminSendMessage.css";
import MultipleSelect from "./DropDownEvents";
import { TextareaAutosize } from "@material-ui/core";
import swal from "sweetalert";







export default function AdminSendMessage() {

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER}/registrations`, {
//       method: "GET",
//       headers: {
//         'Accept': 'application/json',
//           "Content-Type" : "application/json",
//           "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
//       }
//     })
//       .then((resp) => resp.json())
//       .then((data) =>
//         setRegistrations(
//           data.registrationsLegit.reverse().map((regist) => (
//             <RegistMessageCard key={regist._id} title={regist.name} college = {regist.institute} email = {regist.email} branch = {regist.branch} phone={regist.phone} />
//           ))
//         )
//       );
//     // eslint-disable-next-line
//   }, []);
const [email , setEmail] = useState({
    subject : "",
    body : ""
})

const [email2 , setEmail2] = useState({
    subject : "",
    body : ""
})

const [eventName , setEventName] = useState("");

const sendMail=async(e)=>{
    e.preventDefault();
    console.log(email);
    const response = await  fetch(`${process.env.REACT_APP_SERVER}/sendmessage`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
      },
      body : JSON.stringify({
          eventName : eventName,
          subject : email.subject,
          body : email.body
      })
    })
    const data = await response.json();
      swal("Success" , "Email sent" , "success");
      console.log(data);
      setEmail({ subject : "" , body : ""});
      setEventName("");
      setTimeout(()=>{
        window.location.reload();
      },2000);
}


const sendMailForAll=async(e)=>{
    e.preventDefault();
    const response = await  fetch(`${process.env.REACT_APP_SERVER}/sendreminder`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${window.localStorage.getItem("admintoken")}`
      },
      body : JSON.stringify({
          subject : email2.subject,
          body : email2.body
      })
    })
    const data = await response.json();
    console.log(data);
      swal("Success" , "Email sent" , "success");
      setEmail2({ subject : "" , body : ""});
      setTimeout(()=>{
        window.location.reload();
      },2000);
}

  return (
    <>
      <AdminNavbar />
      <div className="registrationBody">
        <div className="admins_msg_div_flex">
          <div className="sendMailDiv">
            <p style={{color: "orangered" , fontWeight : "bold" , textAlign : "center"}}>Send email for Particular Event</p>
        <Box
        onSubmit={sendMail}
         component="form"
          sx={{ '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e)=>setEmail({...email , subject:e.target.value})} id="outlined-basic" label="Subject" variant="outlined" />
      <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Body"
      style={{ width: "90%" , minHeight : '60px' , padding : '5px' , resize : "vertical" }}
      onChange={(e)=>setEmail({...email , body:e.target.value})}  id="outlined-basic" label="Body" variant="outlined" 

/>
      <MultipleSelect setEvent={setEventName}/>
      <button className="sendBtnForAdmin" onClick={sendMail}>Send Message</button>
    </Box>
          </div>
             <div className="sendMailDiv">
            <p style={{color: "orangered" , fontWeight : "bold" , textAlign : "center"}}>Send email for All Users</p>
        <Box
        onSubmit={sendMailForAll}
         component="form"
          sx={{ '& > :not(style)': { m: 1, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e)=>setEmail2({...email2 , subject:e.target.value})} id="outlined-basic" label="Subject" variant="outlined" />
      <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Body"
      style={{ width: "90%" , minHeight : '60px' , padding : '5px' , resize : "vertical" }}
      onChange={(e)=>setEmail2({...email2 , body:e.target.value})}  id="outlined-basic" label="Body" variant="outlined" 
/>
      {/* <TextField  onChange={(e)=>setEmail({...email , body:e.target.value})}  id="outlined-basic" label="Body" variant="outlined" /> */}
      {/* <MultipleSelect setEvent={setEventName}/> */}
      <button className="sendBtnForAdmin" onClick={sendMailForAll}>Send Message</button>
    </Box>
          </div>
        </div>
      </div>
    </>
  );
}
