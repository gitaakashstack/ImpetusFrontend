import React from "react";
import AdminNavbar from "./Navbar/AdminNavbar";
import "./AdminDashboard.css";
import LineChart from "./Charts/CaScoreLine";
import PieChart from "./Charts/EventsPieGraph";
export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <div className="dashboardBody">
        <div className="adminGrid">
          <div className="graphDiv"> 
            <LineChart />
            <p>Campus Ambassador's Referral Registrations</p>
          </div>
          <div className="graphDiv">
          <PieChart />
          <p>Event's Registrations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
