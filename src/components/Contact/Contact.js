import React, { useState } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Field, FieldLabel, FieldInput, FieldTextArea, SubmitButton } from './ContactStyles.js';
import { SectionLink } from '../Footer/FooterStyles';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
  
      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        console.log('Email sent successfully in component');
        setIsSubmitted(true);
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Error sending email in component');
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitted(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionText>
        If you think I can help, please fill in the following form and I'll get back to you.  Alternatively, send me a message on <SectionLink href="https://www.linkedin.com/in/nickelliott/">LinkedIn</SectionLink>. Thanks!
      </SectionText>

      {isSubmitted ? (
        // Display the thank-you message when the form is submitted
        <div>
          <h2>Thank you for your interest!</h2>
          <p>I'll get back to you very soon.</p>
        </div>
      ) : (
      <form onSubmit={handleSubmit}>
        <Field>
          <FieldLabel htmlFor="name">Your name</FieldLabel>
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
          <FieldLabel htmlFor="email">Email address</FieldLabel>
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
        <SubmitButton type="submit">Send</SubmitButton>
      </form>
      )}
    </Section>
  );
};


export default Contact;
