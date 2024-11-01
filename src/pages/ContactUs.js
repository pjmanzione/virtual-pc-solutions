import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./CSS/ContactUs.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "", // Add subject to handle dropdown selection
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
    const templateID = "template_10y6maq";
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        // Reset the form after submission
        setFormData({ name: "", email: "", message: "", subject: "" });
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
      id="contact-us"
    >
      <h1>Contact Us</h1>
      <p>
        <a href="mailto:support@virtualpcsolutions.com">
          {" "}
          support@virtualpcsolutions.com
        </a>
      </p>

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
        {/* Dropdown (Select) */}
        <label htmlFor="subject">Select a Service:</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject} // Bind dropdown to state
          onChange={handleChange} // Handle dropdown change
          required
        >
          <option value="">-- Please Choose --</option>
          <option value="Remote Support">Remote Support</option>
          <option value="Cloud Hosting">Cloud Hosting</option>
          <option value="Google Appsheet">Google Appsheet</option>
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

export default ContactForm;
