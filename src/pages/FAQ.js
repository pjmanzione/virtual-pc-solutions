import React, { useState } from "react";
import "./CSS/FAQ.css"; // Create a CSS file for FAQ styling (optional)

const FAQ = () => {
  // Define the questions and answers
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows for returns within 30 days of purchase. Items must be in their original condition and packaging.",
    },

    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees will be calculated at checkout.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can contact our customer service team via email at support@example.com or by calling 1-800-123-4567.",
    },
  ];

  // State to manage which FAQ is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open/close FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
          </div>
          <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
