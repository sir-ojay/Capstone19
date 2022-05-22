import React from "react";
import "./Overview.css";

const Overview = () => {
  
  return (
    <div className="overview-main">
      <div className="overview">
        <p>Total Profits</p>
        <b>$98,888</b>
        <small>+23%</small>
      </div>
      <div className="overview1">
        <p>Total Expenses</p>
        <b>$118,898</b>
        <small>+35%</small>
      </div>
      <div className="overview2">
        <p>New Users</p>
        <b>$1,898</b>
        <small>+1%</small>
      </div>
    </div>
  );
};

export default Overview;
