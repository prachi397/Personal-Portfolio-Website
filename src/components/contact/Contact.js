import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [detailsSend, setDetailsSend] = useState({});

  function handleFormSubmit(e) {
    e.preventDefault();
    setDetailsSend({
        "Name": name,
        "Email": email,
        "Subject": subject,
        "Message": message
    }
    );
    alert('Message sent successfully.');
    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  }

  function handleChange(e) {
    const {name,value} = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }
  }

  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <form className="form-data" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject"
          value={subject}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          name="message"
          placeholder="Enter Message"
          value={message}
          onChange={handleChange}
          required
        />
        <button className="send-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
