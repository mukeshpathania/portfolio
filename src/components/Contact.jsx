import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0ppfkuc",
        "template_6ermhll",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "tVnko6xHAU9T85Xwg"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-text">
        Feel free to reach out for collaboration, opportunities, or just to say hi 👋. Have a question or want to work together? Send me a message 👇
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="send-btn">
          <FaPaperPlane /> Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
