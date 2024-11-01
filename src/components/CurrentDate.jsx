import React, { useEffect, useState } from "react";

const TodayDate = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    // Update the date at midnight to keep it accurate
    const timer = setInterval(
      () => {
        setToday(new Date());
      },
      24 * 60 * 60 * 1000
    ); // Interval set to 24 hours

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  // Format the date as needed, e.g., "Month Day, Year"
  const formattedDate = today.toLocaleDateString("en-US", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    // day: "numeric",
  });

  return (
    <div className="today-date">
      <p> {formattedDate}</p>
    </div>
  );
};

export default TodayDate;
