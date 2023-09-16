import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Hero from '../components/HeroImage/HeroImage';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Image from 'next/image';

const HomeCopy = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <HeroImage/>
      </Section>
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default HomeCopy;
