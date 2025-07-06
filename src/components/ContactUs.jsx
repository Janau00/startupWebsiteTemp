import React, { useState } from "react";


const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p className="address-label">Our address is:</p>
          <p>123 Startup Road,<br /> Tech City,<br />Phone: +1 234 567 890</p>
          <div className="social-icons">
            {/* <a href="#"><i className="fab fa-facebook-f"></i></a> */}
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            {/* <a href="#"><i className="fab fa-google-plus-g"></i></a> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <p className="quote">
            Great vision without great people is irrelevant.<br />
            Let’s work together.
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
