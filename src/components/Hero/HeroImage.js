import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionImage } from './HeroStyles';
import Image from 'next/image';

const HeroImage = (props) => (
  <>
    <Section row nopadding>
      <SectionImage>
        <Image
            src="/images/website-logo.png"
            width={250}
            height={250}
            alt=""
          />
        </SectionImage>
    </Section>
  </>
);

export default HeroImage;
