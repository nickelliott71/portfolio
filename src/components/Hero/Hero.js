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
              I'm an experienced UX consultant and practitioner based in Cheltenham, UK.  I'm available to work on small design or research projects.  I'm also available to help on a consultancy basis, using my experience as a UX design manager and design system product owner.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
