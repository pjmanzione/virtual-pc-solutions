import React from "react";
import "./CSS/Testimonials.css";

const testimonialsData = [
  {
    name: "Paul Doe",
    title: "CEO of Example Corp",
    testimonial:
      "This company provided excellent service and helped us improve our business processes significantly.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Jane Smith",
    title: "Marketing Director",
    testimonial:
      "Their attention to detail and commitment to customer satisfaction is second to none.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Michael Brown",
    title: "CTO of Tech Innovators",
    testimonial:
      "We were able to streamline our operations thanks to their innovative solutions.",
    image: "/images/testimonial3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-image-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-title">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
