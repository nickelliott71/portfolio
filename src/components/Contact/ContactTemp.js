import React, { useState } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Field, FieldLabel, FieldInput, FieldTextArea, SubmitButton } from './ContactStyles.js';
import { SectionLink } from '../Footer/FooterStyles';


const ContactTemp = () => {
  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionText>
        If you think I can help your business, please send me a message on <SectionLink href="https://www.linkedin.com/in/nickelliott/">LinkedIn</SectionLink> to set up a no obligation chat.  Thanks!
      </SectionText>
    </Section>
  );
};


export default ContactTemp;
