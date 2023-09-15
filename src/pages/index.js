
import Image from 'next/image';
import { Container } from './LayoutStyles'


const Home = () => {
  return (
    <Container>
      <Image
        src="/images/website-logo.png"
        width={200}
        height={200}
        alt=""
      />
      <p>Coming soon...</p>
    </Container>
  );
};

export default Home;
