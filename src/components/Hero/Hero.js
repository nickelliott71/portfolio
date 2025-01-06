import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Nick Elliott,
        </SectionTitle>
        <SectionText>
            I’m a Design System and UX consultant/practitioner based in Cheltenham, UK.  I'm passionate about crafting user-centered digital experiences. With over 20 years of experience, I specialise in Design System product management, UI design, and user research. 
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
