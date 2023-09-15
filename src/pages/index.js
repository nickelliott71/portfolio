import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Image from 'next/image';


const Home = () => {
  return (
    <Layout>
      <Section grid>
      <Image
        src="/images/website-logo.png"
        width={200}
        height={200}
        alt=""
      />
      </Section>
    </Layout>
  );
};

export default Home;
