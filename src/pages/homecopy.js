import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
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
        <Image
        src="/images/website-logo.png"
        width={200}
        height={200}
        alt=""
      />
        <BgAnimation />
      </Section>
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default HomeCopy;
