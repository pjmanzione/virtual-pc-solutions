// src/components/Notifications.js

import React from "react";
import "./CSS/Notifications.css";

const Notifications = () => {
  const notifications = [
    "You have a new message",
    "Your password will expire in 5 days",
    "Update available for your software",
  ];

  return (
    <div className="notifications" id="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
