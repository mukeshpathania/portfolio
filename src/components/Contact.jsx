import React, { useState } from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "10b9c6e9-6d90-47c2-a019-d2c201c6692c",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send message ❌");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <p className="contact-text">
        Feel free to reach out for collaboration
        or opportunities 👋
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
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
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="send-btn">
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;