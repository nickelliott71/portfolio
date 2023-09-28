import ContactTemp from '../components/Contact/ContactTemp';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import HeroImage from '../components/Hero/HeroImage';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Index = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <HeroImage/>
      </Section>
      <Technologies />
      <Timeline />
      <ContactTemp />
    </Layout>
  );
};

export default Index;
