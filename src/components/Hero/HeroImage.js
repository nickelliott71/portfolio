import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const HeroImage = (props) => (
  <>
    <Section row nopadding>
      <Image
          src="/images/website-logo.png"
          width={400}
          height={400}
          alt=""
        />
    </Section>
  </>
);

export default HeroImage;
