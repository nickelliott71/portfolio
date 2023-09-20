import React, { useState } from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Field, FieldLabel, FieldInput, FieldTextArea } from './ContactStyles.js';

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
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <form onSubmit={handleSubmit}>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <FieldInput
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
          <FieldInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phoneNumber">Phone number</FieldLabel>
          <FieldInput
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
          <FieldTextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </Field>
        <button type="submit">Submit</button>
      </form>
    </Section>
  );
};


export default Contact;
