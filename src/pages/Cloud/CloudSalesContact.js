import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../CSS/ContactUs.css";

const CloudSalesContact = () => {
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
      machines: name === "subject" ? "" : formData.machines, // Reset machines on subject change
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = "template_chxprdo";
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
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

  // Options for machines dropdown based on subject selection
  const sharedMachineOptions = [
    {
      value: "50 GB Storage, 2 GB Memory, 3 TB Bandwidth, 1 vCPU Core",
      label: "50 GB Storage, 2 GB Memory, 3 TB Bandwidth, 1 vCPU Core",
    },
    {
      value: "60 GB Storage, 2 GB Memory, 4 TB Bandwidth, 2 vCPU Core ",
      label: "60 GB Storage, 2 GB Memory, 4 TB Bandwidth, 2 vCPU Core",
    },
    {
      value: "100 GB Storage, 4 GB Memory, 5 TB Bandwidth, 2 vCPU Core",
      label: "100 GB Storage, 4 GB Memory, 5 TB Bandwidth, 2 vCPU Core",
    },
  ];
  const dedicatedMachineOptions = [
    {
      value: "30 GB Storage, 4 GB Memory, 4 TB Bandwidth, 1 vCPU Core",
      label: "30 GB Storage, 4 GB Memory, 4 TB Bandwidth, 1 vCPU Core",
    },
    {
      value: "50 GB Storage, 8 GB Memory, 5 TB Bandwidth, 2 vCPU Core",
      label: "50 GB Storage, 8 GB Memory, 5 TB Bandwidth, 2 vCPU Core",
    },
    {
      value: "80 GB Storage, 16 GB Memory, 6 TB Bandwidth, 4 vCPU Core",
      label: "80 GB Storage, 16 GB Memory, 6 TB Bandwidth, 4 vCPU Core",
    },
  ];

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
        <label htmlFor="subject">Shared or Dedicated CPU:</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="">-- Please Choose --</option>
          <option value="Shared">Shared</option>
          <option value="Dedicated">Dedicated</option>
        </select>
      </div>
      <div>
        {/* Second Dropdown (Machines Select) */}
        <label htmlFor="machines">Desired Plan?</label>
        <select
          name="machines"
          id="machines"
          value={formData.machines}
          onChange={handleChange}
          required
        >
          <option value="">-- Please Choose --</option>
          {(formData.subject === "Shared"
            ? sharedMachineOptions
            : dedicatedMachineOptions
          ).map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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

export default CloudSalesContact;
