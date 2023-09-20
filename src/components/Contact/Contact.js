import React, { useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Field } from './ContactStyles.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or perform actions.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="message">How can I help?</FieldLabel>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Field>
      <button type="submit">Submit</button>
    </form>
  );
};


export default Contact;
