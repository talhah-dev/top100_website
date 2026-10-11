"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "A place in the guide",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form values:", formData);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 2500);
  };

  return (
    <div className="formcard rv in" id="write">
      <div className="eyebrow" style={{ position: "relative" }}>Write to Us</div>
      <form id="contactForm" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="f-name">Your Name</label>
          <input
            type="text"
            id="f-name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input
            type="email"
            id="f-email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="f-topic">What Is It About?</label>
          <span className="selwrap">
            <select
              id="f-topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
            >
              <option value="A place in the guide">A place in the guide</option>
              <option value="Feature my business">Feature my business</option>
              <option value="The book">The book</option>
              <option value="The apps">The apps</option>
              <option value="Something else">Something else</option>
            </select>
            <i>&#9662;</i>
          </span>
        </div>
        <div className="field">
          <label htmlFor="f-message">Your Message</label>
          <textarea
            id="f-message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="sendrow">
          <button
            type="submit"
            className={`sendbtn ${isSent ? "sent" : ""}`}
            id="sendBtn"
          >
            {isSent ? "SENT \u2713" : "SEND MESSAGE"}
          </button>
          <span className="sendnote">Every message is read by a person.</span>
        </div>
      </form>
    </div>
  );
}
