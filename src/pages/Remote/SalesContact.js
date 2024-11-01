import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../CSS/ContactUs.css";

const RemoteSalesContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "", // Subject dropdown
    machines: "", // Machines dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your own EmailJS credentials
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = "template_chxprdo";
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        // Reset the form after submission
        setFormData({
          name: "",
          email: "",
          message: "",
          subject: "",
          machines: "",
        });
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send the message, please try again.");
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "0 auto" }}
      id="sales-contact"
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        {/* First Dropdown (Subject Select) */}
        <label htmlFor="subject">Select a Plan:</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject} // Bind dropdown to state
          onChange={handleChange} // Handle dropdown change
          required
        >
          <option value="">-- Please Choose --</option>
          <option value="Standard">Standard</option>
          <option value="Business">Business</option>
          <option value="Enterprise">Enterprise</option>
        </select>
      </div>
      <div>
        {/* Second Dropdown (Machines Select) */}
        <label htmlFor="machines">
          How many machines are you inquiring about?
        </label>
        <select
          name="machines"
          id="machines"
          value={formData.machines} // Bind dropdown to state
          onChange={handleChange} // Handle dropdown change
          required
        >
          <option value="">-- Please Choose --</option>
          <option value="1-500">1-500</option>
          <option value="500-1000">500-1000</option>
          <option value="1000-2000">1000-2000</option>
          <option value="More than 2000">More than 2000</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RemoteSalesContact;
