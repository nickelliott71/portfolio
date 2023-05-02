import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there,
        </SectionTitle>
        <SectionText>
                    I'm Nick Elliott.  I am also an experienced Lead UX designer from Cheltenham, UK.  I currently work as a Design System Product Manager at Iress. I'm passionate about creating stress-free experiences and making the complex, simple. I enjoy working on enterprise systems, working collaboratively wtih smart people.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
