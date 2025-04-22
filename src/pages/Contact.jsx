import React, { useState } from "react";
import '../styles/Contact.css'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f0827295-a377-4acb-8457-f45250fd7334");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSubmitted(true);         // show message
      event.target.reset();       // clear form
    }
  };

  return (
    <>
      <section className="Contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Form</h2>

          {submitted && (
            <p className="success-message">Thank you! Your message has been sent.</p>
          )}

          <div className='input-box'>
            <label>Full Name</label>
            <input
              type="text"
              className='field'
              placeholder='Enter your Name'
              name='name'
              required
            />
          </div>

          <div className='input-box'>
            <label>Email Address</label>
            <input
              type="email"
              className='field'
              placeholder='Enter your email'
              name='email'
              required
            />
          </div>

          <div className='input-box'>
            <label>Your Message</label>
            <textarea
              name="message"
              className='field'
              placeholder='Enter your message'
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
