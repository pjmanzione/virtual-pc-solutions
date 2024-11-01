// src/components/RecentActivities.js

import React from "react";
import "./CSS/RecentActivities.css";

const RecentActivities = () => {
  const activities = [
    "Logged in",
    "Updated profile",
    "Completed a task",
    "Received a notification",
  ];

  return (
    <div className="recent-activities" id="activities">
      <h3>Recent Activities</h3>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
