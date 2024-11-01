import React, { useState } from "react";
import "../CSS/FAQ.css"; // Create a CSS file for FAQ styling (optional)

const RemoteFAQ = () => {
  // Define the questions and answers
  const faqData = [
    {
      question: "Sessions Explained",
      answer:
        "A session is any connection between a technician and a remote computer.",
      title: "For example, a 5 session license allows:",
      bullets: [
        "One technician to connect to five remote machines at the same time.",
        "Two technicians to connect to two and three remote machines respectively.",
        "Any combination up to five concurrent remote connections.",
      ],
    },

    {
      question: "Why do I need cloud hosting for the remote software?",
      answer:
        "A cloud-hosted server is essential for remote support software because it provides scalable, secure, and always-available infrastructure that allows technicians to connect to and manage remote devices from anywhere, at any time. This eliminates the need for complex on-premise setups, reduces downtime, and ensures that support sessions are fast, reliable, and accessible without geographic limitations. Additionally, cloud hosting offers enhanced security, data backups, and easy integration with other cloud services, making it a cost-effective and flexible solution for remote support operations.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can contact our customer service team via email at info@virtualpcsolutions.com ",
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
            {/* Conditionally render bullet points if they exist */}
            {item.bullets && (
              <>
                <p>{item.title}</p>
                <ul>
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RemoteFAQ;
