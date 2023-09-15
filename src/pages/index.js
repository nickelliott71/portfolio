
import Image from 'next/image';
import { Container } from '../layout/LayoutStyles'


const Home = () => {
  return (
    <div style="text-align: center;
    margin-top: 2em;
    font-size: 2em;">
    <Container>
      <Image
        src="/images/website-logo.png"
        width={200}
        height={200}
        alt=""
      />
      <p>Coming soon...</p>
    </Container>
    </div>
  );
};

export default Home;
