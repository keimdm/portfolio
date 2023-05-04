import React, { useState } from 'react';

// returns contact form and functionality
function Contact() {
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  // updates contactName, email and message state  variables so that changes appear onscreen wheen made
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactName") {
      return setContactName(value);
    }
    else if (name === "email") {
      return setEmail(value);
    }
    else {
      return setMessage(value);
    }
  };

  // functionality for when the user clicks out of a field
  const handleBlur = (e) => {
    const { name, value } = e.target;
    // handles blank fields by changing the value of an alert
    if (value === "" ) {
      if (name === "contactName") {
        return setAlert("The name field cannot be blank");
      }
      else if (name === "email") {
        return setAlert("The email field cannot be blank");
      }
      else {
        return setAlert("The message field cannot be blank");
      }
    }
    else {
      // checks if email address is valid, adding an alert message if not
      if (name === "email") {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (value.match(validRegex)) {
          return setAlert("");
        }
        else {
          return setAlert("Invalid email address");
        }
      }
      else {
        return setAlert("");
      }
    }
  }

  // handles form submit by clearing the fields
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactName('');
    setEmail('');
    setMessage('');
    setAlert('');
  };

  // returns  code  to be rendered
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>Contact</h3>
      <form className="form d-flex flex-column justify-content-center align-items-center">
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Message"
        />
        <p>{alert}</p>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;